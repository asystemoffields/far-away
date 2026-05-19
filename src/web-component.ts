// Custom Element wrapper: <damit-viewer> as a drop-in HTML tag.
//
// Two usage modes, both supported by the same element:
//
//   1. Explicit URLs (always works, no CORS concerns when same-origin):
//        <damit-viewer
//          shape-url="/path/to/shape.obj"
//          lc-url="/path/to/lc.json"
//          period-hours="5.55128"
//          pole-lambda="293" pole-beta="-34"
//          jd0="2443032.5"
//          refit-pole>
//        </damit-viewer>
//
//   2. By DAMIT identifiers (requires DAMIT to set
//      Access-Control-Allow-Origin on those endpoints, or `damit-base`
//      pointed at a same-origin proxy):
//        <damit-viewer model-id="103" asteroid-id="102" refit-pole>
//        </damit-viewer>
//      Note: shape is keyed by DAMIT *model* id; the light curves are
//      keyed by *asteroid* id (one asteroid can have multiple models).
//      Resolved URLs are:
//         shape: <damit-base>/generated_files/open/AsteroidModel/<model-id>/shape.obj
//         lc:    <damit-base>/light_curves/exportAllForAsteroid/<asteroid-id>/json
//
// The element loads its data when connected (or on attribute change), runs
// the optional pole+phase fit, and mounts the existing widget into its
// shadow root for full CSS isolation from the host page.

import {
  mount,
  parseShapeTxt,
  parseLcTxt,
  parseLcJson,
  parseObj,
  fitPoleAndPhase,
  buildFacetGeometry,
  injectStylesIntoShadow,
  type AsteroidModel,
  type SpinState,
  type ViewerHandle,
} from './widget.ts';

const DEFAULT_DAMIT_BASE = 'https://damit.cuni.cz';

interface AttrConfig {
  /** Explicit URL for the shape file (.obj or DAMIT shape.txt). */
  shapeUrl?: string;
  /** Explicit URL for the light-curve file (json or DAMIT lc.txt). */
  lcUrl?: string;
  /** DAMIT model id; combined with `damitBase` to resolve the shape URL.
   *  (Note: in DAMIT a single asteroid can have multiple shape models.) */
  modelId?: number;
  /** DAMIT asteroid id; combined with `damitBase` to resolve the LC URL.
   *  Distinct from model-id; required when using the model-id form. */
  asteroidId?: number;
  /** Base URL of the DAMIT instance (or a CORS-friendly proxy). */
  damitBase: string;
  poleLambdaDeg?: number;
  poleBetaDeg?: number;
  periodHours?: number;
  jd0?: number;
  refitPole: boolean;
  lambertC: number;
  name?: string;
  initialLcIndex?: number;
  initialView?: 'free' | 'earth';
}

class DamitViewerElement extends HTMLElement {
  static get observedAttributes(): string[] {
    // Display-only attributes (`name`, `initial-lc-index`, `initial-view`)
    // are intentionally excluded: changing them shouldn't trigger a
    // full data reload + pole-fit. They are still consumed at mount
    // time via #readAttrs().
    return [
      'shape-url', 'lc-url', 'model-id', 'asteroid-id', 'damit-base',
      'pole-lambda', 'pole-beta', 'period-hours', 'jd0',
      'refit-pole', 'lambert-c',
    ];
  }

  #shadow: ShadowRoot;
  #host: HTMLDivElement;
  #status: HTMLDivElement;
  #handle: ViewerHandle | undefined;
  #loadGen = 0;

  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    // The shadow root needs its own copy of the widget's stylesheet,
    // since document.head styles do not pierce shadow boundaries.
    injectStylesIntoShadow(this.#shadow);
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:block;width:100%;height:100%;min-height:480px;position:relative;';
    this.#host = document.createElement('div');
    this.#host.style.cssText = 'width:100%;height:100%;';
    this.#status = document.createElement('div');
    this.#status.style.cssText = [
      'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;',
      'color:#9aa3b2;font:13px ui-sans-serif,system-ui,sans-serif;background:#0b0d12;',
      'border-radius:8px;pointer-events:none;',
    ].join('');
    this.#status.textContent = '';
    wrapper.appendChild(this.#host);
    wrapper.appendChild(this.#status);
    this.#shadow.appendChild(wrapper);
  }

  connectedCallback(): void {
    // Default sizing: act like an inline-block but full-width by default;
    // host pages can override via standard CSS on the <damit-viewer> tag.
    if (!this.style.display) this.style.display = 'block';
    if (!this.style.width) this.style.width = '100%';
    if (!this.style.minHeight) this.style.minHeight = '480px';
    void this.#reload();
  }

  disconnectedCallback(): void {
    // Bump the generation counter so any in-flight #reload — including
    // its synchronous fitPoleAndPhase block — discards its result
    // instead of mounting a fresh widget on a now-detached host (which
    // would leak a WebGL context per reconnect cycle).
    this.#loadGen++;
    if (this.#handle) {
      this.#handle.dispose();
      this.#handle = undefined;
    }
  }

  attributeChangedCallback(_name: string, oldVal: string | null, newVal: string | null): void {
    if (oldVal === newVal) return;
    // Re-load on any observed (data-affecting) attribute change. The
    // observedAttributes list deliberately excludes display-only
    // attributes like `name` — changing those takes effect on the next
    // mount, not via an expensive reload + pole-fit.
    if (this.isConnected) void this.#reload();
  }

  /** Read attributes into a typed config. */
  #readAttrs(): AttrConfig {
    const num = (n: string): number | undefined => {
      const a = this.getAttribute(n);
      if (a === null) return undefined;
      const v = Number(a);
      return Number.isFinite(v) ? v : undefined;
    };
    return {
      shapeUrl: this.getAttribute('shape-url') ?? undefined,
      lcUrl: this.getAttribute('lc-url') ?? undefined,
      modelId: num('model-id'),
      asteroidId: num('asteroid-id'),
      damitBase: this.getAttribute('damit-base') ?? DEFAULT_DAMIT_BASE,
      poleLambdaDeg: num('pole-lambda'),
      poleBetaDeg: num('pole-beta'),
      periodHours: num('period-hours'),
      jd0: num('jd0'),
      refitPole: this.hasAttribute('refit-pole'),
      lambertC: num('lambert-c') ?? 0.1,
      name: this.getAttribute('name') ?? undefined,
      initialLcIndex: num('initial-lc-index'),
      initialView: (this.getAttribute('initial-view') as 'free' | 'earth' | null) ?? undefined,
    };
  }

  /** Resolve the (shape, lc) URLs from the attribute set, applying the
   *  canonical DAMIT URL pattern when only IDs are given. Returns
   *  undefined for fields that can't be derived — the caller surfaces
   *  the error in the UI. */
  #resolveUrls(cfg: AttrConfig): { shapeUrl?: string; lcUrl?: string; assumedPattern?: boolean } {
    const base = cfg.damitBase.replace(/\/+$/, '');
    const shapeUrl = cfg.shapeUrl
      ?? (cfg.modelId !== undefined
        ? `${base}/generated_files/open/AsteroidModel/${cfg.modelId}/shape.obj`
        : undefined);
    const lcUrl = cfg.lcUrl
      ?? (cfg.asteroidId !== undefined
        ? `${base}/light_curves/exportAllForAsteroid/${cfg.asteroidId}/json`
        : undefined);
    const assumedPattern = !cfg.shapeUrl || !cfg.lcUrl;
    return { shapeUrl, lcUrl, assumedPattern };
  }

  async #reload(): Promise<void> {
    const gen = ++this.#loadGen;
    const cfg = this.#readAttrs();
    const urls = this.#resolveUrls(cfg);
    if (!urls.shapeUrl || !urls.lcUrl) {
      this.#showStatus(
        'Set either shape-url + lc-url, or model-id + asteroid-id ' +
        '(with optional damit-base for proxies).',
      );
      return;
    }
    this.#showStatus('loading…');
    try {
      const [shapeText, lcText] = await Promise.all([
        fetchTextWithHint(urls.shapeUrl, urls.assumedPattern),
        fetchTextWithHint(urls.lcUrl, urls.assumedPattern),
      ]);
      if (gen !== this.#loadGen) return; // stale: attribute changed again
      // Shape autodetect: Wavefront OBJ (lines starting with `v `, `vn`,
      // `vt`, `f `) vs DAMIT shape.txt (header line of two integers).
      const shape = looksLikeObj(shapeText) ? parseObj(shapeText) : parseShapeTxt(shapeText);
      // LC autodetect: JSON if the trimmed text starts with `{` or `[`,
      // otherwise the DAMIT plaintext lc.txt format.
      const lcTrimmed = lcText.trimStart();
      const lightCurves = (lcTrimmed.startsWith('[') || lcTrimmed.startsWith('{'))
        ? parseLcJson(JSON.parse(lcText))
        : parseLcTxt(lcText);
      const scattering = { lambertWeight: cfg.lambertC };

      // Spin: published values from attributes if given, defaulting to
      // sensible placeholders when missing. If `refit-pole` is set, the
      // optimiser overrides these.
      const seed: SpinState = {
        poleLambdaDeg: cfg.poleLambdaDeg ?? 0,
        poleBetaDeg:   cfg.poleBetaDeg   ?? 0,
        periodHours:   cfg.periodHours   ?? 0, // 0 → optimiser can't run; warn
        jd0:           cfg.jd0           ?? (lightCurves[0]?.points[0]?.jd ?? 0),
      };
      if (cfg.refitPole && seed.periodHours <= 0) {
        throw new Error(
          'refit-pole requires period-hours to be set (the optimiser ' +
          'searches over pole and JD0 but holds period fixed).',
        );
      }
      let spin: SpinState = seed;
      let publishedSpin: SpinState | undefined;
      let fitRms: number | undefined;
      if (cfg.refitPole) {
        const facets = buildFacetGeometry(shape);
        const subset = lightCurves
          .slice()
          .sort((a, b) => b.points.length - a.points.length)
          .slice(0, 5);
        const fit = fitPoleAndPhase(facets, seed, scattering, subset);
        publishedSpin = seed;
        spin = {
          ...seed,
          poleLambdaDeg: fit.poleLambdaDeg,
          poleBetaDeg: fit.poleBetaDeg,
          jd0: fit.jd0,
        };
        fitRms = fit.rms;
      }
      // Final gate before mount: bail if the element was disconnected or
      // a fresher reload superseded us during the fit. Without this guard,
      // mount() runs on a detached host and starts a rAF loop that leaks
      // a WebGL context until garbage collection.
      if (gen !== this.#loadGen || !this.isConnected) return;

      const model: AsteroidModel = {
        name: cfg.name ?? (cfg.modelId !== undefined ? `DAMIT #${cfg.modelId}` : 'Asteroid'),
        damitId: cfg.modelId,
        shape,
        spin,
        lightCurves,
        scattering,
        publishedSpin,
        fitRms,
      };
      // Tear down any prior mount before installing the new one.
      if (this.#handle) this.#handle.dispose();
      this.#handle = mount(this.#host, model, {
        initialLightCurveIndex: cfg.initialLcIndex ?? 0,
        initialViewMode: cfg.initialView ?? 'free',
      });
      this.#hideStatus();
    } catch (err) {
      if (gen !== this.#loadGen) return;
      const msg = (err as Error).message;
      const hint = urls.assumedPattern
        ? ' (The model-id / asteroid-id form assumes ' +
          '<damit-base>/generated_files/open/AsteroidModel/<model-id>/shape.obj ' +
          'and <damit-base>/light_curves/exportAllForAsteroid/<asteroid-id>/json. ' +
          'If your DAMIT instance uses a different path or this fetch is ' +
          'CORS-blocked, set shape-url and lc-url explicitly to same-origin ' +
          'URLs your page can fetch.)'
        : '';
      this.#showStatus(`error: ${msg}${hint}`);
    }
  }

  #showStatus(text: string): void {
    this.#status.textContent = text;
    this.#status.style.display = '';
  }
  #hideStatus(): void {
    this.#status.textContent = '';
    this.#status.style.display = 'none';
  }
}

/** Distinguish a Wavefront .obj from a DAMIT shape.txt. The two clear
 *  signals: an OBJ has at least one `v <float> <float> <float>` line in
 *  its prelude, while a DAMIT shape.txt's first non-blank line is two
 *  integers ("nVerts nFaces"). Common .obj prologue lines like `o name`,
 *  `g group`, `mtllib …`, `usemtl …`, `s 1` are NOT decisive on their
 *  own — we have to scan past them and look for a real vertex line. */
function looksLikeObj(text: string): boolean {
  const lines = text.slice(0, 2000).split(/\r?\n/).slice(0, 40);
  for (const line of lines) {
    const t = line.trim();
    if (t.length === 0 || t.startsWith('#')) continue;
    // Decisive: a vertex / vertex-normal / vertex-texture line is OBJ.
    if (/^v[ \t]/.test(t) || /^vn[ \t]/.test(t) || /^vt[ \t]/.test(t)) return true;
    // OBJ prologue markers — neutral, keep scanning.
    if (/^(o|g|s|mtllib|usemtl)[ \t]/.test(t)) continue;
    // First non-prologue, non-vertex line: this is a shape.txt header
    // (two integers) OR something unknown; either way, not OBJ.
    return false;
  }
  return false;
}

async function fetchTextWithHint(url: string, assumedPattern?: boolean): Promise<string> {
  let res: Response;
  try {
    res = await fetch(url);
  } catch (e) {
    const eMsg = (e as Error).message;
    // CORS / network errors come back as TypeError with limited info.
    // Annotate with a hint specifically for the model-id default-pattern
    // case where CORS-on-DAMIT is the most likely root cause.
    throw new Error(
      `Network fetch failed for ${url}: ${eMsg}.` +
      (assumedPattern
        ? ' If DAMIT does not yet set Access-Control-Allow-Origin, proxy the request through your own domain or use shape-src/lc-src with same-origin paths.'
        : ''),
    );
  }
  if (!res.ok) throw new Error(`Fetch ${url} → HTTP ${res.status}`);
  return res.text();
}

if (typeof window !== 'undefined' && 'customElements' in window) {
  if (!window.customElements.get('damit-viewer')) {
    window.customElements.define('damit-viewer', DamitViewerElement);
  }
}

export { DamitViewerElement };

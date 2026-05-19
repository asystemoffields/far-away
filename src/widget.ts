// Public embeddable widget API.
//
// Usage as ES module:
//   import { mount } from 'damit-viewer';
//   const handle = mount(document.getElementById('host'), model);
//
// Usage as UMD (script tag):
//   <script src="damit-viewer.umd.js"></script>
//   <script>const handle = DAMITViewer.mount(host, model);</script>
//
// `model` is an AsteroidModel (see core/types.ts). The widget lays out the
// 3D view and light-curve plot side-by-side, responsive down to a stacked
// phone layout below 720px. CSS is inlined into this bundle and injected
// on first mount, so a single script tag is sufficient — embedders do not
// need to load a separate stylesheet.

import uplotCss from 'uplot/dist/uPlot.min.css?inline';
import widgetCss from './widget.css?inline';

import { buildScene, type SceneHandle } from './render/three-scene.ts';
import { buildPlot, type PlotHandle } from './plot/lightcurve-plot.ts';
import { buildFacetGeometry, type FacetGeometry } from './core/geometry.ts';
import {
  fitPhaseOffset,
  leastSquaresScale,
  predictCurve,
  rmsResidual,
} from './core/photometry.ts';
import type {
  AsteroidModel,
  LightCurve,
  LightCurvePoint,
  SpinState,
  Vec3,
} from './core/types.ts';

export interface ViewerHandle {
  /** Switch to the curve at the given array index (0-based). Use this
   *  when iterating over `getModel().lightCurves`. */
  setLightCurveByIndex(index: number): void;
  /** Switch to the curve with the given `id` field. DAMIT light-curve
   *  ids are dense 1-based integers, so a separate setter avoids the
   *  index-vs-id ambiguity. */
  setLightCurveById(id: number): void;
  setJd(jd: number): void;
  play(realtimeMultiplier?: number): void;
  pause(): void;
  setScatteringC(c: number): void;
  setViewMode(mode: 'free' | 'earth'): void;
  /** Returns a deeply-frozen view of the AsteroidModel currently
   *  displayed. Mutating this would not invalidate internal caches; the
   *  freeze prevents accidental mis-use. */
  getModel(): Readonly<AsteroidModel>;
  dispose(): void;
}

export interface MountOptions {
  /** Light-curve index to show first; defaults to 0. */
  initialLightCurveIndex?: number;
  /** Show built-in controls (curve picker, play/pause, c slider). Default true. */
  showControls?: boolean;
  /** Default view mode for the 3D panel. */
  initialViewMode?: 'free' | 'earth';
  /** Auto-fit per-LC rotation phase against the observed data. Default true.
   *  Required when (shape, LC) pairs do not share a published JD0 convention
   *  (common when pairing a DAMIT shape with an LC file from a different
   *  paper). When false the model uses spin.jd0 verbatim. */
  fitPhasePerLightCurve?: boolean;
}

export function mount(
  container: HTMLElement,
  model: AsteroidModel,
  opts: MountOptions = {},
): ViewerHandle {
  // Mount must be idempotent: if a previous instance is still attached,
  // dispose it cleanly before installing the new one. Embedders that swap
  // models on the same container would otherwise leak the previous
  // instance's rAF loop, ResizeObserver, and pointer listeners.
  const prior = (container as { __damitViewerDispose?: () => void }).__damitViewerDispose;
  if (typeof prior === 'function') prior();
  injectStylesOnce();
  container.classList.add('damit-viewer-host');
  container.textContent = '';

  const root = document.createElement('div');
  root.className = 'damit-viewer-root';
  container.appendChild(root);

  const headerEl = document.createElement('div');
  headerEl.className = 'dv-header';
  const titleEl = document.createElement('div');
  titleEl.className = 'dv-title';
  titleEl.textContent = model.name;
  const metaEl = document.createElement('div');
  metaEl.className = 'dv-meta';
  metaEl.appendChild(document.createTextNode(`P = ${model.spin.periodHours.toFixed(5)} h · `));
  // Pole readout. If the spin was auto-fit, show "auto-fit (λ, β) ←
  // published (λ, β)" so the provenance is visible — silently overwriting
  // the catalog pole would be a credibility problem with researchers.
  const polEl = document.createElement('span');
  if (
    model.publishedSpin &&
    (Math.abs(model.publishedSpin.poleLambdaDeg - model.spin.poleLambdaDeg) > 0.5 ||
     Math.abs(model.publishedSpin.poleBetaDeg - model.spin.poleBetaDeg) > 0.5)
  ) {
    const ps = model.publishedSpin;
    polEl.textContent =
      `pole (λ, β): auto-fit (${model.spin.poleLambdaDeg.toFixed(0)}°, ${model.spin.poleBetaDeg.toFixed(0)}°)` +
      ` ← published (${ps.poleLambdaDeg.toFixed(0)}°, ${ps.poleBetaDeg.toFixed(0)}°)`;
    polEl.title =
      'The shape file does not advertise the pole it was inverted with, ' +
      'so the auto-fit pole shown is the one consistent with the bundled ' +
      'observations. The published pole is from the original paper for the asteroid.';
  } else {
    polEl.textContent =
      `pole (λ, β) = (${model.spin.poleLambdaDeg.toFixed(1)}°, ${model.spin.poleBetaDeg.toFixed(1)}°)`;
  }
  metaEl.appendChild(polEl);
  if (model.fitRms !== undefined) {
    metaEl.appendChild(document.createTextNode(` · fit RMS ${(model.fitRms * 100).toFixed(2)}%`));
  }
  if (model.damitId !== undefined) {
    metaEl.appendChild(document.createTextNode(` · DAMIT #${model.damitId}`));
  }
  headerEl.appendChild(titleEl);
  headerEl.appendChild(metaEl);
  root.appendChild(headerEl);

  const split = document.createElement('div');
  split.className = 'dv-split';
  root.appendChild(split);

  const sceneCol = document.createElement('div');
  sceneCol.className = 'dv-scene-col';
  split.appendChild(sceneCol);

  const sceneHost = document.createElement('div');
  sceneHost.className = 'dv-scene';
  sceneCol.appendChild(sceneHost);

  const plotCol = document.createElement('div');
  plotCol.className = 'dv-plot-col';
  split.appendChild(plotCol);

  const plotHost = document.createElement('div');
  plotHost.className = 'dv-plot';
  plotCol.appendChild(plotHost);

  // Initial light curve.
  const facets: FacetGeometry = buildFacetGeometry(model.shape);
  const initialIdx = clampIndex(opts.initialLightCurveIndex ?? 0, model.lightCurves.length);
  if (model.lightCurves.length === 0) {
    throw new Error('AsteroidModel has no light curves.');
  }
  const fitPhase = opts.fitPhasePerLightCurve ?? true;
  let lcIdx = initialIdx;
  let currentLc: LightCurve = model.lightCurves[lcIdx]!;
  // Effective spin for the current LC (may include a phase offset).
  let effectiveSpin: SpinState = computeEffectiveSpin(model.spin, fitPhase, facets, model.scattering, currentLc);
  let predicted = predictCurve(facets, effectiveSpin, model.scattering, currentLc);
  let scale = leastSquaresScale(predicted, currentLc.points);
  let rms = computeRms(predicted, scale, currentLc);
  let currentJd = currentLc.points[0]?.jd ?? effectiveSpin.jd0;

  // Footer for citation / residual.
  const footer = document.createElement('div');
  footer.className = 'dv-footer';
  plotCol.appendChild(footer);
  const updateFooter = (): void => {
    const obs = currentLc.points;
    const rangeMean = obs.length > 0
      ? obs.reduce((a, p) => a + p.intensity, 0) / obs.length
      : 1;
    const rmsPct = rangeMean > 0 ? (rms / rangeMean) * 100 : 0;
    footer.textContent = '';
    const lcSpan = document.createElement('span');
    lcSpan.textContent =
      `LC #${currentLc.id} · ${currentLc.points.length} obs · ` +
      `${currentLc.calibrated ? 'calibrated' : 'relative'} · RMS ${rmsPct.toFixed(2)}%`;
    footer.appendChild(lcSpan);
    if (model.citation) {
      const citeSpan = document.createElement('span');
      citeSpan.className = 'dv-cite';
      citeSpan.textContent = model.citation;
      footer.appendChild(citeSpan);
    }
  };
  updateFooter();

  // Pass the effective spin (with per-LC phase offset) to the scene so the
  // rendered orientation matches what the photometric model is computing.
  const sceneModel: AsteroidModel = { ...model, spin: effectiveSpin };
  // Forward-declare so the scene callback can reach back into the
  // controls (declared further down) to keep the dropdown in sync when
  // the scene auto-switches modes (e.g. earth → free on first drag).
  let viewSelectRef: HTMLSelectElement | undefined;
  const scene: SceneHandle = buildScene(sceneHost, sceneModel, {
    onViewModeChange: (mode) => {
      if (viewSelectRef && viewSelectRef.value !== mode) {
        viewSelectRef.value = mode;
      }
    },
  });
  scene.setJd(currentJd);
  scene.setSunEarth(currentLc.points[0]!.sun, currentLc.points[0]!.earth);

  const plot: PlotHandle = buildPlot(
    plotHost,
    currentLc,
    predicted,
    scale,
    { onScrub: (jd) => updateJd(jd) },
  );

  let playing = false;
  // Real-time multiplier: how many seconds of LC time pass per real second
  // of wall clock. At 600× one rotation of an ~6-hour LC completes in ~36s
  // of wall clock — fast enough to see the body rotating and the predicted
  // curve trace out, but slow enough to inspect any individual phase. The
  // earlier default of 60 made the JD marker advance only ~2 px/s, which
  // looked frozen.
  let realtimeMul = 600;
  let lastWall = 0;
  let rafId = 0;
  const playLoop = (t: number): void => {
    if (!playing) return;
    if (lastWall === 0) lastWall = t;
    const dtWall = (t - lastWall) / 1000;
    lastWall = t;
    const newJd = currentJd + (dtWall * realtimeMul) / 86400;
    // Wrap within the curve so the user keeps seeing motion.
    const start = currentLc.points[0]!.jd;
    const end = currentLc.points[currentLc.points.length - 1]!.jd;
    const wrapped = end > start
      ? start + ((newJd - start) % (end - start) + (end - start)) % (end - start)
      : newJd;
    updateJd(wrapped);
    rafId = requestAnimationFrame(playLoop);
  };

  function updateJd(jd: number): void {
    currentJd = jd;
    const { sun, earth } = interpSunEarth(currentLc, jd);
    scene.setJd(jd);
    scene.setSunEarth(sun, earth);
    plot.setJd(jd);
  }

  function changeLightCurve(newIdx: number): void {
    lcIdx = clampIndex(newIdx, model.lightCurves.length);
    currentLc = model.lightCurves[lcIdx]!;
    effectiveSpin = computeEffectiveSpin(model.spin, fitPhase, facets, model.scattering, currentLc);
    predicted = predictCurve(facets, effectiveSpin, model.scattering, currentLc);
    scale = leastSquaresScale(predicted, currentLc.points);
    rms = computeRms(predicted, scale, currentLc);
    currentJd = currentLc.points[0]!.jd;
    plot.update(currentLc, predicted, scale);
    scene.setSpin(effectiveSpin);
    scene.setJd(currentJd);
    scene.setSunEarth(currentLc.points[0]!.sun, currentLc.points[0]!.earth);
    if (curveSelect) curveSelect.value = String(lcIdx);
    updateFooter();
  }

  // Controls.
  let curveSelect: HTMLSelectElement | undefined;
  if (opts.showControls !== false) {
    const controls = document.createElement('div');
    controls.className = 'dv-controls';
    plotCol.appendChild(controls);

    curveSelect = document.createElement('select');
    curveSelect.className = 'dv-select';
    curveSelect.setAttribute('aria-label', 'Choose which light curve to display');
    for (let i = 0; i < model.lightCurves.length; i++) {
      const lc = model.lightCurves[i]!;
      const t0 = lc.points[0]?.jd ?? 0;
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = `LC #${lc.id} — JD ${t0.toFixed(2)} (${lc.points.length} obs)`;
      curveSelect.appendChild(opt);
    }
    curveSelect.value = String(lcIdx);
    curveSelect.addEventListener('change', () => changeLightCurve(Number(curveSelect!.value)));
    controls.appendChild(labeled('curve', curveSelect));

    const playBtn = document.createElement('button');
    playBtn.className = 'dv-btn';
    playBtn.type = 'button';
    playBtn.textContent = '▶ play';
    playBtn.setAttribute('aria-label', 'Play the asteroid rotation animation');
    playBtn.setAttribute('aria-pressed', 'false');
    const prefersReducedMotion = (typeof window !== 'undefined'
      && typeof window.matchMedia === 'function')
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const applyReducedMotion = (): void => {
      if (prefersReducedMotion?.matches) {
        playBtn.disabled = true;
        playBtn.title = 'Animation disabled — prefers-reduced-motion is set in your OS or browser.';
        if (playing) {
          playing = false;
          cancelAnimationFrame(rafId);
          playBtn.textContent = '▶ play';
          playBtn.setAttribute('aria-pressed', 'false');
        }
      } else {
        playBtn.disabled = false;
        playBtn.title = '';
      }
    };
    applyReducedMotion();
    prefersReducedMotion?.addEventListener?.('change', applyReducedMotion);
    playBtn.addEventListener('click', () => {
      if (playing) {
        playing = false;
        cancelAnimationFrame(rafId);
        playBtn.textContent = '▶ play';
        playBtn.setAttribute('aria-pressed', 'false');
        playBtn.setAttribute('aria-label', 'Play the asteroid rotation animation');
      } else {
        playing = true;
        lastWall = 0;
        rafId = requestAnimationFrame(playLoop);
        playBtn.textContent = '⏸ pause';
        playBtn.setAttribute('aria-pressed', 'true');
        playBtn.setAttribute('aria-label', 'Pause the asteroid rotation animation');
      }
    });
    controls.appendChild(playBtn);

    const rateLabel = document.createElement('label');
    rateLabel.className = 'dv-range-label';
    rateLabel.textContent = 'speed (×)';
    const rateInput = document.createElement('input');
    rateInput.type = 'range';
    rateInput.min = '60'; rateInput.max = '3600'; rateInput.step = '60';
    rateInput.value = String(realtimeMul);
    rateInput.setAttribute('aria-label', 'Animation speed multiplier, times real time');
    rateInput.setAttribute('aria-valuetext', `${realtimeMul} times real time`);
    rateInput.addEventListener('input', () => {
      realtimeMul = Number(rateInput.value);
      rateInput.setAttribute('aria-valuetext', `${realtimeMul} times real time`);
    });
    rateLabel.appendChild(rateInput);
    controls.appendChild(rateLabel);

    const viewSelect = document.createElement('select');
    viewSelect.className = 'dv-select';
    viewSelect.setAttribute('aria-label', '3D camera mode');
    const freeOpt = document.createElement('option');
    freeOpt.value = 'free'; freeOpt.textContent = 'free orbit';
    const earthOpt = document.createElement('option');
    earthOpt.value = 'earth'; earthOpt.textContent = 'view from Earth';
    viewSelect.appendChild(freeOpt);
    viewSelect.appendChild(earthOpt);
    viewSelect.value = opts.initialViewMode ?? 'free';
    viewSelectRef = viewSelect;
    viewSelect.addEventListener('change', () => {
      scene.setViewMode(viewSelect.value as 'free' | 'earth');
    });
    controls.appendChild(labeled('camera', viewSelect));

    const cLabel = document.createElement('label');
    cLabel.className = 'dv-range-label';
    const cText = document.createTextNode(`c = ${model.scattering.lambertWeight.toFixed(2)} `);
    cLabel.appendChild(cText);
    const cInput = document.createElement('input');
    cInput.type = 'range';
    cInput.min = '0'; cInput.max = '0.5'; cInput.step = '0.01';
    cInput.value = String(model.scattering.lambertWeight);
    cInput.setAttribute(
      'aria-label',
      'Lambert weighting coefficient c in the Lommel-Seeliger + Lambert scattering model',
    );
    cInput.setAttribute(
      'aria-valuetext',
      `c equals ${model.scattering.lambertWeight.toFixed(2)}`,
    );
    cInput.addEventListener('input', () => {
      model.scattering.lambertWeight = Number(cInput.value);
      cText.nodeValue = `c = ${model.scattering.lambertWeight.toFixed(2)} `;
      cInput.setAttribute(
        'aria-valuetext',
        `c equals ${model.scattering.lambertWeight.toFixed(2)}`,
      );
      predicted = predictCurve(facets, effectiveSpin, model.scattering, currentLc);
      scale = leastSquaresScale(predicted, currentLc.points);
      rms = computeRms(predicted, scale, currentLc);
      plot.update(currentLc, predicted, scale);
      updateFooter();
    });
    cLabel.appendChild(cInput);
    controls.appendChild(cLabel);
  }

  if (opts.initialViewMode === 'earth') scene.setViewMode('earth');

  const ro = new ResizeObserver(() => {
    const sw = sceneHost.clientWidth, sh = sceneHost.clientHeight;
    if (sw > 0 && sh > 0) scene.resize(sw, sh);
    const pw = plotHost.clientWidth, ph = plotHost.clientHeight;
    if (pw > 0 && ph > 0) plot.resize(pw, ph);
  });
  ro.observe(sceneHost);
  ro.observe(plotHost);

  const handle: ViewerHandle = {
    setLightCurveByIndex: (index) => changeLightCurve(index),
    setLightCurveById: (id) => {
      const idx = model.lightCurves.findIndex((lc) => lc.id === id);
      if (idx >= 0) changeLightCurve(idx);
    },
    setJd: updateJd,
    play: (rate) => {
      if (rate !== undefined) realtimeMul = rate;
      if (!playing) {
        playing = true;
        lastWall = 0;
        rafId = requestAnimationFrame(playLoop);
      }
    },
    pause: () => {
      playing = false;
      cancelAnimationFrame(rafId);
    },
    setScatteringC: (c) => {
      model.scattering.lambertWeight = c;
      predicted = predictCurve(facets, effectiveSpin, model.scattering, currentLc);
      scale = leastSquaresScale(predicted, currentLc.points);
      rms = computeRms(predicted, scale, currentLc);
      plot.update(currentLc, predicted, scale);
      updateFooter();
    },
    setViewMode: (mode) => scene.setViewMode(mode),
    getModel: () => deepFreeze(model),
    dispose: () => {
      playing = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      plot.dispose();
      scene.dispose();
      delete (container as { __damitViewerDispose?: () => void }).__damitViewerDispose;
      container.classList.remove('damit-viewer-host');
      container.textContent = '';
    },
  };
  // Register the dispose hook so a future mount() on the same container
  // tears this instance down automatically.
  (container as { __damitViewerDispose?: () => void }).__damitViewerDispose =
    handle.dispose;
  return handle;
}

/** Inject the bundled CSS into the document head on first mount. Doing
 *  this at runtime (rather than as a side-effect of importing the JS)
 *  means embedders who server-side-render or lazy-load the widget don't
 *  hit Flash-of-Unstyled-Content at parse time, and we only pay the cost
 *  when a viewer is actually instantiated. */
let stylesInjected = false;
function injectStylesOnce(): void {
  if (stylesInjected) return;
  stylesInjected = true;
  if (typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-damit-viewer', '');
  style.textContent = uplotCss + '\n' + widgetCss;
  // Prepend to <head> so embedder's own styles (loaded later in the
  // document) win on ties — important because our own selectors are
  // intentionally low-specificity to play nicely.
  if (document.head.firstChild) {
    document.head.insertBefore(style, document.head.firstChild);
  } else {
    document.head.appendChild(style);
  }
}

/** Shallow-freeze the model and its nested spin/scattering objects. Light
 *  curves and shape arrays stay as-is — they are large and the freeze cost
 *  isn't worth it for typed arrays — but the top-level interface that
 *  embedders are likely to fiddle with is locked. */
function deepFreeze<T extends object>(o: T): Readonly<T> {
  Object.freeze(o);
  for (const k of Object.keys(o) as (keyof T)[]) {
    const v = o[k];
    if (v && typeof v === 'object' && !ArrayBuffer.isView(v) && !Array.isArray(v) && !Object.isFrozen(v)) {
      Object.freeze(v);
    }
  }
  return o;
}

function clampIndex(i: number, n: number): number {
  if (n <= 0) return 0;
  return Math.max(0, Math.min(n - 1, Math.floor(i)));
}

function labeled(label: string, control: HTMLElement): HTMLLabelElement {
  const l = document.createElement('label');
  l.className = 'dv-labeled';
  l.appendChild(document.createTextNode(label));
  l.appendChild(control);
  return l;
}

/** Linearly interpolate Sun and Earth vectors at an arbitrary JD between the
 *  curve's observed samples. Within a single observing session both vectors
 *  move very slowly, so linear interpolation is accurate to small fractions
 *  of a per-cent. Outside [t0, tN] the function clamps to the endpoints. */
function interpSunEarth(curve: LightCurve, jd: number): { sun: Vec3; earth: Vec3 } {
  const pts = curve.points;
  if (pts.length === 0) return { sun: { x: 0, y: 0, z: 0 }, earth: { x: 0, y: 0, z: 0 } };
  if (pts.length === 1 || jd <= pts[0]!.jd) {
    const p = pts[0]!;
    return { sun: p.sun, earth: p.earth };
  }
  if (jd >= pts[pts.length - 1]!.jd) {
    const p = pts[pts.length - 1]!;
    return { sun: p.sun, earth: p.earth };
  }
  // Binary search for the interval containing jd.
  let lo = 0, hi = pts.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (pts[mid]!.jd <= jd) lo = mid; else hi = mid;
  }
  const a = pts[lo]!;
  const b = pts[hi]!;
  const t = (jd - a.jd) / (b.jd - a.jd);
  return {
    sun: lerp(a.sun, b.sun, t),
    earth: lerp(a.earth, b.earth, t),
  };
}

function lerp(a: LightCurvePoint['sun'], b: LightCurvePoint['sun'], t: number): Vec3 {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

function computeEffectiveSpin(
  base: SpinState,
  fitPhase: boolean,
  facets: FacetGeometry,
  scattering: AsteroidModel['scattering'],
  curve: LightCurve,
): SpinState {
  if (!fitPhase) return base;
  const fit = fitPhaseOffset(facets, base, scattering, curve);
  // The fit shifts JD0 back by `jdOffset`, so the predicted phase at any
  // JD becomes 2π((JD − JD0 + offset)/P).
  return { ...base, jd0: base.jd0 - fit.jdOffset };
}

function computeRms(predicted: ArrayLike<number>, scale: number, curve: LightCurve): number {
  const scaled = new Float64Array(predicted.length);
  for (let i = 0; i < predicted.length; i++) scaled[i] = predicted[i]! * scale;
  return rmsResidual(scaled, curve.points);
}

export type { AsteroidModel, LightCurve, LightCurvePoint, Vec3, SpinState, ShapeModel } from './core/types.ts';
export { parseShapeTxt, parseLcTxt, parseLcJson, parseObj } from './core/parse.ts';
// Pole-fitting is exposed for embedders who pair a shape file with LCs
// from a different source (different inversion run, different paper).
// Call fitPoleAndPhase once at load with all LCs, then build a SpinState
// from the result before passing the model to mount().
export { fitPoleAndPhase, fitPhaseOffset } from './core/photometry.ts';
export { buildFacetGeometry } from './core/geometry.ts';

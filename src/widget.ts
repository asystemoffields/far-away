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
// `model` is an AsteroidModel (see core/types.ts). The widget will lay out
// the 3D view and light-curve plot side-by-side, responsive down to a
// stacked phone layout below 720px.

import 'uplot/dist/uPlot.min.css';
import './widget.css';

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
  setLightCurve(idOrIndex: number): void;
  setJd(jd: number): void;
  play(realtimeMultiplier?: number): void;
  pause(): void;
  setScatteringC(c: number): void;
  setViewMode(mode: 'free' | 'earth'): void;
  /** Returns the AsteroidModel currently displayed. */
  getModel(): AsteroidModel;
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
  container.classList.add('damit-viewer-host');
  container.innerHTML = '';

  const root = document.createElement('div');
  root.className = 'damit-viewer-root';
  container.appendChild(root);

  const headerEl = document.createElement('div');
  headerEl.className = 'dv-header';
  headerEl.innerHTML = `
    <div class="dv-title">${escapeHtml(model.name)}</div>
    <div class="dv-meta">
      P = ${model.spin.periodHours.toFixed(5)} h ·
      pole (λ, β) = (${model.spin.poleLambdaDeg.toFixed(1)}°, ${model.spin.poleBetaDeg.toFixed(1)}°)
      ${model.damitId !== undefined ? `· DAMIT #${model.damitId}` : ''}
    </div>`;
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
    const cite = model.citation ? `<span class="dv-cite">${escapeHtml(model.citation)}</span>` : '';
    const obs = currentLc.points;
    const rangeMean = obs.length > 0
      ? obs.reduce((a, p) => a + p.intensity, 0) / obs.length
      : 1;
    const rmsPct = rangeMean > 0 ? (rms / rangeMean) * 100 : 0;
    footer.innerHTML = `
      <span>LC #${currentLc.id} · ${currentLc.points.length} obs · ${currentLc.calibrated ? 'calibrated' : 'relative'} · RMS ${rmsPct.toFixed(2)}%</span>
      ${cite}`;
  };
  updateFooter();

  // Pass the effective spin (with per-LC phase offset) to the scene so the
  // rendered orientation matches what the photometric model is computing.
  const sceneModel: AsteroidModel = { ...model, spin: effectiveSpin };
  const scene: SceneHandle = buildScene(sceneHost, sceneModel);
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
  let realtimeMul = 60; // seconds of LC time per real second of wall clock
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
    playBtn.textContent = '▶ play';
    playBtn.addEventListener('click', () => {
      if (playing) {
        playing = false;
        cancelAnimationFrame(rafId);
        playBtn.textContent = '▶ play';
      } else {
        playing = true;
        lastWall = 0;
        rafId = requestAnimationFrame(playLoop);
        playBtn.textContent = '⏸ pause';
      }
    });
    controls.appendChild(playBtn);

    const rateLabel = document.createElement('label');
    rateLabel.className = 'dv-range-label';
    rateLabel.textContent = 'speed';
    const rateInput = document.createElement('input');
    rateInput.type = 'range';
    rateInput.min = '1'; rateInput.max = '600'; rateInput.step = '1';
    rateInput.value = String(realtimeMul);
    rateInput.addEventListener('input', () => { realtimeMul = Number(rateInput.value); });
    rateLabel.appendChild(rateInput);
    controls.appendChild(rateLabel);

    const viewSelect = document.createElement('select');
    viewSelect.className = 'dv-select';
    viewSelect.innerHTML = `<option value="free">free orbit</option><option value="earth">view from Earth</option>`;
    viewSelect.value = opts.initialViewMode ?? 'free';
    viewSelect.addEventListener('change', () => {
      scene.setViewMode(viewSelect.value as 'free' | 'earth');
    });
    controls.appendChild(labeled('camera', viewSelect));

    const cLabel = document.createElement('label');
    cLabel.className = 'dv-range-label';
    cLabel.textContent = `c = ${model.scattering.lambertWeight.toFixed(2)}`;
    const cInput = document.createElement('input');
    cInput.type = 'range';
    cInput.min = '0'; cInput.max = '0.5'; cInput.step = '0.01';
    cInput.value = String(model.scattering.lambertWeight);
    cInput.addEventListener('input', () => {
      model.scattering.lambertWeight = Number(cInput.value);
      cLabel.firstChild!.textContent = `c = ${model.scattering.lambertWeight.toFixed(2)} `;
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

  return {
    setLightCurve: (idOrIndex) => {
      // Accept either an index into the array or the LC's `id` field.
      const byId = model.lightCurves.findIndex((lc) => lc.id === idOrIndex);
      changeLightCurve(byId >= 0 ? byId : idOrIndex);
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
    getModel: () => model,
    dispose: () => {
      playing = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      plot.dispose();
      scene.dispose();
      container.innerHTML = '';
    },
  };
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

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' :
    c === '<' ? '&lt;' :
    c === '>' ? '&gt;' :
    c === '"' ? '&quot;' : '&#39;',
  );
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

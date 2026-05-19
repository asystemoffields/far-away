// Forward brightness model — Kaasalainen, Torppa & Muinonen 2001, Icarus 153.
//
// Combined Lommel-Seeliger + Lambert scattering per facet, summed over all
// facets that are both illuminated (μ₀ > 0) and visible (μ > 0):
//
//   S(μ, μ₀) = μ μ₀ ( 1 / (μ + μ₀) + c )
//
// where μ₀ = n̂·ŝ (cosine of incidence), μ = n̂·ê (cosine of emission), c is the
// dimensionless Lambert weight (DAMIT-style; ~0.1 for typical asteroid fits),
// and the per-facet contribution is weighted by the facet area A_i.
//
// This implementation deliberately omits a phase function f(α): for relative
// (uncalibrated) light curves the observed signal is fit with a free scale
// and the phase function gets absorbed into the scale. The viewer compares
// model to observations by overlaying a least-squares scaled predicted curve.

import type { LightCurve, LightCurvePoint, ScatteringParams, SpinState } from './types.ts';
import type { FacetGeometry } from './geometry.ts';
import { bodyToEcliptic, transposeMat3, applyMat3, normalize } from './orientation.ts';

/** Predicted brightness at a single observation. */
export function predictBrightness(
  facets: FacetGeometry,
  spin: SpinState,
  scattering: ScatteringParams,
  point: LightCurvePoint,
): number {
  // Rotate Sun and Earth from ecliptic into the body frame, where facet
  // normals live: v_body = M_beᵀ · v_ecl.
  const m = bodyToEcliptic(spin, point.jd);
  const mT = transposeMat3(m);
  const sunBody = normalize(applyMat3(mT, point.sun));
  const earthBody = normalize(applyMat3(mT, point.earth));

  const { normals, areas } = facets;
  const c = scattering.lambertWeight;
  const nFaces = areas.length;

  let total = 0;
  for (let f = 0; f < nFaces; f++) {
    const nx = normals[f * 3]!;
    const ny = normals[f * 3 + 1]!;
    const nz = normals[f * 3 + 2]!;
    const mu0 = nx * sunBody.x + ny * sunBody.y + nz * sunBody.z;
    if (mu0 <= 0) continue;
    const mu = nx * earthBody.x + ny * earthBody.y + nz * earthBody.z;
    if (mu <= 0) continue;
    const denom = mu + mu0;
    if (denom <= 0) continue;
    const s = mu * mu0 * (1 / denom + c);
    total += areas[f]! * s;
  }
  return total;
}

/** Predict brightness for every point of a light curve. */
export function predictCurve(
  facets: FacetGeometry,
  spin: SpinState,
  scattering: ScatteringParams,
  curve: LightCurve,
): Float64Array {
  const out = new Float64Array(curve.points.length);
  for (let i = 0; i < curve.points.length; i++) {
    out[i] = predictBrightness(facets, spin, scattering, curve.points[i]!);
  }
  return out;
}

/** Least-squares optimal scale factor `k` such that ∑(k·model − obs)² is
 *  minimised. Used for relative (uncalibrated) light curves to overlay the
 *  predicted curve onto the observed one at a comparable amplitude. */
export function leastSquaresScale(
  predicted: ArrayLike<number>,
  observed: LightCurvePoint[],
): number {
  let num = 0;
  let den = 0;
  const n = Math.min(predicted.length, observed.length);
  for (let i = 0; i < n; i++) {
    const m = predicted[i]!;
    const o = observed[i]!.intensity;
    num += m * o;
    den += m * m;
  }
  return den > 0 ? num / den : 1;
}

/** RMS residual between predicted (scaled) and observed brightness. */
export function rmsResidual(
  predictedScaled: ArrayLike<number>,
  observed: LightCurvePoint[],
): number {
  const n = Math.min(predictedScaled.length, observed.length);
  if (n === 0) return 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const d = predictedScaled[i]! - observed[i]!.intensity;
    s += d * d;
  }
  return Math.sqrt(s / n);
}

/** Joint coarse-then-fine grid search for the pole (λ, β) AND the global
 *  zero-rotation epoch `jd0` that together minimise light-curve residuals.
 *  Use this when the published shape and the LC file come from different
 *  inversion runs and the on-disk pole/JD0 give a poor fit — the optimiser
 *  recovers the (pole, jd0) self-consistent with the shape.
 *
 *  Inner loop is fast: per (λ, β) we precompute ONE brightness curve per LC
 *  as a function of rotation phase (using each LC's midpoint geometry),
 *  then scan a single global phase shift over the period and aggregate
 *  scaled-residual RMS across all LCs at each candidate shift. The
 *  recovered jd0 is the same across all curves (a single global parameter,
 *  as the physics demands) — `firstOffset`-style per-LC results would be
 *  unsound.
 *
 *  Cost is roughly (n_poles × n_phase_samples × Σ n_obs); for the bundled
 *  Hermione (~2k facets, ~1k obs across 5 LCs) the default settings take
 *  well under a second in modern browsers. */
export function fitPoleAndPhase(
  facets: FacetGeometry,
  baseSpin: SpinState,
  scattering: ScatteringParams,
  curves: LightCurve[],
  options: {
    coarseLambdaStep?: number; // degrees
    coarseBetaStep?: number;   // degrees
    refineStep?: number;       // degrees
    refineRadius?: number;     // degrees
    /** Max observations to keep per curve when scoring; uniformly sub-sampled. */
    maxObsPerCurve?: number;
  } = {},
): { poleLambdaDeg: number; poleBetaDeg: number; jd0: number; rms: number } {
  const lamStep = options.coarseLambdaStep ?? 15;
  const betStep = options.coarseBetaStep ?? 15;
  const refStep = options.refineStep ?? 3;
  const refRad  = options.refineRadius ?? 15;
  const maxObs  = options.maxObsPerCurve ?? 80;

  const sampled = curves.map((c) => subsample(c, maxObs));
  if (sampled.length === 0 || sampled[0]!.points.length === 0) {
    return { poleLambdaDeg: baseSpin.poleLambdaDeg, poleBetaDeg: baseSpin.poleBetaDeg, jd0: baseSpin.jd0, rms: Infinity };
  }
  const periodDays = baseSpin.periodHours / 24;
  // Global phase reference: the very first observation across all LCs.
  // The recovered jd0 is reported as tRef + bestPhaseFraction · P_days, so
  // it's a self-consistent absolute epoch (within a period; jd0 is
  // intrinsically mod-P anyway under the Kaasalainen 2001 convention).
  const tRef = sampled[0]!.points[0]!.jd;
  // Precomputed (tCenter, mean) per LC.
  const lcMeta = sampled.map((lc) => {
    const tCenter = lc.points[Math.floor(lc.points.length / 2)]!.jd;
    return { tCenter, mean: curveMean(lc) };
  });

  const phiSamples = 64;
  // One model curve per LC, reused across phase shifts (and reallocated
  // per pole sample since the model values change with pole).
  const models: Float64Array[] = sampled.map(() => new Float64Array(phiSamples));

  const score = (lambdaDeg: number, betaDeg: number): { rms: number; jd0: number } => {
    const spin: SpinState = { ...baseSpin, poleLambdaDeg: lambdaDeg, poleBetaDeg: betaDeg };

    // For each LC, sample brightness as a function of rotation phase φ ∈
    // [0, 2π) at the LC's mid-session geometry. tmpModel[i] is the
    // brightness at rotation phase 2π·i/N evaluated under that LC's
    // (Sun, Earth) — Sun/Earth motion over a single observing session
    // is sub-percent, so the midpoint is a fine fixed geometry.
    for (let lcIdx = 0; lcIdx < sampled.length; lcIdx++) {
      const lc = sampled[lcIdx]!;
      const meta = lcMeta[lcIdx]!;
      const midObs = lc.points[Math.floor(lc.points.length / 2)]!;
      const tmpModel = models[lcIdx]!;
      for (let i = 0; i < phiSamples; i++) {
        const jd = meta.tCenter + (i / phiSamples) * periodDays;
        tmpModel[i] = predictBrightness(facets, { ...spin, jd0: meta.tCenter }, scattering, {
          jd, intensity: 0, sun: midObs.sun, earth: midObs.earth,
        });
      }
    }

    // Now search over a single global phase shift `g ∈ [0, 1)`. The
    // candidate jd0 is `tRef + g · P_days`. For an observation at JD_obs
    // the model phase fraction is `((JD_obs − tRef)/P − g) mod 1`, the
    // SAME for every LC (because jd0 is global) — so each LC just looks
    // up its own tmpModel at that fraction. We compute a least-squares
    // scale per LC (relative LCs are scale-free) and aggregate the
    // weighted sum-of-squared residuals.
    let bestRms = Infinity;
    let bestPhaseFrac = 0;
    for (let s = 0; s < phiSamples; s++) {
      const g = s / phiSamples;
      let sumW = 0;
      let sumSqResid = 0;
      let any = false;
      for (let lcIdx = 0; lcIdx < sampled.length; lcIdx++) {
        const lc = sampled[lcIdx]!;
        const meta = lcMeta[lcIdx]!;
        if (meta.mean <= 0) continue;
        const tmpModel = models[lcIdx]!;
        let num = 0, den = 0;
        for (let k = 0; k < lc.points.length; k++) {
          const p = lc.points[k]!;
          let frac = ((p.jd - tRef) / periodDays - g) % 1;
          if (frac < 0) frac += 1;
          const m = sampleWrapped(tmpModel, frac);
          num += m * p.intensity;
          den += m * m;
        }
        if (den <= 0) continue;
        const scale = num / den;
        let sse = 0;
        for (let k = 0; k < lc.points.length; k++) {
          const p = lc.points[k]!;
          let frac = ((p.jd - tRef) / periodDays - g) % 1;
          if (frac < 0) frac += 1;
          const m = sampleWrapped(tmpModel, frac) * scale;
          const d = m - p.intensity;
          sse += d * d;
        }
        const w = lc.points.length * meta.mean;
        sumW += w;
        sumSqResid += w * (sse / lc.points.length) / (meta.mean * meta.mean);
        any = true;
      }
      if (!any || sumW <= 0) continue;
      const rms = Math.sqrt(sumSqResid / sumW);
      if (rms < bestRms) {
        bestRms = rms;
        bestPhaseFrac = g;
      }
    }
    return { rms: bestRms, jd0: tRef + bestPhaseFrac * periodDays };
  };

  // Coarse grid.
  let best = {
    lambda: baseSpin.poleLambdaDeg,
    beta: baseSpin.poleBetaDeg,
    jd0: baseSpin.jd0,
    rms: Infinity,
  };
  for (let lam = 0; lam < 360; lam += lamStep) {
    for (let bet = -75; bet <= 75; bet += betStep) {
      const s = score(lam, bet);
      if (s.rms < best.rms) best = { lambda: lam, beta: bet, jd0: s.jd0, rms: s.rms };
    }
  }

  // Refine on a fine grid centred on the coarse winner.
  for (let dlam = -refRad; dlam <= refRad; dlam += refStep) {
    for (let dbet = -refRad; dbet <= refRad; dbet += refStep) {
      const lam = wrap360(best.lambda + dlam);
      const bet = Math.max(-89, Math.min(89, best.beta + dbet));
      const s = score(lam, bet);
      if (s.rms < best.rms) best = { lambda: lam, beta: bet, jd0: s.jd0, rms: s.rms };
    }
  }

  return {
    poleLambdaDeg: best.lambda,
    poleBetaDeg: best.beta,
    jd0: best.jd0,
    rms: best.rms,
  };
}

function subsample(curve: LightCurve, maxN: number): LightCurve {
  if (curve.points.length <= maxN) return curve;
  const stride = curve.points.length / maxN;
  const pts: LightCurve['points'] = [];
  for (let k = 0; k < maxN; k++) pts.push(curve.points[Math.floor(k * stride)]!);
  return { ...curve, points: pts };
}

function sampleWrapped(arr: Float64Array, frac: number): number {
  // Linear interpolate a wrap-around table at frac ∈ [0, 1).
  const n = arr.length;
  const f = frac * n;
  const i0 = Math.floor(f) % n;
  const i1 = (i0 + 1) % n;
  const t = f - Math.floor(f);
  return (arr[i0]! ?? 0) * (1 - t) + (arr[i1]! ?? 0) * t;
}

function curveMean(curve: LightCurve): number {
  if (curve.points.length === 0) return 1;
  let s = 0;
  for (let i = 0; i < curve.points.length; i++) s += curve.points[i]!.intensity;
  return s / curve.points.length;
}

function wrap360(x: number): number {
  let r = x % 360;
  if (r < 0) r += 360;
  return r;
}

/** Search for the JD0 offset that minimises the scaled-residual RMS for a
 *  given curve. The model is periodic in P, so we sweep φ ∈ [0, 2π) on a
 *  coarse grid, then refine with a golden-section search around the best
 *  bin. Returns the *offset* to add to spin.jd0.
 *
 *  Use case: published shape solutions sometimes do not ship with a JD0
 *  consistent with the light-curve file's epoch convention. Without a phase
 *  fit the predicted curve has the right amplitude but is shifted from the
 *  observed peaks. With it, the viewer "tells the right story" out of the
 *  box for any (shape, LC) pair that shares a self-consistent pole and
 *  period. */
export function fitPhaseOffset(
  facets: FacetGeometry,
  spin: SpinState,
  scattering: ScatteringParams,
  curve: LightCurve,
  options: { coarseSamples?: number } = {},
): { jdOffset: number; scale: number; rms: number } {
  const samples = options.coarseSamples ?? 96;
  const periodDays = spin.periodHours / 24;
  let bestOffset = 0;
  let bestScore = Infinity;
  const evaluate = (offset: number): number => {
    const shifted: SpinState = { ...spin, jd0: spin.jd0 - offset };
    const pred = predictCurve(facets, shifted, scattering, curve);
    const k = leastSquaresScale(pred, curve.points);
    const scaled = new Float64Array(pred.length);
    for (let i = 0; i < pred.length; i++) scaled[i] = pred[i]! * k;
    return rmsResidual(scaled, curve.points);
  };
  for (let i = 0; i < samples; i++) {
    const off = (i / samples) * periodDays;
    const s = evaluate(off);
    if (s < bestScore) { bestScore = s; bestOffset = off; }
  }
  // Refine via golden-section search in (bestOffset - bin, bestOffset + bin).
  const bin = periodDays / samples;
  let a = bestOffset - bin;
  let b = bestOffset + bin;
  const phi = (Math.sqrt(5) - 1) / 2;
  let x1 = b - phi * (b - a);
  let x2 = a + phi * (b - a);
  let f1 = evaluate(x1);
  let f2 = evaluate(x2);
  for (let i = 0; i < 32 && b - a > 1e-9; i++) {
    if (f1 < f2) {
      b = x2; x2 = x1; f2 = f1;
      x1 = b - phi * (b - a);
      f1 = evaluate(x1);
    } else {
      a = x1; x1 = x2; f1 = f2;
      x2 = a + phi * (b - a);
      f2 = evaluate(x2);
    }
  }
  const finalOffset = ((a + b) / 2) % periodDays;
  const shifted: SpinState = { ...spin, jd0: spin.jd0 - finalOffset };
  const pred = predictCurve(facets, shifted, scattering, curve);
  const scale = leastSquaresScale(pred, curve.points);
  const scaled = new Float64Array(pred.length);
  for (let i = 0; i < pred.length; i++) scaled[i] = pred[i]! * scale;
  return {
    jdOffset: finalOffset,
    scale,
    rms: rmsResidual(scaled, curve.points),
  };
}

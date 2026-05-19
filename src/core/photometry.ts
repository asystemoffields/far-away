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

/** Joint coarse-then-fine grid search for the pole (λ, β) that minimises
 *  light-curve residuals, given a published shape and a set of observed
 *  curves. Per-pole inner step is `fitPhaseOffset` so the absolute zero-
 *  rotation epoch is recovered too. Use this when the published shape and
 *  the LC file come from different inversion runs (different conventions
 *  for pole / JD0) and the on-disk pole gives a poor fit — the optimiser
 *  recovers the pole *self-consistent with the shape*.
 *
 *  Cost is roughly (n_poles × n_phase_samples × n_obs × n_facets); for the
 *  bundled Hermione (~2k facets, ~1k obs across LCs) the default settings
 *  take well under a second in modern browsers. To bound work for very
 *  rich light-curve sets, pass a subset of curves in `curves`. */
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
): { poleLambdaDeg: number; poleBetaDeg: number; jdOffset: number; rms: number } {
  const lamStep = options.coarseLambdaStep ?? 15;
  const betStep = options.coarseBetaStep ?? 15;
  const refStep = options.refineStep ?? 3;
  const refRad  = options.refineRadius ?? 15;
  const maxObs  = options.maxObsPerCurve ?? 80;

  const sampled = curves.map((c) => subsample(c, maxObs));

  const periodDays = baseSpin.periodHours / 24;
  // Per (lambda, beta), the dominant cost is computing brightness for
  // every (phi, observation) pair. We exploit two things:
  //  1. The Sun/Earth geometry within a single light curve is nearly
  //     constant (hours), so we precompute one "model curve" as a
  //     function of phi at each pole, sampled on a coarse phi grid.
  //  2. Phase fitting then reduces to wrapping & cross-correlating that
  //     coarse model curve against the observed intensities, sampled by
  //     interpolating into the phi grid by JD.
  const phiSamples = 64;
  const tmpModel = new Float64Array(phiSamples);
  const score = (lambdaDeg: number, betaDeg: number): { rms: number; offset: number } => {
    const spin: SpinState = { ...baseSpin, poleLambdaDeg: lambdaDeg, poleBetaDeg: betaDeg };
    let sumW = 0;
    let sumSq = 0;
    let firstOffset = 0;
    for (let lcIdx = 0; lcIdx < sampled.length; lcIdx++) {
      const lc = sampled[lcIdx]!;
      const mean = curveMean(lc);
      if (mean <= 0) continue;

      // Sample brightness at uniform phi over one rotation. The asteroid-
      // centric Sun/Earth at the LC's midpoint are a fine fixed geometry
      // for a session of a few hours.
      const midObs = lc.points[Math.floor(lc.points.length / 2)]!;
      const tCenter = midObs.jd;
      for (let i = 0; i < phiSamples; i++) {
        // Shift JD by enough to set phi(jd) = i/phiSamples * 2π.
        const phi = (i / phiSamples) * 2 * Math.PI;
        // Choose jd so that phi(jd) = phi at the current pole.
        const jd = tCenter + (phi / (2 * Math.PI)) * periodDays;
        tmpModel[i] = predictBrightness(facets, { ...spin, jd0: tCenter }, scattering, {
          jd, intensity: 0, sun: midObs.sun, earth: midObs.earth,
        });
      }

      // Find phi shift that best aligns model to observed. For each
      // candidate shift in [0, 1) of period, compute scaled-residual RMS
      // and pick the minimum.
      const phaseShifts = phiSamples;
      let bestShiftRms = Infinity;
      let bestShiftOff = 0;
      for (let s = 0; s < phaseShifts; s++) {
        const shiftFraction = s / phaseShifts;
        // For each observation, compute the model brightness as
        // model[ (phi_obs/2π - shiftFraction) mod 1 × phiSamples ]
        // then find optimal scale and resulting RMS.
        let num = 0, den = 0;
        for (let k = 0; k < lc.points.length; k++) {
          const p = lc.points[k]!;
          const phiObs = ((p.jd - tCenter) / periodDays) % 1;
          let frac = (phiObs - shiftFraction) % 1;
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
          const phiObs = ((p.jd - tCenter) / periodDays) % 1;
          let frac = (phiObs - shiftFraction) % 1;
          if (frac < 0) frac += 1;
          const m = sampleWrapped(tmpModel, frac) * scale;
          const d = m - p.intensity;
          sse += d * d;
        }
        const rms = Math.sqrt(sse / lc.points.length);
        if (rms < bestShiftRms) {
          bestShiftRms = rms;
          // jdOffset = shiftFraction × periodDays (with sign consistent
          // with fitPhaseOffset's existing convention).
          bestShiftOff = shiftFraction * periodDays;
        }
      }
      const w = lc.points.length * mean;
      sumW += w;
      sumSq += w * (bestShiftRms / mean) ** 2;
      if (lcIdx === 0) firstOffset = bestShiftOff;
    }
    const rms = Math.sqrt(sumSq / Math.max(sumW, 1e-12));
    return { rms, offset: firstOffset };
  };

  // Coarse grid.
  let best = { lambda: baseSpin.poleLambdaDeg, beta: baseSpin.poleBetaDeg, rms: Infinity, offset: 0 };
  for (let lam = 0; lam < 360; lam += lamStep) {
    for (let bet = -75; bet <= 75; bet += betStep) {
      const s = score(lam, bet);
      if (s.rms < best.rms) best = { lambda: lam, beta: bet, rms: s.rms, offset: s.offset };
    }
  }

  // Refine on a fine grid centred on the coarse winner.
  for (let dlam = -refRad; dlam <= refRad; dlam += refStep) {
    for (let dbet = -refRad; dbet <= refRad; dbet += refStep) {
      const lam = wrap360(best.lambda + dlam);
      const bet = Math.max(-89, Math.min(89, best.beta + dbet));
      const s = score(lam, bet);
      if (s.rms < best.rms) best = { lambda: lam, beta: bet, rms: s.rms, offset: s.offset };
    }
  }

  return {
    poleLambdaDeg: best.lambda,
    poleBetaDeg: best.beta,
    jdOffset: best.offset,
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

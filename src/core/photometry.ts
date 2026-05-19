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

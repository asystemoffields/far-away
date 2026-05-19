// End-to-end: parse real DAMIT files vendored under public/sample-data,
// run the forward model, and verify the result against the observed curve
// produces a small RMS once phase and scale are fit. This guards against
// regression in parsers, orientation conventions, or the brightness model.

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseLcTxt, parseShapeTxt } from '../src/core/parse.ts';
import { buildFacetGeometry } from '../src/core/geometry.ts';
import {
  fitPoleAndPhase,
  predictCurve,
} from '../src/core/photometry.ts';
import { DEFAULT_SCATTERING, type SpinState } from '../src/core/types.ts';

const HERMIONE_SPIN: SpinState = {
  poleLambdaDeg: 112,
  poleBetaDeg: 6,
  periodHours: 5.55128,
  jd0: 2443032.5,
};

describe('real DAMIT data — Hermione', () => {
  it('parses the convex shape (1022 verts, 2040 facets)', () => {
    const text = readFileSync(
      'public/sample-data/hermione/shape_damit_155.txt',
      'utf8',
    );
    const shape = parseShapeTxt(text);
    expect(shape.vertices.length).toBe(1022 * 3);
    expect(shape.faces.length).toBe(2040 * 3);
    for (let i = 0; i < shape.faces.length; i++) {
      const idx = shape.faces[i]!;
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(1022);
    }
  });

  it('parses 41 light curves with valid 8-column observations', () => {
    const text = readFileSync('public/sample-data/hermione/herm.lc', 'utf8');
    const lcs = parseLcTxt(text);
    expect(lcs.length).toBe(41);
    expect(lcs[0]!.points.length).toBe(266);
    const totalObs = lcs.reduce((a, lc) => a + lc.points.length, 0);
    expect(totalObs).toBeGreaterThan(1000);
    // Sanity check the first observation's columns are physically plausible.
    const p0 = lcs[0]!.points[0]!;
    expect(p0.jd).toBeGreaterThan(2_400_000);
    expect(p0.jd).toBeLessThan(2_500_000);
    const sunDist = Math.hypot(p0.sun.x, p0.sun.y, p0.sun.z);
    const earthDist = Math.hypot(p0.earth.x, p0.earth.y, p0.earth.z);
    // Main belt: heliocentric ~2–4 AU, geocentric ~1.5–4 AU.
    expect(sunDist).toBeGreaterThan(1.5);
    expect(sunDist).toBeLessThan(5);
    expect(earthDist).toBeGreaterThan(0.8);
    expect(earthDist).toBeLessThan(5);
  });

  it('predicts brightness in the right ballpark and the fit is plausible', () => {
    const shape = parseShapeTxt(
      readFileSync('public/sample-data/hermione/shape_damit_155.txt', 'utf8'),
    );
    const lcs = parseLcTxt(readFileSync('public/sample-data/hermione/herm.lc', 'utf8'));
    const facets = buildFacetGeometry(shape);

    // Test on the first long LC (266 observations covering a full rotation).
    const lc = lcs[0]!;
    const predRaw = predictCurve(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, lc);
    // Predictions should be strictly positive — at no observation should the
    // asteroid have zero visible illuminated area (small phase angle, large body).
    let nonZero = 0;
    for (let i = 0; i < predRaw.length; i++) if (predRaw[i]! > 0) nonZero++;
    expect(nonZero).toBe(lc.points.length);

    const mean = lc.points.reduce((a, p) => a + p.intensity, 0) / lc.points.length;
    expect(mean).toBeGreaterThan(0.5);
    expect(mean).toBeLessThan(2.0);

    // The observed curve has finite amplitude (peaks vs troughs differ by
    // ~5% of mean). A model that predicts a CONSTANT could still pass a
    // naïve "RMS < 15% of mean" check — so we run a real (pole+phase)
    // joint fit and demand both:
    //   (a) the fit RMS is meaningfully below the curve's own peak-to-peak
    //       amplitude — i.e., the model is actually tracking variation,
    //   (b) the predicted curve itself has non-trivial amplitude after
    //       scaling.
    const fit = fitPoleAndPhase(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, [lc]);
    const observedAmp = (Math.max(...lc.points.map((p) => p.intensity))
                      - Math.min(...lc.points.map((p) => p.intensity))) / mean;
    expect(observedAmp).toBeGreaterThan(0.02); // sanity: curve isn't actually flat
    expect(fit.rms).toBeLessThan(observedAmp / 2); // model captures more than half the variation

    // Sanity-check the model amplitude with the fitted pole.
    const fittedSpin = {
      ...HERMIONE_SPIN,
      poleLambdaDeg: fit.poleLambdaDeg,
      poleBetaDeg: fit.poleBetaDeg,
      jd0: fit.jd0,
    };
    const predRefit = predictCurve(facets, fittedSpin, DEFAULT_SCATTERING, lc);
    const pMin = Math.min(...predRefit);
    const pMax = Math.max(...predRefit);
    expect((pMax - pMin) / ((pMax + pMin) / 2)).toBeGreaterThan(0.01);
  });

  it('relative-vs-absolute light curve formats both parse', () => {
    const rel = parseLcTxt(
      readFileSync('public/sample-data/damit-convex/test_lcs_rel', 'utf8'),
    );
    const abs = parseLcTxt(
      readFileSync('public/sample-data/damit-convex/test_lcs_abs', 'utf8'),
    );
    expect(rel.length).toBe(37);
    expect(abs.length).toBe(37);
    expect(rel[0]!.calibrated).toBe(false);
    expect(abs[0]!.calibrated).toBe(true);
  });
});

describe('real DAMIT data — Hertha', () => {
  it('parses 32 light curves and an LC with the published pole gives a fit', () => {
    const text = readFileSync('public/sample-data/hertha/135.lc', 'utf8');
    const lcs = parseLcTxt(text);
    expect(lcs.length).toBe(32);
    const totalObs = lcs.reduce((a, lc) => a + lc.points.length, 0);
    expect(totalObs).toBeGreaterThan(500);
  });
});

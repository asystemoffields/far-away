// Throughput/latency benchmark for the photometric forward model and the
// pole+phase optimiser, run against real Hermione data. Use this as a
// regression check before changing the hot loops in src/core/photometry.ts.
//
// Run from the project root:
//   node scripts/perf-bench.mjs
import { readFileSync } from 'node:fs';
import { parseShapeTxt, parseLcTxt } from '../src/core/parse.ts';
import { buildFacetGeometry } from '../src/core/geometry.ts';
import {
  predictBrightness,
  predictCurve,
  fitPhaseOffset,
  fitPoleAndPhase,
} from '../src/core/photometry.ts';
import { DEFAULT_SCATTERING } from '../src/core/types.ts';

const HERMIONE_SPIN = {
  poleLambdaDeg: 112,
  poleBetaDeg: 6,
  periodHours: 5.55128,
  jd0: 2443032.5,
};

const shape = parseShapeTxt(readFileSync('public/sample-data/hermione/shape_damit_155.txt', 'utf8'));
const lcs = parseLcTxt(readFileSync('public/sample-data/hermione/herm.lc', 'utf8'));
const facets = buildFacetGeometry(shape);
console.log(`nFaces=${facets.areas.length} totalObs=${lcs.reduce((a, lc) => a + lc.points.length, 0)}`);

const lc0 = lcs[0];
const obs = lc0.points[0];

// Warm-up.
for (let i = 0; i < 50; i++) predictBrightness(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, obs);

{
  const N = 5000;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) predictBrightness(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, obs);
  const t1 = performance.now();
  console.log(`predictBrightness:        ${((t1 - t0) / N * 1000).toFixed(2)} us/call`);
}
{
  const N = 200;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) predictCurve(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, lc0);
  const t1 = performance.now();
  console.log(`predictCurve (266 pts):   ${((t1 - t0) / N).toFixed(2)} ms/call`);
}
{
  const N = 5;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) fitPhaseOffset(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, lc0);
  const t1 = performance.now();
  console.log(`fitPhaseOffset (1 curve): ${((t1 - t0) / N).toFixed(1)} ms/call`);
}
{
  const N = 50;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) buildFacetGeometry(shape);
  const t1 = performance.now();
  console.log(`buildFacetGeometry:       ${((t1 - t0) / N).toFixed(2)} ms/call`);
}
{
  const chosen = [...lcs].sort((a, b) => b.points.length - a.points.length).slice(0, 5);
  const t0 = performance.now();
  const fit = fitPoleAndPhase(facets, HERMIONE_SPIN, DEFAULT_SCATTERING, chosen);
  const t1 = performance.now();
  console.log(
    `fitPoleAndPhase (5 curves): ${(t1 - t0).toFixed(0)} ms — pole (${fit.poleLambdaDeg.toFixed(0)}, ${fit.poleBetaDeg.toFixed(0)}), RMS ${(fit.rms * 100).toFixed(2)}%`,
  );
}

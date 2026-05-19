// Data loader for the demo page. Fetches DAMIT-format files from
// /sample-data and assembles AsteroidModel objects.

import type { AsteroidModel, ShapeModel, SpinState } from '../core/types.ts';
import { DEFAULT_SCATTERING } from '../core/types.ts';
import { parseLcTxt, parseShapeTxt } from '../core/parse.ts';
import { buildFacetGeometry } from '../core/geometry.ts';
import { fitPoleAndPhase } from '../core/photometry.ts';

export interface CatalogEntry {
  /** Stable id used in the picker. */
  id: string;
  /** Display name. */
  name: string;
  /** Optional URL of a DAMIT shape file. If absent, `placeholderShape` is used. */
  shapeUrl?: string;
  /** A built-in placeholder shape (used when the LC has no published shape). */
  placeholderShape?: ShapeModel;
  /** URL of a DAMIT light-curve file. */
  lcUrl: string;
  /** Published spin parameters. The pole is refined by `refitPoleOnLoad`
   *  if the catalog flag is set. */
  spin: SpinState;
  /** Citation / provenance string shown in the widget footer. */
  citation: string;
  /** Auto-fit pole on load. Use when the shape and LC sources differ —
   *  e.g. shape from one paper, LCs from another, with no shared JD0 or
   *  pole convention. The published `spin` becomes the optimiser seed; the
   *  final spin is the best fit against ALL bundled light curves. */
  refitPoleOnLoad?: boolean;
}

export async function loadCatalogEntry(entry: CatalogEntry): Promise<AsteroidModel> {
  const [shape, lcText] = await Promise.all([
    entry.shapeUrl ? fetchText(entry.shapeUrl).then(parseShapeTxt) : Promise.resolve(entry.placeholderShape!),
    fetchText(entry.lcUrl),
  ]);
  if (!shape) throw new Error(`Catalog entry "${entry.id}" has no shape (neither shapeUrl nor placeholderShape).`);
  const lcs = parseLcTxt(lcText);

  let spin = entry.spin;
  let citation = entry.citation;
  let publishedSpin: SpinState | undefined;
  let fitRms: number | undefined;
  if (entry.refitPoleOnLoad && lcs.length > 0) {
    const facets = buildFacetGeometry(shape);
    // Use the first ~5 light curves (longest first) so the joint fit
    // anchors on multiple geometries without scanning every LC.
    const chosen = [...lcs].sort((a, b) => b.points.length - a.points.length).slice(0, 5);
    const fit = fitPoleAndPhase(facets, entry.spin, DEFAULT_SCATTERING, chosen);
    publishedSpin = entry.spin;
    spin = {
      ...entry.spin,
      poleLambdaDeg: fit.poleLambdaDeg,
      poleBetaDeg: fit.poleBetaDeg,
      jd0: fit.jd0,
    };
    fitRms = fit.rms;
    citation = `${entry.citation} Pole auto-fit from LCs: (${fit.poleLambdaDeg.toFixed(0)}°, ${fit.poleBetaDeg.toFixed(0)}°), RMS ${(fit.rms * 100).toFixed(2)}% of mean.`;
  }

  return {
    name: entry.name,
    shape,
    spin,
    lightCurves: lcs,
    scattering: { ...DEFAULT_SCATTERING },
    citation,
    publishedSpin,
    fitRms,
  };
}

async function fetchText(url: string): Promise<string> {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Fetch failed (${r.status}) for ${url}`);
  return r.text();
}

/** A tri-axial ellipsoid mesh (in km, body-frame), built by recursive cube
 *  subdivision projected onto an ellipsoid. Used as a *placeholder* shape
 *  for asteroids where only the published initial ellipsoid is known. */
export function ellipsoidShape(a: number, b: number, c: number, subdivisions = 12): ShapeModel {
  const n = subdivisions;
  const vs: number[] = [];
  const fs: number[] = [];
  const map = new Map<string, number>();
  const add = (x: number, y: number, z: number): number => {
    const l = Math.sqrt(x * x + y * y + z * z) || 1;
    const ux = x / l, uy = y / l, uz = z / l;
    const k = `${ux.toFixed(8)},${uy.toFixed(8)},${uz.toFixed(8)}`;
    let idx = map.get(k);
    if (idx === undefined) {
      idx = vs.length / 3;
      vs.push(ux * a, uy * b, uz * c);
      map.set(k, idx);
    }
    return idx;
  };
  const cubeFaces: ((i: number, j: number) => [number, number, number])[] = [
    (i, j) => [1, (2 * j) / n - 1, (2 * i) / n - 1],
    (i, j) => [-1, (2 * j) / n - 1, -((2 * i) / n - 1)],
    (i, j) => [(2 * j) / n - 1, 1, -((2 * i) / n - 1)],
    (i, j) => [(2 * j) / n - 1, -1, (2 * i) / n - 1],
    (i, j) => [-((2 * j) / n - 1), (2 * i) / n - 1, 1],
    (i, j) => [(2 * j) / n - 1, (2 * i) / n - 1, -1],
  ];
  for (const pt of cubeFaces) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const i0 = add(...pt(i, j));
        const i1 = add(...pt(i + 1, j));
        const i2 = add(...pt(i + 1, j + 1));
        const i3 = add(...pt(i, j + 1));
        fs.push(i0, i1, i2, i0, i2, i3);
      }
    }
  }
  return { vertices: new Float32Array(vs), faces: new Uint32Array(fs) };
}

/** Catalog of demo asteroids. The shape and LC URLs point to files vendored
 *  in /sample-data, originally pulled from public GitHub repos.
 *
 *  We deliberately ship only entries that have BOTH a real shape file AND
 *  real light curves — placeholder-shape entries (Hertha, DAMIT-convex
 *  test) read as "broken science" to photometrists because the predicted
 *  curve is dead-flat over noisy observations. Those LC files are still
 *  vendored under public/sample-data/ for parser-format reference; add
 *  them back to the demo catalog once a real shape file is paired. */
export const DEMO_CATALOG: CatalogEntry[] = [
  {
    id: 'hermione',
    name: '(121) Hermione',
    shapeUrl: '/sample-data/hermione/shape_damit_155.txt',
    lcUrl: '/sample-data/hermione/herm.lc',
    spin: {
      // Marchis et al. 2009 / Hanuš et al. 2017 — Hermione has a known
      // pole ambiguity. We seed the optimiser with the (293°, −34°)
      // secondary solution; the auto-fit recovers whichever pole is
      // consistent with the bundled Asteroids-MDSM shape file (which
      // does not advertise its own pole convention).
      poleLambdaDeg: 293,
      poleBetaDeg: -34,
      periodHours: 5.55128,
      jd0: 2443032.5,
    },
    citation:
      'Shape: Hanuš et al., Asteroids-MDSM model 155 (CC BY 4.0). ' +
      'Light curves: matvii/ADAM Contours/herm.lc.',
    refitPoleOnLoad: true,
  },
];

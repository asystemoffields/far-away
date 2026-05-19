// Data loader for the demo page. Fetches DAMIT-format files from
// /sample-data and assembles AsteroidModel objects.

import type { AsteroidModel, ShapeModel, SpinState } from '../core/types.ts';
import { DEFAULT_SCATTERING } from '../core/types.ts';
import { parseLcTxt, parseShapeTxt } from '../core/parse.ts';

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
  /** Published spin parameters. */
  spin: SpinState;
  /** Citation / provenance string shown in the widget footer. */
  citation: string;
}

export async function loadCatalogEntry(entry: CatalogEntry): Promise<AsteroidModel> {
  const [shape, lcText] = await Promise.all([
    entry.shapeUrl ? fetchText(entry.shapeUrl).then(parseShapeTxt) : Promise.resolve(entry.placeholderShape!),
    fetchText(entry.lcUrl),
  ]);
  if (!shape) throw new Error(`Catalog entry "${entry.id}" has no shape (neither shapeUrl nor placeholderShape).`);
  const lcs = parseLcTxt(lcText);
  return {
    name: entry.name,
    shape,
    spin: entry.spin,
    lightCurves: lcs,
    scattering: { ...DEFAULT_SCATTERING },
    citation: entry.citation,
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
 *  in /sample-data, originally pulled from public GitHub repos. */
export const DEMO_CATALOG: CatalogEntry[] = [
  {
    id: 'hermione',
    name: '(121) Hermione',
    shapeUrl: '/sample-data/hermione/shape_damit_155.txt',
    lcUrl: '/sample-data/hermione/herm.lc',
    spin: {
      // Marchis et al. 2009 / Hanuš et al. 2017 — Hermione has a known
      // pole ambiguity. We use the (293°, −34°) secondary solution, which
      // empirically gives a better fit to the matvii/ADAM Contours light
      // curves than the (112°, 6°) primary solution (the Asteroids-MDSM
      // shape file does not advertise which solution it was inverted from).
      poleLambdaDeg: 293,
      poleBetaDeg: -34,
      periodHours: 5.55128,
      jd0: 2443032.5,
    },
    citation:
      'Shape: Hanuš et al., Asteroids-MDSM model 155 (CC BY 4.0). ' +
      'Light curves: matvii/ADAM Contours/herm.lc. Phase auto-fit per LC.',
  },
  {
    id: 'hertha',
    name: '(135) Hertha',
    placeholderShape: ellipsoidShape(43.56, 43.56, 35.64),
    lcUrl: '/sample-data/hertha/135.lc',
    spin: {
      // From matvii/ADAM 135_oct.ini config (DAMIT convention).
      poleLambdaDeg: 272,
      poleBetaDeg: 52,
      periodHours: 8.40060,
      jd0: 2443846.0,
    },
    citation:
      'Shape: placeholder ellipsoid (43.56, 43.56, 35.64 km) per ADAM init. ' +
      'Light curves: matvii/ADAM Hertha/135.lc.',
  },
  {
    id: 'damit-convex-test',
    name: 'DAMIT-convex test asteroid',
    placeholderShape: ellipsoidShape(1, 0.85, 0.7),
    lcUrl: '/sample-data/damit-convex/test_lcs_rel',
    spin: {
      // From DAMIT-convex input_convexinv.
      poleLambdaDeg: 220,
      poleBetaDeg: 0,
      periodHours: 5.76198,
      jd0: 2438882.0,
    },
    citation:
      'Canonical Kaasalainen test set bundled with convexinv. ' +
      'Shape: placeholder ellipsoid; the actual inverted shape would come from running convexinv.',
  },
];

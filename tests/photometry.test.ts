import { describe, it, expect } from 'vitest';
import { buildFacetGeometry } from '../src/core/geometry.ts';
import {
  leastSquaresScale,
  predictBrightness,
  predictCurve,
} from '../src/core/photometry.ts';
import type { LightCurve, ShapeModel, SpinState } from '../src/core/types.ts';

const SPIN_FIXED: SpinState = {
  // β=+90° → pole = +ẑ_ecl → body & ecliptic frames coincide, no rotation effect.
  poleLambdaDeg: 0,
  poleBetaDeg: 90,
  periodHours: 24,
  jd0: 2451545,
};

/** Build a regularly subdivided icosphere-like sphere; quick & dirty using
 *  cube → sphere projection for testing. Not for production use. */
function unitSphere(subdivisions: number): ShapeModel {
  // 6 cube faces, each split into subdivisions × subdivisions quads, each quad
  // into 2 triangles. Vertices projected to the unit sphere.
  const n = subdivisions;
  const vs: number[] = [];
  const fs: number[] = [];
  const key = (x: number, y: number, z: number): string =>
    `${x.toFixed(8)},${y.toFixed(8)},${z.toFixed(8)}`;
  const map = new Map<string, number>();
  const addVert = (x: number, y: number, z: number): number => {
    const len = Math.sqrt(x * x + y * y + z * z);
    const nx = x / len, ny = y / len, nz = z / len;
    const k = key(nx, ny, nz);
    let idx = map.get(k);
    if (idx === undefined) {
      idx = vs.length / 3;
      vs.push(nx, ny, nz);
      map.set(k, idx);
    }
    return idx;
  };
  const faces: [
    (i: number, j: number) => [number, number, number],
    string,
  ][] = [
    [(i, j) => [1, (2 * j) / n - 1, (2 * i) / n - 1], '+x'],
    [(i, j) => [-1, (2 * j) / n - 1, -((2 * i) / n - 1)], '-x'],
    [(i, j) => [(2 * j) / n - 1, 1, -((2 * i) / n - 1)], '+y'],
    [(i, j) => [(2 * j) / n - 1, -1, (2 * i) / n - 1], '-y'],
    [(i, j) => [-((2 * j) / n - 1), (2 * i) / n - 1, 1], '+z'],
    [(i, j) => [(2 * j) / n - 1, (2 * i) / n - 1, -1], '-z'],
  ];
  for (const [pt] of faces) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const [x0, y0, z0] = pt(i, j);
        const [x1, y1, z1] = pt(i + 1, j);
        const [x2, y2, z2] = pt(i + 1, j + 1);
        const [x3, y3, z3] = pt(i, j + 1);
        const i0 = addVert(x0, y0, z0);
        const i1 = addVert(x1, y1, z1);
        const i2 = addVert(x2, y2, z2);
        const i3 = addVert(x3, y3, z3);
        fs.push(i0, i1, i2, i0, i2, i3);
      }
    }
  }
  return {
    vertices: new Float32Array(vs),
    faces: new Uint32Array(fs),
  };
}

describe('predictBrightness — sphere is approximately constant', () => {
  it('opposition phase: rotation-invariant brightness for a sphere', () => {
    const shape = unitSphere(16);
    const facets = buildFacetGeometry(shape);
    // Sun at (−1,0,0) AU, Earth at (−2,0,0) AU — Earth and Sun on the same side
    // and aligned, so α≈0 (opposition).
    const samples: number[] = [];
    for (let i = 0; i < 8; i++) {
      const jd = SPIN_FIXED.jd0 + (i / 8) * (SPIN_FIXED.periodHours / 24);
      const b = predictBrightness(facets, SPIN_FIXED, { lambertWeight: 0.1 }, {
        jd,
        intensity: 0,
        sun: { x: -1, y: 0, z: 0 },
        earth: { x: -2, y: 0, z: 0 },
      });
      samples.push(b);
    }
    const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
    // A sphere is rotation-invariant; with a tessellated sphere the spread
    // should be small (well under 1% for n=16 subdivisions).
    for (const s of samples) {
      expect(Math.abs(s / mean - 1)).toBeLessThan(0.01);
    }
    expect(mean).toBeGreaterThan(0);
  });

  it('returns zero when Sun is behind the asteroid (back-lit & invisible)', () => {
    const shape = unitSphere(8);
    const facets = buildFacetGeometry(shape);
    // Sun and Earth both on +x but on the opposite side of the sphere from
    // the camera: we put Sun in +x (lighting from +x), Earth in −x. The
    // illuminated side faces +x; the camera side (−x) is dark, so brightness
    // should be zero (no overlap of illuminated & visible facets at α=π).
    const b = predictBrightness(facets, SPIN_FIXED, { lambertWeight: 0.1 }, {
      jd: SPIN_FIXED.jd0,
      intensity: 0,
      sun: { x: 1, y: 0, z: 0 },
      earth: { x: -1, y: 0, z: 0 },
    });
    expect(b).toBe(0);
  });
});

describe('predictBrightness — elongated shape produces a light curve', () => {
  it('an elongated prism brightens when broadside, dims when end-on', () => {
    // Brick: 4× longer along body-x than y/z. Rotate around body-z (β=90°
    // pole → spin axis = body-z, which equals ecliptic-z). Sun and Earth on
    // the equator. Brightness should vary roughly with the projected silhouette.
    const shape = brick(4, 1, 1);
    const facets = buildFacetGeometry(shape);

    const spin: SpinState = {
      poleLambdaDeg: 0,
      poleBetaDeg: 90, // pole = +ẑ_ecl
      periodHours: 1,
      jd0: 2451545,
    };
    const sun = { x: -1, y: 0, z: 0 };
    const earth = { x: -2, y: 0, z: 0 };

    const samples: number[] = [];
    for (let i = 0; i < 32; i++) {
      const jd = spin.jd0 + (i / 32) * (spin.periodHours / 24);
      samples.push(
        predictBrightness(facets, spin, { lambertWeight: 0.1 }, {
          jd, intensity: 0, sun, earth,
        }),
      );
    }
    const max = Math.max(...samples);
    const min = Math.min(...samples);
    // For a 4:1 brick the max:min projected-area ratio should be ~4:1 in
    // pure broadside vs end-on; LS+Lambert smooths it but should remain > 2.
    expect(max / Math.max(min, 1e-10)).toBeGreaterThan(2);
    // We expect two maxima and two minima per rotation (broadside happens
    // every 90°): so 4 extrema over 2π — about 2 minima detectable.
    let nDecreasing = 0;
    for (let i = 1; i < samples.length; i++) {
      if (samples[i]! < samples[i - 1]!) nDecreasing++;
    }
    expect(nDecreasing).toBeGreaterThan(samples.length / 4);
  });
});

describe('leastSquaresScale & predictCurve', () => {
  it('recovers an injected scale on synthetic data', () => {
    const shape = unitSphere(8);
    const facets = buildFacetGeometry(shape);
    const lc: LightCurve = {
      id: 1,
      calibrated: false,
      points: Array.from({ length: 10 }, (_, i) => ({
        jd: SPIN_FIXED.jd0 + (i / 10) * (SPIN_FIXED.periodHours / 24),
        intensity: 0, // filled below
        sun: { x: -1, y: 0, z: 0 },
        earth: { x: -2, y: 0, z: 0 },
      })),
    };
    const predicted = predictCurve(facets, SPIN_FIXED, { lambertWeight: 0.1 }, lc);
    const trueScale = 17.3;
    for (let i = 0; i < lc.points.length; i++) {
      lc.points[i]!.intensity = trueScale * predicted[i]!;
    }
    const k = leastSquaresScale(predicted, lc.points);
    expect(Math.abs(k - trueScale) / trueScale).toBeLessThan(1e-6);
  });
});

/** Axis-aligned brick of full size (lx, ly, lz), centred at origin. */
function brick(lx: number, ly: number, lz: number): ShapeModel {
  const hx = lx / 2, hy = ly / 2, hz = lz / 2;
  const verts = new Float32Array([
    -hx, -hy, -hz,  hx, -hy, -hz,  hx,  hy, -hz, -hx,  hy, -hz,
    -hx, -hy,  hz,  hx, -hy,  hz,  hx,  hy,  hz, -hx,  hy,  hz,
  ]);
  const f = (a: number, b: number, c: number, d: number): number[] => [a, b, c, a, c, d];
  const faces = new Uint32Array([
    ...f(0, 3, 2, 1), // −z (CCW from outside)
    ...f(4, 5, 6, 7), // +z
    ...f(0, 1, 5, 4), // −y
    ...f(2, 3, 7, 6), // +y
    ...f(1, 2, 6, 5), // +x
    ...f(0, 4, 7, 3), // −x
  ]);
  return { vertices: verts, faces };
}

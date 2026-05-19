import { describe, it, expect } from 'vitest';
import { parseLcJson, parseLcTxt, parseObj, parseShapeTxt } from '../src/core/parse.ts';

describe('parseShapeTxt', () => {
  it('parses a 4-vertex tetrahedron and converts to 0-based indices', () => {
    const text = [
      '4 4',
      '0 0 0',
      '1 0 0',
      '0 1 0',
      '0 0 1',
      '1 3 2',
      '1 2 4',
      '1 4 3',
      '2 3 4',
    ].join('\n');
    const shape = parseShapeTxt(text);
    expect(shape.vertices.length).toBe(12);
    expect(shape.faces.length).toBe(12);
    // First face: "1 3 2" → 0-based [0, 2, 1]
    expect(Array.from(shape.faces.slice(0, 3))).toEqual([0, 2, 1]);
  });

  it('tolerates CRLF line endings and stray blank lines', () => {
    const text = '2 1\r\n0 0 0\r\n\r\n1 0 0\r\n1 2 2\r\n';
    // (face with duplicate index is structurally fine; we just confirm parsing.)
    const shape = parseShapeTxt(text);
    expect(shape.vertices.length).toBe(6);
    expect(shape.faces.length).toBe(3);
  });

  it('rejects truncated files', () => {
    expect(() => parseShapeTxt('4 4\n0 0 0\n')).toThrow(/truncated/);
  });

  it('rejects out-of-range face indices', () => {
    const text = '3 1\n0 0 0\n1 0 0\n0 1 0\n1 2 99\n';
    expect(() => parseShapeTxt(text)).toThrow(/out-of-range/);
  });
});

describe('parseObj', () => {
  it('parses a triangle .obj', () => {
    const text = '# comment\nv 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n';
    const s = parseObj(text);
    expect(s.faces.length).toBe(3);
    expect(Array.from(s.faces)).toEqual([0, 1, 2]);
  });

  it('fan-triangulates a quad and strips texture/normal indices', () => {
    const text = 'v 0 0 0\nv 1 0 0\nv 1 1 0\nv 0 1 0\nf 1/1/1 2/2/1 3/3/1 4/4/1\n';
    const s = parseObj(text);
    // Quad → 2 triangles: (1,2,3) and (1,3,4)
    expect(s.faces.length).toBe(6);
    expect(Array.from(s.faces)).toEqual([0, 1, 2, 0, 2, 3]);
  });
});

describe('parseLcTxt', () => {
  it('parses a two-curve file with relative and calibrated flags', () => {
    const text = [
      '2',
      '2 0',
      '2451545.0 1.00 -1 0 0 -1 0 0',
      '2451545.1 1.05 -1 0 0 -1 0 0',
      '1 1',
      '2451600.0 0.50 0 -1 0 0 -1 0',
    ].join('\n');
    const curves = parseLcTxt(text);
    expect(curves.length).toBe(2);
    expect(curves[0]!.calibrated).toBe(false);
    expect(curves[0]!.points.length).toBe(2);
    expect(curves[0]!.points[0]!.jd).toBe(2451545.0);
    expect(curves[0]!.points[0]!.intensity).toBe(1.0);
    expect(curves[1]!.calibrated).toBe(true);
    expect(curves[1]!.points[0]!.sun).toEqual({ x: 0, y: -1, z: 0 });
  });

  it('rejects a curve header without two tokens', () => {
    expect(() => parseLcTxt('1\nbroken\n1 1 1 1 1 1 1 1\n')).toThrow(/header/);
  });

  it('rejects non-finite values in observation rows (no silent NaN propagation)', () => {
    // A stray non-numeric token in column 2 would silently produce a NaN
    // intensity and corrupt the downstream fit; the parser must catch it.
    const text = [
      '1',
      '1 0',
      '2451545.0 NaN -1 0 0 -1 0 0',
    ].join('\n');
    expect(() => parseLcTxt(text)).toThrow(/non-finite/);
  });
});

describe('parseLcJson', () => {
  it('parses the array-of-objects form', () => {
    const data = [
      {
        id: 1,
        calibrated: false,
        points: [
          { jd: 2451545.0, intensity: 1.0, sun: [-1, 0, 0], earth: [-1, 0, 0] },
        ],
      },
    ];
    const curves = parseLcJson(data);
    expect(curves[0]!.points[0]!.jd).toBe(2451545.0);
    expect(curves[0]!.calibrated).toBe(false);
  });

  it('parses the 8-tuple array-row form', () => {
    const data = [
      {
        points: [[2451545.0, 1.0, -1, 0, 0, -1, 0, 0]],
      },
    ];
    const curves = parseLcJson(data);
    expect(curves[0]!.points[0]!.earth.x).toBe(-1);
  });

  it('accepts the { lightcurves: [...] } wrapper', () => {
    const data = {
      lightcurves: [{ calibrated: 1, points: [[1, 1, 0, 0, 1, 0, 0, 1]] }],
    };
    const curves = parseLcJson(data);
    expect(curves[0]!.calibrated).toBe(true);
  });
});

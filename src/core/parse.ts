// Parsers for DAMIT data files.
//
// DAMIT shape file (shape.txt):
//   line 1:      "nVerts nFaces"
//   next nVerts: "x y z"
//   next nFaces: "v1 v2 v3"   (1-based, triangular)
//
// DAMIT lc.txt:
//   line 1:                "nCurves"
//   per curve:
//     header line:         "nObs calibratedFlag"   (flag 0=relative, 1=absolute)
//     nObs observation lines:
//       "JD intensity Sun_x Sun_y Sun_z Earth_x Earth_y Earth_z"
//       (asteroid-centric ecliptic J2000, AU; intensity normalised when calibrated)
//
// DAMIT lc.json: JSON variant with the same content plus per-curve metadata.

import type {
  LightCurve,
  LightCurvePoint,
  ShapeModel,
  Vec3,
} from './types.ts';

const WS_SPLIT = /\s+/;

function tokenise(text: string): string[] {
  return text.trim().split(WS_SPLIT);
}

function lines(text: string): string[] {
  // Filter blank lines so we are tolerant of CRLF and stray empty lines.
  return text
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .filter((line) => line.trim().length > 0);
}

/** Parse a DAMIT shape.txt-format polyhedral mesh. */
export function parseShapeTxt(text: string): ShapeModel {
  const ls = lines(text);
  if (ls.length === 0) throw new Error('Shape file is empty.');

  const header = tokenise(ls[0]!);
  if (header.length < 2) {
    throw new Error(
      `Shape header expected "nVerts nFaces", got: "${ls[0]}"`,
    );
  }
  const nVerts = Number(header[0]);
  const nFaces = Number(header[1]);
  if (!Number.isInteger(nVerts) || !Number.isInteger(nFaces) || nVerts <= 0 || nFaces <= 0) {
    throw new Error(`Shape header has invalid counts: nVerts=${nVerts} nFaces=${nFaces}`);
  }
  if (ls.length < 1 + nVerts + nFaces) {
    throw new Error(
      `Shape file truncated: expected ${1 + nVerts + nFaces} non-blank lines, got ${ls.length}.`,
    );
  }

  const vertices = new Float32Array(nVerts * 3);
  for (let i = 0; i < nVerts; i++) {
    const toks = tokenise(ls[1 + i]!);
    const x = Number(toks[0]);
    const y = Number(toks[1]);
    const z = Number(toks[2]);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
      throw new Error(`Vertex ${i + 1} has non-finite coordinate.`);
    }
    vertices[i * 3] = x;
    vertices[i * 3 + 1] = y;
    vertices[i * 3 + 2] = z;
  }

  const faces = new Uint32Array(nFaces * 3);
  for (let i = 0; i < nFaces; i++) {
    const toks = tokenise(ls[1 + nVerts + i]!);
    const a = Number(toks[0]);
    const b = Number(toks[1]);
    const c = Number(toks[2]);
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
      throw new Error(`Face ${i + 1} has non-integer index.`);
    }
    // DAMIT is 1-based; convert to 0-based.
    if (a < 1 || b < 1 || c < 1 || a > nVerts || b > nVerts || c > nVerts) {
      throw new Error(
        `Face ${i + 1} has out-of-range index (got ${a},${b},${c}; nVerts=${nVerts}).`,
      );
    }
    faces[i * 3] = a - 1;
    faces[i * 3 + 1] = b - 1;
    faces[i * 3 + 2] = c - 1;
  }

  return { vertices, faces };
}

/** Parse a Wavefront .obj as a triangular mesh. Tolerates quads by fan-splitting. */
export function parseObj(text: string): ShapeModel {
  const verts: number[] = [];
  const faces: number[] = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.length === 0 || line.startsWith('#')) continue;
    const toks = line.split(WS_SPLIT);
    const kind = toks[0];
    if (kind === 'v') {
      verts.push(Number(toks[1]), Number(toks[2]), Number(toks[3]));
    } else if (kind === 'f') {
      // .obj face entries can be "i", "i/t", "i/t/n", "i//n"; we only need the vertex index.
      const idxs = toks.slice(1).map((t) => {
        const v = Number(t.split('/')[0]);
        return v - 1; // .obj is 1-based.
      });
      // Fan-triangulate if necessary.
      for (let i = 1; i < idxs.length - 1; i++) {
        faces.push(idxs[0]!, idxs[i]!, idxs[i + 1]!);
      }
    }
    // Skip vn, vt, o, g, s, mtllib, usemtl, etc.
  }
  if (verts.length === 0 || faces.length === 0) {
    throw new Error('OBJ contained no vertices or faces.');
  }
  return {
    vertices: new Float32Array(verts),
    faces: new Uint32Array(faces),
  };
}

/** Parse a DAMIT lc.txt-format light-curve file. */
export function parseLcTxt(text: string): LightCurve[] {
  const ls = lines(text);
  if (ls.length === 0) throw new Error('Light-curve file is empty.');
  const nCurves = Number(tokenise(ls[0]!)[0]);
  if (!Number.isInteger(nCurves) || nCurves <= 0) {
    throw new Error(`Bad light-curve count header: "${ls[0]}"`);
  }

  const out: LightCurve[] = [];
  let cursor = 1;
  for (let lc = 1; lc <= nCurves; lc++) {
    if (cursor >= ls.length) {
      throw new Error(`Light-curve file truncated before curve ${lc} header.`);
    }
    const head = tokenise(ls[cursor++]!);
    const nObs = Number(head[0]);
    const flag = Number(head[1]);
    if (!Number.isInteger(nObs) || nObs <= 0 || (flag !== 0 && flag !== 1)) {
      throw new Error(`Bad LC #${lc} header: "${ls[cursor - 1]}"`);
    }
    if (cursor + nObs > ls.length) {
      throw new Error(`Light-curve #${lc} truncated: needs ${nObs} rows.`);
    }
    const points: LightCurvePoint[] = [];
    for (let i = 0; i < nObs; i++) {
      const t = tokenise(ls[cursor++]!);
      if (t.length < 8) {
        throw new Error(`LC #${lc} row ${i + 1} has fewer than 8 columns.`);
      }
      points.push({
        jd: Number(t[0]),
        intensity: Number(t[1]),
        sun: { x: Number(t[2]), y: Number(t[3]), z: Number(t[4]) },
        earth: { x: Number(t[5]), y: Number(t[6]), z: Number(t[7]) },
      });
    }
    out.push({ id: lc, calibrated: flag === 1, points });
  }
  return out;
}

/** Parse a DAMIT lc.json-format light-curve file. Schema follows the
 *  documentation: an array of curves (or { "lightcurves": [...] } wrapper),
 *  each with "calibrated" (0/1 or boolean), "points" / "data" array of
 *  observations. We accept multiple plausible spellings to stay robust
 *  against DAMIT schema drift. */
export function parseLcJson(raw: unknown): LightCurve[] {
  const data = pickArray(raw);
  return data.map((curve, idx) => parseLcJsonCurve(curve, idx + 1));
}

function pickArray(raw: unknown): unknown[] {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'object' && raw !== null) {
    const obj = raw as Record<string, unknown>;
    for (const key of ['lightcurves', 'light_curves', 'lcs', 'data', 'curves']) {
      const v = obj[key];
      if (Array.isArray(v)) return v;
    }
  }
  throw new Error('lc.json: expected an array of light curves at the root.');
}

function parseLcJsonCurve(raw: unknown, fallbackId: number): LightCurve {
  if (typeof raw !== 'object' || raw === null) {
    throw new Error(`lc.json curve #${fallbackId}: not an object.`);
  }
  const c = raw as Record<string, unknown>;
  const id = num(c['id']) ?? num(c['lc_id']) ?? fallbackId;
  const calibrated = toBool(c['calibrated']) ?? toBool(c['absolute']) ?? false;
  const pts = c['points'] ?? c['data'] ?? c['observations'];
  if (!Array.isArray(pts)) {
    throw new Error(`lc.json curve #${id}: missing points/data array.`);
  }
  const points: LightCurvePoint[] = pts.map((p, i) => parseLcJsonPoint(p, id, i + 1));
  return { id, calibrated, points };
}

function parseLcJsonPoint(raw: unknown, lcId: number, rowIdx: number): LightCurvePoint {
  if (Array.isArray(raw) && raw.length >= 8) {
    return {
      jd: Number(raw[0]),
      intensity: Number(raw[1]),
      sun: { x: Number(raw[2]), y: Number(raw[3]), z: Number(raw[4]) },
      earth: { x: Number(raw[5]), y: Number(raw[6]), z: Number(raw[7]) },
    };
  }
  if (typeof raw !== 'object' || raw === null) {
    throw new Error(`lc.json LC ${lcId} row ${rowIdx}: not an object/array.`);
  }
  const p = raw as Record<string, unknown>;
  const jd = num(p['jd']) ?? num(p['JD']) ?? num(p['epoch']);
  const intensity =
    num(p['brightness']) ?? num(p['intensity']) ?? num(p['flux']) ?? num(p['mag']);
  const sun = vec3(p['sun']) ?? vec3FromKeys(p, 'sun_x', 'sun_y', 'sun_z');
  const earth = vec3(p['earth']) ?? vec3FromKeys(p, 'earth_x', 'earth_y', 'earth_z');
  if (jd === undefined || intensity === undefined || !sun || !earth) {
    throw new Error(
      `lc.json LC ${lcId} row ${rowIdx}: missing required jd/intensity/sun/earth fields.`,
    );
  }
  return { jd, intensity, sun, earth };
}

function num(x: unknown): number | undefined {
  if (typeof x === 'number' && Number.isFinite(x)) return x;
  if (typeof x === 'string') {
    const n = Number(x);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function toBool(x: unknown): boolean | undefined {
  if (typeof x === 'boolean') return x;
  if (typeof x === 'number') return x !== 0;
  if (typeof x === 'string') {
    if (/^(true|1|absolute|calibrated)$/i.test(x)) return true;
    if (/^(false|0|relative)$/i.test(x)) return false;
  }
  return undefined;
}

function vec3(raw: unknown): Vec3 | undefined {
  if (Array.isArray(raw) && raw.length >= 3) {
    const x = num(raw[0]);
    const y = num(raw[1]);
    const z = num(raw[2]);
    if (x !== undefined && y !== undefined && z !== undefined) return { x, y, z };
  }
  if (typeof raw === 'object' && raw !== null) {
    const o = raw as Record<string, unknown>;
    const x = num(o['x']);
    const y = num(o['y']);
    const z = num(o['z']);
    if (x !== undefined && y !== undefined && z !== undefined) return { x, y, z };
  }
  return undefined;
}

function vec3FromKeys(
  o: Record<string, unknown>,
  kx: string,
  ky: string,
  kz: string,
): Vec3 | undefined {
  const x = num(o[kx]);
  const y = num(o[ky]);
  const z = num(o[kz]);
  return x !== undefined && y !== undefined && z !== undefined ? { x, y, z } : undefined;
}

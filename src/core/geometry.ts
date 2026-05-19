// Mesh geometry helpers — facet normals and areas in the body frame.
// Normals are computed once per shape (the body mesh is rigid).

import type { ShapeModel } from './types.ts';

export interface FacetGeometry {
  /** Outward (body-frame) unit normal per facet: length 3·nFaces. */
  normals: Float32Array;
  /** Facet area per facet: length nFaces. */
  areas: Float32Array;
  /** Vertex normals for smooth Three.js shading: length 3·nVerts. */
  vertexNormals: Float32Array;
}

function accum(arr: Float32Array, vIdx: number, dx: number, dy: number, dz: number): void {
  const k = vIdx * 3;
  arr[k] = (arr[k] ?? 0) + dx;
  arr[k + 1] = (arr[k + 1] ?? 0) + dy;
  arr[k + 2] = (arr[k + 2] ?? 0) + dz;
}

/** Cross product into out: out = (ax,ay,az) × (bx,by,bz). */
function cross(
  ax: number, ay: number, az: number,
  bx: number, by: number, bz: number,
): [number, number, number] {
  return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

/** Compute outward facet normals + areas, and accumulate vertex normals. */
export function buildFacetGeometry(shape: ShapeModel): FacetGeometry {
  const { vertices, faces } = shape;
  const nFaces = faces.length / 3;
  const nVerts = vertices.length / 3;
  const normals = new Float32Array(nFaces * 3);
  const areas = new Float32Array(nFaces);
  const vertexNormals = new Float32Array(nVerts * 3);

  for (let f = 0; f < nFaces; f++) {
    const ia = faces[f * 3]!;
    const ib = faces[f * 3 + 1]!;
    const ic = faces[f * 3 + 2]!;

    const ax = vertices[ia * 3]!, ay = vertices[ia * 3 + 1]!, az = vertices[ia * 3 + 2]!;
    const bx = vertices[ib * 3]!, by = vertices[ib * 3 + 1]!, bz = vertices[ib * 3 + 2]!;
    const cx = vertices[ic * 3]!, cy = vertices[ic * 3 + 1]!, cz = vertices[ic * 3 + 2]!;

    const [nx, ny, nz] = cross(bx - ax, by - ay, bz - az, cx - ax, cy - ay, cz - az);
    const twiceArea = Math.sqrt(nx * nx + ny * ny + nz * nz);
    const area = twiceArea * 0.5;
    areas[f] = area;
    const inv = twiceArea > 0 ? 1 / twiceArea : 0;
    const ux = nx * inv;
    const uy = ny * inv;
    const uz = nz * inv;
    normals[f * 3] = ux;
    normals[f * 3 + 1] = uy;
    normals[f * 3 + 2] = uz;

    // Area-weighted accumulation for vertex normals.
    const wx = ux * area, wy = uy * area, wz = uz * area;
    accum(vertexNormals, ia, wx, wy, wz);
    accum(vertexNormals, ib, wx, wy, wz);
    accum(vertexNormals, ic, wx, wy, wz);
  }

  for (let v = 0; v < nVerts; v++) {
    const k = v * 3;
    const nx = vertexNormals[k]!;
    const ny = vertexNormals[k + 1]!;
    const nz = vertexNormals[k + 2]!;
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (len > 0) {
      const inv = 1 / len;
      vertexNormals[k] = nx * inv;
      vertexNormals[k + 1] = ny * inv;
      vertexNormals[k + 2] = nz * inv;
    }
  }

  return { normals, areas, vertexNormals };
}

/** Axis-aligned bounding box and centroid in the body frame. */
export interface ShapeBounds {
  min: [number, number, number];
  max: [number, number, number];
  centre: [number, number, number];
  /** Half-diagonal — useful for setting camera distance. */
  radius: number;
}

export function shapeBounds(shape: ShapeModel): ShapeBounds {
  const v = shape.vertices;
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < v.length; i += 3) {
    const x = v[i]!, y = v[i + 1]!, z = v[i + 2]!;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const dx = maxX - minX, dy = maxY - minY, dz = maxZ - minZ;
  return {
    min: [minX, minY, minZ],
    max: [maxX, maxY, maxZ],
    centre: [cx, cy, cz],
    radius: 0.5 * Math.sqrt(dx * dx + dy * dy + dz * dz),
  };
}

// Spin-orientation math.
//
// Convention (Kaasalainen, Torppa & Muinonen 2001; DAMIT 2010):
//   • Body z-axis = spin axis (positive pole).
//   • Pole direction (λ, β) in ecliptic J2000, degrees.
//   • Sidereal rotation period P, hours.
//   • JD0: epoch at which the rotation phase φ = 0. By the standard convention
//     the body x-axis at φ=0 lies in the (asteroid–pole, asteroid–Sun) plane
//     at JD0; for a viewer we treat φ=0 as an arbitrary zero of rotation
//     consistent with the model's published JD0.
//
// Rotation phase at time t:
//   φ(t) = 2π · (t − JD0) / P_days,        P_days = P_hours / 24.
//
// Body-to-ecliptic rotation matrix:
//   M_be(t) = R_z(λ) · R_y(π/2 − β) · R_z(φ(t))
//
// To resolve a body-frame facet normal in the ecliptic frame:
//   n_ecl = M_be · n_body
// To resolve a Sun/Earth vector (given in ecliptic) in the body frame:
//   v_body = M_beᵀ · v_ecl

import type { SpinState, Vec3 } from './types.ts';

export type Mat3 = Float64Array; // length 9, row-major: m[r*3 + c]

const DEG = Math.PI / 180;
const HOURS_TO_DAYS = 1 / 24;

export function deg2rad(d: number): number {
  return d * DEG;
}

export function rotationPhase(spin: SpinState, jd: number): number {
  const periodDays = spin.periodHours * HOURS_TO_DAYS;
  return (2 * Math.PI * (jd - spin.jd0)) / periodDays;
}

export function rotZ(angle: number, out: Mat3 = new Float64Array(9)): Mat3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  out[0] = c;  out[1] = -s; out[2] = 0;
  out[3] = s;  out[4] = c;  out[5] = 0;
  out[6] = 0;  out[7] = 0;  out[8] = 1;
  return out;
}

export function rotY(angle: number, out: Mat3 = new Float64Array(9)): Mat3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  out[0] = c;  out[1] = 0;  out[2] = s;
  out[3] = 0;  out[4] = 1;  out[5] = 0;
  out[6] = -s; out[7] = 0;  out[8] = c;
  return out;
}

export function mulMat3(a: Mat3, b: Mat3, out: Mat3 = new Float64Array(9)): Mat3 {
  const a0 = a[0]!, a1 = a[1]!, a2 = a[2]!;
  const a3 = a[3]!, a4 = a[4]!, a5 = a[5]!;
  const a6 = a[6]!, a7 = a[7]!, a8 = a[8]!;
  const b0 = b[0]!, b1 = b[1]!, b2 = b[2]!;
  const b3 = b[3]!, b4 = b[4]!, b5 = b[5]!;
  const b6 = b[6]!, b7 = b[7]!, b8 = b[8]!;
  out[0] = a0 * b0 + a1 * b3 + a2 * b6;
  out[1] = a0 * b1 + a1 * b4 + a2 * b7;
  out[2] = a0 * b2 + a1 * b5 + a2 * b8;
  out[3] = a3 * b0 + a4 * b3 + a5 * b6;
  out[4] = a3 * b1 + a4 * b4 + a5 * b7;
  out[5] = a3 * b2 + a4 * b5 + a5 * b8;
  out[6] = a6 * b0 + a7 * b3 + a8 * b6;
  out[7] = a6 * b1 + a7 * b4 + a8 * b7;
  out[8] = a6 * b2 + a7 * b5 + a8 * b8;
  return out;
}

export function applyMat3(m: Mat3, v: Vec3): Vec3 {
  return {
    x: m[0]! * v.x + m[1]! * v.y + m[2]! * v.z,
    y: m[3]! * v.x + m[4]! * v.y + m[5]! * v.z,
    z: m[6]! * v.x + m[7]! * v.y + m[8]! * v.z,
  };
}

export function transposeMat3(m: Mat3, out: Mat3 = new Float64Array(9)): Mat3 {
  out[0] = m[0]!; out[1] = m[3]!; out[2] = m[6]!;
  out[3] = m[1]!; out[4] = m[4]!; out[5] = m[7]!;
  out[6] = m[2]!; out[7] = m[5]!; out[8] = m[8]!;
  return out;
}

/** Body-to-ecliptic-J2000 rotation matrix at time t. */
export function bodyToEcliptic(spin: SpinState, jd: number): Mat3 {
  const phi = rotationPhase(spin, jd);
  const lambda = deg2rad(spin.poleLambdaDeg);
  const beta = deg2rad(spin.poleBetaDeg);

  const rzPhi = rotZ(phi);
  const ryBeta = rotY(Math.PI / 2 - beta);
  const rzLambda = rotZ(lambda);

  // M = Rz(λ) · Ry(π/2−β) · Rz(φ)
  const tmp = mulMat3(ryBeta, rzPhi);
  return mulMat3(rzLambda, tmp);
}

/** Unit vector in ecliptic J2000 pointing toward the spin pole. */
export function poleDirection(spin: SpinState): Vec3 {
  const lam = deg2rad(spin.poleLambdaDeg);
  const bet = deg2rad(spin.poleBetaDeg);
  const cb = Math.cos(bet);
  return {
    x: cb * Math.cos(lam),
    y: cb * Math.sin(lam),
    z: Math.sin(bet),
  };
}

export function norm(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

export function normalize(v: Vec3): Vec3 {
  const n = norm(v) || 1;
  return { x: v.x / n, y: v.y / n, z: v.z / n };
}

export function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function neg(v: Vec3): Vec3 {
  return { x: -v.x, y: -v.y, z: -v.z };
}

/** Solar phase angle α = angle subtended at the asteroid between Sun and Earth.
 *  Pass the asteroid-centric Sun and Earth vectors directly. */
export function solarPhaseAngle(sun: Vec3, earth: Vec3): number {
  const ns = normalize(sun);
  const ne = normalize(earth);
  const c = Math.max(-1, Math.min(1, dot(ns, ne)));
  return Math.acos(c);
}

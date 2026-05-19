import { describe, it, expect } from 'vitest';
import {
  applyMat3,
  bodyToEcliptic,
  deg2rad,
  norm,
  poleDirection,
  rotationPhase,
  solarPhaseAngle,
  transposeMat3,
} from '../src/core/orientation.ts';
import type { SpinState } from '../src/core/types.ts';

const TOL = 1e-7;

function nearVec(
  v: { x: number; y: number; z: number },
  expected: [number, number, number],
  tol = TOL,
): void {
  expect(Math.abs(v.x - expected[0])).toBeLessThan(tol);
  expect(Math.abs(v.y - expected[1])).toBeLessThan(tol);
  expect(Math.abs(v.z - expected[2])).toBeLessThan(tol);
}

describe('rotationPhase', () => {
  it('returns 0 at JD0 and 2π after one period', () => {
    const spin: SpinState = {
      poleLambdaDeg: 0,
      poleBetaDeg: 90,
      periodHours: 5,
      jd0: 2451545,
    };
    expect(rotationPhase(spin, 2451545)).toBe(0);
    expect(
      Math.abs(rotationPhase(spin, 2451545 + 5 / 24) - 2 * Math.PI),
    ).toBeLessThan(TOL);
  });

  it('is exactly π after half a period', () => {
    const spin: SpinState = {
      poleLambdaDeg: 30,
      poleBetaDeg: 45,
      periodHours: 7.5,
      jd0: 2450000,
    };
    const halfPeriodDays = (7.5 / 24) / 2;
    expect(
      Math.abs(rotationPhase(spin, 2450000 + halfPeriodDays) - Math.PI),
    ).toBeLessThan(TOL);
  });
});

describe('bodyToEcliptic & poleDirection', () => {
  it('rotates the body z-axis to the pole direction (independent of φ)', () => {
    const spin: SpinState = {
      poleLambdaDeg: 78,
      poleBetaDeg: -65,
      periodHours: 7.1,
      jd0: 2451545,
    };
    const pole = poleDirection(spin);
    // The body z-axis (0,0,1), when rotated through M_be, should land on the
    // pole direction, *regardless* of the current rotation phase φ, because
    // R_z(φ) leaves z invariant.
    for (const jdOffset of [0, 0.123, 5.0, -10.0]) {
      const m = bodyToEcliptic(spin, spin.jd0 + jdOffset);
      const zEcl = applyMat3(m, { x: 0, y: 0, z: 1 });
      nearVec(zEcl, [pole.x, pole.y, pole.z], 1e-12);
    }
  });

  it('is orthogonal (Mᵀ M = I) at arbitrary epoch', () => {
    const spin: SpinState = {
      poleLambdaDeg: 123,
      poleBetaDeg: -42,
      periodHours: 11.0,
      jd0: 2455000,
    };
    const m = bodyToEcliptic(spin, 2455123.456);
    const mT = transposeMat3(m);
    // Apply to the three basis vectors of the body frame; in the body frame
    // (Mᵀ M) should be identity, so v_back should equal v_in.
    for (const v of [
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 0, z: 1 },
    ]) {
      const eclV = applyMat3(m, v);
      const backV = applyMat3(mT, eclV);
      nearVec(backV, [v.x, v.y, v.z], 1e-12);
    }
  });
});

describe('poleDirection', () => {
  it('returns +z for β = +90°', () => {
    const v = poleDirection({ poleLambdaDeg: 0, poleBetaDeg: 90, periodHours: 1, jd0: 0 });
    nearVec(v, [0, 0, 1], 1e-15);
    expect(Math.abs(norm(v) - 1)).toBeLessThan(TOL);
  });
  it('returns (1,0,0) for (λ,β)=(0,0)', () => {
    const v = poleDirection({ poleLambdaDeg: 0, poleBetaDeg: 0, periodHours: 1, jd0: 0 });
    nearVec(v, [1, 0, 0], 1e-15);
  });
  it('returns (0,1,0) for (λ,β)=(90,0)', () => {
    const v = poleDirection({ poleLambdaDeg: 90, poleBetaDeg: 0, periodHours: 1, jd0: 0 });
    nearVec(v, [0, 1, 0], 1e-15);
  });
});

describe('solarPhaseAngle', () => {
  it('is 0 when Sun and Earth coincide in direction', () => {
    expect(solarPhaseAngle({ x: -1, y: 0, z: 0 }, { x: -2, y: 0, z: 0 })).toBeCloseTo(0);
  });
  it('is π/2 when Sun and Earth are perpendicular', () => {
    expect(
      solarPhaseAngle({ x: -1, y: 0, z: 0 }, { x: 0, y: -1, z: 0 }),
    ).toBeCloseTo(Math.PI / 2);
  });
  it('is π when Sun and Earth are anti-parallel', () => {
    expect(solarPhaseAngle({ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 })).toBeCloseTo(Math.PI);
  });
});

describe('deg2rad', () => {
  it('converts 180 to π', () => {
    expect(Math.abs(deg2rad(180) - Math.PI)).toBeLessThan(TOL);
  });
});

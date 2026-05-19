// Domain types for DAMIT-format asteroid models.
//
// References:
//   Ďurech, Sidorin & Kaasalainen 2010, A&A 513, A46 — DAMIT paper, formats.
//   Kaasalainen, Torppa & Muinonen 2001, Icarus 153 — inversion / scattering model.

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/** A polyhedral shape model: triangular facets over a vertex list. */
export interface ShapeModel {
  /** Vertices in the body-fixed frame. Units are arbitrary (DAMIT shapes are
   *  scale-free; size comes from radiometry or occultations, not light curves). */
  vertices: Float32Array; // length = 3 * nVerts
  /** Triangle indices, 0-based (converted from DAMIT's 1-based on parse). */
  faces: Uint32Array; // length = 3 * nFaces
}

/** Model spin parameters. */
export interface SpinState {
  /** Pole ecliptic longitude, J2000, degrees. */
  poleLambdaDeg: number;
  /** Pole ecliptic latitude, J2000, degrees. */
  poleBetaDeg: number;
  /** Sidereal rotation period, hours. */
  periodHours: number;
  /** Zero-phase epoch, JD (TDB). At this JD the body x-axis lies in the
   *  asteroid–Sun–pole plane per the Kaasalainen 2001 convention. */
  jd0: number;
}

/** Single photometric observation. Geometry vectors are asteroid-centric,
 *  in the ecliptic J2000 frame, AU. (DAMIT lc.txt/lc.json convention.) */
export interface LightCurvePoint {
  /** Light-time corrected JD (TDB). */
  jd: number;
  /** Observed brightness in intensity units. For relative curves
   *  (calibrated=false) the absolute scale is meaningless. For calibrated
   *  curves the value is reduced to unit Sun and Earth distance. */
  intensity: number;
  /** Sun vector from the asteroid, ecliptic J2000, AU. */
  sun: Vec3;
  /** Earth vector from the asteroid, ecliptic J2000, AU. */
  earth: Vec3;
}

export interface LightCurve {
  /** Stable identifier within the model (1-based index in DAMIT). */
  id: number;
  /** Calibrated absolute (true) or relative (false). DAMIT flag 1 vs 0. */
  calibrated: boolean;
  points: LightCurvePoint[];
}

/** Photometric model parameters (Kaasalainen–Torppa–Muinonen 2001). */
export interface ScatteringParams {
  /** Lommel-Seeliger + Lambert weighting. S = μμ₀ (1/(μ+μ₀) + c). */
  lambertWeight: number;
}

export const DEFAULT_SCATTERING: ScatteringParams = {
  lambertWeight: 0.1,
};

/** A fully specified asteroid model: shape + spin + (optional) photometry. */
export interface AsteroidModel {
  /** Display name, e.g. "(951) Gaspra". */
  name: string;
  /** DAMIT model id, if known. */
  damitId?: number;
  shape: ShapeModel;
  spin: SpinState;
  lightCurves: LightCurve[];
  scattering: ScatteringParams;
  /** Optional credit string for citation on the widget UI. */
  citation?: string;
  /** If the live `spin` was auto-fit from the light curves, this is the
   *  pole/period/JD0 as published in the source paper for the shape file.
   *  The widget surfaces both so users can see what was refined. */
  publishedSpin?: SpinState;
  /** Global RMS residual of the auto-fit, as a fraction of curve mean. */
  fitRms?: number;
}

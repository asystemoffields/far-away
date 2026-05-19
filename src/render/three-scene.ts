// Three.js scene wrapper for the rotating asteroid mesh.
//
// Geometry conventions:
//   • The mesh BufferGeometry is built in body-frame coordinates, scaled to
//     unit half-extent so the camera distance is shape-independent.
//   • At each frame the mesh group's local matrix is set to M_body→ecliptic
//     so the world-space orientation matches the physical state at JD.
//   • A directional light is placed along the asteroid-centric Sun unit
//     vector (ecliptic). Ambient light is intentionally low so the
//     terminator is visible.
//   • A spin-axis arrow points in the ecliptic pole direction (fixed in
//     world space — it does not rotate with the body).

import {
  AmbientLight,
  ArrowHelper,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  DoubleSide,
  Group,
  Mesh,
  MeshStandardMaterial,
  type Object3D,
  PerspectiveCamera,
  Scene,
  Sprite,
  SpriteMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

import type { AsteroidModel } from '../core/types.ts';
import type { Mat3 } from '../core/orientation.ts';
import {
  bodyToEcliptic,
  normalize,
  poleDirection,
} from '../core/orientation.ts';
import { buildFacetGeometry, shapeBounds } from '../core/geometry.ts';

export interface SceneHandle {
  setJd(jd: number): void;
  setSunEarth(sun: { x: number; y: number; z: number }, earth: { x: number; y: number; z: number }): void;
  setViewMode(mode: 'free' | 'earth'): void;
  /** Update the effective spin state (e.g. when switching light curves and
   *  re-fitting the rotation phase). The pole arrow and orientation matrix
   *  both reflect this. */
  setSpin(spin: import('../core/types.ts').SpinState): void;
  resize(width: number, height: number): void;
  dispose(): void;
  /** Manually request a render (useful when free-orbit is disabled). */
  requestRender(): void;
}

export interface SceneOptions {
  /** Called whenever the scene's internal view mode changes — including
   *  the auto-switch from 'earth' to 'free' when the user starts dragging.
   *  Embedding code uses this to keep its own UI (e.g. a dropdown) in
   *  sync with the actual scene state. */
  onViewModeChange?: (mode: 'free' | 'earth') => void;
}

/** Build a Three.js scene around a Three.js renderer mounted in `container`.
 *  The render loop runs on requestAnimationFrame and is driven by changes
 *  to JD or by orbit interactions. */
export function buildScene(
  container: HTMLElement,
  model: AsteroidModel,
  opts: SceneOptions = {},
): SceneHandle {
  const width = container.clientWidth || 480;
  const height = container.clientHeight || 360;

  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  renderer.setClearColor(new Color(0x0b0d12), 1);
  container.appendChild(renderer.domElement);
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';

  const scene = new Scene();

  // Mesh in body frame, centred and scaled so the rotation-invariant
  // bounding sphere has radius 1. We scale by the MAX vertex distance
  // from the centroid (not the bbox half-diagonal) — that's the radius
  // of the sphere the body sweeps out as it rotates, so the camera can
  // frame it tightly with no guesswork and no clipping at any phase.
  const facets = buildFacetGeometry(model.shape);
  const bounds = shapeBounds(model.shape);
  const verts = new Float32Array(model.shape.vertices.length);
  let maxR = 0;
  for (let i = 0; i < verts.length; i += 3) {
    const x = model.shape.vertices[i]!     - bounds.centre[0];
    const y = model.shape.vertices[i + 1]! - bounds.centre[1];
    const z = model.shape.vertices[i + 2]! - bounds.centre[2];
    verts[i] = x; verts[i + 1] = y; verts[i + 2] = z;
    const r = Math.sqrt(x * x + y * y + z * z);
    if (r > maxR) maxR = r;
  }
  const scaleToUnit = maxR > 0 ? 1 / maxR : 1;
  for (let i = 0; i < verts.length; i++) verts[i]! *= scaleToUnit;
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(verts, 3));
  geometry.setAttribute('normal', new BufferAttribute(facets.vertexNormals.slice(), 3));
  geometry.setIndex(new BufferAttribute(model.shape.faces.slice(), 1));

  // DoubleSide is intentional: published DAMIT meshes are mostly CCW from
  // outside, but the .obj/.txt converters can flip orientations. Backface
  // culling errors would silently hide the body, so we accept the modest
  // overdraw cost in exchange for guaranteed visibility.
  const material = new MeshStandardMaterial({
    color: 0x9a8b78,
    roughness: 1.0,
    metalness: 0.0,
    flatShading: false,
    side: DoubleSide,
  });
  const mesh = new Mesh(geometry, material);

  const bodyGroup = new Group();
  bodyGroup.add(mesh);
  bodyGroup.matrixAutoUpdate = false;
  scene.add(bodyGroup);

  // Sun direction is set via setSunEarth(); the light is positioned far
  // away along the Sun unit vector, never attenuated. Intensity is tuned so
  // the illuminated face reaches near-white without saturating while the
  // terminator stays sharp enough to read.
  const sunLight = new DirectionalLight(0xfff2dd, 2.4);
  sunLight.position.set(10, 0, 0);
  scene.add(sunLight);
  // Slight warm ambient so the shadowed side is not pitch-black — relief
  // on the dark side is readable, but the dark side is still clearly dark.
  // The audit's "no relief on shadowed face" concern is the trade-off here:
  // too much ambient erases the terminator that tells the science story.
  const ambient = new AmbientLight(0x4a5364, 1.05);
  scene.add(ambient);

  // Spin-axis arrow — anchored at origin, oriented along ecliptic pole.
  // Pole is fixed by the model; the arrow updates only if setSpin() is
  // called with a different pole direction. depthTest=false on the
  // arrow's materials so it never disappears behind the asteroid.
  let currentSpin = model.spin;
  const initialPole = poleDirection(currentSpin);
  // Arrow length 1.3 (body bounding sphere is radius 1). With the tighter
  // camera framing (body fills ~80% of the pane), a longer arrow would
  // clip; in the default 3/4 view the pole is foreshortened so the tip +
  // label stay on-screen.
  const POLE_ARROW_LEN = 1.22;
  const POLE_LABEL_R = 1.33;
  const arrow = new ArrowHelper(
    new Vector3(initialPole.x, initialPole.y, initialPole.z),
    new Vector3(0, 0, 0),
    POLE_ARROW_LEN,
    0xffc14f,
    0.22,
    0.11,
  );
  arrow.traverse((o: Object3D) => {
    const m = (o as { material?: { depthTest?: boolean; depthWrite?: boolean; transparent?: boolean } }).material;
    if (m) {
      m.depthTest = false;
      m.depthWrite = false;
      m.transparent = true;
    }
  });
  arrow.renderOrder = 999;
  scene.add(arrow);

  // "pole" label as a sprite, anchored at the arrow tip. Sprite billboards
  // always face the camera, so the text stays legible regardless of orbit.
  const poleLabel = makeTextSprite('pole', '#ffc14f');
  poleLabel.position.set(initialPole.x * POLE_LABEL_R, initialPole.y * POLE_LABEL_R, initialPole.z * POLE_LABEL_R);
  poleLabel.renderOrder = 1000;
  scene.add(poleLabel);

  const V_FOV_DEG = 35;
  const camera = new PerspectiveCamera(V_FOV_DEG, width / Math.max(height, 1), 0.01, 100);
  scene.add(camera);

  // Distance that frames the unit-radius bounding sphere to fill
  // FILL_FRACTION of the LIMITING viewport dimension. On a portrait or
  // wide-short pane the limiting dimension is whichever has the smaller
  // angular field of view, so the body stays large regardless of the
  // pane's aspect ratio. (Previously a fixed distance of 6.5 left the
  // asteroid tiny on phone-shaped panes.)
  // 0.74 leaves headroom for the pole arrow + "pole" label (which, in
  // view-from-Earth mode, point straight up where the vertical FOV is
  // tightest). The body still fills ~74 % of the limiting dimension —
  // far larger than the old fixed-distance framing (~49 %).
  const FILL_FRACTION = 0.74;
  const fitDistance = (aspect: number): number => {
    const tanV = Math.tan((V_FOV_DEG * Math.PI / 180) / 2);
    const tanH = aspect * tanV;             // horizontal half-angle tangent
    const limitingTan = Math.min(tanV, tanH);
    return 1 / (FILL_FRACTION * limitingTan); // bounding-sphere radius is 1
  };

  // Free-orbit state, expressed in pole-relative coords:
  //   `tilt`: angle off the spin axis (0 = pole-on, π/2 = equator-on)
  //   `azim`: rotation around the pole
  //   `zoomFactor`: user zoom multiplier on top of the auto-fit distance
  //                 (1 = framed-to-fit; <1 = zoomed in; >1 = out)
  // Default (tilt = 60°, azim = 0) is the canonical 3/4 asteroid view.
  const cameraState = {
    tilt: Math.PI / 3,
    azim: 0,
    zoomFactor: 1,
    distance: fitDistance(width / Math.max(height, 1)),
  };
  const updateCameraFromState = (): void => {
    // Build an orthonormal basis (e1, e2, pole) where e1, e2 lie in the
    // body's equatorial plane (ecliptic-J2000 components of the pole are
    // known from the spin state).
    const p = poleDirection(currentSpin);
    // Pick a reference vector not parallel to the pole.
    const ref = Math.abs(p.z) > 0.95 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 0, z: 1 };
    const e1 = crossNorm(p, ref);
    const e2 = crossNorm(p, e1);
    const st = Math.sin(cameraState.tilt);
    const ct = Math.cos(cameraState.tilt);
    const sa = Math.sin(cameraState.azim);
    const ca = Math.cos(cameraState.azim);
    const d = cameraState.distance;
    camera.position.set(
      d * (st * (ca * e1.x + sa * e2.x) + ct * p.x),
      d * (st * (ca * e1.y + sa * e2.y) + ct * p.y),
      d * (st * (ca * e1.z + sa * e2.z) + ct * p.z),
    );
    camera.up.set(p.x, p.y, p.z); // pole stays vertical in screen space
    camera.lookAt(0, 0, 0);
  };
  function crossNorm(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }): { x: number; y: number; z: number } {
    const x = a.y * b.z - a.z * b.y;
    const y = a.z * b.x - a.x * b.z;
    const z = a.x * b.y - a.y * b.x;
    const len = Math.sqrt(x * x + y * y + z * z) || 1;
    return { x: x / len, y: y / len, z: z / len };
  }
  /** Reverse-engineer (distance, tilt, azim) from the current camera
   *  position, so a transition from earth-view → free-orbit can start the
   *  drag from exactly where the user was looking (instead of snapping
   *  back to the default 3/4 view). */
  function syncCameraStateToCurrentCamera(): void {
    const px = camera.position.x, py = camera.position.y, pz = camera.position.z;
    const dist = Math.sqrt(px * px + py * py + pz * pz) || 1;
    cameraState.distance = dist;
    const dirx = px / dist, diry = py / dist, dirz = pz / dist;
    const p = poleDirection(currentSpin);
    const cosT = dirx * p.x + diry * p.y + dirz * p.z;
    cameraState.tilt = Math.acos(Math.max(-1, Math.min(1, cosT)));
    // Equatorial component of the camera direction.
    const ex = dirx - cosT * p.x;
    const ey = diry - cosT * p.y;
    const ez = dirz - cosT * p.z;
    const eqLen = Math.sqrt(ex * ex + ey * ey + ez * ez);
    if (eqLen < 1e-9) {
      cameraState.azim = 0;
      return;
    }
    const enx = ex / eqLen, eny = ey / eqLen, enz = ez / eqLen;
    const ref = Math.abs(p.z) > 0.95 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 0, z: 1 };
    const e1 = crossNorm(p, ref);
    const e2 = crossNorm(p, e1);
    const a1 = enx * e1.x + eny * e1.y + enz * e1.z;
    const a2 = enx * e2.x + eny * e2.y + enz * e2.z;
    cameraState.azim = Math.atan2(a2, a1);
  }
  updateCameraFromState();

  let viewMode: 'free' | 'earth' = 'free';
  let lastSun = { x: -1, y: 0, z: 0 };
  let lastEarth = { x: -1.01, y: 0, z: 0 };

  const placeCameraForEarthView = (): void => {
    const e = normalize(lastEarth);
    const dist = cameraState.distance;
    camera.position.set(e.x * dist, e.y * dist, e.z * dist);
    // Use the pole direction as a stable "up" reference; if Earth direction
    // happens to lie along the pole, fall back to ecliptic +z.
    const pd = poleDirection(model.spin);
    const upGuess = Math.abs(e.x * pd.x + e.y * pd.y + e.z * pd.z) > 0.99
      ? { x: 0, y: 0, z: 1 }
      : pd;
    camera.up.set(upGuess.x, upGuess.y, upGuess.z);
    camera.lookAt(0, 0, 0);
  };

  // Recompute the framing distance for the current viewport aspect and
  // the user's zoom factor. Called on construction, on zoom, and on
  // resize so the body stays well-framed at any pane shape.
  const applyZoom = (): void => {
    const aspect = camera.aspect || 1;
    cameraState.distance = fitDistance(aspect) * cameraState.zoomFactor;
  };
  applyZoom();
  updateCameraFromState();

  let dirty = true;
  const requestRender = (): void => { dirty = true; };

  const setMatrixFromMat3 = (m: Mat3): void => {
    // Three.js Matrix4 is column-major in storage but ".set" takes row-major.
    bodyGroup.matrix.set(
      m[0]!, m[1]!, m[2]!, 0,
      m[3]!, m[4]!, m[5]!, 0,
      m[6]!, m[7]!, m[8]!, 0,
      0,     0,     0,     1,
    );
    bodyGroup.matrixWorldNeedsUpdate = true;
  };

  // Input handlers (drag = rotate, wheel = zoom). All listeners are
  // tracked so dispose() can remove them; otherwise the canvas keeps the
  // container alive even after the widget is unmounted.
  const dom = renderer.domElement;
  // Improve accessibility / mouse handling: the canvas is interactive.
  dom.setAttribute('role', 'img');
  dom.setAttribute('aria-label', 'Asteroid 3D shape. Drag to rotate, pinch or Shift-scroll to zoom.');
  dom.tabIndex = 0;
  dom.style.touchAction = 'none'; // suppress browser pinch/scroll-pan inside the canvas
  dom.style.cursor = 'grab';      // signal that the canvas is draggable

  const listeners: Array<[string, EventListener, AddEventListenerOptions | boolean | undefined]> = [];
  const on = <K extends keyof HTMLElementEventMap>(
    type: K,
    fn: (ev: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions | boolean,
  ): void => {
    dom.addEventListener(type, fn as EventListener, opts);
    listeners.push([type, fn as EventListener, opts]);
  };

  // Earth-view's camera is anchored to the Earth direction, so a rotate
  // gesture has no degrees of freedom there. Rather than ignore the
  // gesture (which read as "unresponsive"), the first actual rotation
  // seeds the free-orbit state from the current camera and switches in.
  // Pinch-zoom does NOT switch — you can zoom while keeping Earth view.
  const switchToFreeIfEarth = (): void => {
    if (viewMode !== 'earth') return;
    syncCameraStateToCurrentCamera();
    viewMode = 'free';
    opts.onViewModeChange?.('free');
  };
  // Apply a relative zoom multiplier (shared by wheel + pinch). The
  // factor stacks on top of the aspect-aware auto-fit distance so it
  // survives resizes.
  const applyZoomFactor = (factor: number): void => {
    cameraState.zoomFactor = Math.max(0.25, Math.min(3.5, cameraState.zoomFactor * factor));
    applyZoom();
    if (viewMode === 'free') updateCameraFromState();
    else placeCameraForEarthView();
    requestRender();
  };

  // Pointer bookkeeping for multi-touch. One active pointer = rotate;
  // two = pinch-zoom (the rotate branch is suppressed while pinching).
  const pointers = new Map<number, { x: number; y: number }>();
  let pinchPrevDist = 0;
  let lastX = 0, lastY = 0;
  const pinchDistance = (): number => {
    const it = pointers.values();
    const a = it.next().value;
    const b = it.next().value;
    if (!a || !b) return 0;
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  on('pointerdown', (e: PointerEvent) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    // setPointerCapture can throw (InvalidPointerId) for pointers that
    // aren't currently active; guard so a stray event can't break input.
    try { dom.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    if (pointers.size === 1) {
      lastX = e.clientX; lastY = e.clientY;
      dom.style.cursor = 'grabbing';
    } else if (pointers.size === 2) {
      pinchPrevDist = pinchDistance();
    }
  });
  on('pointermove', (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size >= 2) {
      // Two-finger pinch → zoom. Fingers apart (distance grows) zooms in.
      const d = pinchDistance();
      if (pinchPrevDist > 0 && d > 0) {
        applyZoomFactor(pinchPrevDist / d);
      }
      pinchPrevDist = d;
      return;
    }

    // Single pointer → rotate. Horizontal drag spins around the pole
    // (azim); vertical drag tilts toward/away from it. Switch out of
    // earth-view only on a genuine rotation (not a stationary touch),
    // so a clean two-finger pinch never trips the mode switch.
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (dx === 0 && dy === 0) return;
    switchToFreeIfEarth();
    lastX = e.clientX; lastY = e.clientY;
    cameraState.azim -= dx * 0.008;
    cameraState.tilt += dy * 0.008;
    cameraState.tilt = Math.max(0.1, Math.min(Math.PI - 0.1, cameraState.tilt));
    updateCameraFromState();
    requestRender();
  });
  const endPointer = (e: PointerEvent): void => {
    pointers.delete(e.pointerId);
    try {
      if (dom.hasPointerCapture(e.pointerId)) dom.releasePointerCapture(e.pointerId);
    } catch { /* ignore */ }
    if (pointers.size < 2) pinchPrevDist = 0;
    // Dropping from two fingers to one: re-seed the rotate baseline from
    // the surviving pointer so the view doesn't jump.
    if (pointers.size === 1) {
      const remaining = pointers.values().next().value;
      if (remaining) { lastX = remaining.x; lastY = remaining.y; }
    }
    if (pointers.size === 0) dom.style.cursor = 'grab';
  };
  on('pointerup', endPointer);
  on('pointercancel', endPointer);

  // Wheel-zoom requires holding Shift, so plain scroll on a page that
  // embeds the widget still scrolls the page. (Audit P1: hijacking page
  // scroll over the widget is a real obstacle to embedding.) Touch
  // devices get pinch-zoom via the two-pointer path above.
  on('wheel', (e: WheelEvent) => {
    if (!e.shiftKey) return; // let the page scroll
    e.preventDefault();
    applyZoomFactor(Math.exp(e.deltaY * 0.001));
  }, { passive: false });

  let rafId = 0;
  let currentJd = model.spin.jd0;

  const renderLoop = (): void => {
    if (dirty) {
      dirty = false;
      const m = bodyToEcliptic(currentSpin, currentJd);
      setMatrixFromMat3(m);
      const sn = normalize(lastSun);
      sunLight.position.set(sn.x * 10, sn.y * 10, sn.z * 10);
      renderer.render(scene, camera);
    }
    rafId = requestAnimationFrame(renderLoop);
  };
  renderLoop();

  return {
    setJd(jd: number): void {
      currentJd = jd;
      requestRender();
    },
    setSunEarth(sun, earth): void {
      lastSun = sun;
      lastEarth = earth;
      if (viewMode === 'earth') placeCameraForEarthView();
      requestRender();
    },
    setViewMode(mode): void {
      viewMode = mode;
      if (mode === 'earth') placeCameraForEarthView();
      else updateCameraFromState();
      requestRender();
    },
    setSpin(spin): void {
      currentSpin = spin;
      const p = poleDirection(spin);
      arrow.setDirection(new Vector3(p.x, p.y, p.z));
      poleLabel.position.set(p.x * POLE_LABEL_R, p.y * POLE_LABEL_R, p.z * POLE_LABEL_R);
      requestRender();
    },
    resize(w, h): void {
      renderer.setSize(w, h);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      // Re-frame for the new aspect (preserving the user's zoom factor),
      // so a wide-short or tall-narrow pane still fills with the body.
      applyZoom();
      if (viewMode === 'earth') placeCameraForEarthView();
      else updateCameraFromState();
      requestRender();
    },
    dispose(): void {
      cancelAnimationFrame(rafId);
      // Remove every listener we registered. Browsers cap WebGL contexts
      // (~16); without this the canvas keeps the container alive and
      // long-running pages accumulate detached contexts.
      for (const [type, fn, opts] of listeners) {
        dom.removeEventListener(type, fn, opts as AddEventListenerOptions | undefined);
      }
      listeners.length = 0;
      geometry.dispose();
      material.dispose();
      // Three's ArrowHelper owns inner Line / Mesh; dispose their geom+material.
      arrow.traverse((o: Object3D) => {
        const ag = (o as { geometry?: { dispose: () => void } }).geometry;
        if (ag && typeof ag.dispose === 'function') ag.dispose();
        const am = (o as { material?: { dispose: () => void } }).material;
        if (am && typeof am.dispose === 'function') am.dispose();
      });
      (poleLabel.material as SpriteMaterial).map?.dispose();
      (poleLabel.material as SpriteMaterial).dispose();
      renderer.dispose();
      // forceContextLoss explicitly evicts the WebGL context. Without it,
      // remounting many widgets on the same page eventually trips the
      // browser's per-page context cap.
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    },
    requestRender,
  };
}

/** Build a billboarded text label rendered via a canvas-backed sprite.
 *  The label always faces the camera and stays a constant on-screen size
 *  via the sprite's intrinsic scale. */
function makeTextSprite(text: string, colour: string): Sprite {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
  const fontSize = 64; // canvas-space; sprite scale handles world-space size
  const canvas = document.createElement('canvas');
  canvas.width = 256 * dpr;
  canvas.height = 96 * dpr;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);
  ctx.font = `600 ${fontSize / dpr}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Soft shadow for legibility against any sky.
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 8;
  ctx.fillStyle = colour;
  ctx.fillText(text, 128, 48);
  const tex = new CanvasTexture(canvas);
  tex.minFilter = tex.magFilter = 1006; // THREE.LinearFilter (avoids importing it just for one constant)
  tex.needsUpdate = true;
  const mat = new SpriteMaterial({
    map: tex,
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });
  const sprite = new Sprite(mat);
  sprite.scale.set(0.55, 0.21, 1); // tuned so "pole" is ~18-24 px at default zoom
  return sprite;
}

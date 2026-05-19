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
  Color,
  DirectionalLight,
  DoubleSide,
  Group,
  Mesh,
  MeshStandardMaterial,
  type Object3D,
  PerspectiveCamera,
  Scene,
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

/** Build a Three.js scene around a Three.js renderer mounted in `container`.
 *  The render loop runs on requestAnimationFrame and is driven by changes
 *  to JD or by orbit interactions. */
export function buildScene(
  container: HTMLElement,
  model: AsteroidModel,
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

  // Mesh in body frame, scaled to a canonical unit radius.
  const facets = buildFacetGeometry(model.shape);
  const bounds = shapeBounds(model.shape);
  const scaleToUnit = bounds.radius > 0 ? 1 / bounds.radius : 1;
  const verts = new Float32Array(model.shape.vertices.length);
  for (let i = 0; i < verts.length; i += 3) {
    verts[i]     = (model.shape.vertices[i]!     - bounds.centre[0]) * scaleToUnit;
    verts[i + 1] = (model.shape.vertices[i + 1]! - bounds.centre[1]) * scaleToUnit;
    verts[i + 2] = (model.shape.vertices[i + 2]! - bounds.centre[2]) * scaleToUnit;
  }
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
  // called with a different pole direction.
  let currentSpin = model.spin;
  const initialPole = poleDirection(currentSpin);
  const arrow = new ArrowHelper(
    new Vector3(initialPole.x, initialPole.y, initialPole.z),
    new Vector3(0, 0, 0),
    1.5,
    0xffc14f,
    0.25,
    0.12,
  );
  scene.add(arrow);

  // Camera. Distance picked so the unit-radius body fills ~50% of the
  // smaller viewport dimension at any rotation.
  const CAMERA_DISTANCE = 6.5;
  const camera = new PerspectiveCamera(35, width / Math.max(height, 1), 0.01, 100);
  scene.add(camera);

  // Free-orbit state, expressed in pole-relative coords:
  //   `tilt`: angle off the spin axis (0 = pole-on, π/2 = equator-on)
  //   `azim`: rotation around the pole (chosen so the +ecliptic-x side
  //           faces the viewer at azim=0)
  // We default to (tilt = 60°, azim = 0), which is the canonical 3/4
  // asteroid view: the equator is visible, both poles are visible, the
  // longest axis sweeps across the projected silhouette during rotation.
  const cameraState = {
    distance: CAMERA_DISTANCE,
    tilt: Math.PI / 3,
    azim: 0,
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
  dom.setAttribute('aria-label', 'Asteroid 3D shape. Drag to rotate. Hold Shift and scroll to zoom.');
  dom.tabIndex = 0;
  dom.style.touchAction = 'none'; // suppress browser pinch/scroll-pan inside the canvas

  const listeners: Array<[string, EventListener, AddEventListenerOptions | boolean | undefined]> = [];
  const on = <K extends keyof HTMLElementEventMap>(
    type: K,
    fn: (ev: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions | boolean,
  ): void => {
    dom.addEventListener(type, fn as EventListener, opts);
    listeners.push([type, fn as EventListener, opts]);
  };

  let dragging = false;
  let lastX = 0, lastY = 0;
  on('pointerdown', (e: PointerEvent) => {
    if (viewMode !== 'free') return;
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    dom.setPointerCapture(e.pointerId);
  });
  on('pointermove', (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    // Horizontal drag rotates around the spin axis (azim); vertical drag
    // tilts toward/away from the pole. Clamp tilt away from the
    // singularity at pole-on (≈ 5° margin).
    cameraState.azim -= dx * 0.008;
    cameraState.tilt += dy * 0.008;
    cameraState.tilt = Math.max(0.1, Math.min(Math.PI - 0.1, cameraState.tilt));
    updateCameraFromState();
    requestRender();
  });
  const endDrag = (e: PointerEvent): void => {
    dragging = false;
    if (dom.hasPointerCapture(e.pointerId)) dom.releasePointerCapture(e.pointerId);
  };
  on('pointerup', endDrag);
  on('pointercancel', endDrag);

  // Wheel-zoom requires holding Shift, so plain scroll on a page that
  // embeds the widget still scrolls the page. (Audit P1: hijacking page
  // scroll over the widget is a real obstacle to embedding.) Touch
  // pinch-zoom would be a separate gesture handler — out of scope here.
  on('wheel', (e: WheelEvent) => {
    if (!e.shiftKey) return; // let the page scroll
    e.preventDefault();
    const factor = Math.exp(e.deltaY * 0.001);
    cameraState.distance = Math.max(1.4, Math.min(20, cameraState.distance * factor));
    if (viewMode === 'free') updateCameraFromState();
    else placeCameraForEarthView();
    requestRender();
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
      requestRender();
    },
    resize(w, h): void {
      renderer.setSize(w, h);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
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

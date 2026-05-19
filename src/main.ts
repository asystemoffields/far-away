// Demo page entry point. Loads the asteroid catalog, mounts the viewer, and
// provides a top-level picker.

import { mount, type ViewerHandle } from './widget.ts';
import { DEMO_CATALOG, loadCatalogEntry, type CatalogEntry } from './data/loader.ts';
import {
  syntheticBrick,
  syntheticIcosphere,
  syntheticTumblingPotato,
} from './data/synthetic.ts';
import type { AsteroidModel } from './core/types.ts';
import './demo.css';

interface DemoEntry {
  id: string;
  label: string;
  /** Returns the AsteroidModel; supports lazy loading from the network. */
  load: () => Promise<AsteroidModel>;
  /** Sub-label rendered under the picker option. */
  hint: string;
}

interface PreparedEntry extends DemoEntry {
  initialLightCurveIndex?: number;
  initialViewMode?: 'free' | 'earth';
}

const realEntries: PreparedEntry[] = DEMO_CATALOG.map((c: CatalogEntry): PreparedEntry => ({
  id: c.id,
  label: c.name,
  load: () => loadCatalogEntry(c),
  hint:
    c.id === 'hermione' ? 'real shape + 41 real LCs; pole auto-fit from photometry'
    : 'real DAMIT data',
  // Hermione looks best with LC #10 (high-amplitude apparition) viewed
  // from Earth — that's the screenshot that sells the widget.
  initialLightCurveIndex: c.id === 'hermione' ? 9 : 0,
  initialViewMode: c.id === 'hermione' ? 'earth' : 'free',
}));

// Synthetic fixtures default to view-from-Earth: their Sun/Earth vectors
// are arbitrary (we wrote them), and a free-orbit camera at the default
// tilt happens to land on the unlit hemisphere — the body renders nearly
// pitch-black until the user drags. Earth-view always frames the lit
// side because the camera sits along the Earth direction.
const syntheticEntries: PreparedEntry[] = [
  {
    id: 'synth-potato',
    label: '(demo) bumpy ellipsoid',
    hint: 'synthetic — realistic LC, scientifically-clean fit',
    load: async () => syntheticTumblingPotato(),
    initialViewMode: 'earth',
  },
  {
    id: 'synth-brick',
    label: '(demo) elongated brick',
    hint: 'synthetic — classic two-peak LC, RMS at noise floor',
    load: async () => syntheticBrick(),
    initialViewMode: 'earth',
  },
  {
    id: 'synth-sphere',
    label: '(demo) near-sphere',
    hint: 'synthetic — flat curve, rotation-invariant sanity check',
    load: async () => syntheticIcosphere(),
    initialViewMode: 'earth',
  },
];

// Order: lead with the real-data headline (Hermione), follow with a clean
// synthetic that has a "perfect" predicted-vs-observed match (so users see
// the math is right), then the rest of the synthetic suite.
const entries: PreparedEntry[] = [
  realEntries.find((e) => e.id === 'hermione')!,
  syntheticEntries[0]!, // bumpy ellipsoid
  syntheticEntries[1]!, // brick
  syntheticEntries[2]!, // sphere
];

const app = document.getElementById('app')!;
app.innerHTML = `
  <header class="demo-header">
    <h1>DAMIT-coupled asteroid viewer</h1>
    <p class="demo-tagline">
      Side-by-side 3D shape model and photometric light curve. The shape rotates
      at its sidereal period; the predicted light curve from the shape's
      illumination geometry is overlaid on the observations that produced it.
      Drag the 3D view to orbit; click on the curve to scrub time; press play.
    </p>
    <div class="demo-controls">
      <label>asteroid
        <select id="picker"></select>
      </label>
      <span id="status" class="demo-status"></span>
    </div>
  </header>
  <div id="host" class="demo-host"></div>
  <footer class="demo-footer">
    <span>
      Data sources: shape from
      <a href="https://github.com/mkretlow/Asteroids-MDSM" target="_blank" rel="noopener">Asteroids-MDSM</a>
      (CC BY 4.0); LCs from
      <a href="https://github.com/matvii/ADAM" target="_blank" rel="noopener">matvii/ADAM</a>
      and
      <a href="https://github.com/mkretlow/DAMIT-convex" target="_blank" rel="noopener">DAMIT-convex</a>.
      DAMIT-format light-curve and shape spec from
      <a href="https://astro.troja.mff.cuni.cz/projects/damit/pages/documentation" target="_blank" rel="noopener">DAMIT</a>.
    </span>
  </footer>
`;

const picker = document.getElementById('picker') as HTMLSelectElement;
for (const e of entries) {
  const opt = document.createElement('option');
  opt.value = e.id;
  opt.textContent = `${e.label} — ${e.hint}`;
  picker.appendChild(opt);
}

const status = document.getElementById('status') as HTMLSpanElement;
const host = document.getElementById('host') as HTMLDivElement;

let handle: ViewerHandle | undefined;

// Generation counter guards against the loader race: if the user changes
// the picker while a previous load is in flight (e.g. Hermione's pole-fit
// takes ~2 s), the stale promise resolves but the newer pick has already
// bumped `currentGen`, so we ignore the stale result.
let currentGen = 0;
async function load(id: string): Promise<void> {
  const entry = entries.find((e) => e.id === id);
  if (!entry) return;
  const gen = ++currentGen;
  status.textContent = 'loading…';
  try {
    const model = await entry.load();
    if (gen !== currentGen) return; // stale: user has moved on
    if (handle) handle.dispose();
    handle = mount(host, model, {
      initialLightCurveIndex: entry.initialLightCurveIndex ?? 0,
      initialViewMode: entry.initialViewMode ?? 'free',
    });
    status.textContent = `${model.lightCurves.length} light curves, ${model.shape.faces.length / 3} facets`;
  } catch (err) {
    if (gen !== currentGen) return;
    const msg = (err as Error).message;
    status.textContent = `error: ${msg}`;
    host.textContent = '';
    const errDiv = document.createElement('div');
    errDiv.className = 'demo-error';
    errDiv.textContent = msg; // textContent, NOT innerHTML — error strings can carry untrusted content
    host.appendChild(errDiv);
  }
}

picker.addEventListener('change', () => load(picker.value));

// Default to Hermione if available, else first.
const initial = entries.find((e) => e.id === 'hermione')?.id ?? entries[0]!.id;
picker.value = initial;
load(initial);

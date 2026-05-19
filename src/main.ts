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

const realEntries = DEMO_CATALOG.map((c: CatalogEntry): DemoEntry => ({
  id: c.id,
  label: c.name,
  load: () => loadCatalogEntry(c),
  hint:
    c.id === 'hermione' ? 'real shape + 41 real LCs; pole auto-fit'
    : c.id === 'hertha' ? 'real LCs × 32 + placeholder ellipsoid shape'
    : c.id === 'damit-convex-test' ? 'Kaasalainen canonical 37-LC test set + placeholder shape'
    : 'real DAMIT data',
}));

const syntheticEntries: DemoEntry[] = [
  {
    id: 'synth-potato',
    label: '(demo) bumpy ellipsoid',
    hint: 'synthetic — realistic LC, scientifically-clean fit',
    load: async () => syntheticTumblingPotato(),
  },
  {
    id: 'synth-brick',
    label: '(demo) elongated brick',
    hint: 'synthetic — classic two-peak LC, RMS at noise floor',
    load: async () => syntheticBrick(),
  },
  {
    id: 'synth-sphere',
    label: '(demo) near-sphere',
    hint: 'synthetic — flat curve, rotation-invariant sanity check',
    load: async () => syntheticIcosphere(),
  },
];

// Order: lead with the real-data headline (Hermione), follow with a clean
// synthetic that has a "perfect" predicted-vs-observed match (so users see
// the math is right), then the remaining real and synthetic entries.
const entries: DemoEntry[] = [
  realEntries.find((e) => e.id === 'hermione')!,
  syntheticEntries[0]!, // bumpy ellipsoid
  syntheticEntries[1]!, // brick
  ...realEntries.filter((e) => e.id !== 'hermione'),
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

async function load(id: string): Promise<void> {
  const entry = entries.find((e) => e.id === id);
  if (!entry) return;
  status.textContent = 'loading…';
  try {
    const model = await entry.load();
    if (handle) handle.dispose();
    handle = mount(host, model);
    status.textContent = `${model.lightCurves.length} light curves, ${model.shape.faces.length / 3} facets`;
  } catch (err) {
    status.textContent = `error: ${(err as Error).message}`;
    host.innerHTML = `<div class="demo-error">${(err as Error).message}</div>`;
  }
}

picker.addEventListener('change', () => load(picker.value));

// Default to Hermione if available, else first.
const initial = entries.find((e) => e.id === 'hermione')?.id ?? entries[0]!.id;
picker.value = initial;
load(initial);

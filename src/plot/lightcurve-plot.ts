// uPlot wrapper rendering a single light curve: observed points + predicted
// model line, with a draggable vertical marker that drives the shared "now"
// state. JD is shown on the x-axis as a relative offset (hours) from the
// curve start so the numbers stay legible for a single-night curve.

import uPlot, { type Options as UPlotOptions } from 'uplot';
import type { LightCurve } from '../core/types.ts';

export interface PlotHandle {
  update(curve: LightCurve, predicted: Float64Array, scale: number): void;
  setJd(jd: number): void;
  resize(width: number, height: number): void;
  dispose(): void;
}

export interface PlotCallbacks {
  onScrub(jd: number): void;
}

/** Build a light-curve plot. Returns a handle that the host updates when
 *  the selected curve, predicted model, or current JD changes. */
export function buildPlot(
  container: HTMLElement,
  initialCurve: LightCurve,
  initialPredicted: Float64Array,
  initialScale: number,
  callbacks: PlotCallbacks,
): PlotHandle {
  let curve = initialCurve;
  let predicted = initialPredicted;
  let scale = initialScale;
  let currentJd = curve.points[0]?.jd ?? 0;
  let jdOrigin = currentJd;

  const data = buildData(curve, predicted, scale);
  const opts: UPlotOptions = {
    width: container.clientWidth || 480,
    height: container.clientHeight || 240,
    title: '',
    cursor: {
      drag: { x: false, y: false },
      sync: { key: 'lc-cursor' },
    },
    legend: { show: true, live: true },
    axes: [
      {
        label: 'time (hours from start of observing run)',
        labelSize: 18,
        stroke: '#c9d0db',
        grid: { stroke: '#22272e', width: 1 },
        ticks: { stroke: '#22272e' },
      },
      {
        label: 'reduced intensity (arb. units)',
        labelSize: 22,
        size: 50,
        stroke: '#c9d0db',
        grid: { stroke: '#22272e', width: 1 },
        ticks: { stroke: '#22272e' },
      },
    ],
    series: [
      { label: 't (h)' },
      {
        label: 'observed',
        stroke: '#7cc7ff',
        fill: '#7cc7ff',
        points: { show: true, size: 6 },
        paths: () => null,
      },
      {
        label: 'predicted × k',
        stroke: '#ffc14f',
        width: 2,
        points: { show: false },
      },
    ],
    scales: {
      x: { time: false },
      y: { auto: true },
    },
    hooks: {
      ready: [
        (u) => {
          // A persistent vertical marker for the current JD.
          const root = u.root.querySelector<HTMLDivElement>('.u-over');
          if (!root) return;
          const marker = document.createElement('div');
          marker.className = 'lc-jd-marker';
          marker.style.position = 'absolute';
          marker.style.top = '0';
          marker.style.bottom = '0';
          marker.style.width = '2px';
          marker.style.background = '#ff6b6b';
          marker.style.pointerEvents = 'none';
          marker.style.zIndex = '5';
          marker.setAttribute('aria-hidden', 'true');
          root.appendChild(marker);
          (u as unknown as { _jdMarker: HTMLDivElement })._jdMarker = marker;
          positionMarker(u, currentJd, jdOrigin);
        },
      ],
      setSize: [
        (u) => positionMarker(u, currentJd, jdOrigin),
      ],
    },
  };

  const u = new uPlot(opts, data, container);

  // Click anywhere in the plot to seek.
  u.root.querySelector<HTMLDivElement>('.u-over')!.addEventListener('click', (e) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const xPx = (e as MouseEvent).clientX - rect.left;
    const valX = u.posToVal(xPx, 'x');
    const jd = jdOrigin + valX / 24;
    callbacks.onScrub(jd);
  });

  return {
    update(newCurve, newPred, newScale): void {
      curve = newCurve;
      predicted = newPred;
      scale = newScale;
      jdOrigin = curve.points[0]?.jd ?? 0;
      currentJd = jdOrigin;
      u.setData(buildData(curve, predicted, scale));
      positionMarker(u, currentJd, jdOrigin);
    },
    setJd(jd): void {
      currentJd = jd;
      positionMarker(u, currentJd, jdOrigin);
    },
    resize(w, h): void {
      u.setSize({ width: w, height: h });
    },
    dispose(): void {
      u.destroy();
    },
  };
}

function buildData(
  curve: LightCurve,
  predicted: Float64Array,
  scale: number,
): uPlot.AlignedData {
  const t0 = curve.points[0]?.jd ?? 0;
  const xs: number[] = new Array(curve.points.length);
  const obs: number[] = new Array(curve.points.length);
  const mod: number[] = new Array(curve.points.length);
  for (let i = 0; i < curve.points.length; i++) {
    const p = curve.points[i]!;
    xs[i] = (p.jd - t0) * 24; // hours
    obs[i] = p.intensity;
    mod[i] = predicted[i]! * scale;
  }
  return [xs, obs, mod];
}

function positionMarker(u: uPlot, jd: number, jdOrigin: number): void {
  const marker = (u as unknown as { _jdMarker?: HTMLDivElement })._jdMarker;
  if (!marker) return;
  const valX = (jd - jdOrigin) * 24;
  const xPx = u.valToPos(valX, 'x');
  if (Number.isFinite(xPx)) {
    // Translate by −1px so the 2px line is centred on the data point's x
    // pixel — without this, at t = 0 the marker sat on top of the y-axis
    // line and visually disappeared.
    marker.style.left = `${xPx - 1}px`;
    marker.style.display = 'block';
  } else {
    marker.style.display = 'none';
  }
}

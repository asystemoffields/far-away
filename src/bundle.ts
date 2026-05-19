// Entry point for the shipped UMD + ES bundles.
//
// `src/widget.ts` is the imperative API surface (mount, parsers, fitters,
// types). `src/web-component.ts` registers the <damit-viewer> Custom
// Element by importing from widget.ts. They live in separate files to
// avoid a cyclic import — bundling them both from this entry gives the
// shipped artifact a single public surface with no temporal-dead-zone
// hazards on side-effect registration.

export * from './widget.ts';
// Side-effect import: registers <damit-viewer> when the bundle loads in
// a browser. Idempotent (window.customElements.get guards re-definition)
// and a no-op outside a browser (typeof window === 'undefined' guard).
import './web-component.ts';
export { DamitViewerElement } from './web-component.ts';

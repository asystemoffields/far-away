// The Emscripten-generated glue (dist/fitsverify.mjs) has no shipped types.
// It default-exports a module factory: () => Promise<EmscriptenModule>.
declare module '*/fitsverify.mjs' {
  const factory: (opts?: Record<string, unknown>) => Promise<unknown>;
  export default factory;
}

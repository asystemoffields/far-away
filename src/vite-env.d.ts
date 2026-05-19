// Module declarations for Vite's special asset query suffixes.
declare module '*.css?inline' {
  const css: string;
  export default css;
}
declare module 'uplot/dist/uPlot.min.css?inline' {
  const css: string;
  export default css;
}

// Vite injects `import.meta.env.BASE_URL` at build time. The shipped
// `vite/client` types declare this but it's not picked up here because we
// don't include `vite/client` in tsconfig; declare just what we use.
interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Module declarations for Vite's special asset query suffixes.
declare module '*.css?inline' {
  const css: string;
  export default css;
}
declare module 'uplot/dist/uPlot.min.css?inline' {
  const css: string;
  export default css;
}

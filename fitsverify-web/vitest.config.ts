import { defineConfig } from 'vitest/config';

// Local config so vitest doesn't walk up to the DAMIT viewer's vite.config.ts
// in the repo root (this is a standalone package within the monorepo).
export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    // The WASM module loads asynchronously on first call; give the suite room.
    testTimeout: 20000,
  },
});

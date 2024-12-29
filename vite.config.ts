import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr(), viteTsconfigPaths()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), svgr(), viteTsconfigPaths(), tailwindcss()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
  },
});

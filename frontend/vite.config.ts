import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for React + TypeScript with Vitest and API proxy
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
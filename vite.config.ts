import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/jd-portfolio/',
  server: {
    open: true,
  },
  plugins: [react()],
});

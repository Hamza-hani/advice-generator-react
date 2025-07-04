import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/advice-generator-react/', // 👈 use your repo name here exactly
});
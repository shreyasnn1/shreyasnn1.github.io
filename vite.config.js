import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: base is set in deploy workflow. For local dev, use default.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})

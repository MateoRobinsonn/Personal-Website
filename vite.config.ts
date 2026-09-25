import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://mateorobinsonn.github.io/Personal-Website/ when deployed
  // to GitHub Pages. Override with `--base=/` for other static hosts (Vercel,
  // Netlify, Cloudflare Pages) that serve the app from the domain root.
  base: process.env.VITE_BASE_PATH ?? '/Personal-Website/',
  plugins: [react(), tailwindcss()],
  build: {
    // Keep the output small and fast to parse on lower-end hardware.
    target: 'es2020',
    sourcemap: false,
  },
})

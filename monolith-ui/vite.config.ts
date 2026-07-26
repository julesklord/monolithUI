import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL is case-sensitive and matches the repo name:
// https://julesklord.github.io/monolithUI/
export default defineConfig({
  plugins: [react()],
  base: '/monolithUI/',
})

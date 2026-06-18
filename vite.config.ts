import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Served from the user-site root: https://erfanul007.github.io/
  base: '/',
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
  }
})

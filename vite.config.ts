import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/portfolio-ai/'

  return {
    plugins: [react(), tailwindcss()],
    base,
    build: {
      assetsInlineLimit: 0, // Disable inlining assets
    }
  }
})

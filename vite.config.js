import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Rasavilas-Frontend/',
  build: {
    outDir: 'dist'
  }
})

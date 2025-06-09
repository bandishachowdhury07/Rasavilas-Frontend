import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/predict': {
        target: 'https://rasavilas-services.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

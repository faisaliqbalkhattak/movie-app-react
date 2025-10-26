import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1', // Don't expose to network
    port: 5173,
    open: false
  },
  build: {
    sourcemap: false, // Don't expose source maps in production
  }
})
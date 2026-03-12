import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true, // listen on all addresses
    port: 5173,
  },

  build: {
    chunkSizeWarningLimit: 1000 // increase limit from default 500kb
  }
})
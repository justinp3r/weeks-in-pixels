import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/weeks-in-pixels/",
  server: {
    port: 5173,  // Setze den Port 5173 für die lokale Entwicklung im Container
    host: '0.0.0.0',  
  },
});
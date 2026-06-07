import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://35.89.63.251:8000',
        changeOrigin: true,
      },
      '/interaction-api': {
        target: 'http://52.40.9.135:8000',
        changeOrigin: true,
        // On supprime '/interaction-api' pour que la requête devienne '/v1/interaction' sur le serveur cible
        rewrite: (path) => path.replace(/^\/interaction-api/, ''),
      },
    }, 
  }, 
})
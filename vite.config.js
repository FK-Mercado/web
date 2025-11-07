import { defineConfig } from 'vite'

// ⚠️ Reemplaza 'nombre-del-repo' por el nombre real de tu repositorio de GitHub
export default defineConfig({
    base: '/web/',
    build: {
        outDir: 'dist'
    }
});

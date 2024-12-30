import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'client',
    lib: {
      entry: 'src/entry.ts',
      name: 'pelect-base',
      fileName: 'pelect-base',
    }
  }
})

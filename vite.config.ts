import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import viteCompression from 'vite-plugin-compression'
// import externalGlobals from 'rollup-plugin-external-globals'

import { resolve } from 'path'

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({ verbose: true, disable: false, threshold: 10240, algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ verbose: true, disable: false, threshold: 10240, algorithm: 'brotliCompress', ext: '.br' }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      // plugins: [externalGlobals({ vue: 'vue' })],
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
})

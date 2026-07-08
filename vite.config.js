import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  build: {
    // Use esbuild for fastest minification (built-in, no extra deps)
    minify: 'esbuild',
    // Target modern browsers for smaller output
    target: ['es2020', 'chrome90', 'firefox88', 'safari14'],
    // Inline small assets as base64 (< 4KB)
    assetsInlineLimit: 4096,
    // Enable CSS code splitting per chunk
    cssCodeSplit: true,
    // Warn on chunks > 800KB
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Smart manual code splitting
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@fortawesome')) return 'font-awesome'
            if (id.includes('vue-router')) return 'router'
            if (id.includes('pinia')) return 'pinia'
            if (id.includes('vue3-google-login')) return 'google-auth'
            if (id.includes('vue')) return 'vendor'
            return 'others'
          }
          // Split heavy data files into their own chunks
          if (id.includes('src/data/blogs')) return 'blog-data'
          if (id.includes('src/constants/products')) return 'product-data'
        },
        // Use content-hash filenames for aggressive caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    }
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'],
    exclude: []
  }
})


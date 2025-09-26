import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  define: {
    global: 'globalThis',
    'process.env': {},
    'process.env.NODE_ENV': '"production"'
  },
  optimizeDeps: {
    include: [
      '@polkadot/api',
      '@polkadot/api-contract',
      '@polkadot/extension-dapp',
      'libsodium-wrappers-sumo'
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

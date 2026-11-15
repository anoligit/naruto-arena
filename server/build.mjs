import { build } from 'vite'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../', import.meta.url))
await build({ root, configFile: false, publicDir: false, logLevel: 'warn', build: {
  ssr: 'server/engine.ts', outDir: 'server/dist', emptyOutDir: true, minify: false,
  rollupOptions: { output: { entryFileNames: 'engine.mjs' } },
} })

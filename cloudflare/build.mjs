import { build } from 'vite'
import { mkdir, cp, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../', import.meta.url))
// As imagens são entregues pelo site. O servidor só precisa das regras e IDs.
await build({ root, configFile: false, publicDir: false, logLevel: 'warn',
  plugins: [{ name: 'server-images', enforce: 'pre', load(id) { if (/\.(png|jpe?g|gif|webp|svg)$/i.test(id)) return 'export default "server-image"' } }],
  build: { ssr: 'server/engine.ts', outDir: 'cloudflare/generated', emptyOutDir: true, minify: true,
    rollupOptions: { output: { entryFileNames: 'engine.mjs' } } } })
await rm(new URL('./public/', import.meta.url), { recursive: true, force: true })
await mkdir(new URL('./public/naruto-arena/', import.meta.url), { recursive: true })
await cp(new URL('../dist/', import.meta.url), new URL('./public/naruto-arena/', import.meta.url), { recursive: true })

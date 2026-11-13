import { build } from 'vite'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const root = fileURLToPath(new URL('../', import.meta.url))
const outDir = path.join(root, 'node_modules/.tmp/arena-tests')
await build({
  root, configFile: false, publicDir: false, base: '/naruto-arena/', logLevel: 'error',
  build: {
    ssr: 'tests/entry.ts', outDir, emptyOutDir: true, minify: false,
    rollupOptions: { output: { entryFileNames: 'game.mjs' } },
  },
})
process.env.ARENA_TEST_MODULE = pathToFileURL(path.join(outDir, 'game.mjs')).href
for (const test of ['characters', 'kakashi', 'energy', 'haku', 'zabuza', 'indicators', 'registration', 'target-flow', 'health-preview', 'effect-order', 'counter-reports', 'indicator-duration', 'training']) {
  const result = spawnSync(process.execPath, [path.join(root, 'tests', `${test}.mjs`)], { stdio: 'inherit', env: process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
console.log('\nTodos os testes passaram.')

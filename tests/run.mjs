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
for (const test of ['catalog-pagination', 'selection-drag', 'character-config', 'retained-roster', 'retained-combat', 'energy', 'chouji', 'stacked-indicators', 'registration', 'training', 'multiplayer', 'battle-ui', 'accounts-ui']) {
  const result = spawnSync(process.execPath, [path.join(root, 'tests', `${test}.mjs`)], { stdio: 'inherit', env: process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
const engine = spawnSync(process.execPath, [path.join(root, 'server/build.mjs')], { stdio: 'inherit', env: process.env })
if (engine.error) throw engine.error
if (engine.status !== 0) process.exit(engine.status ?? 1)
const accounts = spawnSync(process.execPath, [path.join(root, 'server/accounts.test.mjs')], { stdio: 'inherit', env: process.env })
if (accounts.error) throw accounts.error
if (accounts.status !== 0) process.exit(accounts.status ?? 1)
for (const script of ['server/reconnection.test.mjs', 'server/matchmaking.test.mjs', 'server/progression.test.mjs', 'server/mission-config.test.mjs', 'server/training.test.mjs']) {
  const result = spawnSync(process.execPath, [path.join(root, script)], { stdio:'inherit', env:process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}
console.log('\nTodos os testes passaram.')

import { spawnSync } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const root = fileURLToPath(new URL('../',import.meta.url))
const configPath = fileURLToPath(new URL('./wrangler.jsonc',import.meta.url))
const cli = fileURLToPath(new URL('../node_modules/wrangler/bin/wrangler.js',import.meta.url))
function run(args,capture=false) {
  const result=spawnSync(process.execPath,[cli,...args,'--config',configPath],{cwd:root,env:{...process.env,CI:'true',CLOUDFLARE_SEND_METRICS:'false'},encoding:'utf8',stdio:capture?'pipe':'inherit'})
  if(result.status!==0) { if(capture) process.stderr.write(result.stderr || result.stdout || 'Falha na Cloudflare.'); process.exit(result.status??1) }
  return result.stdout
}
// cf:check e cf:test são locais. Publicar só ocorre ao executar este arquivo.
const check=spawnSync('npm',['run','cf:check'],{cwd:root,stdio:'inherit',env:{...process.env,CLOUDFLARE_SEND_METRICS:'false'}})
if(check.status!==0)process.exit(check.status??1)
const tests=spawnSync(process.execPath,['cloudflare/test.mjs'],{cwd:root,stdio:'inherit'})
if(tests.status!==0)process.exit(tests.status??1)
const config=JSON.parse(await readFile(configPath,'utf8'))
const binding=config.d1_databases.find(database=>database.binding==='DB')
if(binding.database_id==='00000000-0000-0000-0000-000000000000') {
  const output=run(['d1','create',binding.database_name,'--no-update-config'],true)
  process.stdout.write(output)
  const id=output.match(/database_id[^a-f0-9]+([a-f0-9-]{36})/i)?.[1]
  if(!id)throw new Error('O banco foi criado, mas seu identificador não foi encontrado. Nenhum banco existente foi substituído.')
  binding.database_id=id
  await writeFile(configPath,JSON.stringify(config,null,2)+'\n')
}
run(['d1','migrations','apply','DB','--remote'])
run(['deploy'])

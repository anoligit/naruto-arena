import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
const register=a.renderAccountForm(true), login=a.renderAccountForm(false)
for (const name of ['username','email','password','confirmPassword']) assert(register.includes(`name="${name}"`))
assert(register.includes('Nome permanente'));assert(register.includes('type="reset"'))
assert(register.includes('Mostrar senhas'));assert(/autocomplete="new-password"/i.test(register))
assert(register.includes('Símbolos, espaços e acentos são permitidos'))
assert(/autocomplete="current-password"/i.test(login));assert(!login.includes('name="confirmPassword"'))
const account={id:'test-account',username:'Anoli',email:'private@example.com',createdAt:'2026-11-15T10:00:00.000Z',avatarId:'avatar_01',team:['naruto',null,null],profile:{name:'Anoli',rank:null,clan:null,level:1,experience:0,overallRank:null,wins:0,losses:0,streak:0}}
const page=a.renderAccountPage(account)
assert(page.includes('Anoli'));assert(page.includes('private@example.com'));assert(page.includes('Editar avatar'));assert(page.includes('Sair da conta'))
assert(!page.includes('name="password"'));assert(!page.includes('value="Anoli"'))
const settings=a.renderAccountPage(account,true)
assert.equal(a.avatarIds.length,70);assert.equal(new Set(a.avatarIds).size,70)
assert.equal(a.avatarIds[0],'avatar_01');assert.equal(a.avatarIds.at(-1),'avatar_70')
assert.equal((settings.match(/type="radio"/g)??[]).length,70)
assert(settings.includes('Salvar avatar'));assert(settings.includes('Avatares disponíveis'))
assert.match(settings,/<input[^>]*checked=""[^>]*value="avatar_01"/)
assert(a.avatarImage('avatar_70'));assert.equal(a.avatarImage('naruto'),undefined)
console.log('PASS Dedicated avatar gallery includes all 70 images, selected state and save action')
console.log('PASS Account forms expose the required fields and password controls; the private profile displays the saved account and avatar without renaming')

const originalFetch=globalThis.fetch
try {
  globalThis.fetch=async (url,options)=>{
    assert.equal(url,'/api/account/preferences')
    assert.equal(options.credentials,'same-origin');assert.equal(options.method,'PATCH')
    assert.equal(options.headers['X-Arena-Account'],'test-account')
    assert.deepEqual(JSON.parse(options.body),{team:['naruto',null,null]})
    return new Response(JSON.stringify({account}),{status:200,headers:{'Content-Type':'application/json'}})
  }
  assert.equal((await a.accountRequest('preferences','PATCH',{team:['naruto',null,null]},'test-account')).id,'test-account')
  globalThis.fetch=async ()=>new Response(JSON.stringify({error:'Sessão encerrada.'}),{status:401})
  await assert.rejects(a.accountRequest('session'),error=>error.status===401 && error.message==='Sessão encerrada.')
  globalThis.fetch=async ()=>{throw new Error('offline')}
  await assert.rejects(a.accountRequest('session'),/servidor do jogo/)
  console.log('PASS Account requests include the owning account and cookie credentials, preserve typed failures and explain offline servers')
} finally {globalThis.fetch=originalFetch}

const mission=a.renderAccountPage(account,false,true)
for(const text of ['Informações da missão','Requisitos da missão','Recompensa da missão','Objetivos da missão'])assert(mission.includes(text))
assert(mission.includes(a.hakuMission.name));assert(mission.includes('Imagem da missão'))
assert.equal(a.characters.find(c=>c.id==='classico-haku').mission.name,a.hakuMission.name)
assert.equal(a.characters.find(c=>c.id==='classico-haku').mission.minimumLevel,a.hakuMission.minimumLevel)
const originalName=a.hakuMission.name
try {a.hakuMission.name='Missão editada no personagem';assert(a.renderAccountPage(account,false,true).includes('Missão editada no personagem'))}finally{a.hakuMission.name=originalName}
console.log('PASS Mission layout and labels read the character mission configuration instead of copied text.')

const lockedSelection=a.renderSelection(['classico-haku','classico-kin','classico-rin'].map(id=>a.characters.find(c=>c.id===id)))
assert(!lockedSelection.includes('character-lock'));assert(!lockedSelection.includes('Experimentar no treinamento'))
assert(/<button[^>]*disabled=""[^>]*>Treinamento<\/button>/.test(lockedSelection))
assert(!mission.includes('mission-help'));assert(!mission.includes('no time.'))
console.log('PASS Locked characters have no padlock or trial action; training requires owned characters and mission goals stay concise.')

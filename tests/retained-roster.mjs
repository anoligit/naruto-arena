import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
const expected=[...a.initialCharacterIds,'classico-haku']
assert.equal(a.characters.length,22)
assert.deepEqual(new Set(a.characters.map(c=>c.id)),new Set(expected))
assert.deepEqual(a.characterRegistrationIssues,[])
assert(a.characters.every(c=>!c.name.endsWith(' OLD')))
const configured=a.collectCharacterModules(a.configuredCharacterModules)
assert.deepEqual(configured.issues,[])
assert.deepEqual(configured.characters.map(c=>c.id),a.characters.map(c=>c.id))
for(const entry of Object.values(a.configuredCharacterModules)){
 const module=entry.default
 if(module.order&&typeof module.order==='object'){
  const position=Math.min(module.order.position,a.characters.length)
  assert.equal(a.characters[position-1].id,module.character.id,`Posição solicitada no index.ts de ${module.character.name}`)
 }
}
for(const id of a.initialCharacterIds)assert(a.canUseCharacter(id))
assert(!a.canUseCharacter('classico-haku'))
assert(a.canUseCharacter('classico-haku',{hakuUnlocked:true,hakuStreak:2}))
assert(!a.canUseCharacter('classico-kakashi',{hakuUnlocked:true,hakuStreak:2}))
assert.equal(a.hakuMission.minimumLevel,6)
assert.equal(a.hakuMission.objective.consecutiveWins,2)
assert.deepEqual(a.hakuMission.objective.charactersAnyOf,['classico-naruto','classico-sasuke'])
const cards=html=>[...html.matchAll(/data-character-id="([^"]+)"/g)].map(m=>m[1])
assert.deepEqual(cards(a.renderSelection([null,null,null])),a.characters.slice(0,21).map(c=>c.id))
// Empty fixture ID avoids the asynchronous match-recovery screen during SSR.
const account={id:'',username:'Teste',email:'test@example.com',createdAt:'2026-11-15',avatarId:null,team:[null,null,null],progression:{hakuUnlocked:true,hakuStreak:2},profile:{name:'Teste',rank:'Genin',clan:null,level:6,experience:0,overallRank:null,wins:3,losses:0,streak:3}}
const unlocked=a.renderSelection([null,null,null],account)
assert.deepEqual(cards(unlocked),a.characters.slice(0,21).map(c=>c.id))
assert.equal(a.getCatalogPage(a.characters,1,false).characters[0].id,'classico-haku')
assert(a.characterUnlockText('classico-haku',account.progression).includes('concluída'))
// Editing order controls the rendered catalog, with no group or unlock override.
const fixture=(id,order)=>({default:a.defineCharacter({id,name:id,image:'',description:'',unlockRequirement:{type:'none'},order,abilities:[]})})
const modules={'./naruto/index.ts':fixture('naruto',1),'./sakura/index.ts':fixture('sakura',3),'./hinata/index.ts':fixture('hinata',4)}
modules['./sakura/index.ts'].default.order=4
modules['./hinata/index.ts'].default.order=3
assert.deepEqual(a.orderCharacterCatalog(a.collectCharacterModules(modules).characters).map(c=>c.id),['naruto','hinata','sakura'])
let saved=JSON.stringify(['classico-naruto','classico-kakashi','classico-haku'])
globalThis.localStorage={getItem:()=>saved,setItem:(_,value)=>{saved=value}}
assert.deepEqual(a.loadTeam().map(c=>c?.id??null),['classico-naruto',null,'classico-haku'])
assert.equal(saved,JSON.stringify(['classico-naruto','classico-kakashi','classico-haku']))
console.log('PASS Exact 22-character roster; configured order; Haku mission preserved; unlocking never moves cards; removed saved members load as empty slots without overwriting storage.')

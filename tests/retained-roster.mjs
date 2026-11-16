import assert from 'node:assert/strict'
import fs from 'node:fs'
const a=await import(process.env.ARENA_TEST_MODULE)
const expected=[...a.initialCharacterIds,'classico-haku']
assert.equal(a.characters.length,22)
assert.deepEqual(new Set(a.characters.map(c=>c.id)),new Set(expected))
assert.deepEqual(a.characterRegistrationIssues,[])
assert(a.characters.every(c=>!c.name.endsWith(' OLD')))
const orders=[]
for(const dir of fs.readdirSync(new URL('../src/characters/classico/',import.meta.url))) {
 const file=new URL(`../src/characters/classico/${dir}/index.ts`,import.meta.url)
 if(!fs.existsSync(file))continue
 orders.push(Number(fs.readFileSync(file,'utf8').match(/(?:"order"|\border)\s*:\s*(\d+)/)[1]))
}
assert.deepEqual(orders.sort((a,b)=>a-b),Array.from({length:22},(_,i)=>i+1))
assert.equal(a.characters.at(-1).id,'classico-haku')
for(const id of a.initialCharacterIds)assert(a.canUseCharacter(id))
assert(!a.canUseCharacter('classico-haku'))
assert(a.canUseCharacter('classico-haku',{hakuUnlocked:true,hakuStreak:2}))
assert(!a.canUseCharacter('classico-kakashi',{hakuUnlocked:true,hakuStreak:2}))
assert.equal(a.hakuMission.minimumLevel,6)
assert.equal(a.hakuMission.objective.consecutiveWins,2)
assert.deepEqual(a.hakuMission.objective.charactersAnyOf,['classico-naruto','classico-sasuke'])
const cards=html=>[...html.matchAll(/data-character-id="([^"]+)"/g)].map(m=>m[1])
assert.deepEqual(cards(a.renderSelection([null,null,null])),a.characters.map(c=>c.id))
// Empty fixture ID avoids the asynchronous match-recovery screen during SSR.
const account={id:'',username:'Teste',email:'test@example.com',createdAt:'2026-11-15',avatarId:null,team:[null,null,null],progression:{hakuUnlocked:true,hakuStreak:2},profile:{name:'Teste',rank:'Genin',clan:null,level:6,experience:0,overallRank:null,wins:3,losses:0,streak:3}}
const unlocked=a.renderSelection([null,null,null],account)
assert.deepEqual(cards(unlocked),a.characters.map(c=>c.id))
const hakuCard=unlocked.match(/<button[^>]*data-character-id="classico-haku"[^>]*>/)[0]
assert(!hakuCard.includes('is-locked'))
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
console.log('PASS Exact 22-character roster; consecutive order; Haku mission preserved; unlocking never moves cards; removed saved members load as empty slots without overwriting storage.')

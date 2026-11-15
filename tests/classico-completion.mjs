import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
assert.deepEqual(a.characterRegistrationIssues,[])
const classic=a.characters.filter(c=>c.id.startsWith('classico-'))
assert.equal(classic.length,70)
const empty=()=>({taijutsu:0,bloodline:0,ninjutsu:0,genjutsu:0})
let used=0
for (const c of classic) {
 assert.equal(a.getBaseSkills(c).length,4,c.name)
 for (const skill of a.getBaseSkills(c)) {
  assert(skill.effects.length>0,`${c.name}/${skill.name} sem efeitos`)
  const s=a.createBattle([c,a.characters.find(c=>c.id==='naruto'),a.characters.find(c=>c.id==='sasuke')],['naruto','zaku','shino'].map(id=>a.characters.find(c=>c.id===id)),'player-1',100,1000)
  Object.values(s.players).forEach(p=>p.energy={taijutsu:99,bloodline:99,ninjutsu:99,genjutsu:99})
  const source=s.players['player-1'].team[0]
  if(skill.maxUserHealth)source.health=skill.maxUserHealth
  const effective=a.getEffectiveSkill(s,source,skill)
  for(const target of Object.values(s.players).flatMap(p=>p.team)) {
   const request={playerId:'player-1',characterInstanceId:source.instanceId,skillId:skill.id,targetInstanceId:target.instanceId,randomPayment:{...empty(),genjutsu:effective.cost.random??0}}
   if(!a.validateSkillUse(s,request,1100).ok)continue
   const before=structuredClone(s)
   const result=a.resolveTurn(s,[request],1100,{random:()=>0})
   assert(result.ok,`${c.name}/${skill.name}: ${result.reason}`)
   assert.deepEqual(s,before,'Resolver uma habilidade alterou a partida original')
   assert(Object.values(result.state.players).flatMap(p=>p.team).every(m=>Number.isFinite(m.health)&&m.health>=0&&m.health<=m.maxHealth))
   used++;break
  }
 }
}
assert(used>=250,`Poucas habilidades exercitadas: ${used}`)
console.log(`PASS All 70 classic characters register; ${used} base abilities execute without crashes, invalid HP or input mutation`)
function setup(id) {
 const s=a.createBattle([id,'naruto','sasuke'].map(id=>a.characters.find(c=>c.id===id)),['naruto','zaku','shino'].map(id=>a.characters.find(c=>c.id===id)),'player-1',100,1000)
 Object.values(s.players).forEach(p=>p.energy={taijutsu:30,bloodline:30,ninjutsu:30,genjutsu:30});return s
}
let s=setup('classico-kakashi'),source=s.players['player-1'].team[0]
let r=a.resolveTurn(s,[{playerId:'player-1',characterInstanceId:source.instanceId,skillId:'classico-kakashi-3',targetInstanceId:source.instanceId,randomPayment:empty()}],1100,{random:()=>0});assert(r.ok,r.reason)
s=a.resolveTurn(r.state,[],1100,{random:()=>0}).state;source=s.players['player-1'].team[0]
const copied=a.getBattleSkills(s,source)[2];assert.equal(copied.id,'naruto-combo');assert.deepEqual(copied.cost,{random:1})
r=a.resolveTurn(s,[{playerId:'player-1',characterInstanceId:source.instanceId,skillId:copied.id,targetInstanceId:s.players['player-2'].team[0].instanceId,randomPayment:{...empty(),genjutsu:1}}],1100,{random:()=>0})
assert(r.ok,r.reason);assert.equal(r.state.players['player-2'].team[0].health,85)
console.log('PASS Classic Kakashi copies a real enemy attack, replaces his third slot and pays its cost entirely with random chakra')
for (const id of ['classico-naruto','classico-sasuke']) {
 s=setup(id);source=s.players['player-1'].team[0];source.health=50
 r=a.resolveTurn(s,[],1100,{random:()=>0});assert(r.ok,r.reason)
 assert.equal(r.state.players['player-1'].team[0].triggeredPassives.length,1)
 s=a.resolveTurn(r.state,[],1100,{random:()=>0}).state
 r=a.resolveTurn(s,[],1100,{random:()=>0});assert(r.ok,r.reason)
 assert.equal(r.state.players['player-1'].team[0].triggeredPassives.length,1)
}
console.log('PASS Naruto and Sasuke awaken their health passives only once')

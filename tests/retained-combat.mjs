import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
const find=id=>a.characters.find(c=>c.id===id)
const pool=(n=99)=>({taijutsu:n,bloodline:n,ninjutsu:n,genjutsu:n})
function setup(character=find('classico-naruto')){
 const allies=[character,...a.characters.filter(c=>c.id!==character.id).slice(0,2)]
 const s=a.createBattle(allies,a.characters.slice(0,3),'player-1',100,1000)
 for(const p of Object.values(s.players))p.energy=pool()
 return s
}
let used=0
for(const c of a.characters){
 let count=0
 for(const skill of a.getBaseSkills(c)){
  const s=setup(c),source=s.players['player-1'].team[0]
  if(skill.maxUserHealth)source.health=skill.maxUserHealth
  const effective=a.getEffectiveSkill(s,source,skill)
  for(const target of Object.values(s.players).flatMap(p=>p.team)){
   const action={playerId:'player-1',characterInstanceId:source.instanceId,skillId:skill.id,targetInstanceId:target.instanceId,randomPayment:{...pool(0),genjutsu:effective.cost.random??0}}
   if(!a.validateSkillUse(s,action,1100).ok)continue
   const before=structuredClone(s),result=a.resolveTurn(s,[action],1100,{random:()=>0})
   assert(result.ok,`${c.id}/${skill.id}: ${result.reason}`)
   assert.deepEqual(s,before)
   for(const member of Object.values(result.state.players).flatMap(p=>p.team))assert(Number.isFinite(member.health)&&member.health>=0&&member.health<=member.maxHealth)
   count++;used++;break
  }
 }
 assert(count>=1,`${c.id} has no executable base skill`)
}
assert(used>=70,`Only ${used} skills executed`)
function cast(s,skillId,target,source=s.players['player-1'].team[0]){
 const skill=a.getBattleSkills(s,source).find(k=>k.id===skillId)
 const action={playerId:s.activePlayerId,characterInstanceId:source.instanceId,skillId,targetInstanceId:target.instanceId,randomPayment:{...pool(0),genjutsu:skill.cost.random??0}}
 const r=a.resolveTurn(s,[action],1100,{random:()=>0});assert(r.ok,r.reason);return r.state
}
let s=setup(find('classico-haku'))
s=cast(s,'classico-haku-1',s.players['player-2'].team[0])
assert.equal(s.players['player-2'].team[0].health,65)
s=setup(find('classico-haku'))
s=cast(s,'classico-haku-2',s.players['player-2'].team[0])
assert(s.players['player-2'].team[0].statuses.some(st=>st.statusId==='classico-haku-stun-1'))
s=setup(find('classico-sakura'))
s=cast(s,'classico-sakura-1',s.players['player-2'].team[0])
assert.equal(s.players['player-2'].team[0].health,80)
assert(s.players['player-2'].team[0].statuses.some(st=>st.statusId==='classico-sakura-stun'))
s=setup(find('classico-sakura'));s.players['player-1'].team[1].health=50
s=cast(s,'classico-sakura-2',s.players['player-1'].team[1])
assert.equal(s.players['player-1'].team[1].health,70)
console.log(`PASS ${used} base skills execute across all 22 characters without invalid HP or input mutation; Haku damage/stun and Sakura damage/stun/healing match current rules.`)

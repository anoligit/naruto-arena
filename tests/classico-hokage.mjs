import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const char = id => a.characters.find(c => c.id === id)
const member = (s, p, id) => s.players[p].team.find(m => m.characterId === id)
const empty = () => ({ bloodline: 0, ninjutsu: 0, taijutsu: 0, genjutsu: 0 })
function setup(id, teammates = ['naruto', 'shino'], enemies = ['naruto', 'zaku', 'shino']) {
  const s = a.createBattle([id, ...teammates].map(char), enemies.map(char), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { bloodline: 20, ninjutsu: 20, taijutsu: 20, genjutsu: 20 } })
  return s
}
function cast(s, actor, skillId, targetPlayer, targetId, advance = true) {
  const skill = a.getEffectiveSkill(s, member(s, s.activePlayerId, actor), char(actor).skillDefinitions.find(k => k.id === skillId))
  const r = a.resolveTurn(s, [{ playerId: s.activePlayerId, characterInstanceId: member(s, s.activePlayerId, actor).instanceId,
    skillId, targetInstanceId: member(s, targetPlayer, targetId).instanceId,
    randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }], 1100, { advanceToNextTurn: advance, random: () => 0 })
  assert(r.ok, r.reason); return r.state
}
function pass(s) { const r = a.resolveTurn(s, [], 1100, { random: () => 0 }); assert(r.ok, r.reason); return r.state }
function fixture(s, player, target, statusId) {
  const source = member(s, 'player-2', 'naruto')
  member(s, player, target).statuses.push({ instanceId: 'fixture:' + statusId, statusId, sourcePlayerId: 'player-2', sourceCharacterId: source.instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
}

assert.deepEqual(a.characterRegistrationIssues, [])
for(const id of ['shodai','nidaime','sandaime']) {
 const c=char('classico-'+id);assert(c);assert.equal(a.getBaseSkills(c).length,4)
 assert(c.skillDefinitions.every(k=>k.effects.length))
}
console.log('PASS Three Hokages register with four executable skills and independent IDs')
let s=setup('classico-shodai')
s=cast(s,'classico-shodai','classico-shodai-1','player-2','naruto')
assert.equal(member(s,'player-2','naruto').health,75)
assert(a.getActiveModifiers(s,member(s,'player-2','naruto')).some(m=>m.type==='stun'&&m.classes.includes('chakra')&&!m.classes.includes('mental')))
s=pass(s);assert(!a.getActiveModifiers(s,member(s,'player-2','naruto')).some(m=>m.type==='stun'))
s=setup('classico-shodai');s=cast(s,'classico-shodai','classico-shodai-2','player-2','naruto')
assert(s.players['player-2'].team.every(m=>m.health===90))
assert(s.players['player-1'].team.every(m=>m.statuses.some(st=>st.shieldRemaining===5&&st.expiration.permanent)))
s=pass(s);s=pass(s);s=pass(s)
s=cast(s,'classico-shodai','classico-shodai-2','player-2','naruto')
assert(s.players['player-1'].team.every(m=>m.statuses.filter(st=>st.shieldRemaining===5).length===2))
console.log('PASS Shodai pierces and stuns only Physical/Chakra; Branch grants stacking permanent defense')
s=setup('classico-shodai');s=cast(s,'classico-shodai','classico-shodai-3','player-2','naruto');s=pass(s)
let user=member(s,'player-1','classico-shodai')
assert.deepEqual(a.getEffectiveSkill(s,user,char('classico-shodai').skillDefinitions[0]).cost,{specific:{bloodline:1}})
assert.equal(a.getEffectiveSkill(s,user,char('classico-shodai').skillDefinitions[1]).cooldown,0)
s=cast(s,'classico-shodai','classico-shodai-2','player-2','naruto');s=pass(s)
s=cast(s,'classico-shodai','classico-shodai-2','player-2','naruto');s=pass(s)
assert.equal(a.getEffectiveSkill(s,member(s,'player-1','classico-shodai'),char('classico-shodai').skillDefinitions[1]).cooldown,1)
assert(s.players['player-1'].team.every(m=>!m.statuses.some(st=>st.statusId==='classico-shodai-shield')))
console.log('PASS Trees discounts Strangulation, removes Branch cooldown for its duration and expires timed defense')
s=setup('classico-nidaime');s=cast(s,'classico-nidaime','classico-nidaime-2','player-2','naruto')
assert(s.players['player-2'].team.every(m=>m.health===90&&a.getActiveModifiers(s,m).some(mod=>mod.type==='stun'&&mod.classes.includes('affliction'))))
s=pass(s);s=cast(s,'classico-nidaime','classico-nidaime-1','player-2','naruto')
assert.deepEqual(s.players['player-2'].team.map(m=>m.health),[50,80,80])
s=pass(s);s=pass(s)
assert.deepEqual(s.players['player-2'].team.map(m=>m.health),[40,70,70])
s=pass(s);s=pass(s)
assert.deepEqual(s.players['player-2'].team.map(m=>m.health),[40,70,70])
console.log('PASS Nidaime wave ticks exactly three times, stuns Affliction and improves Water Assault')
s=setup('classico-nidaime');s=cast(s,'classico-nidaime','classico-nidaime-3','player-1','naruto')
assert(s.players['player-1'].team.every(m=>a.getActiveModifiers(s,m).some(mod=>mod.type==='invulnerable'&&mod.classes.includes('physical')&&mod.classes.includes('mental')&&!mod.classes.includes('chakra'))))
s=pass(s);assert(s.players['player-1'].team.every(m=>!a.getActiveModifiers(s,m).some(mod=>mod.type==='invulnerable')))
console.log('PASS Darkness protects every living ally against Physical and Mental for exactly one enemy turn')
s=setup('classico-sandaime');s=cast(s,'classico-sandaime','classico-sandaime-1','player-2','naruto')
assert.equal(member(s,'player-2','naruto').health,70);s=pass(s);s=pass(s)
assert.equal(member(s,'player-2','naruto').health,60);s=pass(s);s=pass(s)
assert.equal(member(s,'player-2','naruto').health,60)
console.log('PASS Sandaime Fire deals 30 immediately and 10 on the following own turn only')
s=setup('classico-sandaime');s=cast(s,'classico-sandaime','classico-sandaime-3','player-2','naruto')
assert(s.players['player-2'].team.every(m=>m.health===85))
assert(s.players['player-1'].team.every(m=>a.getActiveModifiers(s,m).some(mod=>mod.type==='cannot-die')))
s=pass(s);s=pass(s);assert(s.players['player-2'].team.every(m=>m.health===70))
s=pass(s);s=pass(s);assert(s.players['player-2'].team.every(m=>m.health===70))
assert(s.players['player-1'].team.every(m=>!a.getActiveModifiers(s,m).some(mod=>mod.type==='cannot-die')))
console.log('PASS Enma grants temporary reduction and cannot-die, with exactly two Action attacks')

// Cobra apenas nas habilidades ofensivas da rodada seguinte.
s=setup('classico-shodai');s=cast(s,'classico-shodai','classico-shodai-3','player-2','naruto')
let actor=member(s,'player-2','naruto'),combo=char('naruto').skillDefinitions.find(k=>k.id==='naruto-combo')
assert.equal(a.getEffectiveSkill(s,actor,combo).cost.random,undefined)
s=cast(s,'naruto','naruto-combo','player-1','naruto')
assert.equal(member(s,'player-1','naruto').health,95) // 15 - 10 de escudo
s=pass(s)
actor=member(s,'player-2','naruto')
assert.equal(a.getEffectiveSkill(s,actor,combo).cost.random,2)
const clones=char('naruto').skillDefinitions.find(k=>k.id==='naruto-clones-skill')
assert.equal(a.getEffectiveSkill(s,actor,clones).cost.random,1)
s.players['player-2'].energy={bloodline:0,ninjutsu:0,taijutsu:1,genjutsu:1}
const req={playerId:'player-2',characterInstanceId:actor.instanceId,skillId:combo.id,targetInstanceId:member(s,'player-1','naruto').instanceId,randomPayment:{...empty(),genjutsu:2}}
assert.equal(a.validateSkillUse(s,req,1100).reason,'invalid-payment')
s.players['player-2'].energy.genjutsu=2
assert(a.validateSkillUse(s,req,1100).ok)
const q=[{playerId:'player-2',characterInstanceId:actor.instanceId,skillId:combo.id,targetInstanceId:req.targetInstanceId}]
assert.equal(a.getQueueBudget(s,q).randomRequired,2)
s=pass(s)
assert(!member(s,'player-2','naruto').statuses.some(st=>st.statusId==='classico-shodai-tax'))
console.log('PASS Trees does not tax the triggering attack, charges +2 random on next-turn offense only and updates validation/budget')
// Water Assault atravessa e suspende defesas anteriores, sem consumir o escudo.
s=setup('classico-nidaime',['naruto','shino'],['classico-shino','naruto','shino']);s=pass(s)
s=cast(s,'classico-shino','classico-shino-bug-wall','player-2','naruto')
fixture(s,'player-2','naruto','invulnerable-one-turn')
s=cast(s,'classico-nidaime','classico-nidaime-1','player-2','naruto',false)
assert.equal(member(s,'player-2','naruto').health,85)
assert.equal(member(s,'player-2','naruto').statuses.find(st=>st.statusId==='classico-shino-bug-defense').shieldRemaining,25)
assert(!a.getActiveModifiers(s,member(s,'player-2','naruto')).some(m=>m.type==='invulnerable'||m.type==='destructible-defense'))
let lines=a.getCharacterIndicators(s,[],member(s,'player-2','naruto'),'player-1').flatMap(i=>i.lines)
assert(lines.some(line=>line.includes('temporariamente suspensa')))
s=pass(s);s=pass(s)
assert(a.getActiveModifiers(s,member(s,'player-2','naruto')).some(m=>m.type==='destructible-defense'&&m.amount===25))
console.log('PASS Water Assault suspends prior invulnerability and shields, preserves shield points and restores defenses on expiry')
// Counter e redução anteriores não funcionam durante a suspensão.
s=setup('classico-nidaime',['naruto','shino'],['classico-zaku','naruto','shino']);s=pass(s)
s=cast(s,'classico-zaku','classico-zaku-wall-of-air','player-2','naruto')
s=cast(s,'classico-nidaime','classico-nidaime-1','player-2','naruto',false)
assert.equal(member(s,'player-2','naruto').health,85)
assert.equal(member(s,'player-1','classico-nidaime').health,100)
console.log('PASS Water Assault bypasses an existing counter without consuming it or taking retaliation')
// O selo passa por imunidades, não é limpo, e termina apenas com Sandaime morto.
s=setup('classico-sandaime',['naruto','shino'],['classico-tsunade','naruto','shino'])
member(s,'player-2','classico-tsunade').health=50
s=pass(s);s=cast(s,'classico-tsunade','classico-tsunade-2','player-2','classico-tsunade')
fixture(s,'player-2','classico-tsunade','invulnerable-one-turn')
s=cast(s,'classico-sandaime','classico-sandaime-2','player-2','classico-tsunade')
assert.equal(member(s,'player-2','classico-tsunade').health,45)
assert.equal(member(s,'player-1','classico-sandaime').health,80)
assert(a.isStunnedForSkill(s,member(s,'player-2','classico-tsunade'),char('classico-tsunade').skillDefinitions[0]))
const ctx={state:s,source:member(s,'player-2','classico-tsunade'),target:member(s,'player-2','classico-tsunade'),skill:char('classico-tsunade').skillDefinitions[1],playerId:'player-2',effectIndex:0,damageEvents:[]}
assert.equal(a.applySkillEffect({type:'remove-harmful-statuses',classes:['affliction']},ctx),null)
assert(member(s,'player-2','classico-tsunade').statuses.some(st=>st.statusId==='classico-sandaime-seal'))
s=pass(s);s=pass(s)
assert.equal(member(s,'player-2','classico-tsunade').health,5)
assert.equal(member(s,'player-1','classico-sandaime').health,60)
member(s,'player-1','classico-sandaime').health=0;s=pass(s)
assert(!member(s,'player-2','classico-tsunade').statuses.some(st=>st.statusId==='classico-sandaime-seal'))
console.log('PASS Seal bypasses Affliction immunity/invulnerability, cannot be cleansed, ticks 40/20 and ends on source death')
s=setup('classico-sandaime',['naruto','shino'],['classico-baki','naruto','shino']);s=pass(s)
s=cast(s,'classico-baki','classico-baki-3','player-2','naruto')
s=cast(s,'classico-sandaime','classico-sandaime-2','player-2','naruto')
assert(a.isStunnedForSkill(s,member(s,'player-2','naruto'),combo))
assert(a.getActiveModifiers(s,member(s,'player-2','naruto')).some(m=>m.type==='prevent-invulnerability'))
console.log('PASS Seal stun and prevention remain active even under harmful-effect immunity')
// A ordem dos ataques importa: suspender defesa não altera golpes anteriores.
function queueRequest(s, id, skillId, target) {
 const skill=a.getEffectiveSkill(s,member(s,'player-1',id),char(id).skillDefinitions.find(k=>k.id===skillId))
 return {playerId:'player-1',characterInstanceId:member(s,'player-1',id).instanceId,skillId,targetInstanceId:member(s,'player-2',target).instanceId,randomPayment:{...empty(),genjutsu:skill.cost.random??0}}
}
s=setup('classico-nidaime',['naruto','shino'],['classico-shino','naruto','shino']);s=pass(s)
s=cast(s,'classico-shino','classico-shino-bug-wall','player-2','naruto')
let attack=queueRequest(s,'naruto','naruto-combo','naruto'),water=queueRequest(s,'classico-nidaime','classico-nidaime-1','naruto')
let r=a.resolveTurn(s,[attack,water],1100,{advanceToNextTurn:false,random:()=>0})
assert(r.ok,r.reason);assert.equal(member(r.state,'player-2','naruto').health,85)
assert.equal(member(r.state,'player-2','naruto').statuses.find(st=>st.statusId==='classico-shino-bug-defense').shieldRemaining,10)
r=a.resolveTurn(s,[water,attack],1100,{advanceToNextTurn:false,random:()=>0})
assert(r.ok,r.reason);assert.equal(member(r.state,'player-2','naruto').health,70)
assert.equal(member(r.state,'player-2','naruto').statuses.find(st=>st.statusId==='classico-shino-bug-defense').shieldRemaining,25)
console.log('PASS Water Assault preserves defense for earlier attacks and bypasses it for subsequent attacks, respecting queue order')

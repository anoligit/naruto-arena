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
for (const id of ['kiba','dosu','oboro','rin','shizune','yondaime']) {
 const c = char('classico-'+id); assert(c); assert.equal(a.getBaseSkills(c).length,4)
 assert(c.skillDefinitions.every(skill => skill.effects.length > 0))
}
console.log('PASS Second batch registers six complete characters with independent IDs')
let s=setup('classico-kiba')
s=cast(s,'classico-kiba','classico-kiba-3','player-2','naruto');s=pass(s)
s=cast(s,'classico-kiba','classico-kiba-2','player-2','naruto')
assert.deepEqual(s.players['player-2'].team.map(m=>m.health),[75,85,85])
s=pass(s)
const actor=member(s,'player-1','classico-kiba')
assert.deepEqual(a.getEffectiveSkill(s,actor,char('classico-kiba').skillDefinitions[0]).cost,{specific:{taijutsu:1}})
for (const [type,loss] of [['normal',20],['piercing',20],['affliction',30]]) {
 const copy=structuredClone(s),target=member(copy,'player-1','classico-kiba')
 a.settleTurnDamage(copy,[{sourceInstanceId:member(copy,'player-2','naruto').instanceId,targetInstanceId:target.instanceId,skillId:'fixture',amount:30,damageType:type}])
 assert.equal(target.health,100-loss)
}
s=pass(s);assert.deepEqual(s.players['player-2'].team.map(m=>m.health),[50,70,70])
console.log('PASS Kiba marks add damage to direct and periodic Wolf hits; Wolf reduces Garouga cost and protects against piercing')
s=setup('classico-dosu');s=cast(s,'classico-dosu','classico-dosu-3','player-1','classico-dosu');s=pass(s)
s=cast(s,'classico-dosu','classico-dosu-2','player-2','naruto');assert.equal(member(s,'player-2','naruto').health,80);s=pass(s)
s=cast(s,'classico-dosu','classico-dosu-1','player-2','naruto');assert.equal(member(s,'player-2','naruto').health,30);s=pass(s)
s=cast(s,'classico-dosu','classico-dosu-1','player-2','zaku');assert.equal(member(s,'player-2','zaku').health,60)
console.log('PASS Dosu damage buffs add together and the following-turn Sound buff expires correctly')
s=setup('classico-oboro');s=cast(s,'classico-oboro','classico-oboro-3','player-1','classico-oboro');s=pass(s)
s=cast(s,'classico-oboro','classico-oboro-1','player-2','naruto')
assert(s.players['player-2'].team.every(m=>m.health===80&&a.getActiveModifiers(s,m).some(mod=>mod.type==='stun')))
assert(member(s,'player-1','classico-oboro').statuses.some(st=>st.shieldRemaining===30))
console.log('PASS Oboro Clones expands the full Ambush damage/stun while preserving its separate shield')
s=setup('classico-rin')
member(s,'player-1','naruto').health=40
s=cast(s,'classico-rin','classico-rin-3','player-1','naruto')
assert.equal(member(s,'player-1','naruto').health,55)
member(s,'player-1','classico-rin').health=0
s=pass(s);s=pass(s);assert.equal(member(s,'player-1','naruto').health,70)
s=pass(s);s=pass(s);assert.equal(member(s,'player-1','naruto').health,85)
console.log('PASS Rin Medical Kit heals exactly three times and its Instant effect survives the caster death')
s=setup('classico-shizune');s=cast(s,'classico-shizune','classico-shizune-2','player-2','naruto')
s=cast(s,'naruto','naruto-combo','player-1','naruto')
s=cast(s,'classico-shizune','classico-shizune-1','player-2','naruto')
assert.equal(member(s,'player-2','naruto').health,55)
console.log('PASS Poison reaction exposes the attacker for the following turn, adds non-Affliction damage and does not amplify poison')
s=setup('classico-rin',['naruto','shino'],['classico-shizune','zaku','shino']);s=pass(s)
member(s,'player-1','naruto').health=50
s=cast(s,'classico-shizune','classico-shizune-2','player-1','naruto')
assert.equal(member(s,'player-1','naruto').health,40)
s=cast(s,'classico-rin','classico-rin-2','player-1','naruto')
assert.equal(member(s,'player-1','naruto').health,65)
assert(!member(s,'player-1','naruto').statuses.some(st=>st.statusId==='classico-shizune-poison'))
s=pass(s);s=pass(s);assert.equal(member(s,'player-1','naruto').health,65)
console.log('PASS Healing Touch removes hostile Affliction statuses and stops subsequent poison damage')
s=setup('classico-yondaime');fixture(s,'player-2','naruto','invulnerable-one-turn')
s=cast(s,'classico-yondaime','classico-yondaime-1','player-2','naruto');assert.equal(member(s,'player-2','naruto').health,60);s=pass(s)
const y=member(s,'player-1','classico-yondaime'),r=a.getEffectiveSkill(s,y,char('classico-yondaime').skillDefinitions[0])
assert.deepEqual(r.cost,{specific:{ninjutsu:1}})
s=cast(s,'classico-yondaime','classico-yondaime-1','player-2','naruto');assert.equal(member(s,'player-2','naruto').health,25)
console.log('PASS Yondaime Rasengan ignores invulnerability and changes both cost and damage on the next turn')
s=setup('classico-yondaime');member(s,'player-2','naruto').health=35
s=cast(s,'classico-yondaime','classico-yondaime-3','player-2','naruto')
assert.equal(member(s,'player-2','naruto').health,0)
assert.equal(member(s,'player-1','classico-yondaime').health,85)
console.log('PASS Partial Seal executes at 10 HP and charges self-damage to Yondaime exactly once')
s=setup('classico-yondaime');s=cast(s,'classico-yondaime','classico-yondaime-2','player-1','naruto')
s=cast(s,'naruto','naruto-combo','player-1','naruto')
assert.equal(member(s,'player-1','naruto').health,100)
assert.equal(member(s,'player-2','naruto').health,85)
console.log('PASS Space Time Barrier reflects enemy physical attacks and preserves the protected ally')

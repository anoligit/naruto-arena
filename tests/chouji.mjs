import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const id = 'classico-chouji'
const character = id => a.characters.find(c => c.id === id)
const empty = () => ({ taijutsu: 0, bloodline: 0, ninjutsu: 0, genjutsu: 0 })
const member = (s, p, who) => s.players[p].team.find(m => m.characterId === who)
function setup() {
  const s = a.createBattle([id, 'naruto', 'shino'].map(character), ['naruto', 'zaku', 'shino'].map(character), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { taijutsu: 10, bloodline: 10, ninjutsu: 10, genjutsu: 10 } })
  return s
}
function request(s, suffix, target = 'naruto', player = 'player-2') {
  const actor = member(s, 'player-1', id)
  const skill = a.getEffectiveSkill(s, actor, character(id).skillDefinitions.find(k => k.id === `${id}-${suffix}`))
  return { playerId: 'player-1', characterInstanceId: actor.instanceId, skillId: skill.id,
    targetInstanceId: member(s, player, target).instanceId, randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }
}
function resolve(s, action) {
  const r = a.resolveTurn(s, action ? [action] : [], 1100, { random: () => 0 }); assert(r.ok, r.reason); return r.state
}
const next = s => resolve(s)
const pill = s => resolve(s, request(s, 'pills', id, 'player-1'))
assert.equal(a.getBaseSkills(character(id)).length, 4)
assert.equal(character(id).skillDefinitions.length, 5)
assert.equal(a.getBattleSkills(setup(), member(setup(), 'player-1', id)).length, 4)
assert.equal(a.validateSkillUse(setup(), request(setup(), 'butterfly', id, 'player-1'), 1100).reason, 'skill-replaced')
let s = setup()
for (const [index, cost, hp] of [[1, 0, 85], [2, 2, 65], [3, 4, 40]]) {
  const r = request(s, 'pills', id, 'player-1')
  assert.equal(r.randomPayment.genjutsu, cost)
  s = resolve(s, r)
  assert.equal(member(s, 'player-1', id).health, hp)
  const stages = member(s, 'player-1', id).statuses.filter(st => st.statusId.startsWith(`${id}-pill-`))
  assert.equal(stages.length, 1)
  assert.equal(stages[0].statusId, `${id}-pill-${index}`)
  s = next(s)
}
assert.equal(a.validateSkillUse(s, request(s, 'pills', id, 'player-1'), 1100).reason, 'requirements-not-met')
console.log('PASS Chouji has four usable slots, a consultation-only passive, three correctly priced pills and no fourth use')
let before = s.players['player-1'].energy.bloodline
s = next(s)
assert.equal(s.players['player-1'].energy.bloodline, before + 1)
s = next(s)
s = resolve(s, request(s, 'partial-double-size'))
assert.equal(member(s, 'player-2', 'naruto').health, 20)
console.log('PASS Butterfly grants one periodic energy and three pills raise Partial Double Size to 80 damage')
// Protection applies to normal/piercing, but not to affliction; damage is truncated.
const actor = member(s, 'player-1', id)
for (const [type, expected] of [['normal', 5], ['piercing', 5], ['affliction', 20]]) {
  const copy = structuredClone(s), target = member(copy, 'player-1', id), hp = target.health
  a.settleTurnDamage(copy, [{ sourceInstanceId: member(copy, 'player-2', 'naruto').instanceId, targetInstanceId: target.instanceId, skillId: 'fixture', amount: 20, damageType: type }])
  assert.equal(target.health, hp - expected)
}
assert.equal(actor.health, 40)
console.log('PASS Butterfly reduces normal and piercing by 75%, leaves affliction intact and does not mutate previews')
s = setup(); s = next(pill(s))
s = resolve(s, request(s, 'meat-tank'))
assert.equal(member(s, 'player-2', 'naruto').health, 80)
assert(member(s, 'player-1', id).statuses.some(st => st.statusId === `${id}-tank-protection`))
s = next(s); s = next(s)
assert.equal(member(s, 'player-2', 'naruto').health, 60)
s = next(s); s = next(s)
assert.equal(member(s, 'player-2', 'naruto').health, 60)
assert(!member(s, 'player-1', id).statuses.some(st => st.statusId === `${id}-tank-protection`))
console.log('PASS Meat Tank gains pill damage, repeats exactly once and protects through two enemy turns')
s = setup()
const target = member(s, 'player-2', 'naruto')
target.statuses.push({ instanceId: 'fixture', statusId: 'invulnerable-one-turn', sourcePlayerId: 'player-2', sourceCharacterId: target.instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
s = resolve(s, request(s, 'meat-tank'))
assert.equal(member(s, 'player-2', 'naruto').health, 100)
assert(member(s, 'player-1', id).statuses.some(st => st.statusId === `${id}-tank-protection`))
assert(!member(s, 'player-2', 'naruto').statuses.some(st => st.statusId === `${id}-tank-damage`))
console.log('PASS Meat Tank protects Chouji against an invulnerable selected enemy without damaging or marking that enemy')

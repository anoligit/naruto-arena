import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const id = 'classico-yoroi'
const character = id => a.characters.find(c => c.id === id)
const member = (s, player, who) => s.players[player].team.find(m => m.characterId === who)
const empty = () => ({ taijutsu: 0, bloodline: 0, ninjutsu: 0, genjutsu: 0 })
function setup() {
  const s = a.createBattle([id, 'naruto', 'shino'].map(character), ['naruto', 'zaku', 'shino'].map(character), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { taijutsu: 10, bloodline: 10, ninjutsu: 10, genjutsu: 10 } })
  member(s, 'player-1', id).health = 40
  return s
}
function request(s, actor, skillId, targetPlayer, targetId) {
  const source = member(s, s.activePlayerId, actor)
  const skill = character(actor).skillDefinitions.find(k => k.id === skillId)
  return { playerId: s.activePlayerId, characterInstanceId: source.instanceId, skillId,
    targetInstanceId: member(s, targetPlayer, targetId).instanceId,
    randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }
}
function resolve(s, action) {
  const r = a.resolveTurn(s, action ? [action] : [], 1100, { random: () => 0 })
  assert(r.ok, r.reason)
  return r.state
}
const cast = (s, actor, skill, tp, tid) => resolve(s, request(s, actor, skill, tp, tid))
const prepare = () => resolve(cast(setup(), id, `${id}-absorption-skill`, 'player-1', id))
assert(character(id))
assert.equal(a.getBaseSkills(character(id)).length, 4)
assert.equal(a.validateSkillUse(setup(), request(setup(), id, `${id}-energy-drain`, 'player-2', 'naruto'), 1100).reason, 'requirements-not-met')
let s = prepare()
s = cast(s, id, `${id}-energy-drain`, 'player-2', 'naruto')
assert.equal(member(s, 'player-2', 'naruto').health, 80)
assert.equal(member(s, 'player-1', id).health, 60)
// Passing and using a helpful ability do not consume the permanent weakness.
s = resolve(s); s = resolve(s)
s = cast(s, 'naruto', 'naruto-sexy', 'player-2', 'naruto')
assert(member(s, 'player-2', 'naruto').statuses.some(st => st.statusId === `${id}-weakness`))
s = resolve(s)
s = cast(s, 'naruto', 'naruto-combo', 'player-1', 'naruto')
assert.equal(member(s, 'player-1', 'naruto').health, 90)
assert(!member(s, 'player-2', 'naruto').statuses.some(st => st.statusId === `${id}-weakness`))
console.log('PASS Yoroi requires Absorption, steals actual life and consumes weakness only after the next damaging skill')
s = prepare()
s = cast(s, id, `${id}-draining-assault`, 'player-2', 'naruto')
assert.equal(member(s, 'player-2', 'naruto').health, 88)
s = resolve(s)
s = cast(s, id, `${id}-energy-drain`, 'player-2', 'naruto')
assert.equal(member(s, 'player-2', 'naruto').health, 56) // 20 + periodic 12
// Two Bloodline stolen this turn; advancing grants random turn energy, so inspect the caster instead.
assert(s.players['player-1'].energy.bloodline >= 13)
s = resolve(s); s = resolve(s)
assert.equal(member(s, 'player-2', 'naruto').health, 44)
s = resolve(s); s = resolve(s)
assert.equal(member(s, 'player-2', 'naruto').health, 44)
console.log('PASS Draining Assault steals exactly three times and improves Energy Drain only during its active period')
s = prepare(); s = cast(s, id, `${id}-draining-assault`, 'player-2', 'naruto')
s = cast(s, 'naruto', 'naruto-sexy', 'player-2', 'naruto')
s = resolve(s)
assert.equal(member(s, 'player-2', 'naruto').health, 88)
s = resolve(s); s = resolve(s)
assert.equal(member(s, 'player-2', 'naruto').health, 76)
console.log('PASS Invulnerability pauses Action drain without prolonging its duration')
s = prepare(); s = cast(s, id, `${id}-draining-assault`, 'player-2', 'naruto'); s = resolve(s)
const source = member(s, 'player-1', id)
source.statuses.push({ instanceId: 'stun-fixture', statusId: 'stun-one-turn', sourcePlayerId: 'player-2', sourceCharacterId: member(s, 'player-2', 'naruto').instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
s = resolve(s)
assert.equal(member(s, 'player-2', 'naruto').health, 88)
console.log('PASS Stun pauses both periodic life steal and energy steal')
s = prepare(); s = cast(s, id, `${id}-draining-assault`, 'player-2', 'naruto'); s = resolve(s)
s.players['player-2'].energy = { ...empty(), genjutsu: 7 }
const before = member(s, 'player-1', id).health
s = a.expireTurn(s, s.turnEndsAt)
assert.equal(member(s, 'player-2', 'naruto').health, 76)
assert.equal(member(s, 'player-1', id).health, before + 12)
assert.equal(Object.values(s.players['player-2'].energy).reduce((sum, amount) => sum + amount, 0), 10) // 7 preserved + 3 normal turn energies
console.log('PASS Timeout processes periodic drain and never invents unavailable eligible energy')

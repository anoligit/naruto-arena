import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const character = id => a.characters.find(c => c.id === id)
const empty = () => ({ taijutsu: 0, bloodline: 0, ninjutsu: 0, genjutsu: 0 })
const member = (s, player, id) => s.players[player].team.find(m => m.characterId === id)
const setup = () => {
  const s = a.createBattle(['classico-zaku', 'classico-shino', 'shino'].map(character), ['naruto', 'zaku', 'shino'].map(character), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { taijutsu: 10, bloodline: 10, ninjutsu: 10, genjutsu: 10 } })
  return s
}
function cast(s, actor, skillId, targetPlayer, targetId, advance = true) {
  const source = member(s, s.activePlayerId, actor)
  const skill = character(actor).skillDefinitions.find(k => k.id === skillId)
  const result = a.resolveTurn(s, [{ playerId: s.activePlayerId, characterInstanceId: source.instanceId, skillId,
    targetInstanceId: member(s, targetPlayer, targetId).instanceId,
    randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }], 1100, { advanceToNextTurn: advance, random: () => 0 })
  assert(result.ok, result.reason)
  return result.state
}
assert.deepEqual(a.characterRegistrationIssues, [])
for (const id of ['shino', 'zaku']) {
  const old = character(id), classic = character('classico-' + id)
  assert(old && classic)
  assert.notEqual(old.name, classic.name)
  assert.equal(a.getBaseSkills(classic).length, 4)
  assert.deepEqual(classic.skillDefinitions.map(s => s.cost), old.skillDefinitions.map(s => s.cost))
  assert.deepEqual(classic.skillDefinitions.map(s => s.cooldown), old.skillDefinitions.map(s => s.cooldown))
  assert(classic.skillDefinitions.every(s => s.id.startsWith('classico-')))
}
console.log('PASS Clássico registers alongside legacy versions, with independent IDs and catalog costs/cooldowns')
let s = setup()
s = cast(s, 'classico-shino', 'classico-shino-female-bug-skill', 'player-2', 'naruto')
s = a.resolveTurn(s, [], 1100, { advanceToNextTurn: true }).state
s = cast(s, 'shino', 'shino-chakra-leach', 'player-2', 'naruto', false)
assert.equal(member(s, 'player-2', 'naruto').health, 80)
console.log('PASS Classic Female Bug does not grant its life-steal bonus to legacy Shino')
s = setup()
s = cast(s, 'classico-zaku', 'classico-zaku-wall-of-air', 'player-1', 'shino')
s = cast(s, 'naruto', 'naruto-combo', 'player-1', 'shino')
assert.equal(member(s, 'player-1', 'shino').health, 100)
assert.equal(member(s, 'player-2', 'naruto').health, 75)
assert(member(s, 'player-1', 'classico-zaku').statuses.some(st => st.statusId === 'classico-zaku-extreme-ready'))
console.log('PASS Classic Wall of Air cancels damage, responds with its own Air Cutter and unlocks its own Extreme')
s = setup()
s = cast(s, 'classico-shino', 'classico-shino-bug-wall', 'player-1', 'classico-shino', false)
assert(s.players['player-1'].team.every(m => m.statuses.some(st => st.statusId === 'classico-shino-bug-defense' && st.shieldRemaining === 25)))
console.log('PASS Classic Bug Wall grants independent permanent defense to all three allies')

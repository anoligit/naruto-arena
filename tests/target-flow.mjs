import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const pool = (value = 10) => ({ bloodline: value, ninjutsu: value, taijutsu: value, genjutsu: value })
const team = ['zabuza', 'naruto', 'haku'].map(id => a.characters.find(character => character.id === id))
function setup() {
  const battle = a.createBattle(team, team, 'player-1', 100, 1000)
  Object.values(battle.players).forEach(player => { player.energy = pool() })
  return battle
}
const member = (battle, player, id) => battle.players[player].team.find(character => character.characterId === id)
const source = battle => member(battle, 'player-1', 'zabuza')
const mist = (battle, target = source(battle)) => ({ playerId: 'player-1', characterInstanceId: source(battle).instanceId, skillId: 'zabuza-hidden-mist-skill', targetInstanceId: target.instanceId })
const request = (battle, target) => ({ ...mist(battle, target), randomPayment: pool(0) })
function protect(battle, character) {
  character.statuses.push({ instanceId: 'protected:' + character.instanceId, statusId: 'invulnerable-one-turn', sourcePlayerId: 'player-2', sourceCharacterId: character.instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
}
let count = 0
function test(name, check) { check(); count++; console.log('PASS ' + name) }

test('Mist highlights Zabuza and all valid enemies, never other allies', () => {
  const battle = setup()
  const availability = a.getSkillAvailability(battle, [], 'player-1', source(battle).instanceId, 'zabuza-hidden-mist-skill', 1100)
  assert(availability.usable)
  assert.deepEqual(new Set(availability.targetInstanceIds), new Set([source(battle), ...battle.players['player-2'].team].map(character => character.instanceId)))
  assert.equal(a.validateSkillUse(battle, request(battle, member(battle, 'player-1', 'naruto')), 1100).reason, 'invalid-target')
})
test('Dead and invulnerable enemies cannot activate Mist; Zabuza remains selectable', () => {
  const battle = setup()
  battle.players['player-2'].team[0].health = 0
  battle.players['player-2'].team.slice(1).forEach(character => protect(battle, character))
  const availability = a.getSkillAvailability(battle, [], 'player-1', source(battle).instanceId, 'zabuza-hidden-mist-skill', 1100)
  assert.deepEqual(availability.targetInstanceIds, [source(battle).instanceId])
})
test('Attribution reserves one Genjutsu without executing or duplicating the action', () => {
  const battle = setup()
  const result = a.appendAction(battle, [], mist(battle, member(battle, 'player-2', 'haku')), 1100)
  assert(result.ok)
  assert.equal(result.queue.length, 1)
  assert.equal(a.getQueueBudget(battle, result.queue).afterSpecific.genjutsu, 9)
  assert.equal(battle.players['player-1'].energy.genjutsu, 10)
  assert.equal(source(battle).statuses.length, 0)
  assert.deepEqual(new Set(a.getPlannedTargets(battle, result.queue[0]).map(character => character.instanceId)), new Set([source(battle), ...battle.players['player-2'].team].map(character => character.instanceId)))
})
test('Self and enemy activation produce identical buffs, costs and enemy aura', () => {
  for (const targetId of [null, 'zabuza', 'naruto', 'haku']) {
    const battle = setup()
    const target = targetId ? member(battle, 'player-2', targetId) : source(battle)
    const result = a.resolveTurn(battle, [request(battle, target)], 1100)
    assert(result.ok, result.reason)
    const actor = source(result.state)
    assert.equal(actor.statuses.filter(status => status.statusId === 'zabuza-hidden-mist').length, 1)
    assert.equal(actor.skillReadyOnTurn['zabuza-hidden-mist-skill'], 5)
    assert.equal(result.state.players['player-1'].energy.genjutsu, 9)
    for (const enemy of result.state.players['player-2'].team) {
      assert.equal(enemy.health, 100)
      assert.equal(enemy.statuses.length, 0)
      assert.equal(a.getEnemyCostEffects(result.state, enemy).length, 1)
    }
    assert(a.getActiveModifiers(result.state, actor).some(modifier => modifier.type === 'damage-reduction-percent' && modifier.percent === 25))
  }
})
test('Selecting an enemy reflector does not redirect the self buff or duplicate the aura', () => {
  const battle = setup()
  const enemy = member(battle, 'player-2', 'naruto')
  enemy.statuses.push({ instanceId: 'reflect', statusId: 'kakashi-reflect', sourcePlayerId: 'player-2', sourceCharacterId: enemy.instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
  const result = a.resolveTurn(battle, [request(battle, enemy)], 1100)
  assert(result.ok)
  assert.equal(source(result.state).statuses.length, 1)
  assert(!member(result.state, 'player-2', 'naruto').statuses.some(status => status.statusId === 'zabuza-hidden-mist'))
})
test('Cancelling assigned actions restores both specific and random reservations', () => {
  const battle = setup()
  let session = a.createLocalSession(battle, 1100)
  const haku = member(battle, 'player-1', 'haku')
  const needle = { playerId: 'player-1', characterInstanceId: haku.instanceId, skillId: 'haku-water-needles', targetInstanceId: battle.players['player-2'].team[0].instanceId }
  session.queue = [mist(battle), needle]
  assert.equal(a.getQueueBudget(battle, session.queue).randomRequired, 1)
  session = a.cancelPlannedAction(session, source(battle).instanceId)
  assert.equal(a.getQueueBudget(battle, session.queue).afterSpecific.genjutsu, 10)
  assert.equal(session.queue.length, 1)
  session = a.cancelPlannedAction(session, haku.instanceId)
  assert.deepEqual(a.getQueueBudget(battle, session.queue).afterSpecific, pool())
  assert.equal(a.getQueueBudget(battle, session.queue).randomRequired, 0)
  assert.deepEqual(battle.players['player-1'].energy, pool())
  assert.equal(source(battle).statuses.length, 0)
})
test('Confirmation requires random allocation, then executes each action and cost once', () => {
  const battle = setup()
  const session = a.createLocalSession({ ...battle, phase: 'confirmation' }, 1100)
  session.queue = [mist(battle, battle.players['player-2'].team[0]), { playerId: 'player-1', characterInstanceId: member(battle, 'player-1', 'haku').instanceId, skillId: 'haku-water-needles', targetInstanceId: battle.players['player-2'].team[1].instanceId }]
  const incomplete = a.confirmSession(session, 1100)
  assert.equal(incomplete.error, 'choose-random-energy')
  assert.equal(source(incomplete.battle).statuses.length, 0)
  const complete = a.confirmSession({ ...session, randomPayment: { ...pool(0), ninjutsu: 1 } }, 1100)
  assert.equal(complete.battle.activePlayerId, 'player-2')
  assert.equal(complete.queue.length, 0)
  assert.deepEqual(complete.battle.players['player-1'].energy, { ...pool(), genjutsu: 9, bloodline: 9, ninjutsu: 9 })
  assert.equal(member(complete.battle, 'player-2', 'naruto').health, 70)
  assert.equal(source(complete.battle).statuses.length, 1)
})
test('Confirmation allows removing an action before OK, without executing it', () => {
  const battle = setup()
  const session = a.createLocalSession({ ...battle, phase: 'confirmation' }, 1100)
  session.queue = [mist(battle)]
  const cancelled = a.cancelPlannedAction(session, source(battle).instanceId)
  assert.equal(cancelled.queue.length, 0)
  assert.equal(cancelled.battle.phase, 'confirmation')
  assert.equal(source(cancelled.battle).statuses.length, 0)
  assert.deepEqual(cancelled.battle.players['player-1'].energy, pool())
})
test('Existing single-target, self-only and area actions retain their recipients', () => {
  const battle = setup()
  const naruto = member(battle, 'player-1', 'naruto')
  const enemy = member(battle, 'player-2', 'naruto')
  const combo = { playerId: 'player-1', characterInstanceId: naruto.instanceId, skillId: 'naruto-combo', targetInstanceId: enemy.instanceId }
  assert.deepEqual(a.getPlannedTargets(battle, combo).map(character => character.instanceId), [enemy.instanceId])
  const clones = { ...combo, skillId: 'naruto-clones-skill', targetInstanceId: naruto.instanceId }
  assert.deepEqual(a.getPlannedTargets(battle, clones).map(character => character.instanceId), [naruto.instanceId])
  const waterfall = { ...mist(battle, enemy), skillId: 'zabuza-great-waterfall' }
  assert.deepEqual(a.getPlannedTargets(battle, waterfall).map(character => character.instanceId), battle.players['player-2'].team.map(character => character.instanceId))
})
console.log(count + ' target/queue/confirmation groups passed')

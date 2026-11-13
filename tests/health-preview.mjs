import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const pool = (value = 20) => ({ taijutsu: value, ninjutsu: value, bloodline: value, genjutsu: value })
function setup(ids = ['naruto', 'sakura', 'haku']) {
  const team = ids.map(id => a.characters.find(character => character.id === id))
  const state = a.createBattle(team, team, 'player-1', 100, 1000)
  Object.values(state.players).forEach(player => { player.energy = pool() })
  return state
}
const member = (state, player, id) => state.players[player].team.find(character => character.characterId === id)
function action(state, actor, skill, target, owner = 'player-2') {
  return { playerId: 'player-1', characterInstanceId: member(state, 'player-1', actor).instanceId, skillId: skill, targetInstanceId: member(state, owner, target).instanceId }
}
function attach(state, player, id, statusId, sourcePlayer = player, sourceId = id, sourceSkillId) {
  member(state, player, id).statuses.push({ instanceId: 'fixture:' + statusId, statusId, sourcePlayerId: sourcePlayer, sourceCharacterId: member(state, sourcePlayer, sourceId).instanceId, sourceSkillId, appliedOnUserTurn: 0, expiration: { playerId: sourcePlayer === 'player-1' ? 'player-2' : 'player-1', afterTurn: 99 } })
}
const forecast = (state, queue) => a.previewTurnHealth(state, queue, 'player-1', 1100)
const hp = (preview, state, player, id) => preview[member(state, player, id).instanceId].after
function confirm(state, queue) {
  const budget = a.getQueueBudget(state, queue)
  const payment = pool(0)
  let needed = budget.randomRequired
  for (const type of ['taijutsu', 'bloodline', 'ninjutsu', 'genjutsu']) {
    payment[type] = Math.min(needed, budget.afterSpecific[type])
    needed -= payment[type]
  }
  return a.resolveTurn(state, a.buildConfirmedActions(state, queue, payment), 1100)
}
let checks = 0
function test(name, run) { run(); checks++; console.log('PASS ' + name) }

test('Preview forecasts assigned damage without mutating any battle or queue data', () => {
  const state = setup(), queue = [action(state, 'naruto', 'naruto-combo', 'naruto')]
  const before = structuredClone({ state, queue })
  assert.equal(hp(forecast(state, queue), state, 'player-2', 'naruto'), 85)
  assert.deepEqual({ state, queue }, before)
})
test('Combined damage applies flat reduction once and matches real resolution', () => {
  const state = setup()
  attach(state, 'player-2', 'naruto', 'naruto-clones')
  const queue = [action(state, 'naruto', 'naruto-combo', 'naruto'), action(state, 'sakura', 'sakura-ko-punch', 'naruto'), action(state, 'haku', 'haku-water-needles', 'naruto')]
  const preview = forecast(state, queue), result = confirm(state, queue)
  assert(result.ok)
  assert.equal(hp(preview, state, 'player-2', 'naruto'), 55)
  assert.equal(member(result.state, 'player-2', 'naruto').health, 55)
})
test('Percentage reduction truncates using the same combat rule', () => {
  const state = setup()
  attach(state, 'player-2', 'naruto', 'sasuke-sharingan')
  assert.equal(hp(forecast(state, [action(state, 'naruto', 'naruto-combo', 'naruto')]), state, 'player-2', 'naruto'), 93)
})
test('Enhanced piercing predicts damage through visible invulnerability and reduction', () => {
  const state = setup(['zabuza', 'naruto', 'haku'])
  attach(state, 'player-1', 'zabuza', 'zabuza-hidden-mist')
  attach(state, 'player-2', 'naruto', 'invulnerable-one-turn')
  attach(state, 'player-2', 'naruto', 'naruto-clones')
  assert.equal(hp(forecast(state, [action(state, 'zabuza', 'zabuza-silent-homicide', 'naruto')]), state, 'player-2', 'naruto'), 55)
})
test('Area damage forecasts each vulnerable enemy and skips protected targets', () => {
  const state = setup()
  attach(state, 'player-1', 'haku', 'haku-ice-mirrors')
  attach(state, 'player-2', 'sakura', 'invulnerable-one-turn')
  const preview = forecast(state, [action(state, 'haku', 'haku-water-needles', 'naruto')])
  assert.equal(hp(preview, state, 'player-2', 'naruto'), 70)
  assert.equal(hp(preview, state, 'player-2', 'sakura'), 100)
  assert.equal(hp(preview, state, 'player-2', 'haku'), 70)
})
test('Healing is previewed for allies and capped at maximum health', () => {
  const state = setup()
  member(state, 'player-1', 'naruto').health = 90
  assert.equal(hp(forecast(state, [action(state, 'sakura', 'sakura-cure', 'naruto', 'player-1')]), state, 'player-1', 'naruto'), 100)
  assert.equal(member(state, 'player-1', 'naruto').health, 90)
})
test('Visible Dogs/Raikiri execution forecasts zero without ending the real match', () => {
  const state = setup(['kakashi', 'naruto', 'sakura'])
  attach(state, 'player-2', 'naruto', 'kakashi-dogs', 'player-1', 'kakashi', 'kakashi-dogs')
  assert.equal(hp(forecast(state, [action(state, 'kakashi', 'kakashi-raikiri', 'naruto')]), state, 'player-2', 'naruto'), 0)
  assert.equal(state.phase, 'planning')
  assert.equal(member(state, 'player-2', 'naruto').health, 100)
})
test('Visible retaliation forecasts loss on the acting character too', () => {
  const state = setup(['naruto', 'sasuke', 'sakura'])
  attach(state, 'player-1', 'naruto', 'sasuke-fireball-burn', 'player-2', 'sasuke', 'sasuke-fireball')
  const preview = forecast(state, [action(state, 'naruto', 'naruto-combo', 'sakura')])
  assert.equal(hp(preview, state, 'player-1', 'naruto'), 95)
  assert.equal(hp(preview, state, 'player-2', 'sakura'), 85)
})
test('Hidden Reflect gives exactly the same forecast as no hidden effect', () => {
  const state = setup(['naruto', 'kakashi', 'sakura'])
  const queue = [action(state, 'naruto', 'naruto-combo', 'kakashi')]
  const publicResult = forecast(state, queue)
  attach(state, 'player-2', 'kakashi', 'kakashi-reflect')
  assert.deepEqual(forecast(state, queue), publicResult)
  assert.equal(hp(publicResult, state, 'player-2', 'kakashi'), 85)
  const real = confirm(state, queue)
  assert(real.ok)
  assert.equal(member(real.state, 'player-2', 'kakashi').health, 100)
  assert.equal(member(real.state, 'player-1', 'naruto').health, 85)
})
const hiddenFixture = (id, modifiers) => a.statuses.push({ id, name: 'Hidden test', invisible: true, duration: { type: 'opponent-turns', turns: 1 }, modifiers })
hiddenFixture('hidden-test-invulnerable', [{ type: 'invulnerable' }])
hiddenFixture('hidden-test-reduction', [{ type: 'damage-reduction', amount: 100 }])
hiddenFixture('hidden-test-cost', [{ type: 'enemy-skill-cost-increase', classes: ['physical'], random: 10 }])
test('Hidden invulnerability, reduction and cost cannot leak through numbers or failed forecasts', () => {
  for (const id of ['hidden-test-invulnerable', 'hidden-test-reduction', 'hidden-test-cost']) {
    const state = setup()
    state.players['player-1'].energy = { ...pool(0), taijutsu: 1 }
    const queue = [action(state, 'naruto', 'naruto-combo', 'naruto')]
    const publicResult = forecast(state, queue)
    attach(state, 'player-2', 'naruto', id)
    assert.deepEqual(forecast(state, queue), publicResult, id)
  }
})
test('Hidden effects are removed before they can cancel a visible Control effect', () => {
  const state = setup(['kakashi', 'naruto', 'sakura'])
  attach(state, 'player-2', 'naruto', 'kakashi-dogs', 'player-1', 'kakashi', 'kakashi-dogs')
  const queue = [action(state, 'kakashi', 'kakashi-raikiri', 'naruto')]
  const publicResult = forecast(state, queue)
  attach(state, 'player-2', 'naruto', 'hidden-test-invulnerable')
  assert.deepEqual(forecast(state, queue), publicResult)
  assert.equal(hp(publicResult, state, 'player-2', 'naruto'), 0)
})
test('Own invisible effects remain known; visible reflection is included', () => {
  hiddenFixture('visible-test-reflect', [{ type: 'reflect', classes: ['physical'] }])
  a.statuses.find(status => status.id === 'visible-test-reflect').invisible = false
  const state = setup()
  attach(state, 'player-2', 'naruto', 'visible-test-reflect')
  const queue = [action(state, 'naruto', 'naruto-combo', 'naruto')]
  assert.equal(hp(forecast(state, queue), state, 'player-1', 'naruto'), 85)
  attach(state, 'player-1', 'naruto', 'hidden-test-invulnerable')
  assert.equal(hp(forecast(state, queue), state, 'player-1', 'naruto'), 100)
})
test('Preview never draws turn energy or consumes the random generator', () => {
  const state = setup(), queue = [action(state, 'naruto', 'naruto-combo', 'naruto')]
  const original = Math.random
  Math.random = () => { throw new Error('Preview must not advance turns') }
  try { assert(forecast(state, queue)) } finally { Math.random = original }
  assert.equal(state.turnNumber, 1)
  assert.equal(state.activePlayerId, 'player-1')
})
test('Cancellation removes the forecast; changing target updates only the new recipient', () => {
  const state = setup()
  assert.equal(forecast(state, []), null)
  const preview = forecast(state, [action(state, 'naruto', 'naruto-combo', 'haku')])
  assert.equal(hp(preview, state, 'player-2', 'naruto'), 100)
  assert.equal(hp(preview, state, 'player-2', 'haku'), 85)
})
test('Expired, invalid, finished and other-player requests yield no preview', () => {
  const state = setup(), queue = [action(state, 'naruto', 'naruto-combo', 'naruto')]
  assert.equal(a.previewTurnHealth(state, queue, 'player-1', state.turnEndsAt), null)
  assert.equal(a.previewTurnHealth(state, queue, 'player-2', 1100), null)
  assert.equal(forecast({ ...state, phase: 'finished' }, queue), null)
  assert.equal(forecast(state, [{ ...queue[0], skillId: 'missing' }]), null)
})
test('Health bar lightens only the predicted difference and clears it after confirmation', () => {
  const damaged = a.renderHealthBar(100, 100, 70)
  assert(damaged.includes('70/100'))
  assert(!damaged.includes('→'))
  assert(damaged.includes('aria-valuenow="70"'))
  assert(damaged.includes('width:70%'))
  assert(damaged.includes('background:#4ade80'))
  assert(damaged.includes('left:70%;width:30%;background:#bbf7d0'))
  assert(damaged.includes('health-preview-segment'))
  assert(a.renderHealthBar(80, 100, 100).includes('#bbf7d0'))
  const unchanged = a.renderHealthBar(100, 100, 100)
  assert(unchanged.includes('100/100'))
  assert(unchanged.includes('#4ade80'))
  assert(!unchanged.includes('health-preview-segment'))
  const confirmed = a.renderHealthBar(70, 100)
  assert(confirmed.includes('width:70%;background:#facc15'))
  assert(!confirmed.includes('health-preview-segment'))
})
console.log(checks + ' public health-preview groups passed')

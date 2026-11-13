import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const pool = (n = 20) => ({ taijutsu: n, ninjutsu: n, bloodline: n, genjutsu: n })
function setup(ids = ['sasuke', 'naruto', 'sakura']) {
  const team = ids.map(id => a.characters.find(character => character.id === id))
  const state = a.createBattle(team, team, 'player-1', 100, 1000)
  Object.values(state.players).forEach(player => { player.energy = pool() })
  return state
}
const member = (state, player, id) => state.players[player].team.find(character => character.characterId === id)
function action(state, actor, skillId, player, target, random = 0) {
  return { playerId: state.activePlayerId, characterInstanceId: member(state, state.activePlayerId, actor).instanceId, skillId, targetInstanceId: member(state, player, target).instanceId, randomPayment: { ...pool(0), genjutsu: random } }
}
function resolve(state, actions = []) { const result = a.resolveTurn(state, actions, 1100); assert(result.ok, result.reason); return result.state }
function activeIndicators(state, player, id) { return a.getCharacterIndicators(state, [], member(state, player, id), 'player-1').filter(indicator => !indicator.counterReport && !indicator.planned) }
let checks = 0
function test(name, run) { run(); checks++; console.log('PASS ' + name) }

test('Sharingan stays visible on both Sasuke and the marked enemy throughout its full duration', () => {
  let state = setup()
  state = resolve(state, [action(state, 'sasuke', 'sasuke-sharingan', 'player-2', 'naruto')])
  const expectedDurations = ['3 turnos', '2 turnos', '2 turnos', '1 turno', 'acaba esse turno']
  for (const duration of expectedDurations) {
    const self = activeIndicators(state, 'player-1', 'sasuke')
    const enemy = activeIndicators(state, 'player-2', 'naruto')
    assert.equal(self.length, 1)
    assert.equal(enemy.length, 1)
    assert.equal(self[0].name, 'Sharingan')
    assert.equal(enemy[0].name, 'Sharingan')
    assert(self[0].lines.some(line => line.includes('50%')))
    assert(!self[0].lines.some(line => line.includes('dano adicional')))
    assert(enemy[0].lines.some(line => line.includes('Lion Combo')))
    assert(!enemy[0].lines.some(line => line.includes('Reduz o dano normal')))
    assert.equal(self[0].duration, duration)
    assert.equal(enemy[0].duration, duration)
    state = resolve(state)
  }
  assert.equal(activeIndicators(state, 'player-1', 'sasuke').length, 0)
  assert.equal(activeIndicators(state, 'player-2', 'naruto').length, 0)
})
test('Sharingan defense remains indicated when an invulnerable enemy cannot receive the mark', () => {
  let state = setup()
  member(state, 'player-2', 'naruto').statuses.push({ instanceId: 'fixture:protected', statusId: 'invulnerable-one-turn', sourcePlayerId: 'player-2', sourceCharacterId: member(state, 'player-2', 'naruto').instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
  state = resolve(state, [action(state, 'sasuke', 'sasuke-sharingan', 'player-2', 'naruto')])
  assert.equal(activeIndicators(state, 'player-1', 'sasuke').filter(indicator => indicator.name === 'Sharingan').length, 1)
  assert.equal(activeIndicators(state, 'player-2', 'naruto').filter(indicator => indicator.name === 'Sharingan').length, 0)
})
test('An area skill retains one indicator on every affected character until each effect expires', () => {
  let state = setup(['zabuza', 'kakashi', 'haku'])
  state = resolve(state, [action(state, 'zabuza', 'zabuza-great-waterfall', 'player-2', 'kakashi', 1)])
  for (const id of ['zabuza', 'kakashi', 'haku']) {
    const indicators = activeIndicators(state, 'player-2', id)
    assert.equal(indicators.length, 1)
    assert.equal(indicators[0].duration, 'acaba esse turno')
  }
  state = resolve(state)
  for (const id of ['zabuza', 'kakashi', 'haku']) assert.equal(activeIndicators(state, 'player-2', id).length, 0)
})
test('Mist shows the correct simultaneous lifetime on Zabuza and each enemy', () => {
  let state = setup(['zabuza', 'kakashi', 'haku'])
  state = resolve(state, [action(state, 'zabuza', 'zabuza-hidden-mist-skill', 'player-1', 'zabuza')])
  for (const duration of ['3 turnos', '2 turnos', '2 turnos', '1 turno', 'acaba esse turno']) {
    assert.equal(activeIndicators(state, 'player-1', 'zabuza')[0].duration, duration)
    for (const id of ['zabuza', 'kakashi', 'haku']) assert.equal(activeIndicators(state, 'player-2', id)[0].duration, duration)
    state = resolve(state)
  }
  assert.equal(activeIndicators(state, 'player-1', 'zabuza').length, 0)
  for (const id of ['zabuza', 'kakashi', 'haku']) assert.equal(activeIndicators(state, 'player-2', id).length, 0)
})
test('Early termination removes indicators from every affected recipient', () => {
  let state = setup()
  state = resolve(state, [action(state, 'sasuke', 'sasuke-sharingan', 'player-2', 'naruto')])
  member(state, 'player-1', 'sasuke').health = 0
  assert.equal(activeIndicators(state, 'player-1', 'sasuke').length, 0)
  assert.equal(activeIndicators(state, 'player-2', 'naruto').length, 0)
})
console.log(checks + ' per-recipient indicator/duration groups passed')

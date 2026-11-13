import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const pool = (n = 20) => ({ taijutsu: n, ninjutsu: n, bloodline: n, genjutsu: n })
function setup(ids = ['naruto', 'kakashi', 'sakura']) {
  const team = ids.map(id => a.characters.find(character => character.id === id))
  const state = a.createBattle(team, team, 'player-1', 100, 1000)
  Object.values(state.players).forEach(player => { player.energy = pool() })
  return state
}
const member = (state, player, id) => state.players[player].team.find(character => character.characterId === id)
function action(state, actor, skillId, owner, target, random = 0) {
  return { playerId: state.activePlayerId, characterInstanceId: member(state, state.activePlayerId, actor).instanceId, skillId, targetInstanceId: member(state, owner, target).instanceId, randomPayment: { ...pool(0), genjutsu: random } }
}
function resolve(state, actions = []) { const result = a.resolveTurn(state, actions, 1100); assert(result.ok, result.reason); return result.state }
function prepare(ids) { const state = setup(ids); return resolve(state, [action(state, 'kakashi', 'kakashi-reflect', 'player-1', 'kakashi')]) }
function attach(state, player, id, statusId, sourcePlayer = player, sourceId = id, sourceSkillId) {
  member(state, player, id).statuses.push({ instanceId: `fixture:${player}:${id}:${statusId}`, statusId, sourcePlayerId: sourcePlayer, sourceCharacterId: member(state, sourcePlayer, sourceId).instanceId, sourceSkillId, expiration: { playerId: sourcePlayer === 'player-1' ? 'player-2' : 'player-1', afterTurn: 99 } })
}
const reportsFor = (state, id = 'naruto', player = 'player-2') => a.getCharacterIndicators(state, [], member(state, player, id), player).filter(indicator => indicator.counterReport)
let count = 0
function test(name, run) { run(); count++; console.log('PASS ' + name) }

test('Origin marks retain their colors and labels without visible A/I letters', () => {
  const state = prepare()
  attach(state, 'player-2', 'naruto', 'naruto-clones')
  attach(state, 'player-1', 'naruto', 'naruto-clones')
  const html = a.renderBattle(state)
  const marks = [...html.matchAll(/<span class="effect-origin[^>]*>([^<]*)<\/span>/g)]
  assert(marks.length > 0)
  assert(marks.every(match => match[1] === ''))
  assert(html.includes('Habilidade aliada'))
})
test('An unused hidden counter expires without revealing a report', () => {
  let state = prepare()
  assert.equal(state.counterReports.length, 0)
  state = resolve(state)
  assert.equal(state.counterReports.length, 0)
  assert.equal(reportsFor(state).length, 0)
})
test('Counter reports are hidden until confirmation advances the turn', () => {
  const state = prepare(), request = action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')
  const before = structuredClone(state)
  const { randomPayment, ...planned } = request
  assert(a.previewTurnHealth(state, [planned], 'player-2', 1100))
  assert.deepEqual(state, before)
  const simulation = a.resolveTurn(state, [request], 1100, { advanceToNextTurn: false })
  assert(simulation.ok)
  assert.equal(simulation.state.counterReports.length, 1)
  assert.equal(reportsFor(simulation.state).length, 0)
  const confirmed = resolve(state, [request])
  assert.equal(reportsFor(confirmed).length, 1)
})
test('Reflection names both skills and the counter caster even after hidden defense expires', () => {
  const prepared = prepare()
  const state = resolve(prepared, [action(prepared, 'naruto', 'naruto-combo', 'player-1', 'kakashi')])
  assert.equal(member(state, 'player-1', 'kakashi').statuses.length, 0)
  const report = state.counterReports[0]
  assert.equal(report.counterSkillId, 'kakashi-reflect')
  assert.equal(report.counteredSkillId, 'naruto-combo')
  assert.equal(report.counterCharacterId, member(state, 'player-1', 'kakashi').instanceId)
  assert.equal(report.outcome, 'reflected')
  const indicator = reportsFor(state)[0]
  assert.equal(indicator.name, 'Counter: Sharingan Reflect')
  assert(indicator.lines.some(line => line.includes('Uzumaki Naruto Combo')))
  assert(indicator.lines.some(line => line.includes('Hatake Kakashi')))
  assert(indicator.image)
  assert.equal(indicator.origin, 'enemy')
})
test('The report appears only in the following turn and never returns to the countered player', () => {
  let state = prepare()
  state = resolve(state, [action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')])
  assert.equal(state.activePlayerId, 'player-1')
  assert.equal(reportsFor(state).length, 1)
  assert.equal(reportsFor(state)[0].duration, 'acaba esse turno')
  state = resolve(state)
  assert.equal(state.activePlayerId, 'player-2')
  assert.equal(reportsFor(state).length, 0)
  assert.equal(state.counterReports.length, 0)
  state = resolve(state)
  assert.equal(reportsFor(state).length, 0)
})
test('Timeout expires the notice at the end of the immediately following turn', () => {
  let state = prepare()
  state = resolve(state, [action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')])
  const session = a.createLocalSession(state, 1100)
  const expired = a.tickSession(session, state.turnEndsAt)
  assert.equal(expired.battle.counterReports.length, 0)
})
test('Reflected Control records a cancellation and identifies the cancelled skill', () => {
  const prepared = prepare()
  const state = resolve(prepared, [action(prepared, 'kakashi', 'kakashi-dogs', 'player-1', 'kakashi', 1)])
  assert.equal(state.counterReports[0].outcome, 'cancelled')
  const indicator = reportsFor(state, 'kakashi')[0]
  assert(indicator.lines.some(line => line.includes('Summoning: Ninja Dogs')))
  assert(indicator.lines.some(line => line.includes('cancelada')))
})
test('A reflected return blocked by protection still records the triggered counter', () => {
  let state = prepare()
  attach(state, 'player-2', 'naruto', 'naruto-sexy-invulnerable')
  state = resolve(state, [action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')])
  assert.equal(member(state, 'player-2', 'naruto').health, 100)
  assert.equal(state.counterReports[0].outcome, 'return-blocked')
})
test('Area skills preserve one separate report for each real counter interaction', () => {
  let state = prepare(['haku', 'kakashi', 'naruto'])
  attach(state, 'player-2', 'haku', 'haku-ice-mirrors')
  attach(state, 'player-1', 'naruto', 'kakashi-reflect', 'player-1', 'kakashi', 'kakashi-reflect')
  state = resolve(state, [action(state, 'haku', 'haku-water-needles', 'player-1', 'kakashi', 1)])
  assert.equal(state.counterReports.length, 2)
  assert.equal(new Set(state.counterReports.map(report => report.id)).size, 2)
  assert.equal(reportsFor(state, 'haku').length, 2)
})
test('Failed queues do not publish counters from rolled-back actions', () => {
  const state = prepare(), request = action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')
  const result = a.resolveTurn(state, [request, request], 1100)
  assert.equal(result.ok, false)
  assert.equal(result.state, state)
  assert.equal(state.counterReports.length, 0)
})
test('Prevented invulnerability records which protection was stopped and by which skill', () => {
  const state = setup()
  a.statuses.push({ id: 'fixture-counter-prevent', name: 'Hidden prevention', invisible: true, duration: { type: 'opponent-turns', turns: 2 }, modifiers: [{ type: 'prevent-invulnerability' }] })
  a.characters.find(character => character.id === 'naruto').skillDefinitions.push({ id: 'fixture-counter-skill', name: 'Counter prevention test', description: 'Test', image: a.characters[0].image, cost: {}, cooldown: 0, target: 'enemy', classes: ['mental'], effects: [{ type: 'apply-status', statusId: 'fixture-counter-prevent' }] })
  attach(state, 'player-1', 'sakura', 'fixture-counter-prevent', 'player-2', 'naruto', 'fixture-counter-skill')
  assert.equal(a.getCharacterIndicators(state, [], member(state, 'player-1', 'sakura'), 'player-1').length, 0)
  const confirmed = resolve(state, [action(state, 'sakura', 'sakura-replacement', 'player-1', 'sakura', 1)])
  assert.equal(confirmed.counterReports[0].outcome, 'prevented-invulnerability')
  const indicator = reportsFor(confirmed, 'sakura', 'player-1')[0]
  assert(indicator.lines.some(line => line.includes('Replacement Technique')))
  assert(indicator.lines.some(line => line.includes('Counter prevention test')))
})
test('Counter notices keep chronological position and identify themselves as records', () => {
  let state = prepare()
  attach(state, 'player-2', 'naruto', 'naruto-clones')
  // Give the older visible effect its true earlier position.
  member(state, 'player-2', 'naruto').statuses[0].appliedAt = { turn: 1, action: 0, effect: 0 }
  state = resolve(state, [action(state, 'naruto', 'naruto-combo', 'player-1', 'kakashi')])
  const indicators = a.getCharacterIndicators(state, [], member(state, 'player-2', 'naruto'), 'player-2')
  assert.equal(indicators.at(-1).counterReport, true)
  assert(a.renderBattle(state).includes('Consultar counter ocorrido'))
})
test('Both Kakashis stay distinct when Raikiri and a Zabuza attack hit the same reflector', () => {
  for (const zabuzaSkill of ['zabuza-silent-homicide', 'zabuza-great-waterfall']) {
    for (const reverse of [false, true]) {
      let state = setup(['zabuza', 'kakashi', 'haku'])
      state = resolve(resolve(resolve(state)))
      state = resolve(state, [action(state, 'kakashi', 'kakashi-reflect', 'player-2', 'kakashi')])
      const attacks = [action(state, 'kakashi', 'kakashi-raikiri', 'player-2', 'kakashi'), action(state, 'zabuza', zabuzaSkill, 'player-2', 'kakashi', 1)]
      if (reverse) attacks.reverse()
      state = resolve(state, attacks)
      assert.equal(state.turnNumber, 6)
      assert.equal(member(state, 'player-2', 'kakashi').health, 100)
      assert.equal(member(state, 'player-1', 'kakashi').health, 50)
      assert.equal(member(state, 'player-1', 'zabuza').health, zabuzaSkill === 'zabuza-silent-homicide' ? 70 : 90)
      assert.equal(state.counterReports.length, 2)
      assert(state.counterReports.every(report => report.counterCharacterId === member(state, 'player-2', 'kakashi').instanceId))
      const indicator = reportsFor(state, 'kakashi', 'player-1')[0]
      assert(indicator.lines.some(line => line.includes('Habilidade counterada: Raikiri de Hatake Kakashi · Jogador 1')))
      assert(indicator.lines.some(line => line.includes('Destino do retorno: Hatake Kakashi · Jogador 1')))
      assert(indicator.lines.some(line => line.includes('Alvo original: Hatake Kakashi · Jogador 2')))
    }
  }
})
console.log(count + ' counter reveal/color-only groups passed')

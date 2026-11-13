import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const pool = (n = 20) => ({ taijutsu: n, ninjutsu: n, bloodline: n, genjutsu: n })
const ids = ['naruto', 'sakura', 'haku']
const team = ids.map(id => a.characters.find(character => character.id === id))
const status = (id, modifiers, extra = {}) => ({ id, name: id, duration: { type: 'opponent-turns', turns: 3 }, modifiers, ...extra })
a.statuses.push(
  status('fixture-prevent', [{ type: 'prevent-invulnerability' }]),
  status('fixture-guard', [{ type: 'invulnerable', classes: ['physical', 'chakra'] }]),
  status('fixture-mixed', [{ type: 'invulnerable' }, { type: 'damage-reduction', amount: 15 }]),
  status('fixture-hidden-prevent', [{ type: 'prevent-invulnerability' }], { invisible: true }),
  status('fixture-visible-reflect', [{ type: 'reflect', classes: ['physical'] }]),
)
function skill(character, id, target, statusId, cost = {}) {
  const definition = { id, name: id, description: 'Test-only ability', image: character.image, cost, cooldown: 2, target, classes: ['mental', 'instant'], effects: [{ type: 'apply-status', statusId }] }
  character.skillDefinitions.push(definition)
  return definition
}
skill(team[0], 'fixture-block-enemy', 'enemy', 'fixture-prevent')
skill(team[0], 'fixture-block-ally', 'ally', 'fixture-prevent')
skill(team[1], 'fixture-self-guard', 'self', 'fixture-guard', { specific: { ninjutsu: 1 } })
skill(team[2], 'fixture-self-mixed', 'self', 'fixture-mixed')
skill(team[2], 'fixture-ally-guard', 'ally', 'fixture-guard')
function setup() {
  const state = a.createBattle(team, team, 'player-1', 100, 1000)
  Object.values(state.players).forEach(player => { player.energy = pool() })
  return state
}
const member = (state, owner, id) => state.players[owner].team.find(character => character.characterId === id)
function action(state, actor, skillId, targetOwner, target) {
  return { playerId: state.activePlayerId, characterInstanceId: member(state, state.activePlayerId, actor).instanceId, skillId, targetInstanceId: member(state, targetOwner, target).instanceId, randomPayment: pool(0) }
}
function resolve(state, actions) { const result = a.resolveTurn(state, actions, 1100); assert(result.ok, result.reason); return result.state }
function attach(state, owner, id, statusId, turn, sourceOwner = owner, sourceId = id) {
  const active = { instanceId: `fixture:${owner}:${id}:${statusId}`, statusId, sourcePlayerId: sourceOwner, sourceCharacterId: member(state, sourceOwner, sourceId).instanceId, appliedAt: { turn, action: 0, effect: 0 }, expiration: { playerId: owner, afterTurn: 99 } }
  member(state, owner, id).statuses.push(active)
  return active
}
const physical = team[0].skillDefinitions.find(skill => skill.id === 'naruto-combo')
let count = 0
function test(name, run) { run(); count++; console.log('PASS ' + name) }

test('Prevention first: protection skill is usable, pays cost/cooldown, but grants no invulnerability', () => {
  let state = setup()
  state = resolve(state, [action(state, 'naruto', 'fixture-block-enemy', 'player-2', 'sakura')])
  const before = state.players['player-2'].energy.ninjutsu
  state = resolve(state, [action(state, 'sakura', 'fixture-self-guard', 'player-2', 'sakura')])
  const target = member(state, 'player-2', 'sakura')
  assert(!a.isInvulnerableToSkill(state, target, physical))
  assert(!target.statuses.some(active => active.statusId === 'fixture-guard'))
  assert.equal(state.players['player-2'].energy.ninjutsu, before - 1)
  assert.equal(target.lastSkillUsedOnTurn, 1)
  assert.equal(target.skillReadyOnTurn['fixture-self-guard'], 4)
})
test('Protection first: later prevention cannot remove it or reset its duration', () => {
  let state = setup()
  state = resolve(state, [action(state, 'sakura', 'fixture-self-guard', 'player-1', 'sakura')])
  const expiration = structuredClone(member(state, 'player-1', 'sakura').statuses[0].expiration)
  state = resolve(state, [action(state, 'naruto', 'fixture-block-enemy', 'player-1', 'sakura')])
  const target = member(state, 'player-1', 'sakura')
  assert(a.isInvulnerableToSkill(state, target, physical))
  assert.deepEqual(target.statuses.find(active => active.statusId === 'fixture-guard').expiration, expiration)
  assert(target.statuses.some(active => active.statusId === 'fixture-prevent'))
  assert(!a.isInvulnerableToSkill(state, target, { ...physical, classes: ['mental'] }))
})
test('The same two queued actions produce the two different chronological outcomes', () => {
  for (const blockFirst of [true, false]) {
    const state = setup()
    const block = action(state, 'naruto', 'fixture-block-ally', 'player-1', 'sakura')
    const guard = action(state, 'sakura', 'fixture-self-guard', 'player-1', 'sakura')
    const result = resolve(state, blockFirst ? [block, guard] : [guard, block])
    assert.equal(a.isInvulnerableToSkill(result, member(result, 'player-1', 'sakura'), physical), !blockFirst)
    const applications = member(result, 'player-1', 'sakura').statuses
    assert(applications.every(active => active.appliedAt.turn === 1))
    if (!blockFirst) assert.deepEqual(applications.map(active => active.appliedAt.action), [0, 1])
  }
})
test('Blocking one modifier preserves the other effects and never reactivates protection later', () => {
  let state = setup()
  state = resolve(state, [action(state, 'naruto', 'fixture-block-ally', 'player-1', 'haku'), action(state, 'haku', 'fixture-self-mixed', 'player-1', 'haku')])
  const target = member(state, 'player-1', 'haku')
  const mixed = target.statuses.find(active => active.statusId === 'fixture-mixed')
  assert.deepEqual(mixed.blockedModifiers, ['invulnerable'])
  assert.deepEqual(a.getAppliedModifiers(mixed), [{ type: 'damage-reduction', amount: 15 }])
  target.statuses = [mixed]
  assert(!a.isInvulnerableToSkill(state, target, physical))
  assert(a.getActiveModifiers(state, target).some(modifier => modifier.type === 'damage-reduction'))
  const indicator = a.getCharacterIndicators(state, [], target, 'player-1')[0]
  assert(indicator.lines.some(line => line.includes('invulnerabilidade desta aplicação foi impedida')))
})
test('Haku retains the area-skill upgrade when only Mirrors protection is blocked', () => {
  let state = setup()
  state = resolve(state, [action(state, 'naruto', 'fixture-block-ally', 'player-1', 'haku'), action(state, 'haku', 'haku-demonic-ice-mirrors', 'player-1', 'haku')])
  let haku = member(state, 'player-1', 'haku')
  assert(!a.isInvulnerableToSkill(state, haku, physical))
  assert(haku.statuses.some(active => active.statusId === 'haku-ice-mirrors'))
  state = resolve(state, [])
  haku = member(state, 'player-1', 'haku')
  state = resolve(state, [{ ...action(state, 'haku', 'haku-water-needles', 'player-2', 'naruto'), randomPayment: { ...pool(0), genjutsu: 1 } }])
  assert.deepEqual(state.players['player-2'].team.map(character => character.health), [70, 70, 70])
})
test('Auras and direct effects are merged by application time, not grouped by origin or effect kind', () => {
  const state = setup()
  // Use a real Zabuza as one source for his existing aura.
  state.players['player-2'].team[0].characterId = 'zabuza'
  const target = member(state, 'player-1', 'sakura')
  attach(state, 'player-2', 'zabuza', 'zabuza-hidden-mist', 1)
  attach(state, 'player-1', 'sakura', 'fixture-guard', 3)
  attach(state, 'player-1', 'sakura', 'fixture-prevent', 2, 'player-2', 'haku')
  const list = a.getCharacterIndicators(state, [], target, 'player-1')
  assert.deepEqual(list.map(indicator => indicator.order.turn), [1, 2, 3])
  assert.deepEqual(list.map(indicator => indicator.origin), ['enemy', 'enemy', 'ally'])
  const opponentView = a.getCharacterIndicators(state, [], target, 'player-2')
  assert.deepEqual(opponentView.map(indicator => indicator.id), list.map(indicator => indicator.id))
  assert.deepEqual(opponentView.map(indicator => indicator.origin), ['ally', 'ally', 'enemy'])
})
test('Planned indicators follow queue order and move after already-applied effects', () => {
  const state = setup()
  const target = member(state, 'player-2', 'naruto')
  attach(state, 'player-2', 'naruto', 'fixture-prevent', 0)
  const first = action(state, 'naruto', 'naruto-combo', 'player-2', 'naruto')
  const second = action(state, 'sakura', 'sakura-ko-punch', 'player-2', 'naruto')
  const list = a.getCharacterIndicators(state, [first, second], target, 'player-1')
  assert.deepEqual(list.map(indicator => indicator.planned), [false, true, true])
  assert.deepEqual(list.slice(1).map(indicator => indicator.name), ['Uzumaki Naruto Combo', 'KO Punch'])
  const reordered = a.getCharacterIndicators(state, [second, first], target, 'player-1')
  assert.deepEqual(reordered.slice(1).map(indicator => indicator.name), ['KO Punch', 'Uzumaki Naruto Combo'])
})
test('Invisible enemy effects do not produce icons, badges or gaps in displayed numbering', () => {
  const state = setup()
  const target = member(state, 'player-1', 'sakura')
  attach(state, 'player-1', 'sakura', 'fixture-guard', 1)
  const before = a.getCharacterIndicators(state, [], target, 'player-1')
  attach(state, 'player-1', 'sakura', 'fixture-hidden-prevent', 2, 'player-2', 'naruto')
  assert.deepEqual(a.getCharacterIndicators(state, [], target, 'player-1'), before)
})
test('Hidden prevention cannot reveal itself in the health forecast of newly planned protection', () => {
  const state = setup()
  attach(state, 'player-2', 'naruto', 'fixture-visible-reflect', 0)
  const queue = [action(state, 'haku', 'fixture-ally-guard', 'player-1', 'sakura'), action(state, 'sakura', 'sakura-ko-punch', 'player-2', 'naruto')].map(({ randomPayment, ...planned }) => planned)
  const before = a.previewTurnHealth(state, queue, 'player-1', 1100)
  assert(before)
  attach(state, 'player-1', 'sakura', 'fixture-hidden-prevent', 0, 'player-2', 'naruto')
  assert.deepEqual(a.previewTurnHealth(state, queue, 'player-1', 1100), before)
})
test('Rendered indicators identify allied and enemy sources without changing the icon row', () => {
  const state = setup()
  attach(state, 'player-1', 'sakura', 'fixture-guard', 1)
  attach(state, 'player-1', 'sakura', 'fixture-prevent', 2, 'player-2', 'naruto')
  const html = a.renderBattle(state)
  assert(html.includes('effect-origin-ally'))
  assert(html.includes('effect-origin-enemy'))
  assert(html.includes('Habilidade aliada'))
  assert(html.includes('Habilidade inimiga'))
})
console.log(count + ' chronological application/indicator groups passed')

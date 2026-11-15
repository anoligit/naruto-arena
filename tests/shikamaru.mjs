import assert from 'node:assert/strict'
import fs from 'node:fs'
const a = await import(process.env.ARENA_TEST_MODULE)
const shika = a.characters.find(c => c.id === 'shikamaru')
const roster = ['shikamaru', 'naruto', 'kakashi'].map(id => a.characters.find(c => c.id === id))
const empty = () => ({ taijutsu: 0, ninjutsu: 0, bloodline: 0, genjutsu: 0 })
const member = (s, player, id) => s.players[player].team.find(c => c.characterId === id)
const other = id => id === 'player-1' ? 'player-2' : 'player-1'
function setup() {
  const s = a.createBattle(roster, roster, 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { taijutsu: 20, ninjutsu: 20, bloodline: 20, genjutsu: 20 } })
  return s
}
function attach(s, player, id, statusId, sourcePlayer = player, sourceId = id) {
  const source = member(s, sourcePlayer, sourceId)
  const skill = a.characters.find(c => c.id === sourceId).skillDefinitions.find(k => k.effects.some(e => e.type === 'apply-status' && e.statusId === statusId))
  member(s, player, id).statuses.push({ instanceId: `fixture:${player}:${id}:${statusId}`, statusId, sourcePlayerId: sourcePlayer, sourceCharacterId: source.instanceId, sourceSkillId: skill?.id, expiration: { playerId: other(sourcePlayer), afterTurn: 99 } })
}
function request(s, skillId, sourceId = 'shikamaru', targetId = 'naruto') {
  const playerId = s.activePlayerId, source = member(s, playerId, sourceId)
  const base = a.characters.find(c => c.id === sourceId).skillDefinitions.find(k => k.id === skillId)
  const skill = a.getEffectiveSkill(s, source, base)
  return { playerId, characterInstanceId: source.instanceId, skillId, targetInstanceId: member(s, skill.target === 'self' ? playerId : other(playerId), targetId).instanceId, randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }
}
function resolve(s, actions = []) { const result = a.resolveTurn(s, actions, 1100); assert(result.ok, result.reason); return result.state }
const cast = (s, skill, source, target) => resolve(s, [request(s, skill, source, target)])
const active = (s, player, id, status) => a.getActiveStatuses(s, member(s, player, id)).filter(x => x.statusId === status)
const meditate = 'shikamaru-meditate-skill', bind = 'shikamaru-shadow-neck-bind', imitation = 'shikamaru-shadow-imitation'
let count = 0
function test(name, run) { run(); count++; console.log('PASS ' + name) }

test('Shikamaru registers automatically with five local images, converted classes and costs', () => {
  assert(shika); assert.equal(a.characterRegistrationIssues.length, 0)
  assert.equal(shika.unlockRequirement.type, 'none')
  assert.equal(shika.skillDefinitions.length, 4)
  assert.deepEqual(shika.skillDefinitions.map(k => k.cooldown), [0, 1, 3, 4])
  assert.deepEqual(shika.skillDefinitions.map(k => k.cost), [{ random: 1 }, { specific: { genjutsu: 1 } }, { specific: { genjutsu: 1, bloodline: 1 } }, { random: 1 }])
  for (const name of ['char_1', 'skill_1', 'skill_2', 'skill_3', 'skill_4']) assert(fs.existsSync(`src/characters/shikamaru/images/shikamaru_${name}.jpg`))
  assert(shika.skillDefinitions.every(k => !k.classes.includes('strategic') && !k.classes.includes('energy')))
})
test('Meditate marks one enemy, cannot reflect and cannot refresh an existing mark', () => {
  let s = setup(); attach(s, 'player-2', 'kakashi', 'kakashi-reflect')
  s = cast(s, meditate, 'shikamaru', 'kakashi')
  assert.equal(active(s, 'player-2', 'kakashi', 'shikamaru-meditate').length, 1)
  assert.equal(active(s, 'player-1', 'shikamaru', 'shikamaru-meditate').length, 0)
  assert.equal(s.counterReports.length, 0)
  assert.equal(member(s, 'player-2', 'kakashi').health, 100)
  s = resolve(s)
  const validation = a.validateSkillUse(s, request(s, meditate, 'shikamaru', 'kakashi'), 1100)
  assert.equal(validation.reason, 'target-already-affected')
  const usable = a.getSkillAvailability(s, [], 'player-1', 'player-1:shikamaru', meditate, 1100)
  assert(!usable.targetInstanceIds.includes('player-2:kakashi'))
  assert(usable.targetInstanceIds.includes('player-2:naruto'))
})
test('Meditate respects invulnerability, works through stun immunity and expires after five enemy turns', () => {
  let s = setup(); attach(s, 'player-2', 'naruto', 'invulnerable-one-turn')
  assert.equal(a.validateSkillUse(s, request(s, meditate), 1100).reason, 'target-invulnerable')
  s = setup(); attach(s, 'player-2', 'naruto', 'sakura-inner')
  s = cast(s, meditate)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-meditate').length, 1)
  for (let i = 0; i < 8; i++) s = resolve(s)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-meditate').length, 1)
  s = resolve(s)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-meditate').length, 0)
})
test('Bind hits each vulnerable enemy once; normal duration is one enemy turn and no repeated damage', () => {
  let s = setup(); attach(s, 'player-2', 'kakashi', 'invulnerable-one-turn')
  s = cast(s, bind)
  assert.deepEqual(s.players['player-2'].team.map(c => c.health), [85, 85, 100])
  assert.equal(active(s, 'player-2', 'kakashi', 'shikamaru-neck-bind').length, 0)
  s = resolve(s)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-neck-bind').length, 0)
  s = resolve(s)
  assert.equal(member(s, 'player-2', 'naruto').health, 85)
})
function markedBind() {
  let s = setup()
  s = cast(s, meditate); s = resolve(s); s = cast(s, bind)
  return s
}
test('Meditate extends only its target: 15 now and 15 next own turn, without extra energy or cooldown', () => {
  let s = markedBind()
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-neck-bind')[0].expiration.afterTurn, 3)
  assert.equal(active(s, 'player-2', 'kakashi', 'shikamaru-neck-bind')[0].expiration.afterTurn, 2)
  s = resolve(s)
  const before = structuredClone(s.players['player-1'])
  s = resolve(s)
  assert.deepEqual(s.players['player-2'].team.map(c => c.health), [85, 70, 85])
  assert.deepEqual(s.players['player-1'].energy, before.energy)
  assert.deepEqual(member(s, 'player-1', 'shikamaru').skillReadyOnTurn, before.team[0].skillReadyOnTurn)
  s = resolve(s)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-neck-bind').length, 0)
  s = resolve(s)
  assert.equal(member(s, 'player-2', 'naruto').health, 70)
})
test('Persistent damage also runs at timeout without mutating the previous snapshot', () => {
  let s = resolve(markedBind()), before = structuredClone(s)
  const session = a.tickSession(a.createLocalSession(s, 1100), s.turnEndsAt)
  assert.equal(member(session.battle, 'player-2', 'naruto').health, 70)
  assert.deepEqual(s, before)
})
test('Action pauses under stun and preserves earlier damage reduction', () => {
  let s = resolve(markedBind())
  attach(s, 'player-1', 'shikamaru', 'stun-physical-chakra-one-turn')
  s = resolve(s)
  assert.equal(member(s, 'player-2', 'naruto').health, 85)
  let protectedState = setup(); attach(protectedState, 'player-2', 'naruto', 'naruto-clones')
  protectedState = cast(protectedState, bind)
  assert.equal(member(protectedState, 'player-2', 'naruto').health, 100)
  assert(a.getActiveModifiers(protectedState, member(protectedState, 'player-2', 'naruto')).some(m => m.type === 'damage-reduction'))
})
test('Bind blocks new invulnerability and reduction but Clones still unlocks Rasengan', () => {
  let s = cast(setup(), bind)
  s = cast(s, 'naruto-clones-skill', 'naruto', 'naruto')
  const target = member(s, 'player-2', 'naruto')
  assert(active(s, 'player-2', 'naruto', 'naruto-clones').length)
  assert(!a.getActiveModifiers(s, target).some(m => m.type === 'damage-reduction'))
  assert(a.getBattleSkills(s, target).some(k => k.id === 'naruto-rasengan'))
  s = cast(setup(), bind)
  s = cast(s, 'shikamaru-hide', 'shikamaru', 'shikamaru')
  assert(!a.isInvulnerableToSkill(s, member(s, 'player-2', 'shikamaru'), shika.skillDefinitions[1]))
  assert(s.counterReports.some(r => r.outcome === 'prevented-invulnerability'))
})
test('Action suspension also stops preventing new invulnerability', () => {
  let s = cast(setup(), bind)
  attach(s, 'player-1', 'shikamaru', 'stun-physical-chakra-one-turn', 'player-2', 'naruto')
  s = cast(s, 'shikamaru-hide', 'shikamaru', 'shikamaru')
  assert(a.isInvulnerableToSkill(s, member(s, 'player-2', 'shikamaru'), shika.skillDefinitions[1]))
})
test('Imitation stuns three classes for one turn, or three only on the matching marked target', () => {
  let s = cast(setup(), meditate); s = resolve(s); s = cast(s, imitation)
  const marked = active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun')[0]
  assert.equal(marked.expiration.afterTurn, 4)
  assert.equal(active(s, 'player-2', 'kakashi', 'shikamaru-imitation-stun')[0].expiration.afterTurn, 2)
  assert.equal(a.validateSkillUse(s, request(s, 'kakashi-raikiri', 'kakashi', 'naruto'), 1100).reason, 'stunned')
  assert.equal(a.validateSkillUse(s, request(s, 'naruto-combo', 'naruto', 'naruto'), 1100).reason, 'stunned')
  assert.equal(a.validateSkillUse(s, request(s, 'shikamaru-hide', 'shikamaru', 'shikamaru'), 1100).reason, 'stunned')
  s = resolve(s)
  assert.equal(active(s, 'player-2', 'kakashi', 'shikamaru-imitation-stun').length, 0)
  assert(active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun').length)
  s = resolve(s); s = resolve(s); s = resolve(s); s = resolve(s)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun').length, 0)
})
test('Marks from another source do not extend Imitation and immunity blocks its stun', () => {
  let s = setup(); attach(s, 'player-2', 'naruto', 'shikamaru-meditate', 'player-2', 'shikamaru')
  s = cast(s, imitation)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun')[0].expiration.afterTurn, 1)
  s = setup(); attach(s, 'player-2', 'naruto', 'sakura-inner')
  s = cast(s, imitation)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun').length, 0)
})
test('Control breaks on source stun, source death or target invulnerability', () => {
  for (const cause of ['stun', 'death', 'invulnerability']) {
    let s = cast(setup(), imitation)
    if (cause === 'stun') attach(s, 'player-1', 'shikamaru', 'stun-one-turn')
    if (cause === 'death') member(s, 'player-1', 'shikamaru').health = 0
    if (cause === 'invulnerability') attach(s, 'player-2', 'naruto', 'invulnerable-one-turn')
    assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-imitation-stun').length, 0, cause)
  }
})
test('Hide protects for one enemy turn, and marked duration appears independently in indicators', () => {
  let s = cast(setup(), 'shikamaru-hide', 'shikamaru', 'shikamaru')
  assert(a.isInvulnerableToSkill(s, member(s, 'player-1', 'shikamaru'), shika.skillDefinitions[1]))
  s = resolve(s)
  assert(!a.isInvulnerableToSkill(s, member(s, 'player-1', 'shikamaru'), shika.skillDefinitions[1]))
  s = markedBind()
  const marked = a.getCharacterIndicators(s, [], member(s, 'player-2', 'naruto'), 'player-1').find(i => i.name === 'Shadow-Neck Bind')
  const plain = a.getCharacterIndicators(s, [], member(s, 'player-2', 'kakashi'), 'player-1').find(i => i.name === 'Shadow-Neck Bind')
  assert.equal(marked.duration, '2 turnos'); assert.equal(plain.duration, 'acaba esse turno')
})
test('New percentage reduction is blocked without removing Inner Sakura stun immunity', () => {
  let s = a.createBattle(roster, ['sasuke', 'sakura', 'zabuza'].map(id => a.characters.find(c => c.id === id)), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { taijutsu: 20, ninjutsu: 20, bloodline: 20, genjutsu: 20 } })
  s = cast(s, bind, 'shikamaru', 'sakura')
  s = cast(s, 'sakura-inner', 'sakura', 'sakura')
  const modifiers = a.getActiveModifiers(s, member(s, 'player-2', 'sakura'))
  assert(!modifiers.some(modifier => modifier.type === 'damage-reduction-percent'))
  assert(modifiers.some(modifier => modifier.type === 'stun-immunity'))
})
test('Source death ends Bind and prevents later periodic damage', () => {
  let s = resolve(markedBind())
  member(s, 'player-1', 'shikamaru').health = 0
  s = resolve(s)
  assert.equal(member(s, 'player-2', 'naruto').health, 85)
  assert.equal(active(s, 'player-2', 'naruto', 'shikamaru-neck-bind').length, 0)
})
console.log(`${count} Shikamaru groups passed`)

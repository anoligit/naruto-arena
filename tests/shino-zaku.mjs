import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const character = id => a.characters.find(c => c.id === id)
const member = (s, player, id) => s.players[player].team.find(c => c.characterId === id)
const other = player => player === 'player-1' ? 'player-2' : 'player-1'
const empty = () => ({ taijutsu: 0, genjutsu: 0, ninjutsu: 0, bloodline: 0 })
const total = pool => Object.values(pool).reduce((sum, value) => sum + value, 0)
function setup(first = ['zaku', 'shino', 'naruto'], second = first) {
  const state = a.createBattle(first.map(character), second.map(character), 'player-1', 100, 1000)
  Object.values(state.players).forEach(p => { p.energy = { taijutsu: 10, genjutsu: 10, ninjutsu: 10, bloodline: 10 } })
  return state
}
function attach(s, player, id, statusId, sourcePlayer = player, sourceId = id) {
  const source = member(s, sourcePlayer, sourceId)
  const skill = character(sourceId).skillDefinitions.find(k => k.effects.some(e => e.type === 'apply-status' && e.statusId === statusId))
  member(s, player, id).statuses.push({ instanceId: `fixture:${statusId}:${id}`, statusId, sourcePlayerId: sourcePlayer, sourceCharacterId: source.instanceId, sourceSkillId: skill?.id, expiration: { playerId: other(sourcePlayer), afterTurn: 99 } })
}
function request(s, sourceId, skillId, targetId, targetPlayer) {
  const playerId = s.activePlayerId, source = member(s, playerId, sourceId)
  const skill = a.getEffectiveSkill(s, source, character(sourceId).skillDefinitions.find(k => k.id === skillId))
  return { playerId, characterInstanceId: source.instanceId, skillId,
    targetInstanceId: member(s, targetPlayer ?? (skill.target === 'self' || skill.target === 'ally' ? playerId : other(playerId)), targetId).instanceId,
    randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }
}
function resolve(s, actions = [], advance = true) {
  const result = a.resolveTurn(s, actions, 1100, { advanceToNextTurn: advance, random: () => 0 })
  assert(result.ok, result.reason)
  return result.state
}
const cast = (s, source, skill, target, advance = true) => resolve(s, [request(s, source, skill, target)], advance)
const status = (s, player, id, statusId) => a.getActiveStatuses(s, member(s, player, id)).filter(active => active.statusId === statusId)
const defense = (s, player, id) => status(s, player, id, 'shino-bug-defense').reduce((sum, active) => sum + active.shieldRemaining, 0)
let count = 0
function test(name, run) { run(); count++; console.log('PASS ' + name) }

test('Both characters register with four base slots, real images, costs and cooldowns', () => {
  assert.equal(a.characterRegistrationIssues.length, 0)
  for (const id of ['shino', 'zaku']) {
    const c = character(id); assert(c)
    assert.equal(a.getBaseSkills(c).length, 4)
    assert.equal(c.unlockRequirement.type, 'none')
    for (const image of [c.image, ...c.skillDefinitions.map(k => k.image)]) assert(image.includes('/naruto-arena/') || image.startsWith('data:image'))
    assert(a.renderSelection([c, null, null]).includes(c.name))
  }
  assert.deepEqual(character('zaku').skillDefinitions.map(k => k.cooldown), [0, 2, 0, 4])
  assert.deepEqual(character('shino').skillDefinitions.map(k => k.cooldown), [0, 1, 3, 4])
})
test('Air Cutter deals 25 and unlocks Extreme only for the following own turn', () => {
  let s = setup()
  assert.equal(a.validateSkillUse(s, request(s, 'zaku', 'zaku-extreme-air-cutter', 'naruto'), 1100).reason, 'requirements-not-met')
  s = cast(s, 'zaku', 'zaku-air-cutter', 'naruto')
  assert.equal(member(s, 'player-2', 'naruto').health, 75)
  s = resolve(s)
  assert(a.validateSkillUse(s, request(s, 'zaku', 'zaku-extreme-air-cutter', 'naruto'), 1100).ok)
  s = resolve(s); s = resolve(s)
  assert.equal(a.validateSkillUse(s, request(s, 'zaku', 'zaku-extreme-air-cutter', 'naruto'), 1100).reason, 'requirements-not-met')
})
test('Extreme hits each vulnerable enemy for 45 and grants just one random energy', () => {
  let s = cast(setup(), 'zaku', 'zaku-air-cutter', 'naruto'); s = resolve(s)
  attach(s, 'player-2', 'shino', 'invulnerable-one-turn')
  const before = total(s.players['player-1'].energy)
  s = cast(s, 'zaku', 'zaku-extreme-air-cutter', 'naruto', false)
  assert.deepEqual(s.players['player-2'].team.map(m => m.health), [55, 100, 30])
  assert.equal(total(s.players['player-1'].energy), before - 3 + 1)
})
test('Wall is invisible, cancels only the first harmful skill and responds with full Air Cutter for free', () => {
  let s = cast(setup(), 'zaku', 'zaku-wall-of-air', 'naruto')
  assert.equal(a.getCharacterIndicators(s, [], member(s, 'player-1', 'naruto'), 'player-2').length, 0)
  const before = structuredClone(s.players['player-1'])
  s = resolve(s, [request(s, 'zaku', 'zaku-air-cutter', 'naruto'), request(s, 'naruto', 'naruto-combo', 'naruto')], false)
  assert.equal(member(s, 'player-1', 'naruto').health, 85)
  assert.equal(member(s, 'player-2', 'zaku').health, 75)
  assert.equal(status(s, 'player-1', 'naruto', 'zaku-air-wall').length, 0)
  assert(status(s, 'player-1', 'zaku', 'zaku-extreme-ready').length)
  assert.deepEqual(s.players['player-1'].energy, before.energy)
  assert.deepEqual(member(s, 'player-1', 'zaku').skillReadyOnTurn, before.team[0].skillReadyOnTurn)
  assert.equal(s.counterReports.length, 1)
  assert.equal(s.counterReports[0].counterSkillId, 'zaku-wall-of-air')
})
test('A protected last AoE target cancels the whole skill before any earlier target takes damage or energy is gained', () => {
  let s = cast(setup(), 'zaku', 'zaku-wall-of-air', 'naruto')
  attach(s, 'player-2', 'zaku', 'zaku-extreme-ready')
  const before = total(s.players['player-2'].energy)
  s = cast(s, 'zaku', 'zaku-extreme-air-cutter', 'naruto', false)
  assert.deepEqual(s.players['player-1'].team.map(m => m.health), [100, 100, 100])
  assert.equal(member(s, 'player-2', 'zaku').health, 75)
  assert.equal(total(s.players['player-2'].energy), before - 3)
})
test('Uncounterable Meditate bypasses Wall, and the hidden counter does not leak through HP preview', () => {
  let s = setup(['zaku', 'shino', 'naruto'], ['shikamaru', 'zaku', 'naruto'])
  s = cast(s, 'zaku', 'zaku-wall-of-air', 'naruto')
  s = cast(s, 'shikamaru', 'shikamaru-meditate-skill', 'naruto', false)
  assert(status(s, 'player-1', 'naruto', 'zaku-air-wall').length)
  assert.equal(s.counterReports.length, 0)
  const attack = request(s, 'zaku', 'zaku-air-cutter', 'naruto')
  const { randomPayment, ...planned } = attack
  assert.equal(a.previewTurnHealth(s, [planned], 'player-2', 1100)['player-1:naruto'].after, 75)
})
test('Wall responses respect invulnerability and can be reflected', () => {
  let s = cast(setup(), 'zaku', 'zaku-wall-of-air', 'naruto')
  attach(s, 'player-2', 'zaku', 'invulnerable-one-turn')
  s = cast(s, 'zaku', 'zaku-air-cutter', 'naruto', false)
  assert.equal(member(s, 'player-2', 'zaku').health, 100)
  assert.equal(member(s, 'player-1', 'naruto').health, 100)
  s = setup(['zaku', 'shino', 'naruto'], ['kakashi', 'shino', 'naruto'])
  s = cast(s, 'zaku', 'zaku-wall-of-air', 'naruto')
  attach(s, 'player-2', 'kakashi', 'kakashi-reflect')
  s = cast(s, 'kakashi', 'kakashi-raikiri', 'naruto', false)
  assert.equal(member(s, 'player-2', 'kakashi').health, 100)
  assert.equal(member(s, 'player-1', 'zaku').health, 75)
})
test('Chakra Leach steals 20 life, heals Shino and transfers one eligible enemy energy', () => {
  let s = setup(); member(s, 'player-1', 'shino').health = 60
  s.players['player-2'].energy = { ...empty(), taijutsu: 1, bloodline: 3 }
  const before = structuredClone(s)
  s = cast(s, 'shino', 'shino-chakra-leach', 'naruto', false)
  assert.equal(member(s, 'player-2', 'naruto').health, 80)
  assert.equal(member(s, 'player-1', 'shino').health, 80)
  assert.equal(s.players['player-2'].energy.taijutsu, 0)
  assert.equal(s.players['player-1'].energy.taijutsu, 11)
  assert.equal(s.players['player-2'].energy.bloodline, 3)
  assert.equal(before.players['player-2'].energy.taijutsu, 1)
})
test('Life steal respects actual remaining health, max health and absent eligible energy', () => {
  let s = setup(); member(s, 'player-1', 'shino').health = 95; member(s, 'player-2', 'naruto').health = 3
  s.players['player-2'].energy = { ...empty(), ninjutsu: 2 }
  s = cast(s, 'shino', 'shino-chakra-leach', 'naruto', false)
  assert.equal(member(s, 'player-1', 'shino').health, 98)
  assert.equal(member(s, 'player-2', 'naruto').health, 0)
  assert.equal(s.players['player-2'].energy.ninjutsu, 2)
  s = cast(setup(), 'shino', 'shino-chakra-leach', 'naruto', false)
  assert.equal(member(s, 'player-1', 'shino').health, 100)
})
test('Earlier lethal damage cannot be stolen again as healing', () => {
  let s = setup(); member(s, 'player-1', 'shino').health = 60; member(s, 'player-2', 'naruto').health = 25
  s = resolve(s, [request(s, 'zaku', 'zaku-air-cutter', 'naruto'), request(s, 'shino', 'shino-chakra-leach', 'naruto')], false)
  assert.equal(member(s, 'player-1', 'shino').health, 60)
})
test('Female Bug costs nothing, cannot refresh, and boosts life steal only from its own Shino', () => {
  let s = setup(); const before = total(s.players['player-1'].energy)
  s = cast(s, 'shino', 'shino-female-bug-skill', 'naruto')
  assert.equal(total(s.players['player-1'].energy), before)
  s = resolve(s)
  s = resolve(s); s = resolve(s)
  assert.equal(a.validateSkillUse(s, request(s, 'shino', 'shino-female-bug-skill', 'naruto'), 1100).reason, 'target-already-affected')
  member(s, 'player-1', 'shino').health = 60
  s = cast(s, 'shino', 'shino-chakra-leach', 'naruto', false)
  assert.equal(member(s, 'player-2', 'naruto').health, 75)
  assert.equal(member(s, 'player-1', 'shino').health, 85)
})
test('Female Bug affects the next new normal attack, without reducing affliction or old periodic damage', () => {
  let s = cast(setup(), 'shino', 'shino-female-bug-skill', 'zaku')
  s = cast(s, 'zaku', 'zaku-air-cutter', 'naruto')
  assert.equal(member(s, 'player-1', 'naruto').health, 80)
  assert(!a.getActiveModifiers(s, member(s, 'player-2', 'zaku')).some(m => m.type === 'outgoing-damage-reduction'))
  s = cast(setup(), 'shino', 'shino-female-bug-skill', 'shino')
  s = cast(s, 'shino', 'shino-chakra-leach', 'naruto')
  assert.equal(member(s, 'player-1', 'naruto').health, 80)
})
test('Bug Wall covers all living allies, stays permanent and reports its defense amount', () => {
  let s = setup(); member(s, 'player-1', 'naruto').health = 0
  s = cast(s, 'shino', 'shino-bug-wall', 'shino')
  assert.equal(defense(s, 'player-1', 'shino'), 25)
  assert.equal(defense(s, 'player-1', 'zaku'), 25)
  assert.equal(defense(s, 'player-1', 'naruto'), 0)
  for (let i = 0; i < 12; i++) s = resolve(s)
  assert.equal(defense(s, 'player-1', 'shino'), 25)
  const indicator = a.getCharacterIndicators(s, [], member(s, 'player-1', 'shino'), 'player-1').find(i => i.name === 'Bug Wall')
  assert.equal(indicator.duration, 'Até ser destruída.')
  assert(indicator.lines.some(line => line.includes('25 pontos')))
})
test('Normal damage consumes defense, then overflows into HP; depleted indicators disappear', () => {
  let s = cast(setup(), 'shino', 'shino-bug-wall', 'shino')
  s = cast(s, 'naruto', 'naruto-combo', 'shino')
  assert.equal(member(s, 'player-1', 'shino').health, 100)
  assert.equal(defense(s, 'player-1', 'shino'), 10)
  s = resolve(s); s = cast(s, 'naruto', 'naruto-combo', 'shino')
  assert.equal(member(s, 'player-1', 'shino').health, 95)
  assert.equal(defense(s, 'player-1', 'shino'), 0)
  assert(!a.getCharacterIndicators(s, [], member(s, 'player-1', 'shino'), 'player-1').some(i => i.name === 'Bug Wall'))
})
test('Piercing consumes defense, affliction passes through without consuming it', () => {
  let s = setup(['zaku', 'shino', 'naruto'], ['kakashi', 'shino', 'naruto'])
  s = cast(s, 'shino', 'shino-bug-wall', 'shino')
  s = cast(s, 'kakashi', 'kakashi-raikiri', 'naruto')
  assert.equal(member(s, 'player-1', 'naruto').health, 75)
  s = cast(setup(), 'shino', 'shino-bug-wall', 'shino')
  s = cast(s, 'shino', 'shino-chakra-leach', 'naruto')
  assert.equal(member(s, 'player-1', 'naruto').health, 80)
  assert.equal(defense(s, 'player-1', 'naruto'), 25)
})
test('Bug Wall stacks, normal reduction applies first and the defense survives Shino death', () => {
  let s = cast(setup(), 'shino', 'shino-bug-wall', 'shino')
  for (let i = 0; i < 7; i++) s = resolve(s)
  s = cast(s, 'shino', 'shino-bug-wall', 'shino')
  assert.equal(defense(s, 'player-1', 'naruto'), 50)
  attach(s, 'player-1', 'naruto', 'naruto-clones')
  member(s, 'player-1', 'shino').health = 0
  s = cast(s, 'zaku', 'zaku-air-cutter', 'naruto')
  assert.equal(member(s, 'player-1', 'naruto').health, 100)
  assert.equal(defense(s, 'player-1', 'naruto'), 40)
})
test('Both fourth skills use normal invulnerability, and failed actions mutate nothing', () => {
  for (const [id, skill] of [['shino', 'shino-bug-clone'], ['zaku', 'zaku-airwave-deflection']]) {
    let s = cast(setup(), id, skill, id)
    const before = structuredClone(s)
    assert.equal(a.validateSkillUse(s, request(s, 'naruto', 'naruto-combo', id), 1100).reason, 'target-invulnerable')
    assert.deepEqual(s, before)
    s = resolve(s)
    assert(!a.isInvulnerableToSkill(s, member(s, 'player-1', id), character('naruto').skillDefinitions[0]))
  }
})
test('Old periodic damage does not trigger Female Bug, and its mark expires after three enemy turns', () => {
  let s = setup(['zaku', 'shino', 'naruto'], ['shikamaru', 'shino', 'naruto'])
  attach(s, 'player-1', 'naruto', 'shikamaru-neck-bind', 'player-2', 'shikamaru')
  s = cast(s, 'shino', 'shino-female-bug-skill', 'shikamaru')
  s = resolve(s, [], false)
  assert.equal(member(s, 'player-1', 'naruto').health, 85)
  assert(!member(s, 'player-2', 'shikamaru').statuses.some(active => active.statusId === 'shino-female-weakness'))
  s = cast(setup(), 'shino', 'shino-female-bug-skill', 'naruto')
  for (let i = 0; i < 5; i++) s = resolve(s)
  assert.equal(status(s, 'player-2', 'naruto', 'shino-female-bug').length, 0)
})
test('Shield is not damage reduction and still applies under Shadow-Neck Bind', () => {
  let s = setup(['shikamaru', 'naruto', 'kakashi'], ['zaku', 'shino', 'naruto'])
  s = cast(s, 'shikamaru', 'shikamaru-shadow-neck-bind', 'shino')
  s = cast(s, 'shino', 'shino-bug-wall', 'shino')
  for (const target of ['zaku', 'shino', 'naruto']) assert.equal(defense(s, 'player-2', target), 25)
})
test('Response Air Cutter also triggers existing on-skill-use effects, without spending a new action', () => {
  let s = setup(['zaku', 'shino', 'naruto'], ['sasuke', 'shino', 'naruto'])
  s = cast(s, 'zaku', 'zaku-wall-of-air', 'naruto')
  attach(s, 'player-1', 'zaku', 'sasuke-fireball-burn', 'player-2', 'sasuke')
  s = cast(s, 'naruto', 'naruto-combo', 'naruto', false)
  assert.equal(member(s, 'player-1', 'zaku').health, 95)
  assert.equal(member(s, 'player-1', 'naruto').health, 100)
})
console.log(`${count} Shino/Zaku groups passed`)

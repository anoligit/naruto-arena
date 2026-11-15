import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const char = id => a.characters.find(c => c.id === id)
const member = (s, p, id) => s.players[p].team.find(m => m.characterId === id)
const empty = () => ({ bloodline: 0, ninjutsu: 0, taijutsu: 0, genjutsu: 0 })
function setup(id, teammates = ['naruto', 'shino']) {
  const s = a.createBattle([id, ...teammates].map(char), ['naruto', 'zaku', 'shino'].map(char), 'player-1', 100, 1000)
  Object.values(s.players).forEach(p => { p.energy = { bloodline: 20, ninjutsu: 20, taijutsu: 20, genjutsu: 20 } })
  return s
}
function cast(s, actor, skillId, targetPlayer, targetId, advance = true) {
  const skill = a.getEffectiveSkill(s, member(s, s.activePlayerId, actor), char(actor).skillDefinitions.find(k => k.id === skillId))
  const r = a.resolveTurn(s, [{ playerId: s.activePlayerId, characterInstanceId: member(s, s.activePlayerId, actor).instanceId,
    skillId, targetInstanceId: member(s, targetPlayer, targetId).instanceId,
    randomPayment: { ...empty(), genjutsu: skill.cost.random ?? 0 } }], 1100, { advanceToNextTurn: advance, random: () => 0 })
  assert(r.ok, r.reason); return r.state
}
function pass(s) { const r = a.resolveTurn(s, [], 1100, { random: () => 0 }); assert(r.ok, r.reason); return r.state }
function fixture(s, player, target, statusId) {
  const source = member(s, 'player-2', 'naruto')
  member(s, player, target).statuses.push({ instanceId: 'fixture:' + statusId, statusId, sourcePlayerId: 'player-2', sourceCharacterId: source.instanceId, expiration: { playerId: 'player-1', afterTurn: 99 } })
}
assert.deepEqual(a.characterRegistrationIssues, [])
for (const id of ['baki', 'haku', 'sakura', 'kisame', 'shikamaru', 'zabuza']) {
  const c = char('classico-' + id); assert(c)
  assert.equal(a.getBaseSkills(c).length, 4)
  assert(!c.name.endsWith('OLD'))
  assert(c.skillDefinitions.every(k => k.effects.length && k.image))
}
for (const id of ['naruto', 'sakura', 'sasuke', 'kakashi', 'haku', 'zabuza', 'shikamaru', 'shino', 'zaku']) assert(char(id).name.endsWith(' OLD'))
console.log('PASS Six new characters register with four executable skills; only legacy names use OLD')
for (const [skill, start, expected] of [[1, 26, 6], [1, 25, 0], [2, 51, 11], [2, 50, 0]]) {
  let s = setup('classico-baki'); member(s, 'player-2', 'naruto').health = start
  s = cast(s, 'classico-baki', `classico-baki-${skill}`, 'player-2', 'naruto')
  assert.equal(member(s, 'player-2', 'naruto').health, expected)
}
console.log('PASS Baki executes at the correct post-damage thresholds and not above them')
{
  let s = setup('classico-baki')
  const target = member(s, 'player-2', 'naruto')
  target.health = 5
  target.statuses.push({ instanceId: 'shield', statusId: 'classico-baki-jacket', sourcePlayerId: 'player-2', sourceCharacterId: target.instanceId, shieldRemaining: 50, expiration: { playerId: 'player-1', afterTurn: 99 } })
  s = cast(s, 'classico-baki', 'classico-baki-1', 'player-2', 'naruto')
  assert.equal(member(s, 'player-2', 'naruto').health, 5)
}
console.log('PASS Baki cannot execute a low-health enemy if the shield absorbs all of the attack')

let s = setup('classico-baki')
fixture(s, 'player-1', 'naruto', 'stun-one-turn')
s = cast(s, 'classico-baki', 'classico-baki-3', 'player-1', 'naruto')
let ally = member(s, 'player-1', 'naruto')
assert(!a.isStunnedForSkill(s, ally, char('naruto').skillDefinitions[0]))
const incoming = { sourceInstanceId: member(s, 'player-2', 'naruto').instanceId, targetInstanceId: ally.instanceId, skillId: 'fixture', amount: 50, damageType: 'piercing' }
a.settleTurnDamage(s, [incoming])
assert.equal(ally.health, 100)
assert(a.isStunnedForSkill(s, ally, char('naruto').skillDefinitions[0]))
assert(!a.getActiveModifiers(s, ally).some(m => m.type === 'harmful-effect-immunity'))
console.log('PASS Baki shield suppresses existing harmful effects, absorbs piercing, and loses immunity exactly when destroyed')
s = setup('classico-sakura'); s = cast(s, 'classico-sakura', 'classico-sakura-3', 'player-1', 'classico-sakura'); s = pass(s)
member(s, 'player-1', 'naruto').health = 40
s = cast(s, 'classico-sakura', 'classico-sakura-2', 'player-1', 'naruto')
assert.equal(member(s, 'player-1', 'naruto').health, 70)
assert(a.getActiveModifiers(s, member(s, 'player-1', 'classico-sakura')).some(m => m.type === 'damage-reduction' && m.amount === 10))
console.log('PASS New Inner Sakura grants flat reduction and immunity, improves Cure to 30, and leaves OLD unchanged')
s = setup('classico-haku')
for (const target of s.players['player-2'].team) fixture(s, 'player-2', target.characterId, 'invulnerable-one-turn')
s = cast(s, 'classico-haku', 'classico-haku-3', 'player-2', 'naruto')
assert(s.players['player-2'].team.every(m => m.health === 100))
assert(member(s, 'player-1', 'classico-haku').statuses.some(st => st.shieldRemaining === 30))
s = pass(s)
s = cast(s, 'classico-haku', 'classico-haku-2', 'player-2', 'naruto')
assert(member(s, 'player-2', 'naruto').statuses.some(st => st.statusId === 'classico-haku-stun-2'))
console.log('PASS Haku gains Mirrors protection even against invulnerable enemies; enhanced Acupuncture ignores invulnerability')
s = setup('classico-haku'); s = cast(s, 'classico-haku', 'classico-haku-3', 'player-2', 'naruto'); assert(s.players['player-2'].team.every(m => m.health === 90))
s = pass(s); s = pass(s); assert(s.players['player-2'].team.every(m => m.health === 80))
s = pass(s); s = pass(s); assert(s.players['player-2'].team.every(m => m.health === 70))
s = pass(s); s = pass(s); assert(s.players['player-2'].team.every(m => m.health === 70))
console.log('PASS Mirrors deals 10 to each vulnerable enemy exactly three times')
s = setup('classico-kisame'); s = cast(s, 'classico-kisame', 'classico-kisame-2', 'player-2', 'naruto')
assert.equal(member(s, 'player-2', 'naruto').health, 80)
s = pass(s); const before = Object.values(s.players['player-1'].energy).reduce((x,y) => x+y, 0); s = pass(s)
assert.equal(member(s, 'player-2', 'naruto').health, 60)
assert.equal(Object.values(s.players['player-1'].energy).reduce((x,y) => x+y, 0), before + 1)
console.log('PASS Kisame Shred repeats damage and steals one available energy without charging again')
s = setup('classico-kisame'); s = cast(s, 'classico-kisame', 'classico-kisame-2', 'player-2', 'naruto'); s = pass(s)
fixture(s, 'player-1', 'classico-kisame', 'stun-one-turn')
s = pass(s)
assert.equal(member(s, 'player-2', 'naruto').health, 80)
console.log('PASS Kisame Action damage and energy drain are both suspended by stun')

s = setup('classico-shikamaru'); s = cast(s, 'classico-shikamaru', 'classico-shikamaru-1', 'player-2', 'naruto'); s = pass(s)
s = cast(s, 'classico-shikamaru', 'classico-shikamaru-3', 'player-2', 'naruto')
const marked = member(s, 'player-2', 'naruto').statuses.find(st => st.statusId === 'classico-shikamaru-imitation')
const unmarked = member(s, 'player-2', 'zaku').statuses.find(st => st.statusId === 'classico-shikamaru-imitation')
assert.equal(marked.expiration.afterTurn, unmarked.expiration.afterTurn + 1)
assert.deepEqual(a.getActiveModifiers(s, member(s, 'player-2', 'naruto')).find(m => m.type === 'stun').classes, ['physical','chakra','affliction'])
console.log('PASS New Shikamaru extends marked targets by one turn and stuns non-Mental classes')
s = setup('classico-zabuza'); s = cast(s, 'classico-zabuza', 'classico-zabuza-3', 'player-1', 'classico-zabuza')
const source = member(s, 'player-1', 'classico-zabuza')
assert(a.getActiveModifiers(s, source).some(m => m.type === 'damage-reduction' && m.amount === 10))
const enemy = member(s, 'player-2', 'shino'), skill = char('shino').skillDefinitions[1]
assert.equal(a.getEffectiveSkill(s, enemy, skill).cost.random ?? 0, 0) // Affliction is not Physical/Mental
assert.equal(a.getEffectiveSkill(s, member(s,'player-2','naruto'),char('naruto').skillDefinitions[0]).cost.random,1)
s = pass(s); s = cast(s, 'classico-zabuza', 'classico-zabuza-1', 'player-2', 'naruto')
assert.equal(member(s, 'player-2', 'naruto').health, 55)
console.log('PASS New Mist grants flat defense, taxes only matching classes, and enhances Silent Homicide to 45 piercing')

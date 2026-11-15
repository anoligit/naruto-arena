import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const team = ['naruto', 'kakashi', 'sakura'].map(id => a.characters.find(c => c.id === id))
const state = a.createBattle(team, team, 'player-1', 100, 1000)
const session = a.createLocalSession(state, 1000)
const p1 = a.publicSessionFor(session, 'player-1', false), p2 = a.publicSessionFor(session, 'player-2', false)
const first = a.renderRemoteBattle(p1, 'player-1'), second = a.renderRemoteBattle(p2, 'player-2')
assert(first.includes('Consultar perfil de Ana'))
assert(second.includes('Consultar perfil de Bruno'))
assert(!first.includes('battle-context'))
assert(second.includes('OPPONENT TURN...'))
assert(second.includes('aria-label="Equipe do Jogador 2"'))
assert(second.indexOf('aria-label="Equipe do Jogador 2"') < second.indexOf('aria-label="Equipe do Jogador 1"'))
const won = a.renderRemoteBattle({ ...p2, battle: { ...p2.battle, phase: 'finished', winnerId: 'player-2', turnEndsAt: null } }, 'player-2')
assert(won.includes('VITÓRIA')); assert(won.includes('Bruno venceu a partida privada'))
const lost = a.renderRemoteBattle({ ...p1, battle: { ...p1.battle, phase: 'finished', winnerId: 'player-2', turnEndsAt: null } }, 'player-1')
assert(lost.includes('DERROTA'))
assert.match(a.multiplayerVersion, /^arena-2-[a-f\d]+$/)
assert(/<button[^>]*disabled=""[^>]*>Partida privada online<\/button>/.test(a.renderSelection([team[0], team[1], null])))
assert(/<button(?![^>]*disabled)[^>]*>Partida privada online<\/button>/.test(a.renderSelection(team)))
console.log('PASS interface online: perspectiva fixa, turnos, resultados e exigência de três personagens.')

function highlights(ids, actorId, skillId, prepare = () => {}) {
  const roster = ids.map(id => a.characters.find(c => c.id === id))
  const battle = a.createBattle(roster, roster, 'player-1', 100, 1000)
  battle.players['player-1'].energy = { taijutsu: 20, bloodline: 20, ninjutsu: 20, genjutsu: 20 }
  prepare(battle)
  const source = battle.players['player-1'].team.find(member => member.characterId === actorId)
  const session = a.createLocalSession(battle, 1000)
  session.pending = { characterInstanceId: source.instanceId, skillId }
  const html = a.renderRemoteBattle(a.publicSessionFor(session, 'player-1', false), 'player-1')
  return {
    pulsing: (html.match(/class="target-button target-eligible target-choice"/g) ?? []).length,
    steady: (html.match(/class="target-button target-eligible"/g) ?? []).length,
  }
}
assert.deepEqual(highlights(['naruto', 'kakashi', 'sakura'], 'naruto', 'naruto-combo'), { pulsing: 3, steady: 0 })
assert.deepEqual(highlights(['naruto', 'kakashi', 'sakura'], 'naruto', 'naruto-combo', battle => {
  battle.players['player-2'].team.slice(1).forEach(member => { member.health = 0 })
}), { pulsing: 0, steady: 1 })
assert.deepEqual(highlights(['zabuza', 'haku', 'naruto'], 'zabuza', 'zabuza-great-waterfall'), { pulsing: 0, steady: 3 })
assert.deepEqual(highlights(['zabuza', 'haku', 'naruto'], 'haku', 'haku-water-needles'), { pulsing: 3, steady: 0 })
assert.deepEqual(highlights(['zabuza', 'haku', 'naruto'], 'haku', 'haku-water-needles', battle => {
  const haku = battle.players['player-1'].team[1]
  haku.statuses.push({ instanceId: 'fixture:mirrors', statusId: 'haku-ice-mirrors', sourcePlayerId: 'player-1', sourceCharacterId: haku.instanceId, sourceSkillId: 'haku-demonic-ice-mirrors', expiration: { playerId: 'player-2', afterTurn: 99 } })
}), { pulsing: 0, steady: 3 })
assert.deepEqual(highlights(['zabuza', 'haku', 'naruto'], 'zabuza', 'zabuza-hidden-mist-skill'), { pulsing: 0, steady: 4 })
console.log('PASS destaques: escolha individual pulsa, alvo único e área ficam estáticos, inclusive Haku melhorado e névoa.')

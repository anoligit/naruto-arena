import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const team = ['naruto', 'sasuke', 'sakura'].map(id => a.characters.find(character => character.id === id))
const pool = (n = 20) => ({ taijutsu: n, ninjutsu: n, bloodline: n, genjutsu: n })
function setup(ids = ['naruto', 'sasuke', 'sakura']) {
  const roster = ids.map(id => a.characters.find(character => character.id === id))
  const state = a.createBattle(roster, roster, 'player-2', 100, 1000)
  Object.values(state.players).forEach(player => { player.energy = pool() })
  return state
}
function validatePlan(state, plan) {
  assert(plan.queue.length <= 3)
  assert.equal(new Set(plan.queue.map(action => action.characterInstanceId)).size, plan.queue.length)
  const preceding = []
  for (const action of plan.queue) {
    assert.equal(action.playerId, 'player-2')
    const available = a.getSkillAvailability(state, preceding, 'player-2', action.characterInstanceId, action.skillId, 1100)
    assert(available.targetInstanceIds.includes(action.targetInstanceId))
    preceding.push(action)
  }
  const actions = a.buildConfirmedActions(state, plan.queue, plan.payment)
  assert(actions)
  const result = a.resolveTurn(state, actions, 1100)
  assert(result.ok, result.reason)
  return result
}
let checks = 0
function test(name, run) { run(); checks++; console.log('PASS ' + name) }

test('Training requires exactly three distinct characters and creates a unique random opponent', () => {
  assert.throws(() => a.createTrainingBattle([team[0], null, team[2]], 1000))
  assert.throws(() => a.createTrainingBattle([team[0], team[0], team[1]], 1000))
  for (const random of [() => 0, () => 0.99]) {
    const state = a.createTrainingBattle(team, 1000, random)
    assert.equal(state.players['player-1'].team.length, 3)
    assert.equal(state.players['player-2'].team.length, 3)
    assert.equal(new Set(state.players['player-2'].team.map(character => character.characterId)).size, 3)
    assert.equal(state.activePlayerId, 'player-1')
    assert.equal(Object.values(state.players['player-1'].energy).reduce((sum, n) => sum + n, 0), 1)
    assert(state.players['player-2'].team.every(character => character.health === 100))
  }
})
test('Training button is available only with a complete team', () => {
  const incomplete = a.renderSelection([team[0], team[1], null])
  const complete = a.renderSelection(team)
  assert(/<button[^>]*disabled=""[^>]*>Treinamento<\/button>/.test(incomplete))
  assert(/<button(?![^>]*disabled)[^>]*>Treinamento<\/button>/.test(complete))
})
test('The computer plans affordable legal skills, one per character, without mutating state', () => {
  const state = setup(), before = structuredClone(state)
  const plan = a.planComputerTurn(state, 1100)
  assert(plan.queue.length > 0)
  validatePlan(state, plan)
  assert.deepEqual(state, before)
})
test('No-energy, dead and fully stunned characters do not execute actions', () => {
  const state = setup()
  state.players['player-2'].energy = pool(0)
  assert.equal(a.planComputerTurn(state, 1100).queue.length, 0)
  state.players['player-2'].energy = pool()
  const [dead, stunned] = state.players['player-2'].team
  dead.health = 0
  stunned.statuses.push({ instanceId: 'fixture:stun', statusId: 'stun-one-turn', sourcePlayerId: 'player-1', sourceCharacterId: state.players['player-1'].team[0].instanceId, expiration: { playerId: 'player-2', afterTurn: 99 } })
  const plan = a.planComputerTurn(state, 1100)
  assert(plan.queue.every(action => ![dead.instanceId, stunned.instanceId].includes(action.characterInstanceId)))
  validatePlan(state, plan)
})
test('Visible invulnerability and cooldowns restrict the computer through shared validation', () => {
  const state = setup()
  const protectedTarget = state.players['player-1'].team[0]
  protectedTarget.statuses.push({ instanceId: 'fixture:guard', statusId: 'invulnerable-one-turn', sourcePlayerId: 'player-1', sourceCharacterId: protectedTarget.instanceId, expiration: { playerId: 'player-2', afterTurn: 99 } })
  const source = state.players['player-2'].team[0]
  source.skillReadyOnTurn['naruto-combo'] = 99
  const plan = a.planComputerTurn(state, 1100)
  assert(!plan.queue.some(action => action.characterInstanceId === source.instanceId && action.skillId === 'naruto-combo'))
  validatePlan(state, plan)
})
test('The computer heals a badly injured ally and chooses an affordable random payment', () => {
  const state = setup()
  state.players['player-2'].team[0].health = 1
  const plan = a.planComputerTurn(state, 1100)
  const heal = plan.queue.find(action => action.skillId === 'sakura-cure')
  assert(heal)
  assert.equal(heal.targetInstanceId, state.players['player-2'].team[0].instanceId)
  validatePlan(state, plan)
})
test('Planning is identical with and without a hidden enemy counter', () => {
  const state = setup(['zabuza', 'kakashi', 'haku'])
  const before = a.planComputerTurn(state, 1100)
  const target = state.players['player-1'].team[1]
  target.statuses.push({ instanceId: 'fixture:hidden', statusId: 'kakashi-reflect', sourcePlayerId: 'player-1', sourceCharacterId: target.instanceId, sourceSkillId: 'kakashi-reflect', expiration: { playerId: 'player-2', afterTurn: 99 } })
  assert.deepEqual(a.planComputerTurn(state, 1100), before)
})
test('Computer execution advances exactly once and clears its private queue', () => {
  const state = setup(), session = a.createLocalSession(state, 1100)
  const next = a.runComputerTurn(session, 1100)
  assert.equal(next.battle.turnNumber, 2)
  assert.equal(next.battle.activePlayerId, 'player-1')
  assert.equal(next.queue.length, 0)
  assert.equal(next.battle.phase, 'planning')
  const repeated = a.runComputerTurn(next, 1100)
  assert.equal(repeated.battle.turnNumber, 2)
})
test('The computer passes without legal actions and respects finished or expired turns', () => {
  const state = setup()
  state.players['player-2'].energy = pool(0)
  let next = a.runComputerTurn(a.createLocalSession(state, 1100), 1100)
  assert.equal(next.battle.activePlayerId, 'player-1')
  assert(next.battle.players['player-1'].team.every(character => character.health === 100))
  next = a.runComputerTurn(a.createLocalSession(state, 1100), state.turnEndsAt)
  assert.equal(next.battle.activePlayerId, 'player-1')
  assert.equal(next.battle.turnNumber, 2)
  const finished = { ...state, phase: 'finished', turnEndsAt: null }
  assert.equal(a.runComputerTurn(a.createLocalSession(finished, 1100), 1100).battle.phase, 'finished')
})
test('The computer does not act while surrender is being confirmed', () => {
  const state = setup(), session = { ...a.createLocalSession(state, 1100), surrenderPending: true }
  const next = a.runComputerTurn(session, 1100)
  assert.equal(next.battle.turnNumber, 1)
  assert.equal(next.battle.activePlayerId, 'player-2')
})
test('All registered character combinations produce executable plans', () => {
  const roster = a.characters.map(character => character.id)
  for (let index = 0; index < roster.length; index++) {
    const state = setup([roster[index], roster[(index + 1) % roster.length], roster[(index + 2) % roster.length]])
    validatePlan(state, a.planComputerTurn(state, 1100))
  }
})
test('Training keeps the human team left and hidden computer effects hidden on its own turn', () => {
  const state = setup(['zabuza', 'kakashi', 'haku'])
  const computer = state.players['player-2'].team[1]
  computer.statuses.push({ instanceId: 'fixture:hidden-bot', statusId: 'kakashi-reflect', sourcePlayerId: 'player-2', sourceCharacterId: computer.instanceId, sourceSkillId: 'kakashi-reflect', expiration: { playerId: 'player-1', afterTurn: 99 } })
  const html = a.renderBattle(state, 'training')
  assert(html.includes('Você · Jogador 1'))
  assert(html.includes('aria-label="Equipe do Jogador 1"'))
  assert(html.includes('OPPONENT TURN...'))
  assert(!html.includes('Consultar efeito ativo: Sharingan Reflect'))
})
test('Training outcomes identify human victory and defeat without competitive rewards', () => {
  const state = setup()
  const won = a.renderBattle({ ...state, phase: 'finished', winnerId: 'player-1', turnEndsAt: null }, 'training')
  const lost = a.renderBattle({ ...state, phase: 'finished', winnerId: 'player-2', turnEndsAt: null }, 'training')
  assert(won.includes('VITÓRIA'))
  assert(lost.includes('DERROTA'))
  assert(won.includes('sem alterações de ranking ou missões'))
})
test('A complete training match can progress automatically through the result screen', () => {
  let state = setup()
  let turns = 0
  while (state.phase !== 'finished' && turns < 60) {
    if (state.activePlayerId === 'player-2') {
      const session = a.runComputerTurn(a.createLocalSession(state, 1100), 1100)
      state = session.battle
    } else {
      const result = a.resolveTurn(state, [], 1100)
      assert(result.ok)
      state = result.state
    }
    turns++
  }
  assert.equal(state.phase, 'finished')
  assert.equal(state.winnerId, 'player-2')
  const html = a.renderBattle(state, 'training')
  assert(html.includes('DERROTA'))
  assert(html.includes('Voltar à seleção'))
})
console.log(checks + ' training/AI groups passed')

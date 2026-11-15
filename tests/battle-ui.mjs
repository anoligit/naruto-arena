import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
const roster = ['naruto', 'kakashi', 'sakura'].map(id => a.characters.find(c => c.id === id))
function setup() {
  const battle = a.createBattle(roster, roster, 'player-1', 100, 1000)
  Object.values(battle.players).forEach(p => { p.energy = { taijutsu: 10, bloodline: 10, ninjutsu: 10, genjutsu: 10 } })
  return battle
}
const remote = (battle, viewer) => a.renderRemoteBattle(a.publicSessionFor(a.createLocalSession(battle, 1000), viewer, false), viewer)
let count = 0
function test(name, run) { run(); count++; console.log('PASS ' + name) }

test('Question slots and energy controls appear only on the viewer turn; both avatars stay consultable', () => {
  const battle = setup()
  const own = remote(battle, 'player-1'), opponent = remote(battle, 'player-2')
  assert.equal((own.match(/class="assigned-skill /g) ?? []).length, 3)
  assert.equal((opponent.match(/class="assigned-skill /g) ?? []).length, 0)
  assert.equal((own.match(/class="battle-skills"/g) ?? []).length, 3)
  assert.equal((opponent.match(/class="battle-skills"/g) ?? []).length, 3)
  assert(own.includes('class="turn-energy-controls"'))
  assert(!own.includes('class="turn-energy-controls" hidden=""'))
  assert(opponent.includes('class="turn-energy-controls" hidden=""'))
  for (const html of [own, opponent]) {
    assert(html.includes('Consultar perfil de Ana')); assert(html.includes('Consultar perfil de Bruno'))
    assert(html.includes('role="timer"'))
  }
  assert(!own.includes('class="energy-token random"'))
  assert(own.includes('Total livre:'))
  battle.activePlayerId = 'player-2'
  const returned = remote(battle, 'player-2')
  assert.equal((returned.match(/class="assigned-skill /g) ?? []).length, 3)
})
test('Defeated characters show a cross and zero HP while keeping the row and consultable skills', () => {
  const battle = setup()
  battle.players['player-1'].team[0].health = 0
  battle.players['player-2'].team[1].health = 0
  const html = remote(battle, 'player-1')
  assert.equal((html.match(/class="portrait-defeated"/g) ?? []).length, 2)
  assert.equal((html.match(/class="combat-member /g) ?? []).length, 6)
  assert.equal((html.match(/>0\/100</g) ?? []).length, 2)
  assert(html.includes('Uzumaki Naruto Combo · Jogador 1'))
})
test('Each profile shows its own metadata and full three-character roster, including defeated members', () => {
  const battle = setup(), before = structuredClone(battle)
  const profiles = { 'player-1': a.createBattleProfile('Ana', 'kakashi'), 'player-2': a.createBattleProfile('Bruno', 'sakura') }
  profiles['player-2'].rank = 'Genin'
  profiles['player-2'].wins = 8; profiles['player-2'].losses = 3; profiles['player-2'].streak = 2
  battle.players['player-2'].team[0].health = 0
  const original = structuredClone(battle)
  const first = a.renderBattleInspection(battle, { playerId: 'player-1' }, profiles)
  const second = a.renderBattleInspection(battle, { playerId: 'player-2' }, profiles)
  assert(first.includes('Perfil de Ana')); assert(!first.includes('Perfil de Bruno'))
  assert(second.includes('Perfil de Bruno')); assert(second.includes('Genin'))
  assert(second.includes('8 - 3 (+2)'))
  assert(second.includes('Time completo de Bruno'))
  for (const member of roster) assert(second.includes(`alt="${member.name}"`))
  assert.equal((second.match(/title="Consultar /g) ?? []).length, 3)
  assert(!second.includes('portrait-defeated'))
  assert.deepEqual(battle, original)
  assert.equal(profiles['player-1'].rank, null)
  assert.equal(before.players['player-2'].team[0].health, 100)
})
test('Inspection positions energy by the heading and separates classes and cooldown from the description', () => {
  const battle = setup(), profiles = { 'player-1': a.createBattleProfile('Ana'), 'player-2': a.createBattleProfile('Bruno') }
  const html = a.renderBattleInspection(battle, { characterInstanceId: 'player-1:naruto', skillName: 'Rasengan' }, profiles)
  assert(html.includes('inspection-heading')); assert(html.includes('inspection-energy'))
  assert(html.includes('Recarga')); assert(html.includes('Classes')); assert(html.includes('40'))
  assert(html.indexOf('inspection-energy') < html.indexOf('inspection-description'))
  assert(html.indexOf('inspection-facts') < html.indexOf('inspection-description'))
})
test('HP colors stay legible in each existing range and preserve pale projected loss', () => {
  for (const [health, color] of [[1, '#ff2020'], [25, '#ff2020'], [26, '#ff9500'], [50, '#ff9500'], [51, '#ffe000'], [75, '#ffe000'], [76, '#20d532'], [100, '#20d532']]) {
    const html = a.renderHealthBar(health, 100)
    assert(html.includes(`background:${color}`), String(health))
    assert(html.includes(`>${health}/100<`))
  }
  const preview = a.renderHealthBar(100, 100, 70)
  assert(preview.includes('background:#20d532'))
  assert(preview.includes('left:70%;width:30%;background:#bbf7d0'))
})
test('Battle omits auxiliary notices and portrait names while preserving actionable errors', () => {
  const battle = setup(), session = a.createLocalSession(battle, 1000)
  session.notice = 'Fixture: ação atribuída com instruções extras'
  session.log = ['Fixture: histórico de uma ação']
  const render = () => a.renderRemoteBattle(a.publicSessionFor(session, 'player-1', false), 'player-1')
  const html = render()
  assert(!html.includes('class="inspection-area'))
  assert(!html.includes('class="battle-inspection"'))
  for (const removed of ['battle-context', 'turn-help', 'queue-summary', 'battle-history', 'combat-name', 'skill-use-status', session.notice, session.log[0]]) assert(!html.includes(removed), removed)
  assert(html.includes('SURRENDER'))
  session.error = 'invalid-payment'
  assert(render().includes('role="alert"'))
})
test('Indicators remain outside both skill frames', () => {
  const battle = setup()
  for (const player of Object.values(battle.players)) {
    const source = player.team[0]
    source.statuses.push({ instanceId: `fixture:${player.id}`, statusId: 'naruto-clones', sourcePlayerId: player.id, sourceCharacterId: source.instanceId, sourceSkillId: 'naruto-clones-skill', expiration: { playerId: player.id === 'player-1' ? 'player-2' : 'player-1', afterTurn: 99 } })
  }
  const html = remote(battle, 'player-1')
  const articles = [...html.matchAll(/<article class="combat-member ([\s\S]*?)<\/article>/g)].map(m => m[0])
  const ally = articles.find(article => article.includes('ally-member') && article.includes('Indicadores de Uzumaki Naruto'))
  const enemy = articles.find(article => article.includes('enemy-member') && article.includes('Indicadores de Uzumaki Naruto'))
  assert(ally); assert(enemy)
  assert(ally.indexOf('character-indicators') < ally.indexOf('skill-scroll'))
  assert(!enemy.includes('skill-scroll'))
  assert.equal((html.match(/aria-label="Consultar efeito ativo: Shadow Clones/g) ?? []).length, 2)
})
test('Shared turn controls keep one clock and hide energy on the opponent turn', () => {
  for (const seconds of [60, 30, 0]) {
    const html = a.renderTurnControls(false, seconds)
    assert.equal((html.match(/role="timer"/g) ?? []).length, 1)
    assert(html.includes(`value="${seconds}"`))
    assert(html.includes(`>${seconds}s</span>`))
    assert(html.includes(`--turn-progress:${seconds / 60 * 100}%`))
    assert(!html.includes('class="turn-energy-controls" hidden=""'))
  }
  const opponent = a.renderTurnControls(true, 52)
  assert(opponent.includes('OPPONENT TURN...'))
  assert(opponent.includes('class="turn-energy-controls" hidden=""'))
  assert(/class="ready-button"[^>]*disabled=""/.test(opponent))
})
test('Mobile sketch presents Ready on own turn and a single non-actionable opponent panel', () => {
  const own = a.renderTurnControls(false, 30, true)
  assert(own.includes('FINALIZAR'))
  assert(!own.includes('PRESS WHEN READY'))
  assert(!own.includes('opponent-turn-state'))
  assert.equal((own.match(/role="timer"/g) ?? []).length, 1)
  const opponent = a.renderTurnControls(true, 8, true)
  assert(opponent.includes('class="opponent-turn-state" role="status"'))
  assert(opponent.includes('TURNO DO OPONENTE…'))
  assert(!opponent.includes('class="ready-button"'))
  assert(opponent.includes('class="turn-energy-controls" hidden=""'))
  assert(opponent.includes('turn-meter time-low'))
})
test('Description shortcuts are consultation-only, without live cooldowns or redundant links', () => {
  const battle = setup()
  battle.players['player-1'].team[0].skillReadyOnTurn['naruto-combo'] = 99
  const profiles = { 'player-1': a.createBattleProfile('Ana'), 'player-2': a.createBattleProfile('Bruno') }
  const html = a.renderBattleInspection(battle, { characterInstanceId: 'player-1:naruto', skillName: 'Rasengan' }, profiles)
  assert(!html.includes('Alvo:'))
  assert(!html.includes('Ver descrição do personagem'))
  assert(!html.includes('inspection-toolbar'))
  assert(html.includes('<dt>Recarga:</dt><dd>1</dd>'))
  assert.equal((html.match(/class="inspection-skill"/g) ?? []).length, 4)
  assert(!html.includes('CD 99'))
  assert(!html.includes('data-use-available'))
})
test('Inspection lists every registered skill, including inactive alternatives, without changing battle state', () => {
  const sasuke = a.characters.find(c => c.id === 'sasuke')
  const team = [sasuke, ...roster.slice(0, 2)]
  const battle = a.createBattle(team, team, 'player-1', 100, 1000)
  const before = structuredClone(battle)
  const profiles = { 'player-1': a.createBattleProfile('Ana'), 'player-2': a.createBattleProfile('Bruno') }
  for (const skillName of ['Sharingan', 'Chidori']) {
    const html = a.renderBattleInspection(battle, { characterInstanceId: 'player-1:sasuke', skillName }, profiles)
    const sidebar = html.slice(html.indexOf('<aside'), html.indexOf('</aside>'))
    assert.equal((sidebar.match(/class="inspection-skill"/g) ?? []).length, sasuke.skillDefinitions.length)
    for (const skill of sasuke.skillDefinitions) assert(sidebar.includes(`aria-label="Consultar ${skill.name}"`))
    assert(html.includes(`<h2>${skillName}</h2>`))
    if (skillName === 'Sharingan') {
      assert(html.includes('type="button" class="inspection-alternative"'))
      assert(html.includes('Consultar habilidade alternativa: <strong>Chidori</strong>'))
    }
    assert(!sidebar.includes('CD '))
    assert(!sidebar.includes('data-use-available'))
  }
  assert.deepEqual(battle, before)
})
test('Turn confirmation shows effective Mist costs and resolves random payment without mutating the battle', () => {
  const enemyTeam = ['zabuza', 'naruto', 'kakashi'].map(id => a.characters.find(c => c.id === id))
  const battle = a.createBattle(roster, enemyTeam, 'player-1', 100, 1000)
  battle.players['player-1'].energy = { taijutsu: 3, ninjutsu: 3, bloodline: 0, genjutsu: 2 }
  const zabuza = battle.players['player-2'].team[0]
  zabuza.statuses.push({ instanceId: 'fixture:mist', statusId: 'zabuza-hidden-mist', sourcePlayerId: 'player-2', sourceCharacterId: zabuza.instanceId, sourceSkillId: 'zabuza-hidden-mist-skill', expiration: { playerId: 'player-1', afterTurn: 99 } })
  const queue = [
    { playerId: 'player-1', characterInstanceId: 'player-1:naruto', skillId: 'naruto-combo', targetInstanceId: zabuza.instanceId },
    { playerId: 'player-1', characterInstanceId: 'player-1:kakashi', skillId: 'kakashi-raikiri', targetInstanceId: zabuza.instanceId },
  ]
  const before = structuredClone(battle), empty = { taijutsu: 0, ninjutsu: 0, bloodline: 0, genjutsu: 0 }
  const unpaid = a.renderTurnConfirmation(battle, queue, empty)
  assert(unpaid.includes('Consumir energia 0/1'))
  assert(unpaid.includes('Inclui +1 energia qualquer por efeitos ativos.'))
  assert(unpaid.indexOf('Ordem de execução') < unpaid.indexOf('Consumir energia 0/1'))
  assert(!unpaid.includes('finish-total'))
  assert.equal((unpaid.match(/class="finish-available-type"/g) ?? []).length, 4)
  assert.equal((unpaid.match(/class="finish-consume-type"/g) ?? []).length, 4)
  assert(!unpaid.includes('finish-remove'))
  assert(!unpaid.includes('finish-close'))
  assert(/disabled=""[^>]*>Confirmar turno/.test(unpaid))
  const paid = a.renderTurnConfirmation(battle, queue, { ...empty, genjutsu: 1 })
  assert(paid.includes('Consumir energia 1/1'))
  assert(!/disabled=""[^>]*>Confirmar turno/.test(paid))
  const rows = [...paid.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(match => match[1])
  assert.equal(rows.length, 2)
  assert(!rows[0].includes('energy-token genjutsu'))
  assert(rows[0].includes('energy-token random'))
  assert(rows[1].includes('energy-token ninjutsu'))
  const reversed = a.renderTurnConfirmation(battle, [...queue].reverse(), { ...empty, genjutsu: 1 })
  assert(reversed.indexOf('Raikiri') < reversed.indexOf('Uzumaki Naruto Combo'))
  assert.deepEqual(battle, before)
  const zero = a.renderTurnConfirmation(battle, [], empty)
  assert(zero.includes('Consumir energia 0/0'))
  assert(!zero.includes('finish-consume-row'))
  assert(!/disabled=""[^>]*>Confirmar turno/.test(zero))
})
test('Integrated mobile confirmation uses the existing timer only once', () => {
  const html = a.renderMobileConfirmation(setup())
  assert.equal((html.match(/role="timer"/g) ?? []).length, 1)
  assert(html.includes('reviewing-turn'))
  assert(html.includes('Finalizar turno'))
  assert(!html.includes('finish-clock'))
  assert(/class="ready-button"[^>]*aria-expanded="true"/.test(html))
  assert(!/class="ready-button"[^>]*disabled/.test(html))
})
test('Battle controls follow audio, surrender, missions, chat in document order', () => {
  const html = remote(setup(), 'player-1')
  const controls = html.slice(html.indexOf('class="battle-action-buttons"'))
  assert(controls.indexOf('audio-control') < controls.indexOf('surrender-control'))
  assert(controls.indexOf('surrender-control') < controls.indexOf('missions-control'))
  assert(controls.indexOf('missions-control') < controls.indexOf('chat-control'))
})
test('Character consultation places all shortcuts below the name; skill consultation keeps its sidebar outside the header', () => {
  const battle = setup(), profiles = { 'player-1': a.createBattleProfile('Ana'), 'player-2': a.createBattleProfile('Bruno') }
  const character = a.renderBattleInspection(battle, { characterInstanceId: 'player-1:naruto', skillName: null }, profiles)
  const skill = a.renderBattleInspection(battle, { characterInstanceId: 'player-1:naruto', skillName: 'Rasengan' }, profiles)
  assert(character.includes('character-inspection'))
  assert(character.indexOf('</h2>') < character.indexOf('inspection-shortcuts'))
  assert(character.indexOf('inspection-shortcuts') < character.indexOf('</header>'))
  assert.equal((character.match(/class="inspection-skill"/g) ?? []).length, 4)
  assert(!skill.includes('character-inspection'))
  assert(skill.indexOf('</header>') < skill.indexOf('inspection-shortcuts'))
})
console.log(count + ' grupos da estrutura da batalha passaram.')

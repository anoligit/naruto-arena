import assert from 'node:assert/strict'
import { WebSocket } from 'ws'
import { PrivateRooms as ProductionRooms } from './rooms.mjs'
class PrivateRooms extends ProductionRooms { constructor(options={}) {super({...options,enforceUnlocks:false})} }
import { multiplayerVersion } from './dist/engine.mjs'
import { Accounts } from './accounts.mjs'
import { startServer } from './start.mjs'

const team = ['classico-naruto', 'classico-young-kakashi', 'classico-sakura']
const pool = (n = 20) => ({ taijutsu: n, ninjutsu: n, bloodline: n, genjutsu: n })
class Socket {
  readyState = 1
  messages = []
  send(raw) { this.messages.push(JSON.parse(raw)) }
  close() { this.readyState = 3 }
  last(type = 'state') { return this.messages.filter(message => message.type === type).at(-1) }
}
function setup(teamIds = team, opponentIds = ['classico-kiba', 'classico-haku', 'classico-young-kakashi']) {
  let now = 1000
  const rooms = new PrivateRooms({ now: () => now, startingPlayer: () => 'player-1' })
  const a = new Socket(), b = new Socket()
  rooms.connect(a); rooms.connect(b)
  const receive = (socket, message) => rooms.receive(socket, JSON.stringify(message))
  receive(a, { type: 'create', name: 'Ana', team: teamIds, version: multiplayerVersion })
  const code = a.last().snapshot.code
  receive(b, { type: 'join', name: 'Bruno', team: opponentIds, code, version: multiplayerVersion })
  const room = rooms.rooms.get(code)
  let seqA = 0, seqB = 0
  const command = (socket, command, turn = room.session.battle.turnNumber) => receive(socket, { type: 'command', seq: socket === a ? ++seqA : ++seqB, turn, command })
  return { rooms, room, a, b, receive, command, time: value => { now = value } }
}
let checks = 0
function test(name, run) { run(); checks++; console.log('PASS ' + name) }

test('Rooms create two canonical teams, reject invalid teams, stale versions and third players', () => {
  const { rooms, room, a, b, receive } = setup()
  assert.equal(a.last().snapshot.you, 'player-1'); assert.equal(b.last().snapshot.you, 'player-2')
  assert.equal(room.session.battle.players['player-2'].team[0].characterId, 'classico-kiba')
  const c = new Socket(); rooms.connect(c)
  receive(c, { type: 'join', name: 'C', code: room.code, team, version: multiplayerVersion })
  assert.match(c.last('error').message, /completa/)
  receive(c, { type: 'create', name: 'C', team: ['classico-naruto', 'classico-naruto', 'classico-sakura'], version: multiplayerVersion })
  assert.match(c.last('error').message, /diferentes/)
  receive(c, { type: 'create', name: 'C', team, version: 'old' })
  assert.match(c.last('error').message, /versões/)
})
test('Avatars are canonical IDs shared by both participants; unknown avatars are rejected', () => {
  const rooms = new PrivateRooms(), a = new Socket(), b = new Socket()
  rooms.connect(a); rooms.connect(b)
  const receive = (socket, message) => rooms.receive(socket, JSON.stringify(message))
  receive(a, { type: 'create', name: 'Ana', team, avatarId: 'unknown', version: multiplayerVersion })
  assert.match(a.last('error').message, /avatar/)
  assert.equal(rooms.rooms.size, 0)
  receive(a, { type: 'create', name: 'Ana', team, avatarId: 'avatar_01', version: multiplayerVersion })
  const code = a.last().snapshot.code
  receive(b, { type: 'join', name: 'Bruno', team, code, avatarId: 'avatar_70', version: multiplayerVersion })
  for (const socket of [a, b]) {
    assert.equal(socket.last().snapshot.players[0].avatarId, 'avatar_01')
    assert.equal(socket.last().snapshot.players[1].avatarId, 'avatar_70')
  }
})
test('Each turn begins once, commands from wrong player and replayed or stale commands are rejected', () => {
  const { room, a, b, command, receive } = setup()
  command(b, { type: 'open-confirmation' }); assert.match(b.last('error').message, /sua vez/)
  command(a, { type: 'open-confirmation' }); if(room.session.queue.length) command(a, { type: 'allocate', value: {...pool(0),genjutsu:1} }); command(a, { type: 'confirm-turn' })
  assert.equal(room.session.battle.turnNumber, 2)
  command(a, { type: 'open-confirmation' }, 1); assert.match(a.last('error').message, /turno mudou/)
  receive(b, { type: 'command', seq: 1, turn: 2, command: { type: 'open-confirmation' } }); assert.match(b.last('error').message, /repetido/)
  assert.equal(room.session.battle.turnNumber, 2)
})
test('Queue, payment, confirmation and enemy hidden effects never reach the opponent', () => {
  const { rooms, room, a, b, command } = setup()
  room.session.battle.players['player-1'].energy = pool()
  const hidden = room.session.battle.players['player-2'].team[2]
  hidden.statuses.push({ instanceId: 'hidden-test', statusId: 'classico-young-kakashi-observe', sourcePlayerId: 'player-2', sourceCharacterId: hidden.instanceId, sourceSkillId: 'classico-young-kakashi-observe', expiration: { playerId: 'player-1', afterTurn: 99 } })
  hidden.skillReadyOnTurn['classico-young-kakashi-observe'] = 99
  command(a, { type: 'select-skill', characterInstanceId: 'player-1:classico-naruto', skillId: 'classico-naruto-1' })
  command(a, { type: 'select-target', targetInstanceId: 'player-2:classico-kiba' })
  command(a, { type: 'open-confirmation' }); rooms.publish(room)
  assert.equal(a.last().snapshot.session.queue.length, 1)
  assert.equal(a.last().snapshot.session.battle.phase, 'confirmation')
  assert.equal(b.last().snapshot.session.queue.length, 0)
  assert.equal(b.last().snapshot.session.pending, null)
  assert.equal(b.last().snapshot.session.battle.phase, 'planning')
  assert.deepEqual(b.last().snapshot.session.battle.players['player-1'].energy, pool(0))
  assert.equal(a.last().snapshot.session.battle.players['player-2'].team[2].statuses.length, 0)
  assert.deepEqual(a.last().snapshot.session.battle.players['player-2'].team[2].skillReadyOnTurn, {})
  assert.equal(b.last().snapshot.session.battle.players['player-2'].team[2].statuses.length, 1)
  assert.equal(room.session.battle.players['player-2'].team[2].statuses.length, 1)
})
test('The server resolves real damage using the shared motor and returns the same health to both players', () => {
  const { room, a, b, command } = setup()
  room.session.battle.players['player-1'].energy = pool()
  command(a, { type: 'select-skill', characterInstanceId: 'player-2:classico-young-kakashi', skillId: 'classico-young-kakashi-1' })
  assert.match(a.last('error').message, /não pertence/)
  command(a, { type: 'select-skill', characterInstanceId: 'player-1:classico-naruto', skillId: 'classico-naruto-1' })
  command(a, { type: 'select-target', targetInstanceId: 'player-2:classico-kiba' })
  assert.equal(room.session.battle.players['player-2'].team[0].health, 100)
  command(a, { type: 'open-confirmation' }); if(room.session.queue.length) command(a, { type: 'allocate', value: {...pool(0),genjutsu:1} }); command(a, { type: 'confirm-turn' })
  for (const client of [a, b]) assert.equal(client.last().snapshot.session.battle.players['player-2'].team[0].health, 80)
  assert.equal(room.session.battle.turnNumber, 2)
})
test('Random costs are selected only on confirmation and paid once', () => {
  const { room, a, command } = setup()
  room.session.battle.players['player-1'].energy = pool()
  command(a, { type: 'select-skill', characterInstanceId: 'player-1:classico-naruto', skillId: 'classico-naruto-3' })
  command(a, { type: 'select-target', targetInstanceId: 'player-1:classico-naruto' })
  command(a, { type: 'open-confirmation' }); command(a, { type: 'confirm-turn' })
  assert.equal(room.session.battle.turnNumber, 1)
  assert.equal(room.session.error, 'choose-random-energy')
  command(a, { type: 'allocate', value: { ...pool(0), genjutsu: 1 } })
  command(a, { type: 'confirm-turn' })
  assert.equal(room.session.battle.turnNumber, 2)
  assert.equal(room.session.battle.players['player-1'].energy.genjutsu, 19)
  assert(room.session.battle.players['player-1'].team[0].statuses.some(status => status.statusId === 'classico-naruto-clones'))
})
test('Applied five-to-one trades survive cancelling the dialog', () => {
  const { room, a, command } = setup()
  room.session.battle.players['player-1'].energy = pool()
  command(a, { type: 'open-exchange' }); command(a, { type: 'choose-exchange', energyType: 'ninjutsu' })
  command(a, { type: 'allocate', value: { ...pool(0), genjutsu: 5 } }); command(a, { type: 'apply-exchange' })
  command(a, { type: 'close-dialog' })
  assert.equal(room.session.battle.players['player-1'].energy.genjutsu, 15)
  assert.equal(room.session.battle.players['player-1'].energy.ninjutsu, 21)
})
test('Timeout is controlled by the server even if no browser sends commands', () => {
  const { rooms, room, a, time } = setup()
  const before = room.session.battle.turnEndsAt
  time(before); rooms.pulse()
  assert.equal(room.session.battle.turnNumber, 2)
  assert.equal(a.last().snapshot.session.battle.turnNumber, 2)
  assert.equal(room.session.queue.length, 0)
})
test('Hidden counters remain hidden during planning and execute only on confirmation', () => {
  const { room, a, command } = setup(team,['classico-kiba','classico-haku','classico-zaku'])
  room.session.battle.players['player-1'].energy = pool()
  const target = room.session.battle.players['player-2'].team[2]
  target.statuses.push({ instanceId: 'fixture:hidden', statusId: 'classico-zaku-air-wall', sourcePlayerId: 'player-2', sourceCharacterId: target.instanceId, sourceSkillId: 'classico-zaku-wall-of-air', expiration: { playerId: 'player-1', afterTurn: 99 } })
  command(a, { type: 'select-skill', characterInstanceId: 'player-1:classico-naruto', skillId: 'classico-naruto-1' })
  command(a, { type: 'select-target', targetInstanceId: target.instanceId })
  assert.equal(room.session.queue.length, 1)
  assert.equal(a.last().snapshot.session.battle.players['player-2'].team[2].statuses.length, 0)
  command(a, { type: 'open-confirmation' }); if(room.session.queue.length) command(a, { type: 'allocate', value: {...pool(0),genjutsu:1} }); command(a, { type: 'confirm-turn' })
  assert.equal(room.session.battle.players['player-1'].team[0].health, 75)
  assert.equal(room.session.battle.players['player-2'].team[2].health, 100)
  assert.equal(a.last().snapshot.session.battle.counterReports.length, 1)
})
test('Either player may surrender; disconnect preserves both teams and waits for the clock', () => {
  const first = setup()
  first.command(first.b, { type: 'open-surrender' }); first.command(first.b, { type: 'confirm-surrender' })
  assert.equal(first.room.session.battle.winnerId, 'player-1')
  const { rooms, room, a, b } = setup()
  b.close(); rooms.disconnect(b)
  assert.equal(room.session.battle.phase, 'planning')
  assert.equal(a.last().snapshot.players[1].connected, false)
  assert.equal(a.last().snapshot.players.length, 2)
  a.close(); rooms.disconnect(a); assert.equal(rooms.rooms.size, 1)
})
test('Malformed commands and unknown message types cannot mutate game state', () => {
  const { room, a, receive } = setup(), before = structuredClone(room.session)
  receive(a, { type: 'set-health', health: 999 })
  receive(a, { type: 'command', seq: 1, turn: 1, command: { type: 'allocate', value: { ...pool(0), ninjutsu: -1 } } })
  assert.deepEqual(room.session, before)
  assert.equal(a.messages.filter(m => m.type === 'error').length, 2)
})
test('A complete match progresses through commands until all three enemies are defeated', () => {
  const { room, a, b, command } = setup(['classico-zaku','classico-young-kakashi','classico-sakura'])
  room.session.battle.players['player-1'].energy = pool(50)
  let turns = 0
  while (room.session.battle.phase !== 'finished' && turns < 60) {
    const active = room.session.battle.activePlayerId === 'player-1' ? a : b
    if (active === a) {
      const target = room.session.battle.players['player-2'].team.find(member => member.health > 0)
      command(a, { type: 'select-skill', characterInstanceId: 'player-1:classico-zaku', skillId: 'classico-zaku-air-cutter' })
      command(a, { type: 'select-target', targetInstanceId: target.instanceId })
      assert.equal(room.session.queue.length, 1)
    }
    command(active, { type: 'open-confirmation' }); command(active, { type: 'confirm-turn' })
    turns++
  }
  assert.equal(room.session.battle.phase, 'finished')
  assert.equal(room.session.battle.winnerId, 'player-1')
  assert(room.session.battle.players['player-2'].team.every(member => member.health === 0))
  for (const socket of [a, b]) assert.equal(socket.last().snapshot.session.battle.winnerId, 'player-1')
})
test('Authenticated rooms use server-owned account names, avatars and profile data without exposing email or passwords', () => {
  const rooms = new PrivateRooms(), a = new Socket(), b = new Socket()
  const identity = { id: 'account-123', username: 'Canonical', avatarId: 'classico-haku', email: 'private@example.com', profile: { name: 'Canonical', level: 1, experience: 0, rank: null, clan: null, overallRank: null, wins: 0, losses: 0, streak: 0 } }
  rooms.connect(a, () => identity); rooms.connect(b)
  rooms.receive(a, JSON.stringify({ type: 'create', name: 'Spoofed', avatarId: 'classico-naruto', team, profile: { level: 99 }, version: multiplayerVersion }))
  const code = a.last().snapshot.code
  rooms.receive(b, JSON.stringify({ type: 'join', code, name: 'Guest', team: ['classico-kiba','classico-haku','classico-young-kakashi'], version: multiplayerVersion }))
  for (const socket of [a,b]) {
    const player = socket.last().snapshot.players[0]
    assert.equal(player.name, 'Canonical'); assert.equal(player.avatarId, 'classico-haku'); assert.equal(player.accountId, 'account-123'); assert.equal(player.profile.level, 1)
    assert(!JSON.stringify(socket.last()).includes('private@example.com'))
    assert.equal(socket.last().snapshot.players[1].name,'Guest')
  }
})
console.log(`${checks} grupos de salas/multiplayer passaram.`)

if (!process.argv.includes('--no-network')) {
  // Conexões reais, independentes do navegador. Usa uma porta temporária.
  const app = await startServer({ host: '127.0.0.1', port: 0, accounts: new Accounts({ file: ':memory:' }) })
  const team=['classico-naruto','classico-sasuke','classico-sakura']
  const clients = []
  const base = `http://127.0.0.1:${app.server.address().port}`
  async function connect() {
    const socket = new WebSocket(base.replace('http:', 'ws:') + '/play', { origin: base })
    clients.push(socket); socket.messages = []
    socket.on('message', raw => socket.messages.push(JSON.parse(raw)))
    await new Promise((resolve, reject) => { socket.once('open', resolve); socket.once('error', reject) })
    return socket
  }
  async function wait(socket, predicate) {
    for (let index = 0; index < 200; index++) {
      const found = socket.messages.findIndex(predicate)
      if (found >= 0) return socket.messages.splice(found, 1)[0]
      await new Promise(resolve => setTimeout(resolve, 10))
    }
    throw new Error('Tempo esgotado aguardando resposta WebSocket.')
  }
  const send = (socket, message) => socket.send(JSON.stringify(message))
  try {
    assert.equal((await (await fetch(base + '/health')).json()).ok, true)
    const page = await fetch(base, { redirect: 'manual' }); assert.equal(page.status, 302)
    const html = await (await fetch(base + '/naruto-arena/')).text(); assert(html.includes('type="module"'))
    const script = html.match(/src="([^"]+\.js)"/)[1]
    assert.equal((await fetch(base + script)).status, 200)
    assert.equal((await fetch(base + '/server/engine.ts')).status, 404)
    assert.equal((await fetch(base + '/naruto-arena/%2e%2e%2fpackage.json')).status, 404)
    const a = await connect(), b = await connect()
    send(a, { type: 'create', name: 'Ana', team, avatarId: 'avatar_01', version: multiplayerVersion })
    const first = await wait(a, m => m.type === 'state')
    send(b, { type: 'join', name: 'Bruno', team, code: first.snapshot.code, version: multiplayerVersion })
    const started = await wait(a, m => m.type === 'state' && m.snapshot.session)
    const joined = await wait(b, m => m.type === 'state' && m.snapshot.session)
    assert.equal(joined.snapshot.players[0].avatarId, 'avatar_01')
    const active = started.snapshot.session.battle.activePlayerId === 'player-1' ? a : b
    send(active, { type: 'command', seq: 1, turn: 1, command: { type: 'open-confirmation' } })
    await wait(active, m => m.type === 'state' && m.snapshot.session?.battle.phase === 'confirmation')
    send(active, { type: 'command', seq: 2, turn: 1, command: { type: 'confirm-turn' } })
    for (const socket of [a, b]) await wait(socket, m => m.type === 'state' && m.snapshot.session?.battle.turnNumber === 2)
    b.close()
    const disconnected = await wait(a, m => m.type === 'state' && m.snapshot.players[1].connected === false)
    assert.equal(disconnected.snapshot.session.battle.phase, 'planning')
    send(a,{type:'command',seq:10,turn:2,command:{type:'open-surrender'}})
    send(a,{type:'command',seq:11,turn:2,command:{type:'confirm-surrender'}})
    const finished=await wait(a,m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
    assert.equal(finished.snapshot.session.battle.winnerId,'player-2')
    const bad = new WebSocket(base.replace('http:', 'ws:') + '/play', { origin: 'https://not-this-game.invalid' })
    await new Promise((resolve, reject) => { bad.on('error', resolve); bad.on('open', () => { bad.terminate(); reject(Error('Origem inválida aceita')) }) })
    console.log('PASS HTTP + duas conexões WebSocket reais: sala, turnos, resultado, assets e validação de origem.')
  } finally { for (const socket of clients) socket.terminate(); await app.close() }
}

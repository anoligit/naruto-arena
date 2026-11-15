import { randomInt } from 'node:crypto'
import * as game from './dist/engine.mjs'
import { validMessage } from './messages.mjs'

const other = id => id === 'player-1' ? 'player-2' : 'player-1'
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const empty = game.createEmptyEnergyPool
const fail = message => { throw new Error(message) }

export class PrivateRooms {
  constructor({ now = Date.now, startingPlayer = () => randomInt(2) ? 'player-1' : 'player-2' } = {}) {
    this.now = now
    this.startingPlayer = startingPlayer
    this.rooms = new Map()
    this.clients = new Map()
  }
  send(socket, message) { if (socket.readyState === 1) socket.send(JSON.stringify(message)) }
  connect(socket) { this.clients.set(socket, { room: null, playerId: null, seq: 0, window: this.now(), count: 0 }) }
  team(ids) {
    const team = game.getCompleteTeam(ids.map(id => game.characters.find(character => character.id === id) ?? null))
    if (!team) fail('Escolha três personagens cadastrados e diferentes.')
    return team
  }
  snapshot(room, playerId) {
    const seat = room.seats.get(playerId)
    return { code: room.code, you: playerId,
      players: [...room.seats.entries()].map(([id, value]) => ({ id, name: value.name, avatarId: value.avatarId })),
      session: room.session ? game.publicSessionFor(room.session, playerId, seat.surrenderPending) : null,
    }
  }
  publish(room, playerId) {
    for (const [id, seat] of room.seats) {
      if (!playerId || id === playerId) this.send(seat.socket, { type: 'state', snapshot: this.snapshot(room, id) })
    }
  }
  clearDialogs(room) { for (const seat of room.seats.values()) seat.surrenderPending = false }
  tick(room) {
    if (!room.session) return
    const before = room.session.battle.turnNumber
    room.session = game.tickSession(room.session, this.now())
    if (before !== room.session.battle.turnNumber) this.clearDialogs(room)
  }
  receive(socket, raw) {
    const client = this.clients.get(socket)
    if (!client) return
    try {
      const now = this.now()
      if (now - client.window > 10_000) { client.window = now; client.count = 0 }
      if (++client.count > 120) fail('Muitos comandos. Aguarde alguns segundos.')
      const message = JSON.parse(String(raw))
      if (!validMessage(message)) fail('Mensagem inválida.')
      if (message.type === 'create' || message.type === 'join') {
        if (client.room) fail('Você já está em uma sala.')
        if (message.version !== game.multiplayerVersion) fail('Cliente e servidor estão em versões diferentes. Atualize a página e o servidor.')
        const team = this.team(message.team)
        const avatarId = message.avatarId ?? team[0].id
        if (!game.characters.some(character => character.id === avatarId)) fail('Escolha um avatar cadastrado.')
        let room, playerId
        if (message.type === 'create') {
          if (this.rooms.size >= 100) fail('Servidor cheio. Tente novamente mais tarde.')
          let code
          do { code = Array.from({ length: 6 }, () => alphabet[randomInt(alphabet.length)]).join('') } while (this.rooms.has(code))
          room = { code, seats: new Map(), session: null, createdAt: now, lastBroadcast: 0 }
          this.rooms.set(code, room)
          playerId = 'player-1'
        } else {
          room = this.rooms.get(message.code)
          if (!room) fail('Sala não encontrada ou encerrada.')
          if (room.seats.size !== 1 || room.session) fail('Esta sala já está completa.')
          playerId = 'player-2'
        }
        room.seats.set(playerId, { socket, team, name: message.name.trim(), avatarId, surrenderPending: false })
        client.room = room.code; client.playerId = playerId
        if (room.seats.size === 2) {
          const battle = game.createBattle(room.seats.get('player-1').team, room.seats.get('player-2').team, this.startingPlayer(), 100, now)
          room.session = game.createLocalSession(battle, now)
        }
        this.publish(room)
        return
      }
      const room = this.rooms.get(client.room)
      if (!room?.session) fail('Aguarde o outro jogador entrar na sala.')
      this.tick(room)
      if (message.seq <= client.seq) fail('Comando repetido.')
      client.seq = message.seq
      if (message.turn !== room.session.battle.turnNumber) {
        this.publish(room, client.playerId)
        fail('O turno mudou. Confira a partida antes de enviar outra ação.')
      }
      if (room.session.battle.phase === 'finished') fail('A partida terminou.')
      const seat = room.seats.get(client.playerId), command = message.command
      if (command.type === 'open-surrender') { seat.surrenderPending = true; this.publish(room, client.playerId); return }
      if (command.type === 'confirm-surrender') {
        if (!seat.surrenderPending) fail('Confirme a desistência na janela aberta.')
        room.session = { ...game.createLocalSession({ ...room.session.battle, phase: 'finished', winnerId: other(client.playerId), turnEndsAt: null }, now), log: [...room.session.log, `${seat.name} desistiu.`].slice(-8) }
        this.clearDialogs(room); this.publish(room); return
      }
      if (command.type === 'close-dialog' && room.session.battle.activePlayerId !== client.playerId) {
        seat.surrenderPending = false; this.publish(room, client.playerId); return
      }
      if (room.session.battle.activePlayerId !== client.playerId) fail('Aguarde sua vez.')
      if (seat.surrenderPending && command.type !== 'close-dialog') fail('Confirme ou cancele a desistência.')
      const current = room.session
      const visible = game.publicSessionFor(current, client.playerId, false).battle
      const ownCharacter = id => current.battle.players[client.playerId].team.find(character => character.instanceId === id)
      const planning = () => { if (current.battle.phase !== 'planning' || current.exchangeOpen) fail('Feche a janela de confirmação ou troca primeiro.') }
      let next = current
      switch (command.type) {
        case 'select-skill': {
          planning()
          if (!ownCharacter(command.characterInstanceId)) fail('Esse personagem não pertence ao seu time.')
          const available = game.getSkillAvailability(visible, current.queue, client.playerId, command.characterInstanceId, command.skillId, now)
          next = { ...current, error: '', notice: '', pending: available.usable ? { characterInstanceId: command.characterInstanceId, skillId: command.skillId } : null }
          break
        }
        case 'select-target': {
          planning()
          if (!current.pending) fail('Escolha uma habilidade disponível primeiro.')
          const action = { ...current.pending, playerId: client.playerId, targetInstanceId: command.targetInstanceId }
          const result = game.appendAction(visible, current.queue, action, now)
          if (!result.ok) fail('A habilidade não pode ser atribuída a esse alvo.')
          next = { ...current, queue: result.queue, pending: null, randomPayment: empty(), error: '', notice: 'Ação atribuída. O trecho claro mostra a previsão; confirme para executar.' }
          break
        }
        case 'remove-action': {
          if (!ownCharacter(command.characterInstanceId)) fail('Esse personagem não pertence ao seu time.')
          next = game.cancelPlannedAction(current, command.characterInstanceId)
          break
        }
        case 'move-action': {
          if (command.from >= current.queue.length || command.to >= current.queue.length) fail('Posição inválida na fila.')
          const queue = [...current.queue], [action] = queue.splice(command.from, 1)
          queue.splice(command.to, 0, action); next = { ...current, queue, randomPayment: empty(), error: '' }
          break
        }
        case 'open-confirmation': planning(); next = { ...current, pending: null, randomPayment: empty(), error: '', battle: { ...current.battle, phase: 'confirmation' } }; break
        case 'close-dialog':
          seat.surrenderPending = false
          next = { ...current, exchangeOpen: false, randomPayment: empty(), error: '', battle: { ...current.battle, phase: 'planning' } }
          break
        case 'open-exchange': planning(); next = { ...current, pending: null, exchangeOpen: true, sacrificed: empty(), error: '' }; break
        case 'choose-exchange':
          if (!current.exchangeOpen) fail('Abra a troca de energia primeiro.')
          next = { ...current, chosenType: command.energyType }; break
        case 'allocate':
          if (!current.exchangeOpen && current.battle.phase !== 'confirmation') fail('Abra a confirmação ou troca primeiro.')
          next = { ...current, error: '', ...(current.exchangeOpen ? { sacrificed: command.value } : { randomPayment: command.value }) }; break
        case 'apply-exchange': {
          if (!current.exchangeOpen || current.battle.phase !== 'planning') fail('Abra a troca primeiro.')
          const battle = game.applyExchange(current.battle, current.queue, current.sacrificed, current.chosenType, now)
          if (!battle) fail('A troca exige cinco energias e deve preservar a energia das ações atribuídas.')
          next = { ...current, battle, sacrificed: empty(), error: '', notice: 'Troca aplicada. Ela não será desfeita ao cancelar as ações.' }; break
        }
        case 'confirm-turn':
          if (current.battle.phase !== 'confirmation') fail('Abra a confirmação primeiro.')
          next = game.confirmSession(current, now)
          break
        default: fail('Comando não permitido.')
      }
      room.session = { ...next, now }
      if (next.battle.turnNumber !== current.battle.turnNumber || next.battle.phase === 'finished') {
        this.clearDialogs(room); this.publish(room)
      } else this.publish(room, client.playerId)
    } catch (error) { this.send(socket, { type: 'error', message: error instanceof Error ? error.message : 'Não foi possível executar a ação.' }) }
  }
  disconnect(socket) {
    const client = this.clients.get(socket)
    this.clients.delete(socket)
    const room = this.rooms.get(client?.room)
    if (!room) return
    const playerId = client.playerId
    // Preserve nomes e times no resultado; a conexão encerrada não recebe mais mensagens.
    if (![...room.seats.values()].some(seat => this.clients.has(seat.socket))) { this.rooms.delete(room.code); return }
    if (!room.session) room.seats.delete(playerId)
    if (room.session && room.session.battle.phase !== 'finished') {
      room.session = { ...game.createLocalSession({ ...room.session.battle, phase: 'finished', winnerId: other(playerId), turnEndsAt: null }, this.now()), log: [...room.session.log, 'O adversário saiu da sala.'].slice(-8) }
      this.clearDialogs(room); this.publish(room)
    }
  }
  pulse() {
    const now = this.now(), second = Math.floor(now / 1000)
    for (const room of this.rooms.values()) {
      if (!room.session && now - room.createdAt > 10 * 60_000) {
        for (const seat of room.seats.values()) { this.send(seat.socket, { type: 'closed', message: 'Sala encerrada por falta de outro jogador.' }); seat.socket.close() }
        this.rooms.delete(room.code); continue
      }
      if (!room.session) continue
      this.tick(room)
      if (room.session.battle.phase === 'finished') {
        room.finishedAt ??= now
        if (now - room.finishedAt > 15 * 60_000) {
          for (const seat of room.seats.values()) { this.send(seat.socket, { type: 'closed', message: 'Sala encerrada após o resultado.' }); seat.socket.close() }
          this.rooms.delete(room.code); continue
        }
      }
      if (room.lastBroadcast !== second) { room.lastBroadcast = second; this.publish(room) }
    }
  }
}

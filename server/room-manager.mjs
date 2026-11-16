import { randomBytes, randomUUID, createHash, timingSafeEqual } from 'node:crypto'
import { Buffer } from 'node:buffer'
import { validMessage } from './messages.mjs'

const other = id => id === 'player-1' ? 'player-2' : 'player-1'
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const tokenHash = token => createHash('sha256').update(token).digest('hex')
const fail = message => { throw new Error(message) }

export function createRoomManager(game, randomInt) {
const empty = game.createEmptyEnergyPool
return class PrivateRooms {
  constructor({ now = Date.now, startingPlayer = () => randomInt(2) ? 'player-1' : 'player-2', roomCode, enforceUnlocks = true } = {}) {
    this.enforceUnlocks = enforceUnlocks
    this.roomCode = roomCode
    this.now = now
    this.startingPlayer = startingPlayer
    this.rooms = new Map()
    this.clients = new Map()
  }
  send(socket, message) { if (socket.readyState === 1) socket.send(JSON.stringify(message)) }
  connect(socket, identity = () => null) { this.clients.set(socket, { identity, connectionId:randomUUID(), room: null, playerId: null, seq: 0, window: this.now(), count: 0 }) }
  team(ids) {
    const team = game.getCompleteTeam(ids.map(id => game.characters.find(character => character.id === id) ?? null))
    if (!team) fail('Escolha três personagens cadastrados e diferentes.')
    return team
  }
  checkUnlocked(ids, account) {
    if(this.enforceUnlocks && ids.some(id=>!game.canUseCharacter(id,account?.progression)))fail('Seu time contém um personagem bloqueado. Confira as missões.')
  }
  prepareQuick(code, entries) {
    if (this.rooms.has(code)) fail('Código de sala ocupado.')
    if (entries.length !== 2 || !entries.every(entry=>entry.account?.id) || entries[0].account.id === entries[1].account.id) fail('São necessárias duas contas diferentes.')
    if (entries.some(entry=>this.currentMatch(entry.account.id))) fail('Um jogador já está em outra partida.')
    for(const entry of entries)this.checkUnlocked(entry.team,entry.account)
    const teams=entries.map(entry=>this.team(entry.team)),now=this.now()
    const seats=new Map(entries.map((entry,index)=>[`player-${index+1}`,{
      socket:{readyState:3,send(){},close(){}},connectionId:randomUUID(),team:teams[index],
      account:entry.account,name:entry.account.username,avatarId:entry.account.avatarId??undefined,
      resumeHash:null,missedTurns:0,surrenderPending:false,
    }]))
    const room={code,mode:'quick',resultId:randomUUID(),resultSaved:false,seats,createdAt:now,lastBroadcast:0,
      session:game.createLocalSession(game.createBattle(teams[0],teams[1],this.startingPlayer(),100,now),now)}
    this.rooms.set(code,room)
    return room
  }
  prepareTraining(code, account, ids) {
    if (!account?.id) fail('Entre na sua conta para salvar o treinamento.')
    if (this.rooms.has(code) || this.currentMatch(account.id)) fail('Você já tem uma partida em andamento.')
    if (this.rooms.size >= 100) fail('Servidor cheio. Tente novamente em instantes.')
    const team = this.team(ids)
    this.checkUnlocked(ids, account)
    const now = this.now(), battle = game.createTrainingBattle(team, now)
    const seats = new Map([
      ['player-1', { account, name:account.username, avatarId:account.avatarId, team }],
      ['player-2', { account:null, name:'Adversário de treino', avatarId:game.avatarIds[0], team:this.team(battle.players['player-2'].team.map(c=>c.characterId)) }],
    ].map(([id,seat])=>[id,{...seat,socket:{readyState:3,send(){},close(){}},connectionId:randomUUID(),resumeHash:null,missedTurns:0,surrenderPending:false}]))
    const room = {code,mode:'training',resultId:randomUUID(),resultSaved:false,seats,createdAt:now,lastBroadcast:0,session:game.createLocalSession(battle,now)}
    this.rooms.set(code,room)
    return room
  }
  computerTurn(room) {
    if (room.mode==='training' && room.session.battle.phase!=='finished' && room.session.battle.activePlayerId==='player-2') {
      room.session=game.runComputerTurn(room.session,this.now())
      this.clearDialogs(room)
    }
  }
  currentMatch(accountId) {
    for (const room of this.rooms.values()) if (room.session?.battle.phase !== 'finished' && [...room.seats.values()].some(seat=>seat.account?.id===accountId)) return room.code
    return null
  }
  snapshot(room, playerId) {
    const seat = room.seats.get(playerId)
    return { code: room.code, mode: room.mode ?? 'private', you: playerId,
      players: [...room.seats.entries()].map(([id, value]) => ({ id, name: value.name, avatarId: value.avatarId, connected: room.mode==='training' && id==='player-2' || value.socket?.readyState === 1 && this.clients.has(value.socket), missedTurns: value.missedTurns ?? 0, ...(value.account ? { accountId: value.account.id, profile: value.account.profile } : {}) })),
      session: room.session ? game.publicSessionFor(room.session, playerId, seat.surrenderPending) : null,
    }
  }
  publish(room, playerId) {
    if(['quick','training'].includes(room.mode) && room.session?.battle.phase==='finished' && !room.resultSaved)return
    for (const [id, seat] of room.seats) {
      if (!playerId || id === playerId) this.send(seat.socket, { type: 'state', snapshot: this.snapshot(room, id) })
    }
  }
  clearDialogs(room) { for (const seat of room.seats.values()) seat.surrenderPending = false }
  tick(room) {
    if (!room.session) return
    const before = room.session.battle.turnNumber, actor = room.session.battle.activePlayerId
    const running = room.session.battle.phase !== 'finished'
    room.session = game.tickSession(room.session, this.now())
    if (before !== room.session.battle.turnNumber) {
      const seat = room.seats.get(actor)
      seat.missedTurns = (seat.missedTurns ?? 0) + 1
      if (running && seat.missedTurns >= 2 && room.session.battle.phase !== 'finished') {
        room.session = { ...game.createLocalSession({ ...room.session.battle, phase:'finished', winnerId:other(actor), turnEndsAt:null },this.now()), log:[...room.session.log,`${seat.name} perdeu duas vezes seguidas por não finalizar o turno.`].slice(-8) }
      }
      this.clearDialogs(room)
    }
    this.computerTurn(room)
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
      if (message.type === 'resume') {
        if (client.room) fail('Você já está em uma sala.')
        if (message.version !== game.multiplayerVersion) fail('Cliente e servidor estão em versões diferentes. Atualize a página e o servidor.')
        const room = this.rooms.get(message.code)
        if (!room) fail('Sala não encontrada ou encerrada.')
        const account = client.identity()
        const entry = [...room.seats].find(([,seat])=>{
          if (seat.account) return account?.id===seat.account.id
          return typeof message.token==='string' && seat.resumeHash && timingSafeEqual(Buffer.from(seat.resumeHash,'hex'),Buffer.from(tokenHash(message.token),'hex'))
        })
        if (!entry) fail('Não foi possível comprovar que esta equipe pertence a você.')
        this.tick(room)
        const [playerId,seat] = entry, previous = seat.socket
        if (previous !== socket) { this.clients.delete(previous); previous?.close(4001,'Partida aberta em outra janela.') }
        seat.socket=socket; seat.connectionId=client.connectionId; client.room=room.code; client.playerId=playerId; client.seq=0
        this.send(socket,{type:'resume-info',code:room.code,...(!seat.account?{token:message.token}:{})})
        this.publish(room)
        return
      }
      if (message.type === 'create' || message.type === 'join') {
        if (client.room) fail('Você já está em uma sala.')
        if (message.version !== game.multiplayerVersion) fail('Cliente e servidor estão em versões diferentes. Atualize a página e o servidor.')
        const team = this.team(message.team)
        const account = client.identity()
        this.checkUnlocked(message.team,account)
        if (account && this.currentMatch(account.id)) fail('Você já tem uma sala em andamento. Retorne à sua partida.')
        const avatarId = account ? account.avatarId ?? undefined : message.avatarId ?? game.avatarIds[0]
        if (avatarId !== undefined && !game.avatarIds.includes(avatarId) && !(account && game.characters.some(character => character.id === avatarId))) fail('Escolha um avatar cadastrado.')
        let room, playerId
        if (message.type === 'create') {
          if (this.rooms.size >= 100) fail('Servidor cheio. Tente novamente mais tarde.')
          let code
          if (this.roomCode) { code = this.roomCode(); if (this.rooms.has(code)) fail('Código ocupado. Crie outra sala.') }
          else do { code = Array.from({ length: 6 }, () => alphabet[randomInt(alphabet.length)]).join('') } while (this.rooms.has(code))
          room = { code, seats: new Map(), session: null, createdAt: now, lastBroadcast: 0 }
          this.rooms.set(code, room)
          playerId = 'player-1'
        } else {
          room = this.rooms.get(message.code)
          if (!room) fail('Sala não encontrada ou encerrada.')
          if (room.seats.size !== 1 || room.session) fail('Esta sala já está completa.')
          playerId = 'player-2'
        }
        const resumeToken = account ? null : randomBytes(32).toString('base64url')
        room.seats.set(playerId, { socket, connectionId:client.connectionId, team, resumeHash:resumeToken ? tokenHash(resumeToken):null, missedTurns:0, name: account?.username ?? message.name.trim(), avatarId, account, surrenderPending: false })
        client.room = room.code; client.playerId = playerId
        if (room.seats.size === 2) {
          const battle = game.createBattle(room.seats.get('player-1').team, room.seats.get('player-2').team, this.startingPlayer(), 100, now)
          room.session = game.createLocalSession(battle, now)
        }
        this.send(socket,{type:'resume-info',code:room.code,...(resumeToken?{token:resumeToken}:{})})
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
          const actor = ownCharacter(command.characterInstanceId)
          const skill = game.getBattleSkills(current.battle, actor).find(skill => skill.id === command.skillId)
          if (skill?.preselection) {
            if (current.queue.some(action => action.characterInstanceId === actor.instanceId)) fail('Cancele a ação antes de trocar as invocações.')
            const selected = game.togglePreselection(current.battle, client.playerId, actor.instanceId, skill.id, now)
            if (!selected) fail('Invocação indisponível para pré-seleção.')
            next = { ...current, battle: selected, pending: null, error: '' }
            break
          }
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
          if (next.battle.turnNumber !== current.battle.turnNumber || next.battle.phase === 'finished') seat.missedTurns=0
          break
        default: fail('Comando não permitido.')
      }
      room.session = { ...next, now }
      this.computerTurn(room)
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
    // A equipe permanece reservada. O relógio e o limite de duas vezes são
    // resolvidos por tick(), mesmo quando ambos os jogadores estão desconectados.
    this.tick(room)
    this.publish(room)
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

}

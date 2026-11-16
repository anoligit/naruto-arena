import { roomResult } from '../server/progression.mjs'
import { DurableObject } from 'cloudflare:workers'
import { randomInt } from 'node:crypto'
import { createRoomManager } from '../server/room-manager.mjs'
import { validMessage } from '../server/messages.mjs'
import { CloudAccounts } from './accounts.mjs'
import * as game from './generated/engine.mjs'
const Rooms = createRoomManager(game,randomInt)
const expiredSocket = { readyState:3,send() {},close() {} }

export class ArenaRoom extends DurableObject {
  constructor(ctx, env) {
    super(ctx,env)
    this.ctx = ctx; this.env = env; this.code = null; this.trackedAccounts = new Set(); this.rooms = new Rooms({ roomCode:()=>this.code })
    ctx.blockConcurrencyWhile(async () => {
      const saved = await ctx.storage.get('room')
      if (saved && saved.version !== game.multiplayerVersion) {
        for (const socket of ctx.getWebSockets()) socket.close(1012,'O jogo foi atualizado. Entre numa nova sala.')
        for (const [,seat] of saved.seats) if (seat.account) await env.DB.prepare('DELETE FROM active_matches WHERE account_id=? AND room_code=?').bind(seat.account.id,saved.code).run()
        await ctx.storage.deleteAll(); return
      }
      if (saved) {
        this.code = saved.code
        this.trackedAccounts = new Set(saved.seats.map(([,seat])=>seat.account?.id).filter(Boolean))
        const room = { ...saved, seats:new Map(saved.seats.map(([id,seat])=>[id,{...seat,team:this.rooms.team(seat.team),socket:expiredSocket}])) }
        this.rooms.rooms.set(room.code,room)
      }
      for (const socket of ctx.getWebSockets()) {
        const attachment = socket.deserializeAttachment()
        if (!attachment) { socket.close(1011,'Conexão sem estado.'); continue }
        this.code ??= attachment.code
        const room = this.rooms.rooms.get(this.code)
        const seat = room?.seats.get(attachment.client?.playerId)
        if (attachment.client?.room && (!seat || seat.connectionId !== attachment.client.connectionId)) {
          socket.close(4001,'Partida aberta em outra janela.'); continue
        }
        if (socket.readyState !== 1) continue
        this.rooms.connect(socket,()=>attachment.identity ?? null)
        Object.assign(this.rooms.clients.get(socket),attachment.client ?? {})
        if (seat) seat.socket = socket
      }
    })
  }
  async fetch(request) {
    if (new URL(request.url).pathname === '/__training' && request.method==='POST') {
      const {code,version,account,team}=await request.json()
      if(version!==game.multiplayerVersion || !/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/.test(code))return Response.json({error:'Versão ou sala inválida.'},{status:400})
      if(this.rooms.rooms.size)return Response.json({error:'Sala ocupada.'},{status:409})
      try {this.rooms.prepareTraining(code,account,team)}catch(error){return Response.json({error:error.message},{status:400})}
      try {
        await this.env.DB.prepare('INSERT INTO active_matches(account_id,room_code,updated_at) VALUES (?,?,?)').bind(account.id,code,Date.now()).run()
      } catch {this.rooms.rooms.delete(code);return Response.json({error:'Você já tem uma partida em andamento. Retorne à seleção.'},{status:409})}
      this.code=code
      await this.persist()
      return Response.json({code})
    }
    if (new URL(request.url).pathname === '/__quick' && request.method === 'POST') {
      const {code,version,entries}=await request.json()
      if(version!==game.multiplayerVersion || !/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/.test(code))return new Response('Versão ou sala inválida.',{status:400})
      if(this.rooms.rooms.size)return new Response('Sala ocupada.',{status:409})
      try {this.rooms.prepareQuick(code,entries)}catch{return new Response('Times inválidos.',{status:400})}
      try {
        await this.env.DB.prepare('INSERT INTO active_matches(account_id,room_code,updated_at) VALUES (?,?,?),(?,?,?)')
          .bind(entries[0].account.id,code,Date.now(),entries[1].account.id,code,Date.now()).run()
      } catch {this.rooms.rooms.delete(code);return new Response('Uma conta já está em outra partida.',{status:409})}
      this.code=code
      await this.persist()
      return Response.json({code})
    }
    if (new URL(request.url).pathname === '/__match') {
      const accountId=request.headers.get('X-Arena-Account'),room=this.rooms.rooms.get(this.code)
      if(roomResult(room??{},game.characterMissions) && !room.resultSaved)await this.persist()
      return Response.json({active:!!room && room.session?.battle.phase!=='finished' && [...room.seats.values()].some(seat=>seat.account?.id===accountId)})
    }
    const code = request.headers.get('X-Arena-Room'), mode = request.headers.get('X-Arena-Mode')
    if (!code || !['join','create','resume'].includes(mode)) return new Response('Sala inválida.',{status:400})
    const room = this.rooms.rooms.get(code)
    if (mode === 'join' && (!room || room.session || room.seats.size !== 1)) return new Response('Sala inexistente ou completa.',{status:404})
    if (mode === 'resume' && !room) return new Response('Sala encerrada.',{status:404})
    if (mode === 'create' && room) return new Response('Código ocupado. Tente criar novamente.',{status:409})
    if (this.ctx.getWebSockets().length >= 4) return new Response('Sala cheia.',{status:429})
    this.code = code
    const pair = new WebSocketPair(), client = pair[0], server = pair[1]
    this.ctx.acceptWebSocket(server)
    server.serializeAttachment({ code,mode,createdAt:Date.now(),sessionHash:request.headers.get('X-Arena-Session-Hash') })
    this.rooms.connect(server)
    await this.persist()
    return new Response(null,{status:101,webSocket:client})
  }
  async webSocketMessage(socket,message) {
    const attachment = socket.deserializeAttachment()
    if (typeof message !== 'string' || new TextEncoder().encode(message).length > 32768) { socket.close(1009,'Mensagem inválida ou muito grande.'); return }
    const client = this.rooms.clients.get(socket)
    if (!client) { socket.close(1011,'Conexão encerrada.'); return }
    if (!client.room) {
      let hello
      try { hello = JSON.parse(message) } catch { socket.send(JSON.stringify({type:'error',message:'Mensagem inválida.'})); return }
      if (hello.type !== attachment.mode || ['join','resume'].includes(hello.type) && hello.code !== this.code) {
        socket.send(JSON.stringify({type:'error',message:'O código da conexão não corresponde à sala.'})); return
      }
      if (!validMessage(hello)) { socket.send(JSON.stringify({type:'error',message:'Mensagem inválida.'})); return }
      const account = await new CloudAccounts(this.env.DB,game.characters.map(character=>character.id)).sessionHash(attachment.sessionHash)
      if (account && ['create','join'].includes(hello.type)) {
        const claim=await this.env.DB.prepare('INSERT INTO active_matches VALUES (?,?,?) ON CONFLICT(account_id) DO NOTHING').bind(account.id,this.code,Date.now()).run()
        const active=await this.env.DB.prepare('SELECT room_code FROM active_matches WHERE account_id=?').bind(account.id).first()
        if (active?.room_code!==this.code) { socket.send(JSON.stringify({type:'error',message:'Você já tem uma sala em andamento. Retorne à sua partida.'})); return }
        attachment.claimedAccount = claim.meta.changes>0 ? account.id:null
      }
      attachment.identity = account ? {id:account.id,username:account.username,avatarId:account.avatarId,profile:account.profile,progression:account.progression}:null
      socket.serializeAttachment(attachment)
      client.identity = ()=>attachment.identity
    }
    this.rooms.receive(socket,message)
    if (!client.room && attachment.claimedAccount) {
      await this.env.DB.prepare('DELETE FROM active_matches WHERE account_id=? AND room_code=?').bind(attachment.claimedAccount,this.code).run()
    }
    await this.persist()
  }
  async webSocketClose(socket) { this.rooms.disconnect(socket); await this.persist() }
  async webSocketError(socket) { this.rooms.disconnect(socket); await this.persist() }
  async alarm() {
    const now = Date.now()
    for (const socket of this.ctx.getWebSockets()) {
      const attachment = socket.deserializeAttachment()
      if (!this.rooms.clients.get(socket)?.room && now-attachment.createdAt >= 10000) {
        this.rooms.disconnect(socket); socket.close(1000,'Tempo para entrar na sala esgotado.')
      }
    }
    this.rooms.pulse()
    await this.persist()
  }
  async persist() {
    const room = this.rooms.rooms.get(this.code)
    const result=room&&roomResult(room,game.characterMissions)
    if(result&&!room.resultSaved) {
      // Primeiro grava a prova da partida no Durable Object. Se a confirmação
      // no D1 falhar ou o objeto hibernar, o mesmo resultado será reaplicado uma só vez.
      const {seats,...saved}=room
      await this.ctx.storage.put('room',{...saved,version:game.multiplayerVersion,seats:[...seats].map(([id,{socket,team,...seat}])=>[id,{...seat,team:team.map(c=>c.id)}])})
      try {await new CloudAccounts(this.env.DB,game.characters.map(c=>c.id)).recordResult(result);room.resultSaved=true;this.rooms.publish(room)}
      catch(error){await this.ctx.storage.setAlarm(Date.now()+5000);throw error}
    }
    const accounts = new Set(room && room.session?.battle.phase!=='finished' ? [...room.seats.values()].map(seat=>seat.account?.id).filter(Boolean):[])
    const releases=[...this.trackedAccounts].filter(id=>!accounts.has(id))
    if (releases.length) await this.env.DB.batch(releases.map(id=>this.env.DB.prepare('DELETE FROM active_matches WHERE account_id=? AND room_code=?').bind(id,this.code)))
    this.trackedAccounts=accounts
    for (const [socket,client] of this.rooms.clients) {
      const attachment = socket.deserializeAttachment()
      const {identity,...savedClient} = client
      socket.serializeAttachment({...attachment,client:savedClient})
    }
    if (room) {
      if (room.session?.battle.phase === 'finished') room.finishedAt ??= Date.now()
      const {seats,...saved} = room
      await this.ctx.storage.put('room',{...saved,version:game.multiplayerVersion,seats:[...seats].map(([id,{socket,team,...seat}])=>[id,{...seat,team:team.map(character=>character.id)}])})
    } else await this.ctx.storage.delete('room')
    const deadlines = []
    if (room) deadlines.push(room.session ? room.session.battle.phase === 'finished' ? (room.finishedAt ?? Date.now())+15*60000 : room.session.battle.turnEndsAt : room.createdAt+10*60000)
    for (const socket of this.ctx.getWebSockets()) if (socket.readyState === 1 && !this.rooms.clients.get(socket)?.room) deadlines.push(socket.deserializeAttachment().createdAt+10000)
    if (deadlines.length) await this.ctx.storage.setAlarm(Math.max(Date.now()+100,Math.min(...deadlines.filter(Number.isFinite))))
    else await this.ctx.storage.deleteAlarm()
  }
}

import { roomResult } from './progression.mjs'
import { Accounts } from './accounts.mjs'
import { accountHandler, sessionToken, allowedOrigin, readAccountBody } from './account-http.mjs'
import { characters, characterMissions } from './dist/engine.mjs'
import http from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { WebSocketServer } from 'ws'
import { QuickMatchmaker, QueueError, newRoomCode } from './matchmaking.mjs'
import { PrivateRooms } from './rooms.mjs'
import { multiplayerVersion } from './dist/engine.mjs'

const siteDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf' }

// Serve somente a compilação do site, nunca arquivos-fonte nem a pasta server.
async function serveSite(request, response) {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return }
  let pathname
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname) }
  catch { response.writeHead(400).end(); return }
  if (pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })
    response.end(JSON.stringify({ ok: true, version: multiplayerVersion })); return
  }
  if (pathname === '/' || pathname === '/naruto-arena') {
    response.writeHead(302, { Location: '/naruto-arena/#game', 'Cache-Control': 'no-store' }).end(); return
  }
  if (!pathname.startsWith('/naruto-arena/')) { response.writeHead(404).end('Não encontrado'); return }
  const relative = pathname.slice('/naruto-arena/'.length) || 'index.html'
  const file = path.resolve(siteDirectory, relative)
  if (!file.startsWith(siteDirectory) || relative.split(/[\\/]/).some(part => part.startsWith('.'))) { response.writeHead(404).end(); return }
  try {
    const body = await readFile(file)
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' })
    response.end(request.method === 'HEAD' ? undefined : body)
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Arquivo não encontrado. Execute npm run online:build antes de iniciar.')
  }
}

export async function startServer({ port = Number(process.env.PORT ?? 3001), host = '0.0.0.0', origins = (process.env.FRONTEND_ORIGINS ?? 'http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173').split(','), rooms = new PrivateRooms(), accounts = new Accounts({ characterIds: characters.map(character => character.id) }) } = {}) {
  const handleAccount = accountHandler(accounts, origins)
  const quick=new QuickMatchmaker({version:multiplayerVersion,validateTeam:(ids,account)=>{rooms.team(ids);rooms.checkUnlocked(ids,account)},currentMatch:id=>rooms.currentMatch(id),
    createMatch:entries=>{let code;do{code=newRoomCode()}while(rooms.rooms.has(code));rooms.prepareQuick(code,entries);return code}})
  const settleResults=()=>{
    for(const room of rooms.rooms.values()) {
      const result=roomResult(room,characterMissions)
      if(result&&!room.resultSaved)try{accounts.recordResult(result);room.resultSaved=true;rooms.publish(room)}catch{console.error('Não foi possível salvar um resultado. O servidor tentará novamente.')}
    }
  }
  const server = http.createServer((request, response) => {
    (async () => {
      if (new URL(request.url,'http://localhost').pathname === '/api/training') {
        const reply=(status,value)=>{response.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});response.end(JSON.stringify(value))}
        if(request.method!=='POST'){reply(405,{error:'Método não permitido.'});return}
        if(!allowedOrigin(request,origins)){reply(403,{error:'Abra o treinamento pelo endereço do jogo.'});return}
        try {
          const account=accounts.identity(sessionToken(request))
          if(!account)throw new QueueError('Entre na sua conta para salvar o treinamento.',401)
          if(request.headers['x-arena-account']!==account.id)throw new QueueError('A conta mudou em outra janela. Atualize a página.',409)
          const input=await readAccountBody(request)
          if(input.version!==multiplayerVersion)throw new QueueError('O jogo foi atualizado. Atualize a página.',409)
          if(!Array.isArray(input.team)||input.team.length!==3||input.team.some(id=>typeof id!=='string'||id.length>80))throw new QueueError('Escolha três personagens válidos.')
          let code=rooms.currentMatch(account.id)
          if(!code){
            do{code=newRoomCode()}while(rooms.rooms.has(code))
            try {rooms.prepareTraining(code,account,input.team)}catch(error){throw new QueueError(error.message)}
          }
          reply(200,{code})
        } catch(error){reply(error.status??500,{error:error.status?error.message:'Não foi possível iniciar o treinamento. Tente novamente.'})}
        return
      }
      if (new URL(request.url,'http://localhost').pathname === '/api/quick') {
        const reply=(status,value)=>{response.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});response.end(JSON.stringify(value))}
        if(!['POST','DELETE'].includes(request.method)){reply(405,{error:'Método não permitido.'});return}
        if(!allowedOrigin(request,origins)){reply(403,{error:'Abra a fila pelo endereço do jogo.'});return}
        try {
          const account=accounts.identity(sessionToken(request))
          if(!account)throw new QueueError('Entre na sua conta para jogar uma partida rápida.',401)
          if(request.headers['x-arena-account']!==account.id)throw new QueueError('A conta mudou em outra janela. Atualize a página.',409)
          reply(200,await quick.request(account,await readAccountBody(request),request.method==='DELETE'))
        } catch(error){reply(error.status??500,{error:error.status?error.message:'Não foi possível buscar adversário. Tente novamente.'})}
        return
      }
      if (new URL(request.url,'http://localhost').pathname === '/api/match' && request.method === 'GET') {
        const account=accounts.session(sessionToken(request))
        response.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'})
        response.end(JSON.stringify({code:account ? rooms.currentMatch(account.id):null})); return
      }
      if (!await handleAccount(request, response)) await serveSite(request, response)
    })().catch(() => response.destroy())
  })
  server.requestTimeout = 15_000
  const sockets = new WebSocketServer({ noServer: true, maxPayload: 32 * 1024 })
  server.on('upgrade', (request, socket, head) => {
    if (new URL(request.url, 'http://localhost').pathname !== '/play' || !allowedOrigin(request, origins)) { socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n'); socket.destroy(); return }
    sockets.handleUpgrade(request, socket, head, connection => sockets.emit('connection', connection, request))
  })
  sockets.on('connection', (socket, request) => {
    const token = sessionToken(request)
    rooms.connect(socket, () => accounts.identity(token))
    socket.alive = true
    socket.on('pong', () => { socket.alive = true })
    socket.on('message', message => {rooms.receive(socket, message);settleResults()})
    socket.on('close', () => rooms.disconnect(socket))
    socket.on('error', () => {})
  })
  const clock = setInterval(() => {rooms.pulse();settleResults()}, 250)
  const heartbeat = setInterval(() => {
    for (const socket of sockets.clients) {
      if (!socket.alive) { socket.terminate(); continue }
      socket.alive = false; socket.ping()
    }
  }, 20_000)
  try { await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, host, resolve) }) }
  catch (error) { clearInterval(clock); clearInterval(heartbeat); sockets.close(); accounts.close(); throw error }
  return { server, sockets, rooms, close: async () => {
    clearInterval(clock); clearInterval(heartbeat)
    for (const socket of sockets.clients) socket.terminate()
    await new Promise(resolve => sockets.close(resolve))
    await new Promise(resolve => server.close(resolve))
    accounts.close()
  } }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const app = await startServer()
    console.log(`Jogo online: http://localhost:${app.server.address().port}/naruto-arena/#game`)
    console.log('Use Partida privada online após selecionar três personagens. O túnel continua na porta 3001.')
    let closing = false
    const stop = async () => { if (closing) return; closing = true; await app.close(); process.exit(0) }
    process.on('SIGTERM', stop); process.on('SIGINT', stop)
  } catch (error) {
    console.error(error.code === 'EADDRINUSE' ? 'Porta ocupada. Pare o servidor de teste com Control + C antes de iniciar o jogo online.' : error)
    process.exit(1)
  }
}

import http from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { WebSocketServer } from 'ws'
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

export async function startServer({ port = Number(process.env.PORT ?? 3001), host = '0.0.0.0', origins = (process.env.FRONTEND_ORIGINS ?? 'http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173').split(','), rooms = new PrivateRooms() } = {}) {
  const server = http.createServer((request, response) => { serveSite(request, response).catch(() => response.destroy()) })
  const sockets = new WebSocketServer({ noServer: true, maxPayload: 32 * 1024 })
  server.on('upgrade', (request, socket, head) => {
    let sameHost = false
    try { const origin = new URL(request.headers.origin); sameHost = ['http:', 'https:'].includes(origin.protocol) && origin.host === request.headers.host } catch { /* Rejeita origens ausentes ou inválidas. */ }
    if (request.url !== '/play' || !(sameHost || origins.includes(request.headers.origin))) { socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n'); socket.destroy(); return }
    sockets.handleUpgrade(request, socket, head, connection => sockets.emit('connection', connection))
  })
  sockets.on('connection', socket => {
    rooms.connect(socket)
    socket.alive = true
    socket.on('pong', () => { socket.alive = true })
    socket.on('message', message => rooms.receive(socket, message))
    socket.on('close', () => rooms.disconnect(socket))
    socket.on('error', () => {})
  })
  const clock = setInterval(() => rooms.pulse(), 250)
  const heartbeat = setInterval(() => {
    for (const socket of sockets.clients) {
      if (!socket.alive) { socket.terminate(); continue }
      socket.alive = false; socket.ping()
    }
  }, 20_000)
  try { await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, host, resolve) }) }
  catch (error) { clearInterval(clock); clearInterval(heartbeat); sockets.close(); throw error }
  return { server, sockets, rooms, close: async () => {
    clearInterval(clock); clearInterval(heartbeat)
    for (const socket of sockets.clients) socket.terminate()
    await new Promise(resolve => sockets.close(resolve))
    await new Promise(resolve => server.close(resolve))
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

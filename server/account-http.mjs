import { AccountError, sessionLifetime } from './accounts.mjs'

const cookieName = 'arena_session'
export function sessionToken(request) {
  return request.headers.cookie?.split(';').map(item => item.trim()).find(item => item.startsWith(cookieName + '='))?.slice(cookieName.length + 1) ?? null
}
export function allowedOrigin(request, origins) {
  try { const origin = new URL(request.headers.origin); return ['http:', 'https:'].includes(origin.protocol) && (origin.host === request.headers.host || origins.includes(origin.origin)) } catch { return false }
}
function cookie(token, request) {
  const secure = request.socket?.encrypted || request.headers['x-forwarded-proto']?.split(',')[0].trim() === 'https' || request.headers.origin?.startsWith('https://')
  return `${cookieName}=${token ?? ''}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${token ? sessionLifetime / 1000 : 0}${secure ? '; Secure' : ''}`
}
export async function readAccountBody(request) {
  if (request.headers['content-type']?.split(';')[0] !== 'application/json') throw new AccountError('Envie os dados do formulário em JSON.', 415)
  let size = 0; const chunks = []
  for await (const chunk of request) {
    size += Buffer.byteLength(chunk)
    if (size > 8192) throw new AccountError('O formulário excedeu o tamanho permitido.', 413)
    chunks.push(Buffer.from(chunk))
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')) } catch { throw new AccountError('Não foi possível ler os dados do formulário.') }
}
export function accountHandler(accounts, origins = []) {
  const attempts = new Map()
  return async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname
    if (!pathname.startsWith('/api/account/')) return false
    const reply = (status, data, extra = {}) => {
      response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...extra })
      response.end(JSON.stringify(data)); return true
    }
    try {
      if (request.method === 'GET' && pathname === '/api/account/session') return reply(200, { account: accounts.session(sessionToken(request)) })
      if (!['POST', 'PATCH'].includes(request.method)) return reply(405, { error: 'Método não permitido.' })
      if (!allowedOrigin(request, origins)) return reply(403, { error: 'Abra o formulário pelo endereço do jogo.' })
      const now = Date.now(), key = `${request.socket.remoteAddress}:${pathname}`
      for (const [id, limit] of attempts) if (limit.until <= now) attempts.delete(id)
      const limit = attempts.get(key) ?? { count: 0, until: now + 600_000 }
      const maximum = pathname.endsWith('/register') ? 10 : pathname.endsWith('/preferences') ? 300 : 30
      if (limit.count >= maximum || attempts.size > 10_000) return reply(429, { error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' }, { 'Retry-After': String(Math.ceil((limit.until - now) / 1000)) })
      limit.count++; attempts.set(key, limit)
      const token = sessionToken(request)
      if (request.method === 'POST' && pathname === '/api/account/logout') {
        accounts.logout(token); return reply(200, { account: null }, { 'Set-Cookie': cookie(null, request) })
      }
      if (request.method === 'PATCH' && pathname === '/api/account/preferences') {
        const account = accounts.session(token)
        if (!account) return reply(401, { error: 'Sua sessão terminou. Entre novamente.' })
        if (request.headers['x-arena-account'] !== account.id) return reply(409, { error: 'A conta foi alterada em outra janela. Atualize a página antes de salvar.' })
        return reply(200, { account: accounts.preferences(account.id, await readAccountBody(request)) })
      }
      if (request.method === 'POST' && ['/api/account/register', '/api/account/login'].includes(pathname)) {
        const input = await readAccountBody(request)
        const result = pathname.endsWith('/register') ? await accounts.register(input) : await accounts.login(input)
        accounts.logout(token)
        return reply(pathname.endsWith('/register') ? 201 : 200, { account: result.account }, { 'Set-Cookie': cookie(result.token, request) })
      }
      return reply(404, { error: 'Área da conta não encontrada.' })
    } catch (error) {
      return reply(error instanceof AccountError ? error.status : 500, { error: error instanceof AccountError ? error.message : 'Não foi possível concluir a operação. Tente novamente.' })
    }
  }
}

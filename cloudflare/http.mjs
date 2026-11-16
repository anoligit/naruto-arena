import { AccountError, lifetime } from '../server/account-rules.mjs'
export const json = (status, value, headers = {}) => new Response(JSON.stringify(value), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers } })
export const tokenFrom = request => request.headers.get('Cookie')?.split(';').map(value => value.trim()).find(value => value.startsWith('arena_session='))?.slice(14) ?? null
export const sameOrigin = request => request.headers.get('Origin') === new URL(request.url).origin
const cookie = (token, request) => `arena_session=${token ?? ''}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${token ? lifetime / 1000 : 0}${new URL(request.url).protocol === 'https:' ? '; Secure' : ''}`
export async function readBody(request) {
  if (request.headers.get('Content-Type')?.split(';')[0] !== 'application/json') throw new AccountError('Envie os dados do formulário em JSON.',415)
  const reader = request.body?.getReader(); if (!reader) throw new AccountError('Preencha o formulário.')
  let size = 0; const chunks = []
  while (true) {
    const { value, done } = await reader.read(); if (done) break
    size += value.byteLength
    if (size > 8192) { await reader.cancel(); throw new AccountError('O formulário excedeu o tamanho permitido.',413) }
    chunks.push(value)
  }
  const bytes = new Uint8Array(size); let offset = 0
  for (const chunk of chunks) { bytes.set(chunk,offset); offset += chunk.length }
  try { return JSON.parse(new TextDecoder().decode(bytes)) } catch { throw new AccountError('Não foi possível ler os dados do formulário.') }
}
export async function accountResponse(request, accounts) {
  const pathname = new URL(request.url).pathname, token = tokenFrom(request)
  try {
    if (request.method === 'GET' && pathname === '/api/account/session') return json(200,{ account: await accounts.session(token) })
    if (!sameOrigin(request)) return json(403,{ error:'Abra o formulário pelo endereço do jogo.' })
    if (request.method === 'POST' && pathname === '/api/account/logout') {
      await accounts.logout(token); return json(200,{ account:null },{ 'Set-Cookie':cookie(null,request) })
    }
    if (request.method === 'PATCH' && pathname === '/api/account/preferences') {
      const account = await accounts.session(token)
      if (!account) return json(401,{ error:'Sua sessão terminou. Entre novamente.' })
      if (request.headers.get('X-Arena-Account') !== account.id) return json(409,{ error:'A conta foi alterada em outra janela. Atualize a página antes de salvar.' })
      return json(200,{ account: await accounts.preferences(account.id,await readBody(request)) })
    }
    if (request.method === 'POST' && ['/api/account/register','/api/account/login'].includes(pathname)) {
      const result = pathname.endsWith('/register') ? await accounts.register(await readBody(request)) : await accounts.login(await readBody(request))
      await accounts.logout(token)
      return json(pathname.endsWith('/register') ? 201 : 200,{ account:result.account },{ 'Set-Cookie':cookie(result.token,request) })
    }
    return json(404,{ error:'Área da conta não encontrada.' })
  } catch (error) { return json(error instanceof AccountError ? error.status : 500,{ error:error instanceof AccountError ? error.message : 'Não foi possível concluir a operação. Tente novamente.' }) }
}

import { DurableObject } from 'cloudflare:workers'
import { randomInt } from 'node:crypto'
import { digest } from '../server/account-rules.mjs'
import { characters, multiplayerVersion } from './generated/engine.mjs'
import { CloudAccounts } from './accounts.mjs'
import { accountResponse, json, sameOrigin, tokenFrom, readBody } from './http.mjs'
import { activeMatch } from './active-match.mjs'
import { newRoomCode } from '../server/matchmaking.mjs'
export { QuickMatchmaking } from './quick.mjs'
export { ArenaRoom } from './room.mjs'

const characterIds = characters.map(character => character.id)
// O hash de senha roda num Durable Object, que tem orçamento de CPU diferente
// do Worker de entrada. Não se reduz a proteção da senha para economizar CPU.
export class AccountService extends DurableObject {
  constructor(ctx, env) {
    super(ctx,env)
    this.ctx = ctx; this.accounts = new CloudAccounts(env.DB,characterIds)
    ctx.storage.sql.exec('CREATE TABLE IF NOT EXISTS attempts (key TEXT PRIMARY KEY, count INTEGER NOT NULL, until INTEGER NOT NULL)')
  }
  async fetch(request) {
    if (request.method !== 'GET') {
      if (!sameOrigin(request)) return json(403,{ error:'Abra o formulário pelo endereço do jogo.' })
      const now = Date.now(), path = new URL(request.url).pathname
      const key = digest(`${request.headers.get('CF-Connecting-IP') ?? 'local'}:${path}`)
      const sql = this.ctx.storage.sql
      sql.exec('DELETE FROM attempts WHERE until<=?',now)
      const previous = [...sql.exec('SELECT count,until FROM attempts WHERE key=?',key)][0]
      const maximum = path.endsWith('/register') ? 10 : path.endsWith('/preferences') ? 300 : 30
      if ((previous?.count ?? 0) >= maximum) return json(429,{ error:'Muitas tentativas. Aguarde alguns minutos e tente novamente.' },{ 'Retry-After':String(Math.ceil((previous.until-now)/1000)) })
      sql.exec('INSERT INTO attempts VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET count=count+1',key,1,now+600000)
    }
    return accountResponse(request,this.accounts)
  }
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/health') return json(200,{ ok:true,version:multiplayerVersion,hosting:'cloudflare' })
    if (url.pathname.startsWith('/api/account/')) {
      // Leitura da sessão é leve; senhas e mutações usam o coordenador persistente.
      if (url.pathname === '/api/account/session' && request.method === 'GET') {
        try { return json(200,{ account:await new CloudAccounts(env.DB,characterIds).session(tokenFrom(request)) }) }
        catch { return json(503,{ error:'O banco de contas ainda não está preparado.' }) }
      }
      return env.ACCOUNTS.getByName('accounts-v1').fetch(request)
    }
    if (url.pathname === '/api/match' && request.method === 'GET') {
      const account=await new CloudAccounts(env.DB,characterIds).session(tokenFrom(request))
      if (!account) return json(200,{code:null})
      return json(200,{code:await activeMatch(env,account.id)})
    }
    if (url.pathname === '/api/training') {
      if(request.method!=='POST')return json(405,{error:'Método não permitido.'})
      if(!sameOrigin(request))return json(403,{error:'Abra o treinamento pelo endereço do jogo.'})
      try {
        const account=await new CloudAccounts(env.DB,characterIds).session(tokenFrom(request))
        if(!account)return json(401,{error:'Entre na sua conta para salvar o treinamento.'})
        if(request.headers.get('X-Arena-Account')!==account.id)return json(409,{error:'A conta mudou em outra janela. Atualize a página.'})
        const input=await readBody(request)
        if(input.version!==multiplayerVersion)return json(409,{error:'O jogo foi atualizado. Atualize a página.'})
        if(!Array.isArray(input.team)||input.team.length!==3||input.team.some(id=>typeof id!=='string'||id.length>80))return json(400,{error:'Escolha três personagens válidos.'})
        const existing=await activeMatch(env,account.id)
        if(existing)return json(200,{code:existing})
        const {id,username,avatarId,profile,progression}=account, code=newRoomCode()
        return env.ROOMS.getByName(code).fetch(new Request('https://room.internal/__training',{
          method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code,version:multiplayerVersion,account:{id,username,avatarId,profile,progression},team:input.team})}))
      } catch(error) {return json(error.status??503,{error:error.status?error.message:'Não foi possível iniciar o treinamento. Tente novamente.'})}
    }
    if (url.pathname === '/api/quick') {
      if(!['POST','DELETE'].includes(request.method))return json(405,{error:'Método não permitido.'})
      if(!sameOrigin(request))return json(403,{error:'Abra a fila pelo endereço do jogo.'})
      try {
        const account=await new CloudAccounts(env.DB,characterIds).session(tokenFrom(request))
        if(!account)return json(401,{error:'Entre na sua conta para jogar uma partida rápida.'})
        if(request.headers.get('X-Arena-Account')!==account.id)return json(409,{error:'A conta mudou em outra janela. Atualize a página.'})
        const {id,username,avatarId,profile,progression}=account
        const input=await readBody(request)
        return env.MATCHMAKING.getByName('quick-v1').fetch(new Request('https://queue.internal/',{
          method:'POST',body:JSON.stringify({account:{id,username,avatarId,profile,progression},input,cancel:request.method==='DELETE'}),headers:{'Content-Type':'application/json'}}))
      } catch(error) {return json(error.status??503,{error:error.status?error.message:'Não foi possível buscar adversário. Tente novamente.'})}
    }

    if (url.pathname === '/play') {
      if (request.headers.get('Upgrade')?.toLowerCase() !== 'websocket') return new Response('Conexão WebSocket necessária.',{status:426})
      if (!sameOrigin(request)) return new Response('Origem não permitida.',{status:403})
      const join = url.searchParams.get('room')
      if (join !== null && !/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/.test(join)) return new Response('Código inválido.',{status:400})
      if (url.searchParams.get('resume')==='1' && !join) return new Response('Código obrigatório para retornar.',{status:400})
      const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      const code = join ?? Array.from({length:6},()=>alphabet[randomInt(alphabet.length)]).join('')
      const headers = new Headers(request.headers)
      headers.set('X-Arena-Room',code); headers.set('X-Arena-Mode',url.searchParams.get('resume')==='1' ? 'resume' : join ? 'join':'create')
      headers.set('X-Arena-Session-Hash',tokenFrom(request) ? digest(tokenFrom(request)):'')
      return env.ROOMS.getByName(code).fetch(new Request(request,{headers}))
    }
    if (url.pathname === '/' || url.pathname === '/naruto-arena') return Response.redirect(`${url.origin}/naruto-arena/#game`,302)
    return env.ASSETS.fetch(request)
  }
}

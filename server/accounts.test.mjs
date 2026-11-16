import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { Readable } from 'node:stream'
import { Accounts, AccountError, sessionLifetime } from './accounts.mjs'
import { accountHandler } from './account-http.mjs'

const ids = ['naruto', 'sasuke', 'sakura'], password = ' senha çã! 123 '
const fields = (username = 'Anoli', email = `${username}@example.com`) => ({ username, email, password, confirmPassword: password })
const fails = async (operation, pattern) => assert.rejects(operation, error => error instanceof AccountError && pattern.test(error.message))
const dir = await mkdtemp(path.join(tmpdir(), 'arena-accounts-'))
let clock = 1000
let accounts = new Accounts({ file: path.join(dir, 'accounts.sqlite'), characterIds: ids, now: () => clock })
let checks = 0
function pass(name) { checks++; console.log('PASS ' + name) }
try {
  await fails(() => accounts.register({ ...fields(), username: 'nome inválido' }), /nome/i)
  await fails(() => accounts.register({ ...fields(), email: 'inválido' }), /e-mail/)
  await fails(() => accounts.register({ ...fields(), password: '1234567' }), /senha/)
  await fails(() => accounts.register({ ...fields(), confirmPassword: 'diferente' }), /coincidem/)
  pass('Registration validates every required field, permanent username syntax, password length and confirmation')
  const registered = await accounts.register(fields())
  assert.equal(registered.account.username, 'Anoli'); assert.equal(registered.account.profile.level, 1)
  assert.deepEqual(registered.account.team, [null,null,null])
  assert.deepEqual(Object.keys(registered.account).sort(), ['id','username','email','createdAt','avatarId','team','profile','progression'].sort())
  assert(!JSON.stringify(registered).includes(password))
  const stored = accounts.db.prepare('SELECT password_hash,password_salt FROM accounts').get()
  assert.equal(stored.password_hash.length, 64); assert.equal(stored.password_salt.length, 16)
  assert.notEqual(Buffer.from(stored.password_hash).toString(), password)
  assert.notEqual(accounts.db.prepare('SELECT token_hash FROM sessions').get().token_hash, registered.token)
  pass('Registration accepts spaces/accents, stores salted password hashes and hashed sessions, and returns no secrets')
  await fails(() => accounts.register(fields('anoli','other@example.com')), /nome.*cadastrado/)
  await fails(() => accounts.register(fields('Other','ANOLI@EXAMPLE.COM')), /e-mail.*cadastrado/)
  await fails(() => accounts.login({ username: 'ANOLI', password: password.trim() }), /incorretos/)
  await fails(() => accounts.login({ username: 'Missing', password }), /incorretos/)
  const logged = await accounts.login({ username: 'aNoLi', password })
  assert.equal(logged.account.id, registered.account.id); assert.notEqual(logged.token, registered.token)
  pass('Username/email uniqueness ignores case; login preserves the exact password and uses a fresh session')
  const other = await accounts.register(fields('Second'))
  accounts.preferences(logged.account.id, { avatarId: 'avatar_70', team: ['naruto',null,'sakura'] })
  assert.throws(() => accounts.preferences(logged.account.id, { username: 'Rename' }), /Somente/)
  assert.throws(() => accounts.preferences(logged.account.id, { avatarId: 'fake' }), /avatar/)
  assert.throws(() => accounts.preferences(logged.account.id, { avatarId: 'sasuke' }), /avatar/)
  assert.throws(() => accounts.preferences(logged.account.id, { team: ['naruto','naruto',null] }), /diferentes/)
  assert.throws(() => accounts.preferences(logged.account.id, { team: ['fake',null,null] }), /catálogo/)
  assert.deepEqual(accounts.session(other.token).team, [null,null,null])
  assert(!JSON.stringify(accounts.identity(logged.token)).includes('email'))
  pass('Preferences validate canonical avatars/teams, forbid renaming and remain isolated between accounts')
  accounts.close(); accounts = new Accounts({ file: path.join(dir,'accounts.sqlite'), characterIds: ids, now: () => clock })
  assert.equal(accounts.session(logged.token).avatarId, 'avatar_70'); assert.deepEqual(accounts.session(logged.token).team, ['naruto',null,'sakura'])
  accounts.logout(logged.token); assert.equal(accounts.session(logged.token),null)
  assert(accounts.session(registered.token)); clock += sessionLifetime + 1; assert.equal(accounts.session(registered.token),null)
  pass('Accounts, saved preferences and sessions survive restart; logout revokes a session and expiry rejects old tokens')

  const apiStore = new Accounts({ file: ':memory:', characterIds: ids })
  try {
    const handler = accountHandler(apiStore)
    async function http(action, { method = 'POST', data, cookie, origin = 'https://arena.test', owner, raw } = {}, handle = handler) {
      const request = Readable.from(raw !== undefined ? [raw] : data === undefined ? [] : [JSON.stringify(data)])
      request.url = '/api/account/' + action; request.method = method
      request.headers = { host: 'arena.test', origin, 'content-type': 'application/json', ...(cookie ? { cookie } : {}), ...(owner ? { 'x-arena-account': owner } : {}) }
      request.socket = { remoteAddress: '127.0.0.1' }
      const response = { writeHead(status, headers) { this.status = status; this.headers = headers; return this }, end(body) { this.body = JSON.parse(body) } }
      assert.equal(await handle(request,response),true)
      return response
    }
    let response = await http('register',{ data: fields('Web') })
    assert.equal(response.status,201)
    const cookie = response.headers['Set-Cookie'].split(';')[0], owner = response.body.account.id
    for (const part of ['HttpOnly','SameSite=Lax','Secure','Path=/']) assert(response.headers['Set-Cookie'].includes(part))
    assert.equal(response.headers['Cache-Control'],'no-store')
    response = await http('session',{ method:'GET',cookie }); assert.equal(response.body.account.username,'Web')
    response = await http('preferences',{ method:'PATCH',cookie,owner,data:{team:['naruto',null,null]} }); assert.equal(response.status,200)
    response = await http('preferences',{ method:'PATCH',cookie,owner:'different-account',data:{team:[null,null,null]} }); assert.equal(response.status,409)
    response = await http('preferences',{ method:'PATCH',data:{avatarId:'sasuke'} }); assert.equal(response.status,401)
    response = await http('logout',{cookie,origin:'https://foreign.test'}); assert.equal(response.status,403)
    response = await http('session',{method:'GET',cookie}); assert(response.body.account)
    pass('HTTP uses private Secure/HttpOnly cookies, protects mutations by origin and rejects stale account-window saves')
    response = await http('login',{data:{username:'WEB',password},cookie}); assert.equal(response.status,200)
    const replacementCookie = response.headers['Set-Cookie'].split(';')[0]
    response = await http('session',{method:'GET',cookie}); assert.equal(response.body.account,null)
    response = await http('session',{method:'GET',cookie:replacementCookie}); assert.equal(response.body.account.username,'Web')
    response = await http('logout',{cookie:replacementCookie}); assert.match(response.headers['Set-Cookie'], /Max-Age=0/)
    response = await http('session',{method:'GET',cookie:replacementCookie}); assert.equal(response.body.account,null)
    response = await http('register',{raw:'{'}); assert.equal(response.status,400)
    response = await http('register',{raw:' '.repeat(8193)}); assert.equal(response.status,413)
    pass('HTTP rotates and revokes browser sessions and rejects malformed or oversized form bodies')
    const throttled = accountHandler(apiStore)
    for(let n=0;n<31;n++) response = await http('login',{data:{username:'x',password:'x'}},throttled)
    assert.equal(response.status,429);assert(response.headers['Retry-After'])
    pass('Repeated login attempts are limited before password hashing can exhaust server resources')
  } finally { apiStore.close() }
  console.log(`${checks} grupos de contas passaram.`)
} finally { accounts.close(); await rm(dir,{recursive:true,force:true}) }

import { progression, progressProfile, resultStatements } from '../server/progression.mjs'
import { avatarIds, characterMissions } from './generated/engine.mjs'
import { Buffer } from 'node:buffer'
import { randomBytes, randomUUID, timingSafeEqual } from 'node:crypto'
import { credentials, digest, lifetime, normalize, passwordKey, reject, text } from '../server/account-rules.mjs'

export class CloudAccounts {
  constructor(db, characterIds, missions = characterMissions) { this.missions = missions; this.db = db; this.ids = new Set(characterIds); this.avatarIds = new Set(avatarIds); this.busy = 0; this.fakeSalt = randomBytes(16) }
  async publicAccount(row) {
    if (!row) return null
    const progress=await this.db.prepare('SELECT * FROM account_progress WHERE account_id=?').bind(row.id).first()
    return { id: row.id, username: row.username, email: row.email, createdAt: new Date(row.created_at).toISOString(),
      avatarId: (this.avatarIds.has(row.avatar_id) || this.ids.has(row.avatar_id)) ? row.avatar_id : null,
      team: JSON.parse(row.team_json).map(id => this.ids.has(id) ? id : null),
      progression: progression(progress,(await this.db.prepare('SELECT * FROM account_missions WHERE account_id=?').bind(row.id).all()).results,this.missions), profile: progressProfile(progress,row.username) }
  }
  async recordResult(result) {await this.db.batch(resultStatements(result).map(([sql,args])=>this.db.prepare(sql).bind(...args)))}
  async sessionHash(hash) {
    if (typeof hash !== 'string' || !/^[a-f0-9]{64}$/.test(hash)) return null
    return this.publicAccount(await this.db.prepare('SELECT accounts.* FROM sessions JOIN accounts ON accounts.id=sessions.account_id WHERE token_hash=? AND expires_at>?').bind(hash, Date.now()).first())
  }
  async session(token) { return text(token) && /^[A-Za-z0-9_-]{43}$/.test(token) ? this.sessionHash(digest(token)) : null }
  async logout(token) { if (text(token)) await this.db.prepare('DELETE FROM sessions WHERE token_hash=?').bind(digest(token)).run() }
  async hash(password, salt) {
    // A mesma proteção usada no Mac, sem reduzir o custo para caber no Worker.
    if (this.busy) reject('O servidor está ocupado. Tente novamente em alguns segundos.', 429)
    this.busy++
    try { return await passwordKey(password, salt) } finally { this.busy-- }
  }
  insertSession(id, token) { return this.db.prepare('INSERT INTO sessions VALUES (?,?,?)').bind(digest(token), id, Date.now() + lifetime) }
  async register(input) {
    credentials(input, true)
    const salt = randomBytes(16), hash = await this.hash(input.password, salt)
    const id = randomUUID(), token = randomBytes(32).toString('base64url')
    try {
      await this.db.batch([
        this.db.prepare('INSERT INTO accounts(id,username,username_key,email,email_key,password_hash,password_salt,created_at) VALUES (?,?,?,?,?,?,?,?)').bind(id, input.username, normalize(input.username), input.email.trim(), normalize(input.email), Array.from(hash), Array.from(salt), Date.now()),
        this.insertSession(id, token)
      ])
    } catch (error) {
      if (await this.db.prepare('SELECT 1 FROM accounts WHERE username_key=?').bind(normalize(input.username)).first()) reject('Este nome de usuário já está cadastrado.', 409)
      if (await this.db.prepare('SELECT 1 FROM accounts WHERE email_key=?').bind(normalize(input.email)).first()) reject('Este e-mail já está cadastrado.', 409)
      throw error
    }
    return { token, account: await this.session(token) }
  }
  async login(input) {
    credentials(input, false)
    const row = await this.db.prepare('SELECT * FROM accounts WHERE username_key=?').bind(normalize(input.username)).first()
    const hash = await this.hash(input.password, row ? Buffer.from(row.password_salt) : this.fakeSalt)
    if (!row || !timingSafeEqual(hash, Buffer.from(row.password_hash))) reject('Nome de usuário ou senha incorretos.', 401)
    const token = randomBytes(32).toString('base64url')
    await this.db.batch([this.db.prepare('DELETE FROM sessions WHERE expires_at<=?').bind(Date.now()), this.insertSession(row.id, token)])
    return { token, account: await this.session(token) }
  }
  async preferences(id, input) {
    if (!input || typeof input !== 'object' || Array.isArray(input) || !Object.keys(input).length || Object.keys(input).some(key => !['avatarId','team'].includes(key))) reject('Somente avatar e equipe podem ser alterados nesta área.')
    if ('avatarId' in input && input.avatarId !== null && !this.avatarIds.has(input.avatarId)) reject('Escolha um avatar do catálogo.')
    if ('team' in input && (!Array.isArray(input.team) || input.team.length !== 3 || input.team.some(id => id !== null && !this.ids.has(id)) || new Set(input.team.filter(Boolean)).size !== input.team.filter(Boolean).length)) reject('Escolha até três personagens diferentes do catálogo.')
    const writes = []
    if ('avatarId' in input) writes.push(this.db.prepare('UPDATE accounts SET avatar_id=? WHERE id=?').bind(input.avatarId,id))
    if ('team' in input) writes.push(this.db.prepare('UPDATE accounts SET team_json=? WHERE id=?').bind(JSON.stringify(input.team),id))
    await this.db.batch(writes)
    return this.publicAccount(await this.db.prepare('SELECT * FROM accounts WHERE id=?').bind(id).first())
  }
}

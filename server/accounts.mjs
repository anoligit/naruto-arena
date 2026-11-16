import { progressionSchema, progression, progressProfile, resultStatements, missionMigrations } from './progression.mjs'
import { lifetime, digest, normalize, reject, text, credentials, passwordKey } from './account-rules.mjs'
export { AccountError } from './account-rules.mjs'
import { avatarIds as defaultAvatarIds, characterMissions as defaultMissions } from './dist/engine.mjs'
import { DatabaseSync } from 'node:sqlite'
import { randomBytes, randomUUID, timingSafeEqual } from 'node:crypto'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'


export class Accounts {
  constructor({ file = path.join(process.env.ARENA_DATA_DIR ?? fileURLToPath(new URL('./data/', import.meta.url)), 'accounts.sqlite'), now = Date.now, characterIds = [], avatarIds = defaultAvatarIds, missions = defaultMissions } = {}) {
    this.missions = missions; this.now = now; this.characterIds = new Set(characterIds); this.avatarIds = new Set(avatarIds); this.busy = 0
    if (file !== ':memory:') mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 })
    this.db = new DatabaseSync(file)
    this.db.exec(`PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000; PRAGMA journal_mode=WAL;
      CREATE TABLE IF NOT EXISTS accounts (
        id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL, email_key TEXT NOT NULL UNIQUE, password_hash BLOB NOT NULL, password_salt BLOB NOT NULL,
        created_at INTEGER NOT NULL, avatar_id TEXT, team_json TEXT NOT NULL DEFAULT '[null,null,null]'
      );
      CREATE TABLE IF NOT EXISTS sessions (
        token_hash TEXT PRIMARY KEY, account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        expires_at INTEGER NOT NULL
      ); CREATE INDEX IF NOT EXISTS sessions_expiry ON sessions(expires_at);`)
    this.db.exec(progressionSchema)
    for (const [sql,args] of missionMigrations(this.missions)) this.db.prepare(sql).run(...args)
    this.fakeSalt = randomBytes(16)
  }
  close() { this.db.close() }
  publicAccount(row) {
    if (!row) return null
    const progress=this.db.prepare('SELECT * FROM account_progress WHERE account_id=?').get(row.id)
    return { id: row.id, username: row.username, email: row.email, createdAt: new Date(row.created_at).toISOString(),
      avatarId: (this.avatarIds.has(row.avatar_id) || this.characterIds.has(row.avatar_id)) ? row.avatar_id : null,
      team: JSON.parse(row.team_json).map(id => this.characterIds.has(id) ? id : null),
      progression: progression(progress,this.db.prepare('SELECT * FROM account_missions WHERE account_id=?').all(row.id),this.missions), profile: progressProfile(progress,row.username) }
  }
  session(token) {
    if (!text(token) || !/^[A-Za-z0-9_-]{43}$/.test(token)) return null
    return this.publicAccount(this.db.prepare('SELECT accounts.* FROM sessions JOIN accounts ON accounts.id=sessions.account_id WHERE token_hash=? AND expires_at>?').get(digest(token), this.now()))
  }
  identity(token) {
    const account = this.session(token)
    return account ? { id: account.id, username: account.username, avatarId: account.avatarId, profile: account.profile, progression:account.progression } : null
  }
  recordResult(result) {
    this.db.exec('BEGIN IMMEDIATE')
    try {for(const [sql,args] of resultStatements(result))this.db.prepare(sql).run(...args);this.db.exec('COMMIT')}
    catch(error){this.db.exec('ROLLBACK');throw error}
  }
  issue(accountId) {
    this.db.prepare('DELETE FROM sessions WHERE expires_at<=?').run(this.now())
    const token = randomBytes(32).toString('base64url')
    this.db.prepare('INSERT INTO sessions VALUES (?,?,?)').run(digest(token), accountId, this.now() + lifetime)
    return token
  }
  logout(token) { if (text(token)) this.db.prepare('DELETE FROM sessions WHERE token_hash=?').run(digest(token)) }
  async hash(password, salt) {
    if (this.busy >= 4) reject('O servidor está ocupado. Tente novamente em alguns segundos.', 429)
    this.busy++
    try { return await passwordKey(password, salt) } finally { this.busy-- }
  }
  async register(input) {
    credentials(input, true)
    const salt = randomBytes(16), hash = await this.hash(input.password, salt)
    const row = { id: randomUUID(), username: input.username, email: input.email.trim(), createdAt: this.now() }
    this.db.exec('BEGIN IMMEDIATE')
    try {
      if (this.db.prepare('SELECT 1 FROM accounts WHERE username_key=?').get(normalize(row.username))) reject('Este nome de usuário já está cadastrado.', 409)
      if (this.db.prepare('SELECT 1 FROM accounts WHERE email_key=?').get(normalize(row.email))) reject('Este e-mail já está cadastrado.', 409)
      this.db.prepare('INSERT INTO accounts(id,username,username_key,email,email_key,password_hash,password_salt,created_at) VALUES (?,?,?,?,?,?,?,?)').run(row.id, row.username, normalize(row.username), row.email, normalize(row.email), hash, salt, row.createdAt)
      const token = this.issue(row.id)
      this.db.exec('COMMIT')
      return { token, account: this.session(token) }
    } catch (error) { this.db.exec('ROLLBACK'); throw error }
  }
  async login(input) {
    credentials(input, false)
    const row = this.db.prepare('SELECT * FROM accounts WHERE username_key=?').get(normalize(input.username))
    const key = await this.hash(input.password, row ? Buffer.from(row.password_salt) : this.fakeSalt)
    if (!row || !timingSafeEqual(key, Buffer.from(row.password_hash))) reject('Nome de usuário ou senha incorretos.', 401)
    const token = this.issue(row.id)
    return { token, account: this.session(token) }
  }
  preferences(accountId, input) {
    if (!input || typeof input !== 'object' || Array.isArray(input) || !Object.keys(input).length || Object.keys(input).some(key => !['avatarId', 'team'].includes(key))) reject('Somente avatar e equipe podem ser alterados nesta área.')
    if ('avatarId' in input && input.avatarId !== null && !this.avatarIds.has(input.avatarId)) reject('Escolha um avatar do catálogo.')
    if ('team' in input && (!Array.isArray(input.team) || input.team.length !== 3 || input.team.some(id => id !== null && !this.characterIds.has(id)) || new Set(input.team.filter(Boolean)).size !== input.team.filter(Boolean).length)) reject('Escolha até três personagens diferentes do catálogo.')
    if ('avatarId' in input) this.db.prepare('UPDATE accounts SET avatar_id=? WHERE id=?').run(input.avatarId, accountId)
    if ('team' in input) this.db.prepare('UPDATE accounts SET team_json=? WHERE id=?').run(JSON.stringify(input.team), accountId)
    return this.publicAccount(this.db.prepare('SELECT * FROM accounts WHERE id=?').get(accountId))
  }
}
export const sessionLifetime = lifetime

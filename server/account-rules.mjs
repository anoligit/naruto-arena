import { Buffer } from 'node:buffer'
import { scrypt as derive, createHash } from 'node:crypto'
import { promisify } from 'node:util'
const scrypt = promisify(derive)
export const lifetime = 7 * 24 * 60 * 60 * 1000
export const digest = value => createHash('sha256').update(value).digest('hex')
export const normalize = value => value.trim().toLowerCase()
export class AccountError extends Error {
  constructor(message, status = 400) { super(message); this.status = status }
}
export const reject = (message, status) => { throw new AccountError(message, status) }
export const text = value => typeof value === 'string'
export function credentials(input, registration) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) reject('Preencha os campos da conta.')
  if (!text(input.username) || !/^[A-Za-z0-9_-]{3,24}$/.test(input.username)) reject('O nome deve ter de 3 a 24 letras, números, hífens ou sublinhados.')
  if (!text(input.password) || [...input.password].length < 8 || [...input.password].length > 128) reject('A senha deve ter de 8 a 128 caracteres.')
  if (registration) {
    if (!text(input.email) || input.email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) reject('Informe um e-mail válido.')
    if (input.confirmPassword !== input.password) reject('As senhas não coincidem.')
  }
}
export async function passwordKey(password, salt) {
  return Buffer.from(await scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 }))
}


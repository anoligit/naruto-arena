export type Recovery = { code: string; token?: string }
const key = (accountId?: string) => `arena-match:${accountId ?? 'guest'}`
export function savedMatch(accountId?: string): Recovery | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(key(accountId)) ?? 'null')
    return value && /^[A-Z2-9]{6}$/.test(value.code) && (accountId || /^[A-Za-z0-9_-]{43}$/.test(value.token)) ? value : null
  } catch { return null }
}
export function saveMatch(value: Recovery | null, accountId?: string) {
  try {
    if (value) sessionStorage.setItem(key(accountId), JSON.stringify(value))
    else sessionStorage.removeItem(key(accountId))
  } catch { /* A reconexão da aba continua funcionando sem armazenamento local. */ }
}

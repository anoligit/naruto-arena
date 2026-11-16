import type { Account, Credentials, Preferences, Registration } from './types'

export class AccountRequestError extends Error {
  status: number
  constructor(message: string, status = 0) { super(message); this.status = status }
}
export async function accountRequest(action: string, method = 'GET', value?: Credentials | Registration | Preferences, expectedAccountId?: string): Promise<Account | null> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 12_000)
  let response: Response
  try {
    response = await fetch(`/api/account/${action}`, { method, credentials: 'same-origin', cache: 'no-store', signal: controller.signal,
      ...(value ? { headers: { 'Content-Type': 'application/json', ...(expectedAccountId ? { 'X-Arena-Account': expectedAccountId } : {}) }, body: JSON.stringify(value) } : {}) })
  } catch { clearTimeout(timeout); throw new AccountRequestError('Não foi possível acessar as contas. Confira se o servidor do jogo está ligado.') }
  let result: { account?: Account | null; error?: string }
  try { result = await response.json() } catch { throw new AccountRequestError('O servidor de contas não está disponível neste endereço.') } finally { clearTimeout(timeout) }
  if (!response.ok) throw new AccountRequestError(result.error ?? 'Não foi possível concluir a operação.', response.status)
  return result.account ?? null
}

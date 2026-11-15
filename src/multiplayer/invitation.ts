// O fragmento abre a seleção sem depender de rotas no servidor.
export function invitationCode(): string {
  if (typeof window === 'undefined') return ''
  const code = new URLSearchParams(window.location.hash.split('?')[1] ?? '').get('sala') ?? ''
  return /^[A-Z2-9]{6}$/.test(code) ? code : ''
}

export function invitationUrl(code: string): string {
  const url = new URL(window.location.href)
  url.hash = `game?sala=${code}`
  return url.href
}

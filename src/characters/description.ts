// Formatação compartilhada; os valores continuam definidos no personagem.
export const n = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)

export function duration(turns: number, clock: 'opponent-turns' | 'owner-turns' = 'opponent-turns', owner = 'usuário'): string {
  if (clock === 'owner-turns') {
    return turns === 1
      ? `até o final da próxima jogada de ${owner}`
      : `até o final das próximas ${n(turns)} jogadas de ${owner}`
  }
  return turns === 1
    ? 'durante a próxima jogada adversária'
    : `durante as próximas ${n(turns)} jogadas adversárias`
}

export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1)

export function formatCooldown(
  cooldown: number,
  detail: 'short' | 'full' = 'short'
): string {
  if (cooldown === 0) return 'Sem recarga'
  const turns = `${cooldown} ${cooldown === 1 ? 'turno do usuário' : 'turnos do usuário'}`
  return detail === 'full' ? `${turns} após o uso` : turns
}

export function formatRemainingCooldown(remaining: number): string {
  if (remaining === 0) return 'Sem recarga pendente. Consulta disponível.'
  return `Recarga: ${remaining} ${remaining === 1 ? 'turno do usuário' : 'turnos do usuário'}. Consulta disponível.`
}

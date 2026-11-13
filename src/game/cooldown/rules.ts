export function isValidCooldown(cooldown: number): boolean {
  return Number.isInteger(cooldown) && cooldown >= 0
}

// O turno do uso não conta. CD 1 usado no turno próprio 1 libera no 3.
export function getCooldownReadyTurn(usedOnTurn: number, cooldown: number): number {
  return usedOnTurn + cooldown + 1
}

// Usado na validação real, sempre com o número de turnos do dono da habilidade.
export function getRemainingCooldown(
  readyOnTurn: number | undefined,
  ownerTurnsStarted: number
): number {
  return Math.max(0, (readyOnTurn ?? 0) - ownerTurnsStarted)
}

// Fora da vez do dono, o indicador mostra a recarga na próxima jogada dele.
// Essa projeção é apenas visual; não autoriza o uso durante a vez adversária.
export function getDisplayedCooldown(
  readyOnTurn: number | undefined,
  ownerTurnsStarted: number,
  isOwnerTurn: boolean
): number {
  const displayedTurn = ownerTurnsStarted + (isOwnerTurn ? 0 : 1)
  return getRemainingCooldown(readyOnTurn, displayedTurn)
}

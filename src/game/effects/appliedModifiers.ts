import { statuses } from './catalog'
import type { ActiveStatus, StatusModifier } from './types'

// Algumas partes de um efeito podem ter sido impedidas na aplicação.
// O bloqueio é registrado nessa aplicação e não muda quando o impedimento expira.
export function getAppliedModifiers(active: ActiveStatus): StatusModifier[] {
  const definition = statuses.find(entry => entry.id === active.statusId)
  return definition?.modifiers
    .filter((modifier) => !active.blockedModifiers?.includes(modifier.type))
    .map(modifier => modifier.type === 'revive-on-death' && active.remainingUses !== undefined ? { ...modifier, uses: active.remainingUses } : modifier)
    .map(modifier => modifier.type === 'stun' && definition.ignoresImmunity ? { ...modifier, ignoresImmunity: true } : modifier)
    .map(modifier => modifier.type === 'destructible-defense' && active.shieldRemaining !== undefined ? { ...modifier, amount: active.shieldRemaining } : modifier) ?? []
}

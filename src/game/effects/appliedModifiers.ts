import { statuses } from './catalog'
import type { ActiveStatus, StatusModifier } from './types'

// Algumas partes de um efeito podem ter sido impedidas na aplicação.
// O bloqueio é registrado nessa aplicação e não muda quando o impedimento expira.
export function getAppliedModifiers(active: ActiveStatus): StatusModifier[] {
  return statuses.find((definition) => definition.id === active.statusId)?.modifiers
    .filter((modifier) => !active.blockedModifiers?.includes(modifier.type)) ?? []
}

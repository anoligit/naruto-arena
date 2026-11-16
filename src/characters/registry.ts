import { collectCharacterModules } from './registration'
import { commonStatuses } from '../game/effects/common'

// Somente os personagens jogáveis mantidos no catálogo clássico.
const discovered = import.meta.glob('./classico/*/playable.ts', { eager: true })
const registration = collectCharacterModules(discovered, commonStatuses)

for (const issue of registration.issues) {
  console.warn(`[Personagens] ${issue.path}: ${issue.message}`)
}

export const characters = registration.characters
export const characterStatuses = registration.statuses
export const characterRegistrationIssues = registration.issues

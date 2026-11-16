import { collectCharacterModules } from './registration'
import { validateCharacterCatalog } from './validation'
import { commonStatuses } from '../game/effects/common'

// Somente os personagens jogáveis mantidos no catálogo clássico.
const discovered = import.meta.glob('./classico/*/index.ts', { eager: true })
const registration = collectCharacterModules(discovered, commonStatuses)

for (const issue of validateCharacterCatalog(registration.characters, [...commonStatuses, ...registration.statuses])) {
  registration.issues.push({ path: issue.characterId, message: issue.message })
}
if (registration.issues.length) {
  throw new Error(registration.issues.map(issue => `[Personagens] ${issue.path}: ${issue.message}`).join('\n'))
}

export const characters = registration.characters
export const characterStatuses = registration.statuses
export const characterRegistrationIssues = registration.issues

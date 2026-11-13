import { collectCharacterModules } from './registration'
import { commonStatuses } from '../game/effects/common'

// Vite inclui todo index.ts diretamente dentro de uma pasta de personagem.
// Nomes de pasta com espaços também são aceitos.
const discovered = import.meta.glob('./*/index.ts', { eager: true })
const registration = collectCharacterModules(discovered, commonStatuses)

for (const issue of registration.issues) {
  console.warn(`[Personagens] ${issue.path}: ${issue.message}`)
}

export const characters = registration.characters
export const characterStatuses = registration.statuses
export const characterRegistrationIssues = registration.issues

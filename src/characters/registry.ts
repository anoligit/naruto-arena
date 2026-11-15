import { collectCharacterModules } from './registration'
import { commonStatuses } from '../game/effects/common'

// Registros clássicos adaptados ficam em pastas aninhadas; catálogos brutos não entram no motor.
// Nomes de pasta com espaços também são aceitos.
const modules = {
  ...Object.fromEntries(Object.entries(import.meta.glob('./*/index.ts', { eager: true })).map(([path, value]) => {
    const entry = value as { default?: import('./definition').CharacterModule }
    const module = entry.default
    return [path, module?.character ? { ...entry, default: { ...module,
      character: { ...module.character, name: `${module.character.name} OLD` },
    } } : value]
  })),
  ...import.meta.glob('./classico/*/playable.ts', { eager: true }),
}
// Catálogos antigos com `skills` são descrições, não registros executáveis.
const discovered = Object.fromEntries(Object.entries(modules).filter(([, value]) => {
  const entry = value as { default?: object }
  return !entry.default || !('skills' in entry.default)
}))
const registration = collectCharacterModules(discovered, commonStatuses)

for (const issue of registration.issues) {
  console.warn(`[Personagens] ${issue.path}: ${issue.message}`)
}

export const characters = registration.characters
export const characterStatuses = registration.statuses
export const characterRegistrationIssues = registration.issues

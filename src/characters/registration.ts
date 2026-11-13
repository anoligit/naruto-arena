import { missions } from '../missions'
import type { Character, CharacterModule } from './definition'
import type { StatusDefinition } from '../game/types'

export type CharacterRegistrationIssue = { path: string; message: string }
export type CharacterRegistration = {
  characters: Character[]
  statuses: StatusDefinition[]
  issues: CharacterRegistrationIssue[]
}

const hasId = (value: unknown): value is { id: string } =>
  typeof value === 'object' && value !== null && 'id' in value && typeof value.id === 'string' && value.id.trim().length > 0

function readModule(value: unknown): CharacterModule | null {
  if (typeof value !== 'object' || value === null || !('default' in value)) return null
  const module = value.default as Partial<CharacterModule> | null
  if (!module || !hasId(module.character) || typeof module.character.name !== 'string' || !module.character.name.trim()) return null
  if (!Array.isArray(module.character.skillDefinitions) || !module.character.skillDefinitions.every(hasId)) return null
  if (!Array.isArray(module.statuses) || !module.statuses.every(hasId)) return null
  if (module.order !== undefined && (!Number.isFinite(module.order) || typeof module.order !== 'number')) return null
  if (!module.character.unlockRequirement) return null
  const requirement = module.character.unlockRequirement
  if (requirement.type !== 'none' && (requirement.type !== 'mission' || !(requirement.missionId in missions))) return null
  return module as CharacterModule
}

// Pure collector: adding a folder never requires editing this list.
export function collectCharacterModules(
  discovered: Record<string, unknown>,
  commonStatuses: readonly StatusDefinition[] = []
): CharacterRegistration {
  const result: CharacterRegistration = { characters: [], statuses: [], issues: [] }
  const candidates: { path: string; module: CharacterModule }[] = []
  for (const [path, value] of Object.entries(discovered)) {
    const module = readModule(value)
    if (!module) {
      result.issues.push({ path, message: 'Exporte default defineCharacter com id, nome, retrato, descrição, requisito e os blocos de habilidades.' })
      continue
    }
    candidates.push({ path, module })
  }
  candidates.sort((a, b) => (a.module.order ?? 1000) - (b.module.order ?? 1000) || a.path.localeCompare(b.path))
  const characterIds = new Set<string>()
  const skillIds = new Set<string>()
  const statusIds = new Set(commonStatuses.map((status) => status.id))
  for (const { path, module } of candidates) {
    const character = module.character
    const skills = character.skillDefinitions ?? []
    const ownSkillIds = skills.map((skill) => skill.id)
    const ownStatusIds = module.statuses.map((status) => status.id)
    const duplicateSkill = ownSkillIds.find((id, index) => skillIds.has(id) || ownSkillIds.indexOf(id) !== index)
    const duplicateStatus = ownStatusIds.find((id, index) => statusIds.has(id) || ownStatusIds.indexOf(id) !== index)
    if (characterIds.has(character.id) || duplicateSkill || duplicateStatus) {
      const repeated = characterIds.has(character.id) ? character.id : duplicateSkill ?? duplicateStatus
      result.issues.push({ path, message: `ID repetido: ${repeated}. Use identificadores próprios para personagem, habilidades e efeitos.` })
      continue
    }
    characterIds.add(character.id)
    ownSkillIds.forEach((id) => skillIds.add(id))
    ownStatusIds.forEach((id) => statusIds.add(id))
    result.characters.push(character)
    result.statuses.push(...module.statuses)
  }
  return result
}

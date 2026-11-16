import { getBaseSkills, type Character } from './definition'
import type { StatusDefinition } from '../game/types'

export type CatalogIssue = { characterId: string; message: string }

// Verifica as ligações dos cadastros, incluindo efeitos aninhados em outros efeitos.
export function validateCharacterCatalog(characters: readonly Character[], statuses: readonly StatusDefinition[]): CatalogIssue[] {
  const issues: CatalogIssue[] = []
  const characterIds = new Set(characters.map(character => character.id))
  const statusIds = new Set(statuses.map(status => status.id))
  const skillIds = new Set(characters.flatMap(character => character.skillDefinitions.map(skill => skill.id)))
  const statusKeys = new Set(['statusId','whenStatusId','whenUserHasStatus','whenTargetHasStatus','unlessTargetHasStatus','whenSelectedTargetHasStatus','targetMustLackStatus','copySlotStatusId','perStatus','requiresSourceStatus','idleStatusId'])
  const skillKeys = new Set(['skillId','originSkillId','onUseSkillId','responseSkillId','whenSkillReady'])
  const missions = new Map<string, NonNullable<Character['mission']>>()
  const add = (characterId: string, message: string) => issues.push({ characterId, message })
  function check(value: unknown, owner: string): void {
    if (!value || typeof value !== 'object') return
    for (const [key, entry] of Object.entries(value)) {
      if (typeof entry === 'string') {
        if (statusKeys.has(key) && !statusIds.has(entry)) add(owner, `Efeito inexistente: ${entry}.`)
        if (skillKeys.has(key) && entry !== '*' && !skillIds.has(entry)) add(owner, `Habilidade inexistente: ${entry}.`)
      }
      if (['statusIds','replaces','stages'].includes(key) && Array.isArray(entry)) for (const id of entry) if (!statusIds.has(id)) add(owner, `Efeito inexistente: ${id}.`)
      if (['exceptSkillIds','endsOnSkillUseExcept'].includes(key) && Array.isArray(entry)) for (const id of entry) if (id !== '*' && !skillIds.has(id)) add(owner, `Habilidade inexistente: ${id}.`)
      check(entry, owner)
    }
  }
  for (const status of statuses) check(status, status.id)
  for (const character of characters) {
    if (getBaseSkills(character).length !== 4) add(character.id, 'Cadastre exatamente quatro habilidades base; alternativas e passivas ficam nos mesmos blocos.')
    const mission = character.mission
    if (mission) {
      if (missions.has(mission.id)) add(character.id, `Missão repetida: ${mission.id}.`)
      missions.set(mission.id, mission)
    }
    check(character.skillDefinitions, character.id)
  }
  for (const character of characters) {
    const requirement = character.unlockRequirement
    if (requirement.type === 'mission' && !missions.has(requirement.missionId)) add(character.id, `Missão de desbloqueio inexistente: ${requirement.missionId}.`)
    const mission = character.mission
    if (requirement.type === 'mission' && mission?.id !== requirement.missionId) add(character.id, 'Defina a missão de desbloqueio no index.ts do próprio personagem.')
    if (!mission) continue
    for (const id of mission.objective.charactersAnyOf) if (!characterIds.has(id)) add(character.id, `Personagem exigido pela missão não existe: ${id}.`)
    for (const id of mission.prerequisiteMissionIds) if (!missions.has(id)) add(character.id, `Pré-requisito de missão inexistente: ${id}.`)
    const visit = (id: string, visiting: Set<string>): boolean => {
      if (visiting.has(id)) return true
      const next = new Set(visiting).add(id)
      return missions.get(id)?.prerequisiteMissionIds.some(previous => visit(previous, next)) ?? false
    }
    if (visit(mission.id, new Set())) add(character.id, `Pré-requisitos circulares na missão ${mission.id}.`)
  }
  return issues
}

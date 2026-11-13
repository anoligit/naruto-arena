import type { skillClassDefinitions, skillClassGroups } from './definitions'

export type SkillClass = keyof typeof skillClassDefinitions
export type SkillClassGroup = keyof typeof skillClassGroups

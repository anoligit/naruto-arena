import { skillClassDefinitions } from './definitions'
import type { SkillClass } from './types'

export function formatSkillClasses(classes: readonly SkillClass[]): string {
  return classes.map((name) => skillClassDefinitions[name].name).join(', ')
}

export function describeSkillClasses(classes: readonly SkillClass[]): string {
  return classes.map((name) => {
    const definition = skillClassDefinitions[name]
    return `${definition.name}: ${definition.description}`
  }).join('\n')
}

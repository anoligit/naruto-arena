import type { SkillClass } from './types'

// Sem restrição de classes, o efeito considera qualquer habilidade.
// Com uma lista, basta uma classe em comum para haver correspondência.
export function matchesSkillClasses(
  classes: readonly SkillClass[],
  restriction?: readonly SkillClass[]
): boolean {
  return restriction === undefined || restriction.some((name) => classes.includes(name))
}

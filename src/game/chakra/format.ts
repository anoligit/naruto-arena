import { chakraDefinitions, chakraTypes, randomChakra } from './definitions'
import type { ChakraCost } from './types'

// A seleção e a batalha usam o mesmo texto para os custos.
export function formatChakraCost(cost: ChakraCost): string {
  const parts: string[] = []
  for (const type of chakraTypes) {
    const amount = cost.specific?.[type] ?? 0
    if (amount > 0) parts.push(`${amount} ${chakraDefinitions[type].name}`)
  }
  if (cost.random) parts.push(`${cost.random} ${randomChakra.name}`)
  return parts.join(' + ') || 'Sem custo'
}

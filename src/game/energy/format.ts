import { energyLabels } from './labels'
import { energyDefinitions, energyTypes, randomEnergy } from './definitions'
import type { EnergyCost } from './types'

// A seleção e a batalha usam o mesmo texto para os custos.
export function formatEnergyCost(cost: EnergyCost): string {
  const parts: string[] = []
  for (const type of energyTypes) {
    const amount = cost.specific?.[type] ?? 0
    if (amount > 0) parts.push(`${amount} ${energyDefinitions[type].name}`)
  }
  if (cost.random) parts.push(`${cost.random} ${randomEnergy.name}`)
  return parts.join(' + ') || energyLabels.noCost
}

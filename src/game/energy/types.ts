import type { energyDefinitions } from './definitions'

export type EnergyType = keyof typeof energyDefinitions
export type EnergyPool = Record<EnergyType, number>

export type EnergyCost = {
  specific?: Partial<EnergyPool>
  random?: number
}

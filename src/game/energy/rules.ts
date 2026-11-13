import type { EnergyCost, EnergyPool, EnergyType } from './types'
import { energyTypes } from './definitions'
import { energyRules } from './config'

export function createEmptyEnergyPool(): EnergyPool {
  return Object.fromEntries(energyTypes.map((type) => [type, 0])) as EnergyPool
}

export function generateEnergy(
  amount: number,
  random: () => number = Math.random
): EnergyPool {
  const generated = createEmptyEnergyPool()

  for (let index = 0; index < amount; index++) {
    const typeIndex = Math.floor(random() * energyTypes.length)
    const type = energyTypes[typeIndex]

    generated[type] += 1
  }

  return generated
}

export function receiveTurnEnergy(
  currentPool: EnergyPool,
  livingCharacters: number,
  isFirstTurnOfBattle: boolean
): EnergyPool {
  const amount =
    livingCharacters === 0
      ? 0
      : isFirstTurnOfBattle
        ? energyRules.firstTurnAmount
        : livingCharacters * energyRules.perLivingCharacter

  const generated = generateEnergy(amount)

  const next = createEmptyEnergyPool()
  for (const type of energyTypes) next[type] = currentPool[type] + generated[type]
  return next
}
export function paySkillCost(
  currentPool: EnergyPool,
  cost: EnergyCost,
  randomPayment: EnergyPool
): EnergyPool | null {
  const randomCost = cost.random ?? 0

  if (!Number.isInteger(randomCost) || randomCost < 0) {
    return null
  }

  let randomTotal = 0
  const remaining = createEmptyEnergyPool()

  for (const type of energyTypes) {
    const available = currentPool[type]
    const specificCost = cost.specific?.[type] ?? 0
    const chosenPayment = randomPayment[type]

    if (
      !Number.isInteger(available) ||
      !Number.isInteger(specificCost) ||
      !Number.isInteger(chosenPayment) ||
      available < 0 ||
      specificCost < 0 ||
      chosenPayment < 0
    ) {
      return null
    }

    const totalCost = specificCost + chosenPayment

    if (totalCost > available) {
      return null
    }

    remaining[type] = available - totalCost
    randomTotal += chosenPayment
  }

  if (randomTotal !== randomCost) {
    return null
  }

  return remaining
}
export function exchangeEnergy(
  currentPool: EnergyPool,
  sacrificed: EnergyPool,
  chosenType: EnergyType
): EnergyPool | null {
  if (!energyTypes.includes(chosenType)) {
    return null
  }

  const remaining = paySkillCost(
    currentPool,
    { random: energyRules.exchangeCost },
    sacrificed
  )

  if (!remaining) {
    return null
  }

  return {
    ...remaining,
    [chosenType]: remaining[chosenType] + energyRules.exchangeGain,
  }
}
export function energyTotal(pool: EnergyPool): number {
  return energyTypes.reduce((total, type) => total + pool[type], 0)
}

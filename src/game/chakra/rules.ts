import type { ChakraCost, ChakraPool, ChakraType } from './types'
import { chakraTypes } from './definitions'
import { chakraRules } from './config'

export function createEmptyChakraPool(): ChakraPool {
  return Object.fromEntries(chakraTypes.map((type) => [type, 0])) as ChakraPool
}

export function generateChakra(
  amount: number,
  random: () => number = Math.random
): ChakraPool {
  const generated = createEmptyChakraPool()

  for (let index = 0; index < amount; index++) {
    const typeIndex = Math.floor(random() * chakraTypes.length)
    const type = chakraTypes[typeIndex]

    generated[type] += 1
  }

  return generated
}

export function receiveTurnChakra(
  currentPool: ChakraPool,
  livingCharacters: number,
  isFirstTurnOfBattle: boolean
): ChakraPool {
  const amount =
    livingCharacters === 0
      ? 0
      : isFirstTurnOfBattle
        ? chakraRules.firstTurnAmount
        : livingCharacters * chakraRules.perLivingCharacter

  const generated = generateChakra(amount)

  const next = createEmptyChakraPool()
  for (const type of chakraTypes) next[type] = currentPool[type] + generated[type]
  return next
}
export function paySkillCost(
  currentPool: ChakraPool,
  cost: ChakraCost,
  randomPayment: ChakraPool
): ChakraPool | null {
  const randomCost = cost.random ?? 0

  if (!Number.isInteger(randomCost) || randomCost < 0) {
    return null
  }

  let randomTotal = 0
  const remaining = createEmptyChakraPool()

  for (const type of chakraTypes) {
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
export function exchangeChakra(
  currentPool: ChakraPool,
  sacrificed: ChakraPool,
  chosenType: ChakraType
): ChakraPool | null {
  if (!chakraTypes.includes(chosenType)) {
    return null
  }

  const remaining = paySkillCost(
    currentPool,
    { random: chakraRules.exchangeCost },
    sacrificed
  )

  if (!remaining) {
    return null
  }

  return {
    ...remaining,
    [chosenType]: remaining[chosenType] + chakraRules.exchangeGain,
  }
}
export function chakraTotal(pool: ChakraPool): number {
  return chakraTypes.reduce((total, type) => total + pool[type], 0)
}

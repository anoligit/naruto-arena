import type { ChakraCost, ChakraPool, ChakraType } from './types'

const chakraTypes: ChakraType[] = [
  'bloodline',
  'ninjutsu',
  'taijutsu',
  'genjutsu',
]

export function createEmptyChakraPool(): ChakraPool {
  return {
    bloodline: 0,
    ninjutsu: 0,
    taijutsu: 0,
    genjutsu: 0,
  }
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
        ? 1
        : livingCharacters

  const generated = generateChakra(amount)

  return {
    bloodline: currentPool.bloodline + generated.bloodline,
    ninjutsu: currentPool.ninjutsu + generated.ninjutsu,
    taijutsu: currentPool.taijutsu + generated.taijutsu,
    genjutsu: currentPool.genjutsu + generated.genjutsu,
  }
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
    { random: 5 },
    sacrificed
  )

  if (!remaining) {
    return null
  }

  return {
    ...remaining,
    [chosenType]: remaining[chosenType] + 1,
  }
}
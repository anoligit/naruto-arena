import type { chakraDefinitions } from './definitions'

export type ChakraType = keyof typeof chakraDefinitions
export type ChakraPool = Record<ChakraType, number>

export type ChakraCost = {
  specific?: Partial<ChakraPool>
  random?: number
}

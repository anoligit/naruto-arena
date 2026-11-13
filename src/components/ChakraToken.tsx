import { chakraDefinitions, randomChakra } from '../game/chakra/index'
import type { ChakraType } from '../game/chakra/index'
import './ChakraToken.css'

export default function ChakraToken({ type }: { type: ChakraType | 'random' }) {
  const definition = type === 'random' ? randomChakra : chakraDefinitions[type]
  return <i className={`chakra-token ${type}`} style={{ backgroundColor: definition.color }} aria-hidden="true" />
}

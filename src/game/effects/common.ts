import type { StatusDefinition } from './types'

export const commonStatuses: StatusDefinition[] = [
  // Efeitos genéricos disponíveis para uso compartilhado.
  {
    id: 'stun-one-turn',
    name: 'Stun',
    duration: {
      type: 'opponent-turns',
      turns: 1,
    },
    modifiers: [
      { type: 'stun' },
    ],
  },
  {
    id: 'invulnerable-one-turn',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: 1,
    },
    modifiers: [
      { type: 'invulnerable' },
    ],
  },
  {
    id: 'stun-physical-chakra-one-turn', name: 'Stun: Physical e Chakra',
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'stun', classes: ['physical', 'chakra'] }],
  },
  {
    id: 'stun-physical-mental-one-turn', name: 'Stun: Physical e Mental',
    duration: { type: 'opponent-turns', turns: 1 },
    modifiers: [{ type: 'stun', classes: ['physical', 'mental'] }],
  },
]

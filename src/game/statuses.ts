import type { StatusDefinition } from './types'

export const statuses: StatusDefinition[] = [
  {
    id: 'naruto-clones',
    name: 'Clones das Sombras',
    duration: {
      type: 'opponent-turns',
      turns: 4,
    },
    modifiers: [
      {
        type: 'damage-reduction',
        amount: 15,
      },
      {
        type: 'damage-multiplier',
        skillId: 'naruto-combo',
        multiplier: 2,
      },
    ],
  },
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
]
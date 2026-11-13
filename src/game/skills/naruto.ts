import type { SkillDefinition } from '../types'

export const narutoSkills: SkillDefinition[] = [
  {
    id: 'naruto-combo',
    name: 'Naruto Combo',
    description:
      'Causa 15 de dano físico a um inimigo. Com Clones ativo, causa 30.',
    image: 'images/naruto/naruto_1_uzumaki-combo.jpg',
    cost: {
      specific: { taijutsu: 1 },
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant', 'unique'],
    effects: [
      {
        type: 'damage',
        amount: 15,
        damageType: 'normal',
      },
    ],
  },
  {
    id: 'naruto-rasengan',
    name: 'Rasengan',
    description:
      'Requer Clones ativo. Causa 40 de dano a um inimigo e impede o uso de todas as suas habilidades por 1 turno.',
    image: 'images/naruto/naruto_2_rasengan.jpg',
    cost: {
      specific: { ninjutsu: 1 },
      random: 1,
    },
    cooldown: 1,
    target: 'enemy',
    classes: ['chakra', 'melee', 'instant'],
    requirements: [
      {
        type: 'has-status',
        statusId: 'naruto-clones',
      },
    ],
    effects: [
      {
        type: 'damage',
        amount: 40,
        damageType: 'normal',
      },
      {
        type: 'apply-status',
        statusId: 'stun-one-turn',
      },
    ],
  },
  {
    id: 'naruto-clones-skill',
    name: 'Shadow Clones',
    description:
      'Naruto recebe 15 de redução de dano por 4 turnos. Durante esse período, Naruto Combo causa o dobro de dano e Rasengan pode ser usado.',
    image: 'images/naruto/naruto_3_clones.jpg',
    cost: {
      random: 1,
    },
    cooldown: 3,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'naruto-clones',
      },
    ],
  },
  {
    id: 'naruto-sexy',
    name: 'Sexy Technique',
    description:
      'Naruto fica invulnerável por 1 turno.',
    image: 'images/naruto/naruto_4_sexy.jpg',
    cost: {
      random: 1,
    },
    cooldown: 4,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: 'invulnerable-one-turn',
      },
    ],
  },
]
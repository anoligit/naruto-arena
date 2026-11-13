import type { SkillDefinition } from '../types'

export const narutoSkills: SkillDefinition[] = [
  {
    id: 'naruto-combo',
    name: 'Uzumaki Naruto Combo',
    description:
      'Causa 15 de dano físico a um inimigo. Enquanto Shadow Clones estiver ativo em Naruto, causa o dobro de dano: 30.',
    image: 'images/naruto/naruto_skill_1.jpg',
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
      'Requer Shadow Clones ativo em Naruto. Causa 40 de dano a um inimigo e impede o uso das habilidades Physical e Chakra desse alvo durante a próxima jogada dele. Habilidades sem essas classes não são bloqueadas.',
    image: 'images/naruto/naruto_skill_2.jpg',
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
        statusId: 'stun-physical-chakra-one-turn',
      },
    ],
  },
  {
    id: 'naruto-clones-skill',
    name: 'Shadow Clones',
    description:
      'Naruto recebe 15 pontos de redução de dano por 4 turnos. O efeito começa na execução e protege durante as quatro próximas jogadas adversárias. Enquanto estiver ativo, Uzumaki Naruto Combo causa 30 de dano e Rasengan fica disponível. A redução não afeta dano piercing ou affliction.',
    image: 'images/naruto/naruto_skill_3.jpg',
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
      'Naruto fica invulnerável às habilidades inimigas durante a próxima jogada adversária. Não remove efeitos que já estavam aplicados.',
    image: 'images/naruto/naruto_skill_4.jpg',
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
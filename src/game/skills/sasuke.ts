import type { SkillDefinition } from '../types'

export const sasukeSkills: SkillDefinition[] = [
  {
    id: 'sasuke-lion-combo', name: 'Lion Combo',
    description: 'Causa 30 de dano físico a um inimigo. Contra o inimigo marcado pelo Sharingan deste Sasuke, o dano aumenta em 50%, para 45, enquanto a marca permanecer ativa.',
    image: 'images/sasuke/sasuke_skill_1.jpg',
    cost: { specific: { taijutsu: 1 }, random: 1 }, cooldown: 0, target: 'enemy', classes: ['physical', 'melee', 'instant'],
    effects: [{ type: 'damage', amount: 30, damageType: 'normal' }],
  },
  {
    id: 'sasuke-fireball', name: 'Katon: Goukakyuu no Jutsu',
    description: 'Causa imediatamente 15 de dano affliction a um inimigo. Durante a próxima jogada dele, se esse personagem executar uma habilidade, recebe mais 5 de dano affliction. Os dois danos ignoram redução de dano. O dano adicional só ocorre se o alvo efetivamente usar uma habilidade.',
    image: 'images/sasuke/sasuke_skill_2.jpg',
    cost: { specific: { ninjutsu: 1 } }, cooldown: 0, target: 'enemy', classes: ['chakra', 'ranged', 'instant', 'unique', 'affliction'],
    effects: [{ type: 'damage', amount: 15, damageType: 'affliction' }, { type: 'apply-status', statusId: 'sasuke-fireball-burn' }],
  },
  {
    id: 'sasuke-sharingan', name: 'Sharingan',
    description: 'Sasuke recebe 50% de redução de dano por 3 turnos; nesse período, esta habilidade é substituída por Chidori. Se o inimigo escolhido puder ser afetado, recebe uma marca que aumenta em 50% o dano de Lion Combo deste Sasuke e em 10 o dano de seu Chidori. Contra um alvo invulnerável, Sasuke ainda recebe a proteção, mas a marca não é aplicada. Os efeitos terminam após a terceira jogada adversária ou quando Sasuke morre.',
    image: 'images/sasuke/sasuke_skill_3.jpg',
    cost: { specific: { bloodline: 1 } }, cooldown: 3, target: 'enemy', classes: ['mental', 'ranged', 'instant', 'unique'],
    allowInvulnerableTarget: true,
    effects: [
      { type: 'apply-status', statusId: 'sasuke-sharingan', recipient: 'user' },
      { type: 'apply-status', statusId: 'sasuke-sharingan-mark', skipIfUntargetable: true },
    ],
  },
  {
    id: 'sasuke-swift-block', name: 'Swift Block',
    description: 'Sasuke fica invulnerável às habilidades inimigas durante a próxima jogada adversária. Não remove efeitos que já estavam aplicados.',
    image: 'images/sasuke/sasuke_skill_4.jpg',
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['physical', 'instant'],
    effects: [{ type: 'apply-status', statusId: 'invulnerable-one-turn' }],
  },
  {
    id: 'sasuke-chidori', name: 'Chidori',
    description: 'Requer Sharingan ativo no próprio Sasuke e ocupa o lugar de Sharingan enquanto esse efeito durar. Causa 40 de dano piercing a um inimigo, ignorando sua redução de dano. Contra o alvo marcado pelo Sharingan deste Sasuke, causa 50. A invulnerabilidade do alvo ainda impede o uso.',
    image: 'images/sasuke/sasuke_skill_5.jpg',
    cost: { specific: { ninjutsu: 1 }, random: 1 }, cooldown: 1, target: 'enemy', classes: ['chakra', 'melee', 'instant', 'unique'],
    replacement: { skillId: 'sasuke-sharingan', whenStatusId: 'sasuke-sharingan' },
    requirements: [{ type: 'has-status', statusId: 'sasuke-sharingan' }],
    effects: [{ type: 'damage', amount: 40, damageType: 'piercing' }],
  },
]

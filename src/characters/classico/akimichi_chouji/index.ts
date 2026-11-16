import image0 from './akimichi_chouji_char_1.jpg'
import image1 from './akimichi_chouji_skill_1_(partial_double_size).jpg'
import image2 from './akimichi_chouji_skill_2_(meat_tank).jpg'
import image3 from './akimichi_chouji_skill_3_(akimichi_pills).jpg'
import image4 from './akimichi_chouji_skill_4_(effortless_block).png'
import image5 from './akimichi_chouji_skill_5_(passive_butterfly_mode).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'
import type { SkillEffect, StatusDefinition } from '../../../game/types'

const id = 'classico-chouji'
const punchId = `${id}-partial-double-size`
const tankId = `${id}-meat-tank`
const stage = (number: number) => `${id}-pill-${number}`
const pillEffects = (number: number): SkillEffect[] => [
  { type: 'damage', amount: 10 + number * 5, damageType: 'affliction' },
  { type: 'apply-status', statusId: stage(number) },
]
const pillStatuses: StatusDefinition[] = [1, 2, 3].map(number => ({
  id: stage(number), name: number === 3 ? 'Butterfly Mode' : `Akimichi Pills: ${number}`,
  duration: { type: 'permanent', turns: 0 },
  replaces: [1, 2, 3].map(stage),
  modifiers: [
    { type: 'damage-multiplier', skillId: punchId, multiplier: 1 + number },
    { type: 'damage-multiplier', skillId: tankId, multiplier: 1 + number },
    ...(number === 3 ? [{ type: 'damage-reduction-percent' as const, percent: 75, includesPiercing: true }] : []),
  ],
  ...(number === 3 ? { periodicEffects: [{ type: 'gain-energy' as const, amount: 1 }] } : {}),
  indicatorNote: `Partial Double Size causa ${20 + number * 20} de dano e Meat Tank causa ${10 + number * 10} por aplicação.${number === 3 ? ' Reduz dano normal e piercing em 75%, sem reduzir affliction. Ganha 1 energia aleatória no fim das próximas jogadas de Chouji.' : ''}`,
}))

// 1. PARTIAL DOUBLE SIZE
const punch: AbilityDefinition = { skill: {
  id: punchId, name: 'Partial Double Size', image: image1,
  description: 'Causa 20 de dano físico a um inimigo. Cada pílula consumida adiciona permanentemente 20 de dano.',
  cost: { specific: { taijutsu: 1 } }, cooldown: 0, target: 'enemy', classes: ['physical', 'instant', 'melee'],
  effects: [{ type: 'damage', amount: 20, damageType: 'normal' }],
} }

// 2. MEAT TANK — a invulnerabilidade é independente do dano Action no inimigo.
const tank: AbilityDefinition = {
  skill: {
    id: tankId, name: 'Meat Tank', image: image2,
    description: 'Chouji fica invulnerável por 2 turnos. Se o inimigo escolhido puder ser afetado, recebe 10 de dano físico na execução e mais 10 na próxima jogada de Chouji. Cada pílula adiciona 10 a cada aplicação de dano. Por ser Action, o dano contínuo é suspenso por stun ou invulnerabilidade do alvo. Chouji ainda recebe a proteção ao escolher um alvo invulnerável.',
    cost: { specific: { bloodline: 1 } }, cooldown: 2, target: 'enemy', allowInvulnerableTarget: true,
    classes: ['physical', 'action', 'instant', 'melee'],
    effects: [
      { type: 'damage', amount: 10, damageType: 'normal', skipIfUntargetable: true },
      { type: 'apply-status', statusId: `${id}-tank-damage`, skipIfUntargetable: true },
      { type: 'apply-status', statusId: `${id}-tank-protection`, recipient: 'user' },
    ],
  },
  statuses: [
    { id: `${id}-tank-damage`, name: 'Meat Tank', action: true, endsWhenSourceDies: true,
      duration: { type: 'opponent-turns', turns: 2 }, modifiers: [],
      periodicEffects: [{ type: 'damage', amount: 10, damageType: 'normal' }],
      indicatorNote: 'Recebe o dano de Meat Tank novamente na próxima jogada de Chouji, incluindo o bônus das pílulas.',
    },
    { id: `${id}-tank-protection`, name: 'Meat Tank: proteção',
      duration: { type: 'opponent-turns', turns: 2 }, modifiers: [{ type: 'invulnerable' }],
    },
  ],
}

// 3. AKIMICHI PILLS — uma etapa permanente substitui a anterior.
const pills: AbilityDefinition = {
  skill: {
    id: `${id}-pills`, name: 'Akimichi Pills', image: image3,
    description: 'Consome até 3 pílulas, uma por utilização. A primeira custa 0 e causa 15 de dano affliction em Chouji; a segunda custa 2 energias quaisquer e causa 20; a terceira custa 4 e causa 25. Cada pílula adiciona permanentemente 20 de dano a Partial Double Size e 10 a cada aplicação de Meat Tank. A terceira ativa Butterfly Mode. A habilidade não pode ser usada novamente após a terceira pílula.',
    cost: {}, cooldown: 0, target: 'self', classes: ['affliction', 'instant'],
    requirements: [{ type: 'lacks-status', statusId: stage(3) }],
    effects: pillEffects(1),
    variants: [
      { whenUserHasStatus: stage(1), cost: { random: 2 }, effects: pillEffects(2) },
      { whenUserHasStatus: stage(2), cost: { random: 4 }, effects: pillEffects(3) },
    ],
  },
  statuses: pillStatuses,
}

// 4. EFFORTLESS BLOCK
const block: AbilityDefinition = {
  skill: {
    id: `${id}-block`, name: 'Effortless Block', image: image4,
    description: 'Chouji fica invulnerável a novas habilidades inimigas por 1 turno. Não remove efeitos já aplicados.',
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['physical', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${id}-block-protection` }],
  },
  statuses: [{ id: `${id}-block-protection`, name: 'Effortless Block', duration: { type: 'opponent-turns', turns: 1 }, modifiers: [{ type: 'invulnerable' }] }],
}

// PASSIVA — consultável; não ocupa um quinto slot e não pode ser utilizada como ação.
const butterfly: AbilityDefinition = { skill: {
  id: `${id}-butterfly`, name: 'Passive: Butterfly Mode', image: image5, passive: true,
  description: 'Após consumir três pílulas, Chouji recebe permanentemente 75% de redução de dano normal e piercing. Affliction ignora essa redução. A equipe ganha 1 energia aleatória ao final de cada jogada seguinte de Chouji, enquanto ele estiver vivo.',
  cost: {}, cooldown: 0, target: 'self', classes: ['chakra', 'instant'], effects: [],
} }

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  id, name: 'Akimichi Chouji', image: image0,
  description: "Um Genin da Equipe 10, Chouji é um membro do clã Akimichi, um grande comedor e um amigo próximo de seus aliados. Embora seja naturalmente forte, Chouji é capaz de sacrificar sua própria vida usando pílulas especiais de seu clã para se tornar extremamente poderoso.",
  unlockRequirement: { type: 'none' }, order: 8,
  abilities: [punch, tank, pills, block, butterfly],
})

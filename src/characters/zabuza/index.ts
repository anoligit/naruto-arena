import { n, duration } from '../description'
import portrait from './images/zabuza_char_1.png'
import silentImage from './images/zabuza_skill_1.png'
import waterfallImage from './images/zabuza_skill_2.png'
import mistImage from './images/zabuza_skill_3.png'
import cloneImage from './images/zabuza_skill_4.png'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'zabuza'
const characterInfo: CharacterInfo = {
  name: 'Momochi Zabuza',
  image: portrait,
  description: 'Ninja renegado da Vila Oculta da Névoa. Zabuza é um oponente aterrorizante que ataca seus inimigos de dentro da névoa que ele próprio cria.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — SILENT HOMICIDE TECHNIQUE
const silentDamage = 30
const silentMistDamage = 45
const silentHomicide: AbilityDefinition = {
  skill: {
    id: `${characterId}-silent-homicide`,
    name: 'Silent Homicide Technique',
    image: silentImage,
    description: `Causa ${n(silentDamage)} de dano físico a um inimigo. Enquanto Hidden Mist Technique estiver ativo neste Zabuza, causa ${n(silentMistDamage)} de dano piercing e ignora invulnerabilidade. Piercing ignora redução de dano; o ataque continua podendo ser refletido.`,
    cost: { specific: { taijutsu: 1 }, random: 1 },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant'],
    enhancement: {
      whenUserHasStatus: `${characterId}-hidden-mist`,
      damage: { amount: silentMistDamage, damageType: 'piercing' },
      ignoreInvulnerability: true,
    },
    effects: [{ type: 'damage', amount: silentDamage, damageType: 'normal' }],
  },
}

// 3. HABILIDADE 2 — GREAT WATERFALL TECHNIQUE
const waterfallDamage = 10
const waterfallStunTurns = 1
const waterfallStunClasses: SkillClass[] = ['chakra', 'ranged']
const greatWaterfall: AbilityDefinition = {
  skill: {
    id: `${characterId}-great-waterfall`,
    name: 'Great Waterfall Technique',
    image: waterfallImage,
    description: `Atinge todos os inimigos vivos e vulneráveis a esta habilidade, causando ${n(waterfallDamage)} de dano e impedindo o uso de habilidades que tenham a classe Chakra ou Ranged ${duration(waterfallStunTurns)}. O custo e a ação são pagos uma única vez, independentemente do número de alvos.`,
    cost: { specific: { ninjutsu: 1 }, random: 1 },
    cooldown: 3,
    target: 'enemy',
    targetExpansion: { target: 'all-vulnerable-enemies' },
    classes: ['chakra', 'ranged', 'instant'],
    effects: [
      { type: 'damage', amount: waterfallDamage, damageType: 'normal' },
      { type: 'apply-status', statusId: `${characterId}-waterfall-stun` },
    ],
  },
  statuses: [{
    id: `${characterId}-waterfall-stun`,
    name: 'Great Waterfall Technique',
    duration: { type: 'opponent-turns', turns: waterfallStunTurns },
    modifiers: [{ type: 'stun', classes: waterfallStunClasses }],
  }]
}

// 4. HABILIDADE 3 — HIDDEN MIST TECHNIQUE
const mistTurns = 3
const mistReductionPercent = 25
const mistAdditionalRandom = 1
const hiddenMistSkill: AbilityDefinition = {
  skill: {
    id: `${characterId}-hidden-mist-skill`,
    name: 'Hidden Mist Technique',
    image: mistImage,
    description: `Zabuza cria uma névoa ${duration(mistTurns)}. Nesse período, seu Silent Homicide Technique é melhorado, ele recebe ${n(mistReductionPercent)}% de redução de dano normal e todas as habilidades Physical dos inimigos custam ${n(mistAdditionalRandom)} energia aleatória adicional por uso. Habilidades sem Physical mantêm seu custo. A redução não afeta piercing ou affliction. Os efeitos terminam se Zabuza morrer.`,
    cost: { specific: { genjutsu: 1 } },
    cooldown: 3,
    target: 'self',
    classes: ['chakra', 'instant', 'ranged'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-hidden-mist` }],
  },
  statuses: [{
    id: `${characterId}-hidden-mist`,
    name: 'Hidden Mist Technique',
    duration: { type: 'opponent-turns', turns: mistTurns },
    endsWhenSourceDies: true,
    modifiers: [
      { type: 'damage-reduction-percent', percent: mistReductionPercent },
      { type: 'enemy-skill-cost-increase', classes: ['physical'], random: mistAdditionalRandom },
    ],
    indicatorNote: `Silent Homicide Technique deste Zabuza causa ${n(silentMistDamage)} de dano piercing e ignora invulnerabilidade.`,
  }]
}

// 5. HABILIDADE 4 — ZABUZA WATER CLONE
const cloneTurns = 1
const waterClone: AbilityDefinition = {
  skill: {
    id: `${characterId}-water-clone`,
    name: 'Zabuza Water Clone',
    image: cloneImage,
    description: `Zabuza fica invulnerável a novas habilidades inimigas ${duration(cloneTurns)}. Não remove efeitos já aplicados e não bloqueia habilidades que ignorem invulnerabilidade.`,
    cost: { random: 1 },
    cooldown: 4,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-water-clone-protection` }],
  },
  statuses: [{
    id: `${characterId}-water-clone-protection`,
    name: 'Zabuza Water Clone',
    duration: { type: 'opponent-turns', turns: cloneTurns },
    modifiers: [{ type: 'invulnerable' }],
  }]
}

// REGISTRO AUTOMÁTICO — habilidades e efeitos são reunidos pelo sistema.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 70,
  abilities: [silentHomicide, greatWaterfall, hiddenMistSkill, waterClone],
})

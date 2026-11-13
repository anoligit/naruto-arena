import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import portrait from './images/naruto_char_1.jpg'
import comboImage from './images/naruto_skill_1.jpg'
import rasenganImage from './images/naruto_skill_2.jpg'
import clonesImage from './images/naruto_skill_3.jpg'
import sexyImage from './images/naruto_skill_4.jpg'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'naruto'
const characterInfo: CharacterInfo = {
  name: 'Uzumaki Naruto',
  image: portrait,
  description: 'Genin do Time 7, Naruto é um órfão que sonha em se tornar Hokage. Sua técnica característica, Shadow Clones, permite que ele utilize golpes poderosos como Uzumaki Naruto Combo e Rasengan.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — UZUMAKI NARUTO COMBO
const comboDamage = 15
const clonesComboMultiplier = 2
const combo: AbilityDefinition = {
  skill: {
    id: `${characterId}-combo`,
    name: 'Uzumaki Naruto Combo',
    description: `Causa ${n(comboDamage)} de dano físico a um inimigo. Enquanto Shadow Clones estiver ativo em Naruto, causa ${n(comboDamage * clonesComboMultiplier)} de dano.`,
    image: comboImage,
    cost: {
      specific: { taijutsu: 1 },
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant', 'unique'],
    effects: [
      {
        type: 'damage',
        amount: comboDamage,
        damageType: 'normal',
      },
    ],
  },
}

// 3. HABILIDADE 2 — RASENGAN
const rasenganDamage = 40
const rasenganStunTurns = 1
const rasenganStunClasses = ['physical', 'chakra'] as SkillClass[]
const rasengan: AbilityDefinition = {
  skill: {
    id: `${characterId}-rasengan`,
    name: 'Rasengan',
    description: `Requer Shadow Clones ativo em Naruto. Causa ${n(rasenganDamage)} de dano a um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(rasenganStunClasses)} ${duration(rasenganStunTurns)}. Habilidades sem essas classes não são bloqueadas.`,
    image: rasenganImage,
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
        statusId: `${characterId}-clones`,
      },
    ],
    effects: [
      {
        type: 'damage',
        amount: rasenganDamage,
        damageType: 'normal',
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-rasengan-stun`,
      },
    ],
  },
  statuses: [{
    id: `${characterId}-rasengan-stun`,
    indicatorNote: 'Habilidades sem essas classes continuam disponíveis.',
    name: 'Rasengan',
    duration: { type: 'opponent-turns', turns: rasenganStunTurns },
    modifiers: [{ type: 'stun', classes: rasenganStunClasses }],
  }]
}

// 4. HABILIDADE 3 — SHADOW CLONES
const clonesReduction = 15
const clonesTurns = 4
const clonesSkill: AbilityDefinition = {
  skill: {
    id: `${characterId}-clones-skill`,
    name: 'Shadow Clones',
    description: `Naruto recebe ${n(clonesReduction)} pontos de redução de dano ${duration(clonesTurns)}. O efeito começa na execução. Enquanto estiver ativo, Uzumaki Naruto Combo causa ${n(comboDamage * clonesComboMultiplier)} de dano e Rasengan fica disponível. A redução não afeta dano piercing ou affliction.`,
    image: clonesImage,
    cost: {
      random: 1,
    },
    cooldown: 3,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-clones`,
      },
    ],
  },
  statuses: [{
    id: `${characterId}-clones`,
    indicatorNote: 'Permite usar Rasengan enquanto este efeito permanecer ativo.',
    name: 'Clones das Sombras',
    duration: {
      type: 'opponent-turns',
      turns: clonesTurns,
    },
    modifiers: [
      {
        type: 'damage-reduction',
        amount: clonesReduction,
      },
      {
        type: 'damage-multiplier',
        skillId: `${characterId}-combo`,
        multiplier: clonesComboMultiplier,
      },
    ],
  }]
}

// 5. HABILIDADE 4 — SEXY TECHNIQUE
const sexyTurns = 1
const sexy: AbilityDefinition = {
  skill: {
    id: `${characterId}-sexy`,
    name: 'Sexy Technique',
    description: `Naruto fica invulnerável às novas habilidades inimigas ${duration(sexyTurns)}. Não remove efeitos que já estavam aplicados.`,
    image: sexyImage,
    cost: {
      random: 1,
    },
    cooldown: 4,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-sexy-invulnerable`,
      },
    ],
  },
  statuses: [{
    id: `${characterId}-sexy-invulnerable`,
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Sexy Technique',
    duration: { type: 'opponent-turns', turns: sexyTurns },
    modifiers: [{ type: 'invulnerable' }],
  }]
}

// REGISTRO AUTOMÁTICO — habilidades e efeitos são reunidos pelo sistema.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 10,
  abilities: [combo, rasengan, clonesSkill, sexy],
})

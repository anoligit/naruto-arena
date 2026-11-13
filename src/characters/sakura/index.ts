import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import portrait from './images/sakura_char_1.jpg'
import skill1Image from './images/sakura_skill_1.jpg'
import skill2Image from './images/sakura_skill_2.jpg'
import skill3Image from './images/sakura_skill_3.jpg'
import skill4Image from './images/sakura_skill_4.jpg'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'sakura'
const characterInfo: CharacterInfo = {
  name: 'Haruno Sakura',
  image: portrait,
  description: 'Genin do Time 7, Sakura é muito inteligente, mas insegura consigo mesma. Após iniciar seu treinamento com Tsunade, tornou-se capaz de desferir socos poderosos e curar seus aliados.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — KO PUNCH
const punchDamage = 15
const punchStunTurns = 1
const punchStunClasses = ['physical', 'mental'] as SkillClass[]
const innerPunchMultiplier = 2
const koPunch: AbilityDefinition = {
  skill: {
    id: `${characterId}-ko-punch`,
    name: 'KO Punch',
    description: `Sakura causa ${n(punchDamage)} de dano físico a um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(punchStunClasses)} ${duration(punchStunTurns)}. Com Inner Sakura ativo, o dano aumenta para ${n(punchDamage * innerPunchMultiplier)}. Não bloqueia habilidades que não tenham essas classes.`,
    image: skill1Image,
    cost: {
      specific: {
        taijutsu: 1
      }
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant'],
    effects: [
      {
        type: 'damage',
        amount: punchDamage,
        damageType: 'normal'
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-ko-punch-stun`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-ko-punch-stun`,
    indicatorNote: 'Habilidades sem essas classes continuam disponíveis.',
    name: 'Stun: Physical e Mental',
    duration: {
      type: 'opponent-turns',
      turns: punchStunTurns
    },
    modifiers: [
      {
        type: 'stun',
        classes: punchStunClasses
      }
    ]
  }]
}

// 3. HABILIDADE 2 — CURE
const cureHeal = 25
const cure: AbilityDefinition = {
  skill: {
    id: `${characterId}-cure`,
    name: 'Cure',
    description: `Recupera ${n(cureHeal)} pontos de vida de um aliado vivo, incluindo a própria Sakura. A cura não pode ultrapassar a vida máxima e não revive personagens derrotados.`,
    image: skill2Image,
    cost: {
      specific: {
        ninjutsu: 1
      }
    },
    cooldown: 0,
    target: 'ally',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'heal',
        amount: cureHeal
      }
    ]
  },
}

// 4. HABILIDADE 3 — INNER SAKURA
const innerReductionPercent = 25
const innerTurns = 4
const inner: AbilityDefinition = {
  skill: {
    id: `${characterId}-inner`,
    name: 'Inner Sakura',
    description: `Sakura recebe ${n(innerReductionPercent)}% de redução de dano e fica imune a stun ${duration(innerTurns)}; seu KO Punch passa a causar ${n(punchDamage * innerPunchMultiplier)} de dano. O efeito começa na execução. A redução não afeta dano piercing ou affliction.`,
    image: skill3Image,
    cost: {
      random: 2
    },
    cooldown: 4,
    target: 'self',
    classes: ['mental', 'instant', 'unique'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-inner`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-inner`,
    indicatorNote: 'A proteção e o aumento de dano valem enquanto este efeito permanecer ativo.',
    name: 'Inner Sakura',
    duration: {
      type: 'opponent-turns',
      turns: innerTurns
    },
    modifiers: [
      {
        type: 'damage-reduction-percent',
        percent: innerReductionPercent
      },
      {
        type: 'stun-immunity'
      },
      {
        type: 'damage-multiplier',
        skillId: `${characterId}-ko-punch`,
        multiplier: innerPunchMultiplier
      }
    ]
  }]
}

// 5. HABILIDADE 4 — REPLACEMENT TECHNIQUE
const replacementTurns = 1
const replacement: AbilityDefinition = {
  skill: {
    id: `${characterId}-replacement`,
    name: 'Replacement Technique',
    description: `Sakura fica invulnerável às novas habilidades inimigas ${duration(replacementTurns)}. Não remove efeitos que já estavam aplicados.`,
    image: skill4Image,
    cost: {
      random: 1
    },
    cooldown: 4,
    target: 'self',
    classes: ['chakra', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-invulnerable`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-invulnerable`,
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: replacementTurns
    },
    modifiers: [
      {
        type: 'invulnerable'
      }
    ]
  }]
}

// REGISTRO AUTOMÁTICO — habilidades e efeitos são reunidos pelo sistema.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 30,
  abilities: [koPunch, cure, inner, replacement],
})

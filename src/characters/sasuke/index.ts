import { n, duration, capitalize } from '../description'
import portrait from './images/sasuke_char_1.jpg'
import skill1Image from './images/sasuke_skill_1.jpg'
import skill2Image from './images/sasuke_skill_2.jpg'
import skill3Image from './images/sasuke_skill_3.jpg'
import skill4Image from './images/sasuke_skill_4.jpg'
import skill5Image from './images/sasuke_skill_5.jpg'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'sasuke'
const characterInfo: CharacterInfo = {
  name: 'Uchiha Sasuke',
  image: portrait,
  description: 'Genin do Time 7 e único sobrevivente do clã Uchiha, Sasuke jurou se vingar de seu irmão. Com o Sharingan, consegue antecipar ataques e executar técnicas ofensivas avançadas.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — LION COMBO
const lionDamage = 30
const sharinganLionMultiplier = 1.5
const lionCombo: AbilityDefinition = {
  skill: {
    id: `${characterId}-lion-combo`,
    name: 'Lion Combo',
    description: `Causa ${n(lionDamage)} de dano físico a um inimigo. Contra o inimigo marcado pelo Sharingan deste Sasuke, o dano é multiplicado por ${n(sharinganLionMultiplier)}, para ${n(lionDamage * sharinganLionMultiplier)}, enquanto a marca permanecer ativa.`,
    image: skill1Image,
    cost: {
      specific: {
        taijutsu: 1
      },
      random: 1
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['physical', 'melee', 'instant'],
    effects: [
      {
        type: 'damage',
        amount: lionDamage,
        damageType: 'normal'
      }
    ]
  },
}

// 3. HABILIDADE 2 — KATON: GOUKAKYUU NO JUTSU
const fireballDamage = 15
const fireballTriggeredDamage = 5
const fireballTurns = 1
const fireball: AbilityDefinition = {
  skill: {
    id: `${characterId}-fireball`,
    name: 'Katon: Goukakyuu no Jutsu',
    description: `Causa imediatamente ${n(fireballDamage)} de dano affliction a um inimigo. ${capitalize(duration(fireballTurns))}, se esse personagem executar uma habilidade, recebe mais ${n(fireballTriggeredDamage)} de dano affliction. Os dois danos ignoram redução de dano. O dano adicional só ocorre se o alvo efetivamente usar uma habilidade.`,
    image: skill2Image,
    cost: {
      specific: {
        ninjutsu: 1
      }
    },
    cooldown: 0,
    target: 'enemy',
    classes: ['chakra', 'ranged', 'instant', 'unique', 'affliction'],
    effects: [
      {
        type: 'damage',
        amount: fireballDamage,
        damageType: 'affliction'
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-fireball-burn`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-fireball-burn`,
    indicatorNote: 'O dano adicional só ocorre se o personagem executar uma habilidade.',
    name: 'Katon: dano ao usar habilidade',
    duration: {
      type: 'opponent-turns',
      turns: fireballTurns
    },
    modifiers: [
      {
        type: 'on-skill-use-damage',
        amount: fireballTriggeredDamage,
        damageType: 'affliction'
      }
    ]
  }]
}

// 4. HABILIDADE 3 — SHARINGAN
const sharinganReductionPercent = 50
const sharinganTurns = 3
const sharinganChidoriBonus = 10
const sharingan: AbilityDefinition = {
  skill: {
    id: `${characterId}-sharingan`,
    name: 'Sharingan',
    description: `Sasuke recebe ${n(sharinganReductionPercent)}% de redução de dano ${duration(sharinganTurns)}; nesse período, esta habilidade é substituída por Chidori. Se o inimigo escolhido puder ser afetado, recebe uma marca que multiplica por ${n(sharinganLionMultiplier)} o dano de Lion Combo deste Sasuke e aumenta em ${n(sharinganChidoriBonus)} o dano de seu Chidori. Contra um alvo invulnerável, Sasuke ainda recebe a proteção, mas a marca não é aplicada. Os efeitos terminam se Sasuke morrer.`,
    image: skill3Image,
    cost: {
      specific: {
        bloodline: 1
      }
    },
    cooldown: 3,
    target: 'enemy',
    classes: ['mental', 'ranged', 'instant', 'unique'],
    allowInvulnerableTarget: true,
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-sharingan`,
        recipient: 'user'
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-sharingan-mark`,
        skipIfUntargetable: true
      }
    ]
  },
  statuses: [{
    id: `${characterId}-sharingan`,
    indicatorNote: 'Permite usar Chidori no lugar de Sharingan enquanto este efeito permanecer ativo.',
    name: 'Sharingan',
    duration: {
      type: 'opponent-turns',
      turns: sharinganTurns
    },
    endsWhenSourceDies: true,
    modifiers: [
      {
        type: 'damage-reduction-percent',
        percent: sharinganReductionPercent
      }
    ]
  },
  {
    id: `${characterId}-sharingan-mark`,
    indicatorNote: 'Os bônus valem apenas para o Sasuke que aplicou esta marca.',
    name: 'Marca de Sharingan',
    duration: {
      type: 'opponent-turns',
      turns: sharinganTurns
    },
    endsWhenSourceDies: true,
    modifiers: [
      {
        type: 'damage-taken-multiplier',
        skillId: `${characterId}-lion-combo`,
        multiplier: sharinganLionMultiplier,
        fromSourceOnly: true
      },
      {
        type: 'damage-taken-bonus',
        skillId: `${characterId}-chidori`,
        amount: sharinganChidoriBonus,
        fromSourceOnly: true
      }
    ]
  }]
}

// 5. HABILIDADE 4 — SWIFT BLOCK
const blockTurns = 1
const swiftBlock: AbilityDefinition = {
  skill: {
    id: `${characterId}-swift-block`,
    name: 'Swift Block',
    description: `Sasuke fica invulnerável às novas habilidades inimigas ${duration(blockTurns)}. Não remove efeitos que já estavam aplicados.`,
    image: skill4Image,
    cost: {
      random: 1
    },
    cooldown: 4,
    target: 'self',
    classes: ['physical', 'instant'],
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
      turns: blockTurns
    },
    modifiers: [
      {
        type: 'invulnerable'
      }
    ]
  }]
}

// 6. HABILIDADE 5 — CHIDORI
const chidoriDamage = 40
const chidori: AbilityDefinition = {
  skill: {
    id: `${characterId}-chidori`,
    name: 'Chidori',
    description: `Requer Sharingan ativo no próprio Sasuke e ocupa o lugar de Sharingan enquanto esse efeito durar. Causa ${n(chidoriDamage)} de dano piercing a um inimigo, ignorando sua redução de dano. Contra o alvo marcado pelo Sharingan deste Sasuke, causa ${n(chidoriDamage + sharinganChidoriBonus)}. A invulnerabilidade do alvo ainda impede o uso.`,
    image: skill5Image,
    cost: {
      specific: {
        ninjutsu: 1
      },
      random: 1
    },
    cooldown: 1,
    target: 'enemy',
    classes: ['chakra', 'melee', 'instant', 'unique'],
    replacement: {
      skillId: `${characterId}-sharingan`,
      whenStatusId: `${characterId}-sharingan`
    },
    requirements: [
      {
        type: 'has-status',
        statusId: `${characterId}-sharingan`
      }
    ],
    effects: [
      {
        type: 'damage',
        amount: chidoriDamage,
        damageType: 'piercing'
      }
    ]
  },
}

// REGISTRO AUTOMÁTICO — habilidades e efeitos são reunidos pelo sistema.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 20,
  abilities: [lionCombo, fireball, sharingan, swiftBlock, chidori],
})

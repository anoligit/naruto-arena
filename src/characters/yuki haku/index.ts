import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import portrait from './images/haku_char_1.png'
import waterNeedlesImage from './images/haku_skill_1.png'
import acupunctureImage from './images/haku_skill_2.png'
import iceMirrorsImage from './images/haku_skill_3.png'
import mirrorTransferImage from './images/haku_skill_4.png'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'haku'
const characterInfo: CharacterInfo = {
  name: 'Yuki Haku',
  image: portrait,
  description: 'Único sobrevivente do clã Yuki e subordinado de Zabuza. Apesar de jovem, Haku possui um poder capaz de superar ninjas adultos. Sua linhagem sanguínea e inteligência permitem atacar e defender simultaneamente.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — WATER NEEDLES
const waterNeedlesDamage = 30
const waterNeedles: AbilityDefinition = {
  skill: {
    id: `${characterId}-water-needles`,
    name: 'Water Needles',
    image: waterNeedlesImage,
    description: `Causa ${n(waterNeedlesDamage)} de dano físico a um inimigo. Durante Demonic Ice Mirrors, aplica o mesmo dano a todos os inimigos vivos que estiverem vulneráveis a esta habilidade. A melhoria não multiplica o dano por alvo.`,
    cost: { specific: { bloodline: 1 }, random: 1 },
    cooldown: 0,
    classes: ['physical', 'ranged', 'instant'],
    target: 'enemy',
    targetExpansion: {
      whenUserHasStatus: `${characterId}-ice-mirrors`,
      target: 'all-vulnerable-enemies',
    },
    effects: [
      { type: 'damage', amount: waterNeedlesDamage, damageType: 'normal' },
    ],
  },
}

// 3. HABILIDADE 2 — ACUPUNCTURE
const acupunctureStunTurns = 2
const acupunctureStunClasses: SkillClass[] = ['physical', 'chakra']
const acupuncture: AbilityDefinition = {
  skill: {
    id: `${characterId}-acupuncture`,
    name: 'Acupuncture',
    image: acupunctureImage,
    description: `Impede um inimigo de usar habilidades das classes ${formatSkillClasses(acupunctureStunClasses)} ${duration(acupunctureStunTurns)}. Durante Demonic Ice Mirrors, aplica o stun completo a todos os inimigos vivos e vulneráveis a esta habilidade. Não causa dano. O efeito Control termina se Haku morrer, ficar stunado nas classes de Acupuncture ou se o alvo ficar invulnerável a Acupuncture.`,
    cost: { specific: { ninjutsu: 1 }, random: 1 },
    cooldown: 2,
    classes: ['physical', 'ranged', 'control'],
    target: 'enemy',
    targetExpansion: {
      whenUserHasStatus: `${characterId}-ice-mirrors`,
      target: 'all-vulnerable-enemies',
    },
    effects: [
      { type: 'apply-status', statusId: `${characterId}-acupuncture-stun` },
    ],
  },
  statuses: [{
    id: `${characterId}-acupuncture-stun`,
    name: 'Acupuncture',
    indicatorNote: 'Habilidades sem essas classes continuam disponíveis. Acupuncture não causa dano.',
    duration: { type: 'opponent-turns', turns: acupunctureStunTurns },
    control: true,
    endsWhenSourceDies: true,
    modifiers: [
      { type: 'stun', classes: acupunctureStunClasses },
    ],
  }]
}

// 4. HABILIDADE 3 — DEMONIC ICE MIRRORS
const iceMirrorsTurns = 3
const iceMirrorsProtectionClasses: SkillClass[] = ['physical']
const demonicIceMirrors: AbilityDefinition = {
  skill: {
    id: `${characterId}-demonic-ice-mirrors`,
    name: 'Demonic Ice Mirrors',
    image: iceMirrorsImage,
    description: `Haku cria espelhos de gelo ${duration(iceMirrorsTurns)}. Durante esse período, Water Needles e Acupuncture atingem todos os inimigos vivos e vulneráveis a elas. Haku também fica invulnerável a novas habilidades das classes ${formatSkillClasses(iceMirrorsProtectionClasses)}. A proteção não bloqueia habilidades de outras classes nem remove efeitos anteriores.`,
    cost: { specific: { ninjutsu: 1, bloodline: 1 } },
    cooldown: 5,
    classes: ['chakra', 'instant', 'unique'],
    target: 'self',
    effects: [
      { type: 'apply-status', statusId: `${characterId}-ice-mirrors` },
    ],
  },
  statuses: [{
    id: `${characterId}-ice-mirrors`,
    name: 'Demonic Ice Mirrors',
    indicatorNote: 'Water Needles e Acupuncture atingem todos os inimigos vulneráveis enquanto os espelhos estiverem ativos.',
    duration: { type: 'opponent-turns', turns: iceMirrorsTurns },
    modifiers: [
      { type: 'invulnerable', classes: iceMirrorsProtectionClasses },
    ],
  }]
}

// 5. HABILIDADE 4 — MIRROR TRANSFER
const mirrorTransferTurns = 1
const mirrorTransfer: AbilityDefinition = {
  skill: {
    id: `${characterId}-mirror-transfer`,
    name: 'Mirror Transfer',
    image: mirrorTransferImage,
    description: `Haku fica invulnerável a novas habilidades inimigas ${duration(mirrorTransferTurns)}. Não remove efeitos que já estavam aplicados.`,
    cost: { random: 1 },
    cooldown: 4,
    classes: ['physical', 'instant'],
    target: 'self',
    effects: [
      { type: 'apply-status', statusId: `${characterId}-mirror-transfer-invulnerable` },
    ],
  },
  statuses: [{
    id: `${characterId}-mirror-transfer-invulnerable`,
    name: 'Mirror Transfer',
    indicatorNote: 'Não remove efeitos já aplicados.',
    duration: { type: 'opponent-turns', turns: mirrorTransferTurns },
    modifiers: [
      { type: 'invulnerable' },
    ],
  }]
}

// REGISTRO AUTOMÁTICO — habilidades e efeitos são reunidos pelo sistema.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 60,
  abilities: [waterNeedles, acupuncture, demonicIceMirrors, mirrorTransfer],
})

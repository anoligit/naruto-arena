// Versão Clássico. Regras independentes da versão anterior.
import portrait from './abumi_zaku_char_1.jpg'
import cutterImage from './abumi_zaku_skill_1_(air_cutter).jpg'
import wallImage from './abumi_zaku_skill_2_(wall_of_air).jpg'
import extremeImage from './abumi_zaku_skill_3_(extreme_air_cutter).jpg'
import deflectionImage from './abumi_zaku_skill_4_(airwave_deflection).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'
import { n, duration } from '../../description'

// 1. PERSONAGEM
const characterId = 'classico-zaku'
const cutterId = `${characterId}-air-cutter`
const extremeReady = `${characterId}-extreme-ready`
const cutterDamage = 25

// 2. HABILIDADE 1 — AIR CUTTER
const cutter: AbilityDefinition = {
  skill: {
    id: cutterId, name: 'Air Cutter', image: cutterImage,
    description: `Causa ${n(cutterDamage)} de dano normal a um inimigo. Libera Extreme Air Cutter na próxima jogada de Zaku; a liberação termina ao final dessa jogada.`,
    cost: { specific: { bloodline: 1 } }, cooldown: 0,
    target: 'enemy', classes: ['physical', 'instant', 'ranged'],
    effects: [
      { type: 'damage', amount: cutterDamage, damageType: 'normal' },
      { type: 'apply-status', statusId: extremeReady, recipient: 'user' },
    ],
  },
  statuses: [{ id: extremeReady, name: 'Extreme Air Cutter disponível',
    duration: { type: 'owner-turns', turns: 1 }, modifiers: [],
    indicatorNote: 'Extreme Air Cutter fica disponível na próxima jogada de Zaku. A liberação não dispensa seu custo de energia.',
  }],
}

// 3. HABILIDADE 2 — WALL OF AIR
const wallTurns = 1
const wall: AbilityDefinition = {
  skill: {
    id: `${characterId}-wall-of-air`, name: 'Wall of Air', image: wallImage,
    description: `Protege um aliado, incluindo Zaku, ${duration(wallTurns)}. Cancela a primeira habilidade ofensiva que atingir esse aliado, inclusive a utilização inteira se for uma habilidade em área. Então Zaku responde com Air Cutter no atacante, sem custo, recarga ou uso adicional de ação. A resposta respeita as proteções do atacante e pode liberar Extreme Air Cutter. O counter é invisível até disparar e é consumido uma única vez. Não intercepta habilidades que não podem ser counteradas.`,
    cost: { random: 1 }, cooldown: 2, target: 'ally', classes: ['physical', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-air-wall` }],
  },
  statuses: [{ id: `${characterId}-air-wall`, name: 'Wall of Air', invisible: true,
    duration: { type: 'opponent-turns', turns: wallTurns },
    modifiers: [{ type: 'counter-first-harmful', responseSkillId: cutterId }],
  }],
}

// 4. HABILIDADE 3 — EXTREME AIR CUTTER
const extremeDamage = 45
const extremeGain = 1
const extreme: AbilityDefinition = {
  skill: {
    id: `${characterId}-extreme-air-cutter`, name: 'Extreme Air Cutter', image: extremeImage,
    description: `Requer a liberação de Air Cutter. Causa ${n(extremeDamage)} de dano normal a todos os inimigos vivos e vulneráveis. Depois, a equipe de Zaku recebe ${n(extremeGain)} energia de tipo aleatório, uma única vez por utilização.`,
    cost: { specific: { bloodline: 1 }, random: 2 }, cooldown: 0,
    target: 'enemy', targetExpansion: { target: 'all-vulnerable-enemies' },
    classes: ['physical', 'instant', 'ranged'], requirements: [{ type: 'has-status', statusId: extremeReady }],
    effects: [{ type: 'damage', amount: extremeDamage, damageType: 'normal' }, { type: 'gain-energy', amount: extremeGain }],
  },
}

// 5. HABILIDADE 4 — AIRWAVE DEFLECTION
const deflection: AbilityDefinition = {
  skill: {
    id: `${characterId}-airwave-deflection`, name: 'Airwave Deflection', image: deflectionImage,
    description: `Zaku fica invulnerável a novas habilidades inimigas ${duration(1)}. Não remove efeitos já aplicados.`,
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-deflection` }],
  },
  statuses: [{ id: `${characterId}-deflection`, name: 'Airwave Deflection', duration: { type: 'opponent-turns', turns: 1 }, modifiers: [{ type: 'invulnerable' }] }],
}

export default defineCharacter({
  id: characterId, name: 'Abumi Zaku', image: portrait,
  description: 'Abumi Zaku é um dos três genin do Som enviados para os exames chuunin. Ele foi cirurgicamente alterado com tubos ocos em seus braços, permitindo-lhe criar ondas de ar comprimido.',
  unlockRequirement: { type: 'none' }, order: 101,
  abilities: [cutter, wall, extreme, deflection],
})

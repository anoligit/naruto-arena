import portrait from './images/shikamaru_char_1.jpg'
import meditateImage from './images/shikamaru_skill_1.jpg'
import bindImage from './images/shikamaru_skill_2.jpg'
import imitationImage from './images/shikamaru_skill_3.jpg'
import hideImage from './images/shikamaru_skill_4.jpg'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import { duration, n } from '../description'
import { formatSkillClasses } from '../../game/classes'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'shikamaru'
const characterInfo: CharacterInfo = {
  name: 'Nara Shikamaru',
  image: portrait,
  description: 'Genin do Time 10 e membro do clã Nara, Shikamaru é considerado o Genin mais inteligente dos Konoha 11. Usando sua linhagem, manipula as sombras no campo de batalha para capturar e atacar os inimigos.',
  unlockRequirement: { type: 'none' },
}

// 2. HABILIDADE 1 — MEDITATE
const meditateTurns = 5
const meditateStatus = `${characterId}-meditate`
const meditate: AbilityDefinition = {
  skill: {
    id: `${characterId}-meditate-skill`,
    name: 'Meditate',
    image: meditateImage,
    description: `Shikamaru estuda um inimigo ${duration(meditateTurns)}. A marca deste Shikamaru prolonga Shadow-Neck Bind e Shadow Imitation nesse alvo. Não causa dano. Não pode ser counterada ou refletida, nem usada em um alvo que já esteja sob Meditate. Respeita invulnerabilidade.`,
    cost: { random: 1 },
    cooldown: 0,
    target: 'enemy',
    classes: ['mental', 'instant', 'ranged'],
    cannotBeCountered: true,
    targetMustLackStatus: meditateStatus,
    effects: [{ type: 'apply-status', statusId: meditateStatus }],
  },
  statuses: [{
    id: meditateStatus,
    name: 'Meditate',
    duration: { type: 'opponent-turns', turns: meditateTurns },
    indicatorNote: 'A marca prolonga Shadow-Neck Bind e Shadow Imitation quando usados pelo Shikamaru que a aplicou. Não causa dano por si só.',
    modifiers: [],
  }],
}

// 3. HABILIDADE 2 — SHADOW-NECK BIND
const bindDamage = 15
const bindTurns = 1
const bindMeditateBonus = 1
const bind: AbilityDefinition = {
  skill: {
    id: `${characterId}-shadow-neck-bind`,
    name: 'Shadow-Neck Bind',
    image: bindImage,
    description: `Causa ${n(bindDamage)} de dano normal a todos os inimigos vivos e vulneráveis. Impede novas reduções de dano e novas invulnerabilidades por ${n(bindTurns)} turno. Nos alvos marcados pelo Meditate deste Shikamaru, todos os efeitos duram ${n(bindTurns + bindMeditateBonus)} turnos: o dano de ${n(bindDamage)} se repete ao finalizar a próxima jogada de Shikamaru, totalizando ${n(bindDamage * (bindTurns + bindMeditateBonus))} antes das proteções. Reduções e invulnerabilidades anteriores são preservadas. Por ser Action, os efeitos ficam suspensos enquanto Shikamaru estiver stunado para esta habilidade ou o alvo estiver invulnerável a ela. Não cobra energia novamente.`,
    cost: { specific: { genjutsu: 1 } },
    cooldown: 1,
    target: 'enemy',
    targetExpansion: { target: 'all-vulnerable-enemies' },
    classes: ['chakra', 'action', 'ranged'],
    effects: [
      { type: 'damage', amount: bindDamage, damageType: 'normal' },
      { type: 'apply-status', statusId: `${characterId}-neck-bind`, durationBonus: {
        whenTargetHasStatus: meditateStatus, turns: bindMeditateBonus, fromSourceOnly: true,
      } },
    ],
  },
  statuses: [{
    id: `${characterId}-neck-bind`,
    name: 'Shadow-Neck Bind',
    duration: { type: 'opponent-turns', turns: bindTurns },
    action: true,
    endsWhenSourceDies: true,
    modifiers: [
      { type: 'prevent-invulnerability' },
      { type: 'prevent-damage-reduction' },
      { type: 'periodic-damage', amount: bindDamage, damageType: 'normal' },
    ],
  }],
}

// 4. HABILIDADE 3 — SHADOW IMITATION
const imitationTurns = 1
const imitationMeditateBonus = 2
const imitationClasses: SkillClass[] = ['physical', 'chakra', 'mental']
const imitation: AbilityDefinition = {
  skill: {
    id: `${characterId}-shadow-imitation`,
    name: 'Shadow Imitation',
    image: imitationImage,
    description: `Captura todos os inimigos vivos e vulneráveis, impedindo habilidades das classes ${formatSkillClasses(imitationClasses)} por ${n(imitationTurns)} turno. Nos alvos marcados pelo Meditate deste Shikamaru, o stun dura ${n(imitationTurns + imitationMeditateBonus)} turnos. Não causa dano. Por ser Control, termina se Shikamaru morrer, ficar stunado nas classes desta habilidade ou se o alvo ficar invulnerável a ela. Imunidade a stun impede a prisão.`,
    cost: { specific: { genjutsu: 1, bloodline: 1 } },
    cooldown: 3,
    target: 'enemy',
    targetExpansion: { target: 'all-vulnerable-enemies' },
    classes: ['mental', 'control', 'ranged'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-imitation-stun`, durationBonus: {
      whenTargetHasStatus: meditateStatus, turns: imitationMeditateBonus, fromSourceOnly: true,
    } }],
  },
  statuses: [{
    id: `${characterId}-imitation-stun`,
    name: 'Shadow Imitation',
    duration: { type: 'opponent-turns', turns: imitationTurns },
    control: true,
    endsWhenSourceDies: true,
    modifiers: [{ type: 'stun', classes: imitationClasses }],
  }],
}

// 5. HABILIDADE 4 — SHIKAMARU HIDE
const hideTurns = 1
const hide: AbilityDefinition = {
  skill: {
    id: `${characterId}-hide`,
    name: 'Shikamaru Hide',
    image: hideImage,
    description: `Shikamaru fica invulnerável a novas habilidades inimigas ${duration(hideTurns)}. Não remove efeitos já aplicados.`,
    cost: { random: 1 },
    cooldown: 4,
    target: 'self',
    classes: ['mental', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-hide-invulnerable` }],
  },
  statuses: [{
    id: `${characterId}-hide-invulnerable`,
    name: 'Shikamaru Hide',
    duration: { type: 'opponent-turns', turns: hideTurns },
    modifiers: [{ type: 'invulnerable' }],
  }],
}

// REGISTRO AUTOMÁTICO — números e regras do personagem ficam neste arquivo.
export default defineCharacter({
  id: characterId,
  ...characterInfo,
  order: 80,
  abilities: [meditate, bind, imitation, hide],
})

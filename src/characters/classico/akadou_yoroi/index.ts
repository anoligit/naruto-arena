import image0 from './akadou_yoroi_char_1.jpg'
import image1 from './akadou_yoroi_skill_1_(chakra_and_life_absorption).jpg'
import image2 from './akadou_yoroi_skill_2_(energy_drain).jpg'
import image3 from './akadou_yoroi_skill_3_(draining_assault).jpg'
import image4 from './akadou_yoroi_skill_4_(chakra_block).jpg'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'

const id = 'classico-yoroi'
const absorptionStatus = `${id}-absorption`
const assaultStatus = `${id}-assault-active`
const assaultEffects = [
  { type: 'steal-health', amount: 12 },
  { type: 'steal-energy', amount: 1, types: ['bloodline', 'ninjutsu'] },
] as const

// 1. CHAKRA AND LIFE ABSORPTION
const absorption: AbilityDefinition = {
  skill: {
    id: `${id}-absorption-skill`, name: 'Chakra and Life Absorption', image: image1,
    description: 'Libera Energy Drain e Draining Assault durante as próximas 3 jogadas adversárias.',
    cost: {}, cooldown: 3, target: 'self', classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: absorptionStatus }],
  },
  statuses: [{ id: absorptionStatus, name: 'Chakra and Life Absorption',
    duration: { type: 'opponent-turns', turns: 3 }, modifiers: [],
    indicatorNote: 'Energy Drain e Draining Assault estão disponíveis enquanto este efeito estiver ativo.',
  }],
}

// 2. ENERGY DRAIN
const drain: AbilityDefinition = {
  skill: {
    id: `${id}-energy-drain`, name: 'Energy Drain', image: image2,
    description: 'Requer Chakra and Life Absorption. Rouba 20 de vida como dano affliction e cura Yoroi pela vida efetivamente retirada. O alvo causa 5 a menos de dano não affliction até usar sua próxima habilidade que cause dano; essa habilidade ainda sofre a redução. Enquanto Draining Assault estiver ativo neste Yoroi, rouba também 1 energia Bloodline disponível do alvo.',
    cost: { specific: { taijutsu: 1 } }, cooldown: 0, target: 'enemy', classes: ['affliction', 'instant', 'melee'],
    requirements: [{ type: 'has-status', statusId: absorptionStatus }],
    effects: [
      { type: 'steal-health', amount: 20 },
      { type: 'apply-status', statusId: `${id}-weakness` },
      { type: 'steal-energy', amount: 1, types: ['bloodline'], whenUserHasStatus: assaultStatus },
    ],
  },
  statuses: [{ id: `${id}-weakness`, name: 'Energy Drain',
    duration: { type: 'permanent', turns: 0 }, endsOnDamagingSkillUse: true,
    indicatorNote: 'Acaba após este personagem usar uma nova habilidade que cause dano. A habilidade ainda causa 5 a menos de dano não affliction.',
    modifiers: [{ type: 'outgoing-damage-reduction', amount: 5, excludesAffliction: true }],
  }],
}

// 3. DRAINING ASSAULT — primeira aplicação e duas repetições, sem novos custos.
const assault: AbilityDefinition = {
  skill: {
    id: `${id}-draining-assault`, name: 'Draining Assault', image: image3,
    description: 'Requer Chakra and Life Absorption. Rouba 12 de vida e 1 energia Bloodline ou Ninjutsu disponível na execução e nas duas próximas jogadas de Yoroi. Durante esse período, Energy Drain também rouba 1 Bloodline. Por ser Action, o roubo contínuo é suspenso se Yoroi estiver stunado para esta habilidade ou o alvo estiver invulnerável. Não revive Yoroi nem cria energia quando o alvo não possui as cores exigidas.',
    cost: { specific: { taijutsu: 1 }, random: 2 }, cooldown: 3, target: 'enemy', classes: ['affliction', 'action', 'melee'],
    requirements: [{ type: 'has-status', statusId: absorptionStatus }],
    effects: [
      { type: 'steal-health', amount: 12 },
      { type: 'steal-energy', amount: 1, types: ['bloodline', 'ninjutsu'] },
      { type: 'apply-status', statusId: `${id}-assault-drain` },
      { type: 'apply-status', statusId: assaultStatus, recipient: 'user' },
    ],
  },
  statuses: [
    { id: `${id}-assault-drain`, name: 'Draining Assault', action: true, endsWhenSourceDies: true,
      duration: { type: 'opponent-turns', turns: 3 }, modifiers: [],
      periodicEffects: assaultEffects.map(effect => effect.type === 'steal-energy' ? { ...effect, types: [...effect.types] } : effect),
      indicatorNote: 'Rouba 12 de vida e 1 energia Bloodline ou Ninjutsu nas próximas jogadas de Yoroi, enquanto a habilidade Action puder atuar.',
    },
    { id: assaultStatus, name: 'Draining Assault: Energy Drain aprimorado',
      duration: { type: 'opponent-turns', turns: 3 }, modifiers: [],
      indicatorNote: 'Energy Drain também rouba 1 energia Bloodline disponível.',
    },
  ],
}

// 4. CHAKRA BLOCK
const block: AbilityDefinition = {
  skill: {
    id: `${id}-chakra-block`, name: 'Chakra Block', image: image4,
    description: 'Yoroi fica invulnerável a novas habilidades inimigas por 1 turno. Não remove efeitos já aplicados.',
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${id}-invulnerable` }],
  },
  statuses: [{ id: `${id}-invulnerable`, name: 'Chakra Block', duration: { type: 'opponent-turns', turns: 1 }, modifiers: [{ type: 'invulnerable' }] }],
}

export default defineCharacter({
  id, name: 'Akadou Yoroi', image: image0,
  description: "Parte da equipe de três membros de Kabuto durante o Exame Chuunin, trabalhando como espiões, Yoroi possui uma habilidade especial que lhe permite absorver a energia de seus oponentes.",
  unlockRequirement: { type: 'none' }, order: 103,
  abilities: [absorption, drain, assault, block],
})

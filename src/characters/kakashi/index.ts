import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import portrait from './images/kakashi_char_1.jpeg'
import skill1Image from './images/kakashi_skill_3.jpg'
import skill2Image from './images/kakashi_skill_2.jpg'
import skill3Image from './images/kakashi_skill_1.jpg'
import skill4Image from './images/kakashi_skill_4.jpg'
import { defineCharacter } from '../definition'
import type { AbilityDefinition, CharacterInfo } from '../definition'
import type { SkillClass } from '../../game/types'

// 1. PERSONAGEM — história, retrato e requisito de desbloqueio.
const characterId = 'kakashi'
const characterInfo: CharacterInfo = {
  name: 'Hatake Kakashi',
  image: portrait,
  description: 'Líder do Time 7, conhecido como Copy Ninja, Kakashi coloca a vida de seus companheiros acima de tudo. É capaz de copiar técnicas inimigas e utiliza sua técnica original, Raikiri.',
  unlockRequirement: { type: 'mission', missionId: 'team-7-fights-as-a-team' },
}

// 2. HABILIDADE 1 — SHARINGAN REFLECT
const reflectTurns = 1
const reflectClasses = ['physical', 'chakra', 'mental'] as SkillClass[]
const reflect: AbilityDefinition = {
  skill: {
    id: `${characterId}-reflect`,
    name: 'Sharingan Reflect',
    description: `Kakashi reflete as novas habilidades inimigas das classes ${formatSkillClasses(reflectClasses)} que o atingirem ${duration(reflectTurns)}, devolvendo seus efeitos ao atacante. Não remove efeitos anteriores. A proteção fica invisível para o adversário. Habilidades Control refletidas perdem a conexão e são canceladas.`,
    image: skill1Image,
    cost: {
      specific: {
        bloodline: 1
      }
    },
    cooldown: 2,
    target: 'self',
    classes: ['mental', 'instant'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-reflect`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-reflect`,
    indicatorNote: 'Habilidades Control refletidas são canceladas. Não remove efeitos anteriores.',
    name: 'Sharingan Reflect',
    invisible: true,
    duration: {
      type: 'opponent-turns',
      turns: reflectTurns
    },
    modifiers: [
      {
        type: 'reflect',
        classes: reflectClasses
      }
    ]
  }]
}

// 3. HABILIDADE 2 — SUMMONING: NINJA DOGS
const dogsTurns = 1
const dogsStunClasses = ['physical', 'chakra', 'mental'] as SkillClass[]
const dogs: AbilityDefinition = {
  skill: {
    id: `${characterId}-dogs`,
    name: 'Summoning: Ninja Dogs',
    description: `Prende um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(dogsStunClasses)}. A prisão permanece ${duration(dogsTurns, "owner-turns", "Kakashi")}. Na jogada seguinte deste Kakashi, Raikiri mata esse alvo instantaneamente se os cães ainda estiverem ativos. Por ser Control, termina se Kakashi morrer ou ficar impedido de manter Ninja Dogs por stun, ou se o alvo ficar invulnerável. Imunidade a stun impede a prisão.`,
    image: skill2Image,
    cost: {
      specific: {
        ninjutsu: 1
      },
      random: 1
    },
    cooldown: 2,
    target: 'enemy',
    classes: ['mental', 'control', 'ranged'],
    effects: [
      {
        type: 'apply-status',
        statusId: `${characterId}-dogs`
      }
    ]
  },
  statuses: [{
    id: `${characterId}-dogs`,
    indicatorNote: 'Na próxima jogada do Kakashi que aplicou os cães, Raikiri pode executar este alvo.',
    name: 'Summoning: Ninja Dogs',
    control: true,
    endsWhenSourceDies: true,
    duration: {
      type: 'owner-turns',
      turns: dogsTurns
    },
    modifiers: [
      {
        type: 'stun',
        classes: dogsStunClasses
      }
    ]
  }]
}

// 4. HABILIDADE 3 — RAIKIRI
const raikiriDamage = 50
const raikiri: AbilityDefinition = {
  skill: {
    id: `${characterId}-raikiri`,
    name: 'Raikiri',
    description: `Causa ${n(raikiriDamage)} de dano piercing a um inimigo, ignorando redução de dano. Se o alvo ainda estiver preso pelo Ninja Dogs usado por este Kakashi na jogada anterior dele, mata o alvo instantaneamente. Não ignora invulnerabilidade.`,
    image: skill3Image,
    cost: {
      specific: {
        ninjutsu: 1,
        taijutsu: 1
      }
    },
    cooldown: 1,
    target: 'enemy',
    classes: ['chakra', 'instant', 'melee'],
    effects: [
      {
        type: 'damage',
        amount: raikiriDamage,
        damageType: 'piercing',
        executeIf: {
          statusId: `${characterId}-dogs`,
          fromSourceOnly: true,
          previousUserTurn: true
        }
      }
    ]
  },
}

// 5. HABILIDADE 4 — CLEVER HIDING
const hidingTurns = 1
const hiding: AbilityDefinition = {
  skill: {
    id: `${characterId}-hiding`,
    name: 'Clever Hiding',
    description: `Kakashi fica invulnerável às novas habilidades inimigas ${duration(hidingTurns)}. Não remove efeitos já aplicados.`,
    image: skill4Image,
    cost: {
      random: 1
    },
    cooldown: 4,
    target: 'self',
    classes: ['mental', 'instant'],
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
      turns: hidingTurns
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
  order: 40,
  abilities: [reflect, dogs, raikiri, hiding],
})

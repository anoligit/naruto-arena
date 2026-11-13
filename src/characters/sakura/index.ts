import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import type { SkillDefinition, StatusDefinition, SkillClass } from '../../game/types'
import { characterWithSkills, defineCharacter } from '../definition'
import portrait from './images/sakura_char_1.jpg'
import skill1Image from './images/sakura_skill_1.jpg'
import skill2Image from './images/sakura_skill_2.jpg'
import skill3Image from './images/sakura_skill_3.jpg'
import skill4Image from './images/sakura_skill_4.jpg'

// Identificador único: altere ao copiar esta pasta para criar outro personagem.
const characterId = 'sakura'

// Balanceamento: estes valores alimentam o combate e as descrições.
export const sakuraBalance = {
  punch: { damage: 15, stunTurns: 1, stunClasses: ['physical', 'mental'] as SkillClass[] },
  cure: { heal: 25 },
  inner: { reductionPercent: 25, turns: 4, punchMultiplier: 2 },
  replacement: { turns: 1 },
}

// Habilidades: custos, recargas, classes e efeitos aplicados.
export const sakuraSkills: SkillDefinition[] = [
  {
    id: `${characterId}-ko-punch`,
    name: 'KO Punch',
    description: `Sakura causa ${n(sakuraBalance.punch.damage)} de dano físico a um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(sakuraBalance.punch.stunClasses)} ${duration(sakuraBalance.punch.stunTurns)}. Com Inner Sakura ativo, o dano aumenta para ${n(sakuraBalance.punch.damage * sakuraBalance.inner.punchMultiplier)}. Não bloqueia habilidades que não tenham essas classes.`,
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
        amount: sakuraBalance.punch.damage,
        damageType: 'normal'
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-ko-punch-stun`
      }
    ]
  },
  {
    id: `${characterId}-cure`,
    name: 'Cure',
    description: `Recupera ${n(sakuraBalance.cure.heal)} pontos de vida de um aliado vivo, incluindo a própria Sakura. A cura não pode ultrapassar a vida máxima e não revive personagens derrotados.`,
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
        amount: sakuraBalance.cure.heal
      }
    ]
  },
  {
    id: `${characterId}-inner`,
    name: 'Inner Sakura',
    description: `Sakura recebe ${n(sakuraBalance.inner.reductionPercent)}% de redução de dano e fica imune a stun ${duration(sakuraBalance.inner.turns)}; seu KO Punch passa a causar ${n(sakuraBalance.punch.damage * sakuraBalance.inner.punchMultiplier)} de dano. O efeito começa na execução. A redução não afeta dano piercing ou affliction.`,
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
  {
    id: `${characterId}-replacement`,
    name: 'Replacement Technique',
    description: `Sakura fica invulnerável às novas habilidades inimigas ${duration(sakuraBalance.replacement.turns)}. Não remove efeitos que já estavam aplicados.`,
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
  }
]

// Efeitos persistentes usados pelas habilidades acima.
export const sakuraStatuses: StatusDefinition[] = [
  {
    id: `${characterId}-inner`,
    indicatorNote: 'A proteção e o aumento de dano valem enquanto este efeito permanecer ativo.',
    name: 'Inner Sakura',
    duration: {
      type: 'opponent-turns',
      turns: sakuraBalance.inner.turns
    },
    modifiers: [
      {
        type: 'damage-reduction-percent',
        percent: sakuraBalance.inner.reductionPercent
      },
      {
        type: 'stun-immunity'
      },
      {
        type: 'damage-multiplier',
        skillId: `${characterId}-ko-punch`,
        multiplier: sakuraBalance.inner.punchMultiplier
      }
    ]
  },
  {
    id: `${characterId}-invulnerable`,
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Invulnerabilidade',
    duration: {
      type: 'opponent-turns',
      turns: sakuraBalance.replacement.turns
    },
    modifiers: [
      {
        type: 'invulnerable'
      }
    ]
  },
  {
    id: `${characterId}-ko-punch-stun`,
    indicatorNote: 'Habilidades sem essas classes continuam disponíveis.',
    name: 'Stun: Physical e Mental',
    duration: {
      type: 'opponent-turns',
      turns: sakuraBalance.punch.stunTurns
    },
    modifiers: [
      {
        type: 'stun',
        classes: sakuraBalance.punch.stunClasses
      }
    ]
  }
]

// Cadastro do personagem: retrato, descrição e habilidades.
export const sakura = characterWithSkills(characterId, 'Haruno Sakura', portrait, 'Genin do Time 7, Sakura é muito inteligente, mas insegura consigo mesma. Após iniciar seu treinamento com Tsunade, tornou-se capaz de desferir socos poderosos e curar seus aliados.', sakuraSkills)


// Registro automático: este bloco inclui o personagem e seus efeitos no jogo.
export default defineCharacter({
  character: sakura,
  statuses: sakuraStatuses,
  order: 30,
})

import { n, duration } from '../description'
import { formatSkillClasses } from '../../game/classes'
import type { SkillDefinition, StatusDefinition, SkillClass } from '../../game/types'
import { characterWithSkills, defineCharacter } from '../definition'
import portrait from './images/naruto_char_1.jpg'
import comboImage from './images/naruto_skill_1.jpg'
import rasenganImage from './images/naruto_skill_2.jpg'
import clonesImage from './images/naruto_skill_3.jpg'
import sexyImage from './images/naruto_skill_4.jpg'

// Identificador único: altere ao copiar esta pasta para criar outro personagem.
const characterId = 'naruto'

// Balanceamento: estes valores alimentam o combate e as descrições.
export const narutoBalance = {
  combo: { damage: 15 },
  rasengan: { damage: 40, stunTurns: 1, stunClasses: ['physical', 'chakra'] as SkillClass[] },
  clones: { reduction: 15, turns: 4, comboMultiplier: 2 },
  sexy: { turns: 1 },
}

// Habilidades: custos, recargas, classes e efeitos aplicados.
export const narutoSkills: SkillDefinition[] = [
  {
    id: `${characterId}-combo`,
    name: 'Uzumaki Naruto Combo',
    description:
      `Causa ${n(narutoBalance.combo.damage)} de dano físico a um inimigo. Enquanto Shadow Clones estiver ativo em Naruto, causa ${n(narutoBalance.combo.damage * narutoBalance.clones.comboMultiplier)} de dano.`,
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
        amount: narutoBalance.combo.damage,
        damageType: 'normal',
      },
    ],
  },
  {
    id: `${characterId}-rasengan`,
    name: 'Rasengan',
    description:
      `Requer Shadow Clones ativo em Naruto. Causa ${n(narutoBalance.rasengan.damage)} de dano a um inimigo e impede o uso das habilidades das classes ${formatSkillClasses(narutoBalance.rasengan.stunClasses)} ${duration(narutoBalance.rasengan.stunTurns)}. Habilidades sem essas classes não são bloqueadas.`,
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
        amount: narutoBalance.rasengan.damage,
        damageType: 'normal',
      },
      {
        type: 'apply-status',
        statusId: `${characterId}-rasengan-stun`,
      },
    ],
  },
  {
    id: `${characterId}-clones-skill`,
    name: 'Shadow Clones',
    description:
      `Naruto recebe ${n(narutoBalance.clones.reduction)} pontos de redução de dano ${duration(narutoBalance.clones.turns)}. O efeito começa na execução. Enquanto estiver ativo, Uzumaki Naruto Combo causa ${n(narutoBalance.combo.damage * narutoBalance.clones.comboMultiplier)} de dano e Rasengan fica disponível. A redução não afeta dano piercing ou affliction.`,
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
  {
    id: `${characterId}-sexy`,
    name: 'Sexy Technique',
    description:
      `Naruto fica invulnerável às novas habilidades inimigas ${duration(narutoBalance.sexy.turns)}. Não remove efeitos que já estavam aplicados.`,
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
]

// Efeitos persistentes usados pelas habilidades acima.
export const narutoStatuses: StatusDefinition[] = [
  {
    id: `${characterId}-clones`,
    indicatorNote: 'Permite usar Rasengan enquanto este efeito permanecer ativo.',
    name: 'Clones das Sombras',
    duration: {
      type: 'opponent-turns',
      turns: narutoBalance.clones.turns,
    },
    modifiers: [
      {
        type: 'damage-reduction',
        amount: narutoBalance.clones.reduction,
      },
      {
        type: 'damage-multiplier',
        skillId: `${characterId}-combo`,
        multiplier: narutoBalance.clones.comboMultiplier,
      },
    ],
  },
  {
    id: `${characterId}-rasengan-stun`,
    indicatorNote: 'Habilidades sem essas classes continuam disponíveis.',
    name: 'Rasengan',
    duration: { type: 'opponent-turns', turns: narutoBalance.rasengan.stunTurns },
    modifiers: [{ type: 'stun', classes: narutoBalance.rasengan.stunClasses }],
  },
  {
    id: `${characterId}-sexy-invulnerable`,
    indicatorNote: 'Não remove efeitos já aplicados.',
    name: 'Sexy Technique',
    duration: { type: 'opponent-turns', turns: narutoBalance.sexy.turns },
    modifiers: [{ type: 'invulnerable' }],
  },
]

// Cadastro do personagem: retrato, descrição e habilidades.
export const naruto = characterWithSkills(characterId, 'Uzumaki Naruto', portrait,
    'Genin do Time 7, Naruto é um órfão que sonha em se tornar Hokage. Sua técnica característica, Shadow Clones, permite que ele utilize golpes poderosos como Uzumaki Naruto Combo e Rasengan.', narutoSkills)


// Registro automático: este bloco inclui o personagem e seus efeitos no jogo.
export default defineCharacter({
  character: naruto,
  statuses: narutoStatuses,
  order: 10,
})

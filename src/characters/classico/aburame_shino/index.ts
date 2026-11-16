// Versão Clássico. Regras independentes da versão anterior.
import portrait from './aburame_shino_char_1.png'
import leachImage from './aburame_shino_skill_1_(chakra_leach).png'
import femaleImage from './aburame_shino_skill_2_(female_bug).png'
import wallImage from './aburame_shino_skill_3_(bug_wall).png'
import cloneImage from './aburame_shino_skill_4_(bug_clone).png'
import { defineCharacter } from '../../definition'
import type { AbilityDefinition } from '../../definition'
import { n, duration } from '../../description'

// 1. IDENTIFICADORES E VALORES COMPARTILHADOS ENTRE AS HABILIDADES
const characterId = 'classico-shino'
const leachId = `${characterId}-chakra-leach`
const femaleStatus = `${characterId}-female-bug`
const leachAmount = 20
const femaleBonus = 5

// 2. HABILIDADE 1 — CHAKRA LEACH
const leach: AbilityDefinition = {
  skill: {
    id: leachId, name: 'Chakra Leach', image: leachImage,
    description: `Rouba ${n(leachAmount)} de vida de um inimigo como dano affliction e cura Shino pela vida efetivamente retirada, sem ultrapassar sua vida máxima ou revivê-lo. Rouba também 1 energia Taijutsu ou Genjutsu disponível na equipe inimiga e transfere para sua equipe. Se houver as duas cores, sorteia uma; se não houver nenhuma, ainda rouba a vida. Female Bug deste Shino aumenta o roubo de vida em ${n(femaleBonus)}.`,
    cost: { specific: { bloodline: 1 }, random: 1 }, cooldown: 0,
    target: 'enemy', classes: ['affliction', 'instant', 'ranged'],
    effects: [{ type: 'steal-health', amount: leachAmount }, { type: 'steal-energy', amount: 1, types: ['taijutsu', 'genjutsu'] }],
  },
}

// 3. HABILIDADE 2 — FEMALE BUG
const femaleTurns = 3
const femalePenalty = 5
const female: AbilityDefinition = {
  skill: {
    id: `${characterId}-female-bug-skill`, name: 'Female Bug', image: femaleImage,
    description: `Marca um inimigo ${duration(femaleTurns)}. Chakra Leach deste Shino rouba ${n(femaleBonus)} de vida adicional desse alvo. Ao usar uma nova habilidade ofensiva depois da marca, esse inimigo passa a causar ${n(femalePenalty)} a menos de dano normal e piercing até o fim daquela jogada; a própria habilidade que ativou a penalidade é afetada. Não reduz affliction e não é ativada por dano contínuo de habilidades anteriores. Não pode ser usada em um alvo já afetado por Female Bug.`,
    cost: {}, cooldown: 1, target: 'enemy', classes: ['affliction', 'instant', 'ranged'],
    targetMustLackStatus: femaleStatus,
    effects: [{ type: 'apply-status', statusId: femaleStatus }],
  },
  statuses: [
    { id: femaleStatus, name: 'Female Bug', duration: { type: 'opponent-turns', turns: femaleTurns },
      indicatorNote: `Uma nova habilidade ofensiva usada após esta marca causa ${n(femalePenalty)} a menos de dano não affliction até o fim daquela jogada. Danos contínuos anteriores não ativam a penalidade.`,
      modifiers: [
        { type: 'damage-taken-bonus', skillId: leachId, amount: femaleBonus, fromSourceOnly: true },
        { type: 'on-harmful-skill', statusId: `${characterId}-female-weakness` },
      ],
    },
    { id: `${characterId}-female-weakness`, name: 'Female Bug: enfraquecimento',
      duration: { type: 'opponent-turns', turns: 1 },
      modifiers: [{ type: 'outgoing-damage-reduction', amount: femalePenalty, excludesAffliction: true }],
    },
  ],
}

// 4. HABILIDADE 3 — BUG WALL
const wallDefense = 25
const wall: AbilityDefinition = {
  skill: {
    id: `${characterId}-bug-wall`, name: 'Bug Wall', image: wallImage,
    description: `Concede ${n(wallDefense)} pontos de defesa destrutível a Shino e a todos os aliados vivos. A defesa não expira por turnos e acumula com novas utilizações. Absorve dano normal e piercing até ser destruída; affliction a ignora. A defesa continua após a morte de Shino e não é uma redução de dano.`,
    cost: { specific: { bloodline: 1 }, random: 1 }, cooldown: 3,
    target: 'ally', targetExpansion: { target: 'all-living-allies' }, classes: ['physical', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-bug-defense` }],
  },
  statuses: [{ id: `${characterId}-bug-defense`, name: 'Bug Wall',
    duration: { type: 'permanent', turns: 0 },
    modifiers: [{ type: 'destructible-defense', amount: wallDefense }],
  }],
}

// 5. HABILIDADE 4 — BUG CLONE
const clone: AbilityDefinition = {
  skill: {
    id: `${characterId}-bug-clone`, name: 'Bug Clone', image: cloneImage,
    description: `Shino fica invulnerável a novas habilidades inimigas ${duration(1)}. Não remove efeitos já aplicados.`,
    cost: { random: 1 }, cooldown: 4, target: 'self', classes: ['chakra', 'instant'],
    effects: [{ type: 'apply-status', statusId: `${characterId}-bug-clone-invulnerable` }],
  },
  statuses: [{ id: `${characterId}-bug-clone-invulnerable`, name: 'Bug Clone', duration: { type: 'opponent-turns', turns: 1 }, modifiers: [{ type: 'invulnerable' }] }],
}

// ORDEM NA LISTA: para mover só este personagem, use order: { position: 4 }, por exemplo.
export default defineCharacter({
  id: characterId, name: 'Aburame Shino', image: portrait,
  description: 'Um Genin do Time 8, Shino é o sucessor do clã Aburame e um lutador muito reservado e tático. Usando os insetos que vivem dentro de seu corpo, Shino é capaz de drenar a energia dos inimigos e proteger toda a sua equipe.',
  unlockRequirement: { type: 'none' }, order: 6,
  abilities: [leach, female, wall, clone],
})

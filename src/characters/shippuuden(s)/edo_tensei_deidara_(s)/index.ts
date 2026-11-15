// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Deidara (S)",
  "description": "Edo Tensei Deidara (S) has been revived and is immediately sent out to battle. Fighting on the front lines is nothing new to this old soul.",
  "descriptionBR": "Edo Tensei Deidara (S) foi revivido e imediatamente enviado para a batalha. Lutar na linha de frente não é novidade para essa alma antiga.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_deidara_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Katsu!",
      "file": "edo_tensei_deidara_(s)_skill_1_(katsu!).jpg",
      "description": "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
      "descriptionBR": "Deidara detona todas as suas bombas criando uma grande explosão, primeiro tornando-se invulnerável por 1 turno e depois causando 5 de dano perfurante a todos os inimigos. Após isso, todos os stacks das habilidades de Deidara serão removidos. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
      "descriptionBRRaw": "Deidara detona todas as suas bombas criando uma grande explosão, primeiro tornando-se invulnerável por 1 turno e depois causando 5 de dano perfurante a todos os inimigos. Após isso, todos os stacks das habilidades de Deidara serão removidos. Esta habilidade não pode ser counterada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara detona todas as suas bombas criando uma grande explosão, primeiro tornando-se invulnerável por 1 turno e depois causando 5 de dano perfurante a todos os inimigos. Após isso, todos os stacks das habilidades de Deidara serão removidos. Esta habilidade não pode ser counterada. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Bat Bombs",
      "file": "edo_tensei_deidara_(s)_skill_2_(bat_bombs).jpg",
      "description": "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
      "descriptionBR": "Deidara causa 10 de dano de affliction a todos os inimigos. Permanentemente, 'Katsu!' causará 5 de dano adicional a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá 15 de dano adicional de 'Katsu!'. No turno seguinte, 'Jellyfish Explosives' causará 5 de dano adicional.",
      "descriptionRaw": "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
      "descriptionBRRaw": "Deidara causa 10 de dano de affliction a todos os inimigos. Permanentemente, 'Katsu!' causará 5 de dano adicional a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá 15 de dano adicional de 'Katsu!'. No turno seguinte, 'Jellyfish Explosives' causará 5 de dano adicional.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara causa 10 de dano de affliction a todos os inimigos. Permanentemente, 'Katsu!' causará 5 de dano adicional a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá 15 de dano adicional de 'Katsu!'. No turno seguinte, 'Jellyfish Explosives' causará 5 de dano adicional. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Jellyfish Explosives",
      "file": "edo_tensei_deidara_(s)_skill_3_(jellyfish_explosives).png",
      "description": "Deidara deals 25 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
      "descriptionBR": "Deidara causa 25 de dano perfurante a um inimigo. Permanentemente, 'Katsu!' causará 10 de dano adicional a esse inimigo. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá permanentemente 10 de dano adicional de 'Katsu!'. No turno seguinte, 'Bat Bombs' causará 5 de dano adicional.",
      "descriptionRaw": "Deidara deals 25 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
      "descriptionBRRaw": "Deidara causa 25 de dano perfurante a um inimigo. Permanentemente, 'Katsu!' causará 10 de dano adicional a esse inimigo. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá permanentemente 10 de dano adicional de 'Katsu!'. No turno seguinte, 'Bat Bombs' causará 5 de dano adicional.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Deidara deals 25 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara causa 25 de dano perfurante a um inimigo. Permanentemente, 'Katsu!' causará 10 de dano adicional a esse inimigo. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá permanentemente 10 de dano adicional de 'Katsu!'. No turno seguinte, 'Bat Bombs' causará 5 de dano adicional. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chakra Clay Trap",
      "file": "edo_tensei_deidara_(s)_skill_4_(chakra_clay_trap).jpg",
      "description": "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 10 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The skill is invisible.",
      "descriptionBR": "Deidara cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, será counterado e receberá 10 de dano perfurante. Permanentemente, o inimigo counterado receberá 10 de dano adicional de 'Katsu!'. A habilidade é invisível.",
      "descriptionRaw": "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 10 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The skill is invisible.",
      "descriptionBRRaw": "Deidara cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, será counterado e receberá 10 de dano perfurante. Permanentemente, o inimigo counterado receberá 10 de dano adicional de 'Katsu!'. A habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 10 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, será counterado e receberá 10 de dano perfurante. Permanentemente, o inimigo counterado receberá 10 de dano adicional de 'Katsu!'. A habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

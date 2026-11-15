// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Animal Path Pein (S)",
  "description": "Animal Path Pein (S) is one of the six paths of Pein. This Path is able to summon a variety of different beasts for different purposes.",
  "descriptionBR": "Animal Path Pein (S) é um dos seis caminhos de Pein. Este caminho é capaz de invocar uma variedade de bestas diferentes para diversos propósitos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "animal_path_pein_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Cerberus Hydra",
      "file": "animal_path_pein_(s)_skill_1_(cerberus_hydra).jpg",
      "description": "Animal Path Pein summons a giant multiple headed dog, dealing 20 damage to all enemies. For 2 turns, any enemy that uses a skill will be dealt 15 piercing damage.",
      "descriptionBR": "Animal Path Pein invoca um cão gigante de várias cabeças, causando 20 de dano a todos os inimigo. Por 2 turnos, qualquer inimigo que usar uma habilidade receberá 15 de dano perfurante.",
      "descriptionRaw": "Animal Path Pein summons a giant multiple headed dog, dealing 20 damage to all enemies. For 2 turns, any enemy that uses a skill will be dealt 15 piercing damage.",
      "descriptionBRRaw": "Animal Path Pein invoca um cão gigante de várias cabeças, causando 20 de dano a todos os inimigo. Por 2 turnos, qualquer inimigo que usar uma habilidade receberá 15 de dano perfurante.",
      "energy": [
        "Blood",
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Animal Path Pein summons a giant multiple headed dog, dealing 20 damage to all enemies. For 2 turns, any enemy that uses a skill will be dealt 15 piercing damage. Chakra cost: 1 Blood, 1 Nin. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Animal Path Pein invoca um cão gigante de várias cabeças, causando 20 de dano a todos os inimigo. Por 2 turnos, qualquer inimigo que usar uma habilidade receberá 15 de dano perfurante. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Drill Bird",
      "file": "animal_path_pein_(s)_skill_2_(drill_bird).jpg",
      "description": "Animal Path Pein summons a giant drill-beaked bird, dealing 20 damage to one enemy and 20 damage to another random enemy for 2 turns. The following turn, 'Cerberus Hydra' will cost 1 ninjutsu and 1 random chakra instead.",
      "descriptionBR": "Animal Path Pein invoca um pássaro gigante com bico perfurante, causando 20 de dano a um inimigo e 20 de dano a um outro inimigo aleatório por 2 turnos. No próximo turno, 'Cerberus Hydra' irá custar 1 ninjutsu e 1 random chakra.",
      "descriptionRaw": "Animal Path Pein summons a giant drill-beaked bird, dealing 20 damage to one enemy and 20 damage to another random enemy for 2 turns. The following turn, 'Cerberus Hydra' will cost 1 ninjutsu and 1 random chakra instead.",
      "descriptionBRRaw": "Animal Path Pein invoca um pássaro gigante com bico perfurante, causando 20 de dano a um inimigo e 20 de dano a um outro inimigo aleatório por 2 turnos. No próximo turno, 'Cerberus Hydra' irá custar 1 ninjutsu e 1 random chakra.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Animal Path Pein summons a giant drill-beaked bird, dealing 20 damage to one enemy and 20 damage to another random enemy for 2 turns. The following turn, 'Cerberus Hydra' will cost 1 ninjutsu and 1 random chakra instead. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Animal Path Pein invoca um pássaro gigante com bico perfurante, causando 20 de dano a um inimigo e 20 de dano a um outro inimigo aleatório por 2 turnos. No próximo turno, 'Cerberus Hydra' irá custar 1 ninjutsu e 1 random chakra. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Invisible Chameleon",
      "file": "animal_path_pein_(s)_skill_3_(invisible_chameleon).jpg",
      "description": "Animal Path Pein summons his chameleon, protecting himself or an ally. For 4 turns, that ally will ignore stun effects and gains 50% damage reduction. This skill is invisible.",
      "descriptionBR": "Animal Path Pein invoca um camaleão, protegendo a si mesmo ou um aliado. Por 4 turnos, esse aliado irá ignorar efeitos de atordoamento e receberá 50% de redução de dano. Essa habilidade é invisível.",
      "descriptionRaw": "Animal Path Pein summons his chameleon, protecting himself or an ally. For 4 turns, that ally will ignore stun effects and gains 50% damage reduction. This skill is invisible.",
      "descriptionBRRaw": "Animal Path Pein invoca um camaleão, protegendo a si mesmo ou um aliado. Por 4 turnos, esse aliado irá ignorar efeitos de atordoamento e receberá 50% de redução de dano. Essa habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Animal Path Pein summons his chameleon, protecting himself or an ally. For 4 turns, that ally will ignore stun effects and gains 50% damage reduction. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Animal Path Pein invoca um camaleão, protegendo a si mesmo ou um aliado. Por 4 turnos, esse aliado irá ignorar efeitos de atordoamento e receberá 50% de redução de dano. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Panda Defense",
      "file": "animal_path_pein_(s)_skill_4_(panda_defense).jpg",
      "description": "This skill can be used on himself or an ally, making himself or that ally invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Animal Path Pein (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill can be used on himself or an ally, making himself or that ally <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Animal Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill can be used on himself or an ally, making himself or that ally invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Animal Path Pein (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

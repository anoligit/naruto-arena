// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hachibi Bee (S)",
  "description": "Having fully bonded with and gained control of the Eight-Tails, Gyuuki, and thus having become what is known as a perfect jinchuuriki, Killer Bee is able to use its abilities to their fullest extent. Using the Eight-Tails' protective chakra to gradually become much stronger, Bee can run a rampage on the battlefield.",
  "descriptionBR": "Tendo se ligado completamente e obtido controle sobre o Oito-Caudas, Gyuuki, e assim se tornado o que é conhecido como um jinchuuriki perfeito, Killer Bee é capaz de utilizar suas habilidades em sua plenitude. Utilizando o chakra protetor do Oito-Caudas para gradualmente se tornar muito mais forte, Bee pode causar um verdadeiro alvoroço no campo de batalha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hachibi_bee_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hachibi Chakra Bones",
      "file": "hachibi_bee_(s)_skill_1_(hachibi_chakra_bones).png",
      "description": "Hachibi Bee enables his skills and gains 1 Hachibe Stack. At 1 Hachibi Stack, he gains 5 points of unpierceable damage reduction. At 2 Hachibi Stacks, he gains 30% unpierceable damage reduction. At 3 Hachibi Stacks, he gains 50% unpierceable damage reduction and heals 5 health.",
      "descriptionBR": "Hachibi Bee ativa suas habilidades e ganha 1 Hachibe Stack. Com 1 Hachibi Stack, ele ganha 5 pontos de redução de dano inquebrável. Com 2 Hachibi Stacks, ele ganha 30% de redução de dano inquebrável. Com 3 Hachibi Stacks, ele ganha 50% de redução de dano inquebrável e cura 5 de vida.",
      "descriptionRaw": "Hachibi Bee enables his skills and gains 1 Hachibe Stack. At 1 Hachibi Stack, he gains 5 points of unpierceable damage reduction. At 2 Hachibi Stacks, he gains 30% unpierceable damage reduction. At 3 Hachibi Stacks, he gains 50% unpierceable damage reduction and heals 5 health.",
      "descriptionBRRaw": "Hachibi Bee ativa suas habilidades e ganha 1 Hachibe Stack. Com 1 Hachibi Stack, ele ganha 5 pontos de redução de dano inquebrável. Com 2 Hachibi Stacks, ele ganha 30% de redução de dano inquebrável. Com 3 Hachibi Stacks, ele ganha 50% de redução de dano inquebrável e cura 5 de vida.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Hachibi Bee enables his skills and gains 1 Hachibe Stack. At 1 Hachibi Stack, he gains 5 points of unpierceable damage reduction. At 2 Hachibi Stacks, he gains 30% unpierceable damage reduction. At 3 Hachibi Stacks, he gains 50% unpierceable damage reduction and heals 5 health. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hachibi Bee ativa suas habilidades e ganha 1 Hachibe Stack. Com 1 Hachibi Stack, ele ganha 5 pontos de redução de dano inquebrável. Com 2 Hachibi Stacks, ele ganha 30% de redução de dano inquebrável. Com 3 Hachibi Stacks, ele ganha 50% de redução de dano inquebrável e cura 5 de vida. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lariat",
      "file": "hachibi_bee_(s)_skill_2_(lariat).png",
      "description": "Bee decapitates an enemy, healing 10 health and dealing 30 damage to that enemy. At 2 Hachibi Stacks, this skill will instead deal 40 damage to one enemy and stuns the harmful skills of all other enemies for 1 turn; At 3 Hachibi Stacks, deals 65 piercing damage to one enemy ignoring invulnerability.",
      "descriptionBR": "Bee decapita um inimigo, curando 10 de vida e causando 30 de dano a esse inimigo; Com 2 Hachibi Stacks, esta habilidade causará 40 de dano a um inimigo e atordoa as habilidades ofensivas de todos os outros inimigos por 1 turno; Com 3 Hachibi Stacks, causa 65 de dano perfurante a um inimigo ignorando invulnerabilidade.",
      "descriptionRaw": "Bee decapitates an enemy, healing 10 health and dealing 30 damage to that enemy. At 2 Hachibi Stacks, this skill will instead deal 40 damage to one enemy and stuns the harmful skills of all other enemies for 1 turn; At 3 Hachibi Stacks, deals 65 piercing damage to one enemy ignoring invulnerability.",
      "descriptionBRRaw": "Bee decapita um inimigo, curando 10 de vida e causando 30 de dano a esse inimigo; Com 2 Hachibi Stacks, esta habilidade causará 40 de dano a um inimigo e atordoa as habilidades ofensivas de todos os outros inimigos por 1 turno; Com 3 Hachibi Stacks, causa 65 de dano perfurante a um inimigo ignorando invulnerabilidade.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Bee decapitates an enemy, healing 10 health and dealing 30 damage to that enemy. At 2 Hachibi Stacks, this skill will instead deal 40 damage to one enemy and stuns the harmful skills of all other enemies for 1 turn; At 3 Hachibi Stacks, deals 65 piercing damage to one enemy ignoring invulnerability. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee decapita um inimigo, curando 10 de vida e causando 30 de dano a esse inimigo; Com 2 Hachibi Stacks, esta habilidade causará 40 de dano a um inimigo e atordoa as habilidades ofensivas de todos os outros inimigos por 1 turno; Com 3 Hachibi Stacks, causa 65 de dano perfurante a um inimigo ignorando invulnerabilidade. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Hachibi Tailed Beast Bomb",
      "file": "hachibi_bee_(s)_skill_3_(hachibi_tailed_beast_bomb).png",
      "description": "Bee fires a concentrated energy bomb, healing 10 health and then dealing 20 damage to all enemies; At 2 Hachibi Stacks, this skill will instead deal 20 affliction damage to all enemies for 2 turns (Action classed); At 3 Hachibi Stacks, this skill will instead deal 40 damage to all enemies.",
      "descriptionBR": "Bee dispara uma bomba de energia concentrada, curando 10 de vida e depois causando 20 de dano a todos os inimigos; Com 2 Hachibi Stacks, esta habilidade causará 20 de dano affliction a todos os inimigos por 2 turnos (classificada como Ação); Com 3 Hachibi Stacks, esta habilidade causará 40 de dano a todos os inimigos.",
      "descriptionRaw": "Bee fires a concentrated energy bomb, healing 10 health and then dealing 20 damage to all enemies; At 2 Hachibi Stacks, this skill will instead deal 20 affliction damage to all enemies for 2 turns (Action classed); At 3 Hachibi Stacks, this skill will instead deal 40 damage to all enemies.",
      "descriptionBRRaw": "Bee dispara uma bomba de energia concentrada, curando 10 de vida e depois causando 20 de dano a todos os inimigos; Com 2 Hachibi Stacks, esta habilidade causará 20 de dano affliction a todos os inimigos por 2 turnos (classificada como Ação); Com 3 Hachibi Stacks, esta habilidade causará 40 de dano a todos os inimigos.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Affliction*",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Bee fires a concentrated energy bomb, healing 10 health and then dealing 20 damage to all enemies; At 2 Hachibi Stacks, this skill will instead deal 20 affliction damage to all enemies for 2 turns (Action classed); At 3 Hachibi Stacks, this skill will instead deal 40 damage to all enemies. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Affliction*, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee dispara uma bomba de energia concentrada, curando 10 de vida e depois causando 20 de dano a todos os inimigos; Com 2 Hachibi Stacks, esta habilidade causará 20 de dano affliction a todos os inimigos por 2 turnos (classificada como Ação); Com 3 Hachibi Stacks, esta habilidade causará 40 de dano a todos os inimigos. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Affliction*, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hachibi Tails Block",
      "file": "hachibi_bee_(s)_skill_4_(hachibi_tails_block).png",
      "description": "This skill makes Hachibi Bee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hachibi Bee (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hachibi Bee (S) invulnerable for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hachibi Bee (S) invulnerável por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hachibi Bee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hachibi Bee (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

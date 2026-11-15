// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nii Yugito (S)",
  "description": "A kunoichi from Kumogakure, Nii Yugito holds within her the two-tailed beast. She has full control over the bijuu Nibi, and is able to transform into it and use its powers to fight.",
  "descriptionBR": "Uma kunoichi de Kumogakure, Nii Yugito possui a besta de duas caudas dentro de si. Ela tem controle total sobre o bijuu Nibi e é capaz de se transformar nele e usar seus poderes para lutar.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "nii_yugito_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Nibi Transformation",
      "file": "nii_yugito_(s)_skill_1_(nibi_transformation).jpeg",
      "description": "Yugito gains 5 points of damage reduction and targets all enemies. Every time an enemy uses a new harmful skill, Yugito will deal 5 additional damage for 1 turn. While active, this skill can be used to heal 20 health and grant 50% unpierceable damage reduction for 1 turn. This skill ignores invulnerability.",
      "descriptionBR": "Yugito ganha 5 pontos de redução de dano e mira em todos os inimigos. Cada vez que um inimigo usa uma nova habilidade ofensiva, Yugito causa 5 pontos de dano adicionais por 1 turno. Enquanto ativa, esta habilidade pode ser usada para curar 20 de vida e conceder 50% de redução de dano intransponível por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Yugito gains 5 points of damage reduction and targets all enemies. Every time an enemy uses a new harmful skill, Yugito will deal 5 additional damage for 1 turn. While active, this skill can be used to heal 20 health and grant 50% unpierceable damage reduction for 1 turn. This skill ignores invulnerability.",
      "descriptionBRRaw": "Yugito ganha 5 pontos de redução de dano e mira em todos os inimigos. Cada vez que um inimigo usa uma nova habilidade ofensiva, Yugito causa 5 pontos de dano adicionais por 1 turno. Enquanto ativa, esta habilidade pode ser usada para curar 20 de vida e conceder 50% de redução de dano intransponível por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Yugito gains 5 points of damage reduction and targets all enemies. Every time an enemy uses a new harmful skill, Yugito will deal 5 additional damage for 1 turn. While active, this skill can be used to heal 20 health and grant 50% unpierceable damage reduction for 1 turn. This skill ignores invulnerability. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito ganha 5 pontos de redução de dano e mira em todos os inimigos. Cada vez que um inimigo usa uma nova habilidade ofensiva, Yugito causa 5 pontos de dano adicionais por 1 turno. Enquanto ativa, esta habilidade pode ser usada para curar 20 de vida e conceder 50% de redução de dano intransponível por 1 turno. Esta habilidade ignora invulnerabilidade. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Claw Swipe",
      "file": "nii_yugito_(s)_skill_2_(claw_swipe).jpeg",
      "description": "Yugito takes a huge swipe of her claw, dealing 15 damage to one enemy for 2 turns. During this time, that enemy's helpful skills will cost 1 additional random chakra. Requires 'Nibi Transformation'.",
      "descriptionBR": "Yugito desfere um golpe poderoso com sua garra, causando 15 de dano a um inimigo por 2 turnos. Durante esse tempo, as habilidades úteis desse inimigo custarão 1 chakra aleatório adicional. Requer 'Nibi Transformation'.",
      "descriptionRaw": "Yugito takes a huge swipe of her claw, dealing 15 damage to one enemy for 2 turns. During this time, that enemy's helpful skills will cost 1 additional random chakra. Requires 'Nibi Transformation'.",
      "descriptionBRRaw": "Yugito desfere um golpe poderoso com sua garra, causando 15 de dano a um inimigo por 2 turnos. Durante esse tempo, as habilidades úteis desse inimigo custarão 1 chakra aleatório adicional. Requer 'Nibi Transformation'.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Yugito takes a huge swipe of her claw, dealing 15 damage to one enemy for 2 turns. During this time, that enemy's helpful skills will cost 1 additional random chakra. Requires 'Nibi Transformation'. Chakra cost: 1 Tai. Catalog classes: Chakra, Action, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito desfere um golpe poderoso com sua garra, causando 15 de dano a um inimigo por 2 turnos. Durante esse tempo, as habilidades úteis desse inimigo custarão 1 chakra aleatório adicional. Requer 'Nibi Transformation'. Custo de chakra: 1 taijutsu. Classes no catálogo: Chakra, Action, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Spectral Fireball",
      "file": "nii_yugito_(s)_skill_3_(spectral_fireball).jpeg",
      "description": "Yugito fires a large fireball from her mouth, dealing 30 piercing damage to one enemy. For 1 turn, that enemy's non-affliction damage will be reduced to a maximum of 25. Requires 'Nibi Transformation'.",
      "descriptionBR": "Yugito dispara uma grande bola de fogo de sua boca, causando 30 de dano perfurante a um inimigo. Por 1 turno, o dano não affliction desse inimigo será reduzido a um máximo de 25. Requer 'Nibi Transformation'.",
      "descriptionRaw": "Yugito fires a large fireball from her mouth, dealing 30 piercing damage to one enemy. For 1 turn, that enemy's non-affliction damage will be reduced to a maximum of 25. Requires 'Nibi Transformation'.",
      "descriptionBRRaw": "Yugito dispara uma grande bola de fogo de sua boca, causando 30 de dano perfurante a um inimigo. Por 1 turno, o dano não affliction desse inimigo será reduzido a um máximo de 25. Requer 'Nibi Transformation'.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Yugito fires a large fireball from her mouth, dealing 30 piercing damage to one enemy. For 1 turn, that enemy's non-affliction damage will be reduced to a maximum of 25. Requires 'Nibi Transformation'. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito dispara uma grande bola de fogo de sua boca, causando 30 de dano perfurante a um inimigo. Por 1 turno, o dano não affliction desse inimigo será reduzido a um máximo de 25. Requer 'Nibi Transformation'. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Rage",
      "file": "nii_yugito_(s)_skill_4_(rage).jpeg",
      "description": "This skill makes Nii Yugito (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Nii Yugito (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Nii Yugito (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Nii Yugito (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Nii Yugito (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Nii Yugito (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

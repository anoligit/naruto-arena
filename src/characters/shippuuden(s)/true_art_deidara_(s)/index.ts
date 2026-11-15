// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "True Art Deidara (S)",
  "description": "A fanatical explosive artist who believes true art exists only in a single, beautiful moment of destruction. Deidara specializes in long-term setup and devastating payoffs, planting microscopic bombs that turn the battlefield into a ticking masterpiece.",
  "descriptionBR": "Um artista explosivo fanático que acredita que a verdadeira arte existe apenas em um único e belo momento de destruição. Deidara é especializado em preparação de longo prazo e recompensas devastadoras, plantando bombas microscópicas que transformam o campo de batalha em uma obra-prima prestes a explodir.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "true_art_deidara_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Clay Dolls",
      "file": "true_art_deidara_(s)_skill_1_(clay_dolls).png",
      "description": "Deidara gains 15 points of destructible defense. While he has this defense up, each turn he will target a random enemy, dealing 10 damage to them and making them receive 5 additional non-affliction damage from Deidara's other skills.",
      "descriptionBR": "Deidara ganha 15 pontos de destructible defense. Enquanto ele tiver essa defesa ativa, a cada turno ele irá alvejar um inimigo aleatório, causando 10 de dano a ele and fazendo ele receber 5 de dano adicional das outras habilidades de Deidara.",
      "descriptionRaw": "Deidara gains 15 points of destructible defense. While he has this defense up, each turn he will target a random enemy, dealing 10 damage to them and making them receive 5 additional non-affliction damage from Deidara's other skills.",
      "descriptionBRRaw": "Deidara ganha 15 pontos de destructible defense. Enquanto ele tiver essa defesa ativa, a cada turno ele irá alvejar um inimigo aleatório, causando 10 de dano a ele and fazendo ele receber 5 de dano adicional das outras habilidades de Deidara.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Deidara gains 15 points of destructible defense. While he has this defense up, each turn he will target a random enemy, dealing 10 damage to them and making them receive 5 additional non-affliction damage from Deidara's other skills. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara ganha 15 pontos de destructible defense. Enquanto ele tiver essa defesa ativa, a cada turno ele irá alvejar um inimigo aleatório, causando 10 de dano a ele and fazendo ele receber 5 de dano adicional das outras habilidades de Deidara. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "C2: Dragon",
      "file": "true_art_deidara_(s)_skill_2_(c2_dragon).jpeg",
      "description": "For 3 turns, Deidara gains 20 points of destructible defense and targets all enemies. Any enemy that uses a new harmful skill will take 10 piercing damage. While active, this skill will be replaced by 'Dragon Missile'.",
      "descriptionBR": "Por 3 turnos, Deidara ganha 20 pontos de destructible defense e alveja todos os inimigos. Qualquer inimigo que usar uma nova habilidade ofensiva irá receber 10 de dano perfurante. Enquanto ativa, essa habilidade será substituída por 'Dragon Missile'.",
      "descriptionRaw": "For 3 turns, Deidara gains 20 points of destructible defense and targets all enemies. Any enemy that uses a new harmful skill will take 10 piercing damage. While active, this skill will be replaced by 'Dragon Missile'.",
      "descriptionBRRaw": "Por 3 turnos, Deidara ganha 20 pontos de destructible defense e alveja todos os inimigos. Qualquer inimigo que usar uma nova habilidade ofensiva irá receber 10 de dano perfurante. Enquanto ativa, essa habilidade será substituída por 'Dragon Missile'.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "For 3 turns, Deidara gains 20 points of destructible defense and targets all enemies. Any enemy that uses a new harmful skill will take 10 piercing damage. While active, this skill will be replaced by 'Dragon Missile'. Chakra cost: 2 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Deidara ganha 20 pontos de destructible defense e alveja todos os inimigos. Qualquer inimigo que usar uma nova habilidade ofensiva irá receber 10 de dano perfurante. Enquanto ativa, essa habilidade será substituída por 'Dragon Missile'. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "C4: Karura",
      "file": "true_art_deidara_(s)_skill_3_(c4_karura).png",
      "description": "Deidara releases a cloud of microscopic bomb towards on enemy, dealing 3 affliction damage to them permanently. This skill will double its damage each turn.",
      "descriptionBR": "Deidara libera uma nuvem de bombas microscópicas contra um inimigo, causando 3 de dano affliction a ele permanentemente. Essa habilidade dobrará seu dano a cada turno.",
      "descriptionRaw": "Deidara releases a cloud of microscopic bomb towards on enemy, dealing 3 affliction damage to them permanently. This skill will double its damage each turn.",
      "descriptionBRRaw": "Deidara libera uma nuvem de bombas microscópicas contra um inimigo, causando 3 de dano affliction a ele permanentemente. Essa habilidade dobrará seu dano a cada turno.",
      "energy": [
        "Blood",
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 6,
      "ruleDescription": "Deidara releases a cloud of microscopic bomb towards on enemy, dealing 3 affliction damage to them permanently. This skill will double its damage each turn. Chakra cost: 1 Blood, 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 6. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara libera uma nuvem de bombas microscópicas contra um inimigo, causando 3 de dano affliction a ele permanentemente. Essa habilidade dobrará seu dano a cada turno. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 6. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "C4: Trap",
      "file": "true_art_deidara_(s)_skill_4_(c4_trap).png",
      "description": "This skill makes True Art Deidara (S) invulnerable for 1 turn. After Deidara uses 5 new skills, 'C4: Trap' will be replaced by 'C0: Final Explosion'.",
      "descriptionBR": "Essa habilidade torna True Art Deidara (S) invulnerável por 1 turno. Depois que Deidara usar 5 novas habilidades, 'C4: Trap' será substituída por 'C0: Final Explosion'.",
      "descriptionRaw": "This skill makes True Art Deidara (S) invulnerable for 1 turn. After Deidara uses 5 new skills, 'C4: Trap' will be replaced by 'C0: Final Explosion'.",
      "descriptionBRRaw": "Essa habilidade torna True Art Deidara (S) invulnerável por 1 turno. Depois que Deidara usar 5 novas habilidades, 'C4: Trap' será substituída por 'C0: Final Explosion'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes True Art Deidara (S) invulnerable for 1 turn. After Deidara uses 5 new skills, 'C4: Trap' will be replaced by 'C0: Final Explosion'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna True Art Deidara (S) invulnerável por 1 turno. Depois que Deidara usar 5 novas habilidades, 'C4: Trap' será substituída por 'C0: Final Explosion'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Dragon Missile",
      "file": "true_art_deidara_(s)_skill_5_(dragon_missile).png",
      "description": "Deidara deals 25 damage to one enemy. This skill ignores invulnerability.",
      "descriptionBR": "Deidara causa 25 de dano a um inimigo. Essa habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Deidara deals 25 damage to one enemy. This skill ignores invulnerability.",
      "descriptionBRRaw": "Deidara causa 25 de dano a um inimigo. Essa habilidade ignora invulnerabilidade.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Deidara deals 25 damage to one enemy. This skill ignores invulnerability. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara causa 25 de dano a um inimigo. Essa habilidade ignora invulnerabilidade. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "C0: Final Explosion",
      "file": "true_art_deidara_(s)_skill_6_(c0_final_explosion).jpeg",
      "description": "Deidara sacrifices himself, dealing 40 piercing damage to all enemies. Afterwards, Deidara is instantly killed. This skill may only be used when Deidara uses 5 new skills.",
      "descriptionBR": "Deidara se sacrifica, causando 40 de dano perfurante a todos os inimigos. Depois disso, Deidara morre instantaneamente. Essa habilidade só pode ser usada quando Deidara usar 5 novas habilidades.",
      "descriptionRaw": "Deidara sacrifices himself, dealing 40 piercing damage to all enemies. Afterwards, Deidara is instantly killed. This skill may only be used when Deidara uses 5 new skills.",
      "descriptionBRRaw": "Deidara se sacrifica, causando 40 de dano perfurante a todos os inimigos. Depois disso, Deidara morre instantaneamente. Essa habilidade só pode ser usada quando Deidara usar 5 novas habilidades.",
      "energy": [
        "Nin",
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Deidara sacrifices himself, dealing 40 piercing damage to all enemies. Afterwards, Deidara is instantly killed. This skill may only be used when Deidara uses 5 new skills. Chakra cost: 1 Nin, 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Deidara se sacrifica, causando 40 de dano perfurante a todos os inimigos. Depois disso, Deidara morre instantaneamente. Essa habilidade só pode ser usada quando Deidara usar 5 novas habilidades. Custo de chakra: 1 ninjutsu, 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Akatsuchi (S)",
  "description": "Akatsuchi (S) is a shinobi of the Hidden Rock Village. Akatsuchi is a powerful shinobi who uses brute strength and earth style jutsus in combat.",
  "descriptionBR": "Akatsuchi (S) é um shinobi da Vila Oculta da Rocha. Akatsuchi é um poderoso shinobi que usa força bruta e jutsus do estilo terra em combate.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "akatsuchi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "High Speed Assault",
      "file": "akatsuchi_(s)_skill_1_(high_speed_assault).jpg",
      "description": "Using High Speed Assault Akatsuchi deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
      "descriptionBR": "Usando High Speed Assault, Akatsuchi causa 25 de dano a 1 inimigo. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 15 de dano adicional.",
      "descriptionRaw": "Using High Speed Assault Akatsuchi deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
      "descriptionBRRaw": "Usando High Speed Assault, Akatsuchi causa 25 de dano a 1 inimigo. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 15 de dano adicional.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Using High Speed Assault Akatsuchi deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando High Speed Assault, Akatsuchi causa 25 de dano a 1 inimigo. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 15 de dano adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Golem",
      "file": "akatsuchi_(s)_skill_2_(golem).jpg",
      "description": "Akatsuchi uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
      "descriptionBR": "Akatsuchi usa Golem em todos os inimigos causando 15 de dano neles. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 10 de dano adicional.",
      "descriptionRaw": "Akatsuchi uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
      "descriptionBRRaw": "Akatsuchi usa Golem em todos os inimigos causando 15 de dano neles. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 10 de dano adicional.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Akatsuchi uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Akatsuchi usa Golem em todos os inimigos causando 15 de dano neles. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 10 de dano adicional. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Golem Chakra Devour",
      "file": "akatsuchi_(s)_skill_3_(golem_chakra_devour).jpg",
      "description": "Akatsuchi's golem devours one enemy's chakra, dealing 10 piercing damage and stealing 1 random chakra from them. The following 2 turns, Akatsuchi's skills will cost 1 less random chakra. This skill will cost 1 less random chakra for each stack of 'Golem' and 'High Speed Assault' active on Akatsuchi.",
      "descriptionBR": "O golem de Akatsuchi devora o chakra de um inimigo, causando 10 de dano perfurante e roubando 1 chakra aleatório dele. Nos 2 turnos seguintes, as habilidades de Akatsuchi custarão 1 chakra aleatório a menos. Esta habilidade custará 1 chakra aleatório a menos para cada stack ativo de 'Golem' e 'High Speed Assault' em Akatsuchi.",
      "descriptionRaw": "Akatsuchi's golem devours one enemy's chakra, dealing 10 piercing damage and stealing 1 random chakra from them. The following 2 turns, Akatsuchi's skills will cost 1 less random chakra. This skill will cost 1 less random chakra for each stack of 'Golem' and 'High Speed Assault' active on Akatsuchi.",
      "descriptionBRRaw": "O golem de Akatsuchi devora o chakra de um inimigo, <Damage>causando 10 de dano perfurante<Damage> e <Effects>roubando 1 chakra aleatório<Effects> dele. Nos 2 turnos seguintes, as habilidades de Akatsuchi <Improvements>custarão 1 chakra aleatório a menos<Improvements>. Esta habilidade <Improvements>custará 1 chakra aleatório a menos<Improvements> para cada stack ativo de <SkillName>'Golem'<SkillName> e <SkillName>'High Speed Assault'<SkillName> em Akatsuchi.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Akatsuchi's golem devours one enemy's chakra, dealing 10 piercing damage and stealing 1 random chakra from them. The following 2 turns, Akatsuchi's skills will cost 1 less random chakra. This skill will cost 1 less random chakra for each stack of 'Golem' and 'High Speed Assault' active on Akatsuchi. Chakra cost: 3 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "O golem de Akatsuchi devora o chakra de um inimigo, causando 10 de dano perfurante e roubando 1 chakra aleatório dele. Nos 2 turnos seguintes, as habilidades de Akatsuchi custarão 1 chakra aleatório a menos. Esta habilidade custará 1 chakra aleatório a menos para cada stack ativo de 'Golem' e 'High Speed Assault' em Akatsuchi. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Akatsuchi Retreat",
      "file": "akatsuchi_(s)_skill_4_(akatsuchi_retreat).jpg",
      "description": "This skill makes Akatsuchi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Akatsuchi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Akatsuchi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Akatsuchi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Akatsuchi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Akatsuchi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

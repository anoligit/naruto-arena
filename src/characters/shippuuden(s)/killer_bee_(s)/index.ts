// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Killer Bee (S)",
  "description": "Killer Bee (S) is the jinchuriki from Kumogakure. Bee (S) is referred to as the hero of Kumogakure and possess immense physical strength as well as being an expert swordsmen.",
  "descriptionBR": "Killer Bee (S) é o jinchuriki de Kumogakure. Bee (S) é conhecido como o herói de Kumogakure e possui imensa força física além de ser um especialista espadachim.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "killer_bee_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kenjutsu",
      "file": "killer_bee_(s)_skill_1_(kenjutsu).jpg",
      "description": "Bee creates an offensive defense using his seven swords. For 4 turns, if an enemy uses a new non-mental skill on Bee, they will take 10 piercing damage. During this time, 'Buzz Saw' will deal 20 additional damage, and this skill is replaced by 'Final Kenjutsu'.",
      "descriptionBR": "Bee cria uma defesa ofensiva usando suas sete espadas. Por 4 turnos, se um inimigo usar uma nova habilidade não mental em Bee, receberá 10 de dano perfurante. Durante esse tempo, 'Buzz Saw' causará 20 de dano adicional, e esta habilidade será substituída por 'Final Kenjutsu'.",
      "descriptionRaw": "Bee creates an offensive defense using his seven swords. For 4 turns, if an enemy uses a new non-mental skill on Bee, they will take 10 piercing damage. During this time, 'Buzz Saw' will deal 20 additional damage, and this skill is replaced by 'Final Kenjutsu'.",
      "descriptionBRRaw": "Bee cria uma defesa ofensiva usando suas sete espadas. Por 4 turnos, se um inimigo usar uma nova habilidade não mental em Bee, receberá 10 de dano perfurante. Durante esse tempo, 'Buzz Saw' causará 20 de dano adicional, e esta habilidade será substituída por 'Final Kenjutsu'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 4,
      "ruleDescription": "Bee creates an offensive defense using his seven swords. For 4 turns, if an enemy uses a new non-mental skill on Bee, they will take 10 piercing damage. During this time, 'Buzz Saw' will deal 20 additional damage, and this skill is replaced by 'Final Kenjutsu'. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee cria uma defesa ofensiva usando suas sete espadas. Por 4 turnos, se um inimigo usar uma nova habilidade não mental em Bee, receberá 10 de dano perfurante. Durante esse tempo, 'Buzz Saw' causará 20 de dano adicional, e esta habilidade será substituída por 'Final Kenjutsu'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Buzz Saw",
      "file": "killer_bee_(s)_skill_2_(buzz_saw).jpg",
      "description": "Using his seven swords, Bee deals 20 piercing damage to one enemy. During 'Kenjutsu', this skill will deal 20 additional damage.",
      "descriptionBR": "Usando suas sete espadas, Bee causa 20 de dano perfurante a um inimigo. Durante 'Kenjutsu', esta habilidade causará 20 de dano adicional.",
      "descriptionRaw": "Using his seven swords, Bee deals 20 piercing damage to one enemy. During 'Kenjutsu', this skill will deal 20 additional damage.",
      "descriptionBRRaw": "Usando suas sete espadas, Bee causa 20 de dano perfurante a um inimigo. Durante 'Kenjutsu', esta habilidade causará 20 de dano adicional.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Using his seven swords, Bee deals 20 piercing damage to one enemy. During 'Kenjutsu', this skill will deal 20 additional damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando suas sete espadas, Bee causa 20 de dano perfurante a um inimigo. Durante 'Kenjutsu', esta habilidade causará 20 de dano adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Stream",
      "file": "killer_bee_(s)_skill_3_(chakra_stream).jpg",
      "description": "Bee protects himself or an ally. For 1 turn, the first enemy that uses a new skill on the protected ally will be countered and will take 15 piercing damage. This skill is invisible.",
      "descriptionBR": "Bee protege a si mesmo ou a um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade nele serão counterados e irão receber 15 de dano perfurante. Essa habilidade é invisível.",
      "descriptionRaw": "Bee protects himself or an ally. For 1 turn, the first enemy that uses a new skill on the protected ally will be countered and will take 15 piercing damage. This skill is invisible.",
      "descriptionBRRaw": "Bee protege a si mesmo ou a um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade nele serão counterados e irão receber 15 de dano perfurante. Essa habilidade é invisível.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Bee protects himself or an ally. For 1 turn, the first enemy that uses a new skill on the protected ally will be countered and will take 15 piercing damage. This skill is invisible. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee protege a si mesmo ou a um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade nele serão counterados e irão receber 15 de dano perfurante. Essa habilidade é invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Strong Defense",
      "file": "killer_bee_(s)_skill_4_(strong_defense).jpg",
      "description": "This skill makes Killer Bee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Killer Bee (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Killer Bee (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Killer Bee (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Killer Bee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Killer Bee (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Final Kenjutsu",
      "file": "killer_bee_(s)_skill_5_(final_kenjutsu).png",
      "description": "Bee executes an enemy with a final attack, dealing 35 piercing damage to them. If that enemy's health drops to 5 or less, they will be instantly killed. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
      "descriptionBR": "Bee executa um inimigo com um ataque final, causando 35 de dano perfurante a ele. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade e só pode ser usada em um inimigo que recebeu dano das outras habilidades de Killer Bee no último turno.",
      "descriptionRaw": "Bee executes an enemy with a final attack, dealing 35 piercing damage to them. If that enemy's health drops to 5 or less, they will be instantly killed. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
      "descriptionBRRaw": "Bee executa um inimigo com um ataque final, causando 35 de dano perfurante a ele. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade e só pode ser usada em um inimigo que recebeu dano das outras habilidades de Killer Bee no último turno.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Bee executes an enemy with a final attack, dealing 35 piercing damage to them. If that enemy's health drops to 5 or less, they will be instantly killed. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee executa um inimigo com um ataque final, causando 35 de dano perfurante a ele. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade e só pode ser usada em um inimigo que recebeu dano das outras habilidades de Killer Bee no último turno. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

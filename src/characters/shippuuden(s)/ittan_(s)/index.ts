// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Ittan (S)",
  "description": "A chuunin of the Hidden Rock Village, Ittan is a member of the Surprise Attack Division of the Shinobi Alliance. A tough and serious man who is extremely calm during battle, Ittan is proficient with Earth Release jutsu, his specialty being ones which dynamically manipulate the terrain into battle-ready formations.",
  "descriptionBR": "Um chuunin da Vila Oculta da Pedra, Ittan é membro da Divisão de Ataque Surpresa da Aliança Shinobi. Um homem resistente e sério, extremamente calmo durante as batalhas, Ittan é proficiente em jutsus de Liberação de Terra, especializando-se naqueles que manipulam dinamicamente o terreno em formações preparadas para o combate.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "ittan_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Battlefield Trenches",
      "file": "ittan_(s)_skill_1_(battlefield_trenches).png",
      "description": "For 2 turns, all enemies will receive 5 additional non-affliction damage and deal 5 less non-affliction damage.",
      "descriptionBR": "Por 2 turnos, todos os inimigos irão receber 5 de dano não-affliction adicional e causar 5 de dano não-affliction a menos.",
      "descriptionRaw": "For 2 turns, all enemies will <Improvements>receive 5 additional non-affliction damage<Improvements> and <Effects>deal 5 less non-affliction damage<Effects>.",
      "descriptionBRRaw": "Por 2 turnos, todos os inimigos irão <Improvements>receber 5 de dano não-affliction adicional<Improvements> e <Effects>causar 5 de dano não-affliction a menos<Effects>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "For 2 turns, all enemies will receive 5 additional non-affliction damage and deal 5 less non-affliction damage. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, todos os inimigos irão receber 5 de dano não-affliction adicional e causar 5 de dano não-affliction a menos. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Moving Earth Core",
      "file": "ittan_(s)_skill_2_(moving_earth_core).png",
      "description": "Ittan deals 30 damage to one enemy and 5 damage to all other enemies. For 1 turn, the main target will deal 10 less non-affliction damage.",
      "descriptionBR": "Ittan causa 30 de dano a um inimigo e 5 de dano a todos os outros inimigos. Por 1 turno, o alvo principal irá causar 10 de dano não-affliction a menos.",
      "descriptionRaw": "Ittan <Damage>deals 30 damage<Damage> to one enemy and <Damage>5 damage<Damage> to all other enemies. For 1 turn, the main target will <Effects>deal 10 less non-affliction damage<Effects>.",
      "descriptionBRRaw": "Ittan <Damage>causa 30 de dano<Damage> a um inimigo e <Damage>5 de dano<Damage> a todos os outros inimigos. Por 1 turno, o alvo principal irá <Effects>causar 10 de dano não-affliction a menos<Effects>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Ittan deals 30 damage to one enemy and 5 damage to all other enemies. For 1 turn, the main target will deal 10 less non-affliction damage. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ittan causa 30 de dano a um inimigo e 5 de dano a todos os outros inimigos. Por 1 turno, o alvo principal irá causar 10 de dano não-affliction a menos. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Earth Dome",
      "file": "ittan_(s)_skill_3_(earth_dome).png",
      "description": "Ittan targets one ally and himself, making both invulnerable to non-mental skills for 1 turn.",
      "descriptionBR": "Ittan alveja um aliado e a si mesmo, tornando ambos invulneráveis a habilidades não mentais por 1 turno.",
      "descriptionRaw": "Ittan targets one ally and himself, making both <Defense>invulnerable<Defense> to <Classes>non-mental skills<Classes> for 1 turn.",
      "descriptionBRRaw": "Ittan alveja um aliado e a si mesmo, tornando ambos <Defense>invulneráveis<Defense> a <Classes>habilidades não mentais<Classes> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Ittan targets one ally and himself, making both invulnerable to non-mental skills for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ittan alveja um aliado e a si mesmo, tornando ambos invulneráveis a habilidades não mentais por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Trench Defense",
      "file": "ittan_(s)_skill_4_(trench_defense).png",
      "description": "This skill makes Ittan invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Ittan invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Ittan <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Ittan <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Ittan invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Ittan invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

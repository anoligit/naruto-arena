// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Gaara (S)",
  "description": "Despite his youth and inexperience, the young Kazekage is made Commander-in-Chief of the Shinobi Alliance at the outbreak of the Fourth Shinobi World War. Fearlessly carrying this great responsibility, Gaara is ready to prove himself to the world, empowered by the loving spirit of his mother hidden within his sand.",
  "descriptionBR": "Apesar de sua juventude e inexperiência, o jovem Kazekage é nomeado Comandante Supremo da Aliança Shinobi com o início da Quarta Grande Guerra Ninja. Carregando essa grande responsabilidade sem medo, Gaara está pronto para se provar ao mundo, fortalecido pelo espírito amoroso de sua mãe oculto em sua areia.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_gaara_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sand Binding Prison",
      "file": "shinobi_alliance_gaara_(s)_skill_1_(sand_binding_prison).png",
      "description": "Gaara deals 30 piercing damage to one enemy and stuns their non-mental skills for 1 turn. During 'Desert Layered Imperial Funeral Seal', this skill will deal 10 additional damage. During 'Mother's Absolute Defense', this skill's stunning effect will last 1 additional turn.",
      "descriptionBR": "Gaara causa 30 de dano perfurante a um inimigo e atordoa as habilidades não-mental dele por 1 turno. Durante 'Desert Layered Imperial Funeral Seal', essa habilidade irá causar 10 de dano adicional. Durante 'Mother's Absolute Defense', o efeito de atordoamento dessa habilidade irá durar 1 turno adicional.",
      "descriptionRaw": "Gaara <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental skills<Classes> for 1 turn. During <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>. During <SkillName>'Mother's Absolute Defense'<SkillName>, this skill's <Effects>stunning effect<Effects> will <Improvements>last 1 additional turn<Improvements>.",
      "descriptionBRRaw": "Gaara <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as <Classes>habilidades não-mental<Classes> dele por 1 turno. Durante <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>. Durante <SkillName>'Mother's Absolute Defense'<SkillName>, o <Effects>efeito de atordoamento<Effects> dessa habilidade irá <Improvements>durar 1 turno adicional<Improvements>.",
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
      "ruleDescription": "Gaara deals 30 piercing damage to one enemy and stuns their non-mental skills for 1 turn. During 'Desert Layered Imperial Funeral Seal', this skill will deal 10 additional damage. During 'Mother's Absolute Defense', this skill's stunning effect will last 1 additional turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gaara causa 30 de dano perfurante a um inimigo e atordoa as habilidades não-mental dele por 1 turno. Durante 'Desert Layered Imperial Funeral Seal', essa habilidade irá causar 10 de dano adicional. Durante 'Mother's Absolute Defense', o efeito de atordoamento dessa habilidade irá durar 1 turno adicional. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Desert Layered Imperial Funeral Seal",
      "file": "shinobi_alliance_gaara_(s)_skill_2_(desert_layered_imperial_funeral_seal).png",
      "description": "Gaara deals 15 piercing damage to all enemies. For 2 turns, any enemy that uses a new harmful skill will be dealt 5 piercing damage. This skill ends if 'Mother's Absolute Defense' is used.",
      "descriptionBR": "Gaara causa 15 de dano perfurante a todos os inimigos. Por 2 turnos, qualquer inimigo que usar uma nova habilidade ofensiva irá receber 5 de dano perfurante. Essa habilidade termina se 'Mother's Absolute Defense' for usada.",
      "descriptionRaw": "Gaara <Damage>deals 15 piercing damage<Damage> to all enemies. For 2 turns, any enemy that <Classes>uses a new harmful skill<Classes> will be <Damage>dealt 5 piercing damage<Damage>. This skill <Invisible>ends<Invisible> if <SkillName>'Mother's Absolute Defense'<SkillName> is used.",
      "descriptionBRRaw": "Gaara <Damage>causa 15 de dano perfurante<Damage> a todos os inimigos. Por 2 turnos, qualquer inimigo que <Classes>usar uma nova habilidade ofensiva<Classes> irá <Damage>receber 5 de dano perfurante<Damage>. Essa habilidade <Invisible>termina<Invisible> se <SkillName>'Mother's Absolute Defense'<SkillName> for usada.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Gaara deals 15 piercing damage to all enemies. For 2 turns, any enemy that uses a new harmful skill will be dealt 5 piercing damage. This skill ends if 'Mother's Absolute Defense' is used. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gaara causa 15 de dano perfurante a todos os inimigos. Por 2 turnos, qualquer inimigo que usar uma nova habilidade ofensiva irá receber 5 de dano perfurante. Essa habilidade termina se 'Mother's Absolute Defense' for usada. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mother's Absolute Defense",
      "file": "shinobi_alliance_gaara_(s)_skill_3_(mother's_absolute_defense).png",
      "description": "Gaara grants his team 15 permanent destructible defense. For 2 turns, if Gaara or an ally is targeted by a new harmful skill, they will gain 5 permanent destructible defense. This skill ends if 'Desert Layered Imperial Funeral Seal' is used.",
      "descriptionBR": "Gaara concede à sua equipe 15 de defesa destrutível permanente. Por 2 turnos, se Gaara ou um aliado for alvo de uma nova habilidade ofensiva, eles irão ganhar 5 de defesa destrutível permanente. Essa habilidade termina se 'Desert Layered Imperial Funeral Seal' for usada.",
      "descriptionRaw": "Gaara grants his team <Defense>15 permanent destructible defense<Defense>. For 2 turns, if Gaara or an ally <Classes>is targeted by a new harmful skill<Classes>, they will <Defense>gain 5 permanent destructible defense<Defense>. This skill <Invisible>ends<Invisible> if <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName> is used.",
      "descriptionBRRaw": "Gaara concede à sua equipe <Defense>15 de defesa destrutível permanente<Defense>. Por 2 turnos, se Gaara ou um aliado <Classes>for alvo de uma nova habilidade ofensiva<Classes>, eles <Defense>irão ganhar 5 de defesa destrutível<Defense> permanente. Essa habilidade <Invisible>termina<Invisible> se <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName> for usada.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Gaara grants his team 15 permanent destructible defense. For 2 turns, if Gaara or an ally is targeted by a new harmful skill, they will gain 5 permanent destructible defense. This skill ends if 'Desert Layered Imperial Funeral Seal' is used. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gaara concede à sua equipe 15 de defesa destrutível permanente. Por 2 turnos, se Gaara ou um aliado for alvo de uma nova habilidade ofensiva, eles irão ganhar 5 de defesa destrutível permanente. Essa habilidade termina se 'Desert Layered Imperial Funeral Seal' for usada. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sand Wall",
      "file": "shinobi_alliance_gaara_(s)_skill_4_(sand_wall).png",
      "description": "This skill makes Shinobi Alliance Gaara (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Gaara (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Gaara (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Gaara (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Gaara (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Gaara (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

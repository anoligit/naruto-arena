// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Kiba (S)",
  "description": "Now in the war, Kiba is one of the most powerful close-range combatants. Utilizing the vast arsenal of the Inuzuka clan, Kiba can combat even colossal enemies with Akamaru and their tornado fang.",
  "descriptionBR": "Agora na guerra, Kiba é um dos combatentes de curta distância mais poderosos. Utilizando o vasto arsenal do clã Inuzuka, Kiba pode enfrentar até mesmo inimigos colossais com Akamaru e seu tornado fang.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_kiba_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Tornado Fang",
      "file": "shinobi_alliance_kiba_(s)_skill_1_(tornado_fang).png",
      "description": "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf', this skill will deal 10 additional damage.",
      "descriptionBR": "Kiba causa 30 de dano perfurante a um inimigo e faz com que ele cause 10 de dano não-affliction a menos por 1 turno. Durante 'Three Headed Wolf', essa habilidade irá causar 10 de dano adicional.",
      "descriptionRaw": "Kiba <Damage>deals 30 piercing damage<Damage> to one enemy and makes them <Effects>deal 10 less non-affliction damage<Effects> for 1 turn. During <SkillName>'Three Headed Wolf'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>.",
      "descriptionBRRaw": "Kiba <Damage>causa 30 de dano perfurante<Damage> a um inimigo e faz com que ele <Effects>cause 10 de dano não-affliction a menos<Effects> por 1 turno. Durante <SkillName>'Three Headed Wolf'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf', this skill will deal 10 additional damage. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba causa 30 de dano perfurante a um inimigo e faz com que ele cause 10 de dano não-affliction a menos por 1 turno. Durante 'Three Headed Wolf', essa habilidade irá causar 10 de dano adicional. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Three Headed Wolf",
      "file": "shinobi_alliance_kiba_(s)_skill_2_(three_headed_wolf).png",
      "description": "Kiba removes all harmful physical and mental skills from his team and, for 3 turns, targets all enemies. During this time, enemies that use a new harmful skill will take 5 piercing damage and permanently receive 5 additional damage from physical skills. This skill is replaced by 'Tail Rotating Fang'.",
      "descriptionBR": "Kiba remove todas as habilidades ofensivas físicas e mentais de sua equipe e, por 3 turnos, atinge todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade ofensiva irão receber 5 de dano perfurante e, permanentemente, receber 5 de dano adicional de habilidades físicas. Essa habilidade é substituída por 'Tail Rotating Fang'.",
      "descriptionRaw": "Kiba <Defense>removes all harmful physical and mental skills<Defense> from his team and, for 3 turns, targets all enemies. During this time, enemies that use a new <Classes>harmful skill<Classes> will <Damage>take 5 piercing damage<Damage> and permanently <Improvements>receive 5 additional damage<Improvements> from <Classes>physical skills<Classes>. This skill is <Improvements>replaced<Improvements> by <SkillName>'Tail Rotating Fang'<SkillName>.",
      "descriptionBRRaw": "Kiba <Defense>remove todas as habilidades ofensivas físicas e mentais<Defense> de sua equipe e, por 3 turnos, atinge todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova <Classes>habilidade ofensiva<Classes> irão <Damage>receber 5 de dano perfurante<Damage> e, permanentemente, <Improvements>receber 5 de dano adicional<Improvements> de <Classes>habilidades físicas<Classes>. Essa habilidade é <Improvements>substituída<Improvements> por <SkillName>'Tail Rotating Fang'<SkillName>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Kiba removes all harmful physical and mental skills from his team and, for 3 turns, targets all enemies. During this time, enemies that use a new harmful skill will take 5 piercing damage and permanently receive 5 additional damage from physical skills. This skill is replaced by 'Tail Rotating Fang'. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba remove todas as habilidades ofensivas físicas e mentais de sua equipe e, por 3 turnos, atinge todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade ofensiva irão receber 5 de dano perfurante e, permanentemente, receber 5 de dano adicional de habilidades físicas. Essa habilidade é substituída por 'Tail Rotating Fang'. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Man Animal Tatics",
      "file": "shinobi_alliance_kiba_(s)_skill_3_(man_animal_tatics).png",
      "description": "Kiba and one ally will deal 5 additional damage with non-affliction skills for 2 turns. During this time, every time a new enemy harmful skill is used on them, their skills will cost 1 less random chakra for 1 turn.",
      "descriptionBR": "Kiba e um aliado irão causar 5 de dano adicional com habilidades não affliction por 2 turnos. Durante esse tempo, sempre que uma nova habilidade ofensiva inimiga for usada neles, as habilidades deles irão custar 1 chakra aleatório a menos por 1 turno.",
      "descriptionRaw": "Kiba and one ally will <Improvements>deal 5 additional damage<Improvements> with <Classes>non-affliction skills<Classes> for 2 turns. During this time, every time a new enemy <Classes>harmful skill<Classes> is used on them, <SkillText>their skills<SkillText> will <Improvements>cost 1 less random chakra<Improvements> for 1 turn.",
      "descriptionBRRaw": "Kiba e um aliado irão <Improvements>causar 5 de dano adicional<Improvements> com <Classes>habilidades não affliction<Classes> por 2 turnos. Durante esse tempo, sempre que uma nova <Classes>habilidade ofensiva<Classes> inimiga for usada neles, as <SkillText>habilidades deles<SkillText> irão <Improvements>custar 1 chakra aleatório a menos<Improvements> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Kiba and one ally will deal 5 additional damage with non-affliction skills for 2 turns. During this time, every time a new enemy harmful skill is used on them, their skills will cost 1 less random chakra for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba e um aliado irão causar 5 de dano adicional com habilidades não affliction por 2 turnos. Durante esse tempo, sempre que uma nova habilidade ofensiva inimiga for usada neles, as habilidades deles irão custar 1 chakra aleatório a menos por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kiba Block",
      "file": "shinobi_alliance_kiba_(s)_skill_4_(kiba_block).png",
      "description": "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Shinobi War Kiba (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi War Kiba (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Shinobi War Kiba (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Shinobi War Kiba (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Tail Rotating Fang",
      "file": "shinobi_alliance_kiba_(s)_skill_5_(tail_rotating_fang).png",
      "description": "Kiba deals 45 piercing damage to one enemy and becomes invulnerable for 1 turn. Permanently, both Kiba and that enemy will deal 5 less non-affliction damage.",
      "descriptionBR": "Kiba causa 45 de dano perfurante a um inimigo e se torna invulnerável por 1 turno. Permanentemente, tanto Kiba quanto esse inimigo irão causar 5 de dano não-aflitivo a menos.",
      "descriptionRaw": "Kiba <Damage>deals 45 piercing damage<Damage> to one enemy and becomes <Defense>invulnerable<Defense> for 1 turn. Permanently, both Kiba and that enemy will <Effects>deal 5 less non-affliction damage<Effects>.",
      "descriptionBRRaw": "Kiba <Damage>causa 45 de dano perfurante<Damage> a um inimigo e se torna <Defense>invulnerável<Defense> por 1 turno. Permanentemente, tanto Kiba quanto esse inimigo irão <Effects>causar 5 de dano não-aflitivo a menos<Effects>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Kiba deals 45 piercing damage to one enemy and becomes invulnerable for 1 turn. Permanently, both Kiba and that enemy will deal 5 less non-affliction damage. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba causa 45 de dano perfurante a um inimigo e se torna invulnerável por 1 turno. Permanentemente, tanto Kiba quanto esse inimigo irão causar 5 de dano não-aflitivo a menos. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

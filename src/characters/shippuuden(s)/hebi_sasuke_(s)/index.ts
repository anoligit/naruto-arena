// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hebi Sasuke (S)",
  "description": "After breaking ties with Orochimaru, Sasuke forms Hebi and begins his hunt for Itachi. With greater control over the Cursed Seal and his lightning-nature chakra, Sasuke combines sudden Chidori attacks, automatic defenses, and the overwhelming power of Kirin.",
  "descriptionBR": "Após romper seus laços com Orochimaru, Sasuke forma a Hebi e inicia sua caçada por Itachi. Com maior controle sobre a Marca da Maldição e seu chakra de natureza relâmpago, Sasuke combina ataques surpresa com Chidori, defesas automáticas e o poder devastador de Kirin.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hebi_sasuke_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chidori Surprise Attack",
      "file": "hebi_sasuke_(s)_skill_1_(chidori_surprise_attack).png",
      "description": "Sasuke catches one enemy off guard with Chidori, dealing 20 piercing damage to them. The following 3 turns, Sasuke's skills will deal 10 additional damage.",
      "descriptionBR": "Sasuke pega um inimigo de surpresa com o Chidori, causando 20 de dano perfurante a ele. Nos próximos 3 turnos, as habilidades de Sasuke irão causar 10 de dano adicional.",
      "descriptionRaw": "Sasuke catches one enemy off guard with Chidori, <Damage>dealing 20 piercing damage<Damage> to them. The following 3 turns, <SkillText>Sasuke's skills<SkillText> will <Improvements>deal 10 additional damage<Improvements>.",
      "descriptionBRRaw": "Sasuke pega um inimigo de surpresa com o Chidori, <Damage>causando 20 de dano perfurante<Damage> a ele. Nos próximos 3 turnos, as <SkillText>habilidades de Sasuke<SkillText> irão <Improvements>causar 10 de dano adicional<Improvements>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasuke catches one enemy off guard with Chidori, dealing 20 piercing damage to them. The following 3 turns, Sasuke's skills will deal 10 additional damage. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke pega um inimigo de surpresa com o Chidori, causando 20 de dano perfurante a ele. Nos próximos 3 turnos, as habilidades de Sasuke irão causar 10 de dano adicional. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Cursed Seal: Automatic Protection",
      "file": "hebi_sasuke_(s)_skill_2_(cursed_seal_automatic_protection).png",
      "description": "For 1 turn, the first harmful skill used on Sasuke will be countered. If successful, the countered enemy will take 10 piercing damage and Sasuke will gain 10 points of destructible defense. This skill is invisible.",
      "descriptionBR": "Por 1 turno, a primeira habilidade ofensiva usada em Sasuke será counterada. Se for bem-sucedida, o inimigo counterado irá receber 10 de dano perfurante, e Sasuke irá ganhar 10 pontos de defesa destrutível. Esta habilidade é invisível.",
      "descriptionRaw": "For 1 turn, the first <Classes>harmful skill<Classes> used on Sasuke will be <Defense>countered<Defense>. If successful, the countered enemy will <Damage>take 10 piercing damage<Damage> and Sasuke will <Defense>gain 10 points of destructible defense<Defense>. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Por 1 turno, a primeira <Classes>habilidade ofensiva<Classes> usada em Sasuke será <Defense>counterada<Defense>. Se for bem-sucedida, o inimigo counterado irá <Damage>receber 10 de dano perfurante<Damage>, e Sasuke irá <Defense>ganhar 10 pontos de defesa destrutível<Defense>. Esta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, the first harmful skill used on Sasuke will be countered. If successful, the countered enemy will take 10 piercing damage and Sasuke will gain 10 points of destructible defense. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, a primeira habilidade ofensiva usada em Sasuke será counterada. Se for bem-sucedida, o inimigo counterado irá receber 10 de dano perfurante, e Sasuke irá ganhar 10 pontos de defesa destrutível. Esta habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Kirin",
      "file": "hebi_sasuke_(s)_skill_3_(kirin).png",
      "description": "Harnessing natural lightning from the storm clouds above, Sasuke guides a massive thunderbolt onto one enemy, dealing 35 piercing damage to them. If that enemy's health drops to 15 or lower, they will be instantly killed. This skill cannot be countered.",
      "descriptionBR": "Utilizando os relâmpagos naturais das nuvens de tempestade, Sasuke direciona um enorme raio contra um inimigo, causando 35 de dano perfurante a ele. Se a vida desse inimigo cair para 15 ou menos, ele será instantaneamente morto. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Harnessing natural lightning from the storm clouds above, Sasuke guides a massive thunderbolt onto one enemy, <Damage>dealing 35 piercing damage<Damage> to them. If that enemy's health <Invisible>drops to 15 or lower<Invisible>, they will be instantly <Effects>killed<Effects>. This skill <Classes>cannot be countered<Classes>.",
      "descriptionBRRaw": "Utilizando os relâmpagos naturais das nuvens de tempestade, Sasuke direciona um enorme raio contra um inimigo, <Damage>causando 35 de dano perfurante<Damage> a ele. Se a vida desse inimigo <Invisible>cair para 15 ou menos<Invisible>, ele será instantaneamente <Effects>morto<Effects>. Esta habilidade <Classes>não pode ser counterada<Classes>.",
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
      "ruleDescription": "Harnessing natural lightning from the storm clouds above, Sasuke guides a massive thunderbolt onto one enemy, dealing 35 piercing damage to them. If that enemy's health drops to 15 or lower, they will be instantly killed. This skill cannot be countered. Chakra cost: 3 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Utilizando os relâmpagos naturais das nuvens de tempestade, Sasuke direciona um enorme raio contra um inimigo, causando 35 de dano perfurante a ele. Se a vida desse inimigo cair para 15 ou menos, ele será instantaneamente morto. Esta habilidade não pode ser counterada. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sasuke Kunai Parry",
      "file": "hebi_sasuke_(s)_skill_4_(sasuke_kunai_parry).png",
      "description": "This skill makes Hebi Sasuke (S) invulnerable for 1 turn.",
      "descriptionBR": "Esta habilidade deixa Hebi Sasuke (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hebi Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Esta habilidade deixa Hebi Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hebi Sasuke (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade deixa Hebi Sasuke (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

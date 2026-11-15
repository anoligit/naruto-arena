// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kakuzu (S)",
  "description": "A missing-nin of mysterious talents and a member of Akatsuki, Kakuzu(s) is certainly older than he appears. He seems to only be concerned with money and the bounties which provide him with it.",
  "descriptionBR": "Um ninja renegado de talentos misteriosos e membro da Akatsuki, Kakuzu (S) é certamente mais velho do que aparenta. Ele parece se importar apenas com dinheiro e as recompensas que o fornecem.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kakuzu_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Fuuton Atsugai",
      "file": "kakuzu_(s)_skill_1_(fuuton_atsugai).jpg",
      "description": "Fuuton Atsugai deals 30 damage to one enemy and stuns their non-affliction skills for 1 turn. The following turn, this skill will be replaced by 'Katon Zukokku'.",
      "descriptionBR": "Fuuton Atsugai causa 30 de dano a um inimigo e atordoa suas habilidades não-Affliction por 1 turno. No próximo turno, essa habilidade irá se tornar 'Katon Zukokku'.",
      "descriptionRaw": "Fuuton Atsugai deals <Damage>30 damage<Damage> to one enemy and <Effects>stuns <Effects>their<Effects> <Classes>non-affliction skills<Classes><Effects> for 1 turn. The following turn, this skill will be replaced by <SkillName>'Katon Zukokku'<SkillName>.",
      "descriptionBRRaw": "Fuuton Atsugai causa <Damage>30 de dano <Damage>a um inimigo e <Effects>atordoa <Effects>suas<Effects> <Classes>habilidades não-Affliction<Classes><Effects> por 1 turno. No próximo turno, essa habilidade irá se tornar <SkillName>'Katon Zukokku'<SkillName>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Fuuton Atsugai deals 30 damage to one enemy and stuns their non-affliction skills for 1 turn. The following turn, this skill will be replaced by 'Katon Zukokku'. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fuuton Atsugai causa 30 de dano a um inimigo e atordoa suas habilidades não-Affliction por 1 turno. No próximo turno, essa habilidade irá se tornar 'Katon Zukokku'. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Raiton Gian",
      "file": "kakuzu_(s)_skill_2_(raiton_gian).jpg",
      "description": "Raiton Gian deals 35 damage to one enemy and for 1 turn that enemy skills will cost 1 additional random chakra. The following turn, this skill will be replaced by 'Inferno Gust'.",
      "descriptionBR": "Raiton Gian causa 35 de dano a um inimigo e por 1 turno as habilidades desse inimigo irão custar 1 adicional random chakra. No próximo turno, essa habilidade irá se tornar 'Inferno Gust'.",
      "descriptionRaw": "Raiton Gian <Damage>deals 35 damage<Damage> to one enemy and for 1 turn that enemy skills will <Effects>cost 1 additional random chakra<Effects>. The following turn, this skill will be replaced by <SkillName>'Inferno Gust'<SkillName>.",
      "descriptionBRRaw": "Raiton Gian <Damage>causa 35 de dano<Damage> a um inimigo e por 1 turno as habilidades desse inimigo irão <Effects>custar 1 adicional random chakra<Effects>. No próximo turno, essa habilidade irá se tornar <SkillName>'Inferno Gust'<SkillName>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Raiton Gian deals 35 damage to one enemy and for 1 turn that enemy skills will cost 1 additional random chakra. The following turn, this skill will be replaced by 'Inferno Gust'. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Raiton Gian causa 35 de dano a um inimigo e por 1 turno as habilidades desse inimigo irão custar 1 adicional random chakra. No próximo turno, essa habilidade irá se tornar 'Inferno Gust'. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Heart Steal",
      "file": "kakuzu_(s)_skill_3_(heart_steal).jpg",
      "description": "Using his tendrils, Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and heals 35 health. This skill can only be used on an enemy at or below 35 health. This skill ignores invulnerability.",
      "descriptionBR": "Usando seus tentáculos, Kakuzu arranca o coração de um inimigo e o torna seu. Kakuzu mata instantaneamente esse inimigo e cura 35 de vida. Esta habilidade só pode ser usada em um inimigo com 35 de vida ou menos. Essa habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Using his tendrils, Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu <Effects>instantly kills<Effects> that enemy and <Defense>heals 35 health<Defense>. This skill can only be used on an <Effects><SkillText>enemy at or below 35 health<SkillText><Effects>. This skill <Invisible>ignores invulnerability.<Invisible>",
      "descriptionBRRaw": "Usando seus tentáculos, Kakuzu arranca o coração de um inimigo e o torna seu. Kakuzu <Effects>mata instantaneamente<Effects> esse inimigo e <Defense>cura 35 de vida<Defense>. Esta habilidade só pode ser usada em um<Effects> <SkillText>inimigo com 35 de vida ou menos<SkillText><Effects>. Essa habilidade <Defense><Invisible>ignora invulnerabilidade<Invisible><Defense>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 4,
      "ruleDescription": "Using his tendrils, Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and heals 35 health. This skill can only be used on an enemy at or below 35 health. This skill ignores invulnerability. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seus tentáculos, Kakuzu arranca o coração de um inimigo e o torna seu. Kakuzu mata instantaneamente esse inimigo e cura 35 de vida. Esta habilidade só pode ser usada em um inimigo com 35 de vida ou menos. Essa habilidade ignora invulnerabilidade. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Iron Skin Technique",
      "file": "kakuzu_(s)_skill_4_(iron_skin_technique).jpg",
      "description": "This skill makes Kakuzu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kakuzu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kakuzu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kakuzu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kakuzu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kakuzu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Katon Zukokku",
      "file": "kakuzu_(s)_skill_5_(katon_zukokku).png",
      "description": "Katon Zukokku deals 15 affliction damage to all enemies.",
      "descriptionBR": "Katon Zukokku causa 15 de dano affliction a todos os inimigos.",
      "descriptionRaw": "Katon Zukokku deals <Damage>15 affliction damage<Damage> to all enemies.",
      "descriptionBRRaw": "Katon Zukokku causa <Damage>15 de dano affliction<Damage> a todos os inimigos.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Katon Zukokku deals 15 affliction damage to all enemies. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Katon Zukokku causa 15 de dano affliction a todos os inimigos. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Inferno Gust",
      "file": "kakuzu_(s)_skill_6_(inferno_gust).jpg",
      "description": "Inferno Gust deal 40 damage to one enemy and 15 to all other enemies.",
      "descriptionBR": "Inferno Gust causa 40 de dano a um inimigo e 15 a todos os outros inimigos.",
      "descriptionRaw": "Inferno Gust deal <Damage>40 damage to one enemy<Damage> and <Damage>15 to all other enemies<Damage>.",
      "descriptionBRRaw": "Inferno Gust causa <Damage>40 de dano<Damage> <Damage>a um inimigo<Damage> e <Damage>15 a todos os outros inimigos<Damage>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Inferno Gust deal 40 damage to one enemy and 15 to all other enemies. Chakra cost: 2 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Inferno Gust causa 40 de dano a um inimigo e 15 a todos os outros inimigos. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

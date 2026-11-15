// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Akimichi Chouji (S)",
  "description": "After nearly three years, Chouji has grown into a reliable ninja and is now a chuunin. His appetite has grown and so has his body, but now he is truly mastering the Akimichi clan techniques.",
  "descriptionBR": "Após quase três anos, Chouji se tornou um ninja confiável e agora é um chuunin. Seu apetite aumentou, assim como seu corpo, mas agora ele está realmente dominando as técnicas do clã Akimichi.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "akimichi_chouji_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mega Palm Thrusts",
      "file": "akimichi_chouji_(s)_skill_1_(mega_palm_thrusts).jpg",
      "description": "Expanding his arms for more inertia, Chouji deals 30 damage to one enemy and increase the cost of their harmful skills by 1 random chakra for 1 turn.",
      "descriptionBR": "Expandindo seus braços para ganhar mais inércia, Chouji causa 30 de dano a um inimigo e causa as suas habilidades ofensivas custarem mais 1 chakra aleatório por 1 turno.",
      "descriptionRaw": "Expanding his arms for more inertia, Chouji <Damage>deals 30 damage<Damage> to one enemy and increase the cost of their harmful skills by 1 random chakra for 1 turn.",
      "descriptionBRRaw": "Expandindo seus braços para ganhar mais inércia, Chouji <Damage>causa 30 de dano<Damage> a um inimigo e causa as suas habilidades ofensivas custarem mais 1 chakra aleatório por 1 turno.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Expanding his arms for more inertia, Chouji deals 30 damage to one enemy and increase the cost of their harmful skills by 1 random chakra for 1 turn. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Expandindo seus braços para ganhar mais inércia, Chouji causa 30 de dano a um inimigo e causa as suas habilidades ofensivas custarem mais 1 chakra aleatório por 1 turno. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Spiked Meat Tank",
      "file": "akimichi_chouji_(s)_skill_2_(spiked_meat_tank).jpg",
      "description": "If used on an enemy: That enemy will be dealt 25 damage and Chouji becomes invulnerable for 1 turn.  If used on himself or an ally: For 1 turn, all non-mental skills used on that ally will be countered and any countered enemy will be dealt 10 piercing damage*. This counter is Invisible and has a cooldown of 2.",
      "descriptionBR": "Se usada em um inimigo: o inimigo receberá 25 de dano e Chouji se tornará invulnerável por 1 turno.  Se usada nele mesmo ou em um aliado: por 1 turno, todas as habilidades não mentais usadas nesse aliado serão counteradas, e qualquer inimigo counterado receberá 10 de dano perfurante*; Esse counter é invisível e tem 2 de cooldown.",
      "descriptionRaw": "If used on an enemy: That enemy will be <Damage>dealt 25 damage<Damage> and Chouji becomes <Defense>invulnerable<Defense> for 1 turn. <br /> If used on himself or an ally: For 1 turn, all <Classes>non-mental<Classes> skills used on that ally will be <Defense>countered<Defense> and any <Defense>countered<Defense> enemy will be <Damage>dealt 10 piercing damage<Damage>*. This counter is Invisible and has a cooldown of 2.",
      "descriptionBRRaw": "Se usada em um inimigo: o inimigo <Damage>receberá 25 de dano<Damage> e Chouji se tornará <Defense>invulnerável<Defense> por 1 turno. <br /> Se usada nele mesmo ou em um aliado: por 1 turno, todas as habilidades <Classes>não mentais<Classes> usadas nesse aliado serão <Defense>counteradas<Defense>, e qualquer inimigo counterado <Damage>receberá 10 de dano perfurante<Damage>*; Esse counter é invisível e tem 2 de cooldown.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "__$"
      ],
      "cooldown": 1,
      "ruleDescription": "If used on an enemy: That enemy will be dealt 25 damage and Chouji becomes invulnerable for 1 turn.  If used on himself or an ally: For 1 turn, all non-mental skills used on that ally will be countered and any countered enemy will be dealt 10 piercing damage*. This counter is Invisible and has a cooldown of 2. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee, __$. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um inimigo: o inimigo receberá 25 de dano e Chouji se tornará invulnerável por 1 turno.  Se usada nele mesmo ou em um aliado: por 1 turno, todas as habilidades não mentais usadas nesse aliado serão counteradas, e qualquer inimigo counterado receberá 10 de dano perfurante*; Esse counter é invisível e tem 2 de cooldown. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee, __$. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Expansion Technique",
      "file": "akimichi_chouji_(s)_skill_3_(expansion_technique).jpg",
      "description": "Chouji grows gigantic, gaining 45 destructible defense for 3 turns. The following 3 turns, 'Mega Palm Thrusts' will target all enemies and 'Spiked Meat Tank' will target all enemies or will target all allies if used on an ally.",
      "descriptionBR": "Chouji cresce até se tornar gigante, ganhando 45 de defesa destrutível por 3 turnos. Nos 3 turnos seguintes, 'Mega Palm Thrusts' irá atingir todos os inimigos e 'Spiked Meat Tank' atingirá todos os inimigos, ou todos os aliados se usada em um aliado.",
      "descriptionRaw": "Chouji grows gigantic, gaining 45 <Defense>destructible defense<Defense> for 3 turns. The following 3 turns, <SkillName>'Mega Palm Thrusts'<SkillName> will target all enemies and <SkillName>'Spiked Meat Tank'<SkillName><Improvements> will target all enemies<Improvements> or <Improvements>will target all allies<Improvements> if used on an ally.",
      "descriptionBRRaw": "Chouji cresce até se tornar gigante, ganhando 45 de <Defense>defesa destrutível<Defense> por 3 turnos. Nos 3 turnos seguintes, <SkillName>'Mega Palm Thrusts'<SkillName> irá atingir todos os inimigos e <SkillName>'Spiked Meat Tank'<SkillName> <Improvements>atingirá todos os inimigos<Improvements>, ou <Improvements>todos os aliados<Improvements> se usada em um aliado.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "Chouji grows gigantic, gaining 45 destructible defense for 3 turns. The following 3 turns, 'Mega Palm Thrusts' will target all enemies and 'Spiked Meat Tank' will target all enemies or will target all allies if used on an ally. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouji cresce até se tornar gigante, ganhando 45 de defesa destrutível por 3 turnos. Nos 3 turnos seguintes, 'Mega Palm Thrusts' irá atingir todos os inimigos e 'Spiked Meat Tank' atingirá todos os inimigos, ou todos os aliados se usada em um aliado. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chouji Leap",
      "file": "akimichi_chouji_(s)_skill_4_(chouji_leap).jpg",
      "description": "This skill makes Akimichi Chouji (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Akimichi Chouji (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Akimichi Chouji (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Akimichi Chouji (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Akimichi Chouji (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Akimichi Chouji (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

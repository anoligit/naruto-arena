// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Sai (S)",
  "description": "Sai became capable of using a wider variety of techniques after improving his skills with his animal paintings. Besides that, Sai carries with him his powerful Sealing Technique.",
  "descriptionBR": "Sai se tornou capaz de usar uma variedade maior de técnicas após aprimorar suas habilidades com suas pinturas de animais. Além disso, Sai carrega consigo sua poderosa Técnica de Selamento.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_sai_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Tiger Vision Staring Bullet",
      "file": "shinobi_alliance_sai_(s)_skill_1_(tiger_vision_staring_bullet).png",
      "description": "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 25 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
      "descriptionBR": "Usando essa técnica de selamento, Sai atordoa permanentemente as habilidades ofensivas de um inimigo e causa 25 de dano a ele a cada turno. Se esse inimigo usar uma nova habilidade, esta habilidade terminará e Sai ganhará 1 chakra de Genjutsu. Esta habilidade termina se Sai for morto.",
      "descriptionRaw": "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 25 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
      "descriptionBRRaw": "Usando essa técnica de selamento, Sai atordoa permanentemente as habilidades ofensivas de um inimigo e causa 25 de dano a ele a cada turno. Se esse inimigo usar uma nova habilidade, esta habilidade terminará e Sai ganhará 1 chakra de Genjutsu. Esta habilidade termina se Sai for morto.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 25 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Action, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando essa técnica de selamento, Sai atordoa permanentemente as habilidades ofensivas de um inimigo e causa 25 de dano a ele a cada turno. Se esse inimigo usar uma nova habilidade, esta habilidade terminará e Sai ganhará 1 chakra de Genjutsu. Esta habilidade termina se Sai for morto. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Great Beast Painting: Kamikaze Birds",
      "file": "shinobi_alliance_sai_(s)_skill_2_(great_beast_painting_kamikaze_birds).png",
      "description": "Sai makes one enemy receive 5 additional damage from non-affliction skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
      "descriptionBR": "Sai faz com que um inimigo receba 5 de dano adicional de habilidades não-Affliction* e causa 10 de dano perfurante a ele a cada turno permanentemente. Se esse inimigo usar uma nova habilidade, ele receberá 20 de dano perfurante e essa habilidade terminará. Esta habilidade termina se Sai for morto.",
      "descriptionRaw": "Sai makes one enemy receive 5 additional damage from non-affliction skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
      "descriptionBRRaw": "Sai faz com que um inimigo receba 5 de dano adicional de habilidades não-Affliction* e causa 10 de dano perfurante a ele a cada turno permanentemente. Se esse inimigo usar uma nova habilidade, ele receberá 20 de dano perfurante e essa habilidade terminará. Esta habilidade termina se Sai for morto.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Action",
        "Instant*",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Sai makes one enemy receive 5 additional damage from non-affliction skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed. Chakra cost: 1 Gen. Catalog classes: Physical, Action, Instant*, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sai faz com que um inimigo receba 5 de dano adicional de habilidades não-Affliction* e causa 10 de dano perfurante a ele a cada turno permanentemente. Se esse inimigo usar uma nova habilidade, ele receberá 20 de dano perfurante e essa habilidade terminará. Esta habilidade termina se Sai for morto. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Action, Instant*, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Great Beast Painting: Ink Warriors",
      "file": "shinobi_alliance_sai_(s)_skill_3_(great_beast_painting_ink_warriors).png",
      "description": "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
      "descriptionBR": "Sai concede a si mesmo e a um aliado 20 pontos de defesa destrutível. Se a defesa destrutível desse aliado for destruída, 'Great Beast Painting: Kamikaze Birds' não terá custo por 1 turno. Se a defesa destrutível de Sai for destruída, 'Tiger Vision Staring Bullet' custará 1 chakra aleatório por 1 turno.",
      "descriptionRaw": "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
      "descriptionBRRaw": "Sai concede a si mesmo e a um aliado 20 pontos de defesa destrutível. Se a defesa destrutível desse aliado for destruída, 'Great Beast Painting: Kamikaze Birds' não terá custo por 1 turno. Se a defesa destrutível de Sai for destruída, 'Tiger Vision Staring Bullet' custará 1 chakra aleatório por 1 turno.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "_$1",
        "_$2",
        "_$3"
      ],
      "cooldown": 3,
      "ruleDescription": "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn. Chakra cost: 2 Random. Catalog classes: Physical, Instant, _$1, _$2, _$3. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sai concede a si mesmo e a um aliado 20 pontos de defesa destrutível. Se a defesa destrutível desse aliado for destruída, 'Great Beast Painting: Kamikaze Birds' não terá custo por 1 turno. Se a defesa destrutível de Sai for destruída, 'Tiger Vision Staring Bullet' custará 1 chakra aleatório por 1 turno. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, _$1, _$2, _$3. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sai Kunai Parry",
      "file": "shinobi_alliance_sai_(s)_skill_4_(sai_kunai_parry).png",
      "description": "This skill makes Shinobi Alliance Sai (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Sai (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Sai (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Sai (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

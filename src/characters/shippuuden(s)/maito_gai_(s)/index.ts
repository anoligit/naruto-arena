// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Maito Gai (S)",
  "description": "Team 9's Professor is back! Gai improved his techniques and strength much more. And now he will use all possible techniques to defeat Akatsuki. Whether releasing Hachimon Tonkou or using extreme taijutsu techniques.",
  "descriptionBR": "O professor do Time 9 está de volta! Gai aprimorou muito suas técnicas e força. Agora ele usará todas as técnicas possíveis para derrotar a Akatsuki, seja liberando o Hachimon Tonkou ou utilizando técnicas extremas de taijutsu.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "maito_gai_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Gai Nunchaku Style",
      "file": "maito_gai_(s)_skill_1_(gai_nunchaku_style).jpg",
      "description": "Gai deals 10 damage to one enemy for 3 turns. Whenever an enemy uses a new physical skill on him, they will take 15 damage. During this time, the target of this skill will receive 10 additional damage from 'Reactive Taijutsu Rampage'.",
      "descriptionBR": "Gai causa 10 de dano a um inimigo por 3 turnos. Sempre que um inimigo usar uma nova habilidade Physical contra ele, receberá 15 de dano*. Durante esse tempo, o alvo desta habilidade receberá 10 de dano adicional do 'Reactive Taijutsu Rampage'.",
      "descriptionRaw": "Gai <Damage>deals 10 damage<Damage> to one enemy for 3 turns. Whenever an enemy <Classes>uses a new physical skill<Classes> on him, they will <Damage>take 15 damage<Damage>. During this time, the target of this skill will <Improvements>receive 10 additional damage<Improvements> from <SkillName>'Reactive Taijutsu Rampage'<SkillName>.",
      "descriptionBRRaw": "Gai <Damage>causa 10 de dano<Damage> a um inimigo por 3 turnos. Sempre que um inimigo <Classes>usar uma nova habilidade Physical<Classes> contra ele, receberá <Damage>15 de dano<Damage>*. Durante esse tempo, o alvo desta habilidade <Improvements>receberá 10 de dano adicional<Improvements> do <SkillName>'Reactive Taijutsu Rampage'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee",
        "Harmful",
        "$_"
      ],
      "cooldown": 1,
      "ruleDescription": "Gai deals 10 damage to one enemy for 3 turns. Whenever an enemy uses a new physical skill on him, they will take 15 damage. During this time, the target of this skill will receive 10 additional damage from 'Reactive Taijutsu Rampage'. Chakra cost: 1 Tai. Catalog classes: Physical, Action, Melee, Harmful, $_. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gai causa 10 de dano a um inimigo por 3 turnos. Sempre que um inimigo usar uma nova habilidade Physical contra ele, receberá 15 de dano*. Durante esse tempo, o alvo desta habilidade receberá 10 de dano adicional do 'Reactive Taijutsu Rampage'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Action, Melee, Harmful, $_. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Reactive Taijutsu Rampage",
      "file": "maito_gai_(s)_skill_2_(reactive_taijutsu_rampage).png",
      "description": "Gai deals 25 damage to one enemy. This skill cannot be countered or reflected.",
      "descriptionBR": "Gai causa 25 de dano a um inimigo. Esta habilidade não pode ser counterada nem refletida.",
      "descriptionRaw": "Gai <Damage>deals 25 damage<Damage> to one enemy. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
      "descriptionBRRaw": "Gai <Damage>causa 25 de dano<Damage> a um inimigo. Esta habilidade não pode ser <Classes>counterada<Classes> nem <Classes>refletida<Classes>.",
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
      "ruleDescription": "Gai deals 25 damage to one enemy. This skill cannot be countered or reflected. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gai causa 25 de dano a um inimigo. Esta habilidade não pode ser counterada nem refletida. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Gate Release",
      "file": "maito_gai_(s)_skill_3_(gate_release).jpg",
      "description": "Gai release one gate per turn, gaining 10% unpierceable damage reduction and increasing by 5 the initial damage of his skills each turn for 6 turns. During this time, he will take 5 affliction damage* and cannot be healed.This skill becomes 'Asakuujaku' permanently.",
      "descriptionBR": "Gai libera um portão por turno, ganhando 10% de redução de dano impenetrável e aumentando em 5 o dano inicial causado por suas habilidades a cada turno por 6 turnos. Durante esse tempo, ele receberá 5 de dano affliction* e não poderá ser curado. Esta habilidade se transforma permanentemente em 'Asakuujaku'.",
      "descriptionRaw": "Gai release one gate per turn, gaining 10% <Defense>unpierceable damage reduction<Defense> and <Improvements>increasing by 5<Improvements> the <Invisible>initial damage<Invisible> of his <Classes>skills<Classes> each turn for 6 turns. During this time, he will take <Damage>5 affliction damage<Damage>* and cannot be <Defense>healed<Defense>.This skill <Improvements>becomes<Improvements> <SkillName>'Asakuujaku'<SkillName> permanently.",
      "descriptionBRRaw": "Gai libera um portão por turno, ganhando 10% de <Defense>redução de dano impenetrável<Defense> e <Improvements>aumentando em 5<Improvements> o <Invisible>dano inicial<Invisible> causado por suas <Classes>habilidades<Classes> a cada turno por 6 turnos. Durante esse tempo, ele <Damage>receberá 5 de dano affliction<Damage>* e não poderá ser <Defense>curado<Defense>. Esta habilidade se <Improvements>transforma<Improvements> permanentemente em 'Asakuujaku'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Affliction*",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Gai release one gate per turn, gaining 10% unpierceable damage reduction and increasing by 5 the initial damage of his skills each turn for 6 turns. During this time, he will take 5 affliction damage* and cannot be healed.This skill becomes 'Asakuujaku' permanently. Chakra cost: 1 Random. Catalog classes: Mental, Affliction*, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gai libera um portão por turno, ganhando 10% de redução de dano impenetrável e aumentando em 5 o dano inicial causado por suas habilidades a cada turno por 6 turnos. Durante esse tempo, ele receberá 5 de dano affliction* e não poderá ser curado. Esta habilidade se transforma permanentemente em 'Asakuujaku'. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Affliction*, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Muscle Block",
      "file": "maito_gai_(s)_skill_4_(muscle_block).jpg",
      "description": "This skill makes Maito Gai (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Maito Gai (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Maito Gai (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Maito Gai (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Maito Gai (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Maito Gai (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Asakuujaku",
      "file": "maito_gai_(s)_skill_5_(asakuujaku).jpg",
      "description": "Gai deals 15 piercing damage and 10 affliction damage to one enemy and stuns their skills for 1 turn. This skill cannot be countered or reflected.",
      "descriptionBR": "Gai causa 15 de dano perfurante e 10 de dano affliction a um inimigo e atordoa suas habilidades por 1 turno. Esta habilidade não pode ser counterada nem refletida.",
      "descriptionRaw": "Gai <Damage>deals 15 piercing damage<Damage> and <Damage>10 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their skills for 1 turn. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
      "descriptionBRRaw": "Gai <Damage>causa 15 de dano perfurante<Damage> e <Damage>10 de dano affliction<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades por 1 turno. Esta habilidade não pode ser <Classes>counterada<Classes> nem <Classes>refletida<Classes>.",
      "energy": [
        "Tai",
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful",
        "Affliction"
      ],
      "cooldown": 2,
      "ruleDescription": "Gai deals 15 piercing damage and 10 affliction damage to one enemy and stuns their skills for 1 turn. This skill cannot be countered or reflected. Chakra cost: 1 Tai, 1 Blood. Catalog classes: Physical, Instant, Melee, Harmful, Affliction. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gai causa 15 de dano perfurante e 10 de dano affliction a um inimigo e atordoa suas habilidades por 1 turno. Esta habilidade não pode ser counterada nem refletida. Custo de chakra: 1 taijutsu, 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee, Harmful, Affliction. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

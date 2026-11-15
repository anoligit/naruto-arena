// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Orochimaru (S)",
  "description": "Orochimaru is in the last year of his current body's useful life, so he rushes to take over Sasuke's body. His combat skills remain incredible. He is able to generate and control immense hordes of snakes and also regenerate easily.",
  "descriptionBR": "Orochimaru está no último ano de vida útil de seu corpo atual e, por isso, apressa-se para tomar o corpo de Sasuke. Suas habilidades de combate continuam incríveis. Ele é capaz de gerar e controlar imensas hordas de cobras, além de se regenerar com facilidade.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "orochimaru_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Extensive Kusanagi",
      "file": "orochimaru_(s)_skill_1_(extensive_kusanagi).png",
      "description": "Orochimaru first stuns one enemy's non-mental skills for 1 turn, and then steals 10 health from them each turn for 3 turns. This skill cannot stack.",
      "descriptionBR": "Orochimaru primeiro atordoa as habilidades não mentais de um inimigo por 1 turno e, então, rouba 10 de vida dele a cada turno por 3 turnos. Essa habilidade não acumula.",
      "descriptionRaw": "Orochimaru first <Effects>stuns<Effects> one enemy's <Classes>non-mental skills<Classes> for 1 turn, and then <Damage>steals 10 health<Damage> from them each turn for 3 turns. This skill <Effects>cannot stack<Effects>.",
      "descriptionBRRaw": "Orochimaru primeiro <Effects>atordoa<Effects> as <Classes>habilidades não mentais<Classes> de um inimigo por 1 turno e, então, <Damage>rouba 10 de vida<Damage> dele a cada turno por 3 turnos. Essa habilidade <Effects>não acumula<Effects>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Control",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 2,
      "ruleDescription": "Orochimaru first stuns one enemy's non-mental skills for 1 turn, and then steals 10 health from them each turn for 3 turns. This skill cannot stack. Chakra cost: 1 Tai, 1 Random. Catalog classes: Affliction, Control, Ranged, Harmful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Orochimaru primeiro atordoa as habilidades não mentais de um inimigo por 1 turno e, então, rouba 10 de vida dele a cada turno por 3 turnos. Essa habilidade não acumula. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Affliction, Control, Ranged, Harmful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Snake Horde",
      "file": "orochimaru_(s)_skill_2_(snake_horde).png",
      "description": "Orochimaru deals 20 affliction damage to one enemy and makes their stun effects last 1 less turn for 1 turn. During this time, if that enemy uses a new harmful skill, 'Wave of Swords' will be applied to them.",
      "descriptionBR": "Orochimaru causa 20 de dano affliction a um inimigo e faz com que os efeitos de atordoamento dele durem 1 turno a menos por 1 turno. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, 'Wave of Swords' será aplicada a ele.",
      "descriptionRaw": "Orochimaru <Damage>deals 20 affliction damage<Damage> to one enemy and makes their <Effects>stun effects last 1 less turn<Effects> for 1 turn. During this time, if that enemy uses a new <Classes>harmful skill<Classes>, <SkillName>'Wave of Swords'<SkillName> will be <Effects>applied<Effects> to them.",
      "descriptionBRRaw": "Orochimaru <Damage>causa 20 de dano affliction<Damage> a um inimigo e faz com que os <Effects>efeitos de atordoamento dele durem 1 turno a menos<Effects> por 1 turno. Durante esse tempo, se esse inimigo usar uma nova <Classes>habilidade ofensiva<Classes>, <SkillName>'Wave of Swords'<SkillName> será <Effects>aplicada<Effects> a ele.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "Orochimaru deals 20 affliction damage to one enemy and makes their stun effects last 1 less turn for 1 turn. During this time, if that enemy uses a new harmful skill, 'Wave of Swords' will be applied to them. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Orochimaru causa 20 de dano affliction a um inimigo e faz com que os efeitos de atordoamento dele durem 1 turno a menos por 1 turno. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, 'Wave of Swords' será aplicada a ele. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Shadow Snake Ultimate",
      "file": "orochimaru_(s)_skill_3_(shadow_snake_ultimate).png",
      "description": "Orochimaru targets one enemy, applying both 'Extensive Kusanagi' and 'Snake Horde' to them. After that, 'Triple Rashoumon' will also be applied to Orochimaru. This skill cannot be countered.",
      "descriptionBR": "Orochimaru alveja um inimigo, aplicando tanto 'Extensive Kusanagi' quanto 'Snake Horde' a ele. Depois disso, 'Triple Rashoumon' também será aplicada em Orochimaru. Essa habilidade não pode ser counterada.",
      "descriptionRaw": "Orochimaru targets one enemy, <Effects>applying<Effects> both <SkillName>'Extensive Kusanagi'<SkillName> and <SkillName>'Snake Horde'<SkillName> to them. After that, <SkillName>'Triple Rashoumon'<SkillName> will also be <Effects>applied<Effects> to Orochimaru. This skill <Defense>cannot be countered<Defense>.",
      "descriptionBRRaw": "Orochimaru alveja um inimigo, <Effects>aplicando<Effects> tanto <SkillName>'Extensive Kusanagi'<SkillName> quanto <SkillName>'Snake Horde'<SkillName> a ele. Depois disso, <SkillName>'Triple Rashoumon'<SkillName> também será <Effects>aplicada<Effects> em Orochimaru. Essa habilidade <Defense>não pode ser counterada<Defense>.",
      "energy": [
        "Blood",
        "Tai",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 4,
      "ruleDescription": "Orochimaru targets one enemy, applying both 'Extensive Kusanagi' and 'Snake Horde' to them. After that, 'Triple Rashoumon' will also be applied to Orochimaru. This skill cannot be countered. Chakra cost: 1 Blood, 1 Tai, 1 Random. Catalog classes: Affliction, Instant, Melee, Harmful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Orochimaru alveja um inimigo, aplicando tanto 'Extensive Kusanagi' quanto 'Snake Horde' a ele. Depois disso, 'Triple Rashoumon' também será aplicada em Orochimaru. Essa habilidade não pode ser counterada. Custo de chakra: 1 linhagem sanguínea, 1 taijutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Fast Skin Replacement",
      "file": "orochimaru_(s)_skill_4_(fast_skin_replacement).png",
      "description": "This skill makes Orochimaru (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Orochimaru (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Orochimaru (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Orochimaru (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Orochimaru (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Orochimaru (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Triple Rashoumon",
      "file": "orochimaru_(s)_skill_5_(triple_rashoumon).png",
      "description": "When Orochimaru uses 'Shadow Snake Ultimate', he gains 20 points of destructible defense that lasts for 3 turns and also ignores stun effects until that defense ends. This skill ignores invulnerability.",
      "descriptionBR": "Quando Orochimaru usa 'Shadow Snake Ultimate', ele ganha 20 pontos de defesa destrutível que duram 3 turnos e também ignora efeitos de atordoamento até que essa defesa termine. Essa habilidade ignora invulnerabilidade.",
      "descriptionRaw": "When Orochimaru uses <SkillName>'Shadow Snake Ultimate'<SkillName>, he <Defense>gains 20 points of destructible defense<Defense> that lasts for 3 turns and also <Defense>ignores stun effects<Defense> until that defense ends. This skill <Defense>ignores invulnerability<Defense>.",
      "descriptionBRRaw": "Quando Orochimaru usa <SkillName>'Shadow Snake Ultimate'<SkillName>, ele <Defense>ganha 20 pontos de defesa destrutível<Defense> que duram 3 turnos e também <Defense>ignora efeitos de atordoamento<Defense> até que essa defesa termine. Essa habilidade <Defense>ignora invulnerabilidade<Defense>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 0,
      "ruleDescription": "When Orochimaru uses 'Shadow Snake Ultimate', he gains 20 points of destructible defense that lasts for 3 turns and also ignores stun effects until that defense ends. This skill ignores invulnerability. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Quando Orochimaru usa 'Shadow Snake Ultimate', ele ganha 20 pontos de defesa destrutível que duram 3 turnos e também ignora efeitos de atordoamento até que essa defesa termine. Essa habilidade ignora invulnerabilidade. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Wave of Swords",
      "file": "orochimaru_(s)_skill_6_(wave_of_swords).png",
      "description": "The enemy affected by this skill will receive 5 affliction damage for 3 turns. During this time, that enemy will be unable to be healed.",
      "descriptionBR": "O inimigo afetado por essa habilidade irá receber 5 de dano affliction por 3 turnos. Durante esse tempo, ele ficará incapaz de ser curado.",
      "descriptionRaw": "The enemy affected by this skill will <Damage>receive 5 affliction damage<Damage> for 3 turns. During this time, that enemy will be <Effects>unable to be healed<Effects>.",
      "descriptionBRRaw": "O inimigo afetado por essa habilidade irá <Damage>receber 5 de dano affliction<Damage> por 3 turnos. Durante esse tempo, ele ficará <Effects>incapaz de ser curado<Effects>.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "The enemy affected by this skill will receive 5 affliction damage for 3 turns. During this time, that enemy will be unable to be healed. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Ranged, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "O inimigo afetado por essa habilidade irá receber 5 de dano affliction por 3 turnos. Durante esse tempo, ele ficará incapaz de ser curado. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

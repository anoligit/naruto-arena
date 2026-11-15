// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sasori of the Red Sand (S)",
  "description": "Sasori is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone. ORIGINAL DESIGN: Pavera",
  "descriptionBR": "Sasori é um membro veterano da Akatsuki e um lendário mestre de marionetes. Há rumores de que ele tenha derrotado uma nação inteira usando apenas marionetes. DESIGN ORIGINAL: Pavera",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sasori_of_the_red_sand_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Thousand Hands",
      "file": "sasori_of_the_red_sand_(s)_skill_1_(thousand_hands).png",
      "description": "Using this skill, Sasori deals 10 damage to an enemy for 2 turns and gains 5 points of destructible defense each turn. If 'Poison Gas' is used on the target in the following turn, it will last 1 additional turn on them.",
      "descriptionBR": "Ao usar essa habilidade, Sasori causa 10 de dano a um inimigo por 2 turnos e ganha 5 pontos de defesa destrutível a cada turno. Se 'Poison Gas' for usada no alvo no próximo turno, ela irá durar 1 turno adicional nele.",
      "descriptionRaw": "Using this skill, Sasori <Damage>deals 10 damage<Damage> to an enemy for 2 turns and <Defense>gains 5 points of destructible defense<Defense> each turn. If <SkillName>'Poison Gas'<SkillName> is used on the target in the following turn, it will <Improvements>last 1 additional turn<Improvements> on them.",
      "descriptionBRRaw": "Ao usar essa habilidade, Sasori <Damage>causa 10 de dano<Damage> a um inimigo por 2 turnos e <Defense>ganha 5 pontos de defesa destrutível<Defense> a cada turno. Se <SkillName>'Poison Gas'<SkillName> for usada no alvo no próximo turno, ela irá <Improvements>durar 1 turno adicional<Improvements> nele.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Using this skill, Sasori deals 10 damage to an enemy for 2 turns and gains 5 points of destructible defense each turn. If 'Poison Gas' is used on the target in the following turn, it will last 1 additional turn on them. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao usar essa habilidade, Sasori causa 10 de dano a um inimigo por 2 turnos e ganha 5 pontos de defesa destrutível a cada turno. Se 'Poison Gas' for usada no alvo no próximo turno, ela irá durar 1 turno adicional nele. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Poison Gas",
      "file": "sasori_of_the_red_sand_(s)_skill_2_(poison_gas).png",
      "description": "Sasori deals 5 affliction damage to all enemies for 5 turns. During this time, Sasori gains 5 points of destructible defense and any enemy that uses a new harmful skill will be dealt 5 affliction damage. This skill lasts 1 additional turn on an enemy affected by 'Thousand Hands'. This skill cannot be countered and ends when Sasori is killed.",
      "descriptionBR": "Sasori causa 5 de dano affliction a todos os inimigos por 5 turnos. Durante esse tempo, Sasori ganha 5 pontos de defesa destrutível e qualquer inimigo que usar uma nova habilidade ofensiva irá receber 5 de dano affliction. Essa habilidade irá durar 1 turno adicional em um inimigo afetado por 'Thousand Hands'. Essa habilidade não pode ser counterada e termina quando Sasori for morto.",
      "descriptionRaw": "Sasori <Damage>deals 5 affliction damage<Damage> to all enemies for 5 turns. During this time, Sasori <Defense>gains 5 points of destructible defense<Defense> and any enemy that uses a new <Classes>harmful skill<Classes> will be <Damage>dealt 5 affliction damage<Damage>. This skill <Improvements>lasts 1 additional turn<Improvements> on an enemy affected by <SkillName>'Thousand Hands'<SkillName>. This skill <Defense>cannot be countered<Defense> and ends when Sasori is killed.",
      "descriptionBRRaw": "Sasori <Damage>causa 5 de dano affliction<Damage> a todos os inimigos por 5 turnos. Durante esse tempo, Sasori <Defense>ganha 5 pontos de defesa destrutível<Defense> e qualquer inimigo que usar uma nova <Classes>habilidade ofensiva<Classes> irá <Damage>receber 5 de dano affliction<Damage>. Essa habilidade irá <Improvements>durar 1 turno adicional<Improvements> em um inimigo afetado por <SkillName>'Thousand Hands'<SkillName>. Essa habilidade <Defense>não pode ser counterada<Defense> e termina quando Sasori for morto.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Sasori deals 5 affliction damage to all enemies for 5 turns. During this time, Sasori gains 5 points of destructible defense and any enemy that uses a new harmful skill will be dealt 5 affliction damage. This skill lasts 1 additional turn on an enemy affected by 'Thousand Hands'. This skill cannot be countered and ends when Sasori is killed. Chakra cost: 2 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori causa 5 de dano affliction a todos os inimigos por 5 turnos. Durante esse tempo, Sasori ganha 5 pontos de defesa destrutível e qualquer inimigo que usar uma nova habilidade ofensiva irá receber 5 de dano affliction. Essa habilidade irá durar 1 turno adicional em um inimigo afetado por 'Thousand Hands'. Essa habilidade não pode ser counterada e termina quando Sasori for morto. Custo de chakra: 2 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Iron Sand",
      "file": "sasori_of_the_red_sand_(s)_skill_3_(iron_sand).png",
      "description": "Sasori summons the Third Kazekage's puppet for 3 turns. Each turn, Sasori gains 10 permanent destructible defense and any enemy that uses a new harmful skill on Sasori will take 5 piercing damage. During this time, this skill becomes 'Satetsu Kaiho' and 'Thousand Hands' becomes 'Satetsu Kesshu'.",
      "descriptionBR": "Sasori invoca a marionete do Terceiro Kazekage por 3 turnos. A cada turno, Sasori ganha 10 de defesa destrutível permanente e qualquer inimigo que usar uma nova habilidade ofensiva em Sasori irá receber 5 de dano perfurante. Durante esse tempo, essa habilidade se torna 'Satetsu Kaiho' e 'Thousand Hands' se torna 'Satetsu Kesshu'.",
      "descriptionRaw": "Sasori summons the Third Kazekage's puppet for 3 turns. Each turn, Sasori <Defense>gains 10 permanent destructible defense<Defense> and any enemy that uses a new <Classes>harmful skill<Classes> on Sasori will <Damage>take 5 piercing damage<Damage>. During this time, this skill becomes <SkillName>'Satetsu Kaiho'<SkillName> and <SkillName>'Thousand Hands'<SkillName> becomes <SkillName>'Satetsu Kesshu'<SkillName>.",
      "descriptionBRRaw": "Sasori invoca a marionete do Terceiro Kazekage por 3 turnos. A cada turno, Sasori <Defense>ganha 10 de defesa destrutível permanente<Defense> e qualquer inimigo que usar uma nova <Classes>habilidade ofensiva<Classes> em Sasori irá <Damage>receber 5 de dano perfurante<Damage>. Durante esse tempo, essa habilidade se torna <SkillName>'Satetsu Kaiho'<SkillName> e <SkillName>'Thousand Hands'<SkillName> se torna <SkillName>'Satetsu Kesshu'<SkillName>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Sasori summons the Third Kazekage's puppet for 3 turns. Each turn, Sasori gains 10 permanent destructible defense and any enemy that uses a new harmful skill on Sasori will take 5 piercing damage. During this time, this skill becomes 'Satetsu Kaiho' and 'Thousand Hands' becomes 'Satetsu Kesshu'. Chakra cost: 1 Blood. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori invoca a marionete do Terceiro Kazekage por 3 turnos. A cada turno, Sasori ganha 10 de defesa destrutível permanente e qualquer inimigo que usar uma nova habilidade ofensiva em Sasori irá receber 5 de dano perfurante. Durante esse tempo, essa habilidade se torna 'Satetsu Kaiho' e 'Thousand Hands' se torna 'Satetsu Kesshu'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Puppet Protection",
      "file": "sasori_of_the_red_sand_(s)_skill_4_(puppet_protection).png",
      "description": "This skill makes Sasori invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Sasori invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Sasori <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Sasori <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Sasori invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Sasori invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Satetsu Kaiho",
      "file": "sasori_of_the_red_sand_(s)_skill_5_(satetsu_kaiho).png",
      "description": "Sasori gathers a great volume of iron sand. This skill deals 30 piercing damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable. Afterwards, Sasori gains 15 points of destructible defense for 1 turn.",
      "descriptionBR": "Sasori reúne um grande volume de areia de ferro. Essa habilidade causa 30 de dano perfurante a um inimigo. Por 2 turnos, esse inimigo não poderá reduzir dano nem se tornar invulnerável. Depois disso, Sasori ganha 15 pontos de defesa destrutível por 1 turno.",
      "descriptionRaw": "Sasori gathers a great volume of iron sand. This skill <Damage>deals 30 piercing damage<Damage> to one enemy. For 2 turns, that enemy will be unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>. Afterwards, Sasori <Defense>gains 15 points of destructible defense<Defense> for 1 turn.",
      "descriptionBRRaw": "Sasori reúne um grande volume de areia de ferro. Essa habilidade <Damage>causa 30 de dano perfurante<Damage> a um inimigo. Por 2 turnos, esse inimigo não poderá <Defense>reduzir dano<Defense> nem <Defense>se tornar invulnerável<Defense>. Depois disso, Sasori <Defense>ganha 15 pontos de defesa destrutível<Defense> por 1 turno.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasori gathers a great volume of iron sand. This skill deals 30 piercing damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable. Afterwards, Sasori gains 15 points of destructible defense for 1 turn. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori reúne um grande volume de areia de ferro. Essa habilidade causa 30 de dano perfurante a um inimigo. Por 2 turnos, esse inimigo não poderá reduzir dano nem se tornar invulnerável. Depois disso, Sasori ganha 15 pontos de defesa destrutível por 1 turno. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Satetsu Kesshu",
      "file": "sasori_of_the_red_sand_(s)_skill_6_(satetsu_kesshu).png",
      "description": "Sasori creates a giant sphere of branching spikes. This skill deals 25 piercing damage to all enemies. If an enemy's health drops to 10 or lower, they will be killed. This skill cannot be countered or reflected.",
      "descriptionBR": "Sasori cria uma esfera gigante de espinhos ramificados. Essa habilidade causa 25 de dano perfurante a todos os inimigos. Se a vida de um inimigo cair para 10 ou menos, ele será morto. Essa habilidade não pode ser counterada nem refletida.",
      "descriptionRaw": "Sasori creates a giant sphere of branching spikes. This skill <Damage>deals 25 piercing damage<Damage> to all enemies. If an enemy's health drops to 10 or lower, they will be <Effects>killed<Effects>. This skill <Defense>cannot be countered or reflected<Defense>.",
      "descriptionBRRaw": "Sasori cria uma esfera gigante de espinhos ramificados. Essa habilidade <Damage>causa 25 de dano perfurante<Damage> a todos os inimigos. Se a vida de um inimigo cair para 10 ou menos, ele será <Effects>morto<Effects>. Essa habilidade <Defense>não pode ser counterada nem refletida<Defense>.",
      "energy": [
        "Blood",
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Sasori creates a giant sphere of branching spikes. This skill deals 25 piercing damage to all enemies. If an enemy's health drops to 10 or lower, they will be killed. This skill cannot be countered or reflected. Chakra cost: 1 Blood, 1 Nin, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori cria uma esfera gigante de espinhos ramificados. Essa habilidade causa 25 de dano perfurante a todos os inimigos. Se a vida de um inimigo cair para 10 ou menos, ele será morto. Essa habilidade não pode ser counterada nem refletida. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

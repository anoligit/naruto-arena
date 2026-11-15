// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamato (S)",
  "description": "Yamato(s) is a member of ANBU whose real name is unknown. Given the code name Yamato(s) by Tsunade for this mission, he is tasked to lead Team 7 while Kakashi recovers.",
  "descriptionBR": "Yamato(s) é membro do ANBU cujo nome verdadeiro é desconhecido. Recebeu o codinome Yamato(s) de Tsunade para esta missão, e foi designado para liderar o Time 7 enquanto Kakashi se recupera.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yamato_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sanctuary Enlightenment Enclosing Palm",
      "file": "yamato_(s)_skill_1_(sanctuary_enlightenment_enclosing_palm).jpg",
      "description": "Yamato uses an ancient technique that seals one enemy's power, dealing 30 piercing damage to them. Afterwards, that enemy will ignore all helpful effects for 1 turn.",
      "descriptionBR": "Yamato usa uma técnica antiga que sela o poder de um inimigo, causando 30 de dano perfurante a ele. Depois disso, esse inimigo irá ignorar todos os efeitos defensivos por 1 turno.",
      "descriptionRaw": "Yamato uses an ancient technique that seals one enemy's power, <Damage>dealing 30 piercing damage<Damage> to them. Afterwards, that enemy will <Defense>ignore all helpful effects<Defense> for 1 turn.",
      "descriptionBRRaw": "Yamato usa uma técnica antiga que sela o poder de um inimigo, <Damage>causando 30 de dano perfurante<Damage> a ele. Depois disso, esse inimigo irá <Defense>ignorar todos os efeitos defensivos<Defense> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Yamato uses an ancient technique that seals one enemy's power, dealing 30 piercing damage to them. Afterwards, that enemy will ignore all helpful effects for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yamato usa uma técnica antiga que sela o poder de um inimigo, causando 30 de dano perfurante a ele. Depois disso, esse inimigo irá ignorar todos os efeitos defensivos por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Four Column Prison",
      "file": "yamato_(s)_skill_2_(four_column_prison).jpg",
      "description": "Yamato creates a barrier of wood around one enemy or ally. If used on an enemy, that enemy will have their non-mental skills stunned and will become invulnerable to helpful skills for 2 turns. If used on an ally, that ally will gain 40 destructible defense. This skill ignores invulnerability.",
      "descriptionBR": "Yamato cria uma barreira de madeira ao redor de um inimigo ou aliado. Se usada em um inimigo, ele terá suas skills non-mental atordoadas e ficará invulnerável a habilidades defensivas por 2 turnos. Se usada em um aliado, ele ganha 40 de defesa destrutível. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Yamato creates a barrier of wood around one enemy or ally. If used on an enemy, that enemy will have their <Classes>non-mental<Classes> skills <Effects>stunned<Effects> and will become <Defense>invulnerable<Defense> to <Classes>helpful<Classes> skills for 2 turns. If used on an ally, that ally will gain 40 <Defense>destructible defense<Defense>. This skill <Classes>ignores invulnerability<Classes>.",
      "descriptionBRRaw": "Yamato cria uma barreira de madeira ao redor de um inimigo ou aliado. Se usada em um inimigo, ele terá suas skills <Classes>non-mental<Classes> <Effects>atordoadas<Effects> e ficará <Defense>invulnerável<Defense> a habilidades <Classes>defensivas<Classes> por 2 turnos. Se usada em um aliado, ele ganha 40 de <Defense>defesa destrutível<Defense>. Esta habilidade <Classes>ignora invulnerabilidade<Classes>.",
      "energy": [
        "Blood",
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Yamato creates a barrier of wood around one enemy or ally. If used on an enemy, that enemy will have their non-mental skills stunned and will become invulnerable to helpful skills for 2 turns. If used on an ally, that ally will gain 40 destructible defense. This skill ignores invulnerability. Chakra cost: 1 Blood, 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yamato cria uma barreira de madeira ao redor de um inimigo ou aliado. Se usada em um inimigo, ele terá suas skills non-mental atordoadas e ficará invulnerável a habilidades defensivas por 2 turnos. Se usada em um aliado, ele ganha 40 de defesa destrutível. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Wood Clone",
      "file": "yamato_(s)_skill_3_(wood_clone).jpg",
      "description": "Yamato protects one ally or himself with a clone of wood for 1 turn, countering the first physical or chakra skill used against them. The countered enemy will take 20 damage* and the protected ally will gain 20 destructible defense. This skill is invisible.",
      "descriptionBR": "Yamato protege um aliado ou a si mesmo com um clone de madeira por 1 turno, counterando a primeira habilidade Physical ou Chakra usada contra eles. O inimigo counterado sofrerá 20 de dano* e o aliado protegido ganhará 20 de defesa destrutível. Esta skill é invisível.",
      "descriptionRaw": "Yamato protects one ally or himself with a clone of wood for 1 turn, <Defense>countering<Defense> the first <Classes>physical or chakra skill<Classes> used against them. The <Defense>countered<Defense> enemy will <Damage>take 20 damage<Damage>* and the protected ally will gain 20 <Defense>destructible defense<Defense>. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Yamato protege um aliado ou a si mesmo com um clone de madeira por 1 turno, <Defense>counterando<Defense> a primeira <Classes>habilidade Physical ou Chakra<Classes> usada contra eles. O inimigo <Defense>counterado<Defense> sofrerá <Damage>20 de dano<Damage>* e o aliado protegido ganhará 20 de <Defense>defesa destrutível<Defense>. <Invisible>Esta skill é invisível<Invisible>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee*"
      ],
      "cooldown": 2,
      "ruleDescription": "Yamato protects one ally or himself with a clone of wood for 1 turn, countering the first physical or chakra skill used against them. The countered enemy will take 20 damage* and the protected ally will gain 20 destructible defense. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee*. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yamato protege um aliado ou a si mesmo com um clone de madeira por 1 turno, counterando a primeira habilidade Physical ou Chakra usada contra eles. O inimigo counterado sofrerá 20 de dano* e o aliado protegido ganhará 20 de defesa destrutível. Esta skill é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee*. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Wood Locking Wall",
      "file": "yamato_(s)_skill_4_(wood_locking_wall).jpg",
      "description": "This skill makes Yamato (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Yamato (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yamato (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Yamato (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yamato (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Yamato (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

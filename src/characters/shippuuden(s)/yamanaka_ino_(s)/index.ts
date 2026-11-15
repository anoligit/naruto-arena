// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamanaka Ino (S)",
  "description": "In the past couple years Ino(s) has become a chuunin and improved her ability with her family's mind control techniques. During this time she also began learning rudimentary medical techniques.",
  "descriptionBR": "Nos últimos anos, Ino se tornou uma chuunin e aprimorou sua habilidade com as técnicas de controle mental de sua família. Durante esse tempo, ela também começou a aprender técnicas médicas rudimentares.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yamanaka_ino_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mind Body Switch",
      "file": "yamanaka_ino_(s)_skill_1_(mind_body_switch).jpeg",
      "description": "Ino forces her mind into one enemy, dealing 25 piercing damage to them and ending any delayed skill that enemy currently has. Afterwards, that enemy will be stunned for 1 turn.",
      "descriptionBR": "Ino força sua mente dentro de um inimigo, causando 25 de dano perfurante e encerrando qualquer habilidade atrasada que esse inimigo possui. Em seguida, esse inimigo será atordoado por 1 turno.",
      "descriptionRaw": "Ino forces her mind into one enemy, <Damage>dealing 25 piercing damage<Damage> to them and <Effects>ending<Effects> any <Classes>delayed<Classes> skill that enemy currently has. Afterwards, that enemy will be <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Ino força sua mente dentro de um inimigo, <Damage>causando 25 de dano perfurante<Damage> e <Effects>encerrando<Effects> qualquer habilidade <Classe>atrasada<Classe> que esse inimigo possui. Em seguida, esse inimigo será <Effects>atordoado<Effects> por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Ino forces her mind into one enemy, dealing 25 piercing damage to them and ending any delayed skill that enemy currently has. Afterwards, that enemy will be stunned for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ino força sua mente dentro de um inimigo, causando 25 de dano perfurante e encerrando qualquer habilidade atrasada que esse inimigo possui. Em seguida, esse inimigo será atordoado por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Proxy Surveillance",
      "file": "yamanaka_ino_(s)_skill_2_(proxy_surveillance).jpeg",
      "description": "Ino predicts one enemy's move. For 1 turn, if this character uses a new harmful skill, it will be delayed by 2 turns. This skill is invisible.",
      "descriptionBR": "Ino prevê o movimento de um inimigo. Por 1 turno, se esse personagem usar uma nova habilidade ofensiva, ela será atrasada em 2 turnos. Esta habilidade é invisível.",
      "descriptionRaw": "Ino predicts one enemy's move. For 1 turn, if this character <Classes>uses a new harmful skill<Classes>, it will be <Effects>delayed<Effects> by 2 turns. <Invisible>This skill is invisible.<Invisible>",
      "descriptionBRRaw": "Ino prevê o movimento de um inimigo. Por 1 turno, se esse personagem <Classes>usar uma nova habilidade ofensiva<Classes>, ela será <Effects>atrasada<Effects> em 2 turnos. <Invisible>Esta habilidade é invisível.<Invisible>",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Ino predicts one enemy's move. For 1 turn, if this character uses a new harmful skill, it will be delayed by 2 turns. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ino prevê o movimento de um inimigo. Por 1 turno, se esse personagem usar uma nova habilidade ofensiva, ela será atrasada em 2 turnos. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rudimentary Healing",
      "file": "yamanaka_ino_(s)_skill_3_(rudimentary_healing).jpg",
      "description": "Using her healing skills, Ino heals an ally for 20 health. If Ino has used any of her other skills on the previous turn, this skill will heal 10 additional health instead.",
      "descriptionBR": "Usando suas habilidades de cura, Ino cura um aliado em 20 de vida. Se Ino tiver usado uma de suas outras habilidades no turno anterior, esta habilidade curará 10 de vida adicional.",
      "descriptionRaw": "Using her healing skills, Ino <Defense>heals<Defense> an ally <Defense>for 20 health<Defense>. If Ino has <Classes>used any of her other skills<Classes> on the previous turn, this skill <Improvements>will heal 10 additional health<Improvements> instead.",
      "descriptionBRRaw": "Usando suas habilidades de cura, Ino <Defense>cura<Defense> um aliado <Defense>em 20 de vida<Defense>. Se Ino tiver <Classes>usado uma de suas outras habilidades<Classes> no turno anterior, esta habilidade <Improvements>curará 10 de vida adicional<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Using her healing skills, Ino heals an ally for 20 health. If Ino has used any of her other skills on the previous turn, this skill will heal 10 additional health instead. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando suas habilidades de cura, Ino cura um aliado em 20 de vida. Se Ino tiver usado uma de suas outras habilidades no turno anterior, esta habilidade curará 10 de vida adicional. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hide",
      "file": "yamanaka_ino_(s)_skill_4_(hide).jpeg",
      "description": "This skill makes Yamanaka Ino (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Yamanaka Ino (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yamanaka Ino (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Yamanaka Ino (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yamanaka Ino (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Yamanaka Ino (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

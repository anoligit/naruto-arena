// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Karin (S)",
  "description": "Karin is a former subordinate of Orochimaru who oversaw one of his secret laboratories. She is a skilled sensor and master of chakra control who now follows Uchiha Sasuke.",
  "descriptionBR": "Karin é uma ex-subordinada de Orochimaru que supervisionava um de seus laboratórios secretos. Ela é uma sensora habilidosa e mestre no controle de chakra, e agora segue Uchiha Sasuke.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "karin_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Minds Eye of Kagura",
      "file": "karin_(s)_skill_1_(minds_eye_of_kagura).jpg",
      "description": "Karin predicts one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and their harmful skills will be stunned for 1 turn; If that enemy uses a helpful skill, the cost of their skills will increase by 1 random chakra for 2 turns. This skill is invisible.",
      "descriptionBR": "Karin prevê um inimigo. Por 1 turno, se esse inimigo usar uma habilidade ofensiva, ele será counterado e suas habilidades ofensivas serão atordoadas por 1 turno; se esse inimigo usar uma habilidade defensiva, o custo das habilidades dele irá aumentar em 1 chakra aleatório por 2 turnos. Esta habilidade é invisível.",
      "descriptionRaw": "Karin predicts one enemy. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes> they will be <Defense>countered<Defense> and their <Classes>harmful skills<Classes> will be<Effects> stunned<Effects> for 1 turn; If that enemy <Classes>uses a helpful skill<Classes>, the <Improvements>cost of their skills<Improvements> will <Effects><Improvements>increase by 1 random chakra<Improvements><Effects> for 2 turns. This skill is <Defense>invisible<Defense>.",
      "descriptionBRRaw": "Karin prevê um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma habilidade ofensiva<Classes>, ele será <Defense>counterado<Defense> e suas <Classes>habilidades ofensivas<Classes> serão <Effects>atordoadas<Effects> por 1 turno; se esse inimigo <Classes>usar uma habilidade defensiva<Classes>, o <Improvements>custo das habilidades <Improvements>dele irá <Improvements>aumentar em 1 chakra aleatório <Improvements>por 2 turnos. Esta habilidade é<Invisible> invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Karin predicts one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and their harmful skills will be stunned for 1 turn; If that enemy uses a helpful skill, the cost of their skills will increase by 1 random chakra for 2 turns. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Karin prevê um inimigo. Por 1 turno, se esse inimigo usar uma habilidade ofensiva, ele será counterado e suas habilidades ofensivas serão atordoadas por 1 turno; se esse inimigo usar uma habilidade defensiva, o custo das habilidades dele irá aumentar em 1 chakra aleatório por 2 turnos. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Raging Punch",
      "file": "karin_(s)_skill_2_(raging_punch).jpg",
      "description": "Karin deals 30 damage to one enemy. For 2 turns, that enemy will be unable to use their stun skills (this is a stun effect); Does not stack. This skill ignores invulnerability.",
      "descriptionBR": "Karin causa 30 de dano a 1 inimigo. Por 2 turnos, esse inimigo não poderá usar suas habilidades de atordoar (isso é um efeito de atordoamento); Não se acumula. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Karin <Damage>deals 30 damage<Damage> to one enemy. For 2 turns, that enemy will be <Effects>unable to use <Effects>their <Classes>stun skills<Classes> (this is a stun effect); Does not stack. This skill <Invisible>ignores invulnerability<Invisible>.",
      "descriptionBRRaw": "Karin <Damage>causa 30 de dano<Damage> a 1 inimigo. Por 2 turnos, esse inimigo <Effects>não poderá usar <Effects>suas <Classes>habilidades de atordoar<Classes> (isso é um efeito de atordoamento); Não se acumula. Esta habilidade <Invisible>ignora invulnerabilidade<Invisible>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Karin deals 30 damage to one enemy. For 2 turns, that enemy will be unable to use their stun skills (this is a stun effect); Does not stack. This skill ignores invulnerability. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Karin causa 30 de dano a 1 inimigo. Por 2 turnos, esse inimigo não poderá usar suas habilidades de atordoar (isso é um efeito de atordoamento); Não se acumula. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Transfer",
      "file": "karin_(s)_skill_3_(chakra_transfer).jpg",
      "description": "Karin allows one ally to bite her, transferring her chakra to them. That ally will be healed for 35 health and Karin will take 5 affliction damage*.",
      "descriptionBR": "Karin permite que um aliado a morda, transferindo seu chakra para ele. Esse aliado será curado em 35 de vida e Karin receberá 5 de dano affliction*.",
      "descriptionRaw": "Karin allows one ally to bite her, transferring her chakra to them. That ally will be <Defense>healed for 35 health<Defense> and Karin will <Damage>take 5 affliction damage<Damage>*.",
      "descriptionBRRaw": "Karin permite que um aliado a morda, transferindo seu chakra para ele. Esse aliado será <Defense>curado em 35<Defense> de vida e Karin <Damage>receberá 5 de dano affliction<Damage>*.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Affliction*",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Karin allows one ally to bite her, transferring her chakra to them. That ally will be healed for 35 health and Karin will take 5 affliction damage*. Chakra cost: 1 Gen. Catalog classes: Chakra, Affliction*, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Karin permite que um aliado a morda, transferindo seu chakra para ele. Esse aliado será curado em 35 de vida e Karin receberá 5 de dano affliction*. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Affliction*, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Precipitous Retreat",
      "file": "karin_(s)_skill_4_(precipitous_retreat).jpg",
      "description": "This skill makes Karin (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Karin (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Karin (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Karin (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Karin (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Karin (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

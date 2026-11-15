// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "ET Nidaime Mizukage (S)",
  "description": "Edo Tensei Nidaime Mizukage (S) has been resurrected against his will to do battle. He does not want to hurt anyone but he is interested in the potential of the new generation. He will test their limits with his own skill.",
  "descriptionBR": "Edo Tensei Nidaime Mizukage (S) foi ressuscitado contra sua vontade de lutar. Ele não quer machucar ninguém, mas está interessado no potencial da nova geração. Ele testará seus limites com suas próprias habilidades.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "et_nidaime_mizukage_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Major Summoning: Giant Clam",
      "file": "et_nidaime_mizukage_(s)_skill_1_(major_summoning_giant_clam).jpeg",
      "description": "Gengetsu summons a huge clam that exudes illsory mist, granting his team 30 points of destructible defense for 3 turns. Each turn, a random member of his team becoms a mirage, nullyfing the first harmful skill used on them for 1 turn; The target is invisible. This skill ends if Gengetsu is killed.",
      "descriptionBR": "Gengetsu invoca um molusco enorme que exala uma névoa ilusória, concedendo à sua equipe 30 pontos de defesa destrutível por 3 turnos. A cada turno, um membro aleatório da sua equipe se torna uma miragem, anulando a primeira habilidade ofensiva usada nele por 1 turno; o alvo fica invisível. Esta habilidade termina se Gengetsu for morto.",
      "descriptionRaw": "Gengetsu summons a huge clam that exudes illsory mist, granting his team 30 points of <Defense>destructible defense<Defense> for 3 turns. Each turn, a random member of his team becoms a mirage, <Defense>nullyfing<Defense> the <Classes>first harmful skill<Classes> used on them for 1 turn; The target is <Invisible>invisible<Invisible>. This skill <Classes>ends<Classes> if Gengetsu is <Classes>killed<Classes>.",
      "descriptionBRRaw": "Gengetsu invoca um molusco enorme que exala uma névoa ilusória, concedendo à sua equipe 30 <Defense>pontos de defesa destrutível<Defense> por 3 turnos. A cada turno, um membro aleatório da sua equipe se torna uma miragem, <Defense>anulando<Defense> a <Classes>primeira habilidade ofensiva<Classes> usada nele por 1 turno; o alvo fica <Invisible>invisível<Invisible>. Esta habilidade <Classes>termina<Classes> se Gengetsu for <Classes>morto<Classes>.",
      "energy": [
        "Nin",
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "Gengetsu summons a huge clam that exudes illsory mist, granting his team 30 points of destructible defense for 3 turns. Each turn, a random member of his team becoms a mirage, nullyfing the first harmful skill used on them for 1 turn; The target is invisible. This skill ends if Gengetsu is killed. Chakra cost: 1 Nin, 1 Gen, 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gengetsu invoca um molusco enorme que exala uma névoa ilusória, concedendo à sua equipe 30 pontos de defesa destrutível por 3 turnos. A cada turno, um membro aleatório da sua equipe se torna uma miragem, anulando a primeira habilidade ofensiva usada nele por 1 turno; o alvo fica invisível. Esta habilidade termina se Gengetsu for morto. Custo de chakra: 1 ninjutsu, 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Hozuki Water Gun",
      "file": "et_nidaime_mizukage_(s)_skill_2_(hozuki_water_gun).jpeg",
      "description": "Gengetsu fires a drop of water like a bullet at one enemy, dealing 20 piercing damage to them. If that enemy's health drops to 10 or less, they will be killed. During 'Major Summoning: Giant Clam', this skill will deal 5 additional damage and wll kill enemy if they health drop 15 or less.",
      "descriptionBR": "Gengetsu dispara uma gota d'água como uma bala em um inimigo, causando 20 de dano perfurante. Se a vida do inimigo cair para 10 ou menos, ele será morto. Durante 'Major Summoning: Giant Clam', esta habilidade causará 5 de dano adicional e matara o inimigo se ele tiver 15 ou menos de vida.",
      "descriptionRaw": "Gengetsu fires a drop of water like a bullet at one enemy, <Damage>dealing 20 piercing damage<Damage> to them. If that enemy's <Defense>health<Defense> drops to 10 or less, they will be <Classes>killed<Classes>. During <SkillName>'Major Summoning: Giant Clam'<SkillName>, this skill will <Improvements>deal 5 additional damage<Improvements> and wll kill enemy if they health drop 15 or less.",
      "descriptionBRRaw": "Gengetsu dispara uma gota d'água como uma bala em um inimigo, causando <Damage>20 de dano perfurante<Damage>. Se a <Defense>vida<Defense> do inimigo cair para 10 ou menos, ele será <Classes>morto<Classes>. Durante <SkillName>'Major Summoning: Giant Clam'<SkillName>, esta habilidade causará <Improvements>5 de dano adicional<Improvements> e matara o inimigo se ele tiver 15 ou menos de vida.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Gengetsu fires a drop of water like a bullet at one enemy, dealing 20 piercing damage to them. If that enemy's health drops to 10 or less, they will be killed. During 'Major Summoning: Giant Clam', this skill will deal 5 additional damage and wll kill enemy if they health drop 15 or less. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gengetsu dispara uma gota d'água como uma bala em um inimigo, causando 20 de dano perfurante. Se a vida do inimigo cair para 10 ou menos, ele será morto. Durante 'Major Summoning: Giant Clam', esta habilidade causará 5 de dano adicional e matara o inimigo se ele tiver 15 ou menos de vida. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Steam Imp",
      "file": "et_nidaime_mizukage_(s)_skill_3_(steam_imp).jpeg",
      "description": "For 1 turn, Gengetsu makes his team ignore all stun effects. If targetable, all enemies will be dealt 10 affliction damage. During 'Major Summoning: Giant Clam', this skill will last 1 additional turn.",
      "descriptionBR": "Por 1 turno, Gengetsu faz com que sua equipe ignore todos os efeitos de atordoamento. Se puder alvejar, todos os inimigos receberão 10 de dano por aflição. Durante 'Major Summoning: Giant Clam', esta habilidadedurará 1 turno adicional.",
      "descriptionRaw": "For 1 turn, Gengetsu makes his team <Defense>ignore all stun effects<Defense>. If targetable, all enemies will be <Damage>dealt 10 affliction damage<Damage>. During <SkillName>'Major Summoning: Giant Clam'<SkillName>, this skill <Improvements>will last 1 additional turn<Improvements>.",
      "descriptionBRRaw": "Por 1 turno, Gengetsu faz com que sua equipe <Defense>ignore todos os efeitos de atordoamento<Defense>. Se puder alvejar, todos os inimigos <Damage>receberão 10 de dano por aflição<Damage>. Durante <SkillName>'Major Summoning: Giant Clam'<SkillName>, esta habilidade<Improvements>durará 1 turno adicional<Improvements>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "For 1 turn, Gengetsu makes his team ignore all stun effects. If targetable, all enemies will be dealt 10 affliction damage. During 'Major Summoning: Giant Clam', this skill will last 1 additional turn. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, Gengetsu faz com que sua equipe ignore todos os efeitos de atordoamento. Se puder alvejar, todos os inimigos receberão 10 de dano por aflição. Durante 'Major Summoning: Giant Clam', esta habilidadedurará 1 turno adicional. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Genjutsu Defense",
      "file": "et_nidaime_mizukage_(s)_skill_4_(genjutsu_defense).jpeg",
      "description": "This skill makes ET Nidaime Mizukage (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz ET Nidaime Mizukage (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes ET Nidaime Mizukage (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz ET Nidaime Mizukage (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes ET Nidaime Mizukage (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz ET Nidaime Mizukage (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Mirage",
      "file": "et_nidaime_mizukage_(s)_skill_5_(mirage).jpeg",
      "description": "While 'Major Summoning: Giant Clam' is active, this skill will be applied to a random member of Gengetsu's team. For 1 turn, the target will ignore the first harmful skill used on them. This skill is invisible.",
      "descriptionBR": "Enquanto 'Major Summoning: Giant Clam' estiver ativa, esta habilidade será aplicada a um membro aleatório da equipe de Gengetsu. Por 1 turno, o alvo irá ignorar a primeira habilidade ofensiva usada nele. Esta habilidade é invisível",
      "descriptionRaw": "While <SkillName>'Major Summoning: Giant Clam'<SkillName> is active, this skill will be applied to a random member of Gengetsu's team. For 1 turn, the target will <Defense>ignore<Defense> the <Classes>first harmful skill<Classes> used on them. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Enquanto <SkillName>'Major Summoning: Giant Clam'<SkillName> estiver ativa, esta habilidade será aplicada a um membro aleatório da equipe de Gengetsu. Por 1 turno, o alvo irá <Defense>ignorar<Defense> a <Classes>primeira habilidade ofensiva<Classes> usada nele. <Invisible>Esta habilidade é invisível<Invisible>",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "While 'Major Summoning: Giant Clam' is active, this skill will be applied to a random member of Gengetsu's team. For 1 turn, the target will ignore the first harmful skill used on them. This skill is invisible. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Enquanto 'Major Summoning: Giant Clam' estiver ativa, esta habilidade será aplicada a um membro aleatório da equipe de Gengetsu. Por 1 turno, o alvo irá ignorar a primeira habilidade ofensiva usada nele. Esta habilidade é invisível Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamanaka Fu (S)",
  "description": "Yamanaka Fu (S) is a member of the Yamanaka clan and a member of Anbu Root. Fu is a skilled genjutsu user and the partner of Torune.",
  "descriptionBR": "Yamanaka Fu (S) é um membro do clã Yamanaka e da Anbu Root. Fu é um habilidoso usuário de Genjutsu e parceiro de Torune.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yamanaka_fu_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Tanto Slash",
      "file": "yamanaka_fu_(s)_skill_1_(tanto_slash).jpg",
      "description": "Fu slashes with his tanto, dealing 25 damage to one enemy. This skill will deal 15 additional damage to an enemy countered by 'Mind Puppet Switch'.",
      "descriptionBR": "Fu golpeia com seu tantō, causando 25 de dano a um inimigo. Essa habilidade irá causar 15 de dano adicional a um inimigo counterado por 'Mind Puppet Switch'.",
      "descriptionRaw": "Fu slashes with his tanto, <Damage>dealing 25 damage<Damage> to one enemy. This skill will <Improvements>deal 15 additional damage<Improvements> to an enemy <Defense>countered<Defense> by <SkillName>'Mind Puppet Switch'<SkillName>.",
      "descriptionBRRaw": "Fu golpeia com seu tantō, <Damage>causando 25 de dano<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 15 de dano adicional<Improvements> a um inimigo <Defense>counterado<Defense> por <SkillName>'Mind Puppet Switch'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Fu slashes with his tanto, dealing 25 damage to one enemy. This skill will deal 15 additional damage to an enemy countered by 'Mind Puppet Switch'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fu golpeia com seu tantō, causando 25 de dano a um inimigo. Essa habilidade irá causar 15 de dano adicional a um inimigo counterado por 'Mind Puppet Switch'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Quickened Mind Body Switch",
      "file": "yamanaka_fu_(s)_skill_2_(quickened_mind_body_switch).jpg",
      "description": "Fu disrupts one enemy, dealing 20 piercing damage to them. For 1 turn, that enemy will be invulnerable to helpful skills. The following turn, 'Tanto Slash' will deal 15 additional damage to that enemy.",
      "descriptionBR": "Fu desestabiliza um inimigo, causando 20 de dano perfurante a ele. Por 1 turno, esse inimigo ficará invulnerável a habilidades defensivas. No próximo turno, 'Tanto Slash' irá causar 15 de dano adicional a esse inimigo.",
      "descriptionRaw": "Fu disrupts one enemy, <Damage>dealing 20 piercing damage<Damage> to them. For 1 turn, that enemy will be <Defense>invulnerable<Defense> to <Classes>helpful skills<Classes>. The following turn, <SkillName>'Tanto Slash'<SkillName> will <Improvements>deal 15 additional damage<Improvements> to that enemy.",
      "descriptionBRRaw": "Fu desestabiliza um inimigo, <Damage>causando 20 de dano perfurante<Damage> a ele. Por 1 turno, esse inimigo ficará <Defense>invulnerável<Defense> a <Classes>habilidades defensivas<Classes>. No próximo turno, <SkillName>'Tanto Slash'<SkillName> irá <Improvements>causar 15 de dano adicional<Improvements> a esse inimigo.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Fu disrupts one enemy, dealing 20 piercing damage to them. For 1 turn, that enemy will be invulnerable to helpful skills. The following turn, 'Tanto Slash' will deal 15 additional damage to that enemy. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fu desestabiliza um inimigo, causando 20 de dano perfurante a ele. Por 1 turno, esse inimigo ficará invulnerável a habilidades defensivas. No próximo turno, 'Tanto Slash' irá causar 15 de dano adicional a esse inimigo. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mind Puppet Switch",
      "file": "yamanaka_fu_(s)_skill_3_(mind_puppet_switch).jpg",
      "description": "Fu sets up a trap using a puppet. For 1 turn, the first enemy that uses a new harmful physical or chakra skill against Fu or one ally will be countered and will have all their skills replaced by 'Mind Puppet Switch - Attack' for 2 turns, and this skill will end.",
      "descriptionBR": "Fu prepara uma armadilha usando uma marionete. Por 1 turno, o primeiro inimigo que usar uma nova habilidade ofensiva física ou de chakra contra Fu ou um aliado será counterado e terá todas as suas habilidades substituídas por 'Mind Puppet Switch - Attack' por 2 turnos, e essa habilidade irá terminar.",
      "descriptionRaw": "Fu sets up a trap using a puppet. For 1 turn, the first enemy that uses a new <Classes>harmful physical or chakra skill<Classes> against Fu or one ally will be <Defense>countered<Defense> and will have <Effects>all their skills replaced<Effects> by <SkillName>'Mind Puppet Switch - Attack'<SkillName> for 2 turns, and this skill will end.",
      "descriptionBRRaw": "Fu prepara uma armadilha usando uma marionete. Por 1 turno, o primeiro inimigo que usar uma nova <Classes>habilidade ofensiva física ou de chakra<Classes> contra Fu ou um aliado será <Defense>counterado<Defense> e terá <Effects>todas as suas habilidades substituídas<Effects> por <SkillName>'Mind Puppet Switch - Attack'<SkillName> por 2 turnos, e essa habilidade irá terminar.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Fu sets up a trap using a puppet. For 1 turn, the first enemy that uses a new harmful physical or chakra skill against Fu or one ally will be countered and will have all their skills replaced by 'Mind Puppet Switch - Attack' for 2 turns, and this skill will end. Chakra cost: 1 Gen. Catalog classes: Mental, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fu prepara uma armadilha usando uma marionete. Por 1 turno, o primeiro inimigo que usar uma nova habilidade ofensiva física ou de chakra contra Fu ou um aliado será counterado e terá todas as suas habilidades substituídas por 'Mind Puppet Switch - Attack' por 2 turnos, e essa habilidade irá terminar. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Aggresive Retreat",
      "file": "yamanaka_fu_(s)_skill_4_(aggresive_retreat).jpg",
      "description": "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Yamanaka Fu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yamanaka Fu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Yamanaka Fu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yamanaka Fu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Yamanaka Fu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Mind Puppet Switch - Attack",
      "file": "yamanaka_fu_(s)_skill_5_(mind_puppet_switch_-_attack).jpeg",
      "description": "This skill deals 15 damage to one enemy.",
      "descriptionBR": "Essa habilidade causa 15 de dano a um inimigo.",
      "descriptionRaw": "This skill <Damage>deals 15 damage<Damage> to one enemy.",
      "descriptionBRRaw": "Essa habilidade <Damage>causa 15 de dano<Damage> a um inimigo.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill deals 15 damage to one enemy. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 15 de dano a um inimigo. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

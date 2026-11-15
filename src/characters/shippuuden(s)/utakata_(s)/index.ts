// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Utakata (S)",
  "description": "A missing-nin from the Hidden Mist Village, Utakata is the jinchuuriki host of the Six-Tailed Beast, Saiken, and a kind person, though fairly distant most of the time. In battle, Utakata uses the powers of the Six-Tails to create chakra-based soap bubbles in which he can trap his enemies and slowly asphyxiate them.",
  "descriptionBR": "Um ninja desaparecido da Vila da Névoa Oculta, Utakata é o hospedeiro jinchuuriki da Besta de Seis Caudas, Saiken, e uma pessoa gentil, embora bastante distante na maior parte do tempo. Em batalha, Utakata usa os poderes da Besta de Seis Caudas para criar bolhas de sabão baseadas em chakra, nas quais pode prender seus inimigos e asfixiá-los lentamente.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "utakata_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Soap Bubble",
      "file": "utakata_(s)_skill_1_(soap_bubble).png",
      "description": "Utakata deals 10 piercing damage to one enemy and applies 'Bubble Prision' on them. 'Bubble Prision' deals 5 unremovable affliction damage to one enemy, and the first time that enemy uses a new harmful skill, it will cause 'Soap Bubble' to cost 1 random chakra until the next use of it.",
      "descriptionBR": "Utakata causa 10 de dano perfurante a um inimigo e aplica 'Bubble Prision' nele. 'Bubble Prision' causa 5 de dano affliction irremovivel a um inimigo, e a primeira vez que esse inimigo usar uma nova habilidade ofensiva, irá fazer com que 'Soap Bubble' passe a custar 1 random chakra até o próximo uso dela.",
      "descriptionRaw": "Utakata <Damage>deals 10 piercing damage<Damage> to one enemy and applies <SkillName>'Bubble Prision'<SkillName> on them. <SkillName>'Bubble Prision'<SkillName> deals <Damage>5 unremovable affliction damage<Damage> to one enemy, and <Effects>the first time that enemy uses<Effects> a new <Classes>harmful skill<Classes>, it will cause <SkillName>'Soap Bubble'<SkillName> to <Improvements>cost 1 random chakra<Improvements> until the <Invisible>next use of it<Invisible>.",
      "descriptionBRRaw": "Utakata <Damage>causa 10 de dano perfurante<Damage> a um inimigo e aplica <SkillName>'Bubble Prision'<SkillName> nele. <SkillName>'Bubble Prision'<SkillName> causa <Damage>5 de<Damage> <Damage>dano affliction irremovivel<Damage> a um inimigo, e a <Effects>primeira vez que esse inimigo usar<Effects> uma nova <Classes>habilidade ofensiva<Classes>, irá fazer com que <SkillName>'Soap Bubble'<SkillName> passe a <Improvements>custar 1 random chakra<Improvements> até o <Invisible>próximo uso dela<Invisible>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Utakata deals 10 piercing damage to one enemy and applies 'Bubble Prision' on them. 'Bubble Prision' deals 5 unremovable affliction damage to one enemy, and the first time that enemy uses a new harmful skill, it will cause 'Soap Bubble' to cost 1 random chakra until the next use of it. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Utakata causa 10 de dano perfurante a um inimigo e aplica 'Bubble Prision' nele. 'Bubble Prision' causa 5 de dano affliction irremovivel a um inimigo, e a primeira vez que esse inimigo usar uma nova habilidade ofensiva, irá fazer com que 'Soap Bubble' passe a custar 1 random chakra até o próximo uso dela. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Drowning Bubble Jutsu",
      "file": "utakata_(s)_skill_2_(drowning_bubble_jutsu).jpg",
      "description": "Utakata targets all enemies affected by 'Bubble Prision' and stuns their non-mental skills for 1 turn. These enemies will also receive 5 additional damage from 'Bubble Prision' and will lose 1 random chakra for each stack of 'Bubble Prision' on them. Cannot be countered, reflected and ignores invulnerability.",
      "descriptionBR": "Utakata alveja todos os inimigos afetados pelo 'Bubble Prision' e atordoa suas habilidades não mentais por 1 turno. Esses inimigos também receberão 5 de dano adicional do 'Bubble Prision' e perderão 1 chakra aleatório para cada aplicação do 'Bubble Prision' neles. Esta habilidade não pode ser counterada, refletida e ignora a invulnerabilidade.",
      "descriptionRaw": "Utakata targets all enemies affected by <SkillName>'Bubble Prision'<SkillName> and <Effects>stuns<Effects> their <Classes>non-mental<Classes> skills for 1 turn. These enemies will also <Improvements>receive 5 additional damage<Improvements> from <SkillName>'Bubble Prision'<SkillName> and will <Effects>lose 1 random chakra<Effects> for each stack of <SkillName>'Bubble Prision'<SkillName> on them. Cannot be <Classes>countered<Classes>, <Classes>reflected<Classes> and <Classes>ignores invulnerability<Classes>.",
      "descriptionBRRaw": "Utakata alveja todos os inimigos afetados pelo <SkillName>'Bubble Prision'<SkillName> e <Effects>atordoa<Effects> suas habilidades <Classes>não mentais<Classes> por 1 turno. Esses inimigos também <Improvements>receberão 5 de dano adicional<Improvements> do <SkillName>'Bubble Prision'<SkillName> e <Effects>perderão 1 chakra aleatório<Effects> para cada aplicação do <SkillName>'Bubble Prision'<SkillName> neles. Esta habilidade não pode ser <Classes>counterada<Classes>, <Classes>refletida<Classes> e <Classes>ignora a invulnerabilidade<Classes>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Utakata targets all enemies affected by 'Bubble Prision' and stuns their non-mental skills for 1 turn. These enemies will also receive 5 additional damage from 'Bubble Prision' and will lose 1 random chakra for each stack of 'Bubble Prision' on them. Cannot be countered, reflected and ignores invulnerability. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Utakata alveja todos os inimigos afetados pelo 'Bubble Prision' e atordoa suas habilidades não mentais por 1 turno. Esses inimigos também receberão 5 de dano adicional do 'Bubble Prision' e perderão 1 chakra aleatório para cada aplicação do 'Bubble Prision' neles. Esta habilidade não pode ser counterada, refletida e ignora a invulnerabilidade. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rokubi Transformation",
      "file": "utakata_(s)_skill_3_(rokubi_transformation).jpg",
      "description": "Utakata heals 10 health for each time 'Soap Bubble' was used. Afterwards, he becomes invulnerable to Physical and Chakra skills for 2 turns. This skill removes all stacks from 'Soap Bubble'.",
      "descriptionBR": "Utakata cura 10 de vida cada vez que 'Soap Bubble' é usada. Depois disso, ele se torna invulnerável a habilidades Physical e Chakra por 2 turnos. Esta habilidade remove todos os acúmulos de 'Soap Bubble'.",
      "descriptionRaw": "Utakata <Defense>heals<Defense> 10 <Defense>health<Defense> for each time <SkillName>'Soap Bubble'<SkillName> was used. Afterwards, he becomes <Defense>invulnerable<Defense> to <classes>Physical<classes> and <classes>Chakra<classes> skills for 2 turns. This skill removes all stacks from <SkillName>'Soap Bubble'<SkillName>.",
      "descriptionBRRaw": "Utakata <Defense>cura<Defense> 10 de <Defense>vida<Defense> cada vez que <SkillName>'Soap Bubble'<SkillName> é usada. Depois disso, ele se torna <Defense>invulnerável<Defense> a habilidades <classes>Physical<classes> e <classes>Chakra<classes> por 2 turnos. Esta habilidade remove todos os acúmulos de <SkillName>'Soap Bubble'<SkillName>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Utakata heals 10 health for each time 'Soap Bubble' was used. Afterwards, he becomes invulnerable to Physical and Chakra skills for 2 turns. This skill removes all stacks from 'Soap Bubble'. Chakra cost: 1 Blood. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Utakata cura 10 de vida cada vez que 'Soap Bubble' é usada. Depois disso, ele se torna invulnerável a habilidades Physical e Chakra por 2 turnos. Esta habilidade remove todos os acúmulos de 'Soap Bubble'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Bubble Dome",
      "file": "utakata_(s)_skill_4_(bubble_dome).jpg",
      "description": "This skill makes Utakata (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Utakata (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Utakata (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Utakata (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Utakata (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Utakata (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Bubble Prision",
      "file": "utakata_(s)_skill_5_(bubble_prision).jpg",
      "description": "This skill deals 5 unremovable affliction damage to a target permanently. The first time that enemy uses a new harmful skill, it will cause 'Soap Bubble' to cost 1 random chakra until the next use of it.",
      "descriptionBR": "Esta habilidade causa 5 de dano affliction irremovível a um alvo permanentemente. Na primeira vez que o inimigo usar uma nova habilidade ofensiva, irá fazer com que 'Soap Bubble' passe a custar 1 random chakra até o próximo uso dela.",
      "descriptionRaw": "This skill <Damage>deals 5 unremovable affliction damage<Damage> to a target permanently. The first time that enemy uses a new <Classes>harmful skill<Classes>, it will cause <SkillName>'Soap Bubble'<SkillName> to <Improvements>cost 1 random chakra<Improvements> until the <Invisible>next use of it<Invisible>.",
      "descriptionBRRaw": "Esta habilidade <Damage>causa 5 de dano affliction irremovível<Damage> a um alvo permanentemente. Na primeira vez que o inimigo usar uma nova <Classes>habilidade ofensiva<Classes>, irá fazer com que <SkillName>'Soap Bubble'<SkillName> passe a <Improvements>custar 1 random chakra<Improvements> até o <Invisible>próximo uso dela<Invisible>.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill deals 5 unremovable affliction damage to a target permanently. The first time that enemy uses a new harmful skill, it will cause 'Soap Bubble' to cost 1 random chakra until the next use of it. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade causa 5 de dano affliction irremovível a um alvo permanentemente. Na primeira vez que o inimigo usar uma nova habilidade ofensiva, irá fazer com que 'Soap Bubble' passe a custar 1 random chakra até o próximo uso dela. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Inuzuka Kiba (S)",
  "description": "After two years, Kiba finally becomes a chuunin. Now with Akamaru grown up, they become an unbeatable fighting unit, taking the Inuzuka clan's techniques to the next level. Now both have more precision for massive attacks, and an even sharper sense of smell.",
  "descriptionBR": "Após dois anos, Kiba finalmente se torna um chuunin. Agora com Akamaru crescido, eles se tornam uma unidade de combate imbatível, elevando as técnicas do clã Inuzuka a outro nível. Ambos agora têm mais precisão para ataques massivos e um olfato ainda mais apurado.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "inuzuka_kiba_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Man Beast Clone",
      "file": "inuzuka_kiba_(s)_skill_1_(man_beast_clone).jpg",
      "description": "Kiba grant himself and one ally 5 damage reduction. If Kiba use a new harmful skill, that ally gains 10 destructible defense for 1 turn. If that ally uses a  new harmful skill , Kiba gains 5 additional damage for 1 turn; Doesn't stack. Becomes 'Enhanced Garouga', cannot be removed.",
      "descriptionBR": "Kiba concede a si mesmo e a um aliado 5 de redução de dano. Se Kiba usar uma nova habilidade ofensiva, esse aliado ganha 10 de defesa destrutível por 1 turno. Se esse aliado usar  uma nova habilidade ofensiva , Kiba ganha 5 de dano adicional não affliction por 1 turno. Torna-se 'Enhanced Garouga', não pode ser removido.",
      "descriptionRaw": "Kiba grant himself and one ally 5 <Defense>damage reduction<Defense>. If Kiba use a <Classes>new harmful skill<Classes>, that ally gains 10 <Defense>destructible defense<Defense> for 1 turn. If that ally uses a  <Classes>new harmful skill <Classes>, Kiba <Improvements>gains 5 additional damage<Improvements> for 1 turn; Doesn't stack. Becomes <SkillName>'Enhanced Garouga'<SkillName>, cannot be <Classes>removed<Classes>.",
      "descriptionBRRaw": "Kiba concede a si mesmo e a um aliado 5 de <Defense>redução de dano<Defense>. Se Kiba usar uma <Classes>nova habilidade ofensiva<Classes>, esse aliado ganha 10 de <Defense>defesa destrutível<Defense> por 1 turno. Se esse aliado usar  <Classes>uma nova habilidade ofensiva <Classes>, Kiba <Improvements>ganha 5 de dano adicional não affliction<Improvements> por 1 turno. Torna-se <SkillName>'Enhanced Garouga'<SkillName>, não pode ser <Classes>removido<Classes>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Kiba grant himself and one ally 5 damage reduction. If Kiba use a new harmful skill, that ally gains 10 destructible defense for 1 turn. If that ally uses a  new harmful skill , Kiba gains 5 additional damage for 1 turn; Doesn't stack. Becomes 'Enhanced Garouga', cannot be removed. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba concede a si mesmo e a um aliado 5 de redução de dano. Se Kiba usar uma nova habilidade ofensiva, esse aliado ganha 10 de defesa destrutível por 1 turno. Se esse aliado usar  uma nova habilidade ofensiva , Kiba ganha 5 de dano adicional não affliction por 1 turno. Torna-se 'Enhanced Garouga', não pode ser removido. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Piercing Fang",
      "file": "inuzuka_kiba_(s)_skill_2_(piercing_fang).jpg",
      "description": "Kiba deals 20 piercing damage to one enemy. For 1 turn, Kiba will ignore stun effects and his other skills will cost 1 random chakra less.",
      "descriptionBR": "Kiba causa 20 de dano perfurante a um inimigo. Por 1 turno, Kiba irá ignorar efeitos atordoantes e suas outras habilidades custarão 1 chakra aleatório a menos.",
      "descriptionRaw": "Kiba <Damage>deals 20 piercing damage<Damage> to one enemy. For 1 turn, Kiba will <Defense>ignore stun effects<Defense> and his other skills will cost <Improvements>1 random chakra less<Improvements>.",
      "descriptionBRRaw": "Kiba <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, Kiba irá <Defense>ignorar efeitos atordoantes<Defense> e suas outras habilidades custarão <Improvements>1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kiba deals 20 piercing damage to one enemy. For 1 turn, Kiba will ignore stun effects and his other skills will cost 1 random chakra less. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba causa 20 de dano perfurante a um inimigo. Por 1 turno, Kiba irá ignorar efeitos atordoantes e suas outras habilidades custarão 1 chakra aleatório a menos. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Fang Over Fang",
      "file": "inuzuka_kiba_(s)_skill_3_(fang_over_fang).jpg",
      "description": "Kiba deals 20 damage to all enemies this turn. For 2 turns, Kiba will deal 5 more damage on them.",
      "descriptionBR": "Kiba causa 20 de dano a todos os inimigos neste turno. Por 2 turnos, Kiba causará 5 de dano a mais neles.",
      "descriptionRaw": "Kiba <Damage>deals 20 damage<Damage> to all enemies this turn. For 2 turns, Kiba will <Improvements>deal 5 more damage<Improvements> on them.",
      "descriptionBRRaw": "Kiba <Damage>causa 20 de dano<Damage> a todos os inimigos neste turno. Por 2 turnos, Kiba <Improvements>causará 5 de dano a mais<Improvements> neles.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kiba deals 20 damage to all enemies this turn. For 2 turns, Kiba will deal 5 more damage on them. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba causa 20 de dano a todos os inimigos neste turno. Por 2 turnos, Kiba causará 5 de dano a mais neles. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hide in the Shade",
      "file": "inuzuka_kiba_(s)_skill_4_(hide_in_the_shade).jpg",
      "description": "This skill makes Inuzuka Kiba (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Inuzuka Kiba (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Inuzuka Kiba (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Inuzuka Kiba (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Inuzuka Kiba (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Inuzuka Kiba (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Enhanced Garouga",
      "file": "inuzuka_kiba_(s)_skill_5_(enhanced_garouga).jpg",
      "description": "Kiba deals 30 piercing damage to one enemy and stuns all other enemies Harmful for 1 turn.",
      "descriptionBR": "Kiba causa 30 de dano perfurante a um inimigo e atordoa as habilidades Harmful de todos os outros inimigos por 1 turno.",
      "descriptionRaw": "Kiba <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> all other enemies <Classes>Harmful<Classes> for 1 turn.",
      "descriptionBRRaw": "Kiba <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as habilidades <Classes>Harmful<Classes> de todos os outros inimigos por 1 turno.",
      "energy": [
        "Tai",
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Kiba deals 30 piercing damage to one enemy and stuns all other enemies Harmful for 1 turn. Chakra cost: 1 Tai, 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kiba causa 30 de dano perfurante a um inimigo e atordoa as habilidades Harmful de todos os outros inimigos por 1 turno. Custo de chakra: 1 taijutsu, 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Omoi (S)",
  "description": "One of the ninjas in the cloud village, and one of the biggest swordsmen in the village. Omoi is usually concerned, but at the same time, skilled and apprehensive. In addition to good fencing, Omoi is able to execute strikes with the lightning element.",
  "descriptionBR": "Um dos ninjas da Vila da Nuvem e um dos maiores espadachins da vila. Omoi geralmente é preocupado, mas ao mesmo tempo habilidoso e cauteloso. Além de ser bom na esgrima, Omoi é capaz de executar golpes com o elemento relâmpago",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "omoi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Crescent Moon Beheading",
      "file": "omoi_(s)_skill_1_(crescent_moon_beheading).jpg",
      "description": "By using his sword to strike the enemy and liberate his allies, Omoi deals 20 piercing damage to one enemy and makes them unable to become invulnerable for 1 turn. Afterwards, all of Omoi's allies will have all harmful skills removed from them.",
      "descriptionBR": "Usando sua espada para golpear o inimigo e libertar seus aliados, Omoi causa 20 de dano perfurante a um inimigo e o impede de se tornar invulnerável por 1 turno. Em seguida, todos os aliados de Omoi terão todas as habilidades ofensivas removidas deles.",
      "descriptionRaw": "By using his sword to strike the enemy and liberate his allies, Omoi <Damage>deals 20 piercing damage<Damage> to one enemy and makes them unable to become <Defense>invulnerable<Defense> for 1 turn. Afterwards, all of Omoi's allies will have all <Classes>harmful<Classes> skills <Effects>removed<Effects> from them.",
      "descriptionBRRaw": "Usando sua espada para golpear o inimigo e libertar seus aliados, Omoi <Damage>causa 20 de dano perfurante<Damage> a um inimigo e o impede de se tornar <Defense>invulnerável<Defense> por 1 turno. Em seguida, todos os aliados de Omoi terão todas as <Classes>habilidades ofensivas<Classes> <Effects>removidas<Effects> deles.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "By using his sword to strike the enemy and liberate his allies, Omoi deals 20 piercing damage to one enemy and makes them unable to become invulnerable for 1 turn. Afterwards, all of Omoi's allies will have all harmful skills removed from them. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando sua espada para golpear o inimigo e libertar seus aliados, Omoi causa 20 de dano perfurante a um inimigo e o impede de se tornar invulnerável por 1 turno. Em seguida, todos os aliados de Omoi terão todas as habilidades ofensivas removidas deles. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lightning Chakra Stab",
      "file": "omoi_(s)_skill_2_(lightning_chakra_stab).jpg",
      "description": "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, dealing them 20 piercing damage and stunning their helpful skills. For 1 turn that enemy is also invulnerable to new helpful skills.",
      "descriptionBR": "Omoi envolve sua espada com chakra de relâmpago para imobilizar um inimigo com apenas um golpe, causando 20 de dano perfurante e atordoando suas habilidades defensivas. Por 1 turno, esse inimigo também fica invulnerável a novas habilidades defensivas.",
      "descriptionRaw": "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, <Damage>dealing them 20 piercing damage<Damage> and <Effects>stunning<Effects> their <Classes>helpful<Classes> skills. For 1 turn that enemy is also <Defense>invulnerable<Defense> to new <Classes>helpful<Classes> skills.",
      "descriptionBRRaw": "Omoi envolve sua espada com chakra de relâmpago para imobilizar um inimigo com apenas um golpe, <Damage>causando 20 de dano perfurante<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>defensivas<Classes>. Por 1 turno, esse inimigo também fica <Defense>invulnerável<Defense> a novas habilidades <Classes>defensivas<Classes>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, dealing them 20 piercing damage and stunning their helpful skills. For 1 turn that enemy is also invulnerable to new helpful skills. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Omoi envolve sua espada com chakra de relâmpago para imobilizar um inimigo com apenas um golpe, causando 20 de dano perfurante e atordoando suas habilidades defensivas. Por 1 turno, esse inimigo também fica invulnerável a novas habilidades defensivas. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Crescent Moon Reverse Beheading",
      "file": "omoi_(s)_skill_3_(crescent_moon_reverse_beheading).jpg",
      "description": "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy uses a new harmful damaging skill, they will be countered, will take 10 piercing damage and will have their physical skills stunned. The target of this skill is invisible.",
      "descriptionBR": "Omoi usa seu kenjutsu reativo para contra-atacar um inimigo. Se esse inimigo usar uma nova habilidade ofensiva de dano, ele será counterado, sofrerá 10 de dano perfurante e terá as habilidades Physical dele atordoadas. O alvo desta habilidade é invisível.",
      "descriptionRaw": "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy <Classes>uses a new harmful damaging<Classes> skill, they will be <Defense>countered<Defense>, will <Damage>take 10 piercing damage<Damage> and will have their <Classes>physical<Classes> skills <Effects>stunned<Effects>. The target of this skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Omoi usa seu kenjutsu reativo para contra-atacar um inimigo. Se esse inimigo <Classes>usar uma nova habilidade ofensiva de dano<Classes>, ele será <Defense>counterado<Defense>, <Damage>sofrerá 10 de dano perfurante<Damage> e terá as habilidades <Classes>Physical<Classes> dele <Effects>atordoadas<Effects>. O alvo desta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 2,
      "ruleDescription": "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy uses a new harmful damaging skill, they will be countered, will take 10 piercing damage and will have their physical skills stunned. The target of this skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Omoi usa seu kenjutsu reativo para contra-atacar um inimigo. Se esse inimigo usar uma nova habilidade ofensiva de dano, ele será counterado, sofrerá 10 de dano perfurante e terá as habilidades Physical dele atordoadas. O alvo desta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Guard Position",
      "file": "omoi_(s)_skill_4_(guard_position).jpg",
      "description": "This skill makes Omoi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Omoi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Omoi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Omoi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Omoi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Omoi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

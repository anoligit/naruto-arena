// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Mei (S)",
  "description": "As the Fifth Mizukage, Mei Terumi joins the Allied Shinobi Forces during the Fourth Shinobi World War. Combining her mastery of Water Release with her corrosive kekkei genkai, she controls the battlefield while protecting the alliance.",
  "descriptionBR": "Como Quinta Mizukage, Mei Terumi se junta às Forças Aliadas Shinobi durante a Quarta Guerra Mundial Shinobi. Combinando seu domínio do Estilo Água com sua kekkei genkai corrosiva, ela controla o campo de batalha enquanto protege a aliança.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_mei_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Water Dragon Bomb",
      "file": "shinobi_alliance_mei_(s)_skill_1_(water_dragon_bomb).png",
      "description": "Mei deals 25 damage to one enemy and stuns their skills for 1 turn. Afterwards, all other enemies will have the cost of their harmful skills increased by 1 random chakra.",
      "descriptionBR": "Mei causa 25 de dano a um inimigo e atordoa suas habilidades por 1 turno. Depois disso, todos os outros inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório.",
      "descriptionRaw": "Mei <Damage>deals 25 damage<Damage> to one enemy and <Effects>stuns their skills<Effects> for 1 turn. Afterwards, all other enemies will have the cost of their harmful skills <Improvements>increased by 1 random chakra<Improvements>.",
      "descriptionBRRaw": "Mei <Damage>causa 25 de dano<Damage> a um inimigo e <Effects>atordoa suas habilidades<Effects> por 1 turno. Depois disso, todos os outros inimigos terão o custo de suas habilidades ofensivas <Improvements>aumentado em 1 chakra aleatório<Improvements>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Mei deals 25 damage to one enemy and stuns their skills for 1 turn. Afterwards, all other enemies will have the cost of their harmful skills increased by 1 random chakra. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Mei causa 25 de dano a um inimigo e atordoa suas habilidades por 1 turno. Depois disso, todos os outros inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Acid Mud",
      "file": "shinobi_alliance_mei_(s)_skill_2_(acid_mud).png",
      "description": "Mei deals 10 affliction damage to all enemies for 1 turn, permanently lowering all their non-affliction damage by 5 until they use a new non-affliction damage skill. This skill's non-damage effects will be re-applied if a new stunning skill is used on an affected enemy. Each stack is removed once. Ends when Mei dies.",
      "descriptionBR": "Mei causa 10 de dano affliction a todos os inimigos por 1 turno, reduzindo permanentemente o dano não-affliction deles em 5 até que usem uma nova habilidade que cause dano não-affliction. Os efeitos que não causam dano dessa habilidade serão reaplicados se uma nova habilidade de atordoamento for usada em um inimigo afetado. Cada stack é removido uma vez por turno. Termina quando Mei morrer.",
      "descriptionRaw": "Mei <Damage>deals 10 affliction damage<Damage> to all enemies for 1 turn, permanently <Effects>lowering<Effects> all their <Improvements>non-affliction damage <Improvements>by 5 <Defense>until they use<Defense> a new <Classes>non-affliction damage skill<Classes>. This skill's <Effects>non-damage effects<Effects> will be <Improvements>re-applied<Improvements> if a new <Classes>stunning skill<Classes> is used on an <SkillText>affected enemy<SkillText>. Each <Invisible>stack<Invisible> is removed <Invisible>once<Invisible>. Ends when Mei <Damage>dies<Damage>.",
      "descriptionBRRaw": "Mei <Damage>causa 10 de dano affliction<Damage> a todos os inimigos por 1 turno, <Effects>reduzindo<Effects> permanentemente o<Improvements> dano não-affliction<Improvements> deles em 5 <Defense>até que usem<Defense> uma nova <Classes>habilidade que cause dano não-affliction<Classes>. Os <Effects>efeitos que não causam dano<Effects> dessa habilidade serão <Improvements>reaplicados<Improvements> se uma nova <Classes>habilidade de atordoamento<Classes> for usada em um <SkillText>inimigo afetado<SkillText>. Cada <Invisible>stack<Invisible> é removido <Invisible>uma vez por turno<Invisible>. Termina quando Mei <Damage>morrer<Damage>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Mei deals 10 affliction damage to all enemies for 1 turn, permanently lowering all their non-affliction damage by 5 until they use a new non-affliction damage skill. This skill's non-damage effects will be re-applied if a new stunning skill is used on an affected enemy. Each stack is removed once. Ends when Mei dies. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Mei causa 10 de dano affliction a todos os inimigos por 1 turno, reduzindo permanentemente o dano não-affliction deles em 5 até que usem uma nova habilidade que cause dano não-affliction. Os efeitos que não causam dano dessa habilidade serão reaplicados se uma nova habilidade de atordoamento for usada em um inimigo afetado. Cada stack é removido uma vez por turno. Termina quando Mei morrer. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Silent Mist",
      "file": "shinobi_alliance_mei_(s)_skill_3_(silent_mist).png",
      "description": "For 1 turn, if one enemy uses a new skill, they will be stunned for 1 turn in the primary class of that skill. This skill is invisible.",
      "descriptionBR": "Por 1 turno, se um inimigo usar uma nova habilidade, ele será atordoado por 1 turno na classe primária dessa habilidade. Essa habilidade é invisível.",
      "descriptionRaw": "For 1 turn, if one enemy <Defense>uses a new skill<Defense>, they will be <Effects>stunned<Effects> for 1 turn in the <Classes>primary class<Classes> of that skill. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Por 1 turno, se um inimigo <Defense>usar uma nova habilidade<Defense>, ele será <Effects>atordoado<Effects> por 1 turno na <Classes>classe primária<Classes> dessa habilidade. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "For 1 turn, if one enemy uses a new skill, they will be stunned for 1 turn in the primary class of that skill. This skill is invisible. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, se um inimigo usar uma nova habilidade, ele será atordoado por 1 turno na classe primária dessa habilidade. Essa habilidade é invisível. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Mei Flee",
      "file": "shinobi_alliance_mei_(s)_skill_4_(mei_flee).png",
      "description": "This skill makes Shinobi Alliance Mei (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Shinobi Alliance Mei (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Mei (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Shinobi Alliance Mei (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Mei (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Shinobi Alliance Mei (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

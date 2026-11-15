// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Temari (S)",
  "description": "At the outset of the Fourth Shinobi World War, Temari is placed in the Fourth Division. Although Gaara is officially in command of the division and Shikamaru is in Gaara's proxy, Temari is the one who leads the division on the battlefield, including personally commanding the division's Wind Release combat unit.",
  "descriptionBR": "No início da Quarta Grande Guerra Ninja, Temari é colocada na Quarta Divisão. Embora Gaara seja oficialmente o comandante da divisão e Shikamaru atue como seu substituto, é Temari quem lidera a divisão no campo de batalha, incluindo o comando direto da unidade de combate com Liberação de Vento.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_temari_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Third Moon Unleash",
      "file": "shinobi_alliance_temari_(s)_skill_1_(third_moon_unleash).png",
      "description": "Temari unleashes her fan with all three moons revealed. For 4 turns, Temari's skilLs will cost 1 less random chakra. During this time, any enemy that uses a new skill on Temari will receive 5 additional damage from her permanently.",
      "descriptionBR": "Temari libera seu leque com as três luas reveladas. Por 4 turnos, as habilidades de Temari terão o custo reduzido em 1 chakra aleatório. Durante esse tempo, qualquer inimigo que usar uma nova habilidade em Temari irá receber 5 de dano adicional permanentemente das habilidades dela.",
      "descriptionRaw": "Temari unleashes her fan with all three moons revealed. For 4 turns, Temari's skilLs will <Improvements>cost 1 less random chakra<Improvements>. During this time, any enemy that <Classes>uses a new skill on Temari<Classes> will <Improvements>receive 5 additional damage<Improvements> from her permanently.",
      "descriptionBRRaw": "Temari libera seu leque com as três luas reveladas. Por 4 turnos, as habilidades de Temari terão o <Improvements>custo reduzido em 1 chakra aleatório<Improvements>. Durante esse tempo, qualquer inimigo que <Classes>usar uma nova habilidade em Temari<Classes> irá <Improvements>receber 5 de dano adicional<Improvements> permanentemente das habilidades dela.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Temari unleashes her fan with all three moons revealed. For 4 turns, Temari's skilLs will cost 1 less random chakra. During this time, any enemy that uses a new skill on Temari will receive 5 additional damage from her permanently. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Temari libera seu leque com as três luas reveladas. Por 4 turnos, as habilidades de Temari terão o custo reduzido em 1 chakra aleatório. Durante esse tempo, qualquer inimigo que usar uma nova habilidade em Temari irá receber 5 de dano adicional permanentemente das habilidades dela. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Temari Air Slash",
      "file": "shinobi_alliance_temari_(s)_skill_2_(temari_air_slash).png",
      "description": "Temari sweeps her fan to create a slicing current of wind. For 1 turn, Temari becomes invulnerable to non-mental skills, deals 15 piercing damage to one enemy and stuns their non-mental skills. The following turn, that enemy will be dealt 15 damage.",
      "descriptionBR": "Temari varre seu leque para criar uma corrente de vento cortante. Por 1 turno, Temari se torna invulnerável a habilidades não-mental, causa 15 de dano perfurante a um inimigo e atordoa as habilidades não-mental dele. No próximo turno, esse inimigo irá receber 15 de dano.",
      "descriptionRaw": "Temari sweeps her fan to create a slicing current of wind. For 1 turn, Temari becomes <Defense>invulnerable<Defense> to <Classes>non-mental skills<Classes>, <Damage>deals 15 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental skills<Classes>. The following turn, that enemy will <Damage>be dealt 15 damage<Damage>.",
      "descriptionBRRaw": "Temari varre seu leque para criar uma corrente de vento cortante. Por 1 turno, Temari se torna <Defense>invulnerável<Defense> a <Classes>habilidades não-mental<Classes>, <Damage>causa 15 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as <Classes>habilidades não-mental dele<Classes>. No próximo turno, esse inimigo irá <Damage>receber 15 de dano<Damage>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Temari sweeps her fan to create a slicing current of wind. For 1 turn, Temari becomes invulnerable to non-mental skills, deals 15 piercing damage to one enemy and stuns their non-mental skills. The following turn, that enemy will be dealt 15 damage. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Temari varre seu leque para criar uma corrente de vento cortante. Por 1 turno, Temari se torna invulnerável a habilidades não-mental, causa 15 de dano perfurante a um inimigo e atordoa as habilidades não-mental dele. No próximo turno, esse inimigo irá receber 15 de dano. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Kamatari",
      "file": "shinobi_alliance_temari_(s)_skill_3_(summoning_kamatari).png",
      "description": "Summoning Kamatari, Temari deals 40 piercing damage to one enemy. After used, if the target of this skill is killed, Temari gains 1 random chakra.",
      "descriptionBR": "Invocando Kamatari, Temari causa 40 de dano perfurante a um inimigo. Após o uso, se o alvo dessa habilidade for morto, Temari ganha 1 chakras aleatórios.",
      "descriptionRaw": "Summoning Kamatari, Temari <Damage>deals 40 piercing damage<Damage> to one enemy. After used, if the <Classes>target of this skill is killed<Classes>, Temari <Effects>gains 1 random chakra<Effects>.",
      "descriptionBRRaw": "Invocando Kamatari, Temari <Damage>causa 40 de dano perfurante<Damage> a um inimigo. Após o uso, se o <Classes>alvo dessa habilidade for morto<Classes>, Temari <Effects>ganha 1 chakras aleatórios<Effects>.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Summoning Kamatari, Temari deals 40 piercing damage to one enemy. After used, if the target of this skill is killed, Temari gains 1 random chakra. Chakra cost: 3 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Invocando Kamatari, Temari causa 40 de dano perfurante a um inimigo. Após o uso, se o alvo dessa habilidade for morto, Temari ganha 1 chakras aleatórios. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Fan Heavy Block",
      "file": "shinobi_alliance_temari_(s)_skill_4_(fan_heavy_block).png",
      "description": "This skill makes Shinobi Alliance Temari (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Temari (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Temari (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Temari (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Temari (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Temari (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

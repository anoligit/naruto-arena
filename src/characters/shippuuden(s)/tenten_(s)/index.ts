// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tenten (S)",
  "description": "After nearly three years Tenten(s) is now a chuunin. In this time she has improved the diversity and strength of her ranged arsenal.",
  "descriptionBR": "Após quase três anos, Tenten (S) agora é uma chuunin. Durante esse tempo, ela aprimorou a diversidade e a força de seu arsenal ranged.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "tenten_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Weapon Upgrade",
      "file": "tenten_(s)_skill_1_(weapon_upgrade).png",
      "description": "By upgrading her weapons, Tenten gains 10 points of destructible defense for 1 turn. The following turn, 'Kunai Grenade' and 'Heavenly Chain Disaster' will cost 1 less random chakra. This skill will be replaced by 'Explosive Kunais Wave' for 1 turn.",
      "descriptionBR": "Ao aprimorar suas armas, Tenten ganha 10 pontos de  defesa destrutível por 1 turno. No turno seguinte, 'Kunai Grenade' e 'Heavenly Chain Disaster' irão custar 1 chakra Random a menos. Esta habilidade será substituída por 'Explosive Kunais Wave' por 1 turno.",
      "descriptionRaw": "By upgrading her weapons, Tenten gains 10 points of <Defense>destructible defense<Defense> for 1 turn. The following turn, <SkillName>'Kunai Grenade'<SkillName> and <SkillName>'Heavenly Chain Disaster'<SkillName> <Improvements>will cost 1 less random chakra<Improvements>. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Explosive Kunais Wave'<SkillName> for 1 turn.",
      "descriptionBRRaw": "Ao aprimorar suas armas, Tenten ganha 10 pontos de <Defense> defesa destrutível<Defense> por 1 turno. No turno seguinte, <SkillName>'Kunai Grenade'<SkillName> e <SkillName>'Heavenly Chain Disaster'<SkillName> irão <Improvements>custar 1 chakra Random a menos<Improvements>. Esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Explosive Kunais Wave'<SkillName> por 1 turno.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "By upgrading her weapons, Tenten gains 10 points of destructible defense for 1 turn. The following turn, 'Kunai Grenade' and 'Heavenly Chain Disaster' will cost 1 less random chakra. This skill will be replaced by 'Explosive Kunais Wave' for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao aprimorar suas armas, Tenten ganha 10 pontos de  defesa destrutível por 1 turno. No turno seguinte, 'Kunai Grenade' e 'Heavenly Chain Disaster' irão custar 1 chakra Random a menos. Esta habilidade será substituída por 'Explosive Kunais Wave' por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Kunai Grenade",
      "file": "tenten_(s)_skill_2_(kunai_grenade).jpg",
      "description": "Tenten throws an explosive filled with kunais at the enemy team, dealing 15 damage to one enemy and 10 damage to all other enemies. Any enemy that falls to 35 health or below will also receive 5 affliction damage*.",
      "descriptionBR": "Tenten lança um explosivo cheio de kunais na equipe inimiga, causando 15 de dano a um inimigo e 10 de dano a todos os outros inimigos. Qualquer inimigo que estiver com 35 de vida ou menos receberá também 5 de dano affliction*.",
      "descriptionRaw": "Tenten throws an explosive filled with kunais at the enemy team, <Damage>dealing 15 damage<Damage> to one enemy and <Damage>10 damage<Damage> to all other enemies. Any enemy that falls to <Defense>35 health<Defense> or <Defense>below<Defense> will also <Damage>receive 5 affliction damage<Damage>*.",
      "descriptionBRRaw": "Tenten lança um explosivo cheio de kunais na equipe inimiga, <Damage>causando 15 de dano<Damage> a um inimigo e <Damage>10 de dano<Damage> a todos os outros inimigos. Qualquer inimigo que estiver com <Defense>35 de vida<Defense> ou <Defense>menos<Defense> <Damage>receberá também 5 de dano affliction<Damage>*.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Affliction*",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Tenten throws an explosive filled with kunais at the enemy team, dealing 15 damage to one enemy and 10 damage to all other enemies. Any enemy that falls to 35 health or below will also receive 5 affliction damage*. Chakra cost: 1 Random. Catalog classes: Physical, Affliction*, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tenten lança um explosivo cheio de kunais na equipe inimiga, causando 15 de dano a um inimigo e 10 de dano a todos os outros inimigos. Qualquer inimigo que estiver com 35 de vida ou menos receberá também 5 de dano affliction*. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Affliction*, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Heavenly Chain Disaster",
      "file": "tenten_(s)_skill_3_(heavenly_chain_disaster).jpg",
      "description": "Tenten rains blindingly fast projectiles upon the battlefield, dealing 30 piercing damage to all enemies.",
      "descriptionBR": "Tenten lança projéteis extremamente rápidos no campo de batalha, causando 30 de dano perfurante a todos os inimigos.",
      "descriptionRaw": "Tenten rains blindingly fast projectiles upon the battlefield, <Damage>dealing 30 piercing damage<Damage> to all enemies.",
      "descriptionBRRaw": "Tenten lança projéteis extremamente rápidos no campo de batalha, <Damage>causando 30 de dano perfurante<Damage> a todos os inimigos.",
      "energy": [
        "Tai",
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Tenten rains blindingly fast projectiles upon the battlefield, dealing 30 piercing damage to all enemies. Chakra cost: 1 Tai, 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tenten lança projéteis extremamente rápidos no campo de batalha, causando 30 de dano perfurante a todos os inimigos. Custo de chakra: 1 taijutsu, 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Leaping Dodge",
      "file": "tenten_(s)_skill_4_(leaping_dodge).jpg",
      "description": "This skill makes Tenten (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Tenten (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Tenten (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Tenten (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Tenten (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Tenten (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Explosive Kunais Wave",
      "file": "tenten_(s)_skill_5_(explosive_kunais_wave).png",
      "description": "Tenten throws a wave of kunais with explosive tag on the enemy team, dealing 10 affliction damage to them. The following 3 turns, these enemies will be dealt 5 affliction damage each turn.",
      "descriptionBR": "Tenten lança uma onda de kunais com selos explosivos na equipe inimiga, causando 10 de dano affliction. Nos 3 turnos seguintes, esses inimigos receberão 5 de dano affliction por turno.",
      "descriptionRaw": "Tenten throws a wave of kunais with explosive tag on the enemy team, <Damage>dealing 10 affliction damage<Damage> to them. The following 3 turns, these enemies will be <Damage>dealt 5 affliction damage<Damage> each turn.",
      "descriptionBRRaw": "Tenten lança uma onda de kunais com selos explosivos na equipe inimiga, <Damage>causando 10 de dano affliction<Damage>. Nos 3 turnos seguintes, esses inimigos <Damage>receberão 5 de dano affliction<Damage> por turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Tenten throws a wave of kunais with explosive tag on the enemy team, dealing 10 affliction damage to them. The following 3 turns, these enemies will be dealt 5 affliction damage each turn. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tenten lança uma onda de kunais com selos explosivos na equipe inimiga, causando 10 de dano affliction. Nos 3 turnos seguintes, esses inimigos receberão 5 de dano affliction por turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

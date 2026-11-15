// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Aburame Shino (S)",
  "description": "Still as mysterious and secretive as ever, Shino has improved greatly over the years, learning and practicing with his loyal bugs. With his new found mastery, Shino can disable enemies even harder while slowly waiting for his bugs to erupt from their bodies and destroy them.",
  "descriptionBR": "Ainda tão misterioso e reservado como sempre, Shino melhorou muito ao longo dos anos, aprendendo e praticando com seus leais insetos. Com sua nova maestria, Shino pode desabilitar inimigos ainda mais enquanto espera lentamente seus insetos explodirem de seus corpos para destruí-los.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "aburame_shino_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Insect Swarm",
      "file": "aburame_shino_(s)_skill_1_(insect_swarm).jpg",
      "description": "Shino sends out wave of his insect army at one enemy, dealing 15 affliction damage to them for 3 turns. The following 3 turns, that enemy will be invulnerable to all friendly skills each turn and during this time this skill will be replaced by 'Insect Consumption'.",
      "descriptionBR": "Shino envia uma onda de seu exército de insetos para um inimigo, causando 15 de dano affliction por 3 turnos. Nos 3 turnos seguintes, esse inimigo ficará invulnerável a todas as habilidades defensivas a cada turno e durante esse tempo essa habilidade será substituída por 'Insect Consumption'.",
      "descriptionRaw": "Shino sends out wave of his insect army at one enemy, <Damage>dealing 15 affliction damage<Damage> to them for 3 turns. The following 3 turns, that enemy will be <Defense>invulnerable<Defense> to all <Classes>friendly skills<Classes> each turn and during this time this skill will be <Improvements>replaced<Improvements> by <SkillName>'Insect Consumption'<SkillName>.",
      "descriptionBRRaw": "Shino envia uma onda de seu exército de insetos para um inimigo, <Damage>causando 15 de dano affliction<Damage> por 3 turnos. Nos 3 turnos seguintes, esse inimigo ficará <Defense>invulnerável<Defense> a todas as <Classes>habilidades defensivas<Classes> a cada turno e durante esse tempo essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Insect Consumption'<SkillName>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Shino sends out wave of his insect army at one enemy, dealing 15 affliction damage to them for 3 turns. The following 3 turns, that enemy will be invulnerable to all friendly skills each turn and during this time this skill will be replaced by 'Insect Consumption'. Chakra cost: 1 Blood, 1 Random. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino envia uma onda de seu exército de insetos para um inimigo, causando 15 de dano affliction por 3 turnos. Nos 3 turnos seguintes, esse inimigo ficará invulnerável a todas as habilidades defensivas a cada turno e durante esse tempo essa habilidade será substituída por 'Insect Consumption'. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Insect Barricade",
      "file": "aburame_shino_(s)_skill_2_(insect_barricade).jpg",
      "description": "The following turn, the first new harmful skill used on himself or one ally will be countered, 'Parasitic Giant Beetle Infestation' will be placed on the countered enemy and then activated. If this skill does not counter an enemy, Shino will gain 1 Bloodline chakra. This skill is invisible.",
      "descriptionBR": "No turno seguinte, a primeira nova habilidade ofensiva usada contra ele ou um aliado será counterada, 'Parasitic Giant Beetle Infestation' será aplicada no inimigo counterado e ativada. Se essa habilidade não counterar um inimigo, Shino ganhará 1 chakra Bloodline. Essa habilidade é invisível.",
      "descriptionRaw": "The following turn, the first <Classes>new harmful skill<Classes> used on himself or one ally will be <Defense>countered<Defense>, <SkillName>'Parasitic Giant Beetle Infestation'<SkillName> will be placed on the countered enemy and then activated. If this skill does <Defense>not counter<Defense> an enemy, Shino will <Effects>gain 1 Bloodline chakra<Effects>. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "No turno seguinte, a primeira <Classes>nova habilidade ofensiva<Classes> usada contra ele ou um aliado será <Defense>counterada<Defense>, <SkillName>'Parasitic Giant Beetle Infestation'<SkillName> será aplicada no inimigo counterado e ativada. Se essa habilidade <Defense>não counterar<Defense> um inimigo, Shino<Effects> ganhará 1 chakra Bloodline<Effects>. <Invisible>Essa habilidade é invisível<Invisible>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "The following turn, the first new harmful skill used on himself or one ally will be countered, 'Parasitic Giant Beetle Infestation' will be placed on the countered enemy and then activated. If this skill does not counter an enemy, Shino will gain 1 Bloodline chakra. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "No turno seguinte, a primeira nova habilidade ofensiva usada contra ele ou um aliado será counterada, 'Parasitic Giant Beetle Infestation' será aplicada no inimigo counterado e ativada. Se essa habilidade não counterar um inimigo, Shino ganhará 1 chakra Bloodline. Essa habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Parasitic Giant Beetle Infestation",
      "file": "aburame_shino_(s)_skill_3_(parasitic_giant_beetle_infestation).png",
      "description": "Shino infects one enemy with a small bug. 3 turns after this skill has been used, the bug bursts out, dealing 30 affliction damage to them and activating all other copies of this skill on that enemy. This skill is invisible.",
      "descriptionBR": "Shino infecta um inimigo com um pequeno inseto. 3 turnos após essa habilidade ser usada, o inseto explode, causando 30 de dano affliction e ativando todas as outras cópias dessa habilidade naquele inimigo. Essa habilidade é invisível.",
      "descriptionRaw": "Shino infects one enemy with a small bug. 3 turns after this skill has been used, the bug bursts out, <Damage>dealing 30 affliction damage<Damage> to them and <Effects>activating<Effects> all other <Effects>copies<Effects> of this skill on that enemy. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Shino infecta um inimigo com um pequeno inseto. 3 turnos após essa habilidade ser usada, o inseto explode, <Damage>causando 30 de dano affliction<Damage> e <Effects>ativando<Effects> todas as outras <Effects>cópias<Effects> dessa habilidade naquele inimigo. <Invisible>Essa habilidade é invisível<Invisible>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Shino infects one enemy with a small bug. 3 turns after this skill has been used, the bug bursts out, dealing 30 affliction damage to them and activating all other copies of this skill on that enemy. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino infecta um inimigo com um pequeno inseto. 3 turnos após essa habilidade ser usada, o inseto explode, causando 30 de dano affliction e ativando todas as outras cópias dessa habilidade naquele inimigo. Essa habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Insect Cocoon",
      "file": "aburame_shino_(s)_skill_4_(insect_cocoon).jpg",
      "description": "This skill makes Aburame Shino (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Aburame Shino (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Aburame Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Aburame Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Aburame Shino (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Aburame Shino (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Insect Consumption",
      "file": "aburame_shino_(s)_skill_5_(insect_consumption).jpg",
      "description": "Shino commands his insects to drain the chakra of one enemy affected by 'Insect Swarm' stealing 1 random chakra from them and increasing the damage that enemy receives from 'Insect Swarm' by 5 that turn.",
      "descriptionBR": "Shino ordena que seus insetos drenem o chakra de um inimigo afetado por 'Insect Swarm', roubando 1 chakra aleatório e aumentando o dano que esse inimigo recebe de 'Insect Swarm' em 5 naquele turno.",
      "descriptionRaw": "Shino commands his insects to drain the chakra of one enemy affected by <SkillName>'Insect Swarm'<SkillName> <Effects>stealing 1 random chakra<Effects> from them and <Improvements>increasing the damage that enemy receives<Improvements> from <SkillName>'Insect Swarm'<SkillName> by 5 that turn.",
      "descriptionBRRaw": "Shino ordena que seus insetos drenem o chakra de um inimigo afetado por <SkillName>'Insect Swarm'<SkillName>, <Effects>roubando 1 chakra aleatório<Effects> e <Improvements>aumentando o dano que esse inimigo recebe<Improvements> de <SkillName>'Insect Swarm'<SkillName> em 5 naquele turno.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Shino commands his insects to drain the chakra of one enemy affected by 'Insect Swarm' stealing 1 random chakra from them and increasing the damage that enemy receives from 'Insect Swarm' by 5 that turn. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino ordena que seus insetos drenem o chakra de um inimigo afetado por 'Insect Swarm', roubando 1 chakra aleatório e aumentando o dano que esse inimigo recebe de 'Insect Swarm' em 5 naquele turno. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

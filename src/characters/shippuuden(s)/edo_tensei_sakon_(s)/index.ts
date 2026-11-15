// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Sakon (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War along with their Sound Four teammates, Sakon and Ukon relish being on the battlefield once again. Dynamically splitting and merging their bodies through the use of their Cursed Seal, the twins fight as a powerful unit, showing no mercy to anyone.",
  "descriptionBR": "Reanimados por Kabuto durante a Quarta Guerra Mundial Shinobi ao lado de seus companheiros do Quarteto do Som, Sakon e Ukon se deleitam por estar novamente no campo de batalha. Separando e fundindo seus corpos dinamicamente por meio da Marca da Maldição, os gêmeos lutam como uma unidade poderosa, sem demonstrar misericórdia por ninguém.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_sakon_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Enhanced Gatling Punch",
      "file": "edo_tensei_sakon_(s)_skill_1_(enhanced_gatling_punch).png",
      "description": "Sakon rapidly punches one enemy, dealing 20 damage and 15 piercing damage to them. For 1 turn, that enemy will deal 15 less non-affliction damage. The following turn, 'Parasite Demon' will be improved and fully stun the target instead.",
      "descriptionBR": "Sakon golpeia rapidamente um inimigo, causando 20 de dano e 15 de dano perfurante a ele. Por 1 turno, esse inimigo irá causar 15 de dano não-affliction a menos. No próximo turno, 'Parasite Demon' será aprimorada e irá atordoar completamente o alvo.",
      "descriptionRaw": "Sakon rapidly punches one enemy, <Damage>dealing 20 damage and 15 piercing damage<Damage> to them. For 1 turn, that enemy will <Effects>deal 15 less non-affliction damage<Effects>. The following turn, <SkillName>'Parasite Demon'<SkillName> will be <Improvements>improved and fully stun the target instead<Improvements>.",
      "descriptionBRRaw": "Sakon golpeia rapidamente um inimigo, <Damage>causando 20 de dano e 15 de dano perfurante<Damage> a ele. Por 1 turno, esse inimigo irá <Effects>causar 15 de dano não-affliction a menos<Effects>. No próximo turno, <SkillName>'Parasite Demon'<SkillName> será <Improvements>aprimorada e irá atordoar completamente o alvo<Improvements>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Sakon rapidly punches one enemy, dealing 20 damage and 15 piercing damage to them. For 1 turn, that enemy will deal 15 less non-affliction damage. The following turn, 'Parasite Demon' will be improved and fully stun the target instead. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakon golpeia rapidamente um inimigo, causando 20 de dano e 15 de dano perfurante a ele. Por 1 turno, esse inimigo irá causar 15 de dano não-affliction a menos. No próximo turno, 'Parasite Demon' será aprimorada e irá atordoar completamente o alvo. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Parasite Demon",
      "file": "edo_tensei_sakon_(s)_skill_2_(parasite_demon).png",
      "description": "Sakon enters an enemy's body, dealing 20 affliction damage to them and stunning their physical and chakra skills for 1 turn. This skill cannot be used on the same target next turn. The following turn, 'Enhanced Gatling Punch' will deal 5 additional damage.",
      "descriptionBR": "Sakon entra no corpo de um inimigo, causando 20 de dano affliction e atordoando suas habilidades físicas e de chakra por 1 turno. Essa habilidade não pode ser usada no mesmo alvo no próximo turno. No próximo turno, 'Enhanced Gatling Punch' irá causar 5 de dano adicional.",
      "descriptionRaw": "Sakon enters an enemy's body, <Damage>dealing 20 affliction damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and chakra skills<Classes> for 1 turn. This skill <Effects>cannot be used on the same target<Effects> next turn. The following turn, <SkillName>'Enhanced Gatling Punch'<SkillName> will <Improvements>deal 5 additional damage<Improvements>.",
      "descriptionBRRaw": "Sakon entra no corpo de um inimigo, <Damage>causando 20 de dano affliction<Damage> e <Effects>atordoando<Effects> suas <Classes>habilidades físicas e de chakra<Classes> por 1 turno. Essa habilidade <Effects>não pode ser usada no mesmo alvo<Effects> no próximo turno. No próximo turno, <SkillName>'Enhanced Gatling Punch'<SkillName> irá <Improvements>causar 5 de dano adicional<Improvements>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sakon enters an enemy's body, dealing 20 affliction damage to them and stunning their physical and chakra skills for 1 turn. This skill cannot be used on the same target next turn. The following turn, 'Enhanced Gatling Punch' will deal 5 additional damage. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakon entra no corpo de um inimigo, causando 20 de dano affliction e atordoando suas habilidades físicas e de chakra por 1 turno. Essa habilidade não pode ser usada no mesmo alvo no próximo turno. No próximo turno, 'Enhanced Gatling Punch' irá causar 5 de dano adicional. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Triple Rashoman",
      "file": "edo_tensei_sakon_(s)_skill_3_(summoning_triple_rashoman).png",
      "description": "Sakon summons the walls of Triple Rashoman, removing all harmful skills from himself and gaining 15 points of destructible defense for every skill he has used in the game. This skill will increase its current cooldown by 1 for every 15 destructible defense granted. These stacks reset when used.",
      "descriptionBR": "Sakon invoca as paredes do Triplo Rashoman, removendo todas as habilidades ofensivas de si mesmo e ganhando 15 pontos de defesa destrutível para cada habilidade que usou na partida. Essa habilidade irá aumentar seu cooldown atual em 1 para cada 15 de defesa destrutível concedida. Esses stacks são resetados quando usada.",
      "descriptionRaw": "Sakon summons the walls of Triple Rashoman, <Defense>removing all harmful skills<Defense> from himself and <Defense>gaining 15 points of destructible defense<Defense> for every skill he has used in the game. This skill will <Effects>increase its current cooldown by 1<Effects> for every 15 destructible defense granted. These stacks <Effects>reset when used<Effects>.",
      "descriptionBRRaw": "Sakon invoca as paredes do Triplo Rashoman, <Defense>removendo todas as habilidades ofensivas<Defense> de si mesmo e <Defense>ganhando 15 pontos de defesa destrutível<Defense> para cada habilidade que usou na partida. Essa habilidade irá <Effects>aumentar seu cooldown atual em 1<Effects> para cada 15 de defesa destrutível concedida. Esses stacks <Effects>são resetados quando usada<Effects>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Sakon summons the walls of Triple Rashoman, removing all harmful skills from himself and gaining 15 points of destructible defense for every skill he has used in the game. This skill will increase its current cooldown by 1 for every 15 destructible defense granted. These stacks reset when used. Chakra cost: 2 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sakon invoca as paredes do Triplo Rashoman, removendo todas as habilidades ofensivas de si mesmo e ganhando 15 pontos de defesa destrutível para cada habilidade que usou na partida. Essa habilidade irá aumentar seu cooldown atual em 1 para cada 15 de defesa destrutível concedida. Esses stacks são resetados quando usada. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sakon: Chakra Unseal",
      "file": "edo_tensei_sakon_(s)_skill_4_(sakon_chakra_unseal).png",
      "description": "This skill makes Sakon invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Sakon invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Sakon <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Sakon <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Sakon invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Sakon invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

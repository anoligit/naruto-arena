// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Yugito (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War, Yugito has had the Two-Tails, Matatabi, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Yugito is under his full control, fighting her foes using the Two-Tails' fiery feline powers.",
  "descriptionBR": "Reanimada por Kabuto durante a Quarta Guerra Mundial Ninja, Yugito teve o Duas-Caudas, Matatabi, selado de volta dentro de si. Transformada em um dos novos Seis Caminhos da Dor de Tobi, junto com os outros jinchuuriki caídos, Yugito está sob seu controle total, lutando contra seus inimigos usando os poderes felinos do Duas-Caudas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_yugito_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Cat Claws",
      "file": "edo_tensei_yugito_(s)_skill_1_(cat_claws).png",
      "description": "Yugito deals 15 damage to one enemy and stuns their non-mental skills for 1 turn.",
      "descriptionBR": "Yugito causa 15 de dano a um inimigo e atordoa suas habilidades non-Mental por 1 turno.",
      "descriptionRaw": "Yugito <Damage>deals 15 damage<Damage> to one enemy and <Effects>stuns<Effects> their non-mental skills for 1 turn.",
      "descriptionBRRaw": "Yugito <Damage>causa 15 de dano<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades non-Mental por 1 turno.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Yugito deals 15 damage to one enemy and stuns their non-mental skills for 1 turn. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito causa 15 de dano a um inimigo e atordoa suas habilidades non-Mental por 1 turno. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Fiery Mouse Hairball",
      "file": "edo_tensei_yugito_(s)_skill_2_(fiery_mouse_hairball).png",
      "description": "Yugito deals 15 damage to one enemy and removes 1 taijutsu chakra from them.",
      "descriptionBR": "Yugito causa 15 de dano a um inimigo e remove 1 taijutsu chakra dele.",
      "descriptionRaw": "Yugito <Damage>deals 15 damage<Damage> to one enemy and <Effects>removes 1 taijutsu chakra<Effects> from them.",
      "descriptionBRRaw": "Yugito <Damage>causa 15 de dano<Damage> a um inimigo e<Effects> remove 1 taijutsu chakra<Effects> dele.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Yugito deals 15 damage to one enemy and removes 1 taijutsu chakra from them. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito causa 15 de dano a um inimigo e remove 1 taijutsu chakra dele. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Nibi: Rage Punch",
      "file": "edo_tensei_yugito_(s)_skill_3_(nibi_rage_punch).png",
      "description": "Yugito destroys all destructible defense of one enemy, deals 15 piercing damage to them and kills them if their health drops to 10 or less.",
      "descriptionBR": "Yugito destrói toda a defesa destrutível de um inimigo, causa 15 de dano perfurante e o mata se sua vida cair para 10 ou menos.",
      "descriptionRaw": "Yugito <Effects>destroys<Effects> all <Effects>destructible defense<Effects> of one enemy, <Damage>deals 15 piercing damage<Damage> to them and <Effects>kills<Effects> them if their <Defense>health<Defense> drops to 10 or less.",
      "descriptionBRRaw": "Yugito <Effects>destrói<Effects> toda a <Effects>defesa destrutível<Effects> de um inimigo, <Damage>causa 15 de dano perfurante<Damage> e o <Effects>mata<Effects> se sua <Defense>vida<Defense> cair para 10 ou menos.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Yugito destroys all destructible defense of one enemy, deals 15 piercing damage to them and kills them if their health drops to 10 or less. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yugito destrói toda a defesa destrutível de um inimigo, causa 15 de dano perfurante e o mata se sua vida cair para 10 ou menos. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Yugito: Rinnegan Awareness",
      "file": "edo_tensei_yugito_(s)_skill_4_(yugito_rinnegan_awareness).png",
      "description": "This skill makes Edo Tensei Yugito (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Yugito (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Yugito (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Yugito (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Yugito (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Yugito (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: Nibi Awakening",
      "file": "edo_tensei_yugito_(s)_skill_5_(passive_nibi_awakening).png",
      "description": "Every time Yugito uses a new harmful skill, she gains 10 additional damage, stacking until she stops using new harmful skills. If Yugito passes 2 turns without using a new harmful skill, her skills will cost 1 random chakra for 1 turn. The bonus damage may only stack up to a maximum of 30.",
      "descriptionBR": "Cada vez que Yugito usa uma nova habilidade ofensiva, ela ganha 10 de dano adicional, acumulando até que ela pare de usar novas habilidades ofensivas. Se Yugito passar 2 turnos sem usar uma nova habilidade ofensiva, suas habilidades irão custar 1 random por 1 turno. O dano extra só poderá ser acumulado a um máximo de 30.",
      "descriptionRaw": "Every time Yugito uses a <Classes>new harmful skill<Classes>, she <Improvements>gains 10 additional damage<Improvements>, stacking until she stops using new harmful skills. If Yugito passes 2 turns without using a new harmful skill, her skills will cost 1 random chakra for 1 turn. The bonus damage may only stack up to a maximum of 30.",
      "descriptionBRRaw": "Cada vez que Yugito usa uma nova <Classes>habilidade ofensiva<Classes>, ela <Improvements>ganha 10 de dano adicional<Improvements>, acumulando até que ela pare de usar novas habilidades ofensivas. Se Yugito passar 2 turnos sem usar uma nova habilidade ofensiva, suas habilidades irão custar 1 random por 1 turno. O dano extra só poderá ser acumulado a um máximo de 30.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Every time Yugito uses a new harmful skill, she gains 10 additional damage, stacking until she stops using new harmful skills. If Yugito passes 2 turns without using a new harmful skill, her skills will cost 1 random chakra for 1 turn. The bonus damage may only stack up to a maximum of 30. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Cada vez que Yugito usa uma nova habilidade ofensiva, ela ganha 10 de dano adicional, acumulando até que ela pare de usar novas habilidades ofensivas. Se Yugito passar 2 turnos sem usar uma nova habilidade ofensiva, suas habilidades irão custar 1 random por 1 turno. O dano extra só poderá ser acumulado a um máximo de 30. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

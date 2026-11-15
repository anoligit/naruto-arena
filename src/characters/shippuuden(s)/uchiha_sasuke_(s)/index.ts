// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Sasuke (S)",
  "description": "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
  "descriptionBR": "Uchiha Sasuke (S) passou os últimos 2 anos treinando sob a orientação de Orochimaru. Agora ele é um espadachim habilidoso e desenvolveu imensamente suas técnicas do elemento raio. Seu comportamento também se tornou muito frio, e ele é um dos indivíduos mais perigosos do mundo ninja.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "uchiha_sasuke_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chidori Nagashi",
      "file": "uchiha_sasuke_(s)_skill_1_(chidori_nagashi).png",
      "description": "Sasuke activates 'Chidori Nagashi', gaining 1 Lightning stack permanently every turn. Sasuke may use his skills to consume all Lightning stacks, dealing 10 additional damage per stack. Each turn, the first enemy that uses a new skill on Sasuke will take 10 piercing damage and consume 1 Lightning stack; cannot be triggered if Sasuke has no Lightning stacks.",
      "descriptionBR": "Sasuke ativa 'Chidori Nagashi', ganhando 1 Lightning stack permanentemente todos os turno. Sasuke pode usar suas habilidades para consumir todos os Lightning stacks, causando 10 de dano adicional por stack. A cada turno, o primeiro inimigo que usar uma nova habilidade em Sasuke irá receber 10 de dano perfurante e fará Sasuke consumir 1 Lightning stack; não pode ser ativada se Sasuke não tiver Lightning stacks.",
      "descriptionRaw": "Sasuke activates <SkillName>'Chidori Nagashi'<SkillName>, <Invisible>gaining 1 Lightning stack<Invisible> permanently every turn. Sasuke may use his skills to <Effects>consume all Lightning stacks<Effects>, <Improvements>dealing 10 additional damage per stack<Improvements>. Each turn, the first enemy that uses a new skill on Sasuke will <Damage>take 10 piercing damage<Damage> and <Effects>consume 1 Lightning stack<Effects>; cannot be triggered if Sasuke has no Lightning stacks.",
      "descriptionBRRaw": "Sasuke ativa <SkillName>'Chidori Nagashi'<SkillName>, <Invisible>ganhando 1 Lightning stack<Invisible> permanentemente todos os turno. Sasuke pode usar suas habilidades para <Effects>consumir todos os Lightning stacks<Effects>, <Improvements>causando 10 de dano adicional por stack<Improvements>. A cada turno, o primeiro inimigo que usar uma nova habilidade em Sasuke irá <Damage>receber 10 de dano perfurante<Damage> e fará Sasuke <Effects>consumir 1 Lightning stack<Effects>; não pode ser ativada se Sasuke não tiver Lightning stacks.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasuke activates 'Chidori Nagashi', gaining 1 Lightning stack permanently every turn. Sasuke may use his skills to consume all Lightning stacks, dealing 10 additional damage per stack. Each turn, the first enemy that uses a new skill on Sasuke will take 10 piercing damage and consume 1 Lightning stack; cannot be triggered if Sasuke has no Lightning stacks. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke ativa 'Chidori Nagashi', ganhando 1 Lightning stack permanentemente todos os turno. Sasuke pode usar suas habilidades para consumir todos os Lightning stacks, causando 10 de dano adicional por stack. A cada turno, o primeiro inimigo que usar uma nova habilidade em Sasuke irá receber 10 de dano perfurante e fará Sasuke consumir 1 Lightning stack; não pode ser ativada se Sasuke não tiver Lightning stacks. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lightning Shockwave",
      "file": "uchiha_sasuke_(s)_skill_2_(lightning_shockwave).png",
      "description": "Sasuke deals 15 piercing damage to one enemy and 5 piercing damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
      "descriptionBR": "Sasuke causa 15 de dano perfurante a um inimigo e 5 de dano perfurante a todos os outros. Por 1 turno, Sasuke irá ignorar dano affliction.",
      "descriptionRaw": "Sasuke <Damage>deals 15 piercing damage<Damage> to one enemy and <Damage>5 piercing damage<Damage> to all others. For 1 turn, Sasuke will <Defense>ignore affliction damage<Defense>.",
      "descriptionBRRaw": "Sasuke <Damage>causa 15 de dano perfurante<Damage> a um inimigo e <Damage>5 de dano perfurante<Damage> a todos os outros. Por 1 turno, Sasuke irá <Defense>ignorar dano affliction<Defense>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Sasuke deals 15 piercing damage to one enemy and 5 piercing damage to all others. For 1 turn, Sasuke will ignore affliction damage. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke causa 15 de dano perfurante a um inimigo e 5 de dano perfurante a todos os outros. Por 1 turno, Sasuke irá ignorar dano affliction. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Lightning Blade",
      "file": "uchiha_sasuke_(s)_skill_3_(lightning_blade).png",
      "description": "Sasuke deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage and their active cooldowns will be paralyzed.",
      "descriptionBR": "Sasuke causa 20 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 10 a menos de dano não affliction e seus cooldowns ativos serão paralisados.",
      "descriptionRaw": "Sasuke <Damage>deals 20 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 10 less non-affliction damage<Effects> and their <Effects>active cooldowns will be paralyzed<Effects>.",
      "descriptionBRRaw": "Sasuke <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 10 a menos de dano não affliction<Effects> e seus <Effects>cooldowns ativos serão paralisados<Effects>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasuke deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage and their active cooldowns will be paralyzed. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke causa 20 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 10 a menos de dano não affliction e seus cooldowns ativos serão paralisados. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Protective Summoning",
      "file": "uchiha_sasuke_(s)_skill_4_(protective_summoning).png",
      "description": "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
      "descriptionBR": "Esta habilidade deixa Uchiha Sasuke (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Uchiha Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Esta habilidade deixa Uchiha Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade deixa Uchiha Sasuke (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: Cursed Seal Protection",
      "file": "uchiha_sasuke_(s)_skill_5_(passive_cursed_seal_protection).png",
      "description": "When Sasuke reaches 50 health or less, all harmful affliction skills will be removed from him and Sasuke will gain 30 points of destructible defense for 3 turns. The following 3 turns, 'Lightning Shockwave' and 'Lightning Blade' will be replaced by their alternate versions.",
      "descriptionBR": "Quando Sasuke atingir 50 de vida ou menos, todas as habilidades affliction ofensivas serão removidas dele e Sasuke irá ganhar 30 pontos de defesa destrutível por 3 turnos. Nos próximos 3 turnos, 'Lightning Shockwave' e 'Lightning Blade' serão substituídas por suas versões alternativas.",
      "descriptionRaw": "When Sasuke <Invisible>reaches 50 health or less<Invisible>, <Effects>all harmful affliction skills will be removed<Effects> from him and Sasuke will <Defense>gain 30 points of destructible defense<Defense> for 3 turns. The following 3 turns, <SkillName>'Lightning Shockwave'<SkillName> and <SkillName>'Lightning Blade'<SkillName> will be <Improvements>replaced by their alternate versions<Improvements>.",
      "descriptionBRRaw": "Quando Sasuke <Invisible>atingir 50 de vida ou menos<Invisible>, <Effects>todas as habilidades affliction ofensivas serão removidas<Effects> dele e Sasuke irá <Defense>ganhar 30 pontos de defesa destrutível<Defense> por 3 turnos. Nos próximos 3 turnos, <SkillName>'Lightning Shockwave'<SkillName> e <SkillName>'Lightning Blade'<SkillName> serão <Improvements>substituídas por suas versões alternativas<Improvements>.",
      "energy": [],
      "classes": [
        "Passive",
        "Instant",
        "_$1",
        "_$2",
        "_$3",
        "_$4"
      ],
      "cooldown": 0,
      "ruleDescription": "When Sasuke reaches 50 health or less, all harmful affliction skills will be removed from him and Sasuke will gain 30 points of destructible defense for 3 turns. The following 3 turns, 'Lightning Shockwave' and 'Lightning Blade' will be replaced by their alternate versions. Chakra cost: no chakra cost listed. Catalog classes: Passive, Instant, _$1, _$2, _$3, _$4. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Quando Sasuke atingir 50 de vida ou menos, todas as habilidades affliction ofensivas serão removidas dele e Sasuke irá ganhar 30 pontos de defesa destrutível por 3 turnos. Nos próximos 3 turnos, 'Lightning Shockwave' e 'Lightning Blade' serão substituídas por suas versões alternativas. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Passive, Instant, _$1, _$2, _$3, _$4. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Great Dragon Flame Jutsu",
      "file": "uchiha_sasuke_(s)_skill_6_(great_dragon_flame_jutsu).png",
      "description": "Sasuke deals 25 affliction damage to one enemy and 15 affliction damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
      "descriptionBR": "Sasuke causa 25 de dano affliction a um inimigo e 15 de dano affliction a todos os outros. Por 1 turno, Sasuke irá ignorar dano affliction.",
      "descriptionRaw": "Sasuke <Damage>deals 25 affliction damage<Damage> to one enemy and <Damage>15 affliction damage<Damage> to all others. For 1 turn, Sasuke will <Defense>ignore affliction damage<Defense>.",
      "descriptionBRRaw": "Sasuke <Damage>causa 25 de dano affliction<Damage> a um inimigo e <Damage>15 de dano affliction<Damage> a todos os outros. Por 1 turno, Sasuke irá <Defense>ignorar dano affliction<Defense>.",
      "energy": [
        "Nin",
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Sasuke deals 25 affliction damage to one enemy and 15 affliction damage to all others. For 1 turn, Sasuke will ignore affliction damage. Chakra cost: 1 Nin, 2 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke causa 25 de dano affliction a um inimigo e 15 de dano affliction a todos os outros. Por 1 turno, Sasuke irá ignorar dano affliction. Custo de chakra: 1 ninjutsu, 2 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Flying Corrupt Chidori",
      "file": "uchiha_sasuke_(s)_skill_7_(flying_corrupt_chidori).png",
      "description": "Sasuke deals 35 piercing damage to one enemy. For 1 turn, that enemy will deal 20 less non-affliction damage and their active cooldowns will be paralyzed.",
      "descriptionBR": "Sasuke causa 35 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 20 a menos de dano não affliction e seus cooldowns ativos serão paralisados.",
      "descriptionRaw": "Sasuke <Damage>deals 35 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 20 less non-affliction damage<Effects> and their <Effects>active cooldowns will be paralyzed<Effects>.",
      "descriptionBRRaw": "Sasuke <Damage>causa 35 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 20 a menos de dano não affliction<Effects> e seus <Effects>cooldowns ativos serão paralisados<Effects>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasuke deals 35 piercing damage to one enemy. For 1 turn, that enemy will deal 20 less non-affliction damage and their active cooldowns will be paralyzed. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke causa 35 de dano perfurante a um inimigo. Por 1 turno, esse inimigo irá causar 20 a menos de dano não affliction e seus cooldowns ativos serão paralisados. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

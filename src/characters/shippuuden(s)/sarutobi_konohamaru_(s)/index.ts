// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sarutobi Konohamaru (S)",
  "description": "Determined to follow in Naruto's footsteps, Konohamaru refuses to back down even against overwhelming opponents. Combining his shadow clones, clever distractions, and the powerful Rasengan, he fights to prove himself as a proud shinobi of the Hidden Leaf Village.",
  "descriptionBR": "Determinado a seguir os passos de Naruto, Konohamaru se recusa a recuar mesmo contra inimigos poderosos. Combinando seus clones das sombras, suas distrações inteligentes e o Rasengan, ele luta para provar a si mesmo um orgulhoso ninja da Vila Oculta da Folha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sarutobi_konohamaru_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Unexpected Rasengan",
      "file": "sarutobi_konohamaru_(s)_skill_1_(unexpected_rasengan).png",
      "description": "Seizing an opening in his opponent's defenses, Konohamaru strikes with a powerful Rasengan. Konohamaru targets one enemy for 1 turn. The following turn, that enemy will take 25 damage and an additional 15 damage if they used a new skill that turn. This skill is invisible.",
      "descriptionBR": "Encontrando uma abertura nas defesas de seu oponente, Konohamaru ataca com um poderoso Rasengan. Konohamaru alveja um inimigo por 1 turno. No turno seguinte, aquele inimigo receberá 25 de dano, e mais 15 de dano se ele usou uma habilidade naquele turno. Essa habilidade é invisível.",
      "descriptionRaw": "Seizing an opening in his opponent's defenses, Konohamaru strikes with a powerful Rasengan. Konohamaru targets one enemy for 1 turn. The following turn, that enemy will take <Damage>25 damage<Damage> and an additional <Damage>15 damage<Damage> <Effects>if they used a new skill that turn<Effects>. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Encontrando uma abertura nas defesas de seu oponente, Konohamaru ataca com um poderoso Rasengan. Konohamaru alveja um inimigo por 1 turno. No turno seguinte, aquele inimigo receberá <Damage>25 de dano<Damage>, e mais <Damage>15 de dano<Damage> <Effects>se ele usou uma habilidade naquele turno<Effects>. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Seizing an opening in his opponent's defenses, Konohamaru strikes with a powerful Rasengan. Konohamaru targets one enemy for 1 turn. The following turn, that enemy will take 25 damage and an additional 15 damage if they used a new skill that turn. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Action, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Encontrando uma abertura nas defesas de seu oponente, Konohamaru ataca com um poderoso Rasengan. Konohamaru alveja um inimigo por 1 turno. No turno seguinte, aquele inimigo receberá 25 de dano, e mais 15 de dano se ele usou uma habilidade naquele turno. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Action, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Ash Pile Diversion",
      "file": "sarutobi_konohamaru_(s)_skill_2_(ash_pile_diversion).png",
      "description": "Konohamaru obscures his opponents' vision, blinding all enemies' harmful skills for 2 turns (a blinded harmful skill will target a random enemy instead of a specific enemy). If 'Unexpected Rasengan' is used on an enemy affected by this skill, 'Unexpected Rasengan' will instantly deal 40 damage to that enemy instead.",
      "descriptionBR": "Konohamaru escurece a visão de seus oponentes, cegando as habilidades ofensivas de todos os inimigos por 2 turnos (uma habilidade ofensiva cegada alvejará um inimigo aleatório ao invés de um inimigo específico). Se 'Unexpected Rasengan' for usado em um inimigo afetado por essa habilidade, 'Unexpected Rasengan' vai causar 40 de dano instantaneamente àquele inimigo ao invés de seu efeito original.",
      "descriptionRaw": "Konohamaru obscures his opponents' vision, <Effects>blinding<Effects> all enemies' <Classes>harmful<Classes> skills for 2 turns (a blinded harmful skill will target a random enemy instead of a specific enemy). If <SkillName>'Unexpected Rasengan'<SkillName> is used on an enemy affected by this skill, <SkillName>'Unexpected Rasengan'<SkillName> <Effects><Improvements>will instantly deal<Improvements><Effects><Improvements> <Improvements><Damage><Improvements>40 damage<Improvements><Damage><Improvements> <Improvements><Effects><Improvements>to that enemy instead<Improvements><Effects>.",
      "descriptionBRRaw": "Konohamaru escurece a visão de seus oponentes, <Effects>cegando<Effects> as habilidades <Classes>ofensivas<Classes> de todos os inimigos por 2 turnos (uma habilidade ofensiva cegada alvejará um inimigo aleatório ao invés de um inimigo específico). Se <SkillName>'Unexpected Rasengan'<SkillName> for usado em um inimigo afetado por essa habilidade, <SkillName>'Unexpected Rasengan'<SkillName> <Effects><Improvements>vai causar <Improvements><Effects><Damage><Improvements>40 de dano<Improvements><Damage><Improvements> <Improvements><Effects><Improvements>instantaneamente àquele inimigo ao invés de seu efeito original<Improvements><Effects>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Konohamaru obscures his opponents' vision, blinding all enemies' harmful skills for 2 turns (a blinded harmful skill will target a random enemy instead of a specific enemy). If 'Unexpected Rasengan' is used on an enemy affected by this skill, 'Unexpected Rasengan' will instantly deal 40 damage to that enemy instead. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konohamaru escurece a visão de seus oponentes, cegando as habilidades ofensivas de todos os inimigos por 2 turnos (uma habilidade ofensiva cegada alvejará um inimigo aleatório ao invés de um inimigo específico). Se 'Unexpected Rasengan' for usado em um inimigo afetado por essa habilidade, 'Unexpected Rasengan' vai causar 40 de dano instantaneamente àquele inimigo ao invés de seu efeito original. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Shuriken Shadow Clone Barrage",
      "file": "sarutobi_konohamaru_(s)_skill_3_(shuriken_shadow_clone_barrage).png",
      "description": "Konohamaru launches a coordinated assault at his opponents, dealing 15 damage to all enemies for 2 turns. Also for 2 turns*, any enemy that gets affected by a new helpful skill from a member of their team will take 15 damage.",
      "descriptionBR": "Konohamaru lança um ataque coordenado em seus oponentes, causando 15 de dano a todos os inimigos por 2 turnos. Também por 2 turnos*, qualquer inimigo que for afetado por uma nova habilidade benéfica vinda de um membro do time dele receberá 15 de dano.",
      "descriptionRaw": "Konohamaru launches a coordinated assault at his opponents, dealing <Damage>15 damage<Damage> to all enemies for 2 turns. Also for 2 turns*, any enemy that <Effects>gets affected by a new <Classes>helpful skill<Classes> from a member of their team<Effects> will take <Damage>15 damage<Damage>.",
      "descriptionBRRaw": "Konohamaru lança um ataque coordenado em seus oponentes, causando <Damage>15 de dano<Damage> a todos os inimigos por 2 turnos. Também por 2 turnos*, qualquer inimigo que <Effects>for afetado por uma nova <Classes>habilidade benéfica<Classes> vinda de um membro do time dele<Effects> receberá <Damage>15 de dano<Damage>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Instant*",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Konohamaru launches a coordinated assault at his opponents, dealing 15 damage to all enemies for 2 turns. Also for 2 turns*, any enemy that gets affected by a new helpful skill from a member of their team will take 15 damage. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Action, Instant*, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konohamaru lança um ataque coordenado em seus oponentes, causando 15 de dano a todos os inimigos por 2 turnos. Também por 2 turnos*, qualquer inimigo que for afetado por uma nova habilidade benéfica vinda de um membro do time dele receberá 15 de dano. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Action, Instant*, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Backflip Dodge",
      "file": "sarutobi_konohamaru_(s)_skill_4_(backflip_dodge).png",
      "description": "This skill makes Konohamaru invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Konohamaru invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Konohamaru <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Konohamaru <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Konohamaru invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Konohamaru invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

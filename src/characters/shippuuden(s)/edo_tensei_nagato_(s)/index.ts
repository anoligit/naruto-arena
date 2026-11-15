// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Nagato (S)",
  "description": "Edo Tensei Nagato (S) has been summoned to do battle. He is fully aware of the fact that he is being controlled again as he was while he was living.",
  "descriptionBR": "Edo Tensei Nagato (S) foi invocado para lutar. Ele está totalmente ciente do fato de que está sendo controlado novamente, assim como era quando estava vivo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_nagato_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Human Path",
      "file": "edo_tensei_nagato_(s)_skill_1_(human_path).jpeg",
      "description": "Nagato draws out the lifeforce of an enemy, stealing 15 health and dealing 20 damage. That enemy's harmful skills will be stunned for 1 turn.",
      "descriptionBR": "Nagato extrai a força vital de um inimigo, roubando 15 de vida e causando 20 de dano. As habilidades ofensivas desse inimigo serão atordoadas por 1 turno.",
      "descriptionRaw": "Nagato draws out the lifeforce of an enemy, <Damage>stealing 15 health<Damage> and <Damage>dealing 20 damage<Damage>. That enemy's <Classes>harmful skills<Classes> will be <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Nagato extrai a força vital de um inimigo, <Damage>roubando 15 de vida<Damage> e <Damage>causando 20 de dano<Damage>. As <Classes>habilidades ofensivas<Classes> desse inimigo serão <Effects>atordoadas<Effects> por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Nagato draws out the lifeforce of an enemy, stealing 15 health and dealing 20 damage. That enemy's harmful skills will be stunned for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato extrai a força vital de um inimigo, roubando 15 de vida e causando 20 de dano. As habilidades ofensivas desse inimigo serão atordoadas por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Preta Path",
      "file": "edo_tensei_nagato_(s)_skill_2_(preta_path).png",
      "description": "Nagato drains an enemy's energy, dealing 10 affliction damage and removing 1 taijutsu or ninjutsu chakra from their chakra pool. While improved by 'Animal Path', this skill will steal health and chakra instead.",
      "descriptionBR": "Nagato drena a energia de um inimigo, causando 10 de dano affliction e removendo 1 chakra taijutsu ou ninjutsu da reserva de chakra dele. Quando aprimorada por 'Animal Path', essa habilidade irá roubar a vida e o chakra.",
      "descriptionRaw": "Nagato drains an enemy's energy, <Damage>dealing 10 affliction damage<Damage> and <Effects>removing 1 taijutsu or ninjutsu chakra<Effects> from their chakra pool. While improved by <SkillName>'Animal Path'<SkillName>, this skill will <Improvements>steal health and chakra<Improvements> instead.",
      "descriptionBRRaw": "Nagato drena a energia de um inimigo, <Damage>causando 10 de dano affliction<Damage> e <Effects>removendo 1 chakra taijutsu ou ninjutsu<Effects> da reserva de chakra dele. Quando aprimorada por <SkillName>'Animal Path'<SkillName>, essa habilidade irá <Improvements>roubar a vida e o chakra<Improvements>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Nagato drains an enemy's energy, dealing 10 affliction damage and removing 1 taijutsu or ninjutsu chakra from their chakra pool. While improved by 'Animal Path', this skill will steal health and chakra instead. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato drena a energia de um inimigo, causando 10 de dano affliction e removendo 1 chakra taijutsu ou ninjutsu da reserva de chakra dele. Quando aprimorada por 'Animal Path', essa habilidade irá roubar a vida e o chakra. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Animal Path",
      "file": "edo_tensei_nagato_(s)_skill_3_(animal_path).png",
      "description": "Nagato summons various animals and creatures, dealing 15 damage to all enemies for 2 turns. During this time, any enemy that uses a new skill on Edo Tensei Nagato will be *dealt 10 piercing damage. For 1 turn, 'Human Path' will deal piercing damage, while 'Preta Path' will steal health and chakra.",
      "descriptionBR": "Nagato invoca diversos animais e criaturas, causando 15 de dano a todos os inimigos por 2 turnos. Durante esse tempo, qualquer inimigo que usar uma nova habilidade em Edo Tensei Nagato irá *receber 10 de dano perfurante. Por 1 turno, 'Human Path' irá causar dano perfurante, enquanto 'Preta Path' irá roubar vida e chakra.",
      "descriptionRaw": "Nagato summons various animals and creatures, <Damage>dealing 15 damage<Damage> to all enemies for 2 turns. During this time, any enemy that uses a <Classes>new skill<Classes> on Edo Tensei Nagato will be *<Damage>dealt 10 piercing damage<Damage>. For 1 turn, <SkillName>'Human Path'<SkillName> will <Improvements>deal piercing damage<Improvements>, while <SkillName>'Preta Path'<SkillName> will <Improvements>steal health and chakra<Improvements>.",
      "descriptionBRRaw": "Nagato invoca diversos animais e criaturas, <Damage>causando 15 de dano<Damage> a todos os inimigos por 2 turnos. Durante esse tempo, qualquer inimigo que usar uma <Classes>nova habilidade<Classes> em Edo Tensei Nagato irá *<Damage>receber 10 de dano perfurante<Damage>. Por 1 turno, <SkillName>'Human Path'<SkillName> irá <Improvements>causar dano perfurante<Improvements>, enquanto <SkillName>'Preta Path'<SkillName> irá <Improvements>roubar vida e chakra<Improvements>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "*Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Nagato summons various animals and creatures, dealing 15 damage to all enemies for 2 turns. During this time, any enemy that uses a new skill on Edo Tensei Nagato will be *dealt 10 piercing damage. For 1 turn, 'Human Path' will deal piercing damage, while 'Preta Path' will steal health and chakra. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Action, *Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato invoca diversos animais e criaturas, causando 15 de dano a todos os inimigos por 2 turnos. Durante esse tempo, qualquer inimigo que usar uma nova habilidade em Edo Tensei Nagato irá *receber 10 de dano perfurante. Por 1 turno, 'Human Path' irá causar dano perfurante, enquanto 'Preta Path' irá roubar vida e chakra. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Action, *Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Naraka Path",
      "file": "edo_tensei_nagato_(s)_skill_4_(naraka_path).jpeg",
      "description": "This skill makes Edo Tensei Nagato (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Nagato (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Nagato (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Nagato (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

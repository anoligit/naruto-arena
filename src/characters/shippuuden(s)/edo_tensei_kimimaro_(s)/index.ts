// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Kimimaro (S)",
  "description": "Edo Tensei Kimimaro was resurrected by Kabuto as an unfeeling weapon of war, his loyalty and discipline preserved even beyond death. He wields the Shikotsumyaku Kekkei Genkai to turn his own skeleton into blades and armor, growing stronger the longer he remains unbroken. Every strike hardens his defenses, and every moment of restraint builds toward an inevitable, bone-shattering end.",
  "descriptionBR": "Edo Tensei Kimimaro foi ressuscitado por Kabuto como uma insensível arma de guerra, com sua lealdade e disciplina preservadas mesmo após a morte. Ele utiliza a Kekkei Genkai Shikotsumyaku para transformar o próprio esqueleto em lâminas e armadura, ficando mais forte quanto mais tempo permanece inabalável. Cada golpe fortalece suas defesas, e cada momento de contenção o aproxima de um fim inevitável e devastador.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_kimimaro_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Bone Rush",
      "file": "edo_tensei_kimimaro_(s)_skill_1_(bone_rush).png",
      "description": "Kimimaro rushes one enemy, dealing 25 damage to them and gaining 1 stack of 'Bone Spikes'. This skill will deal 10 additional damage for every 3 stacks of 'Bone Spikes'.",
      "descriptionBR": "Kimimaro avança contra um inimigo, causando 25 de dano a ele e ganhando 1 stack de 'Bone Spikes'. Essa habilidade irá causar 10 de dano adicional a cada 3 stacks de 'Bone Spikes'.",
      "descriptionRaw": "Kimimaro rushes one enemy, <Damage>dealing 25 damage<Damage> to them and <Effects>gaining 1 stack<Effects> of <SkillName>'Bone Spikes'<SkillName>. This skill will <Improvements>deal 10 additional damage for every 3 stacks<Improvements> of <SkillName>'Bone Spikes'<SkillName>.",
      "descriptionBRRaw": "Kimimaro avança contra um inimigo, <Damage>causando 25 de dano<Damage> a ele e <Effects>ganhando 1 stack<Effects> de <SkillName>'Bone Spikes'<SkillName>. Essa habilidade irá <Improvements>causar 10 de dano adicional a cada 3 stacks<Improvements> de <SkillName>'Bone Spikes'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kimimaro rushes one enemy, dealing 25 damage to them and gaining 1 stack of 'Bone Spikes'. This skill will deal 10 additional damage for every 3 stacks of 'Bone Spikes'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kimimaro avança contra um inimigo, causando 25 de dano a ele e ganhando 1 stack de 'Bone Spikes'. Essa habilidade irá causar 10 de dano adicional a cada 3 stacks de 'Bone Spikes'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Skeleton Splinters",
      "file": "edo_tensei_kimimaro_(s)_skill_2_(skeleton_splinters).png",
      "description": "Kimimaro unleashes sharpened bone shards at all enemies, dealing 15 piercing damage to them and gaining 1 stack of 'Bone Spikes'. This skill will deal 5 additional damage for every 3 stacks of 'Bone Spikes'.",
      "descriptionBR": "Kimimaro libera fragmentos ósseos afiados contra todos os inimigos, causando 15 de dano perfurante a eles e ganhando 1 stack de 'Bone Spikes'. Essa habilidade irá causar 5 de dano adicional a cada 3 stacks de 'Bone Spikes'.",
      "descriptionRaw": "Kimimaro unleashes sharpened bone shards at all enemies, <Damage>dealing 15 piercing damage<Damage> to them and <Effects>gaining 1 stack<Effects> of <SkillName>'Bone Spikes'<SkillName>. This skill will <Improvements>deal 5 additional damage for every 3 stacks<Improvements> of <SkillName>'Bone Spikes'<SkillName>.",
      "descriptionBRRaw": "Kimimaro libera fragmentos ósseos afiados contra todos os inimigos, <Damage>causando 15 de dano perfurante<Damage> a eles e <Effects>ganhando 1 stack<Effects> de <SkillName>'Bone Spikes'<SkillName>. Essa habilidade irá <Improvements>causar 5 de dano adicional a cada 3 stacks<Improvements> de <SkillName>'Bone Spikes'<SkillName>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kimimaro unleashes sharpened bone shards at all enemies, dealing 15 piercing damage to them and gaining 1 stack of 'Bone Spikes'. This skill will deal 5 additional damage for every 3 stacks of 'Bone Spikes'. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kimimaro libera fragmentos ósseos afiados contra todos os inimigos, causando 15 de dano perfurante a eles e ganhando 1 stack de 'Bone Spikes'. Essa habilidade irá causar 5 de dano adicional a cada 3 stacks de 'Bone Spikes'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Dead Man's Skewer",
      "file": "edo_tensei_kimimaro_(s)_skill_3_(dead_man's_skewer).png",
      "description": "Kimimaro impales his opponents, dealing 50 piercing damage to one enemy and 15 piercing damage to all other enemies. This skill cannot be countered and requires at least 5 stacks of 'Bone Spikes' to be used.",
      "descriptionBR": "Kimimaro empala seus oponentes, causando 50 de dano perfurante a um inimigo e 15 de dano perfurante a todos os outros inimigos. Essa habilidade não pode ser counterada e requer pelo menos 5 stacks de 'Bone Spikes' para ser usada.",
      "descriptionRaw": "Kimimaro impales his opponents, <Damage>dealing 50 piercing damage<Damage> to one enemy and <Damage>15 piercing damage<Damage> to all other enemies. This skill <Invisible>cannot be countered<Invisible> and requires at least <Effects>5 stacks<Effects> of <SkillName>'Bone Spikes'<SkillName> to be used.",
      "descriptionBRRaw": "Kimimaro empala seus oponentes, <Damage>causando 50 de dano perfurante<Damage> a um inimigo e <Damage>15 de dano perfurante<Damage> a todos os outros inimigos. Essa habilidade <Invisible>não pode ser counterada<Invisible> e requer pelo menos <Effects>5 stacks<Effects> de <SkillName>'Bone Spikes'<SkillName> para ser usada.",
      "energy": [
        "Tai",
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Kimimaro impales his opponents, dealing 50 piercing damage to one enemy and 15 piercing damage to all other enemies. This skill cannot be countered and requires at least 5 stacks of 'Bone Spikes' to be used. Chakra cost: 1 Tai, 1 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kimimaro empala seus oponentes, causando 50 de dano perfurante a um inimigo e 15 de dano perfurante a todos os outros inimigos. Essa habilidade não pode ser counterada e requer pelo menos 5 stacks de 'Bone Spikes' para ser usada. Custo de chakra: 1 taijutsu, 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shikotsumyaku Guard",
      "file": "edo_tensei_kimimaro_(s)_skill_4_(shikotsumyaku_guard).png",
      "description": "Kimimaro reinforces his body with his Shikotsumyaku, gaining 20 permanent destructible defense. For the next 2 turns, whenever an enemy uses a new non-mental skill on Kimimaro, he will gain 1 stack of 'Bone Spikes'.",
      "descriptionBR": "Kimimaro reforça seu corpo com seu Shikotsumyaku, ganhando 20 de defesa destrutível permanentemente. Pelos próximos 2 turnos, sempre que um inimigo usar uma nova habilidade não-mental em Kimimaro, ele irá ganhar 1 stack de 'Bone Spikes'.",
      "descriptionRaw": "Kimimaro reinforces his body with his Shikotsumyaku, <Defense>gaining 20 permanent destructible defense<Defense>. For the next 2 turns, whenever an enemy uses a <Classes>new non-mental skill<Classes> on Kimimaro, he will <Effects>gain 1 stack<Effects> of <SkillName>'Bone Spikes'<SkillName>.",
      "descriptionBRRaw": "Kimimaro reforça seu corpo com seu Shikotsumyaku, <Defense>ganhando 20 de defesa destrutível permanentemente<Defense>. Pelos próximos 2 turnos, sempre que um inimigo usar uma <Classes>nova habilidade não-mental<Classes> em Kimimaro, ele irá <Effects>ganhar 1 stack<Effects> de <SkillName>'Bone Spikes'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Kimimaro reinforces his body with his Shikotsumyaku, gaining 20 permanent destructible defense. For the next 2 turns, whenever an enemy uses a new non-mental skill on Kimimaro, he will gain 1 stack of 'Bone Spikes'. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kimimaro reforça seu corpo com seu Shikotsumyaku, ganhando 20 de defesa destrutível permanentemente. Pelos próximos 2 turnos, sempre que um inimigo usar uma nova habilidade não-mental em Kimimaro, ele irá ganhar 1 stack de 'Bone Spikes'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Bone Spikes",
      "file": "edo_tensei_kimimaro_(s)_skill_5_(bone_spikes).png",
      "description": "Kimimaro forms sharp bone spikes around his body. Whenever an enemy uses a new non-mental skill on him, they will take 3 piercing damage*. This skill stacks and cannot be removed.",
      "descriptionBR": "Kimimaro forma espinhos ósseos afiados ao redor de seu corpo. Sempre que um inimigo usar uma nova habilidade não-mental nele, irá receber 3 de dano perfurante*. Essa habilidade acumula e não pode ser removida.",
      "descriptionRaw": "Kimimaro forms sharp bone spikes around his body. Whenever an enemy uses a <Classes>new non-mental skill<Classes> on him, they will <Damage>take 3 piercing damage<Damage>*. This skill stacks and <Invisible>cannot be removed<Invisible>.",
      "descriptionBRRaw": "Kimimaro forma espinhos ósseos afiados ao redor de seu corpo. Sempre que um inimigo usar uma <Classes>nova habilidade não-mental<Classes> nele, irá <Damage>receber 3 de dano perfurante<Damage>*. Essa habilidade acumula e <Invisible>não pode ser removida<Invisible>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Melee*"
      ],
      "cooldown": 0,
      "ruleDescription": "Kimimaro forms sharp bone spikes around his body. Whenever an enemy uses a new non-mental skill on him, they will take 3 piercing damage*. This skill stacks and cannot be removed. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Melee*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kimimaro forma espinhos ósseos afiados ao redor de seu corpo. Sempre que um inimigo usar uma nova habilidade não-mental nele, irá receber 3 de dano perfurante*. Essa habilidade acumula e não pode ser removida. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Melee*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

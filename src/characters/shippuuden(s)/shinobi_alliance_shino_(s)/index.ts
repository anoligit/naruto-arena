// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Shino (S)",
  "description": "Shino evolves, enhancing his intellect and his Aburame clan abilities. Shino remains calm and, at the same time, cold. His parasites can now destroy any layer, enemy, or defense, and he can also use them as a defense at any moment.",
  "descriptionBR": "Shino evolui, aprimorando seu intelecto e suas habilidades do clã Aburame. Shino permanece calmo e, ao mesmo tempo, frio. Seus parasitas agora podem destruir qualquer camada, inimigo ou defesa, e ele também pode usá-los como defesa a qualquer momento.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_shino_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Insect Assault",
      "file": "shinobi_alliance_shino_(s)_skill_1_(insect_assault).png",
      "description": "Shino deals 10 affliction damage to one enemy for 3 turns. During 'Bug Barrier', this skill can be used on Shino, or an ally, to heal 10 health for 3 turns. This skill cannot be used on an enemy already affected by it.",
      "descriptionBR": "Shino causa 10 de dano affliction a um inimigo por 3 turnos. Durante 'Bug Barrier', essa habilidade pode ser usada em Shino, ou um aliado, para curar 10 de vida por 3 turnos. Essa habilidade não pode ser usada em um inimigo já afetado por ela.",
      "descriptionRaw": "Shino deals <Damage>10 affliction damage<Damage> to one enemy for 3 turns. During <SkillName>'Bug Barrier'<SkillName>, this skill can be used on Shino, or an ally, to <Effects>heal 10 health for 3 turns. <Effects>This skill cannot be used on an enemy already affected by it.",
      "descriptionBRRaw": "Shino causa <Damage>10 de dano affliction<Damage> a um inimigo por 3 turnos. Durante <SkillName>'Bug Barrier'<SkillName>, essa habilidade pode ser usada em Shino, ou um aliado, <Effects>para curar 10 de vida por 3 turnos<Effects>. Essa habilidade não pode ser usada em um inimigo já afetado por ela.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shino deals 10 affliction damage to one enemy for 3 turns. During 'Bug Barrier', this skill can be used on Shino, or an ally, to heal 10 health for 3 turns. This skill cannot be used on an enemy already affected by it. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino causa 10 de dano affliction a um inimigo por 3 turnos. Durante 'Bug Barrier', essa habilidade pode ser usada em Shino, ou um aliado, para curar 10 de vida por 3 turnos. Essa habilidade não pode ser usada em um inimigo já afetado por ela. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Insect Coffin",
      "file": "shinobi_alliance_shino_(s)_skill_2_(insect_coffin).png",
      "description": "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable and if Shino or an ally uses a damaging skill, or new action, on that enemy, they will heal 15 health. This skill cannot be used on an enemy already affected by it.",
      "descriptionBR": "Shino cerca um inimigo com insetos, causando 15 de dano affliction por 3 turnos. Durante esse tempo, esse inimigo não poderá reduzir dano ou ficar invulnerável e, se Shino ou um aliado usar uma habilidade danosa, ou nova ação, nesse inimigo, ele se curará em 15 de vida. Essa habilidade não pode ser usada em um inimigo já afetado por ela.",
      "descriptionRaw": "Shino surrounds one enemy with insects, dealing <Damage>15 affliction damage<Damage> to them for 3 turns. During this time, that enemy will be <Effects>unable to reduce damage<Effects> or <Effects>become invulnerable<Effects> and if Shino or an ally uses a damaging skill, or new action, on that enemy, they will <Defense>heal 15 health<Defense>. This skill cannot be used on an enemy already affected by it.",
      "descriptionBRRaw": "Shino cerca um inimigo com insetos, causando <Damage>15 de dano affliction<Damage> por 3 turnos. Durante esse tempo, esse inimigo <Effects>não poderá reduzir dano<Effects> ou <Effects>ficar invulnerável<Effects> e, se Shino ou um aliado usar uma habilidade danosa, ou nova ação, nesse inimigo, ele se <Defense>curará em 15 de vida<Defense>. Essa habilidade não pode ser usada em um inimigo já afetado por ela.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable and if Shino or an ally uses a damaging skill, or new action, on that enemy, they will heal 15 health. This skill cannot be used on an enemy already affected by it. Chakra cost: 1 Blood, 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino cerca um inimigo com insetos, causando 15 de dano affliction por 3 turnos. Durante esse tempo, esse inimigo não poderá reduzir dano ou ficar invulnerável e, se Shino ou um aliado usar uma habilidade danosa, ou nova ação, nesse inimigo, ele se curará em 15 de vida. Essa habilidade não pode ser usada em um inimigo já afetado por ela. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Bug Barrier",
      "file": "shinobi_alliance_shino_(s)_skill_3_(bug_barrier).png",
      "description": "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 destructible defense. Afterwards, they will heal 5 health permanently in the following turns. This skill ends if Shino dies, and it will be re-applied if used while active.",
      "descriptionBR": "Shino cria uma barreira massiva de insetos para defender sua equipe. Por 1 turno, Shino e seus aliados se curarão em 15 de vida e ganharão 15 pontos de defesa destrutível. Após isso, eles irão curar 5 de vida permanentemente nos próximos turnos. Essa habilidade termina se Shino morrer, e será re-aplicada se usada enquanto ativa.",
      "descriptionRaw": "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 destructible defense. Afterwards, they will heal 5 health permanently in the following turns. This skill ends if Shino dies, and it will be re-applied if used while active.",
      "descriptionBRRaw": "Shino cria uma barreira massiva de insetos para defender sua equipe. Por 1 turno, Shino e seus aliados se curarão em 15 de vida e ganharão 15 pontos de defesa destrutível. Após isso, eles irão curar 5 de vida permanentemente nos próximos turnos. Essa habilidade termina se Shino morrer, e será re-aplicada se usada enquanto ativa.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 destructible defense. Afterwards, they will heal 5 health permanently in the following turns. This skill ends if Shino dies, and it will be re-applied if used while active. Chakra cost: 2 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shino cria uma barreira massiva de insetos para defender sua equipe. Por 1 turno, Shino e seus aliados se curarão em 15 de vida e ganharão 15 pontos de defesa destrutível. Após isso, eles irão curar 5 de vida permanentemente nos próximos turnos. Essa habilidade termina se Shino morrer, e será re-aplicada se usada enquanto ativa. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hidden Insects",
      "file": "shinobi_alliance_shino_(s)_skill_4_(hidden_insects).png",
      "description": "This skill makes Shinobi Alliance Shino (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Shino (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Shino (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Shino (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

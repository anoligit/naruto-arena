// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Young Nagato (S)",
  "description": "The Rain Orphans were three children who lost their parents due to the Hidden Rain Village's involvement in the Second Shinobi World War. Nagato is a quiet boy who is not only afraid of the world, but also afraid of himself.",
  "descriptionBR": "Os Órfãos da Chuva eram três crianças que perderam seus pais devido ao envolvimento da Vila Oculta da Chuva na Segunda Guerra Mundial Shinobi. Nagato é um garoto quieto que não teme apenas o mundo, mas também a si mesmo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "young_nagato_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Rinnegan Dominion",
      "file": "young_nagato_(s)_skill_1_(rinnegan_dominion).png",
      "description": "Nagato awakens his Rinnegan, gaining 20 points of destructible defense. For 1 turn, 'Wind Style: Air Bullets' and 'Amateur Shinra Tensei' will be improved. Each time this skill is used, its duration and cooldown will increase by 1.",
      "descriptionBR": "Nagato desperta seu Rinnegan, ganhando 20 pontos de defesa destrutível. Por 1 turno, 'Wind Style: Air Bullets' e 'Amateur Shinra Tensei' serão aprimoradas. Cada vez que essa habilidade for usada, sua duração e cooldown irão aumentar em 1.",
      "descriptionRaw": "Nagato awakens his Rinnegan, <Defense>gaining 20 points of destructible defense<Defense>. For 1 turn, <SkillName>'Wind Style: Air Bullets'<SkillName> and <SkillName>'Amateur Shinra Tensei'<SkillName> will be <Improvements>improved<Improvements>. Each time this skill is used, its <Improvements>duration and cooldown will increase by 1<Improvements>.",
      "descriptionBRRaw": "Nagato desperta seu Rinnegan, <Defense>ganhando 20 pontos de defesa destrutível<Defense>. Por 1 turno, <SkillName>'Wind Style: Air Bullets'<SkillName> e <SkillName>'Amateur Shinra Tensei'<SkillName> serão <Improvements>aprimoradas<Improvements>. Cada vez que essa habilidade for usada, sua <Improvements>duração e cooldown irão aumentar em 1<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Nagato awakens his Rinnegan, gaining 20 points of destructible defense. For 1 turn, 'Wind Style: Air Bullets' and 'Amateur Shinra Tensei' will be improved. Each time this skill is used, its duration and cooldown will increase by 1. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato desperta seu Rinnegan, ganhando 20 pontos de defesa destrutível. Por 1 turno, 'Wind Style: Air Bullets' e 'Amateur Shinra Tensei' serão aprimoradas. Cada vez que essa habilidade for usada, sua duração e cooldown irão aumentar em 1. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Wind Style: Air Bullets",
      "file": "young_nagato_(s)_skill_2_(wind_style_air_bullets).png",
      "description": "Nagato shoots multiple bullets of air at one enemy, dealing 25 damage and stunning their skills for 1 turn. During 'Rinnegan Dominion', this skill will deal 100% more damage.",
      "descriptionBR": "Nagato dispara múltiplas balas de ar contra um inimigo, causando 25 de dano e atordoando suas habilidades por 1 turno. Durante 'Rinnegan Dominion', essa habilidade irá causar 100% a mais de dano.",
      "descriptionRaw": "Nagato shoots multiple bullets of air at one enemy, <Damage>dealing 25 damage<Damage> and <Effects>stunning their skills<Effects> for 1 turn. During <SkillName>'Rinnegan Dominion'<SkillName>, this skill will <Improvements>deal 100% more damage<Improvements>.",
      "descriptionBRRaw": "Nagato dispara múltiplas balas de ar contra um inimigo, <Damage>causando 25 de dano<Damage> e <Effects>atordoando suas habilidades<Effects> por 1 turno. Durante <SkillName>'Rinnegan Dominion'<SkillName>, essa habilidade irá <Improvements>causar 100% a mais de dano<Improvements>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": null,
      "ruleDescription": "Nagato shoots multiple bullets of air at one enemy, dealing 25 damage and stunning their skills for 1 turn. During 'Rinnegan Dominion', this skill will deal 100% more damage. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: None. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato dispara múltiplas balas de ar contra um inimigo, causando 25 de dano e atordoando suas habilidades por 1 turno. Durante 'Rinnegan Dominion', essa habilidade irá causar 100% a mais de dano. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: None. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Amateur Shinra Tensei",
      "file": "young_nagato_(s)_skill_3_(amateur_shinra_tensei).png",
      "description": "By activating Shinra Tensei, Nagato protects one ally. For 1 turn, that ally becomes invulnerable. Afterwards, they will heal 10 health and all harmful skills will be removed from them. During 'Rinnegan Dominion', this skill will cost 1 random chakra instead.",
      "descriptionBR": "Ao ativar Shinra Tensei, Nagato protege um aliado. Por 1 turno, esse aliado se torna invulnerável. Depois disso, ele irá recuperar 10 de vida e todas as habilidades ofensivas serão removidas dele. Durante 'Rinnegan Dominion', essa habilidade irá custar 1 chakra aleatório em vez disso.",
      "descriptionRaw": "By activating Shinra Tensei, Nagato protects one ally. For 1 turn, that <Defense>ally becomes invulnerable<Defense>. Afterwards, they will <Effects>heal 10 health<Effects> and <Effects>all harmful skills will be removed<Effects> from them. During <SkillName>'Rinnegan Dominion'<SkillName>, this skill will <Improvements>cost 1 random chakra<Improvements> instead.",
      "descriptionBRRaw": "Ao ativar Shinra Tensei, Nagato protege um aliado. Por 1 turno, esse <Defense>aliado se torna invulnerável<Defense>. Depois disso, ele irá <Effects>recuperar 10 de vida<Effects> e <Effects>todas as habilidades ofensivas serão removidas<Effects> dele. Durante <SkillName>'Rinnegan Dominion'<SkillName>, essa habilidade irá <Improvements>custar 1 chakra aleatório<Improvements> em vez disso.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "By activating Shinra Tensei, Nagato protects one ally. For 1 turn, that ally becomes invulnerable. Afterwards, they will heal 10 health and all harmful skills will be removed from them. During 'Rinnegan Dominion', this skill will cost 1 random chakra instead. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao ativar Shinra Tensei, Nagato protege um aliado. Por 1 turno, esse aliado se torna invulnerável. Depois disso, ele irá recuperar 10 de vida e todas as habilidades ofensivas serão removidas dele. Durante 'Rinnegan Dominion', essa habilidade irá custar 1 chakra aleatório em vez disso. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Majestic Frog Disguise",
      "file": "young_nagato_(s)_skill_4_(majestic_frog_disguise).png",
      "description": "This skill makes Young Nagato (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Young Nagato (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Young Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Young Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Young Nagato (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Young Nagato (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

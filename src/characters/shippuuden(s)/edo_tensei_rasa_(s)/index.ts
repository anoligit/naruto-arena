// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Rasa (S)",
  "description": "Edo Tensei Rasa (S), the former Fourth Kazekage, has been summoned to participate in the war. Even after returning from death, he will prioritize his village above all else.",
  "descriptionBR": "Edo Tensei Rasa (S), o antigo Quarto Kazekage, foi invocado para participar da guerra. Mesmo após retornar da morte, ele priorizará sua vila acima de tudo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_rasa_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Magnet Release",
      "file": "edo_tensei_rasa_(s)_skill_1_(magnet_release).png",
      "description": "Rasa manipulates his gold dust, fortifying himself. For 4 turns, he will gain 5 points of damage reduction and ignore enemy affliction damage. During this time, 'Gold Dust Waterfall' will deal 10 additional damage.",
      "descriptionBR": "Rasa manipula seu pó de ouro, fortalecendo a si mesmo. Por 4 turnos, ele ganhará 5 pontos de redução de dano e ignorará dano affliction inimigo. Durante esse tempo, 'Gold Dust Waterfall' irá causar 10 de dano adicional.",
      "descriptionRaw": "Rasa manipulates his gold dust, fortifying himself. For 4 turns, he will <Defense>gain 5 points of damage reduction<Defense> and <Defense>ignore enemy affliction damage<Defense>. During this time, <SkillName>'Gold Dust Waterfall'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
      "descriptionBRRaw": "Rasa manipula seu pó de ouro, fortalecendo a si mesmo. Por 4 turnos, ele <Defense>ganhará 5 pontos de redução de dano<Defense> e <Defense>ignorará dano affliction inimigo<Defense>. Durante esse tempo, <SkillName>'Gold Dust Waterfall'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Rasa manipulates his gold dust, fortifying himself. For 4 turns, he will gain 5 points of damage reduction and ignore enemy affliction damage. During this time, 'Gold Dust Waterfall' will deal 10 additional damage. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Rasa manipula seu pó de ouro, fortalecendo a si mesmo. Por 4 turnos, ele ganhará 5 pontos de redução de dano e ignorará dano affliction inimigo. Durante esse tempo, 'Gold Dust Waterfall' irá causar 10 de dano adicional. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Gold Dust Waterfall",
      "file": "edo_tensei_rasa_(s)_skill_2_(gold_dust_waterfall).png",
      "description": "Rasa engulfs one enemy in a massive waterfall of gold dust, dealing 40 piercing damage to them. For 1 turn, that enemy will ignore helpful effects.",
      "descriptionBR": "Rasa envolve um inimigo em uma enorme cachoeira de pó de ouro, causando 40 de dano perfurante a ele. Por 1 turno, esse inimigo irá ignorar efeitos defensivos.",
      "descriptionRaw": "Rasa engulfs one enemy in a massive waterfall of gold dust, <Damage>dealing 40 piercing damage<Damage> to them. For 1 turn, that enemy will <Defense>ignore helpful effects<Defense>.",
      "descriptionBRRaw": "Rasa envolve um inimigo em uma enorme cachoeira de pó de ouro, <Damage>causando 40 de dano perfurante<Damage> a ele. Por 1 turno, esse inimigo irá <Defense>ignorar efeitos defensivos<Defense>.",
      "energy": [
        "Blood",
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Rasa engulfs one enemy in a massive waterfall of gold dust, dealing 40 piercing damage to them. For 1 turn, that enemy will ignore helpful effects. Chakra cost: 1 Blood, 1 Nin. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Rasa envolve um inimigo em uma enorme cachoeira de pó de ouro, causando 40 de dano perfurante a ele. Por 1 turno, esse inimigo irá ignorar efeitos defensivos. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Gold Dust Shield",
      "file": "edo_tensei_rasa_(s)_skill_3_(gold_dust_shield).png",
      "description": "Rasa raises a massive shield of gold dust to protect his team. For 2 turns, they will gain 10 points of damage reduction and be immune to affliction damage. If targetable, all enemies will take 10 damage for 2 turns.",
      "descriptionBR": "Rasa ergue um enorme escudo de pó de ouro para proteger sua equipe. Por 2 turnos, eles ganharão 10 pontos de redução de dano e ficarão imunes a dano affliction. Se Rasa puder ser alvo, todos os inimigos irão receber 10 de dano por 2 turnos.",
      "descriptionRaw": "Rasa raises a massive shield of gold dust to protect his team. For 2 turns, they will <Defense>gain 10 points of damage reduction<Defense> and <Defense>be immune to affliction damage<Defense>. If targetable, all enemies will <Damage>take 10 damage<Damage> for 2 turns.",
      "descriptionBRRaw": "Rasa ergue um enorme escudo de pó de ouro para proteger sua equipe. Por 2 turnos, eles <Defense>ganharão 10 pontos de redução de dano<Defense> e ficarão <Defense>imunes a dano affliction<Defense>. Se Rasa puder ser alvo, todos os inimigos irão <Damage>receber 10 de dano<Damage> por 2 turnos.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Rasa raises a massive shield of gold dust to protect his team. For 2 turns, they will gain 10 points of damage reduction and be immune to affliction damage. If targetable, all enemies will take 10 damage for 2 turns. Chakra cost: 1 Nin, 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Rasa ergue um enorme escudo de pó de ouro para proteger sua equipe. Por 2 turnos, eles ganharão 10 pontos de redução de dano e ficarão imunes a dano affliction. Se Rasa puder ser alvo, todos os inimigos irão receber 10 de dano por 2 turnos. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Gold Dust Manipulation",
      "file": "edo_tensei_rasa_(s)_skill_4_(gold_dust_manipulation).png",
      "description": "This skill makes Edo Tensei Rasa (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Rasa (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Rasa (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Rasa (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Rasa (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Rasa (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

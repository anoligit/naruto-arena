// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Young Konan (S)",
  "description": "The Rain Orphans were three children who lost their parents due to the Hidden Rain Village's involvement in the Second Shinobi World War. Konan is a sweet girl who always cares more about her teammates than herself.",
  "descriptionBR": "Os Órfãos da Chuva eram três crianças que perderam seus pais devido ao envolvimento da Vila Oculta da Chuva na Segunda Guerra Mundial Shinobi. Konan é uma garota gentil que sempre se preocupa mais com seus companheiros de equipe do que consigo mesma.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "young_konan_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Winding Paper Shuriken",
      "file": "young_konan_(s)_skill_1_(winding_paper_shuriken).png",
      "description": "Konan throws paper shuriken with lethal speed, dealing 20 damage to one enemy, and they will ignore all helpful effects for 1 turn.",
      "descriptionBR": "Konan lança shurikens de papel em velocidade letal, causando 20 de dano a um inimigo, que irá ignorar todos os efeitos benéficos por 1 turno. ",
      "descriptionRaw": "Konan throws paper shuriken with lethal speed, <Damage>dealing 20 damage<Damage> to one enemy, and they will <Effects>ignore all helpful effects<Effects> for 1 turn.",
      "descriptionBRRaw": "Konan lança shurikens de papel em velocidade letal, <Damage>causando 20 de dano<Damage> a um inimigo, que irá <Effects>ignorar todos os efeitos benéficos<Effects> por 1 turno. ",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": null,
      "ruleDescription": "Konan throws paper shuriken with lethal speed, dealing 20 damage to one enemy, and they will ignore all helpful effects for 1 turn. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: None. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan lança shurikens de papel em velocidade letal, causando 20 de dano a um inimigo, que irá ignorar todos os efeitos benéficos por 1 turno.  Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: None. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Origami Rose",
      "file": "young_konan_(s)_skill_2_(origami_rose).png",
      "description": "Konan creates an origami rose, dealing 40 damage to one enemy and stunning their skills for 1 turn. During 'Paper Origami', this skill will cost 1 genjutsu and 1 random chakra instead.",
      "descriptionBR": "Konan cria uma rosa de origami, causando 40 de dano a um inimigo e atordoando suas habilidades por 1 turno. Durante 'Paper Origami', essa habilidade irá custar 1 genjutsu e 1 chakra aleatório em vez disso.",
      "descriptionRaw": "Konan creates an origami rose, <Damage>dealing 40 damage<Damage> to one enemy and <Effects>stunning their skills<Effects> for 1 turn. During <SkillName>'Paper Origami'<SkillName>, this skill will <Improvements>cost 1 genjutsu and 1 random chakra<Improvements> instead.",
      "descriptionBRRaw": "Konan cria uma rosa de origami, <Damage>causando 40 de dano<Damage> a um inimigo e <Effects>atordoando suas habilidades<Effects> por 1 turno. Durante <SkillName>'Paper Origami'<SkillName>, essa habilidade irá <Improvements>custar 1 genjutsu e 1 chakra aleatório<Improvements> em vez disso.",
      "energy": [
        "Gen",
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Konan creates an origami rose, dealing 40 damage to one enemy and stunning their skills for 1 turn. During 'Paper Origami', this skill will cost 1 genjutsu and 1 random chakra instead. Chakra cost: 2 Gen. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan cria uma rosa de origami, causando 40 de dano a um inimigo e atordoando suas habilidades por 1 turno. Durante 'Paper Origami', essa habilidade irá custar 1 genjutsu e 1 chakra aleatório em vez disso. Custo de chakra: 2 genjutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Paper Origami",
      "file": "young_konan_(s)_skill_3_(paper_origami).png",
      "description": "Konan charges her papers at one enemy, dealing 10 damage to them for 3 turns. The following 3 turns, Konan will gain 5 points of damage reduction and ignore stuns effects. During this time, 'Origami Rose' will be improved.",
      "descriptionBR": "Konan lança seus papéis contra um inimigo, causando 10 de dano a ele por 3 turnos. Nos próximos 3 turnos, Konan irá ganhar 5 pontos de redução de dano e ignorar atordoamento. Durante esse tempo, 'Origami Rose' será aprimorada.",
      "descriptionRaw": "Konan charges her papers at one enemy, <Damage>dealing 10 damage<Damage> to them for 3 turns. The following 3 turns, Konan will <Defense>gain 5 points of damage reduction<Defense> and <Effects>ignore stuns effects<Effects>. During this time, <SkillName>'Origami Rose'<SkillName> will be <Improvements>improved<Improvements>.",
      "descriptionBRRaw": "Konan lança seus papéis contra um inimigo, <Damage>causando 10 de dano<Damage> a ele por 3 turnos. Nos próximos 3 turnos, Konan irá <Defense>ganhar 5 pontos de redução de dano<Defense> e <Effects>ignorar atordoamento<Effects>. Durante esse tempo, <SkillName>'Origami Rose'<SkillName> será <Improvements>aprimorada<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Konan charges her papers at one enemy, dealing 10 damage to them for 3 turns. The following 3 turns, Konan will gain 5 points of damage reduction and ignore stuns effects. During this time, 'Origami Rose' will be improved. Chakra cost: 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan lança seus papéis contra um inimigo, causando 10 de dano a ele por 3 turnos. Nos próximos 3 turnos, Konan irá ganhar 5 pontos de redução de dano e ignorar atordoamento. Durante esse tempo, 'Origami Rose' será aprimorada. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Marvelous Frog Disguise",
      "file": "young_konan_(s)_skill_4_(marvelous_frog_disguise).png",
      "description": "This skill makes this character invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna este personagem invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes this character <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna este personagem <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes this character invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna este personagem invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

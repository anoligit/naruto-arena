// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hanzo of the Salamander (S)",
  "description": "The legendary long-time leader of the Hidden Rain Village, Hanzo is a complicated man: unscrupulous and power-hungry, but at his core still seemingly a genuine believer in the ideal of universal peace. Having had a venom sac implanted in him as a child, Hanzo fights using poison and is deadly and ruthless in battle.",
  "descriptionBR": "Lendário líder da Vila Oculta da Chuva por muitos anos, Hanzo é um homem complicado: inescrupuloso e sedento por poder, mas que, no fundo, ainda parece acreditar genuinamente no ideal de paz universal. Após ter uma bolsa de veneno implantada em seu corpo quando criança, Hanzo luta usando veneno e é mortal e implacável em batalha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hanzo_of_the_salamander_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Dance of the Sickle",
      "file": "hanzo_of_the_salamander_(s)_skill_1_(dance_of_the_sickle).png",
      "description": "For 2 turns, Hanzo deals 15 affliction damage to one enemy. During this time, they are linked to Hanzo, and 50% of all non-affliction damage he takes is transferred to the target as affliction damage*.",
      "descriptionBR": "Por 2 turnos, Hanzo causa 15 de dano affliction a um inimigo. Durante esse tempo, ele fica ligado a Hanzo, e 50% de todo o dano não-affliction que Hanzo receber será transferido ao alvo como dano affliction*.",
      "descriptionRaw": "For 2 turns, Hanzo <Damage>deals 15 affliction damage<Damage> to one enemy. During this time, they are <Effects>linked to Hanzo<Effects>, and <Damage><Invisible>50% of all non-affliction damage he takes<Invisible><Damage> is <Effects>transferred<Effects> to the target as <Damage>affliction damage<Damage>*.",
      "descriptionBRRaw": "Por 2 turnos, Hanzo <Damage>causa 15 de dano affliction<Damage> a um inimigo. Durante esse tempo, ele fica <Effects>ligado a Hanzo<Effects>, e <Invisible>50% de todo o dano não-affliction que Hanzo receber<Invisible> será <Effects>transferido<Effects> ao alvo como <Damage>dano affliction<Damage>*.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Instant*",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "For 2 turns, Hanzo deals 15 affliction damage to one enemy. During this time, they are linked to Hanzo, and 50% of all non-affliction damage he takes is transferred to the target as affliction damage*. Chakra cost: 1 Gen. Catalog classes: Affliction, Action, Instant*, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, Hanzo causa 15 de dano affliction a um inimigo. Durante esse tempo, ele fica ligado a Hanzo, e 50% de todo o dano não-affliction que Hanzo receber será transferido ao alvo como dano affliction*. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Action, Instant*, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Antidote",
      "file": "hanzo_of_the_salamander_(s)_skill_2_(antidote).png",
      "description": "Hanzo may use the antidote on himself or an ally, healing 15 health and making the target ignore affliction damage for 1 turn. During 'Summoning: Ibuse', this skill will also heal Ibuse for 15 health.",
      "descriptionBR": "Hanzo pode usar o antídoto em si mesmo ou em um aliado, recuperando 15 de vida e fazendo o alvo ignorar dano affliction por 1 turno. Durante 'Summoning: Ibuse', essa habilidade também irá recuperar 15 de vida de Ibuse.",
      "descriptionRaw": "Hanzo may use the antidote on himself or an ally, <Defense>healing 15 health<Defense> and making the target <Defense>ignore affliction damage<Defense> for 1 turn. During <SkillName>'Summoning: Ibuse'<SkillName>, this skill will also <Improvements>heal Ibuse for 15 health<Improvements>.",
      "descriptionBRRaw": "Hanzo pode usar o antídoto em si mesmo ou em um aliado, <Defense>recuperando 15 de vida<Defense> e fazendo o alvo <Defense>ignorar dano affliction<Defense> por 1 turno. Durante <SkillName>'Summoning: Ibuse'<SkillName>, essa habilidade também irá <Improvements>recuperar 15 de vida de Ibuse<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Hanzo may use the antidote on himself or an ally, healing 15 health and making the target ignore affliction damage for 1 turn. During 'Summoning: Ibuse', this skill will also heal Ibuse for 15 health. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hanzo pode usar o antídoto em si mesmo ou em um aliado, recuperando 15 de vida e fazendo o alvo ignorar dano affliction por 1 turno. Durante 'Summoning: Ibuse', essa habilidade também irá recuperar 15 de vida de Ibuse. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Ibuse",
      "file": "hanzo_of_the_salamander_(s)_skill_3_(summoning_ibuse).png",
      "description": "Hanzo summons Ibuse with 30 health. 50% of all non-affliction damage dealt to Hanzo is split with Ibuse. While Ibuse is alive, all enemies will be dealt 5 affliction damage every turn. When this skill ends or Ibuse is killed, Hanzo will activate 'Explosive Tag Wrap' on all enemies.",
      "descriptionBR": "Hanzo invoca Ibuse com 30 de vida. 50% de todo o dano não-affliction causado a Hanzo será dividido com Ibuse. Enquanto Ibuse estiver vivo, todos os inimigos irão receber 5 de dano affliction a cada turno. Quando essa habilidade terminar ou Ibuse for morto, Hanzo irá ativar 'Explosive Tag Wrap' em todos os inimigos.",
      "descriptionRaw": "Hanzo summons <SkillText>Ibuse<SkillText> with <Effects>30 health<Effects>. <Defense>50% of all non-affliction damage dealt <Defense>to Hanzo is <Effects>split<Effects> with Ibuse. While Ibuse is <Invisible>alive<Invisible>, all enemies will be <Damage>dealt 5 affliction damage<Damage> every turn. When this skill <Effects>ends<Effects> or <Invisible>Ibuse is killed<Invisible>, Hanzo will activate <SkillName>'Explosive Tag Wrap'<SkillName> on all enemies.",
      "descriptionBRRaw": "Hanzo invoca <SkillText>Ibuse<SkillText> com <Effects>30 de vida<Effects>. <Defense>50% de todo o dano não-affliction causado<Defense> a Hanzo será <Effects>dividido<Effects> com Ibuse. Enquanto Ibuse estiver <Invisible>vivo<Invisible>, todos os inimigos irão <Damage>receber 5 de dano affliction<Damage> a cada turno. Quando essa habilidade <Effects>terminar<Effects> ou <Invisible>Ibuse for morto<Invisible>, Hanzo irá ativar <SkillName>'Explosive Tag Wrap'<SkillName> em todos os inimigos.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 5,
      "ruleDescription": "Hanzo summons Ibuse with 30 health. 50% of all non-affliction damage dealt to Hanzo is split with Ibuse. While Ibuse is alive, all enemies will be dealt 5 affliction damage every turn. When this skill ends or Ibuse is killed, Hanzo will activate 'Explosive Tag Wrap' on all enemies. Chakra cost: 3 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hanzo invoca Ibuse com 30 de vida. 50% de todo o dano não-affliction causado a Hanzo será dividido com Ibuse. Enquanto Ibuse estiver vivo, todos os inimigos irão receber 5 de dano affliction a cada turno. Quando essa habilidade terminar ou Ibuse for morto, Hanzo irá ativar 'Explosive Tag Wrap' em todos os inimigos. Custo de chakra: 3 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Hanzo Body Flicker Jutsu",
      "file": "hanzo_of_the_salamander_(s)_skill_4_(hanzo_body_flicker_jutsu).png",
      "description": "This skill makes Hanzo of the Salamander (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Hanzo of the Salamander (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hanzo of the Salamander (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Hanzo of the Salamander (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hanzo of the Salamander (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Hanzo of the Salamander (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Explosive Tag Wrap",
      "file": "hanzo_of_the_salamander_(s)_skill_5_(explosive_tag_wrap).png",
      "description": "This skill is activated when Ibuse is killed. All enemies will take 15 affliction damage, and 5 additional affliction damage for every 2 turns Ibuse stayed alive.",
      "descriptionBR": "Essa habilidade é ativada quando Ibuse é morto. Todos os inimigos irão receber 15 de dano affliction e 5 de dano affliction adicional para cada 2 turnos em que Ibuse permaneceu vivo.",
      "descriptionRaw": "This skill is activated when Ibuse is killed. All enemies will <Damage>take 15 affliction damage<Damage>, and <Improvements>5 additional affliction damage for every 2 turns Ibuse stayed alive<Improvements>.",
      "descriptionBRRaw": "Essa habilidade é ativada quando Ibuse é morto. Todos os inimigos irão <Damage>receber 15 de dano affliction<Damage> e <Improvements>5 de dano affliction adicional para cada 2 turnos em que Ibuse permaneceu vivo<Improvements>.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": null,
      "ruleDescription": "This skill is activated when Ibuse is killed. All enemies will take 15 affliction damage, and 5 additional affliction damage for every 2 turns Ibuse stayed alive. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: None. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade é ativada quando Ibuse é morto. Todos os inimigos irão receber 15 de dano affliction e 5 de dano affliction adicional para cada 2 turnos em que Ibuse permaneceu vivo. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: None. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

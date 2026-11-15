// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kitsuchi (S)",
  "description": "A jounin of the Hidden Rock Village, Kitsuchi is the father of Kurotsuchi and the Commander of the Second Division of the Allied Shinobi Forces. A calm and disciplined but proud man, Kitsuchi fights aggressively on the front lines, leaving no stone unturned with his various Earth Release techniques.",
  "descriptionBR": "Um jounin da Vila Oculta da Pedra, Kitsuchi é o pai de Kurotsuchi e o comandante da Segunda Divisão das Forças Aliadas Shinobi. Calmo, disciplinado e orgulhoso, Kitsuchi luta agressivamente na linha de frente, utilizando suas diversas técnicas de Liberação de Terra sem deixar pedra sobre pedra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kitsuchi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Granite Fist",
      "file": "kitsuchi_(s)_skill_1_(granite_fist).png",
      "description": "Kitsuchi targets one enemy, dealing 20 damage to them. For 1 turn, the non-damage effects of any new skill this enemy uses will be nullified.",
      "descriptionBR": "Kitsuchi escolhe um inimigo, causando 20 de dano a ele. Por 1 turno, os efeitos que não causam dano de qualquer nova habilidade utilizada por esse inimigo serão anulados.",
      "descriptionRaw": "Kitsuchi targets one enemy, <Damage>dealing 20 damage<Damage> to them. For 1 turn, the <Effects>non-damage effects<Effects> of any new skill this enemy uses will be <Invisible>nullified<Invisible>.",
      "descriptionBRRaw": "Kitsuchi escolhe um inimigo, causando 20 de dano a ele. Por 1 turno, os <Effects>efeitos que não causam dano<Effects> de qualquer nova habilidade utilizada por esse inimigo serão <Invisible>anulados<Invisible>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kitsuchi targets one enemy, dealing 20 damage to them. For 1 turn, the non-damage effects of any new skill this enemy uses will be nullified. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kitsuchi escolhe um inimigo, causando 20 de dano a ele. Por 1 turno, os efeitos que não causam dano de qualquer nova habilidade utilizada por esse inimigo serão anulados. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Earth Rising Excavation Jutsu",
      "file": "kitsuchi_(s)_skill_2_(earth_rising_excavation_jutsu).png",
      "description": "Kitsuchi deals 10 damage to all enemies. For 1 turn, Kitsuchi and his allies gain 10 points of unpierceable damage reduction and ignore stun effects.",
      "descriptionBR": "Kitsuchi causa 10 de dano a todos os inimigos. Por 1 turno, Kitsuchi e seus aliados ganham 10 pontos de redução de dano impenetrável e ignoram efeitos atordoantes.",
      "descriptionRaw": "Kitsuchi <Damage>deals 10 damage<Damage> to all enemies. For 1 turn, Kitsuchi and his allies <Defense>gain 10 points of unpierceable damage reduction<Defense> and <Defense>ignore stun effects<Defense>.",
      "descriptionBRRaw": "Kitsuchi <Damage>causa 10 de dano<Damage> a todos os inimigos. Por 1 turno, Kitsuchi e seus aliados <Defense>ganham 10 pontos de redução de dano impenetrável<Defense> e <Defense>ignoram efeitos atordoantes<Defense>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kitsuchi deals 10 damage to all enemies. For 1 turn, Kitsuchi and his allies gain 10 points of unpierceable damage reduction and ignore stun effects. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kitsuchi causa 10 de dano a todos os inimigos. Por 1 turno, Kitsuchi e seus aliados ganham 10 pontos de redução de dano impenetrável e ignoram efeitos atordoantes. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Earth Sandwich Jutsu",
      "file": "kitsuchi_(s)_skill_3_(earth_sandwich_jutsu).png",
      "description": "Kitsuchi crushes one enemy between two massive walls of earth, dealing 40 piercing damage to them. For 2 turns, that enemy's non-mental skills will be stunned. Next turn 'Earth Rising Excavation Jutsu' will cost 1 random chakra.",
      "descriptionBR": "Kitsuchi esmaga um inimigo entre duas enormes paredes de terra, causando 40 de dano perfurante a ele. Por 2 turnos, as habilidades não mentais desse inimigo serão atordoadas. Próximo turno 'Earth Rising Excavation Jutsu' irá custar 1 random chakra.",
      "descriptionRaw": "Kitsuchi crushes one enemy between two massive walls of earth, <Damage>dealing 40 piercing damage<Damage> to them. For 2 turns, that enemy's <Classes>non-mental skills<Classes> will be <Effects>stunned<Effects>. Next turn <SkillName>'Earth Rising Excavation Jutsu'<SkillName> will <Improvements>cost 1 random chakra.<Improvements>",
      "descriptionBRRaw": "Kitsuchi esmaga um inimigo entre duas enormes paredes de terra, <Damage>causando 40 de dano perfurante<Damage> a ele. Por 2 turnos, as <Classes>habilidades não mentais<Classes> desse inimigo serão <Effects>atordoadas<Effects>. Próximo turno <SkillName>'Earth Rising Excavation Jutsu'<SkillName> irá <Improvements>custar 1 random chakra<Improvements>.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Kitsuchi crushes one enemy between two massive walls of earth, dealing 40 piercing damage to them. For 2 turns, that enemy's non-mental skills will be stunned. Next turn 'Earth Rising Excavation Jutsu' will cost 1 random chakra. Chakra cost: 2 Blood. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kitsuchi esmaga um inimigo entre duas enormes paredes de terra, causando 40 de dano perfurante a ele. Por 2 turnos, as habilidades não mentais desse inimigo serão atordoadas. Próximo turno 'Earth Rising Excavation Jutsu' irá custar 1 random chakra. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Earth Shelter",
      "file": "kitsuchi_(s)_skill_4_(earth_shelter).png",
      "description": "This skill makes Kitsuchi invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Kitsuchi invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kitsuchi <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Kitsuchi <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kitsuchi invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Kitsuchi invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

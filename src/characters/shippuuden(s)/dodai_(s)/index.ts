// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Dodai (S)",
  "description": "Dodai (S) is a skilled sensor shinobi and a lava release user as well. His intelligence is his most powerful asset and he will need it to survive this war.",
  "descriptionBR": "Dodai (S) é um habilidoso shinobi sensor e também usuário da Liberação de Lava. Sua inteligência é seu recurso mais poderoso, e ele precisará dela para sobreviver a esta guerra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "dodai_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Rubber Wall",
      "file": "dodai_(s)_skill_1_(rubber_wall).jpg",
      "description": "Dodai creates a rubber wall that protects his team. For 3 turns, Dodai and his allies will gain 10 points of unpierceable damage reduction and ignore stun effects. During this time, they are immune to affliction damage.",
      "descriptionBR": "Dodai cria uma parede de borracha que protege sua equipe. Por 3 turnos, Dodai e seus aliados ganharão 10 pontos de redução de dano impenetrável e ignorarão efeitos atordoantes. Durante esse tempo, eles se tornam imunes a dano affliction.",
      "descriptionRaw": "Dodai creates a rubber wall that protects his team. For 3 turns, Dodai and his allies will gain 10 <Defense>points of unpierceable damage reduction<Defense> and <Defense>ignore stun effects<Defense>. During this time, they are <Effects>immune<Effects> to <Damage>affliction damage<Damage>.",
      "descriptionBRRaw": "Dodai cria uma parede de borracha que protege sua equipe. Por 3 turnos, Dodai e seus aliados ganharão 10 <Defense>pontos de redução de dano impenetrável<Defense> e <Defense>ignorarão efeitos atordoantes<Defense>. Durante esse tempo, eles se tornam <Effects>imunes<Effects> a <Damage>dano affliction<Damage>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "Dodai creates a rubber wall that protects his team. For 3 turns, Dodai and his allies will gain 10 points of unpierceable damage reduction and ignore stun effects. During this time, they are immune to affliction damage. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Dodai cria uma parede de borracha que protege sua equipe. Por 3 turnos, Dodai e seus aliados ganharão 10 pontos de redução de dano impenetrável e ignorarão efeitos atordoantes. Durante esse tempo, eles se tornam imunes a dano affliction. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Communication Telepathy",
      "file": "dodai_(s)_skill_2_(communication_telepathy).png",
      "description": "Dodai communicates directly with one enemy through telepathy, dealing 20 piercing damage to them. For 1 turn, that enemy's stunning skills will be stunned for 1 turn. This skill will fully stun an enemy marked by 'Rubber Ball and Rope'.",
      "descriptionBR": "Dodai se comunica diretamente com um inimigo por telepatia, causando 20 de dano perfurante a ele. Por 1 turno, esse inimigo terá as habilidades atordoantes dele atordoadas por 1 turno. Esta habilidade irá atordoar completamente um inimigo marcado por 'Rubber Ball and Rope'.",
      "descriptionRaw": "Dodai communicates directly with one enemy through telepathy, <Damage>dealing 20 piercing damage<Damage> to them. For 1 turn, that enemy's <Classes>stunning skills<Classes> will be <Effects>stunned<Effects> for 1 turn. This skill will <Effects>fully stun<Effects> an enemy marked by <SkillName>'Rubber Ball and Rope'<SkillName>.",
      "descriptionBRRaw": "Dodai se comunica diretamente com um inimigo por telepatia, <Damage>causando 20 de dano perfurante<Damage> a ele. Por 1 turno, esse inimigo terá as <Classes>habilidades atordoantes<Classes> dele <Effects>atordoadas<Effects> por 1 turno. Esta habilidade irá <Effects>atordoar completamente<Effects> um inimigo marcado por <SkillName>'Rubber Ball and Rope'<SkillName>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Dodai communicates directly with one enemy through telepathy, dealing 20 piercing damage to them. For 1 turn, that enemy's stunning skills will be stunned for 1 turn. This skill will fully stun an enemy marked by 'Rubber Ball and Rope'. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Dodai se comunica diretamente com um inimigo por telepatia, causando 20 de dano perfurante a ele. Por 1 turno, esse inimigo terá as habilidades atordoantes dele atordoadas por 1 turno. Esta habilidade irá atordoar completamente um inimigo marcado por 'Rubber Ball and Rope'. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rubber Ball and Rope",
      "file": "dodai_(s)_skill_3_(rubber_ball_and_rope).jpg",
      "description": "Dodai traps one enemy inside a rubber ball and restrains them with a rope, dealing 35 damage to them. For 4 turns, that enemy will be marked. Afterwards, a random member of Dodai's team will become invulnerable for 1 turn.",
      "descriptionBR": "Dodai aprisiona um inimigo dentro de uma bola de borracha e o imobiliza com uma corda, causando 35 de dano a ele. Por 4 turnos, esse inimigo ficará marcado. Depois disso, um membro aleatório da equipe de Dodai ficará invulnerável por 1 turno.",
      "descriptionRaw": "Dodai traps one enemy inside a rubber ball and restrains them with a rope, <Damage>dealing 35 damage<Damage> to them. For 4 turns, that enemy will be <Improvements>marked<Improvements>. Afterwards, a random member of Dodai's team will become <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Dodai aprisiona um inimigo dentro de uma bola de borracha e o imobiliza com uma corda, <Damage>causando 35 de dano<Damage> a ele. Por 4 turnos, esse inimigo ficará <Improvements>marcado<Improvements>. Depois disso, um membro aleatório da equipe de Dodai ficará <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Dodai traps one enemy inside a rubber ball and restrains them with a rope, dealing 35 damage to them. For 4 turns, that enemy will be marked. Afterwards, a random member of Dodai's team will become invulnerable for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Dodai aprisiona um inimigo dentro de uma bola de borracha e o imobiliza com uma corda, causando 35 de dano a ele. Por 4 turnos, esse inimigo ficará marcado. Depois disso, um membro aleatório da equipe de Dodai ficará invulnerável por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Lava Release Defense",
      "file": "dodai_(s)_skill_4_(lava_release_defense).jpg",
      "description": "This skill makes Dodai (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Dodai (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Dodai (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Dodai (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Dodai (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Dodai (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

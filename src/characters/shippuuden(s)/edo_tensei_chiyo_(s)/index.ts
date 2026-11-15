// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Chiyo (S)",
  "description": "Edo Tensei Chiyo (S) has been summoned back from the afterlife. She may not like it but she will do her best to help her opponents out with information while she is forced to fight.",
  "descriptionBR": "Edo Tensei Chiyo (S) foi invocada de volta do além. Ela pode não gostar disso, mas fará o seu melhor para ajudar até mesmo seus oponentes com informações enquanto é forçada a lutar.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_chiyo_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "White Secret Technique Ten Puppets",
      "file": "edo_tensei_chiyo_(s)_skill_1_(white_secret_technique_ten_puppets).jpeg",
      "description": "Chiyo assaults her enemies using the ten puppets, stunning one enemy's physical and chakra skills for 1 turn. Afterwards, one random enemy will be dealt 20 damage for 2 turns.",
      "descriptionBR": "Chiyo ataca seus inimigos com os Dez Fantoches, atordoando as habilidades physical e chakra de um inimigo por 1 turno. Em seguida, um inimigo aleatório receberá 20 de dano por 2 turnos.",
      "descriptionRaw": "Chiyo assaults her enemies using the ten puppets, <Effects>stunning<Effects> one enemy's <Classes>physical and chakra<Classes> skills for 1 turn. Afterwards, one random enemy will be <Damage>dealt 20 damage<Damage> for 2 turns.",
      "descriptionBRRaw": "Chiyo ataca seus inimigos com os Dez Fantoches, <Effects>atordoando<Effects> as habilidades <Classes>physical e chakra<Classes> de um inimigo por 1 turno. Em seguida, um inimigo aleatório <Damage>receberá 20 de dano<Damage> por 2 turnos.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Chiyo assaults her enemies using the ten puppets, stunning one enemy's physical and chakra skills for 1 turn. Afterwards, one random enemy will be dealt 20 damage for 2 turns. Chakra cost: 2 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chiyo ataca seus inimigos com os Dez Fantoches, atordoando as habilidades physical e chakra de um inimigo por 1 turno. Em seguida, um inimigo aleatório receberá 20 de dano por 2 turnos. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Possum",
      "file": "edo_tensei_chiyo_(s)_skill_2_(possum).jpeg",
      "description": "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a new harmful skill, they will be countered. If successful, that enemy will be dealt 20 damage and will have their physical skills stunned for 1 turn. This skill is invisible.",
      "descriptionBR": "Chiyo finge estar vulnerável contra um inimigo e o marca. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ele será counterado. Se for bem-sucedido, esse inimigo receberá 20 de dano e terá as habilidades physical dele atordoadas por 1 turno. Esta habilidade é invisível.",
      "descriptionRaw": "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a <Classes>new harmful skill<Classes>, they will be <Defense>countered<Defense>. If successful, that enemy will be <Damage>dealt 20 damage<Damage> and will have their <Classes>physical<Classes> skills <Effects>stunned<Effects> for 1 turn. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Chiyo finge estar vulnerável contra um inimigo e o marca. Por 1 turno, se esse inimigo usar uma <Classes>nova habilidade ofensiva<Classes>, ele será <Defense>counterado<Defense>. Se for bem-sucedido, esse inimigo <Damage>receberá 20 de dano<Damage> e terá as habilidades <Classes>physical<Classes> dele <Effects>atordoadas<Effects> por 1 turno. <Invisible>Esta habilidade é invisível<Invisible>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a new harmful skill, they will be countered. If successful, that enemy will be dealt 20 damage and will have their physical skills stunned for 1 turn. This skill is invisible. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chiyo finge estar vulnerável contra um inimigo e o marca. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ele será counterado. Se for bem-sucedido, esse inimigo receberá 20 de dano e terá as habilidades physical dele atordoadas por 1 turno. Esta habilidade é invisível. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "White Secret Art Illusion",
      "file": "edo_tensei_chiyo_(s)_skill_3_(white_secret_art_illusion).jpeg",
      "description": "Edo Tensei Chiyo (S) targets one enemy, dealing 25 damage to them. For 1 turn, Edo Tensei Chiyo (S) will ignore all harmful skills.",
      "descriptionBR": "Edo Tensei Chiyo (S) causa 25 de dano a um inimigo. Por 1 turno, ela irá ignorar todas as habilidades ofensivas.",
      "descriptionRaw": "Edo Tensei Chiyo (S) targets one enemy, <Damage>dealing 25 damage<Damage> to them. For 1 turn, Edo Tensei Chiyo (S) will <Defense>ignore all harmful skills<Defense>.",
      "descriptionBRRaw": "Edo Tensei Chiyo (S) <Damage>causa 25 de dano<Damage> a um inimigo. Por 1 turno, ela irá <Defense>ignorar todas as habilidades ofensivas<Defense>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Edo Tensei Chiyo (S) targets one enemy, dealing 25 damage to them. For 1 turn, Edo Tensei Chiyo (S) will ignore all harmful skills. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Edo Tensei Chiyo (S) causa 25 de dano a um inimigo. Por 1 turno, ela irá ignorar todas as habilidades ofensivas. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chiyo Evade",
      "file": "edo_tensei_chiyo_(s)_skill_4_(chiyo_evade).jpeg",
      "description": "This skill makes Edo Tensei Chiyo (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Chiyo (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Chiyo (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Chiyo (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

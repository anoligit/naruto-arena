// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Zetsu (S)",
  "description": "Zetsu (S) is intent to follow Tobi's orders. With his abilities he will be trouble for anyone that comes across him.",
  "descriptionBR": "Zetsu (S) está determinado a seguir as ordens de Tobi. Com suas habilidades, ele será um problema para qualquer um que cruzar seu caminho.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "zetsu_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Spore Technique",
      "file": "zetsu_(s)_skill_1_(spore_technique).jpeg",
      "description": "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
      "descriptionBR": "Zetsu planta esporos em um aliado, concedendo a ele 10 de defesa destrutível permanente e fazendo-o ignorar todos os efeitos nocivos que não causem dano até que essa defesa seja destruída. Quando destruída, esse aliado ganhará 1 chakra aleatório. Esta habilidade é invisível.",
      "descriptionRaw": "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
      "descriptionBRRaw": "Zetsu planta esporos em um aliado, concedendo a ele 10 de defesa destrutível permanente e fazendo-o ignorar todos os efeitos nocivos que não causem dano até que essa defesa seja destruída. Quando destruída, esse aliado ganhará 1 chakra aleatório. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zetsu planta esporos em um aliado, concedendo a ele 10 de defesa destrutível permanente e fazendo-o ignorar todos os efeitos nocivos que não causem dano até que essa defesa seja destruída. Quando destruída, esse aliado ganhará 1 chakra aleatório. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Wood Release Roots",
      "file": "zetsu_(s)_skill_2_(wood_release_roots).jpeg",
      "description": "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
      "descriptionBR": "Zetsu manipula raízes de madeira e ataca um inimigo por baixo, causando 30 de dano perfurante e atordoando as habilidades physical e chakra desse inimigo por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
      "descriptionBRRaw": "Zetsu manipula raízes de madeira e ataca um inimigo por baixo, causando 30 de dano perfurante e atordoando as habilidades physical e chakra desse inimigo por 1 turno. Esta habilidade ignora invulnerabilidade.",
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
      "ruleDescription": "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zetsu manipula raízes de madeira e ataca um inimigo por baixo, causando 30 de dano perfurante e atordoando as habilidades physical e chakra desse inimigo por 1 turno. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Parasite Clone Trap",
      "file": "zetsu_(s)_skill_3_(parasite_clone_trap).jpeg",
      "description": "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new harmful skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn which will cost random chakra. This skill is invisible.",
      "descriptionBR": "Zetsu mira em um inimigo, reduzindo permanentemente o dano não-affliction dele em 10. Se esse inimigo usar uma nova habilidade, ela será copiada e 'Parasite Clone Trap' terminará. Esta habilidade será substituída pela habilidade copiada por 1 turno e irá custar random chakra. Esta habilidade é invisível.",
      "descriptionRaw": "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new harmful skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn which will cost random chakra. This skill is invisible.",
      "descriptionBRRaw": "Zetsu mira em um inimigo, reduzindo permanentemente o dano não-affliction dele em 10. Se esse inimigo usar uma nova habilidade, ela será copiada e 'Parasite Clone Trap' terminará. Esta habilidade será substituída pela habilidade copiada por 1 turno e irá custar random chakra. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new harmful skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn which will cost random chakra. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zetsu mira em um inimigo, reduzindo permanentemente o dano não-affliction dele em 10. Se esse inimigo usar uma nova habilidade, ela será copiada e 'Parasite Clone Trap' terminará. Esta habilidade será substituída pela habilidade copiada por 1 turno e irá custar random chakra. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Zetsu Split",
      "file": "zetsu_(s)_skill_4_(zetsu_split).jpeg",
      "description": "This skill makes Zetsu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Zetsu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Zetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Zetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Zetsu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Zetsu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

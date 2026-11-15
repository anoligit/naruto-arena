// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kazekage Gaara (S)",
  "description": "After a few short years and much soul-searching, Gaara(s) has risen to be his village's Kazekage. Rather than destroying others he now protects those he cares about to prove his existence.",
  "descriptionBR": "Após alguns anos e muita reflexão, Gaara(s) se tornou o Kazekage de sua vila. Ao invés de destruir outros, ele agora protege aqueles com quem se importa para provar sua existência.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kazekage_gaara_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Desert Missile",
      "file": "kazekage_gaara_(s)_skill_1_(desert_missile).jpg",
      "description": "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 10 piercing damage to them. New skills used by the target of this skill will deal 15 less non-affliction damage for 1 turn.",
      "descriptionBR": "Usando finas cordas de areia, Kazekage Gaara caça um inimigo causando 10 de dano perfurante. Novas habilidades usadas pelo alvo desta habilidade causarão 15 a menos de dano não-affliction por 1 turno.",
      "descriptionRaw": "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 10 piercing damage to them. New skills used by the target of this skill will deal 15 less non-affliction damage for 1 turn.",
      "descriptionBRRaw": "Usando finas cordas de areia, Kazekage Gaara caça um inimigo causando 10 de dano perfurante. Novas habilidades usadas pelo alvo desta habilidade causarão 15 a menos de dano não-affliction por 1 turno.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 10 piercing damage to them. New skills used by the target of this skill will deal 15 less non-affliction damage for 1 turn. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando finas cordas de areia, Kazekage Gaara caça um inimigo causando 10 de dano perfurante. Novas habilidades usadas pelo alvo desta habilidade causarão 15 a menos de dano não-affliction por 1 turno. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Desert Prison",
      "file": "kazekage_gaara_(s)_skill_2_(desert_prison).jpg",
      "description": "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
      "descriptionBR": "Kazekage Gaara aprisiona e esmaga um inimigo em uma enorme mandíbula de areia, atordoando suas habilidades Physical e Chakra por 1 turno e causando 10 de dano perfurante.",
      "descriptionRaw": "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
      "descriptionBRRaw": "Kazekage Gaara aprisiona e esmaga um inimigo em uma enorme mandíbula de areia, atordoando suas habilidades Physical e Chakra por 1 turno e causando 10 de dano perfurante.",
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
      "ruleDescription": "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kazekage Gaara aprisiona e esmaga um inimigo em uma enorme mandíbula de areia, atordoando suas habilidades Physical e Chakra por 1 turno e causando 10 de dano perfurante. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Sand Summoning",
      "file": "kazekage_gaara_(s)_skill_3_(sand_summoning).jpg",
      "description": "Gaara and his allies will gain 5 permanent destructible defense every 3 turns, for the rest of the game. Permanently, 'Desert Missile' will deal 15 additional damage and 'Desert Prison' will deal 20 additional damage. This skill can only be used twice.",
      "descriptionBR": "Gaara e seus aliados irão ganhar 5 de defesa destrutível permanente a cada turno 3 turnos, pelo resto do jogo. Permanentemente, 'Desert Missile' causará 15 de dano adicional e 'Desert Prison' causará 20 de dano adicional. Esta habilidade só pode ser usada duas vezes.",
      "descriptionRaw": "Gaara and his allies will gain 5 permanent destructible defense every 3 turns, for the rest of the game. Permanently, 'Desert Missile' will deal 15 additional damage and 'Desert Prison' will deal 20 additional damage. This skill can only be used twice.",
      "descriptionBRRaw": "Gaara e seus aliados irão ganhar 5 de defesa destrutível permanente a cada turno 3 turnos, pelo resto do jogo. Permanentemente, 'Desert Missile' causará 15 de dano adicional e 'Desert Prison' causará 20 de dano adicional. Esta habilidade só pode ser usada duas vezes.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Gaara and his allies will gain 5 permanent destructible defense every 3 turns, for the rest of the game. Permanently, 'Desert Missile' will deal 15 additional damage and 'Desert Prison' will deal 20 additional damage. This skill can only be used twice. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Gaara e seus aliados irão ganhar 5 de defesa destrutível permanente a cada turno 3 turnos, pelo resto do jogo. Permanentemente, 'Desert Missile' causará 15 de dano adicional e 'Desert Prison' causará 20 de dano adicional. Esta habilidade só pode ser usada duas vezes. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sand Sphere",
      "file": "kazekage_gaara_(s)_skill_4_(sand_sphere).jpg",
      "description": "This skill makes Kazekage Gaara (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kazekage Gaara (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kazekage Gaara (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kazekage Gaara (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kazekage Gaara (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kazekage Gaara (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

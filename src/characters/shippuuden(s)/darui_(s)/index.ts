// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Darui (S)",
  "description": "Darui (S) is a jounin of the Hidden Cloud Village and the right hand of the Yondaime Raikage. Despite his appearance Darui (S) is a formidable shinobi.",
  "descriptionBR": "Darui (S) é um jounin da Vila da Nuvem Oculta e a mão direita do Yondaime Raikage. Apesar de sua aparência, Darui (S) é um shinobi formidável.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "darui_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Laser Circus",
      "file": "darui_(s)_skill_1_(laser_circus).jpg",
      "description": "Darui creates several beams and shoots his opponents, stunning one enemy for 1 turn. Afterwards, all other enemies take 15 piercing damage.",
      "descriptionBR": "Darui cria diversos feixes e dispara contra seus oponentes, atordoando completamente um inimigo por 1 turno. Em seguida, todos os outros inimigos recebem 15 de dano perfurante.",
      "descriptionRaw": "Darui creates several beams and shoots his opponents, stunning one enemy for 1 turn. Afterwards, all other enemies take 15 piercing damage.",
      "descriptionBRRaw": "Darui cria diversos feixes e dispara contra seus oponentes, atordoando completamente um inimigo por 1 turno. Em seguida, todos os outros inimigos recebem 15 de dano perfurante.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Darui creates several beams and shoots his opponents, stunning one enemy for 1 turn. Afterwards, all other enemies take 15 piercing damage. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Darui cria diversos feixes e dispara contra seus oponentes, atordoando completamente um inimigo por 1 turno. Em seguida, todos os outros inimigos recebem 15 de dano perfurante. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Electric Water Encampment Wall",
      "file": "darui_(s)_skill_2_(electric_water_encampment_wall).jpg",
      "description": "Darui targets all enemies for 1 turn. Any enemy that uses a new skill will take 5 affliction damage. The following turn, all enemies affected by this skill will receive 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
      "descriptionBR": "Darui mira em todos os inimigos por 1 turno. Qualquer inimigo que usar uma nova habilidade receberá 5 de dano affliction. No turno seguinte, todos os inimigos afetados por esta habilidade receberão 5 de dano adicional de 'Laser Circus' e 'Black Panther Lightning'. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Darui targets all enemies for 1 turn. Any enemy that uses a new skill will take 5 affliction damage. The following turn, all enemies affected by this skill will receive 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
      "descriptionBRRaw": "Darui mira em todos os inimigos por 1 turno. Qualquer inimigo que usar uma nova habilidade receberá 5 de dano affliction. No turno seguinte, todos os inimigos afetados por esta habilidade receberão 5 de dano adicional de 'Laser Circus' e 'Black Panther Lightning'. Esta habilidade não pode ser counterada.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Darui targets all enemies for 1 turn. Any enemy that uses a new skill will take 5 affliction damage. The following turn, all enemies affected by this skill will receive 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Darui mira em todos os inimigos por 1 turno. Qualquer inimigo que usar uma nova habilidade receberá 5 de dano affliction. No turno seguinte, todos os inimigos afetados por esta habilidade receberão 5 de dano adicional de 'Laser Circus' e 'Black Panther Lightning'. Esta habilidade não pode ser counterada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Black Panther Lightning",
      "file": "darui_(s)_skill_3_(black_panther_lightning).jpg",
      "description": "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
      "descriptionBR": "Darui gera uma pantera negra de raio a partir do seu corpo e a lança contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 2 de recarga adicional. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
      "descriptionBRRaw": "Darui gera uma pantera negra de raio a partir do seu corpo e a lança contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 2 de recarga adicional. Esta habilidade ignora invulnerabilidade.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Darui gera uma pantera negra de raio a partir do seu corpo e a lança contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 2 de recarga adicional. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Cleaver Sword Defense",
      "file": "darui_(s)_skill_4_(cleaver_sword_defense).jpg",
      "description": "This skill makes Darui (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Darui (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Darui (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Darui (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Darui (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Darui (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

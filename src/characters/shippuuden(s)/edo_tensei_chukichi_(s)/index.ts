// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Chukichi (S)",
  "description": "Reanimated during the Fourth Shinobi World War, Chukichi was a renowned sensor from the Hidden Mist, capable of detecting even the faintest chakra signatures. Combining his exceptional sensory abilities with frost-based concealment and silent assassination techniques, he became a deadly threat on the battlefield.",
  "descriptionBR": "Reanimado durante a Quarta Guerra Mundial Ninja, Chukichi foi um renomado ninja sensor de Kirigakure, capaz de detectar até os menores vestígios de chakra. Combinando suas extraordinárias habilidades sensoriais com técnicas de ocultação na geada e assassinato silencioso, tornou-se uma ameaça mortal no campo de batalha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_chukichi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Frozen Veil",
      "file": "edo_tensei_chukichi_(s)_skill_1_(frozen_veil).png",
      "description": "By surrounding himself with a veil of frost, Chukichi conceals his presence from his enemies. For the rest of the game, each turn he will become invulnerable to a random main class of skills for 1 turn. This skill can be used while active to make Chukichi immortal for 1 turn.",
      "descriptionBR": "Ao se cercar com um véu de ar gelado, Chukichi esconde sua presença de seus inimigos. Pelo resto do jogo, a cada turno ele se tornará invulnerável a uma classe principal aleatória de habilidades por 1 turno. Essa habilidade pode ser usada enquanto ativa para deixar Chukichi imortal por 1 turno.",
      "descriptionRaw": "By surrounding himself with a veil of frost, Chukichi conceals his presence from his enemies. For the rest of the game, each turn he will become <Defense>invulnerable<Defense> to a random <Classes>main class <Classes>of skills for 1 turn. This skill can be used while active to make Chukichi <Defense>immortal<Defense> for 1 turn.",
      "descriptionBRRaw": "Ao se cercar com um véu de ar gelado, Chukichi esconde sua presença de seus inimigos. Pelo resto do jogo, a cada turno ele se tornará<Defense> invulnerável<Defense> a uma <Classes>classe principal<Classes> aleatória de habilidades por 1 turno. Essa habilidade pode ser usada enquanto ativa para deixar Chukichi <Defense>imortal <Defense>por 1 turno.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "By surrounding himself with a veil of frost, Chukichi conceals his presence from his enemies. For the rest of the game, each turn he will become invulnerable to a random main class of skills for 1 turn. This skill can be used while active to make Chukichi immortal for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao se cercar com um véu de ar gelado, Chukichi esconde sua presença de seus inimigos. Pelo resto do jogo, a cada turno ele se tornará invulnerável a uma classe principal aleatória de habilidades por 1 turno. Essa habilidade pode ser usada enquanto ativa para deixar Chukichi imortal por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Chakra Tracing",
      "file": "edo_tensei_chukichi_(s)_skill_2_(chakra_tracing).png",
      "description": "Using his exceptional sensory abilities, Chukichi detects the chakra signatures of his enemies, increasing the cost of their skills by 1 random chakra for 1 turn. Any invisible skills active on them will be revealed.",
      "descriptionBR": "Usando suas habilidades sensoriais excepcionais, Chukichi detecta o tipo de chakra de seus inimigos, aumentando o custo das habilidades deles em 1 chakra aleatório por 1 turno. Qualquer habilidade invisível ativa neles será revelada.",
      "descriptionRaw": "Using his exceptional sensory abilities, Chukichi detects the chakra signatures of his enemies, <Effects>increasing the cost of their skills by 1 random chakra<Effects> for 1 turn. Any invisible skills active on them <Effects>will be revealed<Effects>.",
      "descriptionBRRaw": "Usando suas habilidades sensoriais excepcionais, Chukichi detecta o tipo de chakra de seus inimigos, <Effects>aumentando o custo das habilidades deles em 1 chakra aleatório<Effects> por 1 turno. Qualquer habilidade invisível ativa neles <Effects>será revelada<Effects>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Using his exceptional sensory abilities, Chukichi detects the chakra signatures of his enemies, increasing the cost of their skills by 1 random chakra for 1 turn. Any invisible skills active on them will be revealed. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando suas habilidades sensoriais excepcionais, Chukichi detecta o tipo de chakra de seus inimigos, aumentando o custo das habilidades deles em 1 chakra aleatório por 1 turno. Qualquer habilidade invisível ativa neles será revelada. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Soundless Execution",
      "file": "edo_tensei_chukichi_(s)_skill_3_(soundless_execution).png",
      "description": "Taking advantage of his concealed presence, Chukichi silently approaches his enemy and delivers a deadly strike, dealing 35 piercing damage to an enemy. The active cooldown of 'Chakra Tracing' will be reduced by 1 turn. This skill ignores invulnerability and cannot be countered or reflected.",
      "descriptionBR": "Tomando vantagem de sua presença escondida, Chukichi ataca um inimigo silenciosamente, causando 35 de dano perfurante a ele. O tempo de recarga ativo de 'Chakra Tracing' será reduzido em 1 turno. Essa habilidade ignora invulnerabilidade e não pode ser anulada ou refletida.",
      "descriptionRaw": "Taking advantage of his concealed presence, Chukichi silently approaches his enemy and delivers a deadly strike, dealing <Damage>35 piercing damage<Damage> to an enemy. The active cooldown of <SkillName>'Chakra Tracing'<SkillName> will be <Effects>reduced by 1 turn<Effects>. This skill <Effects>ignores invulnerability<Effects> and cannot be <Effects>countered<Effects> or <Effects>reflected<Effects>.",
      "descriptionBRRaw": "Tomando vantagem de sua presença escondida, Chukichi ataca um inimigo silenciosamente, causando <Damage>35 de dano perfurante<Damage> a ele. O tempo de recarga ativo de <SkillName>'Chakra Tracing'<SkillName> será <Effects>reduzido<Effects> em 1 turno. Essa habilidade <Effects>ignora invulnerabilidade<Effects> e <Effects>não pode ser anulada ou refletida<Effects>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Taking advantage of his concealed presence, Chukichi silently approaches his enemy and delivers a deadly strike, dealing 35 piercing damage to an enemy. The active cooldown of 'Chakra Tracing' will be reduced by 1 turn. This skill ignores invulnerability and cannot be countered or reflected. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tomando vantagem de sua presença escondida, Chukichi ataca um inimigo silenciosamente, causando 35 de dano perfurante a ele. O tempo de recarga ativo de 'Chakra Tracing' será reduzido em 1 turno. Essa habilidade ignora invulnerabilidade e não pode ser anulada ou refletida. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Swift Withdrawal",
      "file": "edo_tensei_chukichi_(s)_skill_4_(swift_withdrawal).png",
      "description": "This skill makes Chukichi invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Chukichi invulnerável por 1 turn.",
      "descriptionRaw": "This skill makes Chukichi invulnerable for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Chukichi invulnerável por 1 turn.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Chukichi invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Chukichi invulnerável por 1 turn. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

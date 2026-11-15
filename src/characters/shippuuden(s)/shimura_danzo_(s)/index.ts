// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shimura Danzo (S)",
  "description": "Shimura Danzo (S) is the leader of the hidden root organization in Konoha and one of the village elders. Danzo operates in the shadows dedicated to Konoha no matter the cost.",
  "descriptionBR": "Shimura Danzo (S) é o líder da organização secreta Root em Konoha e um dos anciãos da vila. Danzo atua nas sombras, dedicado a Konoha a qualquer custo.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shimura_danzo_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Izanagi",
      "file": "shimura_danzo_(s)_skill_1_(izanagi).jpeg",
      "description": "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
      "descriptionBR": "Danzo consome 2 \"Izanagi's Sharingan\" para ativar Izanagi, ignorando permanentemente todo dano causado a ele. Se Danzo for afetado por 2 novas habilidades ofensivas, esta habilidade terminará e ele não poderá usá-la por 1 turno. Enquanto 'Izanagi' estiver ativo, esta habilidade será substituída por 'Stolen Kotoamatsukami'.",
      "descriptionRaw": "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
      "descriptionBRRaw": "Danzo consome 2 \"Izanagi's Sharingan\" para ativar Izanagi, ignorando permanentemente todo dano causado a ele. Se Danzo for afetado por 2 novas habilidades ofensivas, esta habilidade terminará e ele não poderá usá-la por 1 turno. Enquanto 'Izanagi' estiver ativo, esta habilidade será substituída por 'Stolen Kotoamatsukami'.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Danzo consome 2 \"Izanagi's Sharingan\" para ativar Izanagi, ignorando permanentemente todo dano causado a ele. Se Danzo for afetado por 2 novas habilidades ofensivas, esta habilidade terminará e ele não poderá usá-la por 1 turno. Enquanto 'Izanagi' estiver ativo, esta habilidade será substituída por 'Stolen Kotoamatsukami'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Self-Cursing Seal",
      "file": "shimura_danzo_(s)_skill_2_(self-cursing_seal).png",
      "description": "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
      "descriptionBR": "Danzo coloca um selo no corpo de um inimigo, causando 10 de dano affliction por 5 turnos. Se esta habilidade for removida, esse inimigo terá suas habilidades ofensivas atordoadas por 1 turno. Esta habilidade acumula.",
      "descriptionRaw": "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
      "descriptionBRRaw": "Danzo coloca um selo no corpo de um inimigo, causando 10 de dano affliction por 5 turnos. Se esta habilidade for removida, esse inimigo terá suas habilidades ofensivas atordoadas por 1 turno. Esta habilidade acumula.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Danzo coloca um selo no corpo de um inimigo, causando 10 de dano affliction por 5 turnos. Se esta habilidade for removida, esse inimigo terá suas habilidades ofensivas atordoadas por 1 turno. Esta habilidade acumula. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Baku",
      "file": "shimura_danzo_(s)_skill_3_(summoning_baku).jpeg",
      "description": "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
      "descriptionBR": "Danzo invoca Baku no campo de batalha, causando 25 de dano perfurante a um inimigo. Por 2 turnos, as habilidades não aflitivas desse inimigo causarão 50% a menos de dano.",
      "descriptionRaw": "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
      "descriptionBRRaw": "Danzo invoca Baku no campo de batalha, causando 25 de dano perfurante a um inimigo. Por 2 turnos, as habilidades não aflitivas desse inimigo causarão 50% a menos de dano.",
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
      "ruleDescription": "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Danzo invoca Baku no campo de batalha, causando 25 de dano perfurante a um inimigo. Por 2 turnos, as habilidades não aflitivas desse inimigo causarão 50% a menos de dano. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Tree Birth Defense",
      "file": "shimura_danzo_(s)_skill_4_(tree_birth_defense).jpeg",
      "description": "This skill makes Shimura Danzo (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shimura Danzo (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shimura Danzo (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shimura Danzo (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shimura Danzo (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shimura Danzo (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Izanagi's Sharingan",
      "file": "shimura_danzo_(s)_skill_5_(izanagi's_sharingan).png",
      "description": "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
      "descriptionBR": "Danzo começa a partida com 10 Sharingans. Cada vez que Danzo usa 'Izanagi', ele consome 2 Sharingans para ignorar todo dano recebido até que 2 novas habilidades ofensivas sejam usadas contra ele. Se Danzo ficar sem Sharingans, 'Izanagi' será substituído permanentemente por 'Reverse Four Symbols Seal'.",
      "descriptionRaw": "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
      "descriptionBRRaw": "Danzo começa a partida com 10 Sharingans. Cada vez que Danzo usa 'Izanagi', ele consome 2 Sharingans para ignorar todo dano recebido até que 2 novas habilidades ofensivas sejam usadas contra ele. Se Danzo ficar sem Sharingans, 'Izanagi' será substituído permanentemente por 'Reverse Four Symbols Seal'.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Danzo começa a partida com 10 Sharingans. Cada vez que Danzo usa 'Izanagi', ele consome 2 Sharingans para ignorar todo dano recebido até que 2 novas habilidades ofensivas sejam usadas contra ele. Se Danzo ficar sem Sharingans, 'Izanagi' será substituído permanentemente por 'Reverse Four Symbols Seal'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Stolen Kotoamatsukami",
      "file": "shimura_danzo_(s)_skill_6_(stolen_kotoamatsukami).png",
      "description": "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
      "descriptionBR": "Na próxima vez que um inimigo usar uma nova habilidade ofensiva, ela será counterada. Pelos 2 turnos seguintes, esse inimigo terá suas habilidades ofensivas atordadas e esta habilidade será substituída pela habilidade counterada, sem custo. Esta habilidade não pode ser counterada, refletida e é invisível.",
      "descriptionRaw": "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
      "descriptionBRRaw": "Na próxima vez que um inimigo usar uma nova habilidade ofensiva, ela será counterada. Pelos 2 turnos seguintes, esse inimigo terá suas habilidades ofensivas atordadas e esta habilidade será substituída pela habilidade counterada, sem custo. Esta habilidade não pode ser counterada, refletida e é invisível.",
      "energy": [
        "Blood",
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible. Chakra cost: 1 Blood, 1 Gen, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Na próxima vez que um inimigo usar uma nova habilidade ofensiva, ela será counterada. Pelos 2 turnos seguintes, esse inimigo terá suas habilidades ofensivas atordadas e esta habilidade será substituída pela habilidade counterada, sem custo. Esta habilidade não pode ser counterada, refletida e é invisível. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Reverse Four Symbols Seal",
      "file": "shimura_danzo_(s)_skill_7_(reverse_four_symbols_seal).jpg",
      "description": "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
      "descriptionBR": "Danzo libera 4 símbolos de seu sangue e forma uma grande esfera negra ao seu redor, selando todos os inimigos e causando 20 de dano affliction a eles. Em seguida, Danzo recebe 10 de dano affliction.",
      "descriptionRaw": "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
      "descriptionBRRaw": "Danzo libera 4 símbolos de seu sangue e forma uma grande esfera negra ao seu redor, selando todos os inimigos e causando 20 de dano affliction a eles. Em seguida, Danzo recebe 10 de dano affliction.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Danzo libera 4 símbolos de seu sangue e forma uma grande esfera negra ao seu redor, selando todos os inimigos e causando 20 de dano affliction a eles. Em seguida, Danzo recebe 10 de dano affliction. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tobi (S)",
  "description": "Tobi is the leader of Akatsuki, as well as an Uchiha. He possesses dimensional skills, being able to suck his targets into his dimension or use the Uchihas' forbidden techniques.",
  "descriptionBR": "Tobi é o líder da Akatsuki, além de um Uchiha. Ele possui habilidades dimensionais, podendo sugar seus alvos para sua dimensão ou usar as técnicas proibidas dos Uchiha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "tobi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kamui",
      "file": "tobi_(s)_skill_1_(kamui).jpg",
      "description": "If used on an ally: That ally will become invulnerable for 1 turn. If used on an enemy: deals 20 piercing damage to them and Tobi becomes invulnerable to that enemy for 2 turns. If they are invulnerable, deals 10 additional damage. Ignores invulnerability.",
      "descriptionBR": "Se usada em um aliado: esse aliado se tornará invulnerável por 1 turno. Se usada em um inimigo: causará 20 de dano perfurante e Tobi se tornará invulnerável a esse inimigo por 2 turnos. Se ele estiver invulnerável, causará 10 de dano adicional. Ignora invulnerabilidade.",
      "descriptionRaw": "If used on an ally: That ally will become invulnerable for 1 turn. If used on an enemy: deals 20 piercing damage to them and Tobi becomes invulnerable to that enemy for 2 turns. If they are invulnerable, deals 10 additional damage. Ignores invulnerability.",
      "descriptionBRRaw": "Se usada em um aliado: esse aliado se tornará invulnerável por 1 turno. Se usada em um inimigo: causará 20 de dano perfurante e Tobi se tornará invulnerável a esse inimigo por 2 turnos. Se ele estiver invulnerável, causará 10 de dano adicional. Ignora invulnerabilidade.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "If used on an ally: That ally will become invulnerable for 1 turn. If used on an enemy: deals 20 piercing damage to them and Tobi becomes invulnerable to that enemy for 2 turns. If they are invulnerable, deals 10 additional damage. Ignores invulnerability. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um aliado: esse aliado se tornará invulnerável por 1 turno. Se usada em um inimigo: causará 20 de dano perfurante e Tobi se tornará invulnerável a esse inimigo por 2 turnos. Se ele estiver invulnerável, causará 10 de dano adicional. Ignora invulnerabilidade. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Kamui Snare",
      "file": "tobi_(s)_skill_2_(kamui_snare).png",
      "description": "Tobi deals 10 piercing damage to an enemy, making them invulnerable to helpful skills and nullifying the non-damage effects of their next harmful skill for 1 turn. During 'Tobi Sharingan', this skill will deal 15 piercing damage and will nullify non-damage effects for 2 turns.",
      "descriptionBR": "Tobi causa 10 de dano perfurante a um inimigo, tornando ele invulnerável a habilidades defensivas e anulando os efeitos não-danosos da próxima habilidade ofensiva dele por 1 turno. Durante 'Tobi Sharingan', essa habilidade irá causar 15 de dano perfurante e irá anular os efeitos que não causam dano por 2 turnos.",
      "descriptionRaw": "Tobi deals 10 piercing damage to an enemy, making them invulnerable to helpful skills and nullifying the non-damage effects of their next harmful skill for 1 turn. During 'Tobi Sharingan', this skill will deal 15 piercing damage and will nullify non-damage effects for 2 turns.",
      "descriptionBRRaw": "Tobi causa 10 de dano perfurante a um inimigo, tornando ele invulnerável a habilidades defensivas e anulando os efeitos não-danosos da próxima habilidade ofensiva dele por 1 turno. Durante 'Tobi Sharingan', essa habilidade irá causar 15 de dano perfurante e irá anular os efeitos que não causam dano por 2 turnos.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Tobi deals 10 piercing damage to an enemy, making them invulnerable to helpful skills and nullifying the non-damage effects of their next harmful skill for 1 turn. During 'Tobi Sharingan', this skill will deal 15 piercing damage and will nullify non-damage effects for 2 turns. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tobi causa 10 de dano perfurante a um inimigo, tornando ele invulnerável a habilidades defensivas e anulando os efeitos não-danosos da próxima habilidade ofensiva dele por 1 turno. Durante 'Tobi Sharingan', essa habilidade irá causar 15 de dano perfurante e irá anular os efeitos que não causam dano por 2 turnos. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Tobi Sharingan",
      "file": "tobi_(s)_skill_3_(tobi_sharingan).jpg",
      "description": "For 4 turns, Tobi gains 10 points of unpierceable damage reduction. During this time, 'Kamui' deals 15 additional damage, and removes all harmful effects when used on an ally. This skill will be replaced. When used, 100% of Tobi's current health is stored.",
      "descriptionBR": "Por 4 turnos, Tobi ganha 10 pontos de redução de dano unpierceable. Durante esse tempo, 'Kamui' irá causar 15 de dano adicional e remove todos os efeitos ofensivos quando usada em um aliado. Essa habilidade será substituída. Quando usada, 100% da vida atual de Tobi é armazenada.",
      "descriptionRaw": "For 4 turns, Tobi gains 10 points of unpierceable damage reduction. During this time, 'Kamui' deals 15 additional damage, and removes all harmful effects when used on an ally. This skill will be replaced. When used, 100% of Tobi's current health is stored.",
      "descriptionBRRaw": "Por 4 turnos, Tobi ganha 10 pontos de redução de dano unpierceable. Durante esse tempo, 'Kamui' irá causar 15 de dano adicional e remove todos os efeitos ofensivos quando usada em um aliado. Essa habilidade será substituída. Quando usada, 100% da vida atual de Tobi é armazenada.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "For 4 turns, Tobi gains 10 points of unpierceable damage reduction. During this time, 'Kamui' deals 15 additional damage, and removes all harmful effects when used on an ally. This skill will be replaced. When used, 100% of Tobi's current health is stored. Chakra cost: 1 Blood. Catalog classes: Mental, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 4 turnos, Tobi ganha 10 pontos de redução de dano unpierceable. Durante esse tempo, 'Kamui' irá causar 15 de dano adicional e remove todos os efeitos ofensivos quando usada em um aliado. Essa habilidade será substituída. Quando usada, 100% da vida atual de Tobi é armazenada. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Uchiha Perception",
      "file": "tobi_(s)_skill_4_(uchiha_perception).jpg",
      "description": "This skill makes Tobi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Tobi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Tobi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Tobi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Tobi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Tobi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Hidden Izanagi",
      "file": "tobi_(s)_skill_5_(hidden_izanagi).jpg",
      "description": "Tobi uses Hidden Izanagi. After 2 turns Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
      "descriptionBR": "Tobi usa Hidden Izanagi. Após 2 turnos, a saúde de Tobi voltará ao valor armazenado pelo 'Tobi Sharingan'. Esta habilidade é invisível e só pode ser usada uma vez. Esta habilidade será ativada mesmo que Tobi seja morto.",
      "descriptionRaw": "Tobi uses Hidden Izanagi. After 2 turns Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
      "descriptionBRRaw": "Tobi usa Hidden Izanagi. Após 2 turnos, a saúde de Tobi voltará ao valor armazenado pelo 'Tobi Sharingan'. Esta habilidade é invisível e só pode ser usada uma vez. Esta habilidade será ativada mesmo que Tobi seja morto.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged*"
      ],
      "cooldown": 0,
      "ruleDescription": "Tobi uses Hidden Izanagi. After 2 turns Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed. Chakra cost: 2 Blood. Catalog classes: Mental, Instant, Ranged*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tobi usa Hidden Izanagi. Após 2 turnos, a saúde de Tobi voltará ao valor armazenado pelo 'Tobi Sharingan'. Esta habilidade é invisível e só pode ser usada uma vez. Esta habilidade será ativada mesmo que Tobi seja morto. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Mental, Instant, Ranged*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

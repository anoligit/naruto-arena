// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Chouji (S)",
  "description": "After nearly three years, Chouji has developed in both strength and size, mastering the Akimichi clan techniques. No longer does Chouji need the Akimichi pills to tap into his true strength, instead, he merely needs to control his chakra and become a force to reckon with.",
  "descriptionBR": "Após quase três anos, Chouji evoluiu tanto em força quanto em tamanho, dominando as técnicas do clã Akimichi. Agora, não precisa mais das pílulas Akimichi para alcançar sua verdadeira força, bastando controlar seu chakra para se tornar uma força a ser temida.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_chouji_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Butterfly Bullet Bombing",
      "file": "shinobi_alliance_chouji_(s)_skill_1_(butterfly_bullet_bombing).png",
      "description": "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random chakra afterwards.",
      "descriptionBR": "Chouji acerta o rosto de um inimigo com um soco, primeiro ignorando todos os efeitos ofensivas (exceto mudanças no custo de chakra) por 1 turno e depois causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakra aleatórios a mais em seguida.",
      "descriptionRaw": "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random chakra afterwards.",
      "descriptionBRRaw": "Chouji acerta o rosto de um inimigo com um soco, primeiro ignorando todos os efeitos ofensivas (exceto mudanças no custo de chakra) por 1 turno e depois causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakra aleatórios a mais em seguida.",
      "energy": [
        "Tai",
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random chakra afterwards. Chakra cost: 1 Tai, 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouji acerta o rosto de um inimigo com um soco, primeiro ignorando todos os efeitos ofensivas (exceto mudanças no custo de chakra) por 1 turno e depois causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakra aleatórios a mais em seguida. Custo de chakra: 1 taijutsu, 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Human Bullet Tank",
      "file": "shinobi_alliance_chouji_(s)_skill_2_(human_bullet_tank).png",
      "description": "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random chakra each turn.",
      "descriptionBR": "Chouji rola sobre um inimigo por 2 turnos, causando 15 de dano por turno. Durante esse tempo, ele irá counterar todas as novas habilidades physical e chakra usadas contra ele.* Esta habilidade aumentará o custo das habilidades de Chouji em 1 chakra aleatório por turno.",
      "descriptionRaw": "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random chakra each turn.",
      "descriptionBRRaw": "Chouji rola sobre um inimigo por 2 turnos, causando 15 de dano por turno. Durante esse tempo, ele irá counterar todas as novas habilidades physical e chakra usadas contra ele.* Esta habilidade aumentará o custo das habilidades de Chouji em 1 chakra aleatório por turno.",
      "energy": [
        "Blood",
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Instant*",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random chakra each turn. Chakra cost: 1 Blood, 2 Random. Catalog classes: Physical, Action, Instant*, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouji rola sobre um inimigo por 2 turnos, causando 15 de dano por turno. Durante esse tempo, ele irá counterar todas as novas habilidades physical e chakra usadas contra ele.* Esta habilidade aumentará o custo das habilidades de Chouji em 1 chakra aleatório por turno. Custo de chakra: 1 linhagem sanguínea, 2 aleatório. Classes no catálogo: Physical, Action, Instant*, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Butterfly Control",
      "file": "shinobi_alliance_chouji_(s)_skill_3_(butterfly_control).png",
      "description": "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random chakra.",
      "descriptionBR": "Usando seu novo controle, Chouji libera ainda mais poder. Esta habilidade será substituída por 'Super-Punch'. A cada turno, o custo atual das habilidades de Chouji será reduzido em 1 chakra aleatório.",
      "descriptionRaw": "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random chakra.",
      "descriptionBRRaw": "Usando seu novo controle, Chouji libera ainda mais poder. Esta habilidade será substituída por 'Super-Punch'. A cada turno, o custo atual das habilidades de Chouji será reduzido em 1 chakra aleatório.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random chakra. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seu novo controle, Chouji libera ainda mais poder. Esta habilidade será substituída por 'Super-Punch'. A cada turno, o custo atual das habilidades de Chouji será reduzido em 1 chakra aleatório. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Butterfly Block",
      "file": "shinobi_alliance_chouji_(s)_skill_4_(butterfly_block).png",
      "description": "This skill makes Shinobi Alliance Chouji (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Chouji (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Chouji (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Chouji (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Chouji (S) invulnerable for 1 turn. Chakra cost: 2 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Chouji (S) invulnerável por 1 turno. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Super-Punch",
      "file": "shinobi_alliance_chouji_(s)_skill_5_(super-punch).png",
      "description": "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random chakras afterwards.",
      "descriptionBR": "Chouji soca um inimigo com chakra concentrado, removendo todos os efeitos negativos dele mesmo e causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakras aleatórios a mais em seguida.",
      "descriptionRaw": "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random chakras afterwards.",
      "descriptionBRRaw": "Chouji soca um inimigo com chakra concentrado, removendo todos os efeitos negativos dele mesmo e causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakras aleatórios a mais em seguida.",
      "energy": [
        "Nin",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random chakras afterwards. Chakra cost: 1 Nin, 2 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chouji soca um inimigo com chakra concentrado, removendo todos os efeitos negativos dele mesmo e causando 30 de dano. Esta habilidade não pode ser counterada ou refletida, e as habilidades de Chouji custarão 2 chakras aleatórios a mais em seguida. Custo de chakra: 1 ninjutsu, 2 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Jinpachi (S)",
  "description": "Edo Tensei Jinpachi (S) is one of the previous Seven Swordsmen of the Mist and a particularly cruel individual.",
  "descriptionBR": "Edo Tensei Jinpachi (S) é um dos antigos Sete Espadachins da Névoa e um indivíduo particularmente cruel.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_jinpachi_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Explosive Tag Primer",
      "file": "edo_tensei_jinpachi_(s)_skill_1_(explosive_tag_primer).jpeg",
      "description": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
      "descriptionBR": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 15 de dano perfurante de chakra ao alvo. Se um inimigo destruir essa defesa, ele receberá 15 de dano perfurante e essa habilidade será encerrada.",
      "descriptionRaw": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
      "descriptionBRRaw": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 15 de dano perfurante de chakra ao alvo. Se um inimigo destruir essa defesa, ele receberá 15 de dano perfurante e essa habilidade será encerrada.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "Melee*"
      ],
      "cooldown": 2,
      "ruleDescription": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, Melee*. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 15 de dano perfurante de chakra ao alvo. Se um inimigo destruir essa defesa, ele receberá 15 de dano perfurante e essa habilidade será encerrada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, Melee*. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Silent Explosion",
      "file": "edo_tensei_jinpachi_(s)_skill_2_(silent_explosion).jpeg",
      "description": "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
      "descriptionBR": "Jinpachi causa 20 de dano perfurante a um inimigo e reduz o dano de habilidades não-aflitivas dele em 5 por 1 turno. Se 'Explosive Tag Primer' tiver sido usada no último turno, esta habilidade custará 1 chakra aleatório adicional por 1 turno.",
      "descriptionRaw": "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
      "descriptionBRRaw": "Jinpachi causa 20 de dano perfurante a um inimigo e reduz o dano de habilidades não-aflitivas dele em 5 por 1 turno. Se 'Explosive Tag Primer' tiver sido usada no último turno, esta habilidade custará 1 chakra aleatório adicional por 1 turno.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "$_"
      ],
      "cooldown": 0,
      "ruleDescription": "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, $_. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jinpachi causa 20 de dano perfurante a um inimigo e reduz o dano de habilidades não-aflitivas dele em 5 por 1 turno. Se 'Explosive Tag Primer' tiver sido usada no último turno, esta habilidade custará 1 chakra aleatório adicional por 1 turno. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, $_. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Shibuki Explosion Chain",
      "file": "edo_tensei_jinpachi_(s)_skill_3_(shibuki_explosion_chain).jpeg",
      "description": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
      "descriptionBR": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 10 de dano por aflição permanente ao alvo. Se um inimigo destruir essa defesa, ele receberá 10 de dano por aflição permanente e essa habilidade será encerrada.",
      "descriptionRaw": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
      "descriptionBRRaw": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 10 de dano por aflição permanente ao alvo. Se um inimigo destruir essa defesa, ele receberá 10 de dano por aflição permanente e essa habilidade será encerrada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee*"
      ],
      "cooldown": 2,
      "ruleDescription": "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee*. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 10 de dano por aflição permanente ao alvo. Se um inimigo destruir essa defesa, ele receberá 10 de dano por aflição permanente e essa habilidade será encerrada. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee*. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shibuki Defense",
      "file": "edo_tensei_jinpachi_(s)_skill_4_(shibuki_defense).jpeg",
      "description": "This skill makes Edo Tensei Jinpachi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Jinpachi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Jinpachi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Jinpachi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Jinpachi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Jinpachi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

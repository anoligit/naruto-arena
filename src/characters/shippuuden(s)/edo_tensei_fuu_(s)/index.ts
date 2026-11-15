// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Fuu (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War, Fuu has had the Seven-Tails, Choumei, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Fuu is under his full control, skillfully utilizing the Seven-Tails' various insect abilities.",
  "descriptionBR": "Reanimada por Kabuto durante a Quarta Guerra Mundial Ninja, Fuu teve o Sete-Caudas, Choumei, selado de volta dentro de si. Tendo sido transformada em um dos novos Seis Caminhos da Dor de Tobi, junto com os outros jinchuuriki caídos, Fuu está sob seu controle total, utilizando habilmente as várias habilidades inseticidas do Sete-Caudas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_fuu_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Majestic Sting",
      "file": "edo_tensei_fuu_(s)_skill_1_(majestic_sting).png",
      "description": "Fuu deals 15 damage to one enemy. The following turn, that enemy will receive 10 additional damage from Fuu's skills.",
      "descriptionBR": "Fuu causa 15 de dano a um inimigo. No turno seguinte, esse inimigo receberá 10 de dano adicional das habilidades de Fuu.",
      "descriptionRaw": "Fuu <Damage>deals 15 damage<Damage> to one enemy. The following turn, that enemy will <Improvements>receive 10 additional damage<Improvements> from Fuu's skills.",
      "descriptionBRRaw": "Fuu <Damage>causa 15 de dano<Damage> a um inimigo. No turno seguinte, esse inimigo <Improvements>receberá 10 de dano adicional<Improvements> das habilidades de Fuu.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Fuu deals 15 damage to one enemy. The following turn, that enemy will receive 10 additional damage from Fuu's skills. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fuu causa 15 de dano a um inimigo. No turno seguinte, esse inimigo receberá 10 de dano adicional das habilidades de Fuu. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Nanabi: Flying Assault",
      "file": "edo_tensei_fuu_(s)_skill_2_(nanabi_flying_assault).png",
      "description": "Fuu becomes invulnerable for 1 turn and deals 30 damage to one enemy ignoring invulnerability.",
      "descriptionBR": "Fuu se torna invulnerável por 1 turno e causa 30 de dano a um inimigo, ignorando a invulnerabilidade.",
      "descriptionRaw": "Fuu becomes <Defense>invulnerable<Defense> for 1 turn and <Damage>deals 30 damage<Damage> to one enemy <Classes>ignoring invulnerability<Classes>.",
      "descriptionBRRaw": "Fuu se torna <Defense>invulnerável<Defense> por 1 turno e <Damage>causa 30 de dano<Damage> a um inimigo, <Classes>ignorando a invulnerabilidade<Classes>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Fuu becomes invulnerable for 1 turn and deals 30 damage to one enemy ignoring invulnerability. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fuu se torna invulnerável por 1 turno e causa 30 de dano a um inimigo, ignorando a invulnerabilidade. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Scale Powder Blinding Attack",
      "file": "edo_tensei_fuu_(s)_skill_3_(scale_powder_blinding_attack).png",
      "description": "Fuu deals 10 piercing damage to one enemy and makes them unable to reduce damage or become invulnerable for 1 turn. The following turn, that enemy will take another 10 damage and will be stunned for 1 turn.",
      "descriptionBR": "Fuu causa 10 de dano perfurante a um inimigo e o torna incapaz de reduzir o dano ou invulnerável por 1 turno. No turno seguinte, esse inimigo sofrerá mais 10 de dano e ficará atordoado por 1 turno.",
      "descriptionRaw": "Fuu <Damage>deals 10 piercing damage<Damage> to one enemy and makes them unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 1 turn. The following turn, that enemy <Damage>will take another 10 damage<Damage> and will be <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Fuu <Damage>causa 10 de dano perfurante<Damage> a um inimigo e o torna incapaz de <Defense>reduzir o dano<Defense> ou <Defense>invulnerável<Defense> por 1 turno. No turno seguinte, esse inimigo <Damage>sofrerá mais 10 de dano<Damage> e ficará <Effects>atordoado<Effects> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Control",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Fuu deals 10 piercing damage to one enemy and makes them unable to reduce damage or become invulnerable for 1 turn. The following turn, that enemy will take another 10 damage and will be stunned for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Control, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Fuu causa 10 de dano perfurante a um inimigo e o torna incapaz de reduzir o dano ou invulnerável por 1 turno. No turno seguinte, esse inimigo sofrerá mais 10 de dano e ficará atordoado por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Control, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Fuu: Rinnegan Awareness",
      "file": "edo_tensei_fuu_(s)_skill_4_(fuu_rinnegan_awareness).png",
      "description": "This skill may be used to cast the last skill used by Fuu, costing random chakra and dealing 5 additional damage. Afterwards, the original version of the casted skill will be unable to be used by Fuu for 1 turn.",
      "descriptionBR": "Esta habilidade pode ser usada para conjurar a última habilidade usada por Fuu, custando random chakra e causando 5 de dano adicional. Depois disso, a versão original da habilidade usada não poderá ser usada por Fuu por 1 turno.",
      "descriptionRaw": "This skill may be used to cast the last skill used by Fuu, <Improvements>costing random chakra<Improvements> and <Improvements>dealing 5 additional damage<Improvements>. Afterwards, the original version of the casted skill will be unable to be used by Fuu for 1 turn.",
      "descriptionBRRaw": "Esta habilidade pode ser usada para conjurar a última habilidade usada por Fuu, <Improvements>custando random chakra<Improvements> e <Improvements>causando 5 de dano adicional<Improvements>. Depois disso, a versão original da habilidade usada não poderá ser usada por Fuu por 1 turno.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill may be used to cast the last skill used by Fuu, costing random chakra and dealing 5 additional damage. Afterwards, the original version of the casted skill will be unable to be used by Fuu for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade pode ser usada para conjurar a última habilidade usada por Fuu, custando random chakra e causando 5 de dano adicional. Depois disso, a versão original da habilidade usada não poderá ser usada por Fuu por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

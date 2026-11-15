// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Muu (S)",
  "description": "Muu, the Second Tsuchikage, was revived against his will to fight. He is a skilled spy, capable of infiltrating the battlefield undetected, in addition to his Kekkei Touta, the atomic detachment, capable of turning enemies into dust in a matter of moments.",
  "descriptionBR": "Muu, o Segundo Tsuchikage, foi revivido contra sua vontade para lutar. Ele é um espião habilidoso, capaz de se infiltrar no campo de batalha sem ser detectado, além de possuir o Kekkei Touta, o desmembramento atômico, capaz de transformar inimigos em pó em questão de segundos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_muu_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Fission",
      "file": "edo_tensei_muu_(s)_skill_1_(fission).jpeg",
      "description": "ET Muu grant himself or one ally 50% of unpierceable damage reduction points for 1 turn. During this turn, any enemy that uses a new skill on that ally will receive 5 additional damage from non-affliction skills permanently. This skill is invisible.",
      "descriptionBR": "ET Muu concede a si mesmo ou a um aliado 50% de pontos de redução de dano impenetrável por 1 turno. Durante este turno, qualquer inimigo que usar uma nova habilidade nesse aliado receberá 5 de dano adicional de habilidades não aflitivas permanentemente. Esta habilidade é invisível.",
      "descriptionRaw": "ET Muu grant himself or one ally 50% of <Defense>unpierceable damage reduction points<Defense> for 1 turn. During this turn, any enemy that <Classes>uses a new skill<Classes> on that ally <Improvements>will receive 5 additional damage<Improvements> from <Classes>non-affliction<Classes> skills permanently. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "ET Muu concede a si mesmo ou a um aliado 50% de <Defense>pontos de redução de dano impenetrável<Defense> por 1 turno. Durante este turno, qualquer inimigo que <Classes>usar uma nova habilidade<Classes> nesse aliado <Improvements>receberá 5 de dano adicional<Improvements> de <Classes>habilidades não aflitivas<Classes> permanentemente. <Invisible>Esta habilidade é invisível<Invisible>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Helpful"
      ],
      "cooldown": 2,
      "ruleDescription": "ET Muu grant himself or one ally 50% of unpierceable damage reduction points for 1 turn. During this turn, any enemy that uses a new skill on that ally will receive 5 additional damage from non-affliction skills permanently. This skill is invisible. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Helpful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Muu concede a si mesmo ou a um aliado 50% de pontos de redução de dano impenetrável por 1 turno. Durante este turno, qualquer inimigo que usar uma nova habilidade nesse aliado receberá 5 de dano adicional de habilidades não aflitivas permanentemente. Esta habilidade é invisível. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Helpful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Atomic Detachment",
      "file": "edo_tensei_muu_(s)_skill_2_(atomic_detachment).jpeg",
      "description": "ET Muu deals 20 damage to one enemy and an additional 15 piercing damage the first turn and 10 piercing damage the following turn. During this time, that enemy's skills will cost 1 additional random chakra. This skill ends if that enemy uses a new skill.",
      "descriptionBR": "ET Muu causa 20 de dano a um inimigo e 15 de dano perfurante adicional no primeiro turno e 10 de dano perfurante no turno seguinte. Durante esse tempo, as habilidades desse inimigo custarão 1 chakra aleatório adicional. Esta habilidade termina se esse inimigo usar uma nova habilidade.",
      "descriptionRaw": "ET Muu <Damage>deals 20 damage<Damage> to one enemy and an additional <Damage>15 piercing damage<Damage> the first turn and <Damage>10 piercing damage<Damage> the following turn. During this time, that enemy's skills <Effects>will cost 1 additional random chakra<Effects>. This skill <Classes>ends<Classes> if that enemy uses a <Classes>new skill<Classes>.",
      "descriptionBRRaw": "ET Muu <Damage>causa 20 de dano<Damage> a um inimigo e <Damage>15 de dano perfurante<Damage> adicional no primeiro turno e <Damage>10 de dano perfurante<Damage> no turno seguinte. Durante esse tempo, as habilidades desse inimigo <Effects>custarão 1 chakra aleatório adicional<Effects>. Esta habilidade <Classes>termina<Classes> se esse inimigo usar uma <Classes>nova habilidade<Classes>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 0,
      "ruleDescription": "ET Muu deals 20 damage to one enemy and an additional 15 piercing damage the first turn and 10 piercing damage the following turn. During this time, that enemy's skills will cost 1 additional random chakra. This skill ends if that enemy uses a new skill. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Muu causa 20 de dano a um inimigo e 15 de dano perfurante adicional no primeiro turno e 10 de dano perfurante no turno seguinte. Durante esse tempo, as habilidades desse inimigo custarão 1 chakra aleatório adicional. Esta habilidade termina se esse inimigo usar uma nova habilidade. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chameleon Covering",
      "file": "edo_tensei_muu_(s)_skill_3_(chameleon_covering).jpeg",
      "description": "ET Muu makes himself or one ally ignore all harmful effects except damage for 1 turn. If the protected character receive a new harmful skill, 'Atomic Detachment will cost 2 random chakra for 1 turn. This skill is invisible.",
      "descriptionBR": "ET Muu faz com que ele mesmo ou um aliado ignore todos os efeitos ofensivos exceto dano por 1 turno. Se o personagem protegido receber uma nova habilidade ofensiva, 'Atomic Detachment' custará 2 chakras aleatórios por 1 turno. Esta habilidade é invisível.",
      "descriptionRaw": "ET Muu makes himself or one ally <Defense>ignore all harmful effects except damage<Defense> for 1 turn. If the protected character receive a new <Classes>harmful<Classes> skill, <SkillName>'Atomic Detachment<SkillName> will <Improvements>cost 2 random chakra<Improvements> for 1 turn. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "ET Muu faz com que ele mesmo ou um aliado <Defense>ignore todos os efeitos ofensivos exceto dano<Defense> por 1 turno. Se o personagem protegido receber uma nova habilidade <Classes>ofensiva<Classes>, <SkillName>'Atomic Detachment'<SkillName> <Improvements>custará 2 chakras aleatórios<Improvements> por 1 turno. <Invisible>Esta habilidade é invisível<Invisible>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "Helpful"
      ],
      "cooldown": 2,
      "ruleDescription": "ET Muu makes himself or one ally ignore all harmful effects except damage for 1 turn. If the protected character receive a new harmful skill, 'Atomic Detachment will cost 2 random chakra for 1 turn. This skill is invisible. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, Helpful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Muu faz com que ele mesmo ou um aliado ignore todos os efeitos ofensivos exceto dano por 1 turno. Se o personagem protegido receber uma nova habilidade ofensiva, 'Atomic Detachment' custará 2 chakras aleatórios por 1 turno. Esta habilidade é invisível. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, Helpful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sensorial Awareness",
      "file": "edo_tensei_muu_(s)_skill_4_(sensorial_awareness).jpeg",
      "description": "This skill makes Edo Tensei Muu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Muu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Muu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Muu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Muu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Muu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Ino (S)",
  "description": "Not one to be left behind, Ino has trained non-stop to improve her abilities and teamwork. With her improved techniques, Ino can not only control her enemies, but her allies too all while seeing everything on the battlefield.",
  "descriptionBR": "Ino não queria ficar para trás, então treinou incansavelmente para aprimorar suas habilidades e trabalho em equipe. Com suas técnicas melhoradas, ela pode controlar não apenas seus inimigos, mas também seus aliados, enquanto observa tudo no campo de batalha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_ino_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mind Body Switch Interference",
      "file": "shinobi_alliance_ino_(s)_skill_1_(mind_body_switch_interference).png",
      "description": "Ino interferes one enemy for 1 turn. The following turn, that enemy will receive 15 piercing damage and if that enemy uses a new harmful skill, they will be countered. If successful, this skill will be replaced by the countered skill, which will cost random chakra. This skill is invisible.",
      "descriptionBR": "Ino se prepara para interferir em um inimigo por 1 turno. No turno seguinte, esse inimigo receberá 15 de dano e, se usar uma nova habilidade ofensiva, será counterado e esta habilidade será substituída pela habilidade counterada por 1 turno e irá custar random chakra. Esta habilidade é invisível.",
      "descriptionRaw": "Ino interferes one enemy for 1 turn. The following turn, that enemy will receive 15 piercing damage and if that enemy uses a new harmful skill, they will be countered. If successful, this skill will be replaced by the countered skill, which will cost random chakra. This skill is invisible.",
      "descriptionBRRaw": "Ino se prepara para interferir em um inimigo por 1 turno. No turno seguinte, esse inimigo receberá 15 de dano e, se usar uma nova habilidade ofensiva, será counterado e esta habilidade será substituída pela habilidade counterada por 1 turno e irá custar random chakra. Esta habilidade é invisível.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Ino interferes one enemy for 1 turn. The following turn, that enemy will receive 15 piercing damage and if that enemy uses a new harmful skill, they will be countered. If successful, this skill will be replaced by the countered skill, which will cost random chakra. This skill is invisible. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ino se prepara para interferir em um inimigo por 1 turno. No turno seguinte, esse inimigo receberá 15 de dano e, se usar uma nova habilidade ofensiva, será counterado e esta habilidade será substituída pela habilidade counterada por 1 turno e irá custar random chakra. Esta habilidade é invisível. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Enhanced Proxy Surveillance",
      "file": "shinobi_alliance_ino_(s)_skill_2_(enhanced_proxy_surveillance).png",
      "description": "For 4 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
      "descriptionBR": "Por 4 turnos, todos os efeitos de redução de dano e defesa destrutível usados pelos inimigos serão reduzidos em 15, e as reduções de dano em porcentagem serão reduzidas em 50%. Ino também saberá quando e onde qualquer habilidade for usada. Esta habilidade não pode ser counterada, refletida e é invisível.",
      "descriptionRaw": "For 4 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
      "descriptionBRRaw": "Por 4 turnos, todos os efeitos de redução de dano e defesa destrutível usados pelos inimigos serão reduzidos em 15, e as reduções de dano em porcentagem serão reduzidas em 50%. Ino também saberá quando e onde qualquer habilidade for usada. Esta habilidade não pode ser counterada, refletida e é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "For 4 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 4 turnos, todos os efeitos de redução de dano e defesa destrutível usados pelos inimigos serão reduzidos em 15, e as reduções de dano em porcentagem serão reduzidas em 50%. Ino também saberá quando e onde qualquer habilidade for usada. Esta habilidade não pode ser counterada, refletida e é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mind Clone Switch",
      "file": "shinobi_alliance_ino_(s)_skill_3_(mind_clone_switch).png",
      "description": "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 3 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
      "descriptionBR": "Ino entra na mente de seus dois aliados, fazendo com que seus corpos continuem lutando independentemente de sua condição. Por 3 turnos, ambos os aliados de Ino ignorarão todos os efeitos ofensivas, exceto dano e alterações no custo de chakra. Esta habilidade é invisível e terminará se Ino morrer.",
      "descriptionRaw": "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 3 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
      "descriptionBRRaw": "Ino entra na mente de seus dois aliados, fazendo com que seus corpos continuem lutando independentemente de sua condição. Por 3 turnos, ambos os aliados de Ino ignorarão todos os efeitos ofensivas, exceto dano e alterações no custo de chakra. Esta habilidade é invisível e terminará se Ino morrer.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 3 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies. Chakra cost: 1 Gen. Catalog classes: Mental, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ino entra na mente de seus dois aliados, fazendo com que seus corpos continuem lutando independentemente de sua condição. Por 3 turnos, ambos os aliados de Ino ignorarão todos os efeitos ofensivas, exceto dano e alterações no custo de chakra. Esta habilidade é invisível e terminará se Ino morrer. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Ino Dodge",
      "file": "shinobi_alliance_ino_(s)_skill_4_(ino_dodge).png",
      "description": "This skill makes Shinobi Alliance Ino (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Ino (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Ino (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Ino (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Ino (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Ino (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

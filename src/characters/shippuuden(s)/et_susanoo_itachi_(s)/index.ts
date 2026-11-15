// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "ET Susanoo Itachi (S)",
  "description": "Having been reanimated once more, Itachi now manifests the full power of his Susanoo in battle. Shielded by the Yata Mirror and wielding the sealing Totsuka Blade, he becomes a relentless force that blends absolute defense with lethal precision.",
  "descriptionBR": "Tendo sido reanimado mais uma vez, Itachi agora manifesta todo o poder de seu Susanoo em batalha. Protegido pelo Espelho Yata e empunhando a seladora Lâmina Totsuka, ele se torna uma força implacável que combina defesa absoluta com precisão letal.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "et_susanoo_itachi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Skeletal Blade",
      "file": "et_susanoo_itachi_(s)_skill_1_(skeletal_blade).png",
      "description": "Using his Susanoo's skeletal blade, Itachi deals 20 piercing damage to one enemy. Permanently, that enemy will receive 5 additional damage from harmful skills.",
      "descriptionBR": "Usando a lâmina esquelética de seu Susanoo, Itachi causa 20 de dano perfurante a um inimigo. Permanentemente, esse inimigo irá receber 5 de dano adicional de habilidades ofensivas.",
      "descriptionRaw": "Using his Susanoo's skeletal blade, Itachi <Damage>deals 20 piercing damage<Damage> to one enemy. Permanently, that enemy will <Improvements>receive 5 additional damage<Improvements> from <Classes>harmful skills<Classes>.",
      "descriptionBRRaw": "Usando a lâmina esquelética de seu Susanoo, Itachi <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Permanentemente, esse inimigo irá <Improvements>receber 5 de dano adicional<Improvements> de <Classes>habilidades ofensivas<Classes>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Using his Susanoo's skeletal blade, Itachi deals 20 piercing damage to one enemy. Permanently, that enemy will receive 5 additional damage from harmful skills. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando a lâmina esquelética de seu Susanoo, Itachi causa 20 de dano perfurante a um inimigo. Permanentemente, esse inimigo irá receber 5 de dano adicional de habilidades ofensivas. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Interrupting Slice",
      "file": "et_susanoo_itachi_(s)_skill_2_(interrupting_slice).png",
      "description": "Itachi deals 15 piercing damage to one enemy. Permanently, that enemy will deal 5 less non-affliction damage.",
      "descriptionBR": "Itachi causa 15 de dano perfurante a um inimigo. Permanentemente, esse inimigo irá causar 5 a menos de dano não-affliction.",
      "descriptionRaw": "Itachi <Damage>deals 15 piercing damage<Damage> to one enemy. Permanently, that enemy will <Effects>deal 5 less non-affliction damage<Effects>.",
      "descriptionBRRaw": "Itachi <Damage>causa 15 de dano perfurante<Damage> a um inimigo. Permanentemente, esse inimigo irá <Effects>causar 5 a menos de dano não-affliction<Effects>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Itachi deals 15 piercing damage to one enemy. Permanently, that enemy will deal 5 less non-affliction damage. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi causa 15 de dano perfurante a um inimigo. Permanentemente, esse inimigo irá causar 5 a menos de dano não-affliction. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Totsuka Blade Sealing",
      "file": "et_susanoo_itachi_(s)_skill_3_(totsuka_blade_sealing).png",
      "description": "Itachi seals one enemy with his Susanoo's legendary blade, dealing 35 affliction damage to them, removing 1 bloodline or genjutsu chakra and stunning their harmful skills for 1 turn. This skill cannot be countered or reflected.",
      "descriptionBR": "Itachi sela um inimigo com a lendária lâmina de seu Susanoo, causando 35 de dano affliction a ele, removendo 1 chakra Bloodline ou Genjutsu e atordoando suas habilidades ofensivas por 1 turno. Esta habilidade não pode ser counterada nem refletida.",
      "descriptionRaw": "Itachi seals one enemy with his Susanoo's legendary blade, <Damage>dealing 35 affliction damage<Damage> to them, <Effects>removing 1 bloodline or genjutsu chakra<Effects> and <Effects>stunning<Effects> their <Classes>harmful skills<Classes> for 1 turn. This skill <Classes>cannot be countered<Classes> or <Classes>reflected<Classes>.",
      "descriptionBRRaw": "Itachi sela um inimigo com a lendária lâmina de seu Susanoo, <Damage>causando 35 de dano affliction<Damage> a ele, <Effects>removendo 1 chakra Bloodline ou Genjutsu<Effects> e <Effects>atordoando<Effects> suas <Classes>habilidades ofensivas<Classes> por 1 turno. Esta habilidade <Classes>não pode ser counterada<Classes> nem <Classes>refletida<Classes>.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Itachi seals one enemy with his Susanoo's legendary blade, dealing 35 affliction damage to them, removing 1 bloodline or genjutsu chakra and stunning their harmful skills for 1 turn. This skill cannot be countered or reflected. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi sela um inimigo com a lendária lâmina de seu Susanoo, causando 35 de dano affliction a ele, removendo 1 chakra Bloodline ou Genjutsu e atordoando suas habilidades ofensivas por 1 turno. Esta habilidade não pode ser counterada nem refletida. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Edo Tensei Susanoo",
      "file": "et_susanoo_itachi_(s)_skill_4_(edo_tensei_susanoo).png",
      "description": "For 3 turns, if Itachi's health drops to 35 or less, Itachi's Susanoo will evolve to the next stage, improving his skills for the following 3 turns. During this time, this skill will be replaced by 'Yasaka Magatama' and Itachi's skills will steal health instead. This skill is invisible.",
      "descriptionBR": "Por 3 turnos, se a vida de Itachi cair para 35 ou menos, o Susanoo de Itachi irá evoluir para o próximo estágio, aprimorando suas habilidades pelos próximos 3 turnos. Durante esse tempo, esta habilidade será substituída por 'Yasaka Magatama' e as habilidades de Itachi irão roubar vida em vez disso. Essa habilidade é invisível.",
      "descriptionRaw": "For 3 turns, if Itachi's <Classes>health drops to 35 or less<Classes>, Itachi's Susanoo will <Improvements>evolve to the next stage<Improvements>, <Improvements>improving his skills<Improvements> for the following 3 turns. During this time, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Yasaka Magatama'<SkillName> and Itachi's skills will <Improvements>steal health instead<Improvements>. This skill is invisible.",
      "descriptionBRRaw": "Por 3 turnos, se a <Classes>vida de Itachi cair para 35 ou menos<Classes>, o Susanoo de Itachi irá <Improvements>evoluir para o próximo estágio<Improvements>, <Improvements>aprimorando suas habilidades<Improvements> pelos próximos 3 turnos. Durante esse tempo, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Yasaka Magatama'<SkillName> e as habilidades de Itachi irão <Improvements>roubar vida em vez disso<Improvements>. Essa habilidade é invisível.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "For 3 turns, if Itachi's health drops to 35 or less, Itachi's Susanoo will evolve to the next stage, improving his skills for the following 3 turns. During this time, this skill will be replaced by 'Yasaka Magatama' and Itachi's skills will steal health instead. This skill is invisible. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, se a vida de Itachi cair para 35 ou menos, o Susanoo de Itachi irá evoluir para o próximo estágio, aprimorando suas habilidades pelos próximos 3 turnos. Durante esse tempo, esta habilidade será substituída por 'Yasaka Magatama' e as habilidades de Itachi irão roubar vida em vez disso. Essa habilidade é invisível. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Yasaka Magatama",
      "file": "et_susanoo_itachi_(s)_skill_5_(yasaka_magatama).png",
      "description": "Itachi unleashes his strongest long-range technique, dealing 40 piercing damage to all enemies. This skill cannot be countered.",
      "descriptionBR": "Itachi libera sua técnica de longo alcance mais poderosa, causando 40 de dano perfurante a todos os inimigos. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Itachi unleashes his strongest long-range technique, <Damage>dealing 40 piercing damage<Damage> to all enemies. This skill <Classes>cannot be countered<Classes>.",
      "descriptionBRRaw": "Itachi libera sua técnica de longo alcance mais poderosa, <Damage>causando 40 de dano perfurante<Damage> a todos os inimigos. Esta habilidade <Classes>não pode ser counterada<Classes>.",
      "energy": [
        "Blood",
        "Blood",
        "Gen",
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 9,
      "ruleDescription": "Itachi unleashes his strongest long-range technique, dealing 40 piercing damage to all enemies. This skill cannot be countered. Chakra cost: 2 Blood, 2 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 9. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi libera sua técnica de longo alcance mais poderosa, causando 40 de dano perfurante a todos os inimigos. Esta habilidade não pode ser counterada. Custo de chakra: 2 linhagem sanguínea, 2 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 9. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

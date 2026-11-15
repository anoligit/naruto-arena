// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Fuuton Naruto (S)",
  "description": "During his training under Kakashi and Yamato, Naruto discovers his affinity for Wind Release. By using shadow clones to accelerate his progress, he learns to combine wind-nature chakra with the Rasengan and creates the devastating Rasenshuuriken.",
  "descriptionBR": "Durante seu treinamento com Kakashi e Yamato, Naruto descobre sua afinidade com o Estilo Vento. Usando clones das sombras para acelerar seu progresso, ele aprende a combinar chakra de natureza vento com o Rasengan e cria o devastador Rasenshuuriken.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "fuuton_naruto_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Fuuton: Rasengan",
      "file": "fuuton_naruto_(s)_skill_1_(fuuton_rasengan).png",
      "description": "Using the wind-style version of the Rasengan, Naruto deals 25 piercing damage to one enemy. During 'Mass Shadow Clones', this skill will apply once 'Wind Destruction' on all enemies.",
      "descriptionBR": "Usando a versão de Estilo Vento do Rasengan, Naruto causa 25 de dano perfurante a um inimigo. Durante 'Mass Shadow Clones', esta habilidade irá aplicar uma vez 'Wind Destruction' em todos os inimigos.",
      "descriptionRaw": "Using the wind-style version of the Rasengan, Naruto <Damage>deals 25 piercing damage<Damage> to one enemy. During <SkillName>'Mass Shadow Clones'<SkillName>, this skill will <Effects>apply<Effects> once <SkillName>'Wind Destruction'<SkillName> on all enemies.",
      "descriptionBRRaw": "Usando a versão de Estilo Vento do Rasengan, Naruto <Damage>causa 25 de dano perfurante<Damage> a um inimigo. Durante <SkillName>'Mass Shadow Clones'<SkillName>, esta habilidade irá <Effects>aplicar<Effects> uma vez <SkillName>'Wind Destruction'<SkillName> em todos os inimigos.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Using the wind-style version of the Rasengan, Naruto deals 25 piercing damage to one enemy. During 'Mass Shadow Clones', this skill will apply once 'Wind Destruction' on all enemies. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando a versão de Estilo Vento do Rasengan, Naruto causa 25 de dano perfurante a um inimigo. Durante 'Mass Shadow Clones', esta habilidade irá aplicar uma vez 'Wind Destruction' em todos os inimigos. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Fuuton: Rasenshuuriken",
      "file": "fuuton_naruto_(s)_skill_2_(fuuton_rasenshuuriken).png",
      "description": "Using his recently created clones, Naruto hurls an even more powerful Rasengan at one enemy, dealing 40 piercing damage to them. During 'Mass Shadow Clones', this skill will apply twice 'Wind Destruction' on all enemies.",
      "descriptionBR": "Usando seus clones recém-criados, Naruto lança um Rasengan ainda mais poderoso contra um inimigo, causando 40 de dano perfurante. Durante 'Mass Shadow Clones', esta habilidade irá aplicar duas vezes 'Wind Destruction' em todos os inimigos.",
      "descriptionRaw": "Using his recently created clones, Naruto hurls an even more powerful Rasengan at one enemy, <Damage>dealing 40 piercing damage<Damage> to them. During <SkillName>'Mass Shadow Clones'<SkillName>, this skill will <Effects>apply<Effects> twice <SkillName>'Wind Destruction'<SkillName> on all enemies.",
      "descriptionBRRaw": "Usando seus clones recém-criados, Naruto lança um Rasengan ainda mais poderoso contra um inimigo, <Damage>causando 40 de dano perfurante<Damage>. Durante <SkillName>'Mass Shadow Clones'<SkillName>, esta habilidade irá <Effects>aplicar<Effects> duas vezes <SkillName>'Wind Destruction'<SkillName> em todos os inimigos.",
      "energy": [
        "Nin",
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Using his recently created clones, Naruto hurls an even more powerful Rasengan at one enemy, dealing 40 piercing damage to them. During 'Mass Shadow Clones', this skill will apply twice 'Wind Destruction' on all enemies. Chakra cost: 1 Nin, 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seus clones recém-criados, Naruto lança um Rasengan ainda mais poderoso contra um inimigo, causando 40 de dano perfurante. Durante 'Mass Shadow Clones', esta habilidade irá aplicar duas vezes 'Wind Destruction' em todos os inimigos. Custo de chakra: 1 ninjutsu, 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mass Shadow Clones",
      "file": "fuuton_naruto_(s)_skill_3_(mass_shadow_clones).png",
      "description": "Naruto gains 5 clones, granting himself 10% unpierceable damage reduction for each clone. If a new non-affliction damage skill is used on Naruto, he will lose 1 clone. During this time, Naruto improves his skills and loses 2 clones whenever he uses one of them. This skill cannot be used while active.",
      "descriptionBR": "Naruto ganha 5 clones, concedendo a si mesmo 10% de redução de dano impenetrável para cada clone. Se uma nova habilidade de dano não affliction for usada em Naruto, ele perderá 1 clone. Durante esse tempo, Naruto melhora suas habilidades e perde 2 clones sempre que usar uma delas. Esta habilidade não pode ser usada enquanto estiver ativa.",
      "descriptionRaw": "Naruto gains <Defense>5 clones<Defense>, granting himself <Defense>10% unpierceable damage reduction<Defense> for each clone. If a <Classes>new non-affliction damage skill<Classes> is used on Naruto, he will lose 1 clone. During this time, Naruto <Improvements>improves his skills<Improvements> and loses 2 clones whenever he uses one of them. This skill cannot be used while active.",
      "descriptionBRRaw": "Naruto ganha <Defense>5 clones<Defense>, concedendo a si mesmo <Defense>10% de redução de dano impenetrável<Defense> para cada clone. Se uma <Classes>nova habilidade de dano não affliction<Classes> for usada em Naruto, ele perderá 1 clone. Durante esse tempo, Naruto <Improvements>melhora suas habilidades<Improvements> e perde 2 clones sempre que usar uma delas. Esta habilidade não pode ser usada enquanto estiver ativa.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto gains 5 clones, granting himself 10% unpierceable damage reduction for each clone. If a new non-affliction damage skill is used on Naruto, he will lose 1 clone. During this time, Naruto improves his skills and loses 2 clones whenever he uses one of them. This skill cannot be used while active. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto ganha 5 clones, concedendo a si mesmo 10% de redução de dano impenetrável para cada clone. Se uma nova habilidade de dano não affliction for usada em Naruto, ele perderá 1 clone. Durante esse tempo, Naruto melhora suas habilidades e perde 2 clones sempre que usar uma delas. Esta habilidade não pode ser usada enquanto estiver ativa. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kyuubi Insight",
      "file": "fuuton_naruto_(s)_skill_4_(kyuubi_insight).png",
      "description": "This skill makes Fuuton Naruto invulnerable for 1 turn.",
      "descriptionBR": "Esta habilidade deixa Fuuton Naruto invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Fuuton Naruto <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Esta habilidade deixa Fuuton Naruto <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Fuuton Naruto invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade deixa Fuuton Naruto invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Wind Destruction",
      "file": "fuuton_naruto_(s)_skill_5_(wind_destruction).png",
      "description": "For 1 turn, all enemies will deal 5 less non-affliction damage. The following turn, they will take 10 piercing damage.",
      "descriptionBR": "Por 1 turno, todos os inimigos irão causar 5 a menos de dano não affliction. No turno seguinte, eles irão receber 10 de dano perfurante.",
      "descriptionRaw": "For 1 turn, all enemies will <Effects>deal 5 less non-affliction damage<Effects>. The following turn, they will <Damage>take 10 piercing damage<Damage>.",
      "descriptionBRRaw": "Por 1 turno, todos os inimigos irão <Effects>causar 5 a menos de dano não affliction<Effects>. No turno seguinte, eles irão <Damage>receber 10 de dano perfurante<Damage>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "*Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "For 1 turn, all enemies will deal 5 less non-affliction damage. The following turn, they will take 10 piercing damage. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, *Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, todos os inimigos irão causar 5 a menos de dano não affliction. No turno seguinte, eles irão receber 10 de dano perfurante. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, *Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

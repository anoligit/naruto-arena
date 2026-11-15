// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yahiko (S)",
  "description": "The leader of the original Akatsuki and one of the three Rain Orphans mentored by Jiraiya, Yahiko was a dear friend of Nagato and Konan and a highly idealistic person. Striving for world peace, Yahiko established the Akatsuki, leading them through the war-torn reality of their time with a 'kill or be killed' philosophy.",
  "descriptionBR": "Líder da Akatsuki original e um dos três Órfãos da Chuva treinados por Jiraiya, Yahiko era um grande amigo de Nagato e Konan e uma pessoa extremamente idealista. Em busca da paz mundial, Yahiko fundou a Akatsuki e a liderou pela realidade devastada pela guerra de sua época com uma filosofia de 'matar ou morrer'.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yahiko_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Wild Rip Wave",
      "file": "yahiko_(s)_skill_1_(wild_rip_wave).png",
      "description": "Yahiko throws a wave, dealing 25 damage to all enemies. For 1 turn, Yahiko's team will heal 5 health and ignore affliction damage.",
      "descriptionBR": "Yahiko lança uma onda, causando 25 de dano a todos os inimigos. Por 1 turno, a equipe de Yahiko irá recuperar 5 de vida e ignorar dano affliction.",
      "descriptionRaw": "Yahiko throws a wave, <Damage>dealing 25 damage<Damage> to all enemies. For 1 turn, Yahiko's team will <Defense>heal 5 health<Defense> and <Defense>ignore affliction damage<Defense>.",
      "descriptionBRRaw": "Yahiko lança uma onda, <Damage>causando 25 de dano<Damage> a todos os inimigos. Por 1 turno, a equipe de Yahiko irá <Defense>recuperar 5 de vida<Defense> e <Defense>ignorar dano affliction<Defense>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Yahiko throws a wave, dealing 25 damage to all enemies. For 1 turn, Yahiko's team will heal 5 health and ignore affliction damage. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yahiko lança uma onda, causando 25 de dano a todos os inimigos. Por 1 turno, a equipe de Yahiko irá recuperar 5 de vida e ignorar dano affliction. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Water Pillar",
      "file": "yahiko_(s)_skill_2_(water_pillar).png",
      "description": "Yahiko targets one ally permanently. The first harmful skill used on that ally will be reflected to Yahiko. If successful, that ally will heal 20 health and gain 15 points of destructible defense. This skill is invisible and cannot be used on an already affected ally. This skill ends when Yahiko is killed.",
      "descriptionBR": "Yahiko marca permanentemente um aliado. A primeira habilidade ofensiva usada nesse aliado será refletida para Yahiko. Se isso acontecer, esse aliado irá recuperar 20 de vida e ganhar 15 pontos de defesa destrutível. Essa habilidade é invisível e não pode ser usada em um aliado já afetado. Essa habilidade termina quando Yahiko for morto.",
      "descriptionRaw": "Yahiko <Invisible>targets one ally permanently<Invisible>. The first harmful skill used on that ally will be <Effects>reflected to Yahiko<Effects>. If successful, that ally will <Defense>heal 20 health<Defense> and <Defense>gain 15 points of destructible defense<Defense>. This skill is <Invisible>invisible<Invisible> and <SkillText>cannot be used on an already affected ally<SkillText>. This skill ends when Yahiko is killed.",
      "descriptionBRRaw": "Yahiko <Invisible>marca permanentemente um aliado<Invisible>. A primeira habilidade ofensiva usada nesse aliado será <Effects>refletida para Yahiko<Effects>. Se isso acontecer, esse aliado irá <Defense>recuperar 20 de vida<Defense> e <Defense>ganhar 15 pontos de defesa destrutível<Defense>. Essa habilidade é <Invisible>invisível<Invisible> e <SkillText>não pode ser usada em um aliado já afetado<SkillText>. Essa habilidade termina quando Yahiko for morto.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Yahiko targets one ally permanently. The first harmful skill used on that ally will be reflected to Yahiko. If successful, that ally will heal 20 health and gain 15 points of destructible defense. This skill is invisible and cannot be used on an already affected ally. This skill ends when Yahiko is killed. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yahiko marca permanentemente um aliado. A primeira habilidade ofensiva usada nesse aliado será refletida para Yahiko. Se isso acontecer, esse aliado irá recuperar 20 de vida e ganhar 15 pontos de defesa destrutível. Essa habilidade é invisível e não pode ser usada em um aliado já afetado. Essa habilidade termina quando Yahiko for morto. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Final Command",
      "file": "yahiko_(s)_skill_3_(final_command).png",
      "description": "This skill can only be used when Yahiko has 25 health or less. Yahiko chooses one ally to execute him, killing himself instantly. Afterwards, that ally enters a bloodthirsty rage. For 2 turns, they will deal 15 additional damage, ignore stun effects, and gain 1 random chakra each turn.",
      "descriptionBR": "Essa habilidade só pode ser usada quando Yahiko tiver 25 de vida ou menos. Yahiko escolhe um aliado para executá-lo, matando a si mesmo instantaneamente. Depois disso, esse aliado entra em uma fúria sanguinária. Por 2 turnos, ele irá causar 15 de dano adicional, ignorar efeitos de atordoamento e ganhar 1 random chakra cada turno.",
      "descriptionRaw": "This skill <Classes>can only be used when Yahiko has 25 health or less<Classes>. Yahiko chooses one ally to execute him, <Damage>killing himself instantly<Damage>. Afterwards, that ally enters a bloodthirsty rage. For 2 turns, they will <Improvements>deal 15 additional damage<Improvements>, <Defense>ignore stun effects<Defense>, and <Effects>gain 1 random chakra<Effects> each turn.",
      "descriptionBRRaw": "Essa habilidade <Classes>só pode ser usada quando Yahiko tiver 25 de vida ou menos<Classes>. Yahiko escolhe um aliado para executá-lo, <Damage>matando a si mesmo instantaneamente<Damage>. Depois disso, esse aliado entra em uma fúria sanguinária. Por 2 turnos, ele irá <Improvements>causar 15 de dano adicional<Improvements>, <Defense>ignorar efeitos de atordoamento<Defense> e <Effects>ganhar 1 random chakra<Effects> cada turno.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": null,
      "ruleDescription": "This skill can only be used when Yahiko has 25 health or less. Yahiko chooses one ally to execute him, killing himself instantly. Afterwards, that ally enters a bloodthirsty rage. For 2 turns, they will deal 15 additional damage, ignore stun effects, and gain 1 random chakra each turn. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: None. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade só pode ser usada quando Yahiko tiver 25 de vida ou menos. Yahiko escolhe um aliado para executá-lo, matando a si mesmo instantaneamente. Depois disso, esse aliado entra em uma fúria sanguinária. Por 2 turnos, ele irá causar 15 de dano adicional, ignorar efeitos de atordoamento e ganhar 1 random chakra cada turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: None. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Squad Leader",
      "file": "yahiko_(s)_skill_4_(squad_leader).png",
      "description": "For 1 turn, all new harmful skills used on Yahiko's allies will be reflected back to him. During this time, Yahiko gains 15 points of unpierceable damage reduction and becomes immune to affliction damage.",
      "descriptionBR": "Por 1 turno, todas as novas habilidades ofensivas usadas nos aliados de Yahiko serão refletidas para ele. Durante esse tempo, Yahiko ganha 15 pontos de redução de dano impenetrável e se torna imune a dano affliction.",
      "descriptionRaw": "For 1 turn, all new harmful skills used on Yahiko's allies will be <Effects>reflected back to him<Effects>. During this time, Yahiko <Defense>gains 15 points of unpierceable damage reduction<Defense> and <Effects>becomes immune<Effects> to <Damage><Improvements>affliction damage<Improvements><Damage>.",
      "descriptionBRRaw": "Por 1 turno, todas as novas habilidades ofensivas usadas nos aliados de Yahiko serão <Effects>refletidas para ele<Effects>. Durante esse tempo, Yahiko <Defense>ganha 15 pontos de redução de dano impenetrável<Defense> e <Effects>se torna imune<Effects> a <Improvements>dano affliction<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "For 1 turn, all new harmful skills used on Yahiko's allies will be reflected back to him. During this time, Yahiko gains 15 points of unpierceable damage reduction and becomes immune to affliction damage. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, todas as novas habilidades ofensivas usadas nos aliados de Yahiko serão refletidas para ele. Durante esse tempo, Yahiko ganha 15 pontos de redução de dano impenetrável e se torna imune a dano affliction. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

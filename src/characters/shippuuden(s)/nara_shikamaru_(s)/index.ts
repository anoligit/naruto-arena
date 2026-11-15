// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nara Shikamaru (S)",
  "description": "Once known to be one of the laziest ninja, Shikamaru has worked tireless to become not only stronger, but a leader too. More than ever before, Shikamaru excels at coming up with long winded and convoluted plans meant to defeat any enemies in his path.",
  "descriptionBR": "Antes conhecido como um dos ninjas mais preguiçosos, Shikamaru trabalhou incansavelmente para se tornar não apenas mais forte, mas também um líder. Mais do que nunca, Shikamaru se destaca ao criar planos longos e complexos para derrotar qualquer inimigo em seu caminho.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "nara_shikamaru_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Shadow Sewing",
      "file": "nara_shikamaru_(s)_skill_1_(shadow_sewing).jpg",
      "description": "Shikamaru sends several tendrils of shadow to one enemy, dealing 35 damage to them and stunning their non-mental skills for 1 turn. Afterwards, this skill will be replaced by 'Shadow Sewing - Hold' for 1 turn.",
      "descriptionBR": "Shikamaru envia vários tentáculos de sombra para um inimigo, causando 35 de dano a ele e atordoando suas habilidades não mentais por 1 turno. Depois disso, esta habilidade será substituída por 'Shadow Sewing - Hold' por 1 turno.",
      "descriptionRaw": "Shikamaru sends several tendrils of shadow to one enemy, <Damage>dealing 35 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>non-mental skills<Classes> for 1 turn. Afterwards, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Shadow Sewing - Hold'<SkillName> for 1 turn.",
      "descriptionBRRaw": "Shikamaru envia vários tentáculos de sombra para um inimigo, <Damage>causando 35 de dano<Damage> a ele e <Effects>atordoando<Effects> suas <Classes>habilidades não mentais<Classes> por 1 turno. Depois disso, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Shadow Sewing - Hold'<SkillName> por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shikamaru sends several tendrils of shadow to one enemy, dealing 35 damage to them and stunning their non-mental skills for 1 turn. Afterwards, this skill will be replaced by 'Shadow Sewing - Hold' for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru envia vários tentáculos de sombra para um inimigo, causando 35 de dano a ele e atordoando suas habilidades não mentais por 1 turno. Depois disso, esta habilidade será substituída por 'Shadow Sewing - Hold' por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Long-Range Tactics",
      "file": "nara_shikamaru_(s)_skill_2_(long-range_tactics).jpg",
      "description": "Shikamaru goes long. For 4 turns, each time Shikamaru uses a new harmful skill, he will become invulnerable for 1 turn. If Shikamaru receives new non-affliction damage, this skill will be ignored for 1 turn. The following 4 turns, this skill will be replaced by 'Final Explosion'.",
      "descriptionBR": "Shikamaru vai de longe. Por 4 turnos, toda vez que Shikamaru  usar uma novahabilidade ofensiva, ele se tornará invulnerável por 1 turno. Se Shikamaru receber um novo dano não affliction , essa habilidade será ignorada por 1 turno. Nos 4 turnos seguintes, esta habilidade será substituída por 'Final Explosion'.",
      "descriptionRaw": "Shikamaru goes long. For 4 turns, each time Shikamaru <Classes>uses a new harmful skill<Classes>, he will become <Defense>invulnerable<Defense> for 1 turn. If Shikamaru receives new <Classes>non-affliction damage<Classes>, this skill will be <Defense>ignored<Defense> for 1 turn. The following 4 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Final Explosion'<SkillName>.",
      "descriptionBRRaw": "Shikamaru vai de longe. Por 4 turnos, toda vez que Shikamaru  <Classes>usar uma novahabilidade ofensiva<Classes>, ele se tornará <Defense>invulnerável<Defense> por 1 turno. Se Shikamaru receber um novo <Classes>dano não affliction <Classes>, essa habilidade será <Defense>ignorada<Defense> por 1 turno. Nos 4 turnos seguintes, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Final Explosion'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "Shikamaru goes long. For 4 turns, each time Shikamaru uses a new harmful skill, he will become invulnerable for 1 turn. If Shikamaru receives new non-affliction damage, this skill will be ignored for 1 turn. The following 4 turns, this skill will be replaced by 'Final Explosion'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru vai de longe. Por 4 turnos, toda vez que Shikamaru  usar uma novahabilidade ofensiva, ele se tornará invulnerável por 1 turno. Se Shikamaru receber um novo dano não affliction , essa habilidade será ignorada por 1 turno. Nos 4 turnos seguintes, esta habilidade será substituída por 'Final Explosion'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Expert Analysis",
      "file": "nara_shikamaru_(s)_skill_3_(expert_analysis).jpg",
      "description": "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy uses a new skill that enemy will be unable to become invulnerable or reduce damage and all helpful counter and reflect effects on them will be ignored for 1 turn. This skill is invisible",
      "descriptionBR": "Ao analisar cuidadosamente um inimigo, Shikamaru descobre sua fraqueza. Por 3 turnos, sempre que esse inimigo usar uma nova habilidade, ele não poderá se tornar invulnerável ou reduzir dano, e todos os efeitos defensivos de counterar e refletir nele serão ignorados por 1 turno. Esta habilidade é invisível",
      "descriptionRaw": "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy <Classes>uses a new skill<Classes> that enemy will be unable to become <Defense>invulnerable<Defense> or <Defense>reduce damage<Defense> and all <Classes>helpful counter<Classes> and <Classes>reflect<Classes> effects on them will be <Defense>ignored<Defense> for 1 turn. This skill is <Invisible>invisible<Invisible>",
      "descriptionBRRaw": "Ao analisar cuidadosamente um inimigo, Shikamaru descobre sua fraqueza. Por 3 turnos, sempre que esse inimigo <Classes>usar uma nova habilidade<Classes>, ele não poderá se tornar <Defense>invulnerável<Defense> ou <Defense>reduzir dano<Defense>, e todos os efeitos defensivos de <Classes>counterar<Classes> e <Classes>refletir<Classes> nele serão <Defense>ignorados<Defense> por 1 turno. Esta habilidade é <Invisible>invisível<Invisible>",
      "energy": [],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy uses a new skill that enemy will be unable to become invulnerable or reduce damage and all helpful counter and reflect effects on them will be ignored for 1 turn. This skill is invisible Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao analisar cuidadosamente um inimigo, Shikamaru descobre sua fraqueza. Por 3 turnos, sempre que esse inimigo usar uma nova habilidade, ele não poderá se tornar invulnerável ou reduzir dano, e todos os efeitos defensivos de counterar e refletir nele serão ignorados por 1 turno. Esta habilidade é invisível Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Panicked Dodge",
      "file": "nara_shikamaru_(s)_skill_4_(panicked_dodge).jpg",
      "description": "This skill makes Nara Shikamaru (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Nara Shikamaru (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Nara Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Nara Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Nara Shikamaru (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Nara Shikamaru (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Shadow Sewing - Hold",
      "file": "nara_shikamaru_(s)_skill_5_(shadow_sewing_-_hold).jpeg",
      "description": "Shikamaru continues to maintain his technique, stunning the non-mental skills of the enemy affected by 'Shadow Sewing' or this skill for 1 turn and dealing 20 damage to them. After that, this skill remains active on the enemy.",
      "descriptionBR": "Shikamaru continua mantendo sua técnica, atordoando as habilidades não mentais do inimigo afetado por 'Shadow Sewing' ou por esta habilidade por 1 turno e causando 20 de dano a ele. Depois disso, esta habilidade permanece ativa no inimigo.",
      "descriptionRaw": "Shikamaru continues to maintain his technique, <Effects>stunning<Effects> the <Classes>non-mental skills<Classes> of the enemy affected by <SkillName>'Shadow Sewing'<SkillName> or this skill for 1 turn and <Damage>dealing 20 damage<Damage> to them. After that, this skill remains active on the enemy.",
      "descriptionBRRaw": "Shikamaru continua mantendo sua técnica, <Effects>atordoando<Effects> as <Classes>habilidades não mentais<Classes> do inimigo afetado por <SkillName>'Shadow Sewing'<SkillName> ou por esta habilidade por 1 turno e <Damage>causando 20 de dano<Damage> a ele. Depois disso, esta habilidade permanece ativa no inimigo.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Shikamaru continues to maintain his technique, stunning the non-mental skills of the enemy affected by 'Shadow Sewing' or this skill for 1 turn and dealing 20 damage to them. After that, this skill remains active on the enemy. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikamaru continua mantendo sua técnica, atordoando as habilidades não mentais do inimigo afetado por 'Shadow Sewing' ou por esta habilidade por 1 turno e causando 20 de dano a ele. Depois disso, esta habilidade permanece ativa no inimigo. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Final Explosion",
      "file": "nara_shikamaru_(s)_skill_6_(final_explosion).jpeg",
      "description": "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by 'Shadow Sewing' or 'Shadow Sewing - Hold' and 'Expert Analysis' while Shikamaru is invulnerable through 'Long-Range Tactics' will receive 100 damage.",
      "descriptionBR": "Usando sua técnica de sombra, sua análise e seu alcance, Shikamaru prende um inimigo em uma armadilha e o explode. Um inimigo afetado por 'Shadow Sewing' ou 'Shadow Sewing - Hold' e 'Expert Analysis', enquanto Shikamaru estiver invulnerável por 'Long-Range Tactics', receberá 100 de dano.",
      "descriptionRaw": "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by <SkillName>'Shadow Sewing'<SkillName> or <SkillName>'Shadow Sewing - Hold'<SkillName> and <SkillName>'Expert Analysis'<SkillName> while Shikamaru is <Defense>invulnerable<Defense> through <SkillName>'Long-Range Tactics'<SkillName> will <Damage>receive 100 damage<Damage>.",
      "descriptionBRRaw": "Usando sua técnica de sombra, sua análise e seu alcance, Shikamaru prende um inimigo em uma armadilha e o explode. Um inimigo afetado por <SkillName>'Shadow Sewing'<SkillName> ou <SkillName>'Shadow Sewing - Hold'<SkillName> e <SkillName>'Expert Analysis'<SkillName>, enquanto Shikamaru estiver <Defense>invulnerável<Defense> por <SkillName>'Long-Range Tactics'<SkillName>, <Damage>receberá 100 de dano<Damage>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by 'Shadow Sewing' or 'Shadow Sewing - Hold' and 'Expert Analysis' while Shikamaru is invulnerable through 'Long-Range Tactics' will receive 100 damage. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando sua técnica de sombra, sua análise e seu alcance, Shikamaru prende um inimigo em uma armadilha e o explode. Um inimigo afetado por 'Shadow Sewing' ou 'Shadow Sewing - Hold' e 'Expert Analysis', enquanto Shikamaru estiver invulnerável por 'Long-Range Tactics', receberá 100 de dano. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

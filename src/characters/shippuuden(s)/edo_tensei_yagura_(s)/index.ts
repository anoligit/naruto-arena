// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Yagura (S)",
  "description": "Resurrected through Edo Tensei, Yagura retains perfect control over the Three-Tails' power. His Water Mirror techniques allow him to capture, store, and return enemy techniques with deadly precision, turning an opponent’s own strength against them while remaining nearly untouchable.",
  "descriptionBR": "Ressuscitado por meio do Edo Tensei, Yagura mantém controle perfeito sobre o poder do Três-Caudas. Suas técnicas de Espelho de Água permitem que ele capture, armazene e devolva técnicas inimigas com precisão mortal, usando a força do próprio oponente contra ele enquanto permanece quase intocável.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_yagura_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Water Mirror",
      "file": "edo_tensei_yagura_(s)_skill_1_(water_mirror).png",
      "description": "Yagura targets an enemy for 3 turns. If that enemy uses a new harmful skill, that skill will be permanently stored by 'Water Mirror' and they will deal 5 less non-affliction damage for 1 turn. This skill is invisible, ignores invulnerability, and cannot be used on the same target.",
      "descriptionBR": "Yagura marca um inimigo por 3 turnos. Se esse inimigo usar uma nova habilidade ofensiva, essa habilidade será armazenada permanentemente por 'Water Mirror' e ele irá causar 5 de dano não-affliction a menos por 1 turno. Essa habilidade é invisível, ignora invulnerabilidade e não pode ser usada no mesmo alvo.",
      "descriptionRaw": "Yagura targets an enemy for 3 turns. If that enemy uses a new <Classes>harmful skill<Classes>, that skill will be <Effects>permanently stored<Effects> by <SkillName>'Water Mirror'<SkillName> and they will <Effects>deal 5 less non-affliction damage<Effects> for 1 turn. This skill is <Invisible>invisible<Invisible>, <Defense>ignores invulnerability<Defense>, and <Effects>cannot be used on the same target<Effects>.",
      "descriptionBRRaw": "Yagura marca um inimigo por 3 turnos. Se esse inimigo usar uma nova <Classes>habilidade ofensiva<Classes>, essa habilidade será <Effects>armazenada permanentemente<Effects> por <SkillName>'Water Mirror'<SkillName> e ele irá <Effects>causar 5 de dano não-affliction a menos<Effects> por 1 turno. Essa habilidade é <Invisible>invisível<Invisible>, <Defense>ignora invulnerabilidade<Defense> e <Effects>não pode ser usada no mesmo alvo<Effects>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Yagura targets an enemy for 3 turns. If that enemy uses a new harmful skill, that skill will be permanently stored by 'Water Mirror' and they will deal 5 less non-affliction damage for 1 turn. This skill is invisible, ignores invulnerability, and cannot be used on the same target. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yagura marca um inimigo por 3 turnos. Se esse inimigo usar uma nova habilidade ofensiva, essa habilidade será armazenada permanentemente por 'Water Mirror' e ele irá causar 5 de dano não-affliction a menos por 1 turno. Essa habilidade é invisível, ignora invulnerabilidade e não pode ser usada no mesmo alvo. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Hook Staff Tilt",
      "file": "edo_tensei_yagura_(s)_skill_2_(hook_staff_tilt).png",
      "description": "Yagura casts a random skill stored by 'Water Mirror' on an enemy. The stored skill is removed. This skill may only be used if 'Water Mirror' has at least one skill stored.",
      "descriptionBR": "Yagura conjura uma habilidade aleatória armazenada por 'Water Mirror' em um inimigo. A habilidade armazenada é removida. Essa habilidade só pode ser usada se 'Water Mirror' tiver pelo menos uma habilidade armazenada.",
      "descriptionRaw": "Yagura casts a random skill stored by <SkillName>'Water Mirror'<SkillName> on an enemy. The stored skill is <Effects>removed<Effects>. This skill <Effects>may only be used<Effects> if <SkillName>'Water Mirror'<SkillName> has at least one skill stored.",
      "descriptionBRRaw": "Yagura conjura uma habilidade aleatória armazenada por <SkillName>'Water Mirror'<SkillName> em um inimigo. A habilidade armazenada é <Effects>removida<Effects>. Essa habilidade <Effects>só pode ser usada<Effects> se <SkillName>'Water Mirror'<SkillName> tiver pelo menos uma habilidade armazenada.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Yagura casts a random skill stored by 'Water Mirror' on an enemy. The stored skill is removed. This skill may only be used if 'Water Mirror' has at least one skill stored. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yagura conjura uma habilidade aleatória armazenada por 'Water Mirror' em um inimigo. A habilidade armazenada é removida. Essa habilidade só pode ser usada se 'Water Mirror' tiver pelo menos uma habilidade armazenada. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mirror Image",
      "file": "edo_tensei_yagura_(s)_skill_3_(mirror_image).png",
      "description": "Yagura uses Mirror Image on an enemy, dealing 30 damage to them. For 1 turn, they will deal 5 less non-affliction damage and a random harmful skill from that enemy will be stored by 'Water Mirror'. The following turn, 'Hook Staff Tilt' will cast 2 random skills stored by 'Water Mirror' at once.",
      "descriptionBR": "Yagura usa Mirror Image em um inimigo, causando 30 de dano a ele. Por 1 turno, ele irá causar 5 de dano não-affliction a menos e uma habilidade ofensiva aleatória desse inimigo será armazenada por 'Water Mirror'. No próximo turno, 'Hook Staff Tilt' irá conjurar 2 habilidades aleatórias armazenadas por 'Water Mirror' ao mesmo tempo.",
      "descriptionRaw": "Yagura uses Mirror Image on an enemy, <Damage>dealing 30 damage<Damage> to them. For 1 turn, they will <Effects>deal 5 less non-affliction damage<Effects> and a random <Classes>harmful skill<Classes> from that enemy will be <Effects>stored<Effects> by <SkillName>'Water Mirror'<SkillName>. The following turn, <SkillName>'Hook Staff Tilt'<SkillName> will <Improvements>cast 2 random skills<Improvements> stored by <SkillName>'Water Mirror'<SkillName> at once.",
      "descriptionBRRaw": "Yagura usa Mirror Image em um inimigo, <Damage>causando 30 de dano<Damage> a ele. Por 1 turno, ele irá <Effects>causar 5 de dano não-affliction a menos<Effects> e uma <Classes>habilidade ofensiva<Classes> aleatória desse inimigo será <Effects>armazenada<Effects> por <SkillName>'Water Mirror'<SkillName>. No próximo turno, <SkillName>'Hook Staff Tilt'<SkillName> irá <Improvements>conjurar 2 habilidades aleatórias<Improvements> armazenadas por <SkillName>'Water Mirror'<SkillName> ao mesmo tempo.",
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
      "ruleDescription": "Yagura uses Mirror Image on an enemy, dealing 30 damage to them. For 1 turn, they will deal 5 less non-affliction damage and a random harmful skill from that enemy will be stored by 'Water Mirror'. The following turn, 'Hook Staff Tilt' will cast 2 random skills stored by 'Water Mirror' at once. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yagura usa Mirror Image em um inimigo, causando 30 de dano a ele. Por 1 turno, ele irá causar 5 de dano não-affliction a menos e uma habilidade ofensiva aleatória desse inimigo será armazenada por 'Water Mirror'. No próximo turno, 'Hook Staff Tilt' irá conjurar 2 habilidades aleatórias armazenadas por 'Water Mirror' ao mesmo tempo. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Yagura Partial Tailed Beast Mode",
      "file": "edo_tensei_yagura_(s)_skill_4_(yagura_partial_tailed_beast_mode).png",
      "description": "This skill makes Edo Tensei Yagura (S) invulnerable for 1 turn. The following turn, 'Hook Staff Tilt' will be improved and cost 1 random chakra instead.",
      "descriptionBR": "Essa habilidade torna Edo Tensei Yagura (S) invulnerável por 1 turno. No próximo turno, 'Hook Staff Tilt' será aprimorada e irá custar 1 chakra aleatório.",
      "descriptionRaw": "This skill makes Edo Tensei Yagura (S) <Defense>invulnerable<Defense> for 1 turn. The following turn, <SkillName>'Hook Staff Tilt'<SkillName> will be <Improvements>improved and cost 1 random chakra instead<Improvements>.",
      "descriptionBRRaw": "Essa habilidade torna Edo Tensei Yagura (S) <Defense>invulnerável<Defense> por 1 turno. No próximo turno, <SkillName>'Hook Staff Tilt'<SkillName> será <Improvements>aprimorada e irá custar 1 chakra aleatório<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 5,
      "ruleDescription": "This skill makes Edo Tensei Yagura (S) invulnerable for 1 turn. The following turn, 'Hook Staff Tilt' will be improved and cost 1 random chakra instead. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Edo Tensei Yagura (S) invulnerável por 1 turno. No próximo turno, 'Hook Staff Tilt' será aprimorada e irá custar 1 chakra aleatório. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Reflective Mirror",
      "file": "edo_tensei_yagura_(s)_skill_5_(reflective_mirror).png",
      "description": "This skill will be activated every time Yagura uses 'Hook Staff Tilt' or 'Mirror Image'. For 1 turn, Yagura will ignore the first harmful physical or chakra skill used on him. If successfully triggered, the ignored skill will be stored by 'Water Mirror'. This skill will be disabled for 2 turns when activated.",
      "descriptionBR": "Essa habilidade será ativada sempre que Yagura usar 'Hook Staff Tilt' ou 'Mirror Image'. Por 1 turno, Yagura irá ignorar a primeira habilidade ofensiva física ou de chakra usada contra ele. Se ativada com sucesso, a habilidade ignorada será armazenada por 'Water Mirror'. Essa habilidade ficará desativada por 2 turnos quando for ativada.",
      "descriptionRaw": "This skill will be activated every time Yagura uses <SkillName>'Hook Staff Tilt'<SkillName> or <SkillName>'Mirror Image'<SkillName>. For 1 turn, Yagura will <Defense>ignore<Defense> the first <Classes>harmful physical or chakra skill<Classes> used on him. If successfully triggered, the ignored skill will be <Effects>stored<Effects> by <SkillName>'Water Mirror'<SkillName>. This skill will be <Effects>disabled for 2 turns<Effects> when activated.",
      "descriptionBRRaw": "Essa habilidade será ativada sempre que Yagura usar <SkillName>'Hook Staff Tilt'<SkillName> ou <SkillName>'Mirror Image'<SkillName>. Por 1 turno, Yagura irá <Defense>ignorar<Defense> a primeira <Classes>habilidade ofensiva física ou de chakra<Classes> usada contra ele. Se ativada com sucesso, a habilidade ignorada será <Effects>armazenada<Effects> por <SkillName>'Water Mirror'<SkillName>. Essa habilidade ficará <Effects>desativada por 2 turnos<Effects> quando for ativada.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill will be activated every time Yagura uses 'Hook Staff Tilt' or 'Mirror Image'. For 1 turn, Yagura will ignore the first harmful physical or chakra skill used on him. If successfully triggered, the ignored skill will be stored by 'Water Mirror'. This skill will be disabled for 2 turns when activated. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade será ativada sempre que Yagura usar 'Hook Staff Tilt' ou 'Mirror Image'. Por 1 turno, Yagura irá ignorar a primeira habilidade ofensiva física ou de chakra usada contra ele. Se ativada com sucesso, a habilidade ignorada será armazenada por 'Water Mirror'. Essa habilidade ficará desativada por 2 turnos quando for ativada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

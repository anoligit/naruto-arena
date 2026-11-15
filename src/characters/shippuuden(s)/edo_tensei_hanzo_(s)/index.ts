// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Hanzo (S)",
  "description": "Edo Tensei Hanzo (S) has been summoned back from the dead in the middle of a battlefield and he is not happy about it. Edo Hanzo (S) will engage anyone that crosses his path as he did when he was alive.",
  "descriptionBR": "Edo Tensei Hanzo (S) foi invocado de volta dos mortos no meio de um campo de batalha e não está nada feliz com isso. Ele enfrentará qualquer um que cruzar seu caminho, como fazia em vida.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_hanzo_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Poison Sickle",
      "file": "edo_tensei_hanzo_(s)_skill_1_(poison_sickle).jpeg",
      "description": "Hanzo deals 10 physical damage and 10 affliction damage to one enemy. For 1 turn, if that enemy uses a new harmful skill, they take 10 damage.",
      "descriptionBR": "Hanzo causa 10 de dano normal e 10 de dano affliction a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ele irá receber 10 de dano.",
      "descriptionRaw": "Hanzo <Damage>deals 10 physical damage<Damage> and <Damage>10 affliction damage<Damage> to one enemy. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes>, they <Damage>take 10 damage<Damage>.",
      "descriptionBRRaw": "Hanzo <Damage>causa 10 de dano normal<Damage> e <Damage>10 de dano affliction<Damage> a um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ele irá <Damage>receber 10 de dano<Damage>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Hanzo deals 10 physical damage and 10 affliction damage to one enemy. For 1 turn, if that enemy uses a new harmful skill, they take 10 damage. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hanzo causa 10 de dano normal e 10 de dano affliction a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ele irá receber 10 de dano. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Salamander Swallow",
      "file": "edo_tensei_hanzo_(s)_skill_2_(salamander_swallow).jpeg",
      "description": "Hanzo targets one enemy for 1 turn. The next harmful non-mental skill used by that enemy will have its non-damage effects nullified and the duration of the skill reduced by 1 turn. If triggered, the target takes 20 affliction damage. This skill is invisible.",
      "descriptionBR": "Hanzo mira em um inimigo por 1 turno. A próxima habilidade não mental ofensiva usada por esse inimigo terá seus efeitos não-danosos anulados e sua duração reduzida em 1 turno. Se for ativada, o alvo receberá 20 de dano por aflição. Esta habilidade é invisível.",
      "descriptionRaw": "Hanzo targets one enemy for 1 turn. The next <Classes>harmful non-mental skill<Classes> used by that enemy will have its <Effects>non-damage effects nullified<Effects> and the duration of the <Effects>skill reduced<Effects> by 1 turn. If triggered, the target <Damage>takes 20 affliction damage<Damage>. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Hanzo mira em um inimigo por 1 turno. A próxima <Classes>habilidade não mental ofensiva<Classes> usada por esse inimigo terá seus <Effects>efeitos não-danosos anulados<Effects> e sua <Effects>duração reduzida<Effects> em 1 turno. Se for ativada, o alvo <Damage>receberá 20 de dano por aflição<Damage>. <Invisible>Esta habilidade é invisível<Invisible>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Hanzo targets one enemy for 1 turn. The next harmful non-mental skill used by that enemy will have its non-damage effects nullified and the duration of the skill reduced by 1 turn. If triggered, the target takes 20 affliction damage. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hanzo mira em um inimigo por 1 turno. A próxima habilidade não mental ofensiva usada por esse inimigo terá seus efeitos não-danosos anulados e sua duração reduzida em 1 turno. Se for ativada, o alvo receberá 20 de dano por aflição. Esta habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Venom Sac",
      "file": "edo_tensei_hanzo_(s)_skill_3_(venom_sac).png",
      "description": "For 1 turn, Hanzo gains 50% unpierceable damage reduction and ignores affliction damage. During this time, any enemy that uses a new skill on him will be *dealt 5 affliction damage for 3 turns. This skill is invisible until first triggered.",
      "descriptionBR": "Por 1 turno, Hanzo recebe 50% de redução de dano impenetravel e ignora dano por aflição. Durante esse tempo, qualquer inimigo que usar uma nova habilidade nele sofrerá 5 de dano por aflição durante 3 turnos. Esta habilidade é invisível até ser ativada pela primeira vez.",
      "descriptionRaw": "For 1 turn, Hanzo gains 50% <Defense>unpierceable damage reduction<Defense> and <Defense>ignores affliction damage<Defense>. During this time, any enemy that <Classes>uses a new skill on him<Classes> will be *<Damage>dealt 5 affliction damage<Damage> for 3 turns. <Invisible>This skill is invisible<Invisible> until first <Effects>triggered<Effects>.",
      "descriptionBRRaw": "Por 1 turno, Hanzo recebe 50% de <Defense>redução de dano impenetravel<Defense> e <Defense>ignora dano por aflição<Defense>. Durante esse tempo, qualquer inimigo que <Classes>usar uma nova habilidade nele<Classes> <Damage>sofrerá 5 de dano por aflição<Damage> durante 3 turnos. <Invisible>Esta habilidade é invisível<Invisible> até ser <Effects>ativada<Effects> pela primeira vez.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "*Affliction",
        "$_1",
        "$_2"
      ],
      "cooldown": 3,
      "ruleDescription": "For 1 turn, Hanzo gains 50% unpierceable damage reduction and ignores affliction damage. During this time, any enemy that uses a new skill on him will be *dealt 5 affliction damage for 3 turns. This skill is invisible until first triggered. Chakra cost: 1 Random. Catalog classes: Physical, Instant, *Affliction, $_1, $_2. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, Hanzo recebe 50% de redução de dano impenetravel e ignora dano por aflição. Durante esse tempo, qualquer inimigo que usar uma nova habilidade nele sofrerá 5 de dano por aflição durante 3 turnos. Esta habilidade é invisível até ser ativada pela primeira vez. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, *Affliction, $_1, $_2. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Ibuse Guard",
      "file": "edo_tensei_hanzo_(s)_skill_4_(ibuse_guard).jpeg",
      "description": "This skill makes Hanzo invulnerable for 1 turn.",
      "descriptionBR": "Esta habilidade torna Hanzo invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hanzo <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Esta habilidade torna Hanzo <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hanzo invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Esta habilidade torna Hanzo invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: Contaminated Battlefield",
      "file": "edo_tensei_hanzo_(s)_skill_5_(passive_contaminated_battlefield).png",
      "description": "At the start of the game, the battlefield becomes Toxic for all characters until Hanzo dies. While Toxic is active: Healing effects and destructible defense will be ignored by all characters. Any character that becomes invulnerable takes 3 permanent affliction damage. This passive cannot be ignored",
      "descriptionBR": "No início da partida, o campo de batalha se torna Tóxico para todos os personagens até que Hanzo morra. Enquanto Tóxico estiver ativo: Efeitos de cura e defesa destrutível serão ignorados por todos os personagens. Qualquer personagem que se torne invulnerável receberá 3 de dano affliction permanente. This passive cannot be ignored",
      "descriptionRaw": "At the start of the game, the battlefield becomes Toxic for all characters until Hanzo <Classes>dies<Classes>. While Toxic is active: <br><Defense>Healing effects<Defense> and <Defense>destructible defense<Defense> will be <Defense>ignored<Defense> by all characters. <br>Any character that becomes <Defense>invulnerable<Defense> takes <Damage>3 permanent affliction damage<Damage>. This passive cannot be <Classes>ignored<Classes>",
      "descriptionBRRaw": "No início da partida, o campo de batalha se torna Tóxico para todos os personagens até que Hanzo <Classes>morra<Classes>. Enquanto Tóxico estiver ativo: <br><Defense>Efeitos de cura<Defense> e <Defense>defesa destrutível<Defense> serão <Defense>ignorados<Defense> por todos os personagens. <br>Qualquer personagem que se torne <Defense>invulnerável<Defense> receberá <Damage>3 de dano affliction permanente<Damage>. This passive cannot be <Classes>ignored<Classes>",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "At the start of the game, the battlefield becomes Toxic for all characters until Hanzo dies. While Toxic is active: Healing effects and destructible defense will be ignored by all characters. Any character that becomes invulnerable takes 3 permanent affliction damage. This passive cannot be ignored Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "No início da partida, o campo de batalha se torna Tóxico para todos os personagens até que Hanzo morra. Enquanto Tóxico estiver ativo: Efeitos de cura e defesa destrutível serão ignorados por todos os personagens. Qualquer personagem que se torne invulnerável receberá 3 de dano affliction permanente. This passive cannot be ignored Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;

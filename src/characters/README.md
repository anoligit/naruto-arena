# Criar e editar personagens

Cada personagem possui uma pasta com `index.ts` e `images/`. O arquivo do Zabuza é um exemplo completo. Os personagens seguem a mesma organização.

## Ordem do arquivo

1. Imports das imagens.
2. `characterId` e `characterInfo`: nome, retrato, história e requisito de desbloqueio.
3. Um bloco para cada habilidade: parâmetros numéricos, `skill` e seus `statuses` persistentes.
4. `defineCharacter`: posição no catálogo e lista ordenada de habilidades.

`skill` contém nome, imagem, descrição, energia, cooldown, alvo, classes e efeitos imediatos. `statuses` contém os efeitos que duram turnos. A lista global de efeitos é criada automaticamente a partir desses blocos. Não cadastre os efeitos novamente em outro arquivo.

## Onde mudar cada coisa

| Alteração | Campo |
| --- | --- |
| Dano, cura, duração e redução | Constantes imediatamente acima da habilidade. Os mesmos valores alimentam o combate e as descrições. |
| Energia específica | `skill.cost.specific`, por exemplo `{ taijutsu: 1 }`. |
| Energia escolhida ao confirmar | `skill.cost.random`. |
| Recarga | `skill.cooldown`. Zero significa sem recarga. |
| Classes da habilidade | `skill.classes`. |
| Classes bloqueadas por stun | `statuses[].modifiers` com `type: 'stun'`. |
| Duração do efeito | `statuses[].duration`; não é o cooldown. |
| Alvo | `skill.target`: `self`, `enemy`, `ally` ou `self-or-enemy` (o usuário ou um inimigo). |
| Todos os inimigos vulneráveis | `skill.targetExpansion`. Veja Haku e Zabuza. |
| Melhoria durante um efeito | `skill.enhancement`. Veja Silent Homicide Technique. |
| Requisito de uma habilidade | `skill.requirements`; por exemplo, Rasengan exige Clones. |
| Requisito do personagem | `characterInfo.unlockRequirement`. |
| História e nome | `characterInfo`. |
| Ordem na seleção | `order` no registro final. |

Algumas habilidades referenciam valores de outra habilidade: Clones melhora Combo, por exemplo. Esses números são declarados uma vez, antes do primeiro uso; não crie uma segunda cópia para a descrição.

Nomes, imagens e descrições das habilidades têm uma única origem: `skill`. A seleção, os indicadores e a batalha consultam esse cadastro.

## Adicionar um personagem

1. Copie a pasta de um personagem com mecânicas parecidas.
2. Mude `characterId` para um identificador exclusivo. Os IDs locais usam esse prefixo.
3. Substitua os imports e os arquivos em `images/`.
4. Edite `characterInfo` e os blocos de habilidades, incluindo os efeitos persistentes.
5. Confira a lista `abilities` e escolha `order` no final.
6. Salve e inicie uma batalha nova. Execute `npm test`, `npm run lint` e `npm run build`.

O registro encontra automaticamente `src/characters/*/index.ts`; pastas com espaços são aceitas. Não edite listas manuais. Habilidades alternativas, como Chidori, entram em `abilities` com `replacement`; não ocupam um quinto slot na seleção.

Se IDs de personagem, habilidade ou efeito forem repetidos, o cadastro problemático é ignorado e um aviso explica o motivo. Mecânicas realmente novas precisam de suporte em `game/` antes de poderem ser declaradas no personagem.

## Missões e desbloqueio

Sem requisito:

```ts
unlockRequirement: { type: 'none' }
```

Com missão:

```ts
unlockRequirement: { type: 'mission', missionId: 'team-7-fights-as-a-team' }
```

As missões são cadastradas em `src/missions/index.ts`. Altere o nome ali; os personagens referenciam apenas seu ID. Para criar outra missão, adicione uma entrada e use seu ID no personagem. Os IDs válidos são verificados pelo TypeScript.

Neste protótipo, o requisito é informação exibida na seleção. Ainda não há objetivos, progresso por jogador, verificação de conclusão ou bloqueio de personagens. O sistema de missões deverá implementar essas regras sem duplicar o cadastro.

## Verificação após balanceamento

`npm test` verifica combate, energia, registro e indicadores. Os testes dos personagens também conferem valores de referência: ao fazer um balanceamento intencional, atualize a expectativa correspondente no teste. Um erro de digitação em um valor deve continuar sendo detectado.

Descrições numéricas usam as constantes. Mudanças no comportamento exigem também revisar a explicação em português. Use uma batalha nova após editar efeitos; uma partida aberta guarda efeitos criados anteriormente. A publicação exige uma nova compilação.

## Ativação e destinatários

`target` define onde o jogador pode clicar para atribuir a ação. Para névoa do Zabuza, `self-or-enemy` permite ativar nele ou em um inimigo vivo e vulnerável, sem permitir outro aliado.

O efeito persistente usa `recipient: 'user'` para continuar no Zabuza, mesmo quando a ativação foi feita clicando em um inimigo. A aura de custo adicional afeta a equipe inimiga inteira enquanto esse efeito estiver ativo, como antes. Mudar o alvo clicável não transfere a proteção para o inimigo.

Os indicadores planejados mostram os destinatários dos efeitos, incluindo usuário e inimigos afetados pela aura. A ação continua sendo única: cancelar libera a reserva inteira; confirmar cobra uma vez.

## Marcas, efeitos Action e dano contínuo

O Shikamaru demonstra regras reutilizáveis sem IDs especiais no motor:

- `skill.targetMustLackStatus`: impede atribuir a habilidade a quem já tem aquela marca.
- `skill.cannotBeCountered`: impede a interceptação pela reflexão.
- `apply-status.durationBonus`: soma turnos se o destinatário possui `whenTargetHasStatus`. Com `fromSourceOnly: true`, só considera a marca aplicada pelo mesmo personagem.
- `statuses[].action: true`: suspende os modificadores se a origem estiver stunada para a habilidade ou o alvo estiver invulnerável a ela. O efeito continua contando duração e pode voltar a atuar; Control, por outro lado, termina ao ser interrompido.
- `periodic-damage`: repete o dano no final dos turnos seguintes da origem, sem novo custo ou recarga. O primeiro dano é declarado como efeito imediato da habilidade. O timeout também processa a repetição.
- `prevent-damage-reduction`: impede reduções fixas e percentuais aplicadas depois dele. Preserva as anteriores e os outros benefícios do status que concede a redução.

A duração estendida é registrada por destinatário na expiração da aplicação; não se modifica o cadastro global. O indicador consulta essa expiração, inclusive quando só parte de uma habilidade em área foi prolongada.

## Roubo, defesa destrutível e counters de uma utilização

Shino e Zaku mostram os seguintes dados reutilizáveis:

- `steal-health`: dano affliction cuja vida efetivamente retirada é devolvida ao usuário, limitada pela vida máxima; não revive.
- `steal-energy`: transfere até `amount` energias dos tipos de `types` que estiverem disponíveis na equipe do alvo. Sem saldo elegível, não transfere nem cria energia.
- `gain-energy`: concede energia de tipo aleatório à equipe do usuário, uma vez por habilidade, inclusive em área.
- `targetExpansion: { target: 'all-living-allies' }`: a habilidade alcança todos os aliados vivos.
- `destructible-defense`: reserva consumível contra dano normal e piercing; affliction passa. O saldo de cada aplicação fica em `shieldRemaining` e o indicador mostra o valor restante.
- `duration: { type: 'permanent', turns: 0 }`: não expira pela passagem de turnos. Defesa com saldo zero é removida.
- `counter-first-harmful`: consome o status ao interceptar a primeira habilidade ofensiva e cancela a utilização inteira, antes de processar qualquer alvo. `responseSkillId` executa uma habilidade de resposta sem custo, recarga ou consumo de ação. A resposta respeita invulnerabilidade, counters e reflexão.
- `on-harmful-skill`: aplica o `statusId` quando o personagem marcado usa uma habilidade ofensiva nova. Danos contínuos anteriores não ativam essa regra.
- `outgoing-damage-reduction`: reduz o dano causado pela habilidade. `excludesAffliction: true` preserva affliction.

Não use `damage-reduction` para uma defesa destrutível: redução não perde pontos a cada ataque; defesa destrutível perde. O bloqueio de novas reduções do Shikamaru não impede Bug Wall.

## Personagens em classico

Os grupos integrados têm um `index.ts` com `defineCharacter` e um `playable.ts` que apenas reexporta seu registro. Os demais `index.ts` ainda são catálogos descritivos: não são carregados como habilidades executáveis. Ao concluir a implementação e os testes de um personagem, crie `playable.ts` com `export { default } from './index'`.

Use IDs com prefixo `classico-` em personagens, habilidades e efeitos para manter as versões anteriores independentes. Os **70/70 personagens estão registrados e selecionáveis em uma primeira versão funcional**. As versões anteriores mantêm OLD no nome visível. Há mecânicas específicas em revisão: consulte [REVISAO-CLASSICO.md](./REVISAO-CLASSICO.md) antes de considerar o catálogo completamente validado.

### Drenos periódicos, condições e passivas

- `statuses[].periodicEffects` repete dano, roubo de vida/energia ou geração de energia nas próximas jogadas da origem. A primeira aplicação pertence aos efeitos imediatos da habilidade. Action pausa as repetições se estiver impedida; o timeout também as processa.
- `endsOnDamagingSkillUse` mantém um status até a próxima habilidade de dano do afetado; a redução ainda vale para essa habilidade.
- `effect.whenUserHasStatus` condiciona um efeito adicional a um status no usuário.
- `skill.variants` escolhe custo e efeitos conforme a etapa ativa, antes da reserva/pagamento de energia. Veja as pílulas do Chouji.
- `status.replaces` remove etapas anteriores ao aplicar a próxima.
- Requisito `lacks-status` impede utilizar uma habilidade após atingir sua etapa final.
- `skill.passive: true` registra uma descrição consultável, sem criar uma quinta ação. A ativação é declarada nos efeitos do personagem.
- Redução percentual com `includesPiercing: true` também reduz piercing, preservando affliction.

A energia de Butterfly Mode é recebida ao final das próximas jogadas de Chouji. Meat Tank protege mesmo ao escolher inimigo invulnerável, mas não aplica dano ou efeito ofensivo nesse inimigo.

### Execução e imunidade a efeitos

`damage.executeBelowHealth` executa se esse golpe realmente retirar vida e deixar o alvo no limite indicado. Um ataque completamente absorvido pelo escudo não executa.

`harmful-effect-immunity` ignora efeitos nocivos não relacionados a dano, inclusive enquanto proteções anteriores persistirem. Uma defesa destrutível que contenha essa imunidade perde todos os seus benefícios quando esgotada. Mantenha escudo e bônus em statuses separados se os bônus precisarem continuar (veja Haku).

`targetExpansion: { target: 'all-enemies' }` permite uma habilidade mista conceder benefícios ao usuário mesmo com inimigos invulneráveis. Seus efeitos ofensivos usam `skipIfUntargetable: true`; os efeitos no usuário usam `recipient: 'user'` e são aplicados uma única vez.

### Cura, limpeza e bônus por habilidade

- `outgoing-damage-bonus` soma `amount` ao dano da habilidade indicada por `skillId`. Bônus diferentes são cumulativos.
- `damage-taken-bonus` aceita `skillId: '*'` com `excludesAffliction: true` para vulnerabilidade geral a dano não Affliction.
- `remove-harmful-statuses` remove apenas efeitos inimigos cujas habilidades de origem possuam as classes indicadas; preserva os efeitos aliados.
- `periodicEffects` também aceita `heal`. Efeitos Instant continuam após a morte da origem; efeitos Action ficam suspensos se a origem morrer, ficar stunada ou se o alvo estiver invulnerável.
- `damage-reduction` com `includesPiercing: true` reduz dano normal e piercing; a mesma redução fixa é consumida uma vez no dano agregado, sem reduzir Affliction.
- Qualquer efeito pode declarar `recipient: 'user'`, como o sacrifício de vida de Yondaime; em habilidades em área esse efeito executa uma única vez.
- `on-harmful-skill.endsWithTriggerTurn: false` mantém o efeito reativo durante a jogada seguinte, em vez de encerrá-lo imediatamente na jogada que disparou a reação (veja Shizune).

### Reações, término e dano não letal

- `damage.nonlethal: true` limita o dano daquele efeito para preservar pelo menos 1 de vida; outros danos continuam podendo derrotar o personagem.
- `status.onExpireEffects` executa no término normal da duração, depois de remover o status. `endsWhenSourceDies: true` cancela sem esses efeitos se a origem morrer antes. Dark Void usa essa regra, incluindo a previsão de HP e o timeout.
- `status.idleEffects` executa ao finalizar uma jogada do personagem afetado sem usar habilidade nova. Veja Puppets Genjutsu.
- `skill-cost-increase` aumenta o custo apenas do personagem com o status. A aura global continua sendo `enemy-skill-cost-increase`.
- `counter-first-harmful.classes` limita quais classes ativam o counter; habilidades de outras classes não o consomem. `onCounterStatusId` concede um status ao autor do counter somente quando ele se ativa.
- `on-source-harmful-hit` reage a uma nova habilidade ofensiva do autor da marca no personagem marcado, sem disparar na aplicação inicial.
- `on-harmful-skill-heal-source` cura o autor da marca quando o alvo usa habilidade ofensiva nova. Não revive.
- `outgoing-damage-reduction-percent` reduz o dano causado de todos os tipos, inclusive Affliction.
- `gain-energy.energyType` concede energia do tipo indicado; sem esse campo, sorteia como antes.
- `targetMustHaveStatus` limita alvos a quem possua a marca especificada; `fromSourceOnly` exige o mesmo autor.
- `invulnerable.blocksAllies` também bloqueia novas habilidades aliadas, sem remover efeitos anteriormente aplicados.

### Energia removida e efeitos na equipe

- `remove-energy` retira energia da equipe do alvo sem transferir para quem usou a habilidade. `types` limita as cores; sem esse campo, qualquer cor disponível pode ser removida.
- `recipient: 'all-allies'` aplica aquele efeito a cada aliado vivo, uma única vez por habilidade, sem multiplicar custos ou outros efeitos contra o inimigo. Respeita bloqueios a novas habilidades aliadas, como Dark Void.
- `skill-cost-increase.scope: 'helpful'` cobra energia adicional apenas de habilidades não ofensivas, com alvo `self` ou `ally`.
- `damage.healthScaling` soma `bonus` por cada intervalo inteiro `step` de vida perdida pelo usuário. Veja Shuriken Throw de Iruka.
- `damage-immunity` bloqueia dano normal, piercing e Affliction sem impedir outros efeitos nocivos. Não é invulnerabilidade nem redução de dano.
- `damage-taken-bonus.classes`, `damage-taken-multiplier.classes` e `outgoing-damage-reduction.classes` limitam o modificador às classes indicadas.
- `endsOnSkillUse` remove o status quando o afetado usa uma nova habilidade. Uma reação `on-skill-use-damage` que estava aplicada ainda dispara nessa utilização, uma vez.
- Seedling Fern: a redução de 15 nas habilidades Physical/Chakra dura 1 turno, conforme confirmado. O custo em vida é 15 na execução e 15 na jogada seguinte.

### Revelação, proteção mínima e reações em equipe

- `cannot-die` conserva pelo menos 1 de vida, inclusive contra execução. O roubo de vida só cura o valor efetivamente perdido.
- `reveal-enemy-invisible` revela os efeitos invisíveis inimigos enquanto um aliado vivo possuir essa propriedade. A filtragem de dados online, os indicadores e a previsão de HP usam a mesma regra. Não revela energia, fila ou recargas do oponente.
- `on-skill-use` aplica os efeitos declarados quando o afetado usa habilidade nova. `exceptClasses` exclui as classes indicadas; um stun reativo não cancela retroativamente a habilidade que disparou a reação.
- `on-source-skill-use-heal` cura o portador quando o autor usa uma das habilidades em `skillIds`.
- `on-ally-targeted-hit` concede `statusId` ao aliado que usar habilidade no alvo marcado, uma vez por aliado. A marca da Yugao dura até o fim da próxima jogada dela (`owner-turns: 1`).
- `on-enemy-target-team` causa dano reativo uma vez por atacante e turno, sem multiplicá-lo pelo número de aliados atingidos por uma habilidade em área.
- `stun.scope: 'harmful'` bloqueia só habilidades ofensivas; `invulnerable.scope: 'helpful'` com `blocksAllies` impede receber novas habilidades de ajuda.
- `damage.primaryAmount` muda apenas o dano do alvo escolhido; `amount` continua valendo para os outros alvos da área, inclusive quando há reflexão.


### Sannins

- `ally-or-enemy` permite selecionar alguém de qualquer equipe. `gain-energy` com `team: 'target'` concede chakra à equipe do alvo; sem esse campo, concede ao usuário.
- `targetCondition: 'self' | 'other'` condiciona um efeito ao alvo escolhido. Revitalizing Heal compartilha os efeitos de Creation Rebirth para evitar duplicar a cura especial.
- `damage-immunity` com `types: ['affliction']` bloqueia apenas esse tipo de dano, preservando dano normal e piercing.
- `on-new-skill-damage` aplica `statusId` após uma nova habilidade tirar vida. `exceptClasses` exclui habilidades como Affliction. Dano absorvido por escudo e dano contínuo não ativam essa reação. A proteção dura até terminar a rodada que a ativou; golpes posteriores planejados continuam consumindo ação, custo e recarga, mas respeitam a nova proteção.
- Manda gera uma energia por turno de Orochimaru após a invocação; Katsuyu cura cada aliado em 5 nos turnos seguintes de Tsunade. Esses efeitos terminam com a morte de seus invocadores.


### Hokages

- Variantes aceitam `cooldown` para alterar a recarga enquanto uma melhoria estiver ativa.
- `skill-cost-increase.scope: 'harmful'` restringe a cobrança a habilidades ofensivas. Birth of the Trees usa `endsWithTriggerTurn: false` na reação: a penalidade permanece até terminar a próxima jogada do afetado; não cobra o golpe que a ativou.
- `ignore-defenses` suspende proteções sem apagar seus status nem consumir escudos. O dano registra a proteção no momento do golpe, preservando a ordem dos ataques.
- `status.ignoresImmunity` preserva modificadores contra imunidades; `unremovable` protege contra limpeza. O dano usa sua própria opção `ignoresImmunity`. Esses campos não removem o limite de vida de `cannot-die`.


### Recursos usados no cadastro completo

- `healthTrigger` em habilidades passivas dispara uma única vez quando o personagem vivo atinge o limite de vida.
- `maxUses` limita utilizações por partida; `maxUserHealth` restringe a ativação por vida.
- `remove-statuses` encerra efeitos pelos IDs; `scope: 'source-applications'` encerra também as aplicações do mesmo autor em outros personagens.
- `linkTo` liga um efeito ao alvo escolhido ou ao autor. Isso permite isolamento, vínculo de vida e efeitos que acabam quando o alvo morre.
- `copy-enemy-skill` escolhe uma habilidade ofensiva inimiga e converte seu custo em aleatórias. `copySlotStatusId` ocupa o espaço da habilidade de cópia enquanto ela estiver ativa.
- `whenTargetHasStatus`, `unlessTargetHasStatus` e `targetCondition` permitem efeitos condicionais sem listas de personagens no motor.
- `growthPerTurn`, `statusTurnScaling`, `healing-bonus`, `skill-cost-reduction` e `cooldown-increase` mantêm os valores ajustáveis nos blocos do personagem.

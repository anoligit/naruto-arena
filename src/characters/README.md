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

# Criar e editar personagens

Cada personagem possui uma pasta com `index.ts` e `images/`. O arquivo do Zabuza é um exemplo completo. Todos os seis personagens seguem a mesma organização.

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

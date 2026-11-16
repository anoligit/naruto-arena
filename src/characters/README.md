# Editar um personagem em um único arquivo

Abra `src/characters/classico/<pasta>/index.ts`. O registro lê esse arquivo diretamente; não existe lista manual de personagens e não é necessário criar `playable.ts`.

| O que mudar | Onde editar no index.ts |
| --- | --- |
| Nome, descrição e retrato | Campos `name`, `description` e `image` no registro final, ou `characterInfo` quando presente. |
| Imagem de uma habilidade | Import da imagem e `skill.image` no bloco da habilidade. |
| Dano, cura, energia, recarga, duração e condições | `skill`, `effects` e `statuses` no bloco da habilidade. Constantes próximas são usadas quando há valores compartilhados. |
| Indicadores | Por padrão usam nome e imagem da habilidade. No status, `indicator: { name, image }` sobrescreve o indicador; `indicatorNote` acrescenta uma observação. |
| Personagem liberado desde o início | `unlockRequirement: { type: 'none' }`. |
| Desbloqueio por missão | `unlockRequirement: { type: 'mission', missionId: 'id-da-missao' }` e o bloco `mission` do próprio personagem. |
| Nome, foto, categoria e requisitos da missão | Campos do bloco `mission`. |
| Posição exata na grade | `order: { position: 4 }`, por exemplo. Somente este arquivo precisa mudar. |
| Prioridade numérica na grade | `order: 4` ordena do menor para o maior. Também aceita decimais para inserir entre prioridades. |

## Mover sem editar outro personagem

Para colocar Sakura em quarto lugar, no registro final de `classico/haruno_sakura/index.ts`, use:

```ts
order: { position: 4 },
```

Sakura é retirada da sequência numérica e inserida na posição solicitada. Os demais personagens se deslocam automaticamente; não edite Hinata nem qualquer outra pasta. A primeira posição é 1; uma posição maior que o catálogo coloca o personagem no final. Se vários personagens solicitarem posições exatas, elas são aplicadas em ordem crescente. Dois pedidos explícitos para a mesma posição geram erro para evitar uma ordem ambígua.

`order: 4` continua sendo uma prioridade numérica, não um comando de inserção. Empates numéricos são resolvidos pelo caminho da pasta. Use a forma `{ position: 4 }` quando quiser indicar a posição exata. Desbloqueios nunca mudam a ordem da lista. A busca no celular filtra a lista, preservando a sequência relativa dos resultados.

## Missões

O bloco `mission` define nome, imagem, categoria, nível mínimo, pré-requisitos, objetivo e personagens exigidos. O próprio personagem é a recompensa. O site e os servidores Node/Cloudflare leem os mesmos dados; uma nova missão não exige código específico de persistência nem novas colunas no banco.

Em `objective.pointsPerWin`, `'one'` conta uma vitória por partida; `'per-required-character'` conta um ponto para cada personagem exigido presente. O Haku mantém esta última regra: Naruto e Sasuke juntos somam dois pontos. Derrotas e empates com um time elegível reiniciam a sequência. Partidas sem personagens exigidos não alteram a sequência. Rank e pré-requisitos são avaliados antes da partida.

`minimumLevel` é o requisito aplicado; `minimumRank` é o nome mostrado na tela. Ajuste ambos no mesmo bloco. O bloco `legacyProgress` do Haku serve apenas para conservar contas antigas; não é necessário para novas missões e não deve ser renomeado.

Mantenha os IDs de personagem, habilidades, efeitos e missões estáveis para preservar dados salvos. Se remover um personagem, confira se alguma missão o exige; a validação identifica referências quebradas e pré-requisitos circulares.

## Verificar e publicar

`npm test`, `npm run lint` e `npm run build` conferem o projeto. `npm run cf:deploy` prepara a versão, verifica e publica com as migrações necessárias. Salvar o index.ts não altera a beta já publicada. Não encerre partidas em andamento para atualizar regras.

O motor compartilhado interpreta os dados dos personagens: dano, stun, cura, duração, custo e indicadores não precisam de cópias por personagem. Uma mecânica completamente nova, que ainda não existe no motor, pode exigir suporte em `src/game/`; depois disso, seus valores e condições ficam no index.ts.

# Missões declaradas no personagem

Toda configuração editável de uma missão fica em `src/characters/classico/<pasta>/index.ts`. A referência atual é `classico/haku/index.ts`.

```ts
unlockRequirement: { type: 'mission', missionId: 'id-permanente' },
mission: {
  id: 'id-permanente',
  name: 'Nome da missão',
  category: 'Missões D e C',
  image: missionImage, // Import de uma imagem da própria pasta.
  minimumRank: 'Genin',
  minimumLevel: 6,
  prerequisiteMissionIds: [],
  objective: {
    type: 'consecutive-wins',
    consecutiveWins: 2,
    charactersAnyOf: ['classico-naruto', 'classico-sasuke'],
    pointsPerWin: 'one',
  },
},
```

A recompensa é o personagem que contém a missão. Para um personagem inicial, use apenas `unlockRequirement: { type: 'none' }`. A lista de iniciais é calculada automaticamente.

- `pointsPerWin: 'one'`: cada vitória elegível soma um ponto.
- `pointsPerWin: 'per-required-character'`: cada personagem exigido presente soma um ponto; este é o comportamento mantido do Haku e o padrão quando o campo não é informado.
- `consecutiveWins` é o total de pontos exigido. O texto e o contador são gerados a partir da configuração.
- `charactersAnyOf` exige ao menos um dos personagens. Times sem nenhum deles não avançam nem reiniciam o contador.
- `minimumLevel` é verificado antes da partida; a vitória que promove ainda não conta.
- `minimumRank` é o rótulo mostrado junto do nível mínimo.
- `prerequisiteMissionIds` exige missões já concluídas antes da partida. Referências ausentes e ciclos são detectados no cadastro.

Somente partidas rápidas e treinamentos autenticados contam. Derrota ou empate com um time elegível reinicia a sequência. Um desbloqueio concluído é permanente. Repetir o registro de um resultado não soma pontos novamente.

O banco guarda o progresso por conta e ID de missão em `account_missions`. Node e Cloudflare usam a mesma regra. Adicionar uma missão no personagem não exige editar o servidor nem criar uma nova migração. A migração `0004` e `legacyProgress` no Haku preservam os contadores e desbloqueios do formato anterior; não remova ou renomeie esses identificadores históricos.

Imagens, nomes, requisitos e objetivos são lidos do mesmo cadastro pela seleção, tela de missões e servidor. Não edite cópias em `src/missions/index.ts`: esse arquivo apenas reúne as declarações. Novos tipos de objetivo ainda exigem suporte no avaliador compartilhado.

Execute as verificações locais e compile/publice para as alterações chegarem à beta. A migração preparada no código não altera sozinha o banco real.

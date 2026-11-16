# Editar a missão do Haku

Abra `src/characters/classico/haku/index.ts`. Perto do final, dentro de `defineCharacter`, está o bloco `mission`.

```ts
mission: {
  id: 'haku',
  name: 'A Neve Esquecida pela Névoa', // Coloque o nome que quiser.
  category: 'Missões D e C',
  image: missionImage,
  minimumRank: 'Genin',
  minimumLevel: 6,
  prerequisiteMissionIds: [],
  objective: {
    type: 'consecutive-wins',
    consecutiveWins: 2,
    charactersAnyOf: ['classico-naruto', 'classico-sasuke'],
  },
},
```

- **Nome:** altere `name`. A página da missão e a descrição de desbloqueio usam esse mesmo nome.
- **Foto:** a imagem atual está em `src/characters/classico/haku/Haku_mission.jpg`. No topo do `index.ts`, `import missionImage from './Haku_mission.jpg'` vincula esse arquivo à missão. Para trocar a foto, substitua o arquivo mantendo o nome ou edite esse import com o novo nome exato. O retrato do personagem não é alterado.
- **Tipo:** altere `category` para o texto da categoria mostrado na página.
- **Rank e nível:** `minimumRank` é o nome exibido; `minimumLevel` é o limite aplicado pelo servidor. Ajuste os dois em conjunto. A tabela de níveis ainda é provisória.
- **Missões anteriores:** `prerequisiteMissionIds` recebe os IDs das missões concluídas necessárias. Vazio significa nenhum pré-requisito.
- **Vitórias:** `consecutiveWins` define a quantidade exigida. O contador mostrado e a validação do servidor usam esse número.
- **Personagens exigidos:** `charactersAnyOf` recebe IDs dos personagens. Basta um deles estar no time; o texto do objetivo é montado com seus nomes.

A recompensa é o próprio personagem que contém o bloco. Mantenha `id: 'haku'`: ele identifica o progresso já salvo. O tipo de objetivo implementado atualmente é `consecutive-wins`; outros tipos de objetivo precisam de uma regra própria no servidor. A persistência disponível nesta etapa é a da missão do Haku.

Depois de editar ou adicionar a foto, use `npm run cf:deploy` para compilar, testar e publicar. No servidor do Mac, reinicie com `npm run online`. Editar o código local não altera sozinho a versão já publicada.

`src/missions/index.ts` lê os blocos dos personagens para construir o catálogo; não há outra cópia do nome, imagem ou requisitos para atualizar. `definition.ts` contém os tipos e a validação do formato. A referência antiga “Time 7 Luta como uma Equipe” continua disponível para os personagens OLD.

Na sequência de vitórias, somente partidas com ao menos um personagem de `charactersAnyOf` são consideradas. Partidas com outros times não avançam nem reiniciam o contador. Partidas rápidas e treinamentos de contas autenticadas contam. Privadas e treinamentos como visitante são ignorados. Cada personagem exigido presente soma um ponto por vitória; Naruto e Sasuke juntos somam dois. O nível mínimo é verificado antes de começar a partida.

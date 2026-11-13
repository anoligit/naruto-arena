# Alvos condicionais

A habilidade continua com `target: 'enemy'`. Para aplicar a habilidade inteira a todos os inimigos vivos e vulneráveis quando um efeito estiver ativo no próprio usuário:

```ts
targetExpansion: {
  whenUserHasStatus: 'id-do-efeito-no-usuario',
  target: 'all-vulnerable-enemies',
},
```

O jogador escolhe um inimigo válido. O sistema resolve os demais alvos automaticamente. Energia, recarga e a ação do personagem são contabilizadas uma vez. Reflexão é verificada separadamente para cada alvo. Efeitos com `recipient: 'user'` são aplicados apenas uma vez.

Para invulnerabilidade restrita, o modificador aceita `classes: ['physical']`. Sem `classes`, protege contra todas as classes, como antes.

O arquivo `src/characters/yuki haku/index.ts` serve de modelo: dados gerais, depois cada habilidade junto de seus parâmetros e efeitos, por fim o registro automático.

Sem `whenUserHasStatus`, `targetExpansion` aplica a habilidade a todos os inimigos vulneráveis em todo uso, como Great Waterfall Technique.

`SkillDefinition.enhancement` modifica o dano e permite ignorar invulnerabilidade enquanto um status estiver ativo no próprio usuário. O cadastro base não é alterado.

O modificador `enemy-skill-cost-increase` acrescenta energia aleatória às habilidades inimigas que tenham alguma das classes indicadas. A regra central de custo é usada na reserva, disponibilidade, confirmação, execução e consulta na batalha. Fontes mortas não aumentam custos.

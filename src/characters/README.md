# Cadastro e balanceamento dos personagens

Cada personagem tem uma pasta com `index.ts` e `images/`.

## Onde editar

No início de cada `index.ts`, o bloco `<personagem>Balance` reúne dano, cura, redução de dano, multiplicadores, bônus, classes afetadas e duração dos efeitos. Esses valores são usados tanto pelo combate quanto pelas descrições completas e pelos indicadores.

Exemplo: em `narutoBalance.combo.damage`, mudar `15` para `20` altera o dano base e os textos de Combo e Clones. O dano com Clones é calculado usando `narutoBalance.clones.comboMultiplier`; não precisa ser digitado separadamente.

- Dano, cura, proteção e duração: bloco `Balance`.
- Custo de energia: `cost` na habilidade.
- Recarga: `cooldown` na habilidade.
- Classes da própria habilidade: `classes` na habilidade.
- Imagens: imports no topo e pasta `images/`.
- Explicação específica do indicador: `indicatorNote` junto do status.
- História do personagem: cadastro no final do arquivo.

Duração e cooldown são independentes. As classes afetadas por um stun ou reflexão também são diferentes das classes da própria habilidade.

Os textos usam os valores ao carregar o arquivo. Depois de editar, salve e inicie uma batalha nova para conferir; uma partida já aberta contém efeitos criados antes da mudança. Para publicar, compile novamente com `npm run build`.

A pasta `game/` contém regras reutilizáveis; balancear os personagens atuais não exige alterá-las. Uma mecânica inédita pode exigir suporte no motor antes de ser declarada no personagem.

## Adicionar um personagem automaticamente

Cada pasta em `src/characters` deve ter `index.ts` e pode ter `images/`. O jogo descobre esses arquivos automaticamente; não edite `data/characters.ts` nem `game/effects/catalog.ts` ao criar personagens.

No final do `index.ts`, exporte:

```ts
export default defineCharacter({
  character: meuPersonagem,
  statuses: meusEfeitos,
  order: 60,
})
```

Importe `defineCharacter` de `../definition`. `character` é o cadastro criado com `characterWithSkills`; `statuses` contém os efeitos específicos (use `[]` se não houver); `order` define a posição no catálogo, da esquerda para a direita. Sem `order`, entra no final.

Você pode copiar qualquer uma das pastas atuais como modelo: mude `characterId`, o nome no cadastro, as imagens, descrições e habilidades, tudo no mesmo arquivo. Os IDs das habilidades e dos efeitos usam `characterId` automaticamente. Não é necessário renomear as variáveis exportadas: o jogo lê apenas a exportação padrão. A pasta pode conter espaços; seu nome não precisa ser igual aos nomes das variáveis.

Personagem, habilidades e efeitos precisam de IDs únicos. Um cadastro com IDs repetidos é ignorado e gera um aviso no Console do navegador, preservando os outros personagens. Não copie as exportações do Naruto sem ajustar seus identificadores.

Depois de salvar, recarregue a seleção. A lista será atualizada também na próxima compilação/publicação. Acima de 21 personagens, o catálogo mantém as sete colunas e permite rolar dentro da grade. Mecânicas inéditas ainda exigem suporte no motor compartilhado.

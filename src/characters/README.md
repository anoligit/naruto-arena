# Cadastro e balanceamento dos personagens

Cada personagem tem uma pasta com `index.ts` e `images/`.

## Onde editar

No início de cada `index.ts`, o bloco `<personagem>Balance` reúne dano, cura, redução de dano, multiplicadores, bônus, classes afetadas e duração dos efeitos. Esses valores são usados tanto pelo combate quanto pelas descrições completas e pelos indicadores.

Exemplo: em `narutoBalance.combo.damage`, mudar `15` para `20` altera o dano base e os textos de Combo e Clones. O dano com Clones é calculado usando `narutoBalance.clones.comboMultiplier`; não precisa ser digitado separadamente.

- Dano, cura, proteção e duração: bloco `Balance`.
- Custo de chakra: `cost` na habilidade.
- Recarga: `cooldown` na habilidade.
- Classes da própria habilidade: `classes` na habilidade.
- Imagens: imports no topo e pasta `images/`.
- Explicação específica do indicador: `indicatorNote` junto do status.
- História do personagem: cadastro no final do arquivo.

Duração e cooldown são independentes. As classes afetadas por um stun ou reflexão também são diferentes das classes da própria habilidade.

Os textos usam os valores ao carregar o arquivo. Depois de editar, salve e inicie uma batalha nova para conferir; uma partida já aberta contém efeitos criados antes da mudança. Para publicar, compile novamente com `npm run build`.

A pasta `game/` contém regras reutilizáveis; balancear os personagens atuais não exige alterá-las. Uma mecânica inédita pode exigir suporte no motor antes de ser declarada no personagem.

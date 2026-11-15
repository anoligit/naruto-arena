# Franklin e FranklinBold

Coloque nesta pasta os arquivos da mesma família de fonte:

- `Franklin.woff2`: versão regular.
- `FranklinBold.woff2`: versão em negrito.

Também são aceitos `.woff`, `.ttf` ou `.otf`, mantendo os nomes `Franklin` e `FranklinBold`. Renomear a extensão não converte o formato: se o arquivo recebido é TTF, mantenha `.ttf`.

No VS Code, clique com o botão direito nesta pasta e use **Revelar no Finder**. Copie os dois arquivos para ela. Não é necessário instalar a fonte no Mac para o jogo usá-la.

Use os arquivos fornecidos para uso em sites pelo distribuidor da fonte. A família Franklin tem diversas variantes; regular e negrito devem pertencer à mesma variante.

Após adicionar os arquivos, pare o servidor do jogo com Control + C, execute `npm run online` na pasta principal e atualize as páginas dos jogadores. O túnel pode continuar aberto.

O carregamento em `src/styles/fonts.ts` encontra os arquivos automaticamente. O navegador usa a família `Arena Franklin`: peso 400 recebe Franklin e peso 700 recebe FranklinBold. As cores e textos são configurados separadamente.

Enquanto os arquivos não estiverem presentes, o navegador usa uma fonte substituta. A compilação funciona normalmente e não tenta baixar arquivos que não existem.

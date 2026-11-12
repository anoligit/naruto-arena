# Etapa 1 — Layout clássico

Abra a pasta `/Users/andrealmeida/naruto-arena` no VS Code (File → Open Folder). Em Terminal → New Terminal:

```sh
npm run dev
```

Abra o endereço mostrado pelo Vite; com a configuração atual, a página fica em `http://localhost:5173/naruto-arena/` quando a porta 5173 está livre.

## Conferir a etapa

1. A Startpage deve mostrar menu, coluna de informações e notícias.
2. Clique em Start Playing. Clique em Naruto e confira suas habilidades.
3. Dê clique duplo em três personagens diferentes; a equipe deve marcar 3/3.
4. Tente adicionar novamente um personagem ou um quarto personagem: a equipe não deve mudar.
5. Remova um membro com botão direito ou pelo botão com ×. Arraste outro personagem para a vaga livre.
6. Alterne Startpage e Start Playing: a equipe deve continuar selecionada.
7. Recarregue em `#start-playing`: a página deve continuar em Start Playing, mas a equipe será reiniciada.
8. Use Voltar e Avançar do navegador e confira a navegação.
9. Reduza a janela para conferir o layout no celular. Use Tab e Enter para navegar e o botão Add selected character para montar a equipe sem arrastar.

As páginas usam fragmentos (`#startpage` e `#start-playing`), compatíveis com o GitHub Pages sem configuração de rotas no servidor.

## Arquivos

- `src/App.tsx`: estrutura compartilhada, informações e navegação.
- `src/pages/StartPlaying.tsx`: seleção original de personagens, mantida montada ao trocar de página.
- `src/App.css`: aparência e adaptação das três colunas.
- `src/Game.css`: estilos da seleção.
- `src/index.css`: estilos globais.
- `src/data/characters.ts`: dados originais, sem alteração.

Login, rankings, missões e combate ainda não estão implementados. Os itens futuros estão indicados na tela. Nenhuma senha é solicitada.

## Testar a versão de publicação

Pare o servidor com Control+C e execute, um comando por vez:

```sh
npm run build
npm run preview
```

Abra o endereço mostrado pelo preview e repita a navegação e a seleção.

## Publicar no GitHub Pages

O projeto já contém um fluxo de publicação em `.github/workflows/` e `base: '/naruto-arena/'` no Vite. No GitHub, em Settings → Pages → Build and deployment, a Source deve ser GitHub Actions.

Depois de conferir a página local, execute um comando por vez:

```sh
git status
git diff
git add src/App.tsx src/App.css src/index.css src/Game.css src/pages/StartPlaying.tsx GUIA-LAYOUT.md
git commit -m "Adicionar layout clássico e navegação inicial"
git push origin main
```

O envio para `main` aciona a publicação existente. Confira a aba Actions e aguarde o fluxo Deploy Naruto-Arena terminar. Não edite nem envie a pasta `dist` manualmente.

O remoto encontrado nesta etapa é `https://github.com/anoligit/naruto-arena.git`. Confira `git remote -v` antes de enviar. Se esse for o repositório correto e não houver domínio personalizado, o endereço esperado é `https://anoligit.github.io/naruto-arena/`; confirme o endereço final em Settings → Pages. O arquivo antigo de comandos menciona outro usuário do GitHub e precisa ser usado com atenção.

Documentação: https://vite.dev/guide/static-deploy.html#github-pages e https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

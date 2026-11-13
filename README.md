# Naruto Arena

Protótipo em React, TypeScript e Vite. Inclui seleção automática de personagens, consulta de habilidades e batalha local entre duas equipes de três personagens. O multiplayer online ainda não está implementado.

## Executar

```sh
npm install
npm run dev
```

Abra o endereço informado pelo terminal e use Start Playing para abrir o jogo.

## Verificar e publicar

Execute um comando por vez:

```sh
npm test
npm run lint
npm run build
npm run preview
```

O preview usa a compilação mais recente. Para voltar ao desenvolvimento, encerre com Control+C e execute `npm run dev`.

O projeto usa a base `/naruto-arena/` para GitHub Pages. A publicação é feita pelo fluxo já configurado em `.github/workflows`; teste antes de enviar os commits para `main`.

## Onde editar

- `src/characters/<personagem>/index.ts`: personagem, imagens, habilidades, balanceamento e efeitos persistentes. Veja [o guia de cadastro](src/characters/README.md).
- `src/missions/index.ts`: nomes e IDs das missões. Progresso e desbloqueio por jogador ainda não existem.
- `src/game/`: regras compartilhadas de combate, energia, classes, recarga, duração e alvos.
- `src/pages/`: seleção e batalha; apresentam os dados e recebem os cliques.
- `src/Game.css` e `src/Battle.css`: layout da seleção e batalha.
- `src/player/profile.ts`: perfil de visitante exibido na seleção.
- `src/useTeam.ts`, `src/teamState.ts` e `src/teamStorage.ts`: estado, sincronização entre janelas e salvamento do time.
- `tests/`: verificações automáticas. Não precisam de servidor aberto ou dependências adicionais.

Os dados das habilidades existem uma vez. O registro monta o catálogo e reúne os efeitos, sem listas de nomes, imagens ou descrições duplicadas na interface.

# Personagens

O catálogo contém somente os 21 personagens iniciais e Haku. Os IDs foram preservados; personagens OLD e Shippuuden foram removidos.

## Localizar e editar

Cada personagem fica em `src/characters/classico/<pasta>/index.ts`. O `playable.ts` reexporta esse arquivo e é descoberto automaticamente pelo registro. Imagens e foto da missão ficam junto do personagem.

- `order` no `defineCharacter` final define a ordem da lista, do menor para o maior. Atualmente os iniciais ocupam 1 a 21 e Haku ocupa 22.
- Para trocar posições, troque os números dos dois personagens. Evite empates e saltos. Números iguais são desempatados pelo caminho da pasta.
- Desbloqueios não mudam a posição na lista.
- `id` é permanente: não altere para preservar times, missões e dados salvos.
- Nome, retrato e história ficam no registro final ou em `characterInfo`.
- Cada bloco de habilidade reúne `skill` (dano, custo, recarga, classes, alvos, descrição) e `statuses` (efeitos persistentes).
- `abilities` reúne as habilidades do personagem. Habilidades passivas e alternativas não ocupam um quinto espaço de seleção.

## Missão do Haku

Edite a missão no bloco `mission` de `classico/haku/index.ts`. A missão atual exige Genin nível 6 e as vitórias exigidas com Naruto ou Sasuke clássicos. A vitória que promove não conta para a missão. O servidor valida o progresso, e o desbloqueio permanece salvo na conta.

`Haku_mission.jpg` é a foto da missão. O ID da missão `haku` deve permanecer estável.

## Remover ou acrescentar

O registro encontra `classico/*/playable.ts` automaticamente. Os 21 iniciais são definidos em `src/missions/progression.ts`. Ao remover alguém, confira missões e esses IDs. Times locais com personagens removidos carregam os espaços correspondentes vazios, sem apagar os demais integrantes.

## Conferir alterações

Execute `npm test`, `npm run lint` e `npm run build`. A suíte cobre o catálogo de 22 personagens, habilidades, ordem fixa, missão, energia, efeitos, treinamento, interface, contas e salas. Publicar exige uma nova compilação do frontend e do servidor; uma partida já aberta guarda seu estado anterior.

As regras compartilhadas estão documentadas nas pastas de `src/game/`. Não duplique parâmetros de habilidades no motor. Não reutilize IDs de personagens, habilidades ou efeitos.

# Recarga de habilidades

- `rules.ts`: validação, turno em que a habilidade fica livre e contagem restante.
- `format.ts`: textos usados na seleção e na batalha.
- `index.ts`: reúne as exportações.

Para balancear uma habilidade, altere `cooldown` no `src/characters/<personagem>/index.ts`. O valor deve ser inteiro e não negativo.

A contagem usa apenas as jogadas do dono da habilidade. A jogada do uso não conta como recarga. Se uma habilidade com CD 1 for usada na jogada própria 1, ficará bloqueada na jogada própria 2 e disponível na 3.

CD 0 não exige pular uma jogada, mas não permite uma segunda habilidade no mesmo turno: a regra de uma habilidade por personagem continua separada.

A recarga só é registrada ao confirmar e executar a ação. Consultar uma habilidade, atribuir uma ação à fila ou descartar o turno não inicia recarga.

Fora da vez do dono, o indicador exibe a recarga prevista para a próxima jogada dele. A verificação real usa a jogada atual e mantém o bloqueio de uso fora da vez do jogador.

Recarga não é duração de efeito: os Clones podem continuar protegendo Naruto enquanto sua habilidade está em recarga. Alterar um não muda automaticamente o outro.

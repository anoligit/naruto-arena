# Chakra

- `definitions.ts`: nomes, cores e ordem de exibição. Random (Qualquer) não é um quinto tipo na reserva.
- `config.ts`: quantidades recebidas no primeiro turno, por personagem vivo e na troca.
- `rules.ts`: geração, pagamento, contagem e troca de chakra.
- `format.ts`: texto dos custos mostrado na seleção e na batalha.
- `types.ts`: formato dos dados de chakra.
- `index.ts`: reúne as exportações para os outros arquivos do jogo.

Para alterar a cor ou o nome de um chakra, edite `definitions.ts`. Não renomeie os identificadores (`bloodline`, `ninjutsu`, `taijutsu`, `genjutsu`) apenas para mudar o texto exibido.

Para balancear o custo de uma habilidade, edite `cost` no `src/characters/<personagem>/index.ts`. O cadastro de chakra é compartilhado; o custo pertence à habilidade.

A reserva é acumulativa. O jogador inicial recebe 1 chakra; nas demais jogadas recebe 1 por personagem vivo. Trocar exige 5 unidades e concede 1 do tipo escolhido. Custos específicos são reservados ao atribuir ações; os tipos que pagam os custos Qualquer são escolhidos na confirmação do turno.

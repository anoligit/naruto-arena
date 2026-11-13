# Treinamento básico

O humano controla `player-1`; `player-2` é o adversário automático. O time humano permanece à esquerda durante toda a partida. São necessárias três escolhas válidas; o adversário recebe três personagens diferentes sorteados do catálogo automático.

- `config.ts`: tempo de espera e limite de ações do adversário.
- `createTrainingBattle.ts`: criação da partida e sorteio do time adversário.
- `computer.ts`: planejamento e execução de um turno.

A IA monta uma fila com no máximo uma ação por personagem vivo. Valida alvos, stun, cooldown, requisitos, energia específica e pagamento aleatório usando as funções normais do jogo. A decisão compara dano, cura e efeitos úteis; é uma heurística básica, sem busca de combinações futuras, troca de energia ou níveis de dificuldade. Se não existir ação útil disponível, passa o turno e acumula energia.

As decisões usam uma cópia com apenas os efeitos visíveis para o adversário. Um counter invisível humano não altera suas escolhas. A execução real passa pelo motor completo, incluindo counters ocultos. Se a fila real for inválida, ela é descartada e o turno passa: a IA não tenta outros alvos para descobrir uma defesa oculta.

A fila e a energia do adversário não são expostas na tela. Consultar suas habilidades não permite comandá-lo nem revela seus cooldowns ocultos. Durante o turno automático, o jogador continua podendo ler descrições. Confirmação e troca ficam disponíveis apenas no próprio turno; a desistência pode ser confirmada também enquanto o adversário aguarda.

O resultado não grava ranking, vitórias de perfil ou progresso de missões. A tela oferece retorno à seleção; sair dela cancela o temporizador pendente. Os outros modos continuam como batalha local entre dois jogadores.

Novos personagens entram pelo catálogo existente. Seus valores continuam em `characters/<personagem>/index.ts`; a IA não mantém cópias desses valores. Uma mecânica nova pode exigir uma nova avaliação em `modifierValue`, separada da regra que realmente executa esse efeito.

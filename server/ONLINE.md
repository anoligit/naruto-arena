# Jogar online a partir do Mac

O servidor usa o motor e o cadastro de personagens em `src`. Não existe uma segunda cópia das regras para editar. Os arquivos do exercício (`teste.mjs`, `salas.mjs`, `sala.html`) foram preservados, mas não devem rodar junto com o servidor do jogo na mesma porta.

## Iniciar

1. Pare o servidor de teste com **Control + C** no terminal em que ele está rodando.
2. Na pasta principal do projeto, execute:

   ```sh
   npm run online
   ```

   Esse comando compila o site, prepara o motor para o Node e inicia o servidor na porta 3001. Espere a mensagem `Jogo online`.
3. Abra http://localhost:3001. Escolha três personagens e clique em **Partida privada online**.
4. Informe seu nome, escolha um avatar temporário e crie a sala e copie o convite. Para testar no mesmo Mac, abra o convite em outra aba.

## Amigos fora de casa

Mantenha o servidor acima aberto. Em outro terminal:

```sh
cloudflared tunnel --url http://127.0.0.1:3001
```

Se esse túnel já está aberto, pode continuar usando-o. Abra o endereço HTTPS fornecido por ele, em vez de localhost, antes de criar a sala. O convite copiado usará esse endereço público.

Seu amigo abre o convite, escolhe três personagens, clica em **Partida privada online**, informa seu nome e entra na sala cujo código já estará preenchido. A batalha começa com os dois times escolhidos.

Clique nos avatares do cabeçalho para consultar o perfil e os três personagens de cada time, inclusive os derrotados. Campos de progressão sem cadastro aparecem como traços.

No turno adversário, o espaço da ação (`?`) e a reserva/troca de energias ficam ocultos. Clique duplo no ícone de uma ação atribuída cancela essa ação; pelo teclado, use Delete.

Cada jogador vê seu time à esquerda, pode consultar personagens e habilidades e só controla suas próprias ações. Confirme o turno no botão **PRESS WHEN READY**. Custos aleatórios são escolhidos na confirmação. O relógio de 60 segundos e os resultados são controlados pelo servidor.

## Alterar personagens ou regras

1. Encerre a partida de teste.
2. Pare o servidor com **Control + C**.
3. Edite os arquivos habituais em `src/characters` ou `src/game`.
4. Execute **`npm run online`** novamente e atualize as páginas dos dois jogadores.
5. Crie outra sala.

O túnel pode continuar aberto durante esse processo. Reiniciar apenas o servidor não muda o endereço do túnel. Reiniciar o túnel temporário pode gerar outro endereço; nesse caso, abra o endereço novo e gere um novo convite.

A compilação do motor importa os personagens automaticamente, usando o mesmo registro da seleção. Se cliente e servidor tiverem cadastros diferentes, a entrada será recusada com um aviso para atualizar.

## Primeira versão

- Salas privadas, dois jogadores, nome temporário, três personagens distintos por time.
- O servidor decide energia, custos, fila, dano, efeitos, recarga, relógio e vencedor.
- A fila planejada, pagamentos e energia inimiga não são enviados ao adversário. Efeitos invisíveis ficam ocultos até poderem ser revelados.
- A interface de treinamento e os testes locais continuam disponíveis.
- Sem contas, ranking, progresso de missões ou recuperação de conexão nesta etapa.
- Fechar/atualizar a aba da batalha ou perder a conexão encerra a participação e concede vitória ao adversário quando a desconexão é detectada. Uma perda de rede pode levar alguns segundos para ser detectada.
- Salas ficam na memória: parar o servidor apaga todas elas.
- O Mac precisa estar ligado, sem repouso, com internet; servidor e túnel precisam permanecer abertos.
- Esta versão não precisa publicar alterações no GitHub Pages para funcionar: o próprio servidor entrega o jogo compilado pela porta 3001.

## Organização

- `server/engine.ts`: importa as funções existentes do motor.
- `server/build.mjs`: prepara esse TypeScript para executar no Node.
- `server/start.mjs`: entrega o site compilado e recebe conexões WebSocket.
- `server/rooms.mjs`: administra salas e encaminha comandos ao motor.
- `server/messages.mjs`: verifica o formato das mensagens recebidas.
- `src/multiplayer`: tela de entrada, convite, mensagens e filtro do que cada jogador pode receber.
- `src/pages/LocalBattle.tsx`: a tela existente aceita tanto partidas locais quanto o estado recebido do servidor.

## Verificação

```sh
npm test
npm run lint
npm run test:multiplayer
```

O último comando testa as salas e abre uma porta local temporária para verificar duas conexões WebSocket reais. Não usa a porta 3001 nem expõe o servidor publicamente.

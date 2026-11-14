# Sala de teste

Este teste usa apenas `salas.mjs` e `sala.html`. Não altera o jogo e ainda não executa combate.

## Testar no Mac

1. Pare o servidor antigo com Control + C, pois ele também usa a porta 3001.
2. Na pasta principal do projeto, execute `node server/salas.mjs`.
3. Abra http://localhost:3001 no navegador.
4. Digite seu nome e deixe o código vazio para criar uma sala.
5. Copie o convite e abra em outra aba. Digite outro nome e entre.
6. Envie mensagens nas duas abas. Cada sala aceita duas conexões.

Fechar uma aba libera o lugar dela. Quando a última pessoa sai, a sala é apagada. Reiniciar o servidor apaga todas as salas.

## Acesso pela internet

Um convite com `localhost` só funciona no próprio computador. Publicar apenas no GitHub Pages não executa este servidor Node.js.

Para publicar o teste, uma hospedagem que execute Node.js e aceite WebSocket deve iniciar `node server/salas.mjs`, depois de instalar as dependências com `npm ci`. O programa usa a porta fornecida pela variável `PORT`, ou 3001 no Mac. A página e o WebSocket usam o mesmo endereço público; em HTTPS a conexão usa WSS automaticamente.

Depois de publicar, abra o endereço HTTPS da hospedagem para criar a sala. O convite gerado já utilizará esse endereço. Esse teste não possui contas, histórico persistente ou integração com combate.

## Como ler os arquivos

- `salas.mjs`: entrega a página por HTTP, recebe mensagens WebSocket e mantém as salas na memória.
- `sala.html`: mostra os formulários e envia mensagens `criar`, `entrar` e `mensagem`.
- `teste.mjs`: preserva o exercício anterior do console; não precisa executar junto.

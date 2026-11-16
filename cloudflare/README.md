# Versão de teste na Cloudflare

Beta publicada: https://naruto-arena-beta.andredoalmeida.workers.dev/naruto-arena/#game

Cadastro: https://naruto-arena-beta.andredoalmeida.workers.dev/naruto-arena/#register

Após a publicação, cadastro e partidas nesse endereço funcionam sem manter o Mac ou o túnel ligados. Para enviar alterações do código, execute `npm run cf:deploy`.

A versão do Mac permanece disponível com `npm run online`. Esta adaptação reutiliza o mesmo motor, cadastro e regras de validação. Nenhum banco local é apagado ou enviado automaticamente.

## Preparação e testes

- `npm run cf:build`: compila o site e um motor de servidor sem imagens embutidas.
- `npm run cf:check`: monta o pacote da Cloudflare, sem publicar.
- `npm run cf:test`: testa cadastro, sessão, avatar/equipe, duas conexões, dano real, privacidade, hibernação e fim do tempo automático. O teste demora cerca de um minuto por validar o alarme real.
- `node cloudflare/smoke.mjs <endereço-workers.dev>`: verifica a versão pública, cadastro/login e uma jogada; cria e remove somente uma conta temporária de diagnóstico.
- `npm run cf:dev`: prepara o banco de teste e abre a aplicação Cloudflare localmente, normalmente na porta 8787. As contas desse ambiente são separadas das contas do servidor Node.

## Publicar a versão beta

1. Conectar a ferramenta à conta Cloudflare:

   ```sh
   npx wrangler login --scopes account:read user:read workers_scripts:write d1:write
   ```

2. Executar na raiz do projeto:

   ```sh
   npm run cf:deploy
   ```

O comando valida e testa tudo antes de criar o banco dedicado `naruto-arena-beta`, aplicar as tabelas e publicar o Worker de mesmo nome. Se o banco já existir e não estiver configurado neste projeto, o comando para; não substitui bancos existentes. O identificador do banco criado fica em `wrangler.jsonc` e não é uma senha. Em uma conta com mais de uma organização, selecione explicitamente a conta de destino antes da publicação.

A Cloudflare fornece um endereço `workers.dev`, sem exigir compra de domínio. Nenhum script ativa plano pago. As cotas e o plano atual da conta devem ser acompanhados no painel. A publicação beta não é uma garantia de capacidade para qualquer quantidade de jogadores.

## Organização

- `worker.mjs`: rotas HTTP, arquivos estáticos e entrada das salas.
- `room.mjs`: um Durable Object por sala, WebSockets com hibernação, estado persistente e alarme no prazo do turno. Não fica acordando nem enviando a partida completa a cada segundo.
- `accounts.mjs`: armazenamento das contas e sessões no D1.
- `AccountService`: coordenador de cadastro/login e limites de tentativas persistentes. O hash de senha mantém scrypt com os mesmos parâmetros do Mac; roda num Durable Object para não depender do pequeno orçamento de CPU do Worker de entrada.
- `migrations/`: tabelas iniciais do banco Cloudflare.
- `../server/room-manager.mjs`: fluxo das partidas compartilhado com o servidor Node.
- `../server/account-rules.mjs`: validação e proteção de senha compartilhadas.

No navegador, o contador anda localmente entre atualizações. Só o servidor decide quando o turno acaba. A sala salva ações, escolhas privadas, ordem e metadados das conexões antes de hibernar. Se uma nova publicação mudar as regras do motor, salas da versão anterior são encerradas; entre em uma nova partida.

## Contas e limites

O banco beta começa vazio. Se houver contas no Mac que devam ser migradas, faça backup de `server/data/` com o servidor parado e prepare uma importação específica antes de abrir o cadastro público. Não copie senhas em texto: os hashes e os sais existentes podem ser preservados. O SQLite local continua intacto.

Recuperação e confirmação por e-mail, progressão competitiva e missões continuam fora desta etapa. As restrições de origem, cookies HttpOnly/SameSite, identidade conferida no servidor e separação dos dados do adversário são mantidas.

`generated/`, `public/`, `deploy/` e `.wrangler/` são arquivos de compilação ou dados locais de teste e não entram no Git. Credenciais da Cloudflare ficam sob gerenciamento do Wrangler, fora do código.

## Reconexão e faltas

O relógio continua quando alguém cai. O primeiro turno próprio que expira sem confirmação passa a vez; o segundo consecutivo encerra a partida em derrota. Confirmar um turno válido zera as faltas; apenas reconectar não zera. Ações ainda não confirmadas são descartadas ao vencer o prazo, sem gasto de energia. Desistir explicitamente continua imediato.

Contas têm uma sala ativa por vez. `/api/match` permite retomá-la após atualizar a página ou entrar na conta em outro aparelho. Convidados retomam na mesma aba por uma chave aleatória privada, guardada no sessionStorage; o servidor salva somente seu hash e não a envia ao adversário. Abrir a mesma equipe em outra janela substitui a conexão antiga. As salas, prazos e faltas sobrevivem à hibernação do Durable Object.

`npm run test:reconnection` verifica faltas, prazos, preservação das ações, chaves e substituição de conexões. Os testes Cloudflare verificam também retomada após hibernação e limpeza do registro de salas ativas. Publicações que alterem a versão do motor continuam encerrando as partidas antigas; as contas são preservadas.

## Partida rápida online

Com uma conta conectada e três personagens escolhidos, Rápida entra na fila automática. Duas contas diferentes formam uma partida; não é preciso código nem convite. A busca pode ser cancelada antes de encontrar o adversário. O servidor preserva os times da busca, escolhe quem começa e mantém as regras de reconexão e duas faltas. Atualizar a página depois do encontro retoma a partida pela conta.

A fila usa o Durable Object `QuickMatchmaking` e preserva buscas/cancelamentos ao hibernar. Somente buscas renovadas nos últimos 15 segundos podem encontrar adversário. IDs de busca impedem que uma requisição atrasada reative uma busca cancelada. A reserva das duas contas é atômica no D1. Partidas privadas continuam separadas da fila e também impedem a mesma conta de entrar em duas partidas.

Rápida é online e seus resultados são registrados na conta. Ranqueada ainda é teste local. O histórico já fica armazenado no servidor, mas sua consulta ainda não tem uma tela própria.

`npm run test:matchmaking` verifica pareamento, concorrência, cancelamentos e expiração. `node server/quick-http.test.mjs` verifica a fila HTTP no Mac com dois jogadores reais. Os testes Cloudflare e o teste público também incluem a fila rápida.

## Avatares

O catálogo de avatares vem de `src/account/avatares`, atualmente com 70 imagens. `src/account/avatarCatalog.ts` gera IDs pelo nome de arquivo (por exemplo, `avatar_01`) e ordena os números. Configurações → Editar avatar mostra uma lista visual com prévia e salvamento na conta. O mesmo ID é reconhecido pelo servidor do Mac e pela Cloudflare; os retratos dos personagens continuam sendo usados apenas na escolha da equipe. Avatares antigos já salvos continuam visíveis até o jogador escolher um dos novos.

Para acrescentar avatares, adicione uma imagem com nome único à pasta e compile/publique novamente. A validação do servidor acompanha o catálogo; não é necessário alterar o banco.

## Iniciais e missão do Haku

Os 21 iniciais são definidos em `src/missions/progression.ts`, incluindo Kin e Nohara Rin. Rin não é duplicada e o Obito inicial é o Obito do Time Minato. Os disponíveis aparecem antes dos bloqueados, preservando a ordem dos grupos. Personagens bloqueados podem ser consultados, mas não podem ser adicionados ao time nem usados no treinamento. O treinamento utiliza somente personagens já liberados. A verificação também acontece no servidor.

Contas começam como Estudante da Academia, nível 1. Provisoriamente cada vitória rápida ou em treinamento autenticado leva ao início do próximo rank: Genin 6, Chuunin 11, Missing-Nin 16, Anbu 21, Jounin 26, Sannin 31, Jinchuuriki 36, Akatsuki 41 e Kage 46 (limite provisório). Não há XP nem ranking global calculado; Hokage depende de ocupar o primeiro lugar e não é concedido automaticamente. A vitória que promove a Genin não conta para a missão do Haku: o rank mínimo é conferido no início da partida. Depois, cada vitória elegível soma um ponto por personagem exigido no time; Naruto e Sasuke juntos somam dois. Uma derrota ou empate com eles reinicia a sequência, enquanto partidas sem ambos são ignoradas pela missão. Privadas e treinamento como visitante não alteram a conta. O desbloqueio concluído é permanente. Outros personagens continuam bloqueados até receberem suas missões.

O treinamento de contas usa `/api/training` e o mesmo Room Durable Object: a IA e o resultado são executados no servidor, com reconexão e salvamento idempotente. O navegador não pode declarar uma vitória. Somente o resultado da conta humana é salvo.

`0003_progression.sql` acrescenta progresso e resultados ao D1, sem apagar as contas. O servidor Node cria as mesmas tabelas em seu SQLite. Resultados usam um identificador único e aplicação transacional para evitar duplicação. A Cloudflare salva a prova no Durable Object antes de registrar o resultado e só publica o fim da partida após salvar o progresso. `server/progression.test.mjs` e a integração Cloudflare verificam promoção, contagem, reinício, desbloqueio e repetição segura dos resultados.

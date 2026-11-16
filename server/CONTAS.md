# Cadastro e login no Mac

Não é necessário domínio nem serviço externo. O mesmo servidor da partida atende os formulários e mantém as contas no Mac.

## Usar

1. Na raiz do projeto, use Node.js **22.13 ou mais recente** (o Mac deste projeto está usando Node 26).
2. Encerre o servidor anterior no terminal com Control + C e execute `npm run online`.
3. Abra `http://localhost:3001/naruto-arena/#register`, ou use **Perfil → Criar conta** na seleção mobile. No computador, os links ficam junto ao perfil e em **Minha conta** no site.
4. Preencha nome de usuário, e-mail, senha e confirmação. O cadastro já inicia a sessão.
5. Em **Minha conta**, escolha e salve um avatar. As alterações da equipe são salvas automaticamente.
6. Use **Sair da conta** para encerrar a sessão. **Sair** na navegação do jogo apenas retorna à página inicial.

Para os amigos, mantenha o servidor e o túnel existentes e compartilhe o endereço HTTPS do túnel. Trocar o endereço do túnel pode exigir entrar novamente; as contas continuam salvas no mesmo Mac.

No desenvolvimento com `npm run dev`, mantenha também `npm run server:start` em outro terminal, após compilar o servidor. O Vite encaminha `/api` para a porta 3001. Acesso direto pela versão estática do GitHub Pages não disponibiliza contas.

## Dados permanentes

O banco padrão é `server/data/accounts.sqlite`. A pasta `server/data/` é ignorada pelo Git, não é servida pelo site e permanece intacta quando o projeto é recompilado. Ela guarda contas, sessões e preferências. Não deve ser apagada ao atualizar o código.

Para fazer backup, encerre o servidor e copie **a pasta inteira `server/data/`**. O SQLite pode manter arquivos auxiliares durante o funcionamento. Também é possível escolher uma pasta persistente diferente com a variável `ARENA_DATA_DIR`.

A senha não é guardada em texto: usa scrypt com sal aleatório individual. O navegador recebe um cookie de sessão HttpOnly, SameSite=Lax e Secure no acesso HTTPS. Só o hash do token é guardado no banco. A sessão vence em sete dias e sair da conta invalida o token utilizado.

O nome tem de 3 a 24 caracteres ASCII: letras, números, `_` e `-`. É permanente; maiúsculas/minúsculas são ignoradas na comparação, mas a grafia escolhida é preservada. O e-mail é obrigatório, privado e único, também comparado sem diferenciar maiúsculas. Senhas têm de 8 a 128 caracteres e preservam espaços, acentos e símbolos.

Avatar e equipe são validados pelo catálogo no servidor. A gravação confere qual conta iniciou a alteração para impedir que uma janela antiga sobrescreva preferências de outra conta. O perfil público das salas não inclui e-mail, senha ou sessão; convidados continuam disponíveis nas partidas privadas.

## Próximas etapas

Recuperação de senha e confirmação de e-mail dependem de configurar envio de mensagens; nenhum e-mail é enviado nesta etapa. Mudança de senha/e-mail, clãs e ranking global ainda estão em desenvolvimento. Contas novas começam no nível 1 como Estudante da Academia. Provisoriamente, a primeira vitória rápida promove para Genin, nível 5. Vitórias, derrotas, sequência e missão do Haku são persistidas no SQLite; privadas e treinamento não alteram o progresso.

## Verificações

- `npm test`: motor do jogo, formulários e contas.
- `npm run test:accounts`: validação, hash, duplicidade, persistência, sessões, origem das requisições, isolamento entre contas e limites de tentativas.
- `npm run online:build` e `node server/test.mjs --no-network`: compilação e salas, incluindo identidade autenticada e privacidade do perfil.

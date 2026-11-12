
# Naruto-Arena — Comandos úteis

## Iniciar o jogo no Mac

No terminal do VS Code:

npm run dev

Endereço local:
http://localhost:5173/

## Verificar se o projeto compila

npm run build

## Publicar atualizações no GitHub

Executar os comandos abaixo, um de cada vez:

git add .
git commit -m "Atualizar Naruto-Arena"
git push origin main

Após o envio, o GitHub Pages publica
automaticamente a nova versão.

## Sincronizar o projeto com o GitHub

git pull origin main

Usar antes de começar a trabalhar, especialmente
se houver alterações feitas diretamente no GitHub.

## Links importantes

Repositório:
https://github.com/andredoalmeida/naruto-arena

Site do jogo:
https://andredoalmeida.github.io/naruto-arena/

Acompanhar publicações:
https://github.com/andredoalmeida/naruto-arena/actions

## Observações

- Salvar os arquivos antes de publicar.
- Usar npm run build para verificar erros.
- Não editar arquivos dentro da pasta dist.
- A pasta node_modules não deve ser enviada ao GitHub.
- O GitHub Pages publica o jogo automaticamente
  após cada push para a branch main.

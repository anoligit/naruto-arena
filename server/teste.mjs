import { WebSocketServer } from 'ws'

const servidor = new WebSocketServer({ port: 3001 })

console.log('Servidor aguardando conexões na porta 3001.')

servidor.on('connection', (conexao) => {
  console.log('Um navegador se conectou!')

  conexao.on('message', (dados) => {
    const mensagem = dados.toString()

    console.log('Recebi:', mensagem)

    for (const cliente of servidor.clients) {
  if (cliente !== conexao && cliente.readyState === 1) {
    cliente.send(mensagem)
  }
}
  })
})

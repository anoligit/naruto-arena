import http from 'node:http'
import { readFileSync } from 'node:fs'
import { randomInt } from 'node:crypto'
import { pathToFileURL } from 'node:url'
import { WebSocketServer } from 'ws'

// Este teste é independente do jogo e guarda as salas apenas na memória.
export function criarServidor() {
  const pagina = readFileSync(new URL('./sala.html', import.meta.url))
  const salas = new Map()
  const servidor = http.createServer((pedido, resposta) => {
    if (!['/', '/health'].includes(pedido.url?.split('?')[0])) {
      resposta.writeHead(404).end('Não encontrado')
      return
    }
    resposta.setHeader('Cache-Control', 'no-store')
    resposta.setHeader('Content-Type', pedido.url === '/health' ? 'text/plain; charset=utf-8' : 'text/html; charset=utf-8')
    resposta.end(pedido.url === '/health' ? 'OK' : pagina)
  })
  const conexoes = new WebSocketServer({ server: servidor, path: '/play', maxPayload: 4096 })
  const enviar = (cliente, mensagem) => {
    if (cliente.readyState === 1) cliente.send(JSON.stringify(mensagem))
  }
  const avisarSala = sala => {
    for (const cliente of sala.clientes) enviar(cliente, {
      tipo: 'sala', codigo: sala.codigo,
      jogadores: [...sala.clientes].map(jogador => jogador.nome),
    })
  }

  conexoes.on('connection', cliente => {
    cliente.vivo = true
    cliente.on('pong', () => { cliente.vivo = true })
    cliente.on('error', () => {})
    let inicioJanela = Date.now(), quantidade = 0
    cliente.on('message', dados => {
      try {
        if (Date.now() - inicioJanela > 10_000) { inicioJanela = Date.now(); quantidade = 0 }
        if (++quantidade > 30) throw new Error('Aguarde alguns segundos antes de enviar novamente.')
        const mensagem = JSON.parse(dados.toString())
        if (!mensagem || typeof mensagem !== 'object') throw new Error('Mensagem inválida.')
        if (mensagem.tipo === 'criar' || mensagem.tipo === 'entrar') {
          if (cliente.sala) throw new Error('Você já está em uma sala.')
          const nome = typeof mensagem.nome === 'string' ? mensagem.nome.trim() : ''
          if (!nome || nome.length > 24) throw new Error('Use um nome de 1 a 24 caracteres.')
          let sala
          if (mensagem.tipo === 'criar') {
            if (salas.size >= 100) throw new Error('Servidor cheio.')
            let codigo
            const letras = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
            do { codigo = Array.from({ length: 6 }, () => letras[randomInt(letras.length)]).join('') } while (salas.has(codigo))
            sala = { codigo, clientes: new Set() }
            salas.set(codigo, sala)
          } else {
            sala = salas.get(mensagem.codigo)
            if (!sala) throw new Error('Sala não encontrada.')
            if (sala.clientes.size >= 2) throw new Error('Essa sala já tem dois jogadores.')
          }
          cliente.nome = nome
          cliente.sala = sala
          sala.clientes.add(cliente)
          avisarSala(sala)
        } else if (mensagem.tipo === 'mensagem') {
          if (!cliente.sala) throw new Error('Entre em uma sala primeiro.')
          if (typeof mensagem.texto !== 'string' || !mensagem.texto.trim() || mensagem.texto.length > 300) throw new Error('Use uma mensagem de 1 a 300 caracteres.')
          for (const destinatario of cliente.sala.clientes) enviar(destinatario, {
            tipo: 'mensagem', nome: cliente.nome, texto: mensagem.texto.trim(),
          })
        } else throw new Error('Tipo de mensagem desconhecido.')
      } catch (erro) { enviar(cliente, { tipo: 'erro', texto: erro instanceof Error ? erro.message : 'Mensagem inválida.' }) }
    })
    cliente.on('close', () => {
      if (!cliente.sala) return
      cliente.sala.clientes.delete(cliente)
      if (!cliente.sala.clientes.size) salas.delete(cliente.sala.codigo)
      else avisarSala(cliente.sala)
    })
  })
  const pulso = setInterval(() => {
    for (const cliente of conexoes.clients) {
      if (!cliente.vivo) { cliente.terminate(); continue }
      cliente.vivo = false
      cliente.ping()
    }
  }, 30_000)
  pulso.unref()
  servidor.on('close', () => clearInterval(pulso))
  return { servidor, conexoes }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { servidor } = criarServidor()
  const porta = Number(process.env.PORT || 3001)
  servidor.on('error', erro => {
    console.error(erro.code === 'EADDRINUSE' ? `A porta ${porta} está ocupada. Pare o teste anterior com Control + C.` : erro.message)
    process.exit(1)
  })
  servidor.listen(porta, '0.0.0.0', () => console.log(`Sala de teste: http://localhost:${porta}`))
}

import { randomBytes } from 'node:crypto'

export class QueueError extends Error {
  constructor(message,status=400) { super(message);this.status=status }
}
export const newRoomCode=()=>Array.from(randomBytes(6),byte=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[byte%32]).join('')
export const queueIdentity=account=>({id:account.id,username:account.username,avatarId:account.avatarId,profile:account.profile,progression:account.progression})

// Uma busca por conta; chamadas simultâneas são resolvidas na mesma ordem.
// A fila não cria uma partida até encontrar duas pessoas presentes.
export class QuickMatchmaker {
  constructor({version,validateTeam,currentMatch,createMatch,storage,now=Date.now}) {
    Object.assign(this,{version,validateTeam,currentMatch,createMatch,storage,now})
    this.waiting=new Map();this.cancelled=new Map();this.serial=Promise.resolve()
    this.loaded=storage ? Promise.all([storage.get('waiting'),storage.get('cancelled')]).then(([waiting,cancelled])=>{this.waiting=new Map(waiting??[]);this.cancelled=new Map(cancelled??[])}):Promise.resolve()
  }
  run(operation) {
    const job=this.serial.then(()=>this.loaded).then(operation)
    this.serial=job.catch(()=>{})
    return job
  }
  async save() { if(this.storage)await this.storage.put({waiting:[...this.waiting],cancelled:[...this.cancelled]}) }
  async existing(accountId) {
    const code=await this.currentMatch(accountId)
    if(code) {this.waiting.delete(accountId);return {status:'matched',code}}
    return null
  }
  request(account,input,cancel=false) {
    return this.run(async()=>{
      if(!account?.id)throw new QueueError('Entre na sua conta para jogar uma partida rápida.',401)
      if(typeof input?.searchId!=='string'||!/^[a-f0-9-]{36}$/.test(input.searchId))throw new QueueError('Identificador de busca inválido.')
      const now=this.now(),searchKey=account.id+':'+input.searchId
      for(const [key,until] of this.cancelled)if(until<=now)this.cancelled.delete(key)
      for(const [id,entry] of this.waiting)if(now-entry.seen>=15000)this.waiting.delete(id)
      const existing=await this.existing(account.id)
      if(existing){await this.save();return existing}
      if(cancel){
        if(this.waiting.get(account.id)?.searchId===input.searchId)this.waiting.delete(account.id)
        this.cancelled.set(searchKey,now+60000)
        await this.save();return {status:'cancelled'}
      }
      if(this.cancelled.has(searchKey))return {status:'cancelled'}
      if(input?.version!==this.version)throw new QueueError('O jogo foi atualizado. Atualize a página.',409)
      if(!Array.isArray(input.team)||input.team.length!==3||input.team.some(id=>typeof id!=='string'||id.length>80))throw new QueueError('Escolha três personagens válidos.')
      try {this.validateTeam(input.team,account)}catch{throw new QueueError('Escolha três personagens cadastrados e diferentes.')}
      const previous=this.waiting.get(account.id)
      if(!previous&&this.waiting.size>=100)throw new QueueError('A fila está cheia. Tente novamente em instantes.',429)
      const self={account:queueIdentity(account),team:input.team,version:input.version,searchId:input.searchId,joined:previous?.joined??now,seen:now}
      this.waiting.set(account.id,self)
      for(const [id,opponent] of this.waiting) {
        if(id===account.id||opponent.version!==this.version)continue
        if(await this.existing(id))continue
        // Só o servidor cria os dois times e escolhe quem começa.
        const code=await this.createMatch([opponent,self])
        this.waiting.delete(id);this.waiting.delete(account.id)
        await this.save()
        return {status:'matched',code}
      }
      await this.save()
      return {status:'searching'}
    })
  }
}

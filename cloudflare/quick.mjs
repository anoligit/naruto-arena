import { DurableObject } from 'cloudflare:workers'
import { QuickMatchmaker, newRoomCode } from '../server/matchmaking.mjs'
import { activeMatch } from './active-match.mjs'
import { characters, getCompleteTeam, multiplayerVersion, canUseCharacter } from './generated/engine.mjs'
import { json } from './http.mjs'

export class QuickMatchmaking extends DurableObject {
  constructor(ctx,env) {
    super(ctx,env)
    this.queue=new QuickMatchmaker({version:multiplayerVersion,storage:ctx.storage,
      validateTeam:(ids,account)=>{if(ids.some(id=>!canUseCharacter(id,account?.progression)))throw Error('Personagem bloqueado');if(!getCompleteTeam(ids.map(id=>characters.find(c=>c.id===id)??null)))throw Error('Time inválido')},
      currentMatch:id=>activeMatch(env,id),
      createMatch:async entries=>{
        const code=newRoomCode()
        const response=await env.ROOMS.getByName(code).fetch(new Request('https://room.internal/__quick',{
          method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code,version:multiplayerVersion,entries})}))
        if(!response.ok)throw Error('Não foi possível preparar a partida.')
        return code
      },
    })
  }
  async fetch(request) {
    try {
      const {account,input,cancel}=await request.json()
      return json(200,await this.queue.request(account,input,cancel))
    } catch(error) {return json(error.status??503,{error:error.status?error.message:'Não foi possível buscar adversário. Tente novamente.'})}
  }
}

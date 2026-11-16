import { useEffect, useState } from 'react'
import type { Character } from '../characters/definition'
import { useAccount } from '../account/useAccount'
import { multiplayerVersion } from './version'
import OnlineRoom from './OnlineRoom'

export default function TrainingMatch({team,onBack}:{team:Character[];onBack:()=>void}) {
  const {account}=useAccount()
  const [code,setCode]=useState<string|null>(null)
  const [error,setError]=useState('')
  const [retry,setRetry]=useState(0)
  useEffect(()=>{
    if(!account || code)return
    let stopped=false
    const controller=new AbortController()
    const timeout=setTimeout(()=>controller.abort(),15000)
    async function start() {
      try {
        const response=await fetch('/api/training',{method:'POST',credentials:'same-origin',cache:'no-store',signal:controller.signal,
          headers:{'Content-Type':'application/json','X-Arena-Account':account!.id},body:JSON.stringify({version:multiplayerVersion,team:team.map(c=>c.id)})})
        const reply=await response.json()
        if(!response.ok)throw new Error(reply.error??'Não foi possível iniciar o treinamento.')
        if(!/^[A-Z2-9]{6}$/.test(reply.code??''))throw new Error('O servidor enviou uma resposta inválida.')
        if(!stopped)setCode(reply.code)
      } catch(reason) {if(!stopped)setError(reason instanceof Error?reason.message:'Confira sua conexão e tente novamente.')}
      finally {clearTimeout(timeout)}
    }
    void start()
    return ()=>{stopped=true;clearTimeout(timeout);controller.abort()}
  },[account,team,retry,code])
  if(code)return <OnlineRoom team={team} recovery={{code}} onBack={onBack}/>
  return <main className="online-room"><h1>Treinamento</h1><p role="status">{error||'Preparando adversário...'}</p>
    {error&&<button onClick={()=>{setError('');setRetry(value=>value+1)}}>Tentar novamente</button>}
    <button disabled={!error} onClick={onBack}>Voltar à seleção</button></main>
}

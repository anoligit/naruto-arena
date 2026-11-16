import assert from 'node:assert/strict'
import { randomBytes } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { WebSocket } from 'ws'
import { multiplayerVersion } from '../server/dist/engine.mjs'

const base=new URL(process.argv[2]??'').origin
if(!base.endsWith('.workers.dev'))throw new Error('Informe o endereço da beta workers.dev.')
const suffix=randomBytes(5).toString('hex'),username='beta_'+suffix,password=randomBytes(24).toString('base64url')
let id,cookie;const extraIds=[],sockets=[]
async function api(action,{method='GET',data,owner}={}) {
  return fetch(base+'/api/account/'+action,{method,headers:{Origin:base,...(cookie?{Cookie:cookie}:{}),...(owner?{'X-Arena-Account':owner}:{}),...(data?{'Content-Type':'application/json'}:{})},...(data?{body:JSON.stringify(data)}:{}),signal:AbortSignal.timeout(20000)})
}
async function connection(room, resume=false, authenticated=!room, sessionCookie=cookie) {
  const url=new URL(base);url.protocol='wss:';url.pathname='/play';if(room)url.searchParams.set('room',room);if(resume)url.searchParams.set('resume','1')
  const socket=new WebSocket(url,{origin:base,...(authenticated?{headers:{Cookie:sessionCookie}}:{})});sockets.push(socket)
  const messages=[];socket.on('message',raw=>messages.push(JSON.parse(String(raw))))
  await new Promise((resolve,reject)=>{socket.once('open',resolve);socket.once('error',reject)})
  return {socket,messages,send:m=>socket.send(JSON.stringify(m)),wait:async predicate=>{
    const end=Date.now()+15000
    while(Date.now()<end){const item=messages.find(predicate);if(item)return item;await new Promise(resolve=>setTimeout(resolve,20))}
    throw new Error('A sala não respondeu como esperado: '+JSON.stringify(messages.map(m=>m.type==='error'?m.message:m.type)))
  }}
}
try {
  const health=await (await fetch(base+'/health',{signal:AbortSignal.timeout(15000)})).json();assert.equal(health.version,multiplayerVersion)
  const page=await fetch(base+'/naruto-arena/',{signal:AbortSignal.timeout(15000)});assert.equal(page.status,200)
  const html=await page.text(),asset=html.match(/src="(\/naruto-arena\/assets\/[^\"]+\.js)"/)?.[1];assert(asset)
  const script=await fetch(base+asset,{signal:AbortSignal.timeout(15000)});assert.equal(script.status,200)
  console.log('PASS Public site, JavaScript and server version respond successfully')
  let result=await api('register',{method:'POST',data:{username,email:`${username}@example.invalid`,password,confirmPassword:password}})
  assert.equal(result.status,201,await result.clone().text());const account=(await result.json()).account
  id=account.id;cookie=result.headers.get('set-cookie').split(';')[0]
  result=await api('preferences',{method:'PATCH',owner:id,data:{avatarId:'avatar_70',team:['classico-kankuro','classico-naruto','classico-sakura']}});assert.equal(result.status,200)
  result=await api('login',{method:'POST',data:{username:username.toUpperCase(),password}});assert.equal(result.status,200,await result.clone().text())
  cookie=result.headers.get('set-cookie').split(';')[0]
  result=await api('session');assert.equal((await result.json()).account.avatarId,'avatar_70')
  console.log('PASS Public registration, login and persistent preferences work with protected cookies')
  const a=await connection();a.send({type:'create',name:'Ignored',team:['classico-kankuro','classico-naruto','classico-sakura'],version:multiplayerVersion})
  const initial=(await a.wait(m=>m.type==='state')).snapshot,code=initial.code
  assert.equal(initial.players[0].name,username)
  const b=await connection(code);b.send({type:'join',code,name:'Teste beta',team:['classico-kankuro','classico-sasuke','classico-shino'],version:multiplayerVersion})
  const first=await a.wait(m=>m.type==='state'&&m.snapshot.session)
  await b.wait(m=>m.type==='state'&&m.snapshot.session)
  const activeId=first.snapshot.session.battle.activePlayerId,active=activeId==='player-1'?a:b,other=active===a?b:a
  const ready=[...active.messages].reverse().find(m=>m.type==='state'&&m.snapshot.session).snapshot.session
  const opponent=activeId==='player-1'?'player-2':'player-1',source=ready.battle.players[activeId].team[0],target=ready.battle.players[opponent].team[0]
  let seq=0;const command=value=>active.send({type:'command',turn:ready.battle.turnNumber,seq:++seq,command:value})
  command({type:'select-skill',characterInstanceId:source.instanceId,skillId:'classico-kankuro-2'})
  command({type:'select-target',targetInstanceId:target.instanceId})
  await active.wait(m=>m.type==='state'&&m.snapshot.session?.queue.length===1)
  command({type:'open-confirmation'});await active.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='confirmation')
  const payment={taijutsu:0,ninjutsu:0,bloodline:0,genjutsu:0};payment[Object.keys(payment).find(type=>ready.battle.players[activeId].energy[type]>0)]=1
  command({type:'allocate',value:payment});command({type:'confirm-turn'})
  for(const player of [active,other]) {
    const next=await player.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===2)
    assert.deepEqual(next.snapshot.session.battle.players[opponent].team.map(member=>member.health),[90,90,90])
    assert(!JSON.stringify(next).includes('@example.invalid'))
  }
  console.log('PASS Two public WebSocket players complete a paid attack and receive matching private-filtered results')
  const discovered=await fetch(base+'/api/match',{headers:{Cookie:cookie},signal:AbortSignal.timeout(15000)})
  assert.equal((await discovered.json()).code,code)
  const resumed=await connection(code,true,true)
  resumed.send({type:'resume',code,version:multiplayerVersion})
  const restored=(await resumed.wait(m=>m.type==='state')).snapshot
  assert.equal(restored.you,'player-1');assert.equal(restored.session.battle.turnNumber,2)
  const ticket=(await b.wait(m=>m.type==='resume-info')).token
  b.socket.close()
  const guest=await connection(code,true,false)
  guest.send({type:'resume',code,token:ticket,version:multiplayerVersion})
  const guestState=(await guest.wait(m=>m.type==='state')).snapshot
  assert.equal(guestState.you,'player-2')
  assert.equal(guestState.session.battle.turnEndsAt,restored.session.battle.turnEndsAt)
  console.log('PASS Public account discovery and guest/account reconnection preserve the running turn')
  resumed.send({type:'command',turn:2,seq:1,command:{type:'open-surrender'}})
  resumed.send({type:'command',turn:2,seq:2,command:{type:'confirm-surrender'}})
  await resumed.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
  const cleared=await fetch(base+'/api/match',{headers:{Cookie:cookie},signal:AbortSignal.timeout(15000)})
  assert.equal((await cleared.json()).code,null)
  const friendName='beta_'+randomBytes(5).toString('hex')
  let friendResponse=await fetch(base+'/api/account/register',{method:'POST',headers:{Origin:base,'Content-Type':'application/json'},body:JSON.stringify({username:friendName,email:friendName+'@example.invalid',password,confirmPassword:password}),signal:AbortSignal.timeout(20000)})
  assert.equal(friendResponse.status,201,await friendResponse.clone().text())
  const friend=(await friendResponse.json()).account,friendCookie=friendResponse.headers.get('set-cookie').split(';')[0]
  extraIds.push(friend.id)
  const searchA=crypto.randomUUID(),searchB=crypto.randomUUID()
  const quickRequest=async (owner,cookie,searchId)=>fetch(base+'/api/quick',{method:'POST',headers:{Origin:base,Cookie:cookie,'X-Arena-Account':owner,'Content-Type':'application/json'},body:JSON.stringify({searchId,version:multiplayerVersion,team:['classico-kankuro','classico-naruto','classico-sakura']}),signal:AbortSignal.timeout(20000)})
  result=await quickRequest(id,cookie,searchA);assert.equal(result.status,200,await result.clone().text());assert.equal((await result.json()).status,'searching')
  result=await quickRequest(friend.id,friendCookie,searchB);assert.equal(result.status,200,await result.clone().text())
  const quick=await result.json();assert.equal(quick.status,'matched')
  result=await quickRequest(id,cookie,searchA);assert.equal((await result.json()).code,quick.code)
  const quickA=await connection(quick.code,true,true),quickB=await connection(quick.code,true,true,friendCookie)
  for(const p of [quickA,quickB])p.send({type:'resume',code:quick.code,version:multiplayerVersion})
  const firstQuick=(await quickA.wait(m=>m.type==='state')).snapshot
  const secondQuick=(await quickB.wait(m=>m.type==='state')).snapshot
  assert.equal(firstQuick.mode,'quick');assert.equal(secondQuick.mode,'quick')
  const turnPlayer=firstQuick.session.battle.activePlayerId==='player-1'?quickA:quickB
  turnPlayer.send({type:'command',seq:1,turn:1,command:{type:'open-confirmation'}})
  turnPlayer.send({type:'command',seq:2,turn:1,command:{type:'confirm-turn'}})
  for(const p of [quickA,quickB])await p.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===2)
  quickA.send({type:'command',seq:100,turn:2,command:{type:'open-surrender'}})
  quickA.send({type:'command',seq:101,turn:2,command:{type:'confirm-surrender'}})
  await quickA.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
  console.log('PASS Public quick queue matches two accounts automatically; both connect and advance the shared battle')
  result=await api('logout',{method:'POST'});assert.equal(result.status,200)
  result=await api('session');assert.equal((await result.json()).account,null)
  console.log('PASS Public logout invalidates the test session')
} finally {
  for(const socket of sockets)socket.close()
  if(id) {
    const cleanupIds=[id,...extraIds];assert(cleanupIds.every(value=>/^[a-f0-9-]{36}$/.test(value)))
    const idList=cleanupIds.map(value=>`'${value}'`).join(',')
    const cleanup=spawnSync(process.execPath,['node_modules/wrangler/bin/wrangler.js','d1','execute','DB','--remote','--config','cloudflare/wrangler.jsonc','--command',`DELETE FROM sessions WHERE account_id IN (${idList}); DELETE FROM accounts WHERE id IN (${idList});`],{encoding:'utf8',env:{...process.env,CI:'true',CLOUDFLARE_SEND_METRICS:'false'}})
    if(cleanup.status!==0){process.stderr.write(cleanup.stderr);throw new Error('Não foi possível remover a conta temporária de teste.')}
    console.log('PASS Temporary diagnostic accounts removed; real player accounts left untouched')
  }
}

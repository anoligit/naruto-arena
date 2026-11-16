import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Miniflare, convertV4MiniflareOptions } from 'miniflare'
import { multiplayerVersion as nodeVersion } from '../server/dist/engine.mjs'

const mf = new Miniflare(convertV4MiniflareOptions({ cf:false, name:'naruto-arena-beta', modules:true,
  scriptPath:fileURLToPath(new URL('./deploy/worker.js',import.meta.url)),
  compatibilityDate:'2026-01-30',compatibilityFlags:['nodejs_compat'],
  durableObjects:{ROOMS:{className:'ArenaRoom',useSQLite:true},ACCOUNTS:{className:'AccountService',useSQLite:true},MATCHMAKING:{className:'QuickMatchmaking',useSQLite:true}},
  d1Databases:['DB'],
  serviceBindings:{ASSETS:async request=>{
    const path = new URL(request.url).pathname
    try { return new Response(await readFile(new URL('./public'+(path.endsWith('/')?path+'index.html':path),import.meta.url))) }
    catch { return new Response('Not found',{status:404}) }
  }} }))
let checks = 0
const pass = name=>{checks++;console.log('PASS '+name)}
const password=' senha çã! 123 ', origin='https://arena.test'
async function api(action,{method='GET',data,cookie,owner,foreign=false}={}) {
  return mf.dispatchFetch(`${origin}/api/account/${action}`,{method,
    headers:{Origin:foreign?'https://outside.test':origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{}),...(owner?{'X-Arena-Account':owner}:{})},
    ...(data?{body:JSON.stringify(data)}:{})})
}
function peer(socket) {
  const messages=[];socket.accept()
  socket.addEventListener('message',event=>messages.push(JSON.parse(event.data)))
  const wait = async (predicate,timeout=5000)=>{
    const until=Date.now()+timeout
    while(Date.now()<until) {const result=messages.find(predicate);if(result)return result;await new Promise(resolve=>setTimeout(resolve,10))}
    throw new Error('Mensagem não recebida: '+JSON.stringify(messages))
  }
  return {socket,messages,wait,send:value=>socket.send(JSON.stringify(value)),last:()=>messages.filter(m=>m.type==='state').at(-1)?.snapshot}
}
try {
  const db=await mf.getD1Database('DB')
  for(const file of (await readdir(new URL('./migrations/',import.meta.url))).filter(file=>file.endsWith('.sql')).sort()) {
    const schema=await readFile(new URL('./migrations/'+file,import.meta.url),'utf8')
    await db.batch(schema.split(';').map(s=>s.trim()).filter(Boolean).map(s=>db.prepare(s)))
  }
  const health=await (await mf.dispatchFetch(origin+'/health')).json()
  assert.equal(health.version,nodeVersion);assert.equal(health.hosting,'cloudflare')
  const page=await mf.dispatchFetch(origin+'/naruto-arena/');assert((await page.text()).includes('/naruto-arena/assets/'))
  pass('Cloudflare runs the same game version and resolves the compiled site under its existing URL')
  let response=await api('register',{method:'POST',data:{username:'Anoli',email:'anoli@example.com',password,confirmPassword:password}})
  assert.equal(response.status,201,await response.clone().text())
  const account=(await response.json()).account,cookie=response.headers.get('Set-Cookie').split(';')[0]
  assert(response.headers.get('Set-Cookie').includes('HttpOnly'));assert(response.headers.get('Set-Cookie').includes('Secure'))
  response=await api('session',{cookie});assert.equal((await response.json()).account.id,account.id)
  response=await api('login',{method:'POST',data:{username:'ANOLI',password:'incorrect-password'}});assert.equal(response.status,401)
  response=await api('register',{method:'POST',data:{username:'anoli',email:'different@example.com',password,confirmPassword:password}});assert.equal(response.status,409)
  response=await api('preferences',{method:'PATCH',cookie,owner:account.id,data:{avatarId:'avatar_70',team:['classico-naruto','classico-sasuke','classico-sakura']}});assert.equal(response.status,200)
  response=await api('preferences',{method:'PATCH',cookie,owner:'different',data:{avatarId:'naruto'}});assert.equal(response.status,409)
  const row=await db.prepare('SELECT password_hash,password_salt FROM accounts').first()
  assert.equal(row.password_hash.length,64);assert.equal(row.password_salt.length,16)
  pass('D1 registration/login preserve the existing scrypt protection, reject duplicates and isolate preferences')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','AccountService',{name:'accounts-v1'})
  response=await api('login',{method:'POST',data:{username:'aNoLi',password}});assert.equal(response.status,200)
  const loginCookie=response.headers.get('Set-Cookie').split(';')[0]
  response=await api('session',{cookie:loginCookie});assert.equal((await response.json()).account.avatarId,'avatar_70')
  pass('Accounts and saved preferences remain valid after the account coordinator is restarted')
  response=await mf.dispatchFetch(origin+'/play',{headers:{Upgrade:'websocket',Origin:origin,Cookie:loginCookie}})
  assert.equal(response.status,101)
  let a=peer(response.webSocket)
  a.send({type:'create',name:'Spoofed',avatarId:'naruto',team:['classico-kankuro','classico-naruto','classico-sakura'],version:health.version})
  const created=(await a.wait(m=>m.type==='state')).snapshot,code=created.code
  assert.equal(created.players[0].name,'Anoli');assert.equal(created.players[0].avatarId,'avatar_70')
  response=await mf.dispatchFetch(`${origin}/play?room=${code}`,{headers:{Upgrade:'websocket',Origin:origin}})
  assert.equal(response.status,101)
  let b=peer(response.webSocket)
  b.send({type:'join',name:'Friend',code,team:['classico-kankuro','classico-sasuke','classico-shino'],version:health.version})
  await a.wait(m=>m.type==='state'&&m.snapshot.session);await b.wait(m=>m.type==='state'&&m.snapshot.session)
  assert(!JSON.stringify(b.last()).includes('anoli@example.com'))
  const current=a.last().session.battle.activePlayerId
  let active=current==='player-1'?a:b,other=current==='player-1'?b:a
  const state=active.last().session.battle,source=state.players[current].team[0]
  const enemyId=current==='player-1'?'player-2':'player-1',target=state.players[enemyId].team[0]
  let seq=0,turn=state.turnNumber
  const command=value=>active.send({type:'command',seq:++seq,turn,command:value})
  const skillId='classico-kankuro-2'
  pass('Two Cloudflare WebSockets share a canonical match; account identity and hidden data stay private')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:code,webSockets:'hibernate'})
  command({type:'select-skill',characterInstanceId:source.instanceId,skillId})
  command({type:'select-target',targetInstanceId:target.instanceId})
  await active.wait(m=>m.type==='state'&&m.snapshot.session?.queue.length===1)
  assert.equal(other.last().session.queue.length,0)
  command({type:'open-confirmation'})
  await active.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='confirmation')
  const discover=await mf.dispatchFetch(origin+'/api/match',{headers:{Cookie:loginCookie}})
  assert.equal((await discover.json()).code,code)
  const guestTicket=(await b.wait(m=>m.type==='resume-info')).token
  const beforeResume=active.last().session
  a.socket.close();b.socket.close()
  await new Promise(resolve=>setTimeout(resolve,50))
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:code,webSockets:'hibernate'})
  response=await mf.dispatchFetch(`${origin}/play?room=${code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin,Cookie:loginCookie}})
  a=peer(response.webSocket);a.send({type:'resume',code,version:health.version})
  await a.wait(m=>m.type==='state'&&m.snapshot.session)
  response=await mf.dispatchFetch(`${origin}/play?room=${code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin}})
  b=peer(response.webSocket);b.send({type:'resume',code,token:guestTicket,version:health.version})
  await b.wait(m=>m.type==='state'&&m.snapshot.session)
  active=current==='player-1'?a:b;other=current==='player-1'?b:a;seq=0
  assert.equal(active.last().session.battle.turnEndsAt,beforeResume.battle.turnEndsAt)
  assert.equal(active.last().session.battle.phase,'confirmation')
  assert.deepEqual(active.last().session.queue,beforeResume.queue)
  assert.equal(other.last().session.queue.length,0)
  assert(!JSON.stringify(a.last()).includes(guestTicket))
  pass('Both disconnected players resume after hibernation with their queue, payment dialog and original deadline intact')
  const payment={taijutsu:0,bloodline:0,ninjutsu:0,genjutsu:0}
  payment[Object.keys(payment).find(type=>state.players[current].energy[type]>0)]=1
  command({type:'allocate',value:payment})
  command({type:'confirm-turn'})
  await active.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===turn+1)
  await other.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===turn+1)
  assert.equal(active.last().code,code)
  for(const p of [active,other]) assert.deepEqual(p.last().session.battle.players[enemyId].team.map(member=>member.health),[90,90,90])
  pass('The room survives hibernation with live sockets and both players receive the same next turn')
  // Turn numbers and expiry are canonical and cannot be forged after wake-up.
  command({type:'open-confirmation'})
  await active.wait(m=>m.type==='error'&&/turno mudou/.test(m.message))
  pass('A stale turn is rejected after room wake-up without mutating the canonical match')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:code,webSockets:'hibernate'})
  await other.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===turn+2,70000)
  assert.equal(other.last().session.queue.length,0)
  assert.equal(other.last().players.find(player=>player.id===other.last().you).missedTurns,1)
  pass('The persisted alarm expires the next turn automatically after hibernation without browser commands')
  const resumedTurn=active.last().session.battle.turnNumber
  active.send({type:'command',seq:++seq,turn:resumedTurn,command:{type:'open-surrender'}})
  active.send({type:'command',seq:++seq,turn:resumedTurn,command:{type:'confirm-surrender'}})
  await active.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
  await new Promise(resolve=>setTimeout(resolve,30))
  const cleared=await mf.dispatchFetch(origin+'/api/match',{headers:{Cookie:loginCookie}})
  assert.equal((await cleared.json()).code,null)
  pass('Finishing the match releases the account discovery entry')
  response=await api('register',{method:'POST',data:{username:'QuickFriend',email:'quick@example.com',password,confirmPassword:password}})
  assert.equal(response.status,201)
  const friend=(await response.json()).account,friendCookie=response.headers.get('Set-Cookie').split(';')[0]
  const quickTeam=['classico-kankuro','classico-naruto','classico-sakura']
  const searchOne=crypto.randomUUID(),searchTwo=crypto.randomUUID(),cancelId=crypto.randomUUID()
  const queueRequest=async (cookie,owner,searchId,method='POST',foreign=false,team=quickTeam)=>mf.dispatchFetch(origin+'/api/quick',{
    method,headers:{Origin:foreign?'https://outside.test':origin,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{}),'X-Arena-Account':owner},
    body:JSON.stringify({searchId,version:health.version,team})})
  assert.equal((await queueRequest(null,account.id,searchOne)).status,401)
  assert.equal((await queueRequest(loginCookie,'wrong-account',searchOne)).status,409)
  assert.equal((await queueRequest(loginCookie,account.id,searchOne,'POST',true)).status,403)
  response=await queueRequest(loginCookie,account.id,cancelId,'DELETE');assert.equal((await response.json()).status,'cancelled')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','QuickMatchmaking',{name:'quick-v1'})
  response=await queueRequest(loginCookie,account.id,cancelId);assert.equal((await response.json()).status,'cancelled')
  response=await queueRequest(loginCookie,account.id,searchOne);assert.equal((await response.json()).status,'searching')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','QuickMatchmaking',{name:'quick-v1'})
  response=await queueRequest(friendCookie,friend.id,searchTwo)
  assert.equal(response.status,200,await response.clone().text())
  const paired=await response.json();assert.equal(paired.status,'matched')
  response=await queueRequest(loginCookie,account.id,searchOne);assert.equal((await response.json()).code,paired.code)
  pass('Quick matchmaking authenticates accounts, preserves cancellation across hibernation and pairs two different players')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:paired.code})
  const quickPeers=[]
  for(const cookie of [loginCookie,friendCookie]) {
    response=await mf.dispatchFetch(`${origin}/play?room=${paired.code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin,Cookie:cookie}})
    assert.equal(response.status,101)
    const p=peer(response.webSocket);p.send({type:'resume',code:paired.code,version:health.version});await p.wait(m=>m.type==='state');quickPeers.push(p)
  }
  for(const p of quickPeers){assert.equal(p.last().mode,'quick');assert.equal(p.last().session.battle.turnNumber,1)}
  const quickActive=quickPeers.find(p=>p.last().you===p.last().session.battle.activePlayerId)
  const quickState=quickActive.last().session.battle,quickActor=quickState.activePlayerId,quickEnemy=quickActor==='player-1'?'player-2':'player-1'
  let quickSeq=0
  const quickCommand=command=>quickActive.send({type:'command',seq:++quickSeq,turn:1,command})
  quickCommand({type:'select-skill',characterInstanceId:quickState.players[quickActor].team[0].instanceId,skillId:'classico-kankuro-2'})
  quickCommand({type:'select-target',targetInstanceId:quickState.players[quickEnemy].team[0].instanceId})
  await quickActive.wait(m=>m.type==='state'&&m.snapshot.session?.queue.length===1)
  quickCommand({type:'open-confirmation'})
  const quickPayment={taijutsu:0,ninjutsu:0,bloodline:0,genjutsu:0}
  quickPayment[Object.keys(quickPayment).find(type=>quickState.players[quickActor].energy[type]>0)]=1
  quickCommand({type:'allocate',value:quickPayment});quickCommand({type:'confirm-turn'})
  for(const p of quickPeers){await p.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===2);assert.deepEqual(p.last().session.battle.players[quickEnemy].team.map(c=>c.health),[90,90,90])}
  quickPeers[0].send({type:'command',seq:100,turn:2,command:{type:'open-surrender'}})
  quickPeers[0].send({type:'command',seq:101,turn:2,command:{type:'confirm-surrender'}})
  await quickPeers[0].wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
  for(const p of quickPeers)p.socket.close()
  pass('Automatically matched players resume their prepared room and execute a real paid attack with matching results')
  response=await api('session',{cookie:friendCookie})
  let rewarded=(await response.json()).account
  assert.equal(rewarded.profile.rank,'Genin');assert.equal(rewarded.profile.level,6)
  assert.equal(rewarded.profile.wins,1);assert.equal(rewarded.progression.hakuStreak,0)
  // A primeira vitória apenas promove. As duas seguintes contam para Haku.
  for(let progress=1;progress<=2;progress++) {
    const searchA=crypto.randomUUID(),searchB=crypto.randomUUID()
    response=await queueRequest(loginCookie,account.id,searchA);assert.equal((await response.json()).status,'searching')
    response=await queueRequest(friendCookie,friend.id,searchB);const match=await response.json();assert.equal(match.status,'matched')
    const pair=[]
    for(const cookie of [loginCookie,friendCookie]) {
      response=await mf.dispatchFetch(`${origin}/play?room=${match.code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin,Cookie:cookie}})
      const p=peer(response.webSocket);p.send({type:'resume',code:match.code,version:health.version});await p.wait(m=>m.type==='state');pair.push(p)
    }
    pair[0].send({type:'command',seq:1,turn:1,command:{type:'open-surrender'}})
    pair[0].send({type:'command',seq:2,turn:1,command:{type:'confirm-surrender'}})
    await pair[0].wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
    response=await api('session',{cookie:friendCookie});rewarded=(await response.json()).account
    assert.equal(rewarded.progression.hakuStreak,progress)
    assert.equal(rewarded.progression.hakuUnlocked,progress===2)
    // Hibernar e consultar de novo não reaplica o resultado.
    await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:match.code,webSockets:'hibernate'})
    await mf.dispatchFetch(origin+'/api/match',{headers:{Cookie:friendCookie}})
    response=await api('session',{cookie:friendCookie});assert.equal((await response.json()).account.profile.wins,progress+1)
    for(const p of pair)p.socket.close()
    if(progress===1) {
      // Uma derrota sem Naruto nem Sasuke não interrompe a sequência da missão.
      await queueRequest(loginCookie,account.id,crypto.randomUUID())
      response=await queueRequest(friendCookie,friend.id,crypto.randomUUID(),'POST',false,['classico-shino','classico-chouji','classico-ino'])
      const unrelated=await response.json();assert.equal(unrelated.status,'matched')
      response=await mf.dispatchFetch(`${origin}/play?room=${unrelated.code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin,Cookie:friendCookie}})
      const loss=peer(response.webSocket);loss.send({type:'resume',code:unrelated.code,version:health.version})
      await loss.wait(m=>m.type==='state')
      loss.send({type:'command',seq:1,turn:1,command:{type:'open-surrender'}})
      loss.send({type:'command',seq:2,turn:1,command:{type:'confirm-surrender'}})
      await loss.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
      response=await api('session',{cookie:friendCookie});const ignored=(await response.json()).account
      assert.equal(ignored.progression.hakuStreak,1);assert.equal(ignored.profile.losses,1)
      loss.socket.close()
      pass('A loss without the required characters preserves the mission streak while recording the normal account loss')
    }
  }
  assert.equal((await db.prepare('SELECT COUNT(*) AS n FROM account_results WHERE account_id=?').bind(friend.id).first()).n,4)
  pass('Server results promote to Genin, persist two later mission wins, unlock Haku and survive retries without double counting')
  const startTraining=(team,extra={})=>mf.dispatchFetch(origin+'/api/training',{
    method:'POST',headers:{Origin:origin,Cookie:friendCookie,'X-Arena-Account':friend.id,'Content-Type':'application/json',...extra},body:JSON.stringify({version:health.version,team})})
  response=await startTraining(['classico-kakashi',...quickTeam.slice(0,2)]);assert.equal(response.status,400)
  response=await startTraining(quickTeam,{Origin:'https://outside.test'});assert.equal(response.status,403)
  response=await startTraining(quickTeam,{'X-Arena-Account':account.id});assert.equal(response.status,409)
  response=await api('session',{cookie:friendCookie});const beforeTraining=(await response.json()).account
  response=await startTraining(['classico-naruto','classico-sasuke','classico-sakura'])
  assert.equal(response.status,200,await response.clone().text());const training=await response.json()
  response=await startTraining(quickTeam);assert.equal((await response.json()).code,training.code)
  response=await mf.dispatchFetch(`${origin}/play?room=${training.code}&resume=1`,{headers:{Upgrade:'websocket',Origin:origin,Cookie:friendCookie}})
  const trainee=peer(response.webSocket);trainee.send({type:'resume',code:training.code,version:health.version})
  await trainee.wait(m=>m.type==='state'&&m.snapshot.session)
  assert.equal(trainee.last().mode,'training');assert.equal(trainee.last().players[1].connected,true)
  trainee.send({type:'command',seq:1,turn:1,command:{type:'open-confirmation'}})
  trainee.send({type:'command',seq:2,turn:1,command:{type:'confirm-turn'}})
  await trainee.wait(m=>m.type==='state'&&m.snapshot.session?.battle.turnNumber===3)
  assert.equal(trainee.last().session.battle.activePlayerId,'player-1')
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:training.code,webSockets:'hibernate'})
  trainee.send({type:'command',seq:3,turn:3,command:{type:'open-surrender'}})
  trainee.send({type:'command',seq:4,turn:3,command:{type:'confirm-surrender'}})
  await trainee.wait(m=>m.type==='state'&&m.snapshot.session?.battle.phase==='finished')
  response=await api('session',{cookie:friendCookie});const afterTraining=(await response.json()).account
  assert.equal(afterTraining.profile.losses,beforeTraining.profile.losses+1)
  assert.equal(afterTraining.profile.wins,beforeTraining.profile.wins)
  assert.equal(afterTraining.progression.hakuUnlocked,true)
  await mf.unsafeEvictDurableObject('naruto-arena-beta','ArenaRoom',{name:training.code,webSockets:'hibernate'})
  await mf.dispatchFetch(origin+'/api/match',{headers:{Cookie:friendCookie}})
  response=await api('session',{cookie:friendCookie});assert.equal((await response.json()).account.profile.losses,afterTraining.profile.losses)
  assert.equal((await db.prepare('SELECT COUNT(*) AS n FROM account_results WHERE match_id=(SELECT match_id FROM account_results WHERE account_id=? ORDER BY completed_at DESC LIMIT 1)').bind(friend.id).first()).n,1)
  trainee.socket.close()
  pass('Account training validates owned teams and origin, resumes one match, executes server AI, survives hibernation and saves only the human result once')
  const forbidden=await api('logout',{method:'POST',cookie:loginCookie,foreign:true});assert.equal(forbidden.status,403)
  response=await api('logout',{method:'POST',cookie:loginCookie});assert.equal(response.status,200)
  response=await api('session',{cookie:loginCookie});assert.equal((await response.json()).account,null)
  a.socket.close();b.socket.close()
  console.log(`${checks} grupos de integração Cloudflare passaram.`)
} finally { await mf.dispose() }

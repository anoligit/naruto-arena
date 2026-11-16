import assert from 'node:assert/strict'
import { PrivateRooms as ProductionRooms } from './rooms.mjs'
class PrivateRooms extends ProductionRooms { constructor(options={}) {super({...options,enforceUnlocks:false})} }
import { multiplayerVersion } from './dist/engine.mjs'
const team=['classico-naruto','classico-young-kakashi','classico-sakura']
class Socket {
  readyState=1;messages=[]
  send(raw){this.messages.push(JSON.parse(raw))}
  close(code){this.readyState=3;this.closeCode=code}
  last(type='state'){return this.messages.filter(m=>m.type===type).at(-1)}
}
function setup(account=null) {
  let now=1000
  const manager=new PrivateRooms({now:()=>now,startingPlayer:()=> 'player-1'})
  const a=new Socket(),b=new Socket()
  manager.connect(a,()=>account);manager.connect(b)
  const receive=(socket,message)=>manager.receive(socket,JSON.stringify(message))
  receive(a,{type:'create',name:'Ana',team,version:multiplayerVersion})
  const code=a.last().snapshot.code
  receive(b,{type:'join',code,name:'Bruno',team,version:multiplayerVersion})
  const room=manager.rooms.get(code),sequences=new Map()
  const command=(socket,command)=>{const seq=(sequences.get(socket)??0)+1;sequences.set(socket,seq);receive(socket,{type:'command',seq,turn:room.session.battle.turnNumber,command})}
  const expire=()=>{now=room.session.battle.turnEndsAt;manager.pulse()}
  const pass=socket=>{command(socket,{type:'open-confirmation'});command(socket,{type:'confirm-turn'})}
  const resume=(old,identity=null,token=old.last('resume-info')?.token)=>{const socket=new Socket();manager.connect(socket,()=>identity);receive(socket,{type:'resume',code,version:multiplayerVersion,...(token?{token}:{})});return socket}
  return {manager,room,a,b,receive,command,expire,pass,resume,time:value=>{now=value}}
}
let count=0
function test(name,run){run();console.log('PASS '+name);count++}
test('Disconnect waits for the original deadline; two consecutive own expiries forfeit',()=>{
  const {manager,room,a,b,time,expire,pass}=setup()
  const deadline=room.session.battle.turnEndsAt
  a.close();manager.disconnect(a)
  time(deadline-1);manager.pulse()
  assert.equal(room.session.battle.turnNumber,1)
  expire();assert.equal(room.session.battle.turnNumber,2);assert.equal(room.seats.get('player-1').missedTurns,1)
  assert.equal(room.session.battle.phase,'planning');pass(b)
  assert.equal(room.session.battle.activePlayerId,'player-1')
  expire();assert.equal(room.session.battle.phase,'finished');assert.equal(room.session.battle.winnerId,'player-2')
})
test('Rejoining preserves choices, energy and deadline, replacing the old connection securely',()=>{
  const {manager,room,a,b,command,resume}=setup()
  room.session.battle.players['player-1'].energy={taijutsu:20,bloodline:20,ninjutsu:20,genjutsu:20}
  command(a,{type:'select-skill',characterInstanceId:'player-1:classico-naruto',skillId:'classico-naruto-1'})
  command(a,{type:'select-target',targetInstanceId:'player-2:classico-naruto'})
  command(a,{type:'open-confirmation'});command(a,{type:'allocate',value:{taijutsu:0,bloodline:0,ninjutsu:0,genjutsu:1}})
  const before=structuredClone(room.session),next=resume(a)
  assert.deepEqual(room.session,before);assert.equal(a.closeCode,4001)
  assert.deepEqual(next.last().snapshot.session.queue,before.queue)
  assert.equal(next.last().snapshot.session.battle.turnEndsAt,before.battle.turnEndsAt)
  command(a,{type:'confirm-turn'});assert.equal(room.session.battle.turnNumber,1)
  command(next,{type:'confirm-turn'});assert.equal(room.session.battle.turnNumber,2)
  assert.equal(b.last().snapshot.session.queue.length,0)
  assert(!JSON.stringify(b.last()).includes(a.last('resume-info').token))
  assert(!JSON.stringify(b.last()).includes('resumeHash'))
  assert.equal(manager.clients.has(a),false)
})
test('Reconnection does not erase a missed turn; successful confirmation does',()=>{
  const {manager,room,a,b,expire,pass,resume}=setup()
  expire();pass(b)
  a.close();manager.disconnect(a)
  const next=resume(a)
  assert.equal(room.seats.get('player-1').missedTurns,1)
  pass(next);assert.equal(room.seats.get('player-1').missedTurns,0)
  pass(b);expire();assert.equal(room.session.battle.phase,'planning')
  pass(b);expire();assert.equal(room.session.battle.winnerId,'player-2')
})
test('Guest secrets and account identity cannot be substituted by names or forged keys',()=>{
  const identity={id:'account-1',username:'Ana',avatarId:'avatar_01',profile:{name:'Ana'}}
  const {manager,room,a,b,resume,receive}=setup(identity)
  assert.equal(manager.currentMatch(identity.id),room.code)
  assert.equal(resume(a,{...identity,id:'attacker'}).last('error').type,'error')
  assert.equal(resume(b,null,'A'.repeat(43)).last('error').type,'error')
  const legit=resume(a,identity);assert.equal(legit.last().snapshot.you,'player-1')
  const second=new Socket();manager.connect(second,()=>identity)
  receive(second,{type:'create',name:'Other',team,version:multiplayerVersion})
  assert.match(second.last('error').message,/andamento/)
})
test('Both players may disconnect; clocks continue and reserved seats survive until cleanup',()=>{
  const {manager,room,a,b,expire,time}=setup()
  a.close();manager.disconnect(a);b.close();manager.disconnect(b)
  assert.equal(manager.rooms.size,1)
  expire();assert.equal(room.seats.get('player-1').missedTurns,1)
  expire();assert.equal(room.seats.get('player-2').missedTurns,1)
  expire();assert.equal(room.session.battle.phase,'finished')
  time(room.finishedAt+15*60000+1);manager.pulse();assert.equal(manager.rooms.size,0)
})
test('Disconnect during an opponent turn only counts the disconnected player’s own turns',()=>{
  const {manager,room,a,b,pass,expire}=setup()
  b.close();manager.disconnect(b);pass(a)
  assert.equal(room.seats.get('player-2').missedTurns,0)
  expire();assert.equal(room.seats.get('player-2').missedTurns,1)
  pass(a);expire();assert.equal(room.session.battle.winnerId,'player-1')
})
test('A timed out queued attack is discarded without dealing damage or paying its cost',()=>{
  const {room,a,command,expire}=setup()
  room.session.battle.players['player-1'].energy={taijutsu:20,bloodline:20,ninjutsu:20,genjutsu:20}
  command(a,{type:'select-skill',characterInstanceId:'player-1:classico-naruto',skillId:'classico-naruto-1'})
  command(a,{type:'select-target',targetInstanceId:'player-2:classico-naruto'})
  assert.equal(room.session.queue.length,1);expire()
  assert.equal(room.session.queue.length,0)
  assert.equal(room.session.battle.players['player-2'].team[0].health,100)
  assert.equal(room.session.battle.players['player-1'].energy.taijutsu,20)
})
console.log(`${count} grupos de reconexão passaram.`)

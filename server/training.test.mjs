import assert from 'node:assert/strict'
import { PrivateRooms } from './rooms.mjs'
import { multiplayerVersion } from './dist/engine.mjs'
import { roomResult } from './progression.mjs'
import { hakuMission } from './dist/engine.mjs'
const account={id:'training-owner',username:'Ninja',profile:{level:6},progression:{hakuUnlocked:false}}
const team=['classico-naruto','classico-sasuke','classico-sakura']
let now=1000
const rooms=new PrivateRooms({now:()=>now})
assert.throws(()=>rooms.prepareTraining('LOCKED',account,['classico-haku',...team.slice(0,2)]),/bloqueado/)
const room=rooms.prepareTraining('TRAIN2',account,team)
assert.equal(room.mode,'training');assert.equal(room.session.battle.activePlayerId,'player-1')
assert.equal(rooms.currentMatch(account.id),'TRAIN2')
assert.throws(()=>rooms.prepareTraining('TRAIN3',account,team),/andamento/)
const socket={readyState:1,messages:[],send(raw){this.messages.push(JSON.parse(raw))},close(){this.readyState=3}}
rooms.connect(socket,()=>account)
rooms.receive(socket,JSON.stringify({type:'resume',code:room.code,version:multiplayerVersion}))
assert.equal(socket.messages.at(-1).snapshot.mode,'training')
assert.equal(socket.messages.at(-1).snapshot.players[1].connected,true)
let seq=0
function command(command){rooms.receive(socket,JSON.stringify({type:'command',seq:++seq,turn:room.session.battle.turnNumber,command}))}
command({type:'open-confirmation'});command({type:'confirm-turn'})
assert.equal(room.session.battle.turnNumber,3)
assert.equal(room.session.battle.activePlayerId,'player-1')
assert.equal(room.seats.get('player-1').missedTurns,0)
const turn=room.session.battle.turnNumber
rooms.receive(socket,JSON.stringify({type:'result',winnerId:'player-1'}))
assert.equal(socket.messages.at(-1).type,'error');assert.equal(roomResult(room,hakuMission),null)
now=room.session.battle.turnEndsAt+1;rooms.pulse()
assert.equal(room.session.battle.turnNumber,turn+2)
assert.equal(room.session.battle.activePlayerId,'player-1');assert.equal(room.seats.get('player-1').missedTurns,1)
command({type:'open-surrender'})
const before=socket.messages.length
command({type:'confirm-surrender'})
assert.equal(socket.messages.length,before,'Final result is withheld until the account transaction commits')
assert.equal(room.session.battle.winnerId,'player-2')
const result=roomResult(room,hakuMission)
assert.equal(result.players.length,1);assert.equal(result.players[0].outcome,'loss');assert.equal(result.players[0].points,2)
room.resultSaved=true;rooms.publish(room)
assert.equal(socket.messages.at(-1).snapshot.session.battle.phase,'finished')
assert.equal(rooms.currentMatch(account.id),null)
// Fixture de fim de combate: a vitória vem da execução de uma habilidade pelo
// mesmo caminho de comandos usado pelo navegador, sem enviar um resultado.
const winning=rooms.prepareTraining('TRAIN4',account,team)
for(const enemy of winning.session.battle.players['player-2'].team)enemy.health=0
winning.session.battle.players['player-2'].team[0].health=1
winning.session.battle.players['player-1'].energy={taijutsu:5,bloodline:5,ninjutsu:5,genjutsu:5}
const victor={readyState:1,messages:[],send(raw){this.messages.push(JSON.parse(raw))},close(){}}
rooms.connect(victor,()=>account)
rooms.receive(victor,JSON.stringify({type:'resume',code:winning.code,version:multiplayerVersion}))
let winSeq=0
const winCommand=command=>rooms.receive(victor,JSON.stringify({type:'command',seq:++winSeq,turn:winning.session.battle.turnNumber,command}))
winCommand({type:'select-skill',characterInstanceId:winning.session.battle.players['player-1'].team[0].instanceId,skillId:'classico-naruto-1'})
winCommand({type:'select-target',targetInstanceId:winning.session.battle.players['player-2'].team[0].instanceId})
assert.equal(winning.session.queue.length,1)
winCommand({type:'open-confirmation'})
winCommand({type:'allocate',value:{taijutsu:1,bloodline:0,ninjutsu:0,genjutsu:0}})
winCommand({type:'confirm-turn'})
assert.equal(winning.session.battle.phase,'finished')
assert.equal(roomResult(winning,hakuMission).players[0].outcome,'win')
console.log('PASS Server training: owned team only, one active match, server AI, timeouts, rejected fake results and final state withheld until persistence.')

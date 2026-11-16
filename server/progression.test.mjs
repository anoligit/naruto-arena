import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { Accounts } from './accounts.mjs'
import { PrivateRooms } from './rooms.mjs'
import { roomResult, progressProfile, provisionalRanks } from './progression.mjs'
import { newRoomCode } from './matchmaking.mjs'
import { characters, canUseCharacter, multiplayerVersion, characterMissions } from './dist/engine.mjs'
const hakuMission=characterMissions.find(m=>m.id==='haku')
const accounts=new Accounts({file:':memory:',characterIds:characters.map(c=>c.id)})
const naruto=['classico-naruto','classico-kin','classico-rin'],sasuke=['classico-sasuke','classico-kiba','classico-tenten'],other=['classico-shino','classico-chouji','classico-ino']
try {
 const create=async name=>accounts.register({username:name,email:name+'@example.com',password:'password123',confirmPassword:'password123'})
 const a=await create('MissionA'),b=await create('MissionB')
 const current=()=>accounts.session(a.token)
 function finish(team,winner='player-1') {
  const rooms=new PrivateRooms(),room=rooms.prepareQuick(newRoomCode(),[{account:accounts.identity(a.token),team},{account:accounts.identity(b.token),team:other}])
  room.session.battle.phase='finished';room.session.battle.winnerId=winner
  const result=roomResult(room,hakuMission);accounts.recordResult(result);return {result,room}
 }
 assert.equal(characters.filter(c=>canUseCharacter(c.id)).length,21)
 assert.equal(current().profile.rank,'Estudante da Academia');assert.equal(current().profile.level,1)
 for(const id of ['classico-kin','classico-rin','classico-young-kakashi','classico-obito'])assert(canUseCharacter(id,current().progression))
 assert(!canUseCharacter('classico-haku',current().progression));assert(!canUseCharacter('classico-kakashi',current().progression));assert(!canUseCharacter('naruto',current().progression))
 const first=finish(naruto)
 assert.equal(current().profile.level,6);assert.equal(current().profile.rank,'Genin');assert.equal(current().progression.hakuStreak,0)
 for(let i=0;i<5;i++)accounts.recordResult(first.result)
 assert.equal(current().profile.wins,1)
 finish(naruto);assert.equal(current().progression.hakuStreak,1)
 finish(naruto,'player-2');assert.equal(current().progression.hakuStreak,0);assert.equal(current().profile.level,11)
 finish(naruto);assert.equal(current().progression.hakuStreak,1)
 finish(other);assert.equal(current().progression.hakuStreak,1)
 finish(other,'player-2');assert.equal(current().progression.hakuStreak,1)
 finish(other,null);assert.equal(current().progression.hakuStreak,1)
 const final=finish(sasuke);assert.equal(current().progression.hakuStreak,2);assert.equal(current().progression.hakuUnlocked,true)
 assert(canUseCharacter('classico-haku',current().progression))
 accounts.recordResult(final.result);assert.equal(current().profile.wins,5)
 finish(['classico-haku','classico-kin','classico-rin'],'player-2');assert.equal(current().progression.hakuUnlocked,true)
 const before=JSON.stringify(current());assert.equal(roomResult({...first.room,mode:'private'},hakuMission),null);assert.equal(JSON.stringify(current()),before)
 const rooms=new PrivateRooms(),socket={readyState:1,messages:[],send(raw){this.messages.push(JSON.parse(raw))},close(){}}
 rooms.connect(socket,()=>accounts.identity(b.token))
 rooms.receive(socket,JSON.stringify({type:'create',version:multiplayerVersion,name:'spoof',team:['classico-haku',...other.slice(0,2)],progression:{hakuUnlocked:true}}))
 assert.match(socket.messages.at(-1).message,/bloqueado/);assert.equal(rooms.rooms.size,0)
 assert.equal(accounts.db.prepare('SELECT COUNT(*) AS n FROM account_results WHERE account_id=?').get(a.account.id).n,9)
 const custom=await create('MissionEdited'),foe=await create('MissionOpponent')
 const edited={...hakuMission,minimumLevel:1,objective:{...hakuMission.objective,consecutiveWins:3,charactersAnyOf:['classico-kin']}}
 for(let count=1;count<=3;count++){
  const rooms=new PrivateRooms(),room=rooms.prepareQuick(newRoomCode(),[{account:accounts.identity(custom.token),team:['classico-kin','classico-kiba','classico-rin']},{account:accounts.identity(foe.token),team:other}])
  room.session.battle.phase='finished';room.session.battle.winnerId='player-1'
  accounts.recordResult(roomResult(room,edited))
  const saved=accounts.session(custom.token)
  assert.equal(saved.progression.hakuStreak,count);assert.equal(saved.progression.hakuUnlocked,count===3)
 }
 const both=await create('MissionBoth')
 function trainingWin(team) {
  const rooms=new PrivateRooms(),room=rooms.prepareTraining(newRoomCode(),accounts.identity(both.token),team)
  room.session.battle.phase='finished';room.session.battle.winnerId='player-1'
  const result=roomResult(room,hakuMission)
  assert.equal(result.players.length,1)
  accounts.recordResult(result)
  for(let i=0;i<3;i++)accounts.recordResult(result)
 }
 trainingWin(['classico-naruto','classico-sasuke','classico-sakura'])
 assert.equal(accounts.session(both.token).profile.level,6)
 assert.equal(accounts.session(both.token).progression.hakuStreak,0)
 trainingWin(['classico-naruto','classico-sasuke','classico-sakura'])
 assert.equal(accounts.session(both.token).profile.level,11)
 assert.equal(accounts.session(both.token).profile.wins,2)
 assert.equal(accounts.session(both.token).progression.hakuStreak,2)
 assert.equal(accounts.session(both.token).progression.hakuUnlocked,true)
 for(let wins=0;wins<15;wins++) {
  const [rank,level]=provisionalRanks[Math.min(wins,9)], profile=progressProfile({wins,losses:3},'Ninja')
  assert.equal(profile.rank,rank);assert.equal(profile.level,level);assert.equal(profile.overallRank,null)
 }
 console.log('PASS Training results persist once, the promotion victory is ineligible, both characters grant two points and ranks advance to Kage.')
 console.log('PASS Mission requirements are configurable: level 1, Kin and three wins are enforced without changing the SQL.')
 console.log('PASS Mission progression: first win → Genin 6, two later qualifying wins, resets, permanent Haku unlock, atomic retry and server-side locks.')
} finally {accounts.close()}

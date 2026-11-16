import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { QuickMatchmaker } from './matchmaking.mjs'
import { PrivateRooms } from './rooms.mjs'
import { multiplayerVersion } from './dist/engine.mjs'
const team=['classico-naruto','classico-sasuke','classico-sakura']
const account=id=>({id,username:id,avatarId:team[0],email:'never-public@example.com',profile:{name:id}})
const input=(searchId=randomUUID())=>({searchId,version:multiplayerVersion,team})
function setup(storage) {
  let now=1000,next=0
  const rooms=new PrivateRooms({now:()=>now})
  const options={version:multiplayerVersion,storage,now:()=>now,validateTeam:ids=>rooms.team(ids),currentMatch:id=>rooms.currentMatch(id),createMatch:entries=>{const code='ABCD'+['AA','AB','AC','AD'][next++];rooms.prepareQuick(code,entries);return code}}
  return {queue:new QuickMatchmaker(options),options,rooms,time:value=>{now=value}}
}
let checks=0
async function test(name,run){await run();checks++;console.log('PASS '+name)}
await test('Two accounts match once with server-owned teams, names and mode; snapshots keep account secrets private',async()=>{
  const {queue,rooms}=setup(),a=account('A'),b=account('B')
  assert.equal((await queue.request(a,input())).status,'searching')
  const matched=await queue.request(b,input());assert.equal(matched.status,'matched')
  assert.equal((await queue.request(a,input())).code,matched.code)
  const room=rooms.rooms.get(matched.code);assert.equal(room.mode,'quick');assert.equal(room.seats.size,2)
  assert.deepEqual([...room.seats.values()].map(seat=>seat.account.id),['A','B'])
  assert.deepEqual(room.session.battle.players['player-1'].team.map(c=>c.characterId),team)
  assert(!JSON.stringify(rooms.snapshot(room,'player-1')).includes('never-public'))
  assert.equal(rooms.snapshot(room,'player-2').mode,'quick');assert.equal(queue.waiting.size,0)
})
await test('Concurrent searches form disjoint pairs and never match an account against itself',async()=>{
  const {queue,rooms}=setup(),a=account('A')
  await Promise.all([queue.request(a,input()),queue.request(a,input())]);assert.equal(rooms.rooms.size,0);assert.equal(queue.waiting.size,1)
  await Promise.all(['B','C','D'].map(id=>queue.request(account(id),input())))
  assert.equal(rooms.rooms.size,2)
  const ids=[...rooms.rooms.values()].flatMap(room=>[...room.seats.values()].map(seat=>seat.account.id))
  assert.equal(new Set(ids).size,4)
})
await test('Cancellation wins over a delayed enqueue and an older tab cannot cancel a newer search',async()=>{
  const {queue,rooms}=setup(),a=account('A'),old=input(),fresh=input()
  assert.equal((await queue.request(a,old,true)).status,'cancelled')
  assert.equal((await queue.request(a,old)).status,'cancelled')
  await queue.request(a,fresh);await queue.request(a,old,true)
  assert.equal(queue.waiting.get(a.id).searchId,fresh.searchId)
  await queue.request(account('B'),input());assert.equal(rooms.rooms.size,1)
  assert.equal((await queue.request(a,fresh,true)).status,'matched')
})
await test('Expired searches are removed and invalid teams, versions and anonymous requests cannot enter',async()=>{
  const {queue,rooms,time}=setup()
  await assert.rejects(queue.request(null,input()),error=>error.status===401)
  await assert.rejects(queue.request(account('X'),{...input(),team:['naruto','naruto','sakura']}))
  await assert.rejects(queue.request(account('X'),{...input(),version:'old'}))
  assert.equal(queue.waiting.size,0)
  await queue.request(account('A'),input());time(16000)
  assert.equal((await queue.request(account('B'),input())).status,'searching');assert.equal(rooms.rooms.size,0)
})
await test('Queue and cancelled request identities survive coordinator hibernation',async()=>{
  const data=new Map(),storage={get:key=>Promise.resolve(structuredClone(data.get(key))),put:values=>{for(const [key,value]of Object.entries(values))data.set(key,structuredClone(value));return Promise.resolve()}}
  const {queue,rooms,options}=setup(storage),a=account('A'),cancelled=input()
  await queue.request(a,cancelled,true);await queue.request(a,input())
  const restored=new QuickMatchmaker(options)
  assert.equal((await restored.request(a,cancelled)).status,'cancelled')
  await restored.request(account('B'),input());assert.equal(rooms.rooms.size,1)
})
await test('Finishing a quick match releases the player for the next search',async()=>{
  const {queue,rooms}=setup(),a=account('A')
  await queue.request(a,input());const result=await queue.request(account('B'),input())
  const room=rooms.rooms.get(result.code);room.session.battle.phase='finished'
  assert.equal((await queue.request(a,input())).status,'searching')
})
console.log(`${checks} grupos de fila rápida passaram.`)

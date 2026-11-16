import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { WebSocket } from 'ws'
import { startServer } from './start.mjs'
import { Accounts } from './accounts.mjs'
import { multiplayerVersion } from './dist/engine.mjs'
const team=['classico-naruto','classico-sasuke','classico-sakura']
const app=await startServer({host:'127.0.0.1',port:0,accounts:new Accounts({file:':memory:'})}),sockets=[]
const base=`http://127.0.0.1:${app.server.address().port}`
try {
  const players=[]
  for(const username of ['QuickA','QuickB']) {
    const response=await fetch(base+'/api/account/register',{method:'POST',headers:{Origin:base,'Content-Type':'application/json'},body:JSON.stringify({username,email:username+'@example.com',password:'password123',confirmPassword:'password123'})})
    assert.equal(response.status,201)
    players.push({account:(await response.json()).account,cookie:response.headers.get('set-cookie').split(';')[0],searchId:randomUUID()})
  }
  const request=(player,method='POST',headers={})=>fetch(base+'/api/quick',{method,headers:{Origin:base,'Content-Type':'application/json','X-Arena-Account':player.account.id,Cookie:player.cookie,...headers},body:JSON.stringify({searchId:player.searchId,version:multiplayerVersion,team})})
  assert.equal((await request(players[0],'POST',{Cookie:''})).status,401)
  assert.equal((await request(players[0],'POST',{'X-Arena-Account':'wrong'})).status,409)
  assert.equal((await request(players[0],'POST',{Origin:'https://outside.test'})).status,403)
  assert.equal((await (await request(players[0])).json()).status,'searching')
  const matched=await (await request(players[1])).json();assert.equal(matched.status,'matched')
  assert.equal((await (await request(players[0])).json()).code,matched.code)
  for(const player of players) {
    const socket=new WebSocket(base.replace('http:','ws:')+`/play?room=${matched.code}&resume=1`,{origin:base,headers:{Cookie:player.cookie}})
    sockets.push(socket)
    const state=new Promise((resolve,reject)=>{socket.on('message',raw=>{const message=JSON.parse(String(raw));if(message.type==='state')resolve(message.snapshot);if(message.type==='error')reject(Error(message.message))});socket.once('error',reject)})
    await new Promise(resolve=>socket.once('open',resolve))
    socket.send(JSON.stringify({type:'resume',code:matched.code,version:multiplayerVersion}))
    const snapshot=await state;assert.equal(snapshot.mode,'quick');assert.equal(snapshot.session.battle.turnNumber,1)
    assert.equal(snapshot.players.find(p=>p.id===snapshot.you).accountId,player.account.id)
  }
  console.log('PASS Node HTTP queue: account/origin validation, matching and two authenticated WebSocket players.')
} finally {for(const socket of sockets)socket.terminate();await app.close()}

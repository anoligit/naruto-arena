import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import { DatabaseSync } from 'node:sqlite'
import { Accounts } from './accounts.mjs'
import { roomResult } from './progression.mjs'
import { characters, characterMissions } from './dist/engine.mjs'
const legacy=characterMissions.find(m=>m.id==='haku')
const ids=characters.map(c=>c.id)
const directory=mkdtempSync(path.join(tmpdir(),'arena-mission-config-'))
const file=path.join(directory,'accounts.sqlite')
const create=(accounts,name)=>accounts.register({username:name,email:name+'@example.com',password:'password123',confirmPassword:'password123'})
const mission=(id,goal,required=['classico-naruto'])=>({...legacy,id,legacyProgress:undefined,minimumLevel:1,objective:{type:'consecutive-wins',consecutiveWins:goal,charactersAnyOf:required,pointsPerWin:'one'}})
const definitions=[mission('fixture-a',2),mission('fixture-b',3,['classico-kin']),{...mission('fixture-c',1),prerequisiteMissionIds:['fixture-a']}]
let accounts=new Accounts({file,characterIds:ids,missions:definitions})
try{
 const login=await create(accounts,'ConfigNinja')
 const current=()=>accounts.session(login.token)
 function finish(team=['classico-naruto','classico-kin','classico-rin'],outcome='win'){
  const account=accounts.identity(login.token)
  const room={mode:'training',resultId:randomUUID(),session:{now:1000,battle:{phase:'finished',winnerId:outcome==='win'?'player-1':outcome==='loss'?'player-2':null}},seats:new Map([['player-1',{account,team:team.map(id=>characters.find(c=>c.id===id))}]])}
  const result=roomResult(room,definitions);accounts.recordResult(result);return result
 }
 const first=finish();for(let i=0;i<4;i++)accounts.recordResult(first)
 assert.equal(current().profile.wins,1)
 assert.equal(current().progression.missionProgress['fixture-a'].streak,1)
 assert.equal(current().progression.missionProgress['fixture-b'].streak,1)
 assert.equal(current().progression.missionProgress['fixture-c'].streak,0)
 finish(['classico-shino','classico-chouji','classico-ino'],'loss')
 assert.equal(current().progression.missionProgress['fixture-a'].streak,1)
 finish(undefined,'loss')
 assert.equal(current().progression.missionProgress['fixture-a'].streak,0)
 assert.equal(current().progression.missionProgress['fixture-b'].streak,0)
 finish();finish()
 assert(current().progression.completedMissionIds.includes('fixture-a'))
 assert(!current().progression.completedMissionIds.includes('fixture-c'),'Prerequisite completion in this match must not retroactively qualify it')
 finish()
 for(const id of ['fixture-a','fixture-b','fixture-c'])assert(current().progression.completedMissionIds.includes(id))
 const before=JSON.stringify(current()),bad=structuredClone(first)
 bad.id=randomUUID();bad.players[0].missions[1].legacyProgress={streakColumn:'missing_column',unlockedColumn:'missing_column_two'}
 assert.throws(()=>accounts.recordResult(bad))
 assert.equal(JSON.stringify(current()),before,'A failed mission write must roll back the rank and all other mission writes')
 accounts.close();accounts=new Accounts({file,characterIds:ids,missions:definitions})
 assert.equal(JSON.stringify(current()),before)
 // Exercise the actual SQL migration against an old database with a partial streak and an unlocked account.
 const old=new DatabaseSync(':memory:')
 old.exec('CREATE TABLE accounts(id TEXT PRIMARY KEY);')
 old.exec(readFileSync(new URL('../cloudflare/migrations/0003_progression.sql',import.meta.url),'utf8'))
 old.exec("INSERT INTO accounts VALUES ('partial'),('unlocked'); INSERT INTO account_progress(account_id,haku_streak,haku_unlocked) VALUES ('partial',1,0),('unlocked',2,1);")
 const migration=readFileSync(new URL('../cloudflare/migrations/0004_character_missions.sql',import.meta.url),'utf8')
 old.exec(migration);old.exec(migration)
 assert.deepEqual(old.prepare('SELECT streak,completed FROM account_missions WHERE account_id=?').get('partial'),Object.assign(Object.create(null),{streak:1,completed:0}))
 assert.equal(old.prepare('SELECT completed FROM account_missions WHERE account_id=?').get('unlocked').completed,1)
 old.close()
 // Node reads the compatibility columns declared by the character, preserving old unlocked accounts on restart.
 const saved=await create(accounts,'LegacyNinja')
 accounts.db.prepare('INSERT INTO account_progress(account_id,haku_streak,haku_unlocked) VALUES (?,?,?)').run(saved.account.id,2,1)
 accounts.close();accounts=new Accounts({file,characterIds:ids,missions:[...definitions,legacy]})
 const migrated=accounts.session(saved.token).progression
 assert.equal(migrated.hakuUnlocked,true);assert.equal(migrated.hakuStreak,2)
 assert(migrated.missionProgress.haku.completed)
 console.log('PASS Multiple independent missions, one-point wins, pre-match prerequisites, losses/resets, replay idempotency, atomic rollback, restart and real SQL/Node migration preserve existing progress.')
}finally{accounts.close();rmSync(directory,{recursive:true,force:true})}

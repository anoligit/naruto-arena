// As colunas antigas permanecem apenas para migrar contas existentes sem perda.
export const progressionSchema = `
CREATE TABLE IF NOT EXISTS account_progress (
 account_id TEXT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
 wins INTEGER NOT NULL DEFAULT 0, losses INTEGER NOT NULL DEFAULT 0,
 streak INTEGER NOT NULL DEFAULT 0, haku_streak INTEGER NOT NULL DEFAULT 0,
 haku_unlocked INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS account_results (
 account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
 match_id TEXT NOT NULL, outcome TEXT NOT NULL CHECK(outcome IN ('win','loss','draw')),
 team_json TEXT NOT NULL, completed_at INTEGER NOT NULL, eligible_haku INTEGER NOT NULL,
 applied INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(account_id,match_id)
);
CREATE TABLE IF NOT EXISTS account_missions (
 account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
 mission_id TEXT NOT NULL, streak INTEGER NOT NULL DEFAULT 0,
 completed INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(account_id,mission_id)
);`
const identifier = value => {
 if(typeof value !== 'string' || !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value))throw new Error('Coluna de compatibilidade inválida.')
 return `"${value}"`
}
export function missionMigrations(missions) {
 return missions.filter(mission=>mission.legacyProgress).map(mission=>{
  const legacy=mission.legacyProgress
  return [`INSERT OR IGNORE INTO account_missions(account_id,mission_id,streak,completed) SELECT account_id,?,${identifier(legacy.streakColumn)},${identifier(legacy.unlockedColumn)} FROM account_progress`,[mission.id]]
 })
}
export function progression(row, records = [], missions = []) {
 const missionProgress=Object.fromEntries(records.map(record=>[record.mission_id,{streak:record.streak,completed:!!record.completed}]))
 const aliases={}
 for(const mission of missions){
  const legacy=mission.legacyProgress
  if(!Object.hasOwn(missionProgress,mission.id))missionProgress[mission.id]={streak:legacy?row?.[legacy.streakColumn]??0:0,completed:legacy?!!row?.[legacy.unlockedColumn]:false}
  if(legacy){aliases[legacy.streakField]=missionProgress[mission.id].streak;aliases[legacy.unlockedField]=missionProgress[mission.id].completed}
 }
 return {...aliases,missionProgress,completedMissionIds:Object.entries(missionProgress).filter(([,p])=>p.completed).map(([id])=>id)}
}
export const provisionalRanks = [
 ['Estudante da Academia',1], ['Genin',6], ['Chuunin',11], ['Missing-Nin',16],
 ['Anbu',21], ['Jounin',26], ['Sannin',31], ['Jinchuuriki',36], ['Akatsuki',41], ['Kage',46],
]
export function progressProfile(row,name) {
 const wins=row?.wins??0
 const [rank,level]=provisionalRanks[Math.min(wins,provisionalRanks.length-1)]
 return {name,rank,clan:null,level,experience:0,overallRank:null,wins,losses:row?.losses??0,streak:row?.streak??0}
}
export function roomResult(room, definitions = []) {
 if(!['quick','training'].includes(room.mode)||room.session?.battle.phase!=='finished'||!room.resultId)return null
 const missions=Array.isArray(definitions)?definitions:[definitions]
 const players=[...room.seats].filter(([,seat])=>seat.account?.id).map(([id,seat])=>{
  const evaluated=missions.map(mission=>{
   const present=new Set(seat.team.filter(c=>mission.objective.charactersAnyOf.includes(c.id)).map(c=>c.id)).size
   const eligible=(seat.account.profile?.level??1)>=mission.minimumLevel && mission.prerequisiteMissionIds.every(id=>seat.account.progression?.completedMissionIds?.includes(id)) && present>0
   const points=eligible?(mission.objective.pointsPerWin==='one'?1:present):0
   return {id:mission.id,eligible,points,requiredWins:mission.objective.consecutiveWins,legacyProgress:mission.legacyProgress}
  })
  return {accountId:seat.account.id,outcome:!room.session.battle.winnerId?'draw':room.session.battle.winnerId===id?'win':'loss',team:seat.team.map(c=>c.id),missions:evaluated}
 })
 if(players.length!==(room.mode==='training'?1:2)||new Set(players.map(p=>p.accountId)).size!==players.length)return null
 return {id:room.resultId,completedAt:room.finishedAt??room.session.now,players}
}
// Perfil, missões e marca de idempotência são aplicados na mesma transação/batch.
export function resultStatements(result) {
 const statements=[]
 for(const player of result.players){
  const p=player, pending='EXISTS (SELECT 1 FROM account_results WHERE account_id=? AND match_id=? AND applied=0)'
  const guard=[p.accountId,result.id]
  statements.push(
   ['INSERT OR IGNORE INTO account_progress(account_id) VALUES (?)',[p.accountId]],
   ['INSERT OR IGNORE INTO account_results(account_id,match_id,outcome,team_json,completed_at,eligible_haku) VALUES (?,?,?,?,?,?)',[p.accountId,result.id,p.outcome,JSON.stringify(p.team),result.completedAt,Number(p.missions.some(m=>m.eligible&&m.legacyProgress))]],
   [`UPDATE account_progress SET wins=wins+CASE WHEN ?='win' THEN 1 ELSE 0 END,
    losses=losses+CASE WHEN ?='loss' THEN 1 ELSE 0 END,
    streak=CASE WHEN ?='win' THEN CASE WHEN streak>0 THEN streak+1 ELSE 1 END WHEN ?='loss' THEN CASE WHEN streak<0 THEN streak-1 ELSE -1 END ELSE 0 END
    WHERE account_id=? AND ${pending}`,[p.outcome,p.outcome,p.outcome,p.outcome,p.accountId,...guard]],
  )
  for(const mission of p.missions){
   const m=mission
   statements.push(
    ['INSERT OR IGNORE INTO account_missions(account_id,mission_id) VALUES (?,?)',[p.accountId,m.id]],
    [`UPDATE account_missions SET
      completed=CASE WHEN completed=1 OR (?='win' AND ?=1 AND streak+?>=?) THEN 1 ELSE 0 END,
      streak=CASE WHEN completed=1 THEN streak WHEN ?=0 THEN streak WHEN ?='win' THEN MIN(?,streak+?) ELSE 0 END
      WHERE account_id=? AND mission_id=? AND ${pending}`,
     [p.outcome,Number(m.eligible),m.points,m.requiredWins,Number(m.eligible),p.outcome,m.requiredWins,m.points,p.accountId,m.id,...guard]],
   )
   if(m.legacyProgress){
    const legacy=m.legacyProgress
    statements.push([`UPDATE account_progress SET ${identifier(legacy.streakColumn)}=(SELECT streak FROM account_missions WHERE account_id=? AND mission_id=?),
     ${identifier(legacy.unlockedColumn)}=(SELECT completed FROM account_missions WHERE account_id=? AND mission_id=?) WHERE account_id=? AND ${pending}`,
     [p.accountId,m.id,p.accountId,m.id,p.accountId,...guard]])
   }
  }
  statements.push(['UPDATE account_results SET applied=1 WHERE account_id=? AND match_id=?',[p.accountId,result.id]])
 }
 return statements
}

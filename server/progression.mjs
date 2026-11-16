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
);`
export function progression(row) {return {hakuStreak:row?.haku_streak??0,hakuUnlocked:!!row?.haku_unlocked,completedMissionIds:row?.haku_unlocked?['haku']:[]}}
export const provisionalRanks = [
 ['Estudante da Academia',1], ['Genin',6], ['Chuunin',11], ['Missing-Nin',16],
 ['Anbu',21], ['Jounin',26], ['Sannin',31], ['Jinchuuriki',36], ['Akatsuki',41], ['Kage',46],
]
export function progressProfile(row,name) {
 const wins=row?.wins??0
 const [rank,level]=provisionalRanks[Math.min(wins,provisionalRanks.length-1)]
 return {name,rank,clan:null,level,experience:0,overallRank:null,wins,losses:row?.losses??0,streak:row?.streak??0}
}
export function roomResult(room, mission) {
 if(!['quick','training'].includes(room.mode)||room.session?.battle.phase!=='finished'||!room.resultId)return null
 const players=[...room.seats].filter(([,seat])=>seat.account?.id).map(([id,seat])=>{
  const points=new Set(seat.team.filter(c=>mission.objective.charactersAnyOf.includes(c.id)).map(c=>c.id)).size
  const eligible=(seat.account.profile?.level??1)>=mission.minimumLevel && mission.prerequisiteMissionIds.every(id=>seat.account.progression?.completedMissionIds?.includes(id)) && points>0
  return {accountId:seat.account.id,outcome:!room.session.battle.winnerId?'draw':room.session.battle.winnerId===id?'win':'loss',team:seat.team.map(c=>c.id),eligible,points:eligible?points:0}
 })
 if(players.length!==(room.mode==='training'?1:2)||new Set(players.map(p=>p.accountId)).size!==players.length)return null
 return {id:room.resultId,requiredWins:mission.objective.consecutiveWins,completedAt:room.finishedAt??room.session.now,players}
}
// O registro e a aplicação do resultado acontecem na mesma transação. Repetir
// um salvamento após reconexão/hibernação não soma vitórias nem progresso de novo.
export function resultStatements(result) {
 return result.players.flatMap(p=>[
  ['INSERT OR IGNORE INTO account_progress(account_id) VALUES (?)',[p.accountId]],
  ['INSERT OR IGNORE INTO account_results(account_id,match_id,outcome,team_json,completed_at,eligible_haku) VALUES (?,?,?,?,?,?)',[p.accountId,result.id,p.outcome,JSON.stringify(p.team),result.completedAt,p.eligible?1:0]],
  [`UPDATE account_progress SET
   wins=wins+CASE WHEN ?='win' THEN 1 ELSE 0 END,
   losses=losses+CASE WHEN ?='loss' THEN 1 ELSE 0 END,
   streak=CASE WHEN ?='win' THEN CASE WHEN streak>0 THEN streak+1 ELSE 1 END WHEN ?='loss' THEN CASE WHEN streak<0 THEN streak-1 ELSE -1 END ELSE 0 END,
   haku_unlocked=CASE WHEN haku_unlocked=1 OR (?='win' AND ?=1 AND haku_streak+?>=?) THEN 1 ELSE 0 END,
   haku_streak=CASE WHEN haku_unlocked=1 THEN ? WHEN ?=0 THEN haku_streak WHEN ?='win' THEN MIN(?,haku_streak+?) ELSE 0 END
   WHERE account_id=? AND EXISTS (SELECT 1 FROM account_results WHERE account_id=? AND match_id=? AND applied=0)`,
   [p.outcome,p.outcome,p.outcome,p.outcome,p.outcome,p.eligible?1:0,p.points??1,result.requiredWins,result.requiredWins,p.eligible?1:0,p.outcome,result.requiredWins,p.points??1,p.accountId,p.accountId,result.id]],
  ['UPDATE account_results SET applied=1 WHERE account_id=? AND match_id=?',[p.accountId,result.id]],
 ])
}

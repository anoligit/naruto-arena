export async function activeMatch(env,accountId) {
  const active=await env.DB.prepare('SELECT room_code FROM active_matches WHERE account_id=?').bind(accountId).first()
  if(!active)return null
  const inspection=await env.ROOMS.getByName(active.room_code).fetch(new Request('https://room.internal/__match',{headers:{'X-Arena-Account':accountId}}))
  if((await inspection.json()).active)return active.room_code
  await env.DB.prepare('DELETE FROM active_matches WHERE account_id=? AND room_code=?').bind(accountId,active.room_code).run()
  return null
}

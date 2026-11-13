import assert from 'node:assert/strict';
const a=await import(process.env.ARENA_TEST_MODULE);
const team=['zabuza','naruto','haku'].map(id=>a.characters.find(c=>c.id===id));
let s=a.createBattle(team,team,'player-1',100,Date.now());
for(const p of Object.values(s.players))p.energy={taijutsu:20,bloodline:20,ninjutsu:20,genjutsu:20};
const z=s.players['player-1'].team[0];
let r=a.resolveTurn(s,[{playerId:'player-1',characterInstanceId:z.instanceId,skillId:'zabuza-hidden-mist-skill',targetInstanceId:z.instanceId,randomPayment:{taijutsu:0,bloodline:0,ninjutsu:0,genjutsu:0}}],Date.now());assert(r.ok);s=r.state;
for(const member of s.players['player-2'].team){const effects=a.getEnemyCostEffects(s,member);assert.equal(effects.length,1);assert.equal(effects[0].active.statusId,'zabuza-hidden-mist');assert.equal(effects[0].modifiers[0].random,1)}
for(const member of s.players['player-1'].team)assert.equal(a.getEnemyCostEffects(s,member).length,0);
let html=a.renderBattle(s);assert.equal((html.match(/Consultar efeito ativo: Hidden Mist Technique/g)||[]).length,4);
const dead=structuredClone(s);dead.players['player-2'].team[0].health=0;assert.equal(a.getEnemyCostEffects(dead,dead.players['player-2'].team[0]).length,0);
const sourceDead=structuredClone(s);sourceDead.players['player-1'].team[0].health=0;assert.equal(a.getEnemyCostEffects(sourceDead,sourceDead.players['player-2'].team[1]).length,0);
for(let i=0;i<5;i++){r=a.resolveTurn(s,[],Date.now());assert(r.ok);s=r.state}
assert.equal(a.getEnemyCostEffects(s,s.players['player-2'].team[1]).length,0);
html=a.renderBattle(s);assert.equal((html.match(/Consultar efeito ativo: Hidden Mist Technique/g)||[]).length,0);
console.log('PASS: one Mist icon on Zabuza plus three enemy indicators in actual rendered battle; no friendly cost indicator; dead targets/source and expiry remove indicators.');

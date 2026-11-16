import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
const base={name:'Fixture',image:'',description:'',unlockRequirement:{type:'none'},abilities:[]}
const collect=entries=>a.collectCharacterModules(Object.fromEntries(entries.map(([id,order])=>[`./${id}/index.ts`,{default:a.defineCharacter({...base,id,order})}])))
const initial=[['naruto',1],['sasuke',2],['sakura',3],['hinata',4],['kiba',5]]
assert.deepEqual(collect(initial.map(([id,order])=>[id,id==='sakura'?{position:4}:order])).characters.map(c=>c.id),['naruto','sasuke','hinata','sakura','kiba'])
assert.deepEqual(collect(initial.map(([id,order])=>[id,id==='kiba'?{position:1}:order])).characters.map(c=>c.id),['kiba','naruto','sasuke','sakura','hinata'])
assert.deepEqual(collect(initial.map(([id,order])=>[id,id==='naruto'?{position:5}:order])).characters.map(c=>c.id),['sasuke','sakura','hinata','kiba','naruto'])
assert(collect([['a',{position:2}],['b',{position:2}]]).issues.some(i=>i.message.includes('Posição exata')))
assert.equal(collect([['a',{position:0}]]).characters.length,0)
assert.equal(collect([['a',NaN]]).characters.length,0)
assert.deepEqual(collect([['a',1],['b',2],['c',1.5]]).characters.map(c=>c.id),['a','c','b'])
const mission={id:'fixture-mission',name:'Missão Fixture',image:'fixture.jpg',category:'Missões D e C',minimumRank:'Genin',minimumLevel:6,prerequisiteMissionIds:[],objective:{type:'consecutive-wins',consecutiveWins:2,charactersAnyOf:['classico-naruto']}}
const malformed=a.defineCharacter({...base,id:'bad-compatibility',mission:{...mission,legacyProgress:{a:'one',b:'two',c:'three',d:'four'}}})
assert.equal(a.collectCharacterModules({'./bad/index.ts':{default:malformed}}).characters.length,0)
const reward=a.defineCharacter({...base,id:'fixture-reward',order:23,mission,unlockRequirement:{type:'mission',missionId:mission.id}}).character
const definition={...mission,rewardCharacterId:reward.id}
a.characters.push(reward);a.characterMissions.push(definition)
try{
 assert(!a.canUseCharacter(reward.id))
 const progress={missionProgress:{[mission.id]:{streak:2,completed:true}},completedMissionIds:[mission.id]}
 assert(a.canUseCharacter(reward.id,progress))
 assert(a.characterUnlockText(reward.id,progress).includes(mission.name))
 assert.deepEqual(a.getMissionProgress(mission,progress),{streak:2,completed:true})
 reward.unlockRequirement={type:'none'}
 assert(a.canUseCharacter(reward.id))
}finally{a.characters.pop();a.characterMissions.pop()}
const original=a.characters.find(c=>c.id==='classico-naruto')
const broken=structuredClone(original)
broken.skillDefinitions[0].effects=[{type:'apply-status',statusId:'missing-status'}]
assert(a.validateCharacterCatalog([broken],a.statuses).some(i=>i.message.includes('missing-status')))
const cycleA={...structuredClone(original),mission:{...mission,id:'a',prerequisiteMissionIds:['b']}}
const cycleB={...structuredClone(a.characters.find(c=>c.id==='classico-sasuke')),mission:{...mission,id:'b',prerequisiteMissionIds:['a']}}
assert(a.validateCharacterCatalog([cycleA,cycleB],a.statuses).some(i=>i.message.includes('circulares')))
const nested={id:'fixture-nested',name:'Nested',duration:{type:'opponent-turns',turns:1},modifiers:[{type:'on-skill-use',effects:[{type:'apply-status',statusId:'missing-nested'}]}]}
assert(a.validateCharacterCatalog(a.characters,[...a.statuses,nested]).some(i=>i.message.includes('missing-nested')))
const team=['classico-lee','classico-kiba','classico-sakura'].map(id=>a.characters.find(c=>c.id===id))
const state=a.createBattle(team,team,'player-1',100,1000),lee=state.players['player-1'].team[0]
const status=a.statuses.find(s=>s.id==='classico-lee-bonus'),previous=status.indicator
try{
 status.indicator={name:'Nome editado no personagem',image:team[0].image}
 lee.statuses.push({instanceId:'fixture:indicator',statusId:status.id,sourcePlayerId:'player-1',sourceCharacterId:lee.instanceId,sourceSkillId:'classico-lee-1',expiration:{playerId:'player-1',afterTurn:99}})
 const icon=a.getCharacterIndicators(state,[],lee,'player-1')[0]
 assert.equal(icon.name,status.indicator.name);assert.equal(icon.image,status.indicator.image)
}finally{status.indicator=previous}
console.log('PASS One-file exact moves in both directions, numeric priorities, new mission rewards and unlocks, broken/nested references, cyclic prerequisites and custom indicator artwork/name.')

import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
const find=id=>a.characters.find(character=>character.id===id)
const team=['classico-lee','classico-kiba','classico-sakura'].map(find)
const enemies=['classico-naruto','classico-sasuke','classico-sakura'].map(find)
const empty={taijutsu:0,bloodline:0,ninjutsu:0,genjutsu:0}
function setup(){return a.createBattle(team,enemies,'player-1',100,1000)}
function attach(s,target,statusId,source,skillId,index=0,extra={}) {
 const active={instanceId:`fixture:${target.instanceId}:${source.instanceId}:${statusId}:${index}`,statusId,sourcePlayerId:source.instanceId.startsWith('player-1:')?'player-1':'player-2',sourceCharacterId:source.instanceId,sourceSkillId:skillId,appliedAt:{turn:index+1,action:0,effect:0},expiration:{playerId:'player-1',afterTurn:99+index},...extra}
 target.statuses.push(active);return active
}
let s=setup(),lee=s.players['player-1'].team[0],kiba=s.players['player-1'].team[1],foe=s.players['player-2'].team[0]
for(let i=0;i<5;i++)attach(s,lee,'classico-lee-bonus',lee,'classico-lee-1',i)
const before=structuredClone(s)
let indicators=a.getCharacterIndicators(s,[],lee,'player-1')
assert.equal(indicators.length,1);assert.equal(indicators[0].stackCount,5)
assert(indicators[0].lines.some(line=>line.includes('Acúmulos: 5')))
assert(indicators[0].duration.includes('acúmulo:'))
assert.deepEqual(s,before)
let html=a.renderBattle(s)
assert.equal((html.match(/class="effect-stack-count"/g)??[]).length,1)
assert(html.includes('5 acúmulos'));assert(html.includes('effect-stack-count" aria-hidden="true">5</span>'))
assert.equal((html.match(/Consultar efeito ativo: High Speed Taijutsu/g)??[]).length,1)
lee.statuses[0].expiration={playerId:'player-1',afterTurn:1}
let result=a.resolveTurn(s,[],1100);assert(result.ok,result.reason);s=result.state;lee=s.players['player-1'].team[0]
indicators=a.getCharacterIndicators(s,[],lee,'player-1');assert.equal(indicators[0].stackCount,4)
console.log('PASS Five Lee stacks occupy one icon with a badge; expiry decrements the count and tooltip retains individual durations.')
s=setup();lee=s.players['player-1'].team[0];foe=s.players['player-2'].team[0]
attach(s,lee,'classico-lee-bonus',lee,'classico-lee-1')
attach(s,lee,'classico-lee-bonus',foe,'classico-lee-1')
const split=a.getCharacterIndicators(s,[],lee,'player-1')
assert.equal(split.length,2);assert.deepEqual(split.map(indicator=>indicator.origin),['ally','enemy'])
assert(split.every(indicator=>indicator.stackCount===1))
s=setup();lee=s.players['player-1'].team[0]
attach(s,lee,'classico-lee-bonus',lee,'classico-lee-1',0)
attach(s,lee,'classico-lee-bonus',lee,'classico-lee-1',1,{blockedModifiers:['damage-reduction']})
const variants=a.getCharacterIndicators(s,[],lee,'player-1')
assert.equal(variants.length,1);assert.equal(variants[0].stackCount,2)
assert(variants[0].lines.some(line=>line.includes('(1/2 acúmulos)')))
console.log('PASS Identical icons from different casters/opponents remain separate; planned actions are not combined with active effects.')
s=setup();lee=s.players['player-1'].team[0];kiba=s.players['player-1'].team[1];foe=s.players['player-2'].team[0]
for(let i=0;i<3;i++)attach(s,lee,'classico-lee-bonus',lee,'classico-lee-1',i)
for(let i=0;i<2;i++)attach(s,foe,'classico-lee-speed',lee,'classico-lee-1',i)
attach(s,foe,'classico-kiba-mark',kiba,'classico-kiba-3',3)
const snapshot=structuredClone(s)
const active=a.getOngoingSkills(s,'player-1')
assert.equal(active.length,2)
assert.equal(active[0].skill.id,'classico-lee-1');assert.equal(active[0].stackCount,3)
assert.equal(active[1].skill.id,'classico-kiba-3')
assert.deepEqual(a.getOngoingSkills(s,'player-2'),[])
assert.deepEqual(s,snapshot)
html=a.renderTurnConfirmation(s,[],empty)
assert.equal((html.match(/class="finish-ongoing"/g)??[]).length,2)
assert(html.includes('Dynamic Air Marking · efeito ativo · sem novo custo'))
assert(!html.includes('Mover Dynamic Air Marking'))
assert(html.includes('Consumir energia 0/0'))
assert(!/disabled=""[^>]*>Confirmar turno/.test(html))
assert.deepEqual(s,snapshot)
console.log('PASS Ongoing Lee/Kiba skills are deduplicated across recipients, shown only to their owner, cost zero and have no ordering controls.')
const queue=[{playerId:'player-1',characterInstanceId:lee.instanceId,skillId:'classico-lee-1',targetInstanceId:foe.instanceId}]
const budget=a.getQueueBudget(s,queue)
html=a.renderTurnConfirmation(s,queue,empty)
assert(html.includes('Consumir energia 0/1'))
assert.equal((html.match(/Mover High Speed Taijutsu/g)??[]).length,2)
const ongoingRows=[...html.matchAll(/<li class="finish-ongoing"[\s\S]*?<\/li>/g)].map(match=>match[0])
assert(ongoingRows.every(row=>!row.includes('energy-token')&&!row.includes('<button')))
assert.deepEqual(a.getQueueBudget(s,queue),budget)
assert.equal(queue.length,1)
const planned=a.getCharacterIndicators(s,queue,foe,'player-1')
assert.equal(planned.filter(indicator=>indicator.planned).length,1)
console.log('PASS Reusing an ongoing skill keeps the new action distinct; payment and movement apply only to the real queue.')
for(const player of Object.values(s.players))for(const character of player.team)character.statuses=[]
assert.equal(a.getOngoingSkills(s,'player-1').length,0)
const passive=a.createBattle(['classico-sasuke','classico-lee','classico-kiba'].map(find),enemies,'player-1',100,1000)
assert.equal(a.getOngoingSkills(passive,'player-1').length,0)
console.log('PASS Effects disappear from the review when no longer active; battle-start passives do not clutter the action list.')

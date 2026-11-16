import assert from 'node:assert/strict'
const a=await import(process.env.ARENA_TEST_MODULE)
assert.deepEqual(a.characterRegistrationIssues,[])
for(const character of a.characters){
 assert.equal(a.getBaseSkills(character).length,4,character.id)
 for(const skill of character.skillDefinitions){
  assert(skill.image,skill.id)
  assert(skill.description,skill.id)
  for(const effect of skill.effects)if(effect.type==='apply-status')assert(a.statuses.some(s=>s.id===effect.statusId),effect.statusId)
  for(const id of [skill.enhancement?.whenUserHasStatus,skill.targetExpansion?.whenUserHasStatus,skill.replacement?.whenStatusId])if(id)assert(a.statuses.some(s=>s.id===id),id)
 }
}
const fixture=a.defineCharacter({id:'fixture',name:'Fixture',image:'',description:'',unlockRequirement:{type:'none'},abilities:[]})
assert.equal(a.collectCharacterModules({'./fixture/index.ts':{default:fixture}}).characters.length,1)
const duplicate=a.collectCharacterModules({'./a/index.ts':{default:fixture},'./b/index.ts':{default:fixture}})
assert.equal(duplicate.characters.length,1);assert.equal(duplicate.issues.length,1)
const haku=a.characters.find(c=>c.id==='classico-haku')
assert.equal(a.describeUnlockRequirement(haku.unlockRequirement),'A Neve Esquecida pela Névoa')
const detail=a.renderDetails(haku)
assert.equal((detail.match(/class="skill"/g)??[]).length,4)
assert(detail.includes('A Neve Esquecida pela Névoa'))
console.log('PASS All retained character skills/status links and mission metadata; automatic registration and duplicate rejection; four-slot character inspection.')

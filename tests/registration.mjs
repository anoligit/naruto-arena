import assert from 'node:assert/strict'
const a = await import(process.env.ARENA_TEST_MODULE)
assert.deepEqual(a.characterRegistrationIssues, [])
for (const character of a.characters) {
  assert.equal(a.getBaseSkills(character).length, 4, character.id)
  assert(!('skillImages' in character))
  assert(!('skillDescriptions' in character))
  assert(!('skills' in character))
  for (const skill of character.skillDefinitions) {
    for (const effect of skill.effects) {
      if (effect.type === 'apply-status') assert(a.statuses.some(status => status.id === effect.statusId))
    }
    for (const id of [skill.enhancement?.whenUserHasStatus, skill.targetExpansion?.whenUserHasStatus, skill.replacement?.whenStatusId]) {
      if (id) assert(a.statuses.some(status => status.id === id))
    }
  }
}
const kakashi = a.characters.find(character => character.id === 'kakashi')
assert.equal(a.describeUnlockRequirement(kakashi.unlockRequirement), 'Time 7 Luta como uma Equipe')
const haku = a.characters.find(character => character.id === 'haku')
const zabuza = a.characters.find(character => character.id === 'zabuza')
let saved = null
globalThis.localStorage = { getItem: () => saved, setItem: (_, value) => { saved = value } }
a.saveTeam([haku, zabuza, kakashi])
assert.deepEqual(a.loadTeam().map(character => character.id), ['haku', 'zabuza', 'kakashi'])
const received = a.teamReducer({ team: [haku, null, null], persist: true }, { type: 'receive', team: [null, null, null] })
assert.equal(received.persist, false)
// A new module registers without a manual list or copied skill dictionaries.
const original = a.characters[0]
const module = a.defineCharacter({ id: 'fixture', name: 'Fixture', image: '', description: '', unlockRequirement: { type: 'none' }, abilities: original.skillDefinitions.map(skill => ({ skill: { ...skill, id: 'fixture-' + skill.id } })) })
assert.equal(a.collectCharacterModules({ './fixture/index.ts': { default: module } }).characters.length, 1)
const duplicate = a.collectCharacterModules({ './a/index.ts': { default: module }, './b/index.ts': { default: module } })
assert.equal(duplicate.characters.length, 1)
assert.equal(duplicate.issues.length, 1)
console.log('PASS: canonical skill data; status links; mission metadata; team persistence/synchronization; automatic registration and duplicate rejection.')
const details = a.renderDetails(kakashi)
assert(details.includes('Time 7 Luta como uma Equipe'))
assert.equal((details.match(/class="skill"/g) ?? []).length, 4)
const mistDetails = a.renderDetails(zabuza, 'Hidden Mist Technique')
assert(mistDetails.includes('25%'))
assert(mistDetails.includes('genjutsu'))
console.log('PASS: selection displays four skill slots, canonical descriptions, mission name and Mist energy cost.')

import { narutoSkills } from '../game/skills/naruto'
import type { SkillDefinition } from '../game/types'

export type Character = {
  id: string
  name: string
  image?: string
  skills: string[]
  skillImages?: Record<string, string>
  description?: string
  skillDescriptions?: Record<string, string>
  skillDefinitions?: SkillDefinition[]
}

export const characters: Character[] = [
  {
  id: 'naruto',
  name: 'Uzumaki Naruto',
  description:
    'Um genin do Time 7 que sonha em se tornar Hokage. Usando sua principal técnica, Jutsu Clones das Sombras, Naruto é capaz de utilizar golpes poderosos como seu Uzumaki Naruto Combo e Rasengan.',
  image: 'images/naruto/naruto_0_char.jpg',

  skillDefinitions: narutoSkills,

  skills: narutoSkills.map((skill) => skill.name),

  skillImages: Object.fromEntries(
    narutoSkills
      .filter((skill) => skill.image)
      .map((skill) => [skill.name, skill.image!])
  ),

  skillDescriptions: Object.fromEntries(
    narutoSkills.map((skill) => [skill.name, skill.description])
  ),
},
  {
    id: 'sasuke',
    name: 'Uchiha Sasuke',
    image: 'images/sasuke/sasuke_0_char.jpg',
    skills: ['Chidori', 'Sharingan', 'Lion Combo', 'Fireball'],
  },
  {
    id: 'sakura',
    name: 'Haruno Sakura',
    image: 'images/sakura/sakura_0_char.jpg',     
    skills: ['Punch', 'Healing', 'Inner Sakura', 'Substitution'],
  },
  {
    id: 'kakashi',
    name: 'Hatake Kakashi',
    skills: ['Raikiri', 'Sharingan', 'Water Dragon', 'Summoning'],
  },
]

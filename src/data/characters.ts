
export type Character = {
  id: string
  name: string
  skills: string[]
}

export const characters: Character[] = [
  {
    id: 'naruto',
    name: 'Uzumaki Naruto',
    skills: ['Shadow Clones', 'Rasengan', 'Sexy Technique', 'Naruto Combo'],
  },
  {
    id: 'sasuke',
    name: 'Uchiha Sasuke',
    skills: ['Chidori', 'Sharingan', 'Lion Combo', 'Fireball'],
  },
  {
    id: 'sakura',
    name: 'Haruno Sakura',
    skills: ['Punch', 'Healing', 'Inner Sakura', 'Substitution'],
  },
  {
    id: 'kakashi',
    name: 'Hatake Kakashi',
    skills: ['Raikiri', 'Sharingan', 'Water Dragon', 'Summoning'],
  },
]

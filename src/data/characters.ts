
export type Character = {
  id: string
  name: string
  image?: string
  skills: string[]
  skillImages?: Record<string, string>
}

export const characters: Character[] = [
  {
    id: 'naruto',
    name: 'Uzumaki Naruto',
    image: 'images/naruto/naruto_0_char.jpg',
    skills: ['Naruto Combo', 'Rasengan', 'Shadow Clones', 'Sexy Technique'],
    skillImages: {
      'Naruto Combo': 'images/naruto/naruto_1_uzumaki-combo.jpg',
      'Rasengan': 'images/naruto/naruto_2_rasengan.jpg',
      'Shadow Clones': 'images/naruto/naruto_3_clones.jpg',
      'Sexy Technique': 'images/naruto/naruto_4_sexy.jpg',
    } 
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

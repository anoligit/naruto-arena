
export type Character = {
  id: string
  name: string
  image?: string
  skills: string[]
  skillImages?: Record<string, string>
  description?: string
skillDescriptions?: Record<string, string>
}

export const characters: Character[] = [
  {
    id: 'naruto',
    name: 'Uzumaki Naruto',
    description:
  'Um genin do Time 7 que sonha em se tornar Hokage. Usando sua principal técnica, Jutsu Clones das Sombras, Naruto é capaz de utilizar golpes poderosos como seu Uzumaki Naruto Combo e Rasengan.',

skillDescriptions: {
  'Naruto Combo':
    'Naruto usa clones das sombras para executar uma sequência de golpes contra o adversário.',

  Rasengan:
    'Naruto concentra chakra na palma da mão, formando uma esfera giratória para atingir o adversário.',

  'Shadow Clones':
    'Naruto cria cópias de si mesmo para auxiliar em suas técnicas e confundir o adversário.',

  'Sexy Technique':
    'Naruto utiliza uma transformação inesperada para distrair o adversário.',
},
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

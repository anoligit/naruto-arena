import { kakashiSkills } from '../game/skills/kakashi'
import { narutoSkills } from '../game/skills/naruto'
import { sakuraSkills } from '../game/skills/sakura'
import { sasukeSkills } from '../game/skills/sasuke'
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

function characterWithSkills(
  id: string, name: string, image: string, description: string, skillDefinitions: SkillDefinition[]
): Character {
  return {
    id, name, image, description, skillDefinitions,
    skills: skillDefinitions.filter((skill) => !skill.replacement).map((skill) => skill.name),
    skillImages: Object.fromEntries(skillDefinitions.filter((skill) => skill.image).map((skill) => [skill.name, skill.image!])),
    skillDescriptions: Object.fromEntries(skillDefinitions.map((skill) => [skill.name, skill.description])),
  }
}

export const characters: Character[] = [
  characterWithSkills('naruto', 'Uzumaki Naruto', 'images/naruto/naruto_char_1.jpg',
    'Genin do Time 7, Naruto é um órfão que sonha em se tornar Hokage. Sua técnica característica, Shadow Clones, permite que ele utilize golpes poderosos como Uzumaki Naruto Combo e Rasengan.', narutoSkills),
  characterWithSkills('sasuke', 'Uchiha Sasuke', 'images/sasuke/sasuke_char_1.jpg',
    'Genin do Time 7 e único sobrevivente do clã Uchiha, Sasuke jurou se vingar de seu irmão. Com o Sharingan, consegue antecipar ataques e executar técnicas ofensivas avançadas.', sasukeSkills),
  characterWithSkills('sakura', 'Haruno Sakura', 'images/sakura/sakura_char_1.jpg',
    'Genin do Time 7, Sakura é muito inteligente, mas insegura consigo mesma. Após iniciar seu treinamento com Tsunade, tornou-se capaz de desferir socos poderosos e curar seus aliados.', sakuraSkills),
  characterWithSkills('kakashi', 'Hatake Kakashi', 'images/kakashi/kakashi_char_1.jpeg',
    'Líder do Time 7, conhecido como Copy Ninja, Kakashi coloca a vida de seus companheiros acima de tudo. É capaz de copiar técnicas inimigas e utiliza sua técnica original, Raikiri. No jogo de referência, é desbloqueado pela missão “Time 7 Luta como uma Equipe”.', kakashiSkills),
]

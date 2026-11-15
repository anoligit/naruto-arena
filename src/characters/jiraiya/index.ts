// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Jiraiya",
  "portraits": [
    {
      "number": 1,
      "file": "jiraiya_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Great Fireball Technique",
      "file": "jiraiya_skill_1_(great_fireball_technique).jpg"
    },
    {
      "number": 2,
      "name": "Summoning: Toad Mouth Bind",
      "file": "jiraiya_skill_2_(summoning_toad_mouth_bind).jpg"
    },
    {
      "number": 3,
      "name": "Major Summoning: Gamabunta",
      "file": "jiraiya_skill_3_(major_summoning_gamabunta).jpg"
    },
    {
      "number": 4,
      "name": "Spiked Buddha",
      "file": "jiraiya_skill_4_(spiked_buddha).jpg"
    },
    {
      "number": 5,
      "name": "Toad Oil Flame Bullet",
      "file": "jiraiya_skill_5_(toad_oil_flame_bullet).png"
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uzumaki Naruto",
  "portraits": [
    {
      "number": 1,
      "file": "uzumakinaruto_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Uzumaki Naruto Combo",
      "file": "uzumakinaruto_skill_1_(uzumaki_naruto_combo).png"
    },
    {
      "number": 2,
      "name": "Rasengan",
      "file": "uzumakinaruto_skill_2_(rasengan).png"
    },
    {
      "number": 3,
      "name": "Shadow Clones",
      "file": "uzumakinaruto_skill_3_(shadow_clones).png"
    },
    {
      "number": 4,
      "name": "Sexy Technique",
      "file": "uzumakinaruto_skill_4_(sexy_technique).png"
    },
    {
      "number": 5,
      "name": "Passive: Kyuubi's Chakra Awakening",
      "file": "uzumakinaruto_skill_5_(passive_kyuubi's_chakra_awakening).png"
    }
  ]
} as const;

export default character;

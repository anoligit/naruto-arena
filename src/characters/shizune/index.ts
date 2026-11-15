// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shizune",
  "portraits": [
    {
      "number": 1,
      "file": "shizune_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Prepared Needle Shot",
      "file": "shizune_skill_1_(prepared_needle_shot).jpg"
    },
    {
      "number": 2,
      "name": "Poison Mist",
      "file": "shizune_skill_2_(poison_mist).jpg"
    },
    {
      "number": 3,
      "name": "Healing Resuscitation Regeneration",
      "file": "shizune_skill_3_(healing_resuscitation_regeneration).jpg"
    },
    {
      "number": 4,
      "name": "Shizune Dodge",
      "file": "shizune_skill_4_(shizune_dodge).png"
    }
  ]
} as const;

export default character;

// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Gekko Hayate",
  "portraits": [
    {
      "number": 1,
      "file": "gekkohayate_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Crescent Moon Slash",
      "file": "gekkohayate_skill_1_(crescent_moon_slash).jpg"
    },
    {
      "number": 2,
      "name": "Dance of the Crescent Moon",
      "file": "gekkohayate_skill_2_(dance_of_the_crescent_moon).jpg"
    },
    {
      "number": 3,
      "name": "Eavesdrop",
      "file": "gekkohayate_skill_3_(eavesdrop).jpg"
    },
    {
      "number": 4,
      "name": "Determined Retreat",
      "file": "gekkohayate_skill_4_(determined_retreat).jpg"
    }
  ]
} as const;

export default character;

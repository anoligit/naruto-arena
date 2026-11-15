// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Oboro",
  "portraits": [
    {
      "number": 1,
      "file": "oboro_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Underground Ambush",
      "file": "oboro_skill_1_(underground_ambush).jpg"
    },
    {
      "number": 2,
      "name": "Exploding Kunai",
      "file": "oboro_skill_2_(exploding_kunai).jpg"
    },
    {
      "number": 3,
      "name": "Haze Clones",
      "file": "oboro_skill_3_(haze_clones).jpg"
    },
    {
      "number": 4,
      "name": "Fleet of Foot",
      "file": "oboro_skill_4_(fleet_of_foot).jpg"
    }
  ]
} as const;

export default character;

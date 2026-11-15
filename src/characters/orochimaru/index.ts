// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Orochimaru",
  "portraits": [
    {
      "number": 1,
      "file": "orochimaru_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kusanagi",
      "file": "orochimaru_skill_1_(kusanagi).jpg"
    },
    {
      "number": 2,
      "name": "Cursed Seal Technique",
      "file": "orochimaru_skill_2_(cursed_seal_technique).jpg"
    },
    {
      "number": 3,
      "name": "Major Summoning: Manda",
      "file": "orochimaru_skill_3_(major_summoning_manda).jpg"
    },
    {
      "number": 4,
      "name": "Earth Clone Technique",
      "file": "orochimaru_skill_4_(earth_clone_technique).jpg"
    },
    {
      "number": 5,
      "name": "Constrict and Bite",
      "file": "orochimaru_skill_5_(constrict_and_bite).png"
    }
  ]
} as const;

export default character;

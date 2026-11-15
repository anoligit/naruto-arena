// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nara Shikamaru",
  "portraits": [
    {
      "number": 1,
      "file": "narashikamaru_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Meditate",
      "file": "narashikamaru_skill_1_(meditate).jpg"
    },
    {
      "number": 2,
      "name": "Shadow-Neck Bind",
      "file": "narashikamaru_skill_2_(shadow-neck_bind).jpg"
    },
    {
      "number": 3,
      "name": "Shadow Imitation",
      "file": "narashikamaru_skill_3_(shadow_imitation).jpg"
    },
    {
      "number": 4,
      "name": "Shikamaru Hide",
      "file": "narashikamaru_skill_4_(shikamaru_hide).jpeg"
    }
  ]
} as const;

export default character;

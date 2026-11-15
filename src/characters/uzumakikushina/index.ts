// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uzumaki Kushina",
  "portraits": [
    {
      "number": 1,
      "file": "uzumakikushina_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Four Symbols Seal",
      "file": "uzumakikushina_skill_1_(four_symbols_seal).jpg"
    },
    {
      "number": 2,
      "name": "Life Link",
      "file": "uzumakikushina_skill_2_(life_link).jpg"
    },
    {
      "number": 3,
      "name": "Adamantine Sealing Chains",
      "file": "uzumakikushina_skill_3_(adamantine_sealing_chains).jpg"
    },
    {
      "number": 4,
      "name": "Adamantine Covering Chains",
      "file": "uzumakikushina_skill_4_(adamantine_covering_chains).jpg"
    },
    {
      "number": 5,
      "name": "Life Transfer",
      "file": "uzumakikushina_skill_5_(life_transfer).png"
    }
  ]
} as const;

export default character;

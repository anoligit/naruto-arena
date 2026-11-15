// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Mitarashi Anko",
  "portraits": [
    {
      "number": 1,
      "file": "mitarashianko_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Dual Pin",
      "file": "mitarashianko_skill_1_(dual_pin).jpg"
    },
    {
      "number": 2,
      "name": "Twin Snakes",
      "file": "mitarashianko_skill_2_(twin_snakes).jpg"
    },
    {
      "number": 3,
      "name": "Hidden Shadow Snake Hand",
      "file": "mitarashianko_skill_3_(hidden_shadow_snake_hand).jpg"
    },
    {
      "number": 4,
      "name": "Quick Reflexes",
      "file": "mitarashianko_skill_4_(quick_reflexes).jpg"
    },
    {
      "number": 5,
      "name": "Dragon Fire",
      "file": "mitarashianko_skill_5_(dragon_fire).png"
    }
  ]
} as const;

export default character;

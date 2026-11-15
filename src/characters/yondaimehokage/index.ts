// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yondaime Hokage",
  "portraits": [
    {
      "number": 1,
      "file": "yondaimehokage_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hiraishin Rasengan",
      "file": "yondaimehokage_skill_1_(hiraishin_rasengan).jpg"
    },
    {
      "number": 2,
      "name": "Space Time Barrier",
      "file": "yondaimehokage_skill_2_(space_time_barrier).jpg"
    },
    {
      "number": 3,
      "name": "Partial Dead Demon Consuming Seal",
      "file": "yondaimehokage_skill_3_(partial_dead_demon_consuming_seal).jpg"
    },
    {
      "number": 4,
      "name": "Kunai Defense",
      "file": "yondaimehokage_skill_4_(kunai_defense).jpg"
    }
  ]
} as const;

export default character;

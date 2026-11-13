# Classes de habilidades

- `definitions.ts`: nomes, explicações e categorias das classes.
- `types.ts`: identificadores aceitos pelo código.
- `format.ts`: textos usados na seleção e na consulta durante a batalha.
- `rules.ts`: correspondência entre as classes de uma habilidade e a lista afetada por um efeito.
- `index.ts`: reúne as exportações.

Para alterar as classes de uma habilidade, edite `classes` no `src/characters/<personagem>/index.ts`.

Para mudar o nome exibido ou a explicação de uma classe em todas as telas, edite `definitions.ts`. Preserve o identificador interno se quiser mudar apenas o texto.

As categorias são natureza (Physical, Chakra, Affliction, Mental), alcance (Melee, Ranged), vínculo (Instant, Action, Control) e especial (Unique). Não há limite automático de uma classe por categoria.

Chakra, como classe, não é custo: pagar Ninjutsu não determina a classe da habilidade. Os efeitos de dano também definem separadamente se o dano é normal, piercing ou affliction.

O cadastro não cria mecânicas sozinho. Por exemplo, o comportamento de um efeito Control depende de sua definição de status e das regras do motor. Action descreve uma mecânica que precisará ser implementada ao adicionar uma habilidade que a utilize; não há habilidade Action entre os personagens atuais. Unique será considerado ao implementar cópia de habilidades.

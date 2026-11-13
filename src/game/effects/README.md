# Efeitos de combate

Os valores, classes afetadas e durações de cada habilidade ficam em `src/characters/<personagem>/index.ts`. Esta pasta contém as regras compartilhadas que interpretam esses dados.

- `damage.ts`: aplica bônus, registra dano e resolve o total do turno; inclui execução condicional e dano provocado pelo uso de habilidade.
- `healing.ts`: cura personagens vivos sem ultrapassar a vida máxima.
- `protection.ts`: aplica reduções percentuais e fixas; piercing e affliction ignoram essas reduções.
- `stun.ts`: verifica bloqueio por classe e imunidade a stun.
- `reflection.ts`: decide quando uma habilidade é refletida ou cancelada pela reflexão.
- `status.ts`: aplica efeitos persistentes aos personagens.
- `duration.ts`: calcula quando um efeito termina.
- `active.ts`: verifica efeitos ativos, incluindo a conexão de Control e morte da origem.
- `catalog.ts`: reúne os efeitos dos personagens e os efeitos genéricos disponíveis.
- `validation.ts`: valida os valores dos efeitos.
- `apply.ts`: encaminha cada efeito à regra correspondente.
- `types.ts`: descreve os dados aceitos.
- `index.ts`: reúne as exportações.

Para balancear dano, cura, proteção ou duração de uma habilidade existente, edite o personagem. Para introduzir uma mecânica inédita, adicione suporte nesta pasta e depois declare os dados no personagem.

Recarga da habilidade e duração de efeito continuam separadas. O dano normal é somado por alvo antes da redução; a parte decimal é descartada no resultado final. Esta reorganização mantém as regras atuais.

## Descrição dos indicadores

`presentation.ts` transforma os modificadores em textos: dano, percentuais e classes vêm dos mesmos dados usados no combate. Para complementar a explicação de um efeito específico, edite `indicatorNote` no arquivo do personagem, junto de `modifiers`. Não repita valores numéricos nessa nota quando eles já estão nos modificadores.

A duração exibida vem da expiração real do efeito, separada do cooldown. A aparência e o posicionamento da caixa ficam em `src/components/EffectIndicator.css` e `EffectIndicator.tsx`.

## Previsão de vida

`game/healthPreview.ts` estima o resultado das ações atribuídas. Usa o mesmo `resolveTurn` do combate, sem avançar o turno ou sortear energia. A simulação acontece sobre uma cópia filtrada antes de qualquer validação: efeitos invisíveis ao jogador não entram em custos, alvos, reflexão, dano ou decisões de falha da previsão. Os próprios efeitos invisíveis do jogador continuam conhecidos para ele.

A interface recebe apenas vida atual e estimada. Cancelar, trocar ou reordenar ações recalcula a previsão. A confirmação continua usando o estado completo, por isso um efeito oculto pode produzir um resultado real diferente. A previsão nunca confirma ações ou altera os personagens reais.

Ao implementar uma mecânica nova que afete vida, inclua testes tanto do resultado público quanto da comparação entre cenários com e sem efeitos ocultos. Se essa mecânica tiver efeitos no encerramento do turno, revise o ponto de simulação antes de apresentar a vida do próximo turno.

## Ordem de aplicação e invulnerabilidade

Cada status criado pelo motor registra `appliedAt`: turno global, posição da ação confirmada e posição do efeito naquela habilidade. `indicators.ts` reúne os efeitos diretos e auras numa lista cronológica; ações ainda planejadas aparecem depois, na ordem da fila. A origem aliada/inimiga é comparada ao jogador da vez, identificada por uma marca azul (aliada) ou vermelha (inimiga), sem letras, e explicada no tooltip. Origem não é critério de ordenação. Efeitos inimigos invisíveis não geram ícones.

Para um personagem que deve impedir novas invulnerabilidades, inclua no status da sua habilidade:

```ts
modifiers: [{ type: 'prevent-invulnerability' }]
```

O bloqueio vale no momento da aplicação:

- Bloqueio antes da proteção: a habilidade de proteção ainda pode ser usada e paga energia, ação e cooldown, mas a nova invulnerabilidade é impedida.
- Proteção antes do bloqueio: a proteção já existente continua até sua expiração normal; esse modificador não é uma remoção de efeitos.
- Efeito com outros benefícios: somente o modificador de invulnerabilidade é suprimido. As demais partes continuam funcionando.
- Uma proteção impedida não reaparece quando o bloqueio termina.

`blockedModifiers` pertence à aplicação, não ao cadastro. `getAppliedModifiers` é a consulta comum usada pelas regras e pelos indicadores para respeitar essa supressão. Mudanças de habilidades liberadas por um status, como o ataque em área dos espelhos do Haku, são preservadas quando só a proteção é bloqueada.

Esse modificador está disponível para habilidades futuras; nenhum personagem atual ganhou esse bloqueio automaticamente. Para remover uma invulnerabilidade já ativa, será necessária uma regra explícita de remoção, com suas próprias condições.

## Registro de counters

`counters.ts` registra uma interação apenas quando o counter é realmente ativado na resolução. Reflexão, cancelamento de Control e impedimento de nova invulnerabilidade identificam a habilidade counterada e a habilidade/personagem que a interceptou. Um counter invisível que não disparou continua oculto.

O registro pertence a `BattleState.counterReports`, separado dos status ativos: não aplica efeitos, não prolonga defesas e não volta a executar a habilidade. Fica visível após a confirmação, mesmo quando o efeito original expira, apenas no turno imediatamente seguinte à ativação do counter. Ao terminar esse turno, o aviso desaparece e não reaparece na próxima vez do jogador counterado. Timeout também encerra esse prazo. Uma fila inválida reverte os registros juntamente com as demais alterações da ação.

A linha de indicadores inclui esses avisos na posição cronológica da interação. O tooltip mostra a habilidade counterada, o counter, o personagem responsável e o resultado. Ao adicionar uma nova mecânica de counter, registre sua ocorrência em `recordCounter` no ponto em que ela efetivamente interrompe a habilidade. Não revele a defesa ao apenas planejar, consultar ou prever vida.

## Indicadores por personagem e texto de duração

Um indicador acompanha o efeito naquele personagem até sua expiração ou interrupção. Uma habilidade com vários destinatários mantém indicadores independentes: Sharingan mostra a defesa no Sasuke e a marca no inimigo; a névoa mostra proteção no Zabuza e aumento de custo nos inimigos. O texto descreve os efeitos do destinatário daquele ícone.

A duração é exibida como `3 turnos`, `2 turnos` ou `1 turno`, sem nomear o jogador usado pelo relógio interno. No turno em que o efeito efetivamente vai expirar, mostra `acaba esse turno`. Essa mudança de texto não altera a contagem das regras. Avisos de counter continuam aparecendo somente no turno seguinte à ocorrência e também usam `acaba esse turno`.

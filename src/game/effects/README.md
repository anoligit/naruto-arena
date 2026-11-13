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

-- Progresso genérico: futuras missões são declaradas somente no index.ts do personagem.
CREATE TABLE IF NOT EXISTS account_missions (
 account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
 mission_id TEXT NOT NULL,
 streak INTEGER NOT NULL DEFAULT 0,
 completed INTEGER NOT NULL DEFAULT 0,
 PRIMARY KEY(account_id,mission_id)
);
-- Migração histórica do Haku: preserva contadores e desbloqueios existentes.
INSERT OR IGNORE INTO account_missions(account_id,mission_id,streak,completed)
 SELECT account_id,'haku',haku_streak,haku_unlocked FROM account_progress;

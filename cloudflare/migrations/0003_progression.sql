-- Progresso e resultados de partidas rápidas, com aplicação idempotente.

CREATE TABLE IF NOT EXISTS account_progress (
 account_id TEXT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
 wins INTEGER NOT NULL DEFAULT 0, losses INTEGER NOT NULL DEFAULT 0,
 streak INTEGER NOT NULL DEFAULT 0, haku_streak INTEGER NOT NULL DEFAULT 0,
 haku_unlocked INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS account_results (
 account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
 match_id TEXT NOT NULL, outcome TEXT NOT NULL CHECK(outcome IN ('win','loss','draw')),
 team_json TEXT NOT NULL, completed_at INTEGER NOT NULL, eligible_haku INTEGER NOT NULL,
 applied INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(account_id,match_id)
);

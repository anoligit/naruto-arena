CREATE TABLE accounts (
  id TEXT PRIMARY KEY, username TEXT NOT NULL, username_key TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL, email_key TEXT NOT NULL UNIQUE,
  password_hash BLOB NOT NULL, password_salt BLOB NOT NULL,
  created_at INTEGER NOT NULL, avatar_id TEXT,
  team_json TEXT NOT NULL DEFAULT '[null,null,null]'
);
CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);
CREATE INDEX sessions_expiry ON sessions(expires_at);

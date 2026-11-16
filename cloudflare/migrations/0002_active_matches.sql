CREATE TABLE active_matches (
  account_id TEXT PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
  room_code TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

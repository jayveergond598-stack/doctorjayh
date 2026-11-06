CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    mode TEXT NOT NULL,
    symptoms TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

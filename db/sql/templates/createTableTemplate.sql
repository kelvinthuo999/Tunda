-- db/sql/templates/createTableTemplate.sql

CREATE TABLE IF NOT EXISTS {tableName} (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quantity INTEGER NOT NULL,
  unit TEXT NOT NULL, -- 'pieces' for countable items, 'kg' for non-countable items
  expiry_date TEXT NOT NULL
);

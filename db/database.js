const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./fruits.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the fruits database.');
});

const createTable = (tableName) => {
  return new Promise((resolve, reject) => {
    const query = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stocking_date TEXT,
        status TEXT,
        expected_expiry_date TEXT
      )
    `;
    db.run(query, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

const insertData = (tableName, data) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tableName} (stocking_date, status, expected_expiry_date) VALUES (?, ?, ?)`;
    const stmt = db.prepare(query);
    data.forEach((item) => {
      stmt.run(item.stocking_date, item.status, item.expected_expiry_date, (err) => {
        if (err) {
          reject(err);
        }
      });
    });
    stmt.finalize((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

const readData = (tableName) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tableName}`;
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};

const deleteTable = (tableName) => {
  return new Promise((resolve, reject) => {
    const query = `DROP TABLE IF EXISTS ${tableName}`;
    db.run(query, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

module.exports = {
  createTable,
  insertData,
  readData,
  deleteTable
};
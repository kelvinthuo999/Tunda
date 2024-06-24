const fs = require('fs');
const path = require('path');
const db = require('./db');

const createTable = (tableName) => {
  const templatePath = path.resolve(__dirname, 'sql', 'templates', 'createTableTemplate.sql');
  let sql = fs.readFileSync(templatePath, 'utf8');
  sql = sql.replace('{tableName}', tableName);

  db.run(sql, (err) => {
    if (err) {
      console.error(`Error creating table ${tableName}`, err);
    } else {
      console.log(`Table ${tableName} created successfully`);
    }
  });
};

const tables = [
  'bananas',
  'oranges',
  'mangoes',
  'apples',
  'watermelon',
  'grapes',
  'potatoes',
  'tomatoes'
];

tables.forEach(createTable);
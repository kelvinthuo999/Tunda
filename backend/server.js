// import all the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const {
  createTable,
  insertData,
  readData,
  deleteTable
} = require('./database');
// start the app and open the port it will be running
const app = express();
const port = 3000;

app.use(bodyParser.json());
//endpoint to create a table
app.post('/createTable', async (req, res) => {
  const { tableName } = req.body;
  try {
    await createTable(tableName);
    res.status(200).send(`Table ${tableName} created successfully.`);
  } catch (error) {
    res.status(500).send(`Error creating table ${tableName}: ${error.message}`);
  }
});
//endpoint to insert data into a table
app.post('/insertData', async (req, res) => {
  const { tableName, data } = req.body;
  try {
    await insertData(tableName, data);
    res.status(200).send(`Data inserted into table ${tableName} successfully.`);
  } catch (error) {
    res.status(500).send(`Error inserting data into table ${tableName}: ${error.message}`);
  }
});
//endpoint to read data from a table
app.get('/readData', async (req, res) => {
  const { tableName } = req.query;
  try {
    const data = await readData(tableName);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(`Error reading data from table ${tableName}: ${error.message}`);
  }
});
//endpoint to delete a table
app.delete('/deleteTable', async (req, res) => {
  const { tableName } = req.body;
  try {
    await deleteTable(tableName);
    res.status(200).send(`Table ${tableName} deleted successfully.`);
  } catch (error) {
    res.status(500).send(`Error deleting table ${tableName}: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

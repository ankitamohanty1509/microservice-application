const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'admin',
  password: process.env.DB_PASSWORD,
  database: 'testdb'
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM visitors', (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});

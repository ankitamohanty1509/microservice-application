const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('DB Connection Error:', err.stack);
    return;
  }
  console.log('Connected to DB');
});

app.get('/api', (req, res) => {
  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) res.status(500).send(err.toString());
    else res.send('Database time: ' + results[0].time);
  });
});

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});

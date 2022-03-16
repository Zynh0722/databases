var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

dbConnection.connect();

const queryString = 'SELECT * FROM messages m INNER JOIN github_handles g ON m.github_handle = g.id';
const queryArgs = [];

dbConnection.query(queryString, queryArgs, (err, results) => {
  if (err) {
    throw err;
  }

  console.log(results);
});

dbConnection.end();
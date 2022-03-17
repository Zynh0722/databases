var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

dbConnection.connect();

const queryString = 'INSERT INTO messages (content, room, author, github_handle) VALUES (?, ?, ?, ?)';
const queryArgs = [ 'abcd', 1, 'krenko', 1 ];

dbConnection.query(queryString, queryArgs, (err, results) => {
  if (err) {
    throw err;
  }

  console.log(results);
});

dbConnection.end();
var { db } = require('../db');

module.exports = {
  getAll: function (cb) {
    const queryString = 'SELECT * FROM messages';
    const queryArgs = [];

    db.query(queryString, queryArgs, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(results);
      }
    });
  }, // a function which produces all the messages

  create: function ({ text, room, author, githubHandle }, cb) {
    const queryString = 'INSERT INTO messages (content, room, author, github_handle) VALUES (?, ?, ?, ?)';
    const queryArgs = [ text, room, author, githubHandle ];

    db.query(queryString, queryArgs, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(results);
      }
    });
  } // a function which can be used to insert a message into the database
};

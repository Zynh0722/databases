var { db } = require('../db');

const getRoomQuery = roomname => `SELECT * FROM rooms WHERE roomname = '${roomname}'`;
const insertRoomQuery = roomname => `INSERT INTO rooms (roomname) VALUES ('${roomname}')`;
const messageQuery = () => 'INSERT INTO messages (text, room, username, github_handle) VALUES (?, ?, ?, ?)';

const getRoom = (roomname, cb) => {
  db.query(getRoomQuery(roomname), (err, results) => {
    if (err) {
      cb(err);
    } else {
      if (results[0] && results[0].roomname === roomname) {
        cb(null, results[0].id);
      } else {
        db.query(insertRoomQuery(roomname), (err, res) => {
          cb(null, res.insertId);
        });
      }
    }
  });
};

module.exports = {
  getAll: function (cb) {
    const queryString = 'SELECT * FROM messages m INNER JOIN rooms r ON m.room = r.id ORDER BY m.id DESC';
    const queryArgs = [];

    db.query(queryString, queryArgs, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }, // a function which produces all the messages

  create: function ({ text, roomname, username }, cb) {


    getRoom(roomname, (err, id) => {
      let queryArgs = [ text, id, username, 1 ];
      console.log(queryArgs);
      db.query(messageQuery(), queryArgs, (err, results) => {
        if (err) {
          cb(err);
        } else {

          cb(null, results);
        }
      });
    });


    cb(null);
  } // a function which can be used to insert a message into the database
};

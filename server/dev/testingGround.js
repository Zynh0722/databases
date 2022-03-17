var mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

db.connect();

const getRoomQuery = roomname => `SELECT * FROM rooms WHERE roomname = '${roomname}'`;
const insertRoomQuery = roomname => `INSERT INTO rooms (roomname) VALUES ('${roomname}')`;

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

const queryString = 'SELECT * FROM rooms WHERE roomname = \'obby\'';
const queryArgs = [];

getRoom('obby', (err, id) => console.log(id));
getRoom('quirky room uwu', (err, id) => console.log(id));

// db.end();
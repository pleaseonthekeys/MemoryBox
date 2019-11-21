let db = require("../db");

const songControllers = {
  getSongs: (req, res) => {
    let sql = `SELECT * FROM songs`;

    db.query(sql, [], (err, result) => {
      if (err) {
        console.log("error selecting songs", err);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
  getMemories: (req, res) => {
    let sql = `SELECT s.*, m.*
FROM songs s
INNER JOIN song_memory sm
ON sm.song_id = s.id
INNER JOIN memories m
ON m.memory_key = sm.memory_key`;

    db.query(sql, [], (err, result) => {
      if (err) {
        console.log("error retrieving memories", err);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  }
};

module.exports = songControllers;

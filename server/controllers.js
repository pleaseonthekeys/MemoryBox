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
  },
  postMemory: (req, res) => {
    let newMemory = {
      memory_key: req.body.memory_key,
      memory: req.body.memory
    };
    let songMemJoin = {
      song_id: req.body.songId
    };
    let newMemParams = [
      newMemory.memory_key,
      newMemory.memory,
      songMemJoin.song_id,
      newMemory.memory_key
    ];
    let joinMemParams = [songMemJoin.song_id, newMemory.memory_key];

    let makeMemory = `INSERT INTO memories (memory_key, memory) VALUES(?, ?);`;
    let joinMemandSong = `INSERT INTO song_memory (song_id, memory_key) VALUES(?, ?);`;

    db.query(makeMemory, newMemParams, (err, result) => {
      if (err) {
        console.log("error posting new Memory", err);
        return res.status(500).send("Could not create a new memory");
      } else {
        db.query(joinMemandSong, joinMemParams, (err, result) => {
          if (err) {
            console.log("error posting new Memory to join table", err);
            return res.status(500).send("Could not create a new memory");
          } else {
            return res.status(201).send(result);
          }
        });
      }
    });
  }
};

module.exports = songControllers;

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
    let params = [
      newMemory.memory_key,
      newMemory.memory,
      songMemJoin.song_id,
      newMemory.memory_key
    ];
    let sql = `INSERT INTO memories (memory_key, memory) VALUES(?, ?);`;
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log("error posting new Memory", err);
        res.sendStatus(500);
      } else {
        res.status(201);
      }
    });
    let params2 = [songMemJoin.song_id, newMemory.memory_key];
    let sql2 = `INSERT INTO song_memory (song_id, memory_key) VALUES(?, ?);`;
    db.query(sql2, params2, (err, result) => {
      if (err) {
        console.log("error posting new Memory to join table", err);
        res.sendStatus(500);
      } else {
        res.status(201).send(result);
      }
    });
  }
};

module.exports = songControllers;

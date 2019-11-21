const express = require("express");

const { getSongs, getMemories } = require("./controllers");

const SongRouter = express.Router();

SongRouter.get("/songs", getSongs);
SongRouter.get("/memories/", getMemories);

module.exports = SongRouter;

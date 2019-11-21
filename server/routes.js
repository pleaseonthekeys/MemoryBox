const express = require("express");

const { getSongs, getMemories, postMemory } = require("./controllers");

const SongRouter = express.Router();

SongRouter.get("/songs", getSongs);
SongRouter.get("/memories", getMemories);
SongRouter.post("/memories", postMemory);

module.exports = SongRouter;

const express = require("express");
const app = express();
const parser = require("body-parser");
const port = process.environment || 8000;

const SongRouter = require("./server/routes.js");

app.use(parser.json());
app.use(express.static("dist"));
app.use(SongRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

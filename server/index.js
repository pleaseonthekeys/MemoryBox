const express = require("express");
const app = express();
const parser = require("body-parser");
// const port = 8000;

const SongRouter = require("./routes.js");

app.use(parser.json());
app.use(express.static("dist"));
app.use(SongRouter);

app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

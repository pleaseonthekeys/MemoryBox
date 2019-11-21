const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "laurenalbert",
  database: "memoryBox"
});

connection.connect(err => {
  err
    ? console.log("unable to connect to db", err)
    : console.log("connected to db");
});

module.exports = connection;

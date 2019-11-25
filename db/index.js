// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   user: "root",
//   database: "memoryBox"
// });

// connection.connect(err => {
//   err
//     ? console.log("unable to connect to db", err)
//     : console.log("connected to db");
// });

// module.exports = connection;

const mysql = require("mysql");
const dbConfig = require("./db.config");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

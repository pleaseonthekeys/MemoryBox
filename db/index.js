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

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

var connection = mysql.createConnection(
  "mysql://bb9287dba574c6:c37795ee@us-cdbr-iron-east-05.cleardb.net/heroku_40b468769343705?reconnect=true"
);

var db = connection.connect(err => {
  if (err) {
    console.log("unable to connect to mysql", err);
  } else {
    console.log("connected to mysql DB!");
  }
});
module.exports = connection;

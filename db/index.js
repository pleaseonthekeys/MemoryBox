const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net"
  user: "bb9287dba574c6",
  password: "c37795ee"
  database: "heroku_40b468769343705"
});

connection.connect(err => {
  err
    ? console.log("unable to connect to db", err)
    : console.log("connected to db");
});

module.exports = connection;

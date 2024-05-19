const express = require('express');
const path = require('path'); // commonjs
require('dotenv').config(); // load env file
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // default: empty
  password: "123456",
  port: 3307, // default 3306
  database: "hoidanit"
});

// simple query
connection.query(
  'SELECT * FROM Users',
  function(err, results, fields) {
    console.log(">>> ", results); // results contains rows returned by server
    console.log(">>> ", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
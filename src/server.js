const express = require('express');
const app = express();
const path = require('path'); // commonjs
require('dotenv').config(); // load env file

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// khai bao route
app.use('/', webRoutes);

// test connection

// simple query
// connection.query(
//   'SELECT * FROM Users',
//   function(err, results, fields) {
//     console.log(">>> ", results); // results contains rows returned by server
//     console.log(">>> ", fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
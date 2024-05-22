const mysql = require('mysql2');
require('dotenv').config(); // load env file

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // default: localhost
    port: process.env.DB_PORT, // default 3306
    user: process.env.DB_USER, // default: empty
    password: process.env.DB_PASSWORD, // default: empty
    database: process.env.DB_NAME
  });

module.exports = connection;
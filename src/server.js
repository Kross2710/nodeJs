const express = require('express');
const path = require('path'); // commonjs
require('dotenv').config(); // load env file
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
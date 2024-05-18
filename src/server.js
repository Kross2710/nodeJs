const express = require('express');
const path = require('path'); // commonjs
require('dotenv').config(); // load env file
const configViewEngine = require('./config/viewEngine');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static files
app.use(express.static(path.join(__dirname, 'public')));

// khai bao route
app.get('/', (req, res) => {
  res.render('sample.ejs')
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
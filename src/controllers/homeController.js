const { get } = require("express/lib/response");

const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World!');
    res.end();
}

const getABC = (req, res) => {
    res.send('ABC');
    res.end();
}

module.exports = {
    getHomepage,
    getABC
}
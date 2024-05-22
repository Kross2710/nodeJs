const connection = require('../config/database');
const { getAllUser } = require('../services/CRUD');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    res.render('home.ejs', { listUsers: results })
};

const getCreateUser = (req, res) => {
    res.render('create.ejs')
};

const getUpdateUser = (req, res) => {
    res.render('update.ejs')
};

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email: ", email);
    console.log(">>> name: ", name);
    console.log(">>> city: ", city);

    // connection.query(
    //     'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city],
    //     function(err, results) {
    //         console.log(results); // results contains rows returned by server
    //         res.send('Create user successfully');
    //     }
    // );

    let [results, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]
    );

    console.log(">>> ", results);

    res.send('Create user successfully');
}

module.exports = {
    getHomepage,
    getCreateUser,
    getUpdateUser,
    postCreateUser
}
const connection = require('../config/database');
const { getAllUser, getUserById } = require('../services/CRUD');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    res.render('home.ejs', { listUsers: results })
};

const getCreateUser = (req, res) => {
    res.render('create.ejs')
};

const getUpdateUser = async (req, res) => {
    let userId = req.params.id; // Get the user ID from the URL
    let user = await getUserById(userId); // Get the user details from the database
    res.render('update.ejs', { userData: user }); // Pass the user details to the view
};

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email: ", email);
    console.log(">>> name: ", name);
    console.log(">>> city: ", city);

    try {
        let [results, fields] = await connection.query(
            'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]
        );

        console.log(">>> User created successfully:", results);

        // Redirect back to the homepage after successful user creation
        res.redirect('/');
    } catch (err) {
        console.error(">>> Error creating user:", err);
        res.status(500).send("An error occurred while creating the user.");
    }
};

const postUpdateUser = async (req, res) => {
    let userId = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    try {
        let [results, fields] = await connection.query(
            'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, userId]
        );

        console.log(">>> User updated successfully:", results);

        // Redirect back to the homepage after successful user creation
        res.redirect('/');
    } catch (err) {
        console.error(">>> Error updating user:", err);
        res.status(500).send("An error occurred while updating the user.");
    }
};

const postDeleteUser = async (req, res) => {
    let userId = req.params.id;

    try {
        let [results, fields] = await connection.query(
            'DELETE FROM Users WHERE id = ?', [userId]
        );

        console.log(">>> User deleted successfully:", results);

        // Redirect back to the homepage after successful user creation
        res.redirect('/');
    } catch (err) {
        console.error(">>> Error deleting user:", err);
        res.status(500).send("An error occurred while deleting the user.");
    }
};

module.exports = {
    getHomepage,
    getCreateUser,
    getUpdateUser,
    postCreateUser,
    postUpdateUser,
    postDeleteUser
}
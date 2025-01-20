const connection = require("../config/database");

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    return results[0];
}

module.exports = {
    getAllUser,
    getUserById
}
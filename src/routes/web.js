const express = require('express');
const app = express();
const router = express.Router();

const { getHomepage, getCreateUser, getUpdateUser, postCreateUser, postUpdateUser, postDeleteUser } = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/create', getCreateUser);

router.get('/update/:id', getUpdateUser); // Pass the user ID to the URL

router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);

module.exports = router; // export default
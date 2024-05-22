const express = require('express');
const app = express();
const router = express.Router();

const { getHomepage, getCreateUser, getUpdateUser, postCreateUser } = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/create', getCreateUser);

router.get('/update', getUpdateUser);

router.post('/create-user', postCreateUser);

module.exports = router; // export default
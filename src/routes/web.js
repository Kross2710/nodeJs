const express = require('express');
const app = express();
const router = express.Router();

const { getHomepage, getCreateUser, postCreateUser } = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/create', getCreateUser)

router.post('/create-user', postCreateUser);

module.exports = router; // export default
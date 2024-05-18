const express = require('express');
const app = express();
const router = express.Router();

const { getHomepage, getABC } = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/sample', (req, res) => {
    res.render('sample.ejs')
  });

module.exports = router; // export default
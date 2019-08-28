var express = require('express');
var router = express.Router();
const cards = require('../controllers/card');

router.get('/', cards.list);
router.post('/add', cards.create);

module.exports = router;

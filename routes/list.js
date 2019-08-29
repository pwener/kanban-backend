var express = require('express');
var router = express.Router();

const lists = require('../controllers/list');

router.get('/', lists.list);
router.post('/add', lists.create);

module.exports = router;

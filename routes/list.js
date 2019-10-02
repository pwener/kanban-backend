var express = require('express');
var router = express.Router();

const lists = require('../controllers/list');

router.get('/', lists.list);
router.post('/add', lists.create);
router.delete('/:id', lists.delete);
router.put('/update', lists.update);

module.exports = router;

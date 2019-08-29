const List = require('../models/list');

exports.list = (_, res) => {
  List.find({}).exec((err, lists) => {
    if (err) {
      res.send(500, err.errors);
    } else {
      res.json(lists);
    }
  });
};

exports.create = (req, res) => {
  const newList = new List(req.body);

  newList.save().then(() => {
    res.redirect('/lists');
  }).catch(() => {
    const err = newList.validateSync();
    res.status(400).send({ error: err.errors });
  });
};
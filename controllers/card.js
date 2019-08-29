const Card = require('../models/card');

exports.list = (_, res) => {
  Card.find({}).exec((err, cards) => {
    if (err) {
      res.send(500, err);
    } else {
      res.json(cards);
    }
  });
};

exports.create = (req, res) => {
  const newCard = new Card(req.body);

  newCard.save().then(() => {
    res.redirect('/cards');
  }).catch(() => {
    const err = newCard.validateSync();
    res.status(400).send({ error: err.errors });
  });
};
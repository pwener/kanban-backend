const path = require('path');
const Card = require('../models/card');

exports.list = (_, res) => {
  Card.find({}).exec((err, cards) => {
    if (err) {
      return res.send(500, err);
    }
    res.json(cards);
  });
};

exports.create = (req, res) => {
  const newCard = new Card(req.body);

  console.log(req.body);

  newCard.save((err) => {
    if (err) {
      res.status(400).send('Unable to save cards to database');
    } else {
      res.redirect('/cards');
    }
  });
};
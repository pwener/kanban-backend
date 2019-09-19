/**
 * To understand what is List, check models/list
 */
const List = require('../models/list');
const SocketAction = require('./socket-actions');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

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

  const socketIO = req.io;

  newList.save().then(() => {
    res.status(200);
    socketIO
      // .in(newList.board.id)
      .emit(SocketAction.ADD_LIST, newList);
  }).catch(() => {
    const err = newList.validateSync();
    res.status(400).send({ error: err.errors });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  const socketIO = req.io;

  List.findByIdAndDelete(new ObjectId(id)).then(() => {
    res.status(200);
    socketIO.emit(SocketAction.DELETE_LIST, id);
  }).catch((err) => {
    res.status(500).send({ error: err });
  })
};
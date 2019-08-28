const mongoose = require('mongoose');

const url = "mongodb+srv://phwener:485263@cluster0-cbrwv.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
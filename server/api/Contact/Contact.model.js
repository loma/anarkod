'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  email: String,
  text: String,
  to: String
});

module.exports = mongoose.model('Contact', ContactSchema);

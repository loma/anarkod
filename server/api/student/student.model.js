'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  quote: String,
  image: String,
  qualifications: [String],
  projects: [String],
  workplaces: [String],
  schools: [String],
  interests: [String],
  info: { type : Array , "default" : [] }
});

module.exports = mongoose.model('Student', StudentSchema);

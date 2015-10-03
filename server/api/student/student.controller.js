'use strict';

var _ = require('lodash');
var Student = require('./student.model');

// Get list of students
exports.index = function(req, res) {
  var circle = req.query.circle;
  if (circle) {
    var query = Student.find({}).select({ "name": 1, "image": 1});
    query.exec(function (err, students) {
      if(err) { return handleError(res, err); }
      return res.json(200, students);
    });
    return;
  }
  if (req.query.tag) {
    //query with mongoose
    var tag = req.query.tag;

    var query = Student.find({$or:[
      {'qualifications':tag},
      {'projects':tag},
      {'workplaces':tag},
      {'schools':tag},
      {'interests':tag}]}).select({ "name": 1, "quote": 1, "image": 1});
    query.exec(function (err, students) {
      if(err) { return handleError(res, err); }
      return res.json(200, students);
    });
    return;
  };

  if (req.query.mode === 'mini') {
    //query with mongoose
    var query = Student.find({}).select({ "name": 1, "quote": 1, "image": 1});
    query.exec(function (err, students) {
      if(err) { return handleError(res, err); }
      return res.json(200, students);
    });
    return;
  };

  if (req.query.name) {
    Student.find({name:req.query.name}, function (err, students) {
      if(err) { return handleError(res, err); }
      return res.json(200, students);
    });
    return;
  }

  Student.find(function (err, students) {
    if(err) { return handleError(res, err); }
    return res.json(200, students);
  });
};

// Get a single student
exports.show = function(req, res) {
  Student.findById(req.params.id, function (err, student) {
    if(err) { return handleError(res, err); }
    if(!student) { return res.send(404); }
    return res.json(student);
  });
};

// Creates a new student in the DB.
exports.create = function(req, res) {
  Student.create(req.body, function(err, student) {
    if(err) { return handleError(res, err); }
    return res.json(201, student);
  });
};

// Updates an existing student in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Student.findById(req.params.id, function (err, student) {
    if (err) { return handleError(res, err); }
    if(!student) { return res.send(404); }
    var updated = _.merge(student, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, student);
    });
  });
};

// Deletes a student from the DB.
exports.destroy = function(req, res) {
  Student.findById(req.params.id, function (err, student) {
    if(err) { return handleError(res, err); }
    if(!student) { return res.send(404); }
    student.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}

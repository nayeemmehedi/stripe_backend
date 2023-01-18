const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  roll: {
    type: Number,
    required: true
  }
});

module.exports.Student = mongoose.model('Student', studentSchema);
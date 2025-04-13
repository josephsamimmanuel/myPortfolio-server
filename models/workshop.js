const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;

const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  sortOrder: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: false
  },
  timeline: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  achievements: {
    type: mongoose.Schema.Types.Mixed,  // Can be string or array of strings
    required: false
  },
  projectHighlights: {
    type: mongoose.Schema.Types.Mixed,  // Can be array of strings or array of objects
    required: false,
    validate: {
      validator: function(value) {
        if (!Array.isArray(value)) return false;
        return value.every(item => {
          if (typeof item === 'string') return true;
          if (typeof item === 'object') {
            return item.hasOwnProperty('name') && 
                   item.hasOwnProperty('type') && 
                   item.hasOwnProperty('description');
          }
          return false;
        });
      },
      message: 'ProjectHighlights must be an array of strings or objects with name, type, and description'
    }
  },
  researchAndPaper: {
    type: String,
    required: false
  },
  keyHighlights: {
    type: [String],
    required: false
  },
  skills: {
    type: mongoose.Schema.Types.Mixed,  // Can be array or object with technical/others
    required: false
  }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;



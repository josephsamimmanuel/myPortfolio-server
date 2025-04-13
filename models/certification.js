const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  image: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  grade: { 
    type: String
},
  link: { 
    type: String, 
    required: true 
},
});

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;


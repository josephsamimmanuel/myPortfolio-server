const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    link: String
}, { _id: false });

const dataSchema = new mongoose.Schema({
    role: String,
    type: [typeSchema]
}, { _id: false });

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
    },
    timeline: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true
    },
    data: dataSchema,
    projectHighlights: [String],
    technologies: [String],
    tools: [String],
    aiUsed: [String]
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
const Type = mongoose.model("Type", typeSchema);
const Data = mongoose.model("Data", dataSchema);

module.exports = { Project, Type, Data };




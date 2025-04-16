const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
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
    projectHighlights: [String],
    technologies: [String],
    tools: [String],
    aiUsed: [String]
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };




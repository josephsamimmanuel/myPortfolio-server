const mongoose = require("mongoose");

const necessaryLinksSchema = new mongoose.Schema({
    resumeLink: {
        type: String,
    },
    linkedinLink: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    instagramLink: {
        type: String,
    },
    twitterLink: {
        type: String,
    },
    facebookLink: {
        type: String,
    },
}, { timestamps: true });

const NecessaryLinks = mongoose.model("NecessaryLinks", necessaryLinksSchema);

module.exports = NecessaryLinks;

const express = require("express");
const necessaryLinksRouter = express.Router();
const NecessaryLinks = require("../models/necessaryLinks");

// Get all necessary links
necessaryLinksRouter.get("/get-necessary-links", async (req, res) => {
    try {
        const necessaryLinks = await NecessaryLinks.find();
        if (!necessaryLinks) {
            return res.status(404).json({ message: "No necessary link data found" });
    }
    res.status(200).json({
            message: "Necessary link data fetched successfully",
            data: necessaryLinks
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new necessary link
necessaryLinksRouter.post("/add-necessary-link", async (req, res) => {
    try {
        const { resumeLink, linkedinLink, githubLink, instagramLink, twitterLink, facebookLink } = req.body;
        const necessaryLinks = new NecessaryLinks({ resumeLink, linkedinLink, githubLink, instagramLink, twitterLink, facebookLink });
        
        await necessaryLinks.save();
        res.status(201).json({ message: "Necessary link data added successfully", data: necessaryLinks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a necessary link
necessaryLinksRouter.patch("/update-necessary-link/:id", async (req, res) => {
    try {
        const { resumeLink, linkedinLink, githubLink, instagramLink, twitterLink, facebookLink } = req.body;
        const necessaryLinks = await NecessaryLinks.findByIdAndUpdate(req.params.id, { resumeLink, linkedinLink, githubLink, instagramLink, twitterLink, facebookLink }, { new: true });
        if (!necessaryLinks) {
            return res.status(404).json({ message: "Necessary link data not found" });
        }
        res.status(200).json({ message: "Necessary link data updated successfully", data: necessaryLinks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = necessaryLinksRouter;

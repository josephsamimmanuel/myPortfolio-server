const express = require("express");
const educationRouter = express.Router();
const Education = require("../models/education");

// Get all education details
educationRouter.get("/get-education", async (req, res) => {
    try {
        const education = await Education.find();
        res.status(200).json({
            message: "Education details fetched successfully",
            data: education
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = educationRouter;

// Post education details
educationRouter.post("/add-education", async (req, res) => {
    try {
        const { sortOrder, title, role, timeline, grade, description, achievements, projectHighlights, researchAndPaper, keyHighlights, skills } = req.body;
        const education = new Education({ sortOrder, title, role, timeline, grade, description, achievements, projectHighlights, researchAndPaper, keyHighlights, skills });
        await education.save();
        res.status(201).json({ 
            message: "Education details created successfully", 
            data: education 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update education details
educationRouter.patch("/update-education/:id", async (req, res) => {
    try {
        const { sortOrder, title, role, timeline, grade, description, achievements, projectHighlights, researchAndPaper, keyHighlights, skills } = req.body;
        const education = await Education.findByIdAndUpdate(req.params.id, { sortOrder, title, role, timeline, grade, description, achievements, projectHighlights, researchAndPaper, keyHighlights, skills });
        res.status(200).json({ 
            message: "Education details updated successfully", 
            data: education 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




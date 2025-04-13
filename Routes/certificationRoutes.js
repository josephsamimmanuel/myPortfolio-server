const express = require("express");
const CertificationRouter = express.Router();
const Certification = require("../models/certification");

// Get all certifications Details
CertificationRouter.get("/get-certifications", async (req, res) => {
    try {
        const certifications = await Certification.find();
        res.status(200).json({
            success: true,
            message: "Certifications fetched successfully",
            data: certifications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching certifications",
            error: error.message
        });
    }
});

// Post a new certification
CertificationRouter.post("/add-certification", async (req, res) => {
    try {
        const certification = await Certification.create(req.body);
        res.status(201).json({
            success: true,
            message: "Certification created successfully",
            data: certification
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating certification",
            error: error.message
        });
    }
});

// Update a certification
CertificationRouter.patch("/update-certification/:id", async (req, res) => {
    try {
        const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: "Certification updated successfully",
            data: certification
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating certification",
            error: error.message
        });
    }
});

// Delete a certification
CertificationRouter.delete("/delete-certification/:id", async (req, res) => {
    try {
        await Certification.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Certification deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting certification",
            error: error.message
        });
    }
});

module.exports = CertificationRouter;



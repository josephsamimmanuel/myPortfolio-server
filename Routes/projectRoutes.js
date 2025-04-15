const express = require("express");
const projectRouter = express.Router();
const {Project} = require("../models/project");

// Get all projects
projectRouter.get("/get-projects", async (req, res) => {
    try {
        const projects = await Project.find();
        console.log(projects);
        // get all frontEnd and BackEnd Data when role is frontEnd or backEnd
        const frontEndProjects = projects.filter(project => project.data?.role === "frontEnd");
        const backEndProjects = projects.filter(project => project.data?.role === "backEnd");
        res.status(200).json({
            message: "Projects fetched successfully",
            data: {
                projects,
                frontEndProjects: frontEndProjects.map(project => project.data),
                backEndProjects: backEndProjects.map(project => project.data)
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// post a project
projectRouter.post("/add-project", async (req, res) => {
    try {
        const project = await Project.create(req.body);
        console.log(project);
        res.status(201).json({ 
            message: "Project created successfully", 
            data: { project }
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: error.message });
    }
});

// update a project
projectRouter.put("/update-project/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Project updated successfully", data: project });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// delete a project
projectRouter.delete("/delete-project/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Project deleted successfully", data: project });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = projectRouter;

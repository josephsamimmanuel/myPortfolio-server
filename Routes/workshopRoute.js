const express = require('express');
const workshopRouter = express.Router();
const Workshop = require('../models/workshop');

// Get all workshops
workshopRouter.get('/get-workshops', async (req, res) => {
    try {
        const workshops = await Workshop.find();
        res.status(200).json({
            message: 'Workshops fetched successfully',
            data: workshops
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workshops', error: error.message });
    }
});

// Create a new workshop
workshopRouter.post('/add-workshop', async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json({
            message: 'Workshop created successfully',
            data: workshop
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating workshop', error: error.message });
    }
});

// Update a workshop by ID
workshopRouter.put('/update-workshop/:id', async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workshop) {
            return res.status(404).json({ message: 'Workshop not found' });
        }
        res.status(200).json({
            message: 'Workshop updated successfully',
            data: workshop
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating workshop', error: error.message });
    }
});

// Delete a workshop by ID
workshopRouter.delete('/delete-workshop/:id', async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id);
        if (!workshop) {
            return res.status(404).json({ message: 'Workshop not found' });
        }
        res.status(200).json({ message: 'Workshop deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting workshop', error: error.message });
    }
});

module.exports = workshopRouter;
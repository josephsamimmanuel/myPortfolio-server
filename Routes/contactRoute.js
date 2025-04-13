const express = require("express");
const ContactRouter = express.Router();
const Contact = require("../models/contact");

ContactRouter.post("/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully" });
});

module.exports = ContactRouter;


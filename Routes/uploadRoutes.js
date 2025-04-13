const express = require("express");
const uploadRouter = express.Router();
const { upload } = require("../utils/cloudinary");

uploadRouter.post("/upload", upload.single("image"), (req, res) => {
    res.json({ 
        url: req.file.path,
        message: "Image uploaded successfully" 
    });
});

module.exports = uploadRouter;

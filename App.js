const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const CertificationRouter = require("./Routes/certificationRoutes");
const uploadRouter = require("./Routes/uploadRoutes");
const workshopRouter = require("./Routes/workshopRoute");
const ContactRouter = require("./Routes/contactRoute");
const educationRouter = require("./Routes/educationRoutes");
const projectRouter = require("./Routes/projectRoutes");
const necessaryLinksRouter = require("./Routes/necessaryLinksRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    // origin: "https://josesamimmanuels.netlify.app",
    origin: ["http://localhost:3000", "https://josephsamimmanuel.co.in"],
    credentials: true,
}));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
    next();
});

app.use("/", CertificationRouter);
app.use("/", uploadRouter);
app.use("/", workshopRouter);
app.use("/", ContactRouter);
app.use("/", educationRouter);
app.use("/", projectRouter);
app.use("/", necessaryLinksRouter);
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});




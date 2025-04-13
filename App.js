const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const CertificationRouter = require("./Routes/certificationRoutes");
const uploadRouter = require("./Routes/uploadRoutes");
const workshopRouter = require("./Routes/workshopRoute");
const ContactRouter = require("./Routes/contactRoute");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

app.use("/", CertificationRouter);
app.use("/", uploadRouter);
app.use("/", workshopRouter);
app.use("/", ContactRouter);
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});




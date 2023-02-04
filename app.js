require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db.js");
const teamRouter = require("./routes/team-router.js");
const dailyroi = require("./routes/dailyrois.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

connectToDB();
app.use("/api/team", teamRouter);
app.use("/api/dailyroi", dailyroi);


module.exports = app;

const express = require("express");
const app = express();

app.use(express.json());

// Route Imports
const info = require("./routes/infoRoute");
app.use("/api/v1",info)

module.exports = app;
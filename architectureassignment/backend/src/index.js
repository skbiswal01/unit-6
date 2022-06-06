const express = require('express');
const carController = require('./controllers/Cars');
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use("/cars", carController);

module.exports = app;
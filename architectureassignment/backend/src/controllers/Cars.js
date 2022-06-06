const express = require("express");
const router = express.Router();

const Car = require("../models/cars");

//Get all products route
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find().lean().exec();
    return res.status(200).send({ CarsData: cars });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
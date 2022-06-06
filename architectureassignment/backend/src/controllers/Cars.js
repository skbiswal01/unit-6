const express = require("express");
const router = express.Router();

const Car = require("../models/cars");

//Get all products route
router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10; 
    const skip = (page - 1) * pagesize; 
    const filter = req.query.filter || "";
    const sort = req.query.sort || "";
    const cars = await Car.find({ "year": {$eq : filter} }).sort({sort:-1})
      .skip(skip) 
      .limit(pagesize) 
      .lean()
      .exec();

    const totalPages = Math.ceil((await Car.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ cars, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;



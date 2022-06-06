const express = require("express");
const router = express.Router();

const Car = require("../models/cars");

//Get all products route
router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10; 
    const skip = (page - 1) * pagesize;
    if(req.query.filter || req.query.sort) {
      const model = req.query.model || ""; 
      const filter = req.query.filter || "";
      const sort = req.query.sort || "";
      var cars = await Car.find({"company_name": filter}).sort({sort:-1})
      .skip(skip) 
      .limit(pagesize) 
      .lean()
      .exec();

    }else {
      var cars = await Car.find()
      .skip(skip) 
      .limit(pagesize) 
      .lean()
      .exec();

    }
  
   
    const totalPages = Math.ceil((await Car.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ cars, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;



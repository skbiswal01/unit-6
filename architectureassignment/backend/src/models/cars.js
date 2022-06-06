const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
        company_name : String,
        model_name : String,
        model_year : String,
        car_no : Number,
        price : Number,
})

var cars = mongoose.model("cars", carSchema);
module.exports = cars;
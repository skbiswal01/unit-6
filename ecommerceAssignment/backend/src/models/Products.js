const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
      },
      imageUrl: {
        type: String
      },
      imageKey: {
        type: String
      },
      description: {
        type: String,
        trim: true
      },
      quantity: {
        type: Number
      },
      price: {
        type: Number
      },
      brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        default: null
      }
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
      },
      image: {
        type: String
        },
      description: {
        type: String,
        trim: true
      },
      
      Products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: null
      }
})

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
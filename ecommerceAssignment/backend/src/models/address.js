const Mongoose = require('mongoose');

// Address Schema
const AddressSchema = new Mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  },
  isDefault: {
    type: Boolean,
    default: false
  }
});

module.exports = Mongoose.model('Address', AddressSchema);
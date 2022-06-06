const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jvaf9wc.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connect;
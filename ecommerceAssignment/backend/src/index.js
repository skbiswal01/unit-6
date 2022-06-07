const express = require('express');
const brandRouter = require('./controllers/brands');
const productRouter = require('./controllers/products');
const userRouter = require('./controllers/users');
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use('/brands', brandRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
module.exports = app;
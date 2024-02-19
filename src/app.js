const express = require('express');
const app = express();

const productRouter = require('./routes/product');
app.use('/products', productRouter)

module.exports = app;
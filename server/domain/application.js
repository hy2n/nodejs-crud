const express = require('express');
const Order = require('./order/index');
const Product = require('./product/index');
const User = require('./user/index');

const app = express();

app.use(express.json()); //express middleware set

app.use("/api/order",Order);
app.use("/api/product",Product);
app.use("/api/user",User);

module.exports = app;
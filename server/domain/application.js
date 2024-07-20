const express = require('express');
const Order = require('./order/index');

const app = express();

app.use(express.json()); //express middleware set

app.use("/api/order",Order);

module.exports = app;
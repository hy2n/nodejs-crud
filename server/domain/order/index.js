const express = require('express');
const router = express.Router();
const OrderController = require('./controller');

router.get("/GetAll",OrderController.GetAllOrder);

module.exports = router;
const express = require('express');
const router = express.Router();
router.use(express.json());

const OrderController = require('./controller');

router.get("/list",OrderController.GetAllOrder);
router.get("/user/:id",OrderController.GetOrderByUserId);
router.get("/:id",OrderController.GetOrderByOrderId);
router.put("/:id",OrderController.UpdateOrderByOrderId);
router.delete("/:id",OrderController.DeleteOrderByOrderId);

module.exports = router;
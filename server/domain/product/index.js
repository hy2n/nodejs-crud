const express = require('express');
const router = express.Router();
router.use(express.json());

const ProductController = require("./controller");

router.get("/",ProductController.GetAllProduct); //전체조회

router.get("/:id",ProductController.GetProductWithId);
router.delete("/:id",ProductController.DeleteWithId);
router.put("/:id",ProductController.UpdateWithId);
router.post("/",ProductController.AddWithId);

module.exports = router;
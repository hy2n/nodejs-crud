const express = require('express');
const router = express.Router();
router.use(express.json());

const ProductController = require("./controller");

router.get("/")
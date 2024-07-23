const express = require('express');
const router = express.Router();
router.use(express.json());

const UserController = require('./controller');

router.get("/",UserController.GetAllUser);
router.delete("/:id",UserController.DeleteUser);


module.exports = router;
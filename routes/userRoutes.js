const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);

// Other CRUD routes...

module.exports = router;

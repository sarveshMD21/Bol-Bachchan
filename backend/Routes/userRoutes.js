const express = require("express");
const { registerUser, authUser } = require("../controller/userController.js");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
//router.route("/login");

module.exports = router;

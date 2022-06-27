const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controller/userController.js");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
//router.route("/login");

module.exports = router;

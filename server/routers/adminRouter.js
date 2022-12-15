const express = require("express");
const auth = require("../middleweare/auth");
const router = express.Router();

const {
  login,
  getDashboard,
  singleUser,
  editUser,
  updateUser,
  removeUser,
} = require("../controller/adminController");

router.post("/signin", login);
router.get("/dashboard", auth.validateAdminToken, getDashboard);
router.get("/view/:id", auth.validateAdminToken, singleUser);
router.get("/edit/:id", auth.validateAdminToken, editUser);
router.post("/update/:id", updateUser);
router.delete("/remove/:id", removeUser);

module.exports = router;

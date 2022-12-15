const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();
const auth = require("../middleweare/auth");
router.get("/", auth.authCheck, userController.signinGet);
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
// router.get("/profile", auth.authCheck, userController.profile);
router.post("/api/uploadImg/:id", userController.uploadImage);
module.exports = router;
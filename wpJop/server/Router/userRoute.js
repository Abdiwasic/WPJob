const express = require("express");
const router = express.Router();
const upload = require("../upload/multer");
const userController = require("../Controller/userController");

// router.route("/signup").post(upload.single("image"), userController.logIn);
router.post("/signup", upload.single("image"), userController.signUp);
router.route("/login").post(userController.logIn);
router.route("/:id").get(userController.getUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const commentController = require("../Controller/commentController");

router
  .route("/")
  .post(commentController.createComment)
  .get(commentController.getAllComment);

router.route("/:id").get(commentController.getAllComment);

module.exports = router;

const express = require("express");
const router = express.Router();
const postController = require("../Controller/postController");

router.route("/").get(postController.allPosts);
router.route("/").post(postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .put(postController.editPost)
  .delete(postController.deletePost);

module.exports = router;

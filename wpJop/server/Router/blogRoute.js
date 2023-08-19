const express = require("express");
const router = express.Router();
const upload = require("../upload/multer");
const blogController = require("../Controller/blogController");

router.route("/").get(blogController.allBlogs);
router.post("/", upload.single("blogImage"), blogController.createBlog);
router
  .route("/:id")
  .get(blogController.getBlog)
  .put(blogController.editBlog)
  .delete(blogController.deleteBlog);

module.exports = router;

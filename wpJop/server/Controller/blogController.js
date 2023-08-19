const blogs = require("../Model/blogModel");

module.exports = {
  allBlogs: async (req, res) => {
    try {
      const getAll = await blogs.find({}).populate("user");
      res.json({ message: getAll });
    } catch (error) {
      res.json({ message: error });
    }
  },
  createBlog: async (req, res) => {
    try {
      req.body.blogImage = req.file.filename;
      await blogs.create(req.body);
      res.json({ message: "you Created a Blog" });
    } catch (error) {
      res.json({ message: error });
    }
  },
  getBlog: async (req, res) => {
    res.json({ message: "one blog" });
  },
  editBlog: async (req, res) => {},
  deleteBlog: async (req, res) => {},
};

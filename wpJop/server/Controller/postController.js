const posts = require("../Model/postModel");

module.exports = {
  allPosts: async (req, res) => {
    const getAll = await posts.find({}).populate("user");
    res.json({ message: getAll });
  },
  createPost: async (req, res) => {
    try {
      await posts.create(req.body);
      res.json({ message: "you posted a jop." });
    } catch (error) {
      res.send(error.message);
    }
  },
  getPost: async (req, res) => {
    const { id } = req.params;
    const getOnePost = await posts.findById(id).populate("user");
    res.json({ message: getOnePost });
  },
  editPost: async (req, res) => {
    const { id } = req.params;
    const { jobTitle, jobDesc } = req.body;
    const findPost = await posts.findById(id);
    const data = { jobTitle, jobDesc };
  },
  deletePost: async (req, res) => {},
};

const comment = require("../Model/commentModel");
module.exports = {
  createComment: async (req, res) => {
    try {
      await comment.create(req.body);
      res.status(200).json({ message: "Successfully commented" });
    } catch (error) {
      res.status(200).json({ message: error });
    }
  },
  getAllComment: async (req, res) => {
    try {
      const { id } = req.params;
      const getComments = await comment.find({ blog: id }).populate("user");
      res.status(200).json({ message: getComments });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};

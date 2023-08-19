const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;

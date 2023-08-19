const mongoose = require("mongoose");

const blogShema = mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogDesc: {
    type: String,
    required: true,
  },
  blogCategory: {
    type: String,
    enum: ["Technology", "Health", "Business", "Politics"],
  },
  blogImage: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const blogModel = mongoose.model("Blog", blogShema);

module.exports = blogModel;

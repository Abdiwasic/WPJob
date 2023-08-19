const mongoose = require("mongoose");

const postShema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDesc: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "InternShip"],
  },
  experience: {
    type: String,
    enum: ["Junior", "Senior", "Expert"],
  },
  location: {
    type: String,
    enum: ["Onsite", "Remote"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const postModel = mongoose.model("Post", postShema);

module.exports = postModel;

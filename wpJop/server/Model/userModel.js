const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  company: {
    type: String,
  },
  image: {
    type: String
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

const mongoose = require("mongoose");
const url = `mongodb+srv://${process.env.DBuserName}:${process.env.DBpassword}@cluster0.o9qh9ki.mongodb.net/`;

mongoose
  .connect(url)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

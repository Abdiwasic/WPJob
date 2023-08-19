const express = require("express");
const app = express();
const dotenv = require("dotenv");
app.use(express.static("images"));
const cors = require("cors");
const blogRoute = require("./Router/blogRoute");
const userRoute = require("./Router/userRoute");
const postRoute = require("./Router/postRoute");
const commentRoute = require("./Router/commentRoute");
dotenv.config({ path: "./.env" });
require("./connection");

app.use(cors());
app.use(express.json());
app.use("/blog", blogRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);

app.listen(8000, () => console.log("server is running on port 8000"));

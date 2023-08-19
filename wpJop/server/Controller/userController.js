const users = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  signUp: async (req, res) => {
    try {
      const { email, password, confirmPassword } = req.body;
      const findUser = await users.findOne({ email });

      // check if user exists
      if (findUser) {
        return res.status(404).json({ message: "user exists" });
      }
      // check if password matches
      if (password !== confirmPassword) {
        return res.status(404).json({ message: "password not match" });
      }

      const encrypt = await bcrypt.hash(password, 10);
      req.body.password = encrypt;

      req.body.image = req.file.filename;

      // save
      await users.create(req.body);
      res.json({ message: "user is created" });
    } catch (error) {
      res.json(error.message);
    }
  },
  logIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const findUser = await users.findOne({ email });
      // check if user exists
      if (!findUser) {
        return res.status(404).json({ message: "Email is not found" });
        // check if password matches
      }
      const decrypt = await bcrypt.compare(password, findUser.password);
      if (decrypt == false) {
        return res.status(404).json({ message: "incorrect password" });
      }
      // create Token
      const token = jwt.sign(
        {
          id: findUser._id,
          email: findUser.email,
        },
        process.env.JWTSecret,
        { expiresIn: "2 days" }
      );
      console.log(token);
      res.json({ message: "user is login", token });
    } catch (error) {
      res.json(error.message);
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const findUser = await users.findById(id);
      const userWithProfile = {
        id: findUser._id,
        email: findUser.email,
        image: findUser.image,
      };
      res.status(200).json({ message: userWithProfile });
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

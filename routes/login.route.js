const express = require("express");
const LoginRouter = express.Router();
const checkUserExist = require("../middleware/login/checkuser");
const passwordDecrypt = require("../middleware/login/password.bcrypt");
const tokenGenerator = require("../middleware/token/token.generate");
const UserModel = require("../models/User.model");
LoginRouter.post(
  "/",
  checkUserExist,
  passwordDecrypt,
  tokenGenerator,
  async (req, res) => {
    const { email, password, token } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user == null) {
      return res
        .status(201)
        .send({ message: "Invalid email or password", status: false, });
    }

    res.status(200).send({ message: "login successfull", status: true, token });
  }
);

module.exports = LoginRouter;

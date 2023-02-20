const express = require("express");
const RegisterRoute = express.Router();

const checkUserExist = require("../middleware/register/checkuser");
const UserModel = require("../models/User.model");
const passwordEncrypt = require("../middleware/register/password.bcrypt");
RegisterRoute.post("/", checkUserExist, passwordEncrypt, async (req, res) => {
  const { name, email, password, gender, age, city } = req.body;

  const user = new UserModel({
    name,
    email,
    gender,
    password,
    age,
    city,
  });
  await user.save();
  res.status(200).send({ message: "register successfull", status: true });
});

module.exports = RegisterRoute;

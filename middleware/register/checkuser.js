const UserModel = require("../../models/User.model");

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  let user = await UserModel.findOne({ email });
  if (user == null) {
    return next();
  }
  res.status(201).send({ message: "user already exist",status :false });
};

module.exports = checkUserExist;

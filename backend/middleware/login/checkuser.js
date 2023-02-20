const UserModel = require("../../models/User.model");

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  let user = await UserModel.findOne({ email });
  if (user == null) {
    return res.status(201).send({ message: "user not exist", status: false });
  }
  return next();
};

module.exports = checkUserExist;

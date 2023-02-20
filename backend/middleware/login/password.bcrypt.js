const bcrypt = require("bcryptjs");

const UserModel = require("../../models/User.model");
const passwordDecrypt = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  const hash = user?.password;
  bcrypt.compare(password,hash, function (err, res) {
    if (err) {
      return res.send({ message: "Invalid User" });
    }
    req.body.userId = user._id;
    next();
  });
};

module.exports = passwordDecrypt;

const bcrypt = require("bcryptjs");

const passwordEncrypt = (req, res, next) => {
  const { password } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, 8, function (err, hash) {
      if (err) {
        return res.send({
          message: "something is wrong please try again later",
          status: false,
        });
      }
      req.body.password = hash;
      return next();
    });
  });
};

module.exports = passwordEncrypt;

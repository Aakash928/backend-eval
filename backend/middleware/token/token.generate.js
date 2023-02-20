const jwt = require("jsonwebtoken");
// 
const tokenGenerator = (req, res, next) => {
  const { email } = req.body;

  jwt.sign(
    email,
    "eva",
    function (err, token) {
      if (err) {
        return res.send({ message: "something is wrong" });
      }
      req.body.token = token;
      return next();
    }
  );
};
module.exports = tokenGenerator;

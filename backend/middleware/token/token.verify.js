const jwt = require("jsonwebtoken");
const UserModel=require("../../models/User.model")
const varifyToken = async(req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, "eva",async function (err, decoded) {
    if (err) {
      return res.send({ message: "not accessable" });
    }
   
    const user=await UserModel.findOne({email:decoded})
    req.body.userId=(user?._id);
    return next()
  });
};
module.exports = varifyToken;

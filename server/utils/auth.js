const jwt = require("jsonwebtoken");

const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = jwt.verify(token, "shivampatel");

    const user = await User.findById({ _id: decode._id }).exec();
    req.user = user;
    next();
  } catch (err) {
    res.json({ errors: "Not Access Login first!" });
  }
};

module.exports = auth;

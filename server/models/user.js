const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
  },
  type: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();

  delete userObj.image;
  delete userObj.password;
  delete userObj.date;
  delete userObj.__v;

  return userObj;
};

userSchema.methods.getAuthToken = async function () {
  const user = this;

  const token = jwt.sign(
    { _id: user._id.toString(), type: user.type },
    "shivampatel"
  );

  user.token = token;
  await User.create(user);
};

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject("Invalid password");
      }
      resolve(same);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;

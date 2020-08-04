const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const User = require("../models/user");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const auth = require("../utils/auth");
const Player = require("../models/playerImage");
const router = express.Router();

const upload = multer({
  limit: {
    fileSize: 1000000,
  },
});

// register user
router.post("/register", async (req, res) => {
  try {
    console.log("reg");
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(isValid);
    console.log(errors);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ errors: "email already exist" });
    }

    const newuser = await User.create(req.body);
    res.json(newuser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// login user
router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json({ errors: errors });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Email not found");
    }

    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) {
      throw new Error("Password invalid");
    }
    await user.getAuthToken();
    res.json(user);
  } catch (e) {
    res.status(400).json({ errors: e.message });
  }
});
router.get("/:id/profile", async (req, res) => {
  try {
    const user = await Player.findById({ _id: req.params.id }).exec();
    res.set("Content-Type", "image/jpg");
    console.log(user);

    res.send(user.image);
  } catch (err) {
    res.json({ errors: err.message });
  }
});

router.post("/avatar", auth, upload.single("avatar"), async (req, res) => {
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.image = buffer;

    const user = await User.create(req.user);
    res.send(user);
  } catch (err) {
    res.json({ errors: err.message });
  }
});

// get image
router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id }).exec();
    res.set("Content-Type", "image/jpg");
    console.log(user);

    res.send(user.image);
  } catch (err) {
    res.json({ errors: err.message });
  }
});

// get all user
router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// update user
router.post("/update", auth, async (req, res) => {
  const updates = Object.keys(req.body);

  updates.forEach((update) => (req.user[update] = req.body[update]));

  const user = await User.create(req.user);
  res.json(user);
});

// delete user
router.delete("/delete", auth, async (req, res) => {
  try {
    const removedUser = await req.user.remove();
    res.json(removedUser);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;

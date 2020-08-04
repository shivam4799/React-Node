const express = require("express");
const multer = require("multer");
const sharp = require("sharp");

const PlayerImage = require("../models/playerImage");
const mainPlayer = require("../models/mainPlayer");

const router = express.Router();

const upload = multer({
  limit: {
    fileSize: 1000000,
  },
});

router.get("/", async (req, res) => {
  const player = await mainPlayer.find({}).exec();
  res.json(player);
});

router.get("/singleplayer/:id", async (req, res) => {
  try {
    const player = await mainPlayer.findById({ _id: req.params.id }).exec();

    res.send(player);
  } catch (e) {
    res.send(e.message);
  }
});

var cpUpload = upload.fields([
  { name: "profile" },
  { name: "lc" },
  { name: "ssc" },
  { name: "hsc" },
  { name: "firstFee" },
  { name: "lastFee" },
  { name: "lastMarksheet" },
  { name: "aadharcard" },
  { name: "collageId" },
]);

router.post("/add", cpUpload, async (req, res) => {
  try {
    const image = {};

    for (const key in req.files) {
      let buffer = await sharp(req.files[key][0].buffer)
        .resize(500)
        .png()
        .toBuffer();

      image[key] = buffer;
    }

    const player = await PlayerImage.create(image);

    const playerData = await mainPlayer.create({
      ...req.body,
      images: player._id,
    });

    res.json(playerData);
  } catch (e) {
    res.send(e);
  }
});

router.post("/update/:id", cpUpload, async (req, res) => {
  try {
    const image = {};
    for (const key in req.files) {
      let buffer = await sharp(req.files[key][0].buffer)
        .resize({ width: 1280, height: 786 })
        .png()
        .toBuffer();

      image[key] = buffer;
    }

    const playerData = await mainPlayer.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    const player = await PlayerImage.findOneAndUpdate(
      { _id: playerData.images },
      image,
      {
        new: true,
      }
    );
    res.json({ playerData });
  } catch (e) {
    res.sendStatus(400).json({ errors: e.message });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const players = await mainPlayer
      .findByIdAndRemove({
        _id: req.params.id,
      })
      .exec();
    await PlayerImage.findByIdAndRemove({
      _id: players.images,
    }).exec();
    console.log(players);

    res.json({ msg: "success" });
  } catch (e) {
    res.sendStatus(400).json({ errors: e.message });
  }
});
router.delete("/deletemany", async (req, res) => {
  try {
    req.body.map(async (id) => {
      let players = await mainPlayer
        .findByIdAndRemove({
          _id: id,
        })
        .exec();
      await PlayerImage.findByIdAndRemove({
        _id: players.images,
      }).exec();
    });

    res.json({ msg: "success" });
  } catch (e) {
    res.sendStatus(400).json({ errors: e.message });
  }
});
// get image
router.get("/image/:name/:id", async (req, res) => {
  console.log(req.params);

  try {
    const player = await mainPlayer
      .findById({ _id: req.params.id })
      .populate("images", req.params.name)
      .exec();

    res.set("Content-Type", "image/png");
    res.send(player.images[req.params.name]);
  } catch (err) {
    res.json({ errors: err.message });
  }
});
router.get("/smallimage/:name/:id", async (req, res) => {
  try {
    const player = await mainPlayer
      .findById({ _id: req.params.id })
      .populate("images", req.params.name)
      .exec();

    res.set("Content-Type", "image/png");

    let buffer = await sharp(player.images[req.params.name])
      .resize(200)
      .png()
      .toBuffer();

    res.send(buffer);
  } catch (err) {
    res.json({ errors: err.message });
  }
});

module.exports = router;

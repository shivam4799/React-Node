const mongoose = require("mongoose");

const mainPlayerSchema = new mongoose.Schema({
  Enrollment: {
    type: String,
    trim: true,
  },
  collageId: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  course: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  dopclass: {
    type: String,
    trim: true,
  },
  dopcourse: {
    type: String,
    trim: true,
  },
  douni: {
    type: String,
    trim: true,
  },
  enNo: {
    type: String,
    trim: true,
  },
  fatherName: {
    type: String,
    trim: true,
  },
  fullName: {
    type: String,
    trim: true,
  },
  lastsempassed: {
    type: String,
    trim: true,
  },
  lspyear: {
    type: String,
    trim: true,
  },
  mobileNo: {
    type: String,
    trim: true,
  },
  motherName: {
    type: String,
    trim: true,
  },
  tournametnNo: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  images: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "PlayerImage",
  },
});

const mainPlayer = mongoose.model("mainPlayer", mainPlayerSchema);

module.exports = mainPlayer;

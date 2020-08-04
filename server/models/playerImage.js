const mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// const autoIncrementModelID = require("./counterModel");

// id: { type: Number, unique: true, min: 1 },
// image: {
//   type: Buffer,
//   default: null
// },
const playerImageSchema = new mongoose.Schema({
  profile: {
    type: Buffer,
    default: null,
  },
  profile: {
    type: Buffer,
    default: null,
  },
  lc: {
    type: Buffer,
    default: null,
  },
  ssc: {
    type: Buffer,
    default: null,
  },
  hsc: {
    type: Buffer,
    default: null,
  },
  firstFee: {
    type: Buffer,
    default: null,
  },
  lastFee: {
    type: Buffer,
    default: null,
  },
  lastMarksheet: {
    type: Buffer,
    default: null,
  },
  aadharcard: {
    type: Buffer,
    default: null,
  },
  collageId: {
    type: Buffer,
    default: null,
  },
});

const PlayerImage = mongoose.model("PlayerImage", playerImageSchema);

module.exports = PlayerImage;

const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect("mongodb://localhost:27017/node_auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connect;

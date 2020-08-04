const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connect = require("./utils/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/player", require("./routes/player"));
app.use("/user", require("./routes/user"));

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connect();
    console.log("connected to db");

    app.listen(port, () => console.log(`listing to port ${port}`));
  } catch (e) {
    console.log(e.message);
  }
};

// start server
start();

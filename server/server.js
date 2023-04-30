const express = require("express");
const pool = require("./db/connect");
const authRouter = require("./routes/auth");
const listingRouter = require("./routes/listing");
const errorHandler = require("./middlewares/errorHandler");
require("express-async-errors");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use(errorHandler);

const port = process.env.PORT || 8080;

async function init() {
  try {
    await pool.connect();
    app.listen(port, console.log("server running..."));
  } catch (err) {
    console.error(err);
  }
}

init();

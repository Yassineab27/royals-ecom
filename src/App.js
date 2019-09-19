const express = require("express");
const path = require("path");

const cors = require("cors");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const connectDB = require("../db");

const authRouter = require("./routes/auth");
const collectionsRouter = require("./routes/collections");
const paymentRouter = require("./routes/payment");
const usersRouter = require("./routes/users");

const app = express();

// connect to MongoDB
connectDB();

app.use(cors());
app.use(history());

// Parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting routes
app.use("/auth", authRouter);
app.use("/collections", collectionsRouter);
app.use("/users", usersRouter);
app.use("/payment", paymentRouter);

// Serve Static file in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}

module.exports = app;

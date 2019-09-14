const express = require("express");
const path = require("path");

const cors = require("cors");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(history());

// Parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.priceForStripe,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.send({ success: stripeRes });
    }
  });
});

// Serve Static file in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}

module.exports = app;

const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/", async (req, res) => {
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

module.exports = router;

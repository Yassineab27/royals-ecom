const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const userDuplicate = await User.findOne({ email: req.body.email });
  if (userDuplicate) {
    return res.status(400).send({ error: "Email already taken." });
  }

  try {
    const user = new User({
      ...req.body,
      items: []
    });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error();
    }

    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) {
      throw new Error();
    }

    res.send(user);
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Email or Password incorrect. Please try again." });
  }
});

module.exports = router;

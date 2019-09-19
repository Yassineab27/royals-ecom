const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.patch("/:userId/addItem", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send({ error: "User not found. Please Login" });
    }

    const itemDup = user.items.find(item => item.id === req.body.id);
    if (!itemDup) {
      user.items = [...user.items, { ...req.body, quantity: 1 }];
    } else {
      user.items = user.items.map(item => {
        return item.id === req.body.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }

    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.patch("/:userId/deleteItem/:itemId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.items = user.items.filter(item => item.id !== req.params.itemId);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.patch("/:userId/removeQuantity/:itemId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.items = user.items.map(item => {
      if (item.id === req.params.itemId) {
        return item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      }
      return item;
    });

    await user.save();
    console.log(user);
    res.send(user);
    console.log(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;

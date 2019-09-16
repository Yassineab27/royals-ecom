const express = require("express");
const Collection = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const collection = new Collection(req.body);
  await collection.save();
  res.send(collection);
});

module.exports = router;

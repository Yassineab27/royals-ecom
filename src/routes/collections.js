const express = require("express");
const Collection = require("../models/collection");

const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const collection = new Collection(req.body);
//     await collection.save();
//     res.send(collection);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const collections = await Collection.find();
    if (!collections) {
      return res.status(404).send({ error: "Collections not found." });
    }

    res.send(collections);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection) {
      return res.status(404).send({ error: "Collection not found." });
    }
    res.send(collection);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

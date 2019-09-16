const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;

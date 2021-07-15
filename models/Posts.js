const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Symbol: {
    type: String,
  },
  market_cap: {
    type: String,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);

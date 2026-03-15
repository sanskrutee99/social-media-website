const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: String,
  image: String
});

module.exports = mongoose.model("Post", postSchema);
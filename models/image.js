const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  summary: String,
  width: Number,
  height: Number,
  localURL: String,
  imgURL: String,
  imgCredit: String,
  imgCreditUrl: String
});

module.exports = mongoose.model("Image", imageSchema);
const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  service: String,
  price: Number,
  rating: Number,
  distance: Number,
  city: String,
  available: Boolean
});

module.exports = mongoose.model("Worker", workerSchema);

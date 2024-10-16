const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  prices: {
    small: Number,
    medium: Number,
    large: Number,
  },
  imageUrl: String,
});

module.exports = mongoose.model("Pizza", PizzaSchema);

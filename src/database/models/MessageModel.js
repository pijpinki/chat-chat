const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  message: { type: String, required: true }
});

module.exports = mongoose.model("Message", Schema);

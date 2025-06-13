const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  workImage: [{ type: String }],
});

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;

const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {type: string, required: true}
  type:  {type: string, required: true}
  description:  {type: string, required: true}
  price: {type: number, required: true},
  imageUrl: { type: String },
});

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
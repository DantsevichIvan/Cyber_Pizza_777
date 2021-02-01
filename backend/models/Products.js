const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  weight: { type: Number },
  image: { type: String },
  count: { type: Number, default: 1 },
  category: { type: Schema.Types.ObjectId, ref: "Categories" },
});

module.exports = model("Products", productsSchema);

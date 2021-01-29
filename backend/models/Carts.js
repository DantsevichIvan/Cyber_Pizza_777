const { Schema, model } = require("mongoose");

const cartsSchema = new Schema({
  products: [],
  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
});

module.exports = model("Carts", cartsSchema);

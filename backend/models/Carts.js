const { Schema, model } = require("mongoose");

const cartsSchema = new Schema({
  products: [],
  price: { type: Number },
  discount: { type: Number },
});

module.exports = model("Carts", cartsSchema);

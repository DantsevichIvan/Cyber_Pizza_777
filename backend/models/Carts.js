const { Schema, model } = require("mongoose");

const cartsSchema = new Schema({
  products: [
    {
      name: { type: String },
      price: { type: Number },
      count: { type: Number, default: 1 },
    },
  ],
  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
});

module.exports = model("Carts", cartsSchema);

const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  products: [
    {
      name: { type: String },
      price: { type: Number },
      count: { type: Number, default: 1 },
    },
  ],
  price: { type: Number, default: 0 },
  status: { type: String, default: "Ordered" },
  user: {
    phone: { type: Number },
    address: {
      street: { type: String },
      house: { type: Number },
      flat: { type: Number },
    },
    name: { type: String },
  },
});

module.exports = model("Order", orderSchema);

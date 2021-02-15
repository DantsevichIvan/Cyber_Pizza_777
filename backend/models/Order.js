const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  products: [],
  price: { type: Number, default: 0 },
  status: { type: String, default: "Ordered" },
  order_number: { type: Number },
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

const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  name: { type: String },
  available: { type: Boolean },
  products: [{ type: Schema.Types.ObjectId, ref: "Products" }],
});

module.exports = model("Categories", categoriesSchema);

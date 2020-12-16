const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  name: { type: String },
  available: { type: Boolean },
});

module.exports = model("Categories", categoriesSchema);

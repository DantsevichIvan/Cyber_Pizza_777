require("dotenv").config();
const { promisify } = require("util");
const seeder = require("mongoose-seed");
const mongoose = require("mongoose");
const MONGO_URL = process.env.DB_HOST;
const bcrypt = require("bcryptjs");
seeder.connect = promisify(seeder.connect);
seeder.clearModels = promisify(seeder.clearModels);
seeder.populateModels = promisify(seeder.populateModels);
seeder.disconnect = promisify(seeder.disconnect);

async function main(db) {
  try {
    await seeder.connect(db, { useUnifiedTopology: true });
    seeder.loadModels([
      "./backend/models/Products.js",
      "./backend/models/Categories.js",
      "./backend/models/User.js",
    ]);
    await seeder.clearModels(["Products", "Categories", "User"]);
    await seeder.populateModels(data);
    console.log("[+] Seed data added");
  } catch (err) {
    console.error("[-]", err);
  } finally {
    await seeder.disconnect();
  }
}

main(MONGO_URL);

const pizzas = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Carbonara",
    price: "30",
    description: "Tomato sauce, mozzarella, parmesan, eggs, and bacon",
    weight: "10",
    image: "",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Margherita",
    price: "25",
    description: "Tomato sauce, mozzarella, and oregano",
    weight: "8",
    image: "",
  },
];
const drinks = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Coca-cola",
    price: "5",
    description: "Prazdnik k nam prihodit",
    weight: "10",
    image: "",
  },
];

const data = [
  {
    model: "Products",
    documents: [...pizzas, ...drinks],
  },
  {
    model: "Categories",
    documents: [
      {
        _id: new mongoose.Types.ObjectId(),
        name: "pizza",
        available: "true",
        products: pizzas.map((pizza) => pizza._id),
      },
      {
        _id: new mongoose.Types.ObjectId(),
        name: "drink",
        available: "false",
        products: drinks.map((drink) => drink._id),
      },
    ],
  },
];

module.exports = { main };

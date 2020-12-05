require('dotenv').config();
const {promisify} = require('util');
const seeder = require('mongoose-seed')
const mongoose = require('mongoose')
const db = process.env.DB_HOST
const _ObjectId = mongoose.Types._ObjectId
seeder.connect = promisify(seeder.connect)
seeder.clearModels = promisify(seeder.clearModels);
seeder.populateModels = promisify(seeder.populateModels);
seeder.disconnect = promisify(seeder.disconnect);

async function main() {
    try {
        await seeder.connect(db, { useUnifiedTopology: true });
        seeder.loadModels([
            "./backend/models/Products.js",
            "./backend/models/Categories.js",
        ]);
        await seeder.clearModels(["Products", "Categories"]);
        await seeder.populateModels(data);
        console.log("[+] Seed data added");
    } catch (err) {
        console.error("[-]", err);
    } finally {
        await seeder.disconnect();
    }
}

main();

const data = [
    {
        'model': 'Products',
        'documents': [
            {
                "_id": _ObjectId,
                "name": "Carbonara",
                "price": "30",
                "description": "Tomato sauce, mozzarella, parmesan, eggs, and bacon",
                "weight": "10",
                "image": "",
                "category": _ObjectId
            },
            {
                "_id": _ObjectId,
                "name": "Margherita",
                "price": "25",
                "description": "Tomato sauce, mozzarella, and oregano",
                "weight": "8",
                "image": "",
                "category": _ObjectId
            }
        ]

    },
    {
        'model': 'Categories',
        'documents': [
            {
                "_id": _ObjectId,
                "name": "Pizza",
                "available": "true"
            },
            {
                "_id": _ObjectId,
                "name": "drink",
                "available": "false"
            }
        ]

    }
]




const util = require('util');
const seeder = require('mongoose-seed')
require('dotenv').config();
const mongoose = require('mongoose')
const db = process.env.DB_HOST
const _ObjectId = mongoose.Types._ObjectId

const promisified = util.promisify(seeder)

promisified.connect(db, {useUnifiedTopology: true})
    .then(() => {
        promisified.loadModels([
            './backend/models/Products.js',
            './backend/models/Categories.js'
        ])
            .then(() => {
                promisified.clearModels(['Products', 'Categories'])
                    .then(() => {
                        seeder.populateModels(data, function (err, done) {
                            if (err) {
                                return console.log('seed err', err)
                            }
                            if (done) {
                                return console.log('seed done', done)
                            }
                            seeder.disconnect()
                        }.catch((e) => {
                            console.log(e)
                        }))
                    });
            })
    })


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
                "name": "Carbonara",
                "available": "true"
            },
            {
                "_id": _ObjectId,
                "name": "Margherita",
                "available": "false"
            }
        ]

    }
]




const db = require('./db')
const mongoose = require('mongoose');

const createDB = async (url) => {
    try {
        console.log(url)
        await db.connect(url)
    } catch (err) {
        throw err
    }
}
const destroyDB = async () => {
    await db.disconnect()
}
const clearDatabase = async () =>{
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}

module.exports = {
    createDB,
    destroyDB,
    clearDatabase
}

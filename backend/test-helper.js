// const MongodbMemoryServer = require('mongodb-memory-server')
// const db = require('./db')
//
// const server = new MongodbMemoryServer()
//
// const createDB = async () =>{
//     try {
//         const url = await server.getConnectionString()
//         db.connect(url)
//     }catch (err) {
//         throw err
//     }
// }
// const destroyDB = () =>{
//     db.disconnect()
// }
//
// module.exports = {
//     createDB,
//     destroyDB
// }

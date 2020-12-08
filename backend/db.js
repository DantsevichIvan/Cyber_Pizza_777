const mongoose = require('mongoose')
const db = process.env.DB_HOST

module.exports = connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected..')
    } catch (e) {
        console.error(e.message);
        process.exit(1)
    }
}
// module.exports = {
//     mongoose,
//     init: () => {
//      mongoose.Promise = bluebird;
// add const bluebird
//     },
//     connect: async database => {
//         try {
//             const conn = await mongoose.connect(
//                 database,
//                 {
//                     useNewUrlParser: true,
//                     useUnifiedTopology: true,
//                     useCreateIndex: true
//                 }
//             )
//             console.log(`MongoDb Connected on: ${database}`);
//
//             return conn
//         } catch (e) {
//             //eslint-disable-next-line
//             console.log('Error to connect on mongo', err);
//         }
//     },
//     disconnect: async () => await mongoose.connection.close()
// }

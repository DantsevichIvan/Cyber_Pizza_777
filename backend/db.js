const mongoose = require('mongoose')
const bluebird = require('bluebird')

module.exports = {
    mongoose,
    init: () => {
        mongoose.Promise = bluebird;
    },
    connect: async database => {
        try {
            const conn = await mongoose.connect(
                database,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            console.log(`MongoDb Connected...`);

            return conn
        } catch (e) {
            //eslint-disable-next-line
            console.log('Error to connect on mongo', err);
        }
    },
    disconnect: async () => await mongoose.connection.close()
}

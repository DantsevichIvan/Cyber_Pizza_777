const mongoose = require('mongoose')
const db = process.env.DB_HOST


module.exports = connectDB = async () =>{
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected..')
    }catch (e) {
        console.error(e.message);
        process.exit(1)
    }
}

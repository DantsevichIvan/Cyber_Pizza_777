require('dotenv').config();
const express = require('express')
const connectDB = require('./db')


const app = express()
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'Development';


require('./routers')(app)

app.use(express.static('dist'))

module.exports.start = async function start() {
    try {
        await connectDB()
        app.listen(PORT, () => console.log(`server is listing in ${PORT} - ${ENV} environment`))
    }catch (e){
        console.log(e)
        process.exit(1)
    }
}



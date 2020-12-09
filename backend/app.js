require('dotenv').config();
const express = require('express')
const path = require('path')
const db = require('./db')
const cookieParser = require('cookie-parser')


const urlDB = process.env.DB_HOST
const app = express()
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'Development';

app.use(cookieParser())

require('./routers')(app)
app.use(express.static( 'dist'))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve('dist/index.html'))
})



module.exports.start = async function start() {
    try {
        await db.connect(urlDB)
        app.listen(PORT, () => console.log(`server is listing in ${PORT} - ${ENV} environment`))
    }catch (e){
        console.log(e)
        process.exit(1)
    }
}



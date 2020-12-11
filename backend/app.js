require('dotenv').config();
const express = require('express')
const path = require('path')
const db = require('./db')
const cookieParser = require('cookie-parser')


module.exports.prepareApp = async function prepareApp(mongoUrl) {
    require('./models/Products')
    await db.connect(mongoUrl)

    const app = express()
    app.use(cookieParser())
    app.use(express.static( 'dist'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve('dist/index.html'))
    })
    require('./routers')(app)

    return app
}




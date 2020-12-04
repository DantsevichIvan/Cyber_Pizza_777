const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = function (app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    cors()
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
        next();
    })
    app.use('/api',require('./routes/api/products/products'));
}


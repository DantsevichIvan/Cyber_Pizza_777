const bodyParser = require('body-parser');


module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use('/api', require('./routes/api/products/products'));
    app.use('/api', require('./routes/api/categories/categories'));
    app.use('/api', require('./routes/api/user/user'));
}


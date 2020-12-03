const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = function (app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    cors()
    app.use('/api',require('./routes/api/products/products'));
}

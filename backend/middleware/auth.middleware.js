const jwt = require('jsonwebtoken')


module.exports = async function (req, res, next){
    try {
        const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"
        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' })
            //Redirect to Login Page
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' })
        //Redirect to Login Page
    }
}

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

module.exports = async function (req, res, next) {
    try {
        // const token = req.headers.cookie.split(' ')[0]
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({message: 'Нет авторизации'})
        }

         jwt.verify(token,
            process.env.JWT_SECRET,
            function (err, decoded) {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Failed to authenticate token.",
                    });
                }
                req.user = decoded;
            });

        next()
    } catch (e) {
        res.status(401).json({message: 'Нет авторизации'})
        //Redirect to Login Page
    }
}

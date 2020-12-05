const {Router} = require('express');
const router = Router();
const User = require('../../../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/user/login', async (req, res, next) => {
    //It's for authorizations
    await logIn(req, res)
})
router.post('/users', async (req, res, next) => {
    //It's for new user registration
    await registration(req, res)
})
router.get('/user', async (req, res, next) => {
    //It's for new user registration
})
router.post('/user/logout', async (req, res, next) => {
    //It's for new user registration
    await logOut(req, res)
})


async function registration(req, res) {
    try {
        const {name, email, password} = req.body.data
        //checking whether there is a user
        const found = await User.exists({email});
        if (found) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }
        //create hashedPassword
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = await User.find({})
        if (admin.length === 0) {
            await User.create({email, password: hashedPassword, name, isAdmin: true});
        }
        //create new User
        await User.create({email, password: hashedPassword, name, isAdmin: false});

        res.status(201).json({message: 'Пользователь созда'})
        //Add Redirect to Login Page
    } catch (err) {
        res.status(500).json({message: err})
    }
}
async function logIn(req, res) {
    try {
        // extract data from req
        const {email, password} = req.body
        //find user
        const user = await User.findOne({email})
        //check find user
        if (!user) {
            return res.status(400).json({message: 'Неверный данные, попробуйте снова'})
        }
        // password
        const isMatch = await bcrypt.compare(password, user.password);
        //check correct password
        if (!isMatch) {
            return res.status(400).json({message: 'Неверный данные, попробуйте снова'})
        }
        //Token
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
        )
        res.status(201).json({token, userId: user.id })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function logOut(req, res) {
    try {
        const token = req.user
        jwt.decode(token)
        res.status(200).json({message: 'out in the system'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}


module.exports = router


//Add get info User

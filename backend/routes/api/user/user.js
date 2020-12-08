const {Router} = require('express');
const router = Router();
const User = require('../../../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../../middleware/auth.middleware');

router.post('/user/login', async (req, res) => {
    //It's for authorizations
    await logIn(req, res)
})
router.post('/users', async (req, res) => {
    //It's for new user registration
    await registration(req, res)
})


router.get('/user', auth, async (req, res) => {
    //It's for get info user
    await getUser(req, res)
})


router.post('/user/logout', async (req, res) => {
    //It's for new user registration
    await logOut(req, res)
})


async function getUser(req, res) {
    const userId = req.user.userId
    User.findById(userId, async function(err, user) {
        if(err) return console.log('err ', err)
        await res.status(200).json({data:{name: user.name, email:user.email, isAdmin: user.isAdmin}})
    })
}

async function registration(req, res) {
    try {
        const {name, email, password} = req.body
        //checking whether there is a user
        const found = await User.exists({email});
        if (found) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }
        //create hashedPassword
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = await User.find({})
        if (admin.length === 0) {
            //create new Admin
            await User.create({email, password: hashedPassword, name, isAdmin: true});
        } else {
            //create new User
            await User.create({email, password: hashedPassword, name, isAdmin: false});
        }
        // res.status(201).json({message: 'Пользователь созда'})
        await logIn(req, res)

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
        res.cookie('token', token).json({token}).status(200)

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}

async function logOut(req, res) {
    try {
        const token = req.user
        jwt.decode(token)
        res.clearCookie('token').json({message: 'out in the system'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}

module.exports = router


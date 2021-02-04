const { Router } = require("express");
const router = Router();
const User = require("../../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../../middleware/auth.middleware");

router.post("/user/login", logIn);
router.post("/users", registration);
router.get("/user", auth, getUser);
router.post("/user/logout", logOut);

async function getUser(req, res) {
  //if cookie not
  if (!req.cookies) {
    return res.status(400);
  }
  const userId = req.user.userId;
  //userId not find
  if (!userId) {
    return res.status(400).json({ message: "id not find" });
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (!user.isAuth) {
    return res.status(400);
  }
  return res.status(200).json({
    data: { name: user.name, email: user.email, isAdmin: user.isAdmin },
  });
}

async function registration(req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name && !email && !password && !confirmPassword) {
      return res.status(400).json({ message: "Введине данные" });
    }
    //check validation password
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Введине корректные данные" });
    }
    //checking whether there is a user
    const found = await User.exists({ email });
    if (found) {
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует" });
    }
    //create hashedPassword
    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await User.find({});
    if (admin.length === 0) {
      //create new Admin
      const user = await User.create({
        email,
        password: hashedPassword,
        name,
        isAdmin: true,
      });
      if (!user) {
        throw new Error("User not create");
      }
    } else {
      //create new User
      const user = await User.create({
        email,
        password: hashedPassword,
        name,
        isAdmin: false,
      });
      if (!user) {
        throw new Error("User not create");
      }
    }
    await logIn(req, res);
    //Add Redirect to Login Page
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

async function logIn(req, res) {
  try {
    // extract data from req
    const { email, password } = req.body;
    //required body
    if (!email && !password) {
      return res.status(400).json({ message: "Введите данные" });
    }
    //find user
    const user = await User.findOne({ email });
    //check find user
    if (!user) {
      return res
        .status(400)
        .json({ message: "Неверный данные, попробуйте снова" });
    }
    // password
    const isMatch = await bcrypt.compare(password, user.password);
    //check correct password
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Неверный данные, попробуйте снова" });
    }
    //Token
    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.cookie("token", token).json({ token }).status(200);
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
      success: false,
    });
  }
}

async function logOut(req, res) {
  try {
    const token = req.user;
    await jwt.decode(token);
    return res.clearCookie("token").json({ message: "out in the system" });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
}

module.exports = router;

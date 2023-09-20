const express = require('express')

const { signup, login } = require('../controllers/auth')
const { signupDto, loginDto } = require('../validators/user')
const userRouter = express.Router()

userRouter
    .route('/signup')
    .post(signupDto, signup)

userRouter
    .route('/login')
    .post(loginDto, login)

module.exports = { userRouter }

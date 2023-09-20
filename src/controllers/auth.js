const { StatusCodes } = require("http-status-codes");
const CatchAsync = require("../errors/CatchAsync");
const { registration, signIn } = require("../services/auth");
const { signToken } = require("../utils/helper");

const signup = CatchAsync(async(req, res) => {
    await registration(req.body);
    res.status(StatusCodes.CREATED).json({
        status: true,
        msg: "signup Successful"
    })
})

const login = CatchAsync(async(req, res) => {
    const user = await signIn(req.body);
    const token = signToken(user._id);
    res.status(StatusCodes.OK).json({
        status: true,
        msg: 'Login successful',
        user,
        token
    })
})


module.exports = { signup, login }
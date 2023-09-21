const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../errors/AppError");
const CatchAsync = require("../errors/CatchAsync");
const { promisify } = require("util");
const { decodeToken } = require("../utils/helper");
const { getUserById } = require("../repositories/auth");

const validateUser = CatchAsync(async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in!', StatusCodes.UNAUTHORIZED))
    }

    const decode = await decodeToken(token);
    const currentUser = await getUserById(decode.id);
    if (!currentUser) return next(new AppError('The user that has this token no longer exixts!'))
    req.user = currentUser;
    next();
})

module.exports = { validateUser }
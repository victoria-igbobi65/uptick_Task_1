const { StatusCodes } = require('http-status-codes')

const { userModel } = require("../models/user")
const { AppError } = require("../errors/AppError");

const getUser = async(email) => {
        const user = await userModel.findOne({ email: email }).select('+password');
        return user;
    }

const checkIfUserExists = async(email) => {
        const user = await userModel.findOne({ email: email });
        if (user) throw new AppError(`user already exists!`, StatusCodes.CONFLICT);
        return;
    }

const createUser = async(userObject) => {
        const user = await userModel.create(userObject);
        return user;
    }

const getUserById = async(id) => {
    const user = await userModel.findOne({ _id: id });
    return user;
}

module.exports={ createUser, checkIfUserExists, getUser, getUserById }
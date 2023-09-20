const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const CONFIG = require('../../config/config')

const signToken = (id) => {
    return jwt.sign({ id }, CONFIG.SECRET)
}
const decodeToken = async(token) => {
    return promisify(jwt.verify)(token, CONFIG.SECRET)
}

module.exports={ signToken, decodeToken };
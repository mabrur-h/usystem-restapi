const { verify, sign } = require('jsonwebtoken')

module.exports.generateJWTToken = function generateJWTToken(data) {
    return sign(data, "SECRET_WORD")
}

module.exports.checkToken = function checkToken(key) {
    return verify(key, "SECRET_WORD")
}
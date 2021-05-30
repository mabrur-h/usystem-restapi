const { checkToken } = require("../../../restapi/src/modules/jwt");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) throw new Error('Authorization token is not defined!')
        const data = checkToken(token);
        console.log("checked user: ", data)
        next();
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
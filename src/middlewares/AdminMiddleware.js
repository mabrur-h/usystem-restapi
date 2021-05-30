const AuthMiddleware = require('../middlewares/AuthMiddleware');

module.exports = async (req, res, next) => {
    try {

        await AuthMiddleware(req, res, next)

        console.log("test");

        next();
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
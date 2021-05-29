const { compare } = require("../modules/bcrypt");
const LoginValidation = require('../validations/LoginValidation');

module.exports = async (req, res) => {
    try {
        let { id, password } = await LoginValidation.validateAsync(req.body);
        let user = await req.psql.users.findOne({
            where: {
                id: id
            }
        });
        if (!user) throw new Error("User is not defined!");
        let isTrust = await compare(password, user.dataValues.password)
        let userAgent = req.headers["user-agent"];
        let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        if (!(userAgent && ip)) throw new Error("Invalid request!");
        let session = await req.psql.sessions.create({
            user_id: user.id,
            ipAddress: ip,
            userAgent: userAgent
        })
        console.log(session);
        // user = {
        //     id: user.id,
        //     name: user.name
        // }
        res.status(200).json({
            ok: true,
            message: "Successfully registered!"
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
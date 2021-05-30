const { compare } = require("../modules/bcrypt");
const LoginValidation = require('../validations/LoginValidation');
const { generateJWTToken } = require("../../../restapi/src/modules/jwt");

module.exports = async (req, res) => {
    try {
        let { phone, password } = await LoginValidation.validateAsync(req.body);
        let user = await req.psql.users.findOne({
            where: {
                phone: phone
            }
        });
        if (!user) throw new Error("User is not defined!");
        let isTrust = await compare(password, user.dataValues.password)
        let userAgent = req.headers["user-agent"];
        let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        if (!(userAgent && ip)) throw new Error("Invalid request!");
        let { id: sessionId } = await req.psql.sessions.create({
            user_id: user.id,
            ipAddress: ip,
            userAgent: userAgent
        })

        let token = generateJWTToken({ id: sessionId });
        // user = {
        //     id: user.id,
        //     name: user.name
        // }
        res.status(200).json({
            ok: true,
            message: "Successfully registered!",
            data: {
                token
            }
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
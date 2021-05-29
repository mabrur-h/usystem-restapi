const SignUpValidation = require('../validations/SignUpValidation');
const {generateHash} = require("../modules/bcrypt");

module.exports = async (req, res) => {
    try {
        let { name, password, phone } = await SignUpValidation.validateAsync(req.body);
        let user = await req.psql.users.create({
            name: name,
            password: await generateHash(password),
            phone: phone
        });
        res.status(200).json({
            ok: true,
            data: user,
            message: "Successfully registered!"
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
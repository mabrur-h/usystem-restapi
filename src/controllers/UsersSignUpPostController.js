const SignUpValidation = require('../validations/SignUpValidation');
const {generateHash} = require("../modules/bcrypt");

module.exports = async (req, res) => {
    try {
        let { name, password } = await SignUpValidation.validateAsync(req.body);
        console.log(password)
        let user = await req.psql.users.create({
            name: name,
            password: await generateHash(password)
        });
        user = {
            id: user.id,
            name: user.name
        }
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
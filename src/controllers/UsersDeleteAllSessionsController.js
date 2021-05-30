const { Op } = require("sequelize");

module.exports = async (req, res) => {
    try {
        const sessions = await req.psql.sessions.destroy({
            where: {
                createdAt: {
                    [Op.gt]: req.session.createdAt
                }
            }
        })
        console.log(sessions)

        res.json({
            ok: true,
            message: "Sessions successfully revoked!"
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
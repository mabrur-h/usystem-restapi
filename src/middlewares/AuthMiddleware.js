const { checkToken } = require("../modules/jwt");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) throw new Error('Authorization token is not defined!')
        const { id } = checkToken(token);
        let session  = await req.psql.sessions.findOne({
            where: {
                id
            }
        })
        if (!session) throw new Error('Session is not found!');
        session = session.dataValues
        let userAgent = req.headers["user-agent"];
        let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        if (userAgent !== session.userAgent || ip !== session.ipAddress) {
            await req.psql.sessions.destroy({
                where: {
                    id
                },
                include: [
                    {
                        model: req.psql.users
                    }
                ]
            })
            throw new Error("Invalid session!");
        }

        const user = await req.psql.users.findOne({
            where: {
                id: session.user_id
            }
        });

        req.user = user.dataValues;
        req.session = session;

        next();
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
module.exports = async (req, res) => {
    try {
        console.log(req.user, req.session)
        let sessions = await req.psql.sessions.findAll({
            where: {
                user_id: req.user.id
            },
            attributes: ["id", "userAgent", "ipAddress", "createdAt"]
        });
        sessions = await sessions.map(session => session.dataValues)
        console.log(sessions)
        res.json({
            ok: true,
            data: sessions
        })
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
module.exports = async (req, res) => {
    try {
        console.log(req.user, req.session)
        // let sessions = await req.psql.sessions.findAll({
        //     where: {
        //         user_id: "7486d222-910c-4c76-ba49-86154e81679b"
        //     },
        //     attributes: ["id", "userAgent", "ipAddress", "createdAt"]
        // });
        // sessions = await sessions.map(session => session.dataValues)
        // res.json({
        //     ok: true,
        //     data: sessions
        // })
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
module.exports = async (req, res) => {
    try {
        const { id: sessionId } = req.params;
        const session = await req.psql.sessions.findOne({
            where: {
                id: sessionId
            }
        })
        if (session.dataValues.createdAt > req.session.createdAt) throw new Error("Permission denied! You can not revoke the session!");
        await req.psql.sessions.destroy({
            where: {
                id: sessionId
            }
        })
        res.status(200).json({
            ok: true,
            message: "Session successfully revoked!"
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
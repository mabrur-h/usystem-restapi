module.exports = async (req, res) => {
    try {
        console.log(req.user)
        let sessions = await req.psql.sessions.findAll({
            where: {
                user_id: "7486d222-910c-4c76-ba49-86154e81679b"
            }
        })
        res.json({
            ok: true
        })
    } catch (e) {
        res.status(403).json({
            ok: false,
            message: e + ''
        })
    }
}
module.exports = async (req, res, next) => {
    try {
        console.log(req.user.id)

        const admin = await req.psql.admins.findOne({
            where: {
                user_id: req.user.id
            }
        })

        if (!admin) throw new Error("Method not allowed!");

        next();
    } catch (e) {
        res.status(405).json({
            ok: false,
            message: e + ''
        })
    }
}
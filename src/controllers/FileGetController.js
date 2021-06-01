module.exports = async (req, res) => {
    try {
        let files = await req.psql.files.findAll({
            include: [
                {
                    model: req.psql.users,
                    attributes: ["name", "phone", "createdAt"]
                }
            ]
        });
        res.status(200).json({
            ok: true,
            data: files
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
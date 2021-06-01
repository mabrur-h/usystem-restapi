module.exports = async (req, res) => {
    try {
        const blogs = await req.psql.blogs.findAll({
            include: [
                {
                    model: req.psql.users,
                    attributes: ["name"]
                },
                {
                    model: req.psql.files
                }
            ]
        });
        await res.json({
            ok: true,
            data: blogs
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
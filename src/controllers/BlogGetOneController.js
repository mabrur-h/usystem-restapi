module.exports = async (req, res) => {
    try {
        const { slugify } = req.params;
        const blog = await req.psql.blogs.findOne({
            where: {
                slugify: slugify
            },
            include: [
                {
                    model: req.psql.users,
                    attributes: ["name"]
                },
                {
                    model: req.psql.files
                }
            ]
        })
        res.json({
            ok: true,
            data: blog
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ''
        })
    }
}
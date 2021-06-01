const BlogValidation = require("../validations/BlogValidation");
const slugify = require('slugify');

module.exports = async (req, res) => {
    try {
        const data = await BlogValidation.validateAsync(req.body);
        const s_title = slugify(data.title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: true
        })

        const blog = await req.psql.blogs.create({
            title: data.title,
            body: data.body,
            media_id: data.media,
            user_id: req.user.id,
            slugify: s_title
        })

        await res.json({
            ok: true,
            data: blog
        })
    } catch (e) {
        res.status(400).json({
            ok: false
        })
        console.log(e)
    }
}
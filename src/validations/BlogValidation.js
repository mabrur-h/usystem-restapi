const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()
        .min(2)
        .max(512)
        .required(),
    body: Joi.string()
        .required()
        .min(6)
        .max(65536),
    media_id: Joi.string()
})
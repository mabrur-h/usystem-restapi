const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(32),
    password: Joi.string()
        .required()
        .min(6)
        .max(32)
})
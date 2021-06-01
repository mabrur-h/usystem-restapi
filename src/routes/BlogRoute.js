const router = require('express').Router();
const BlogGetController = require('../controllers/BlogGetController');
const BlogGetOneController = require('../controllers/BlogGetOneController');

router.get('/all', BlogGetController);
router.get('/:slugify', BlogGetOneController);

module.exports = {
    router, path: '/blog'
}
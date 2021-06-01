const router = require('express').Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');
const BlogCreatePostController = require('../controllers/BlogCreatePostController');
const AdminGetController = require('../controllers/AdminsGetController');

router.use(AuthMiddleware)
router.use(AdminMiddleware)

router.get('/', AdminGetController);
router.post('/blog/create', BlogCreatePostController)

module.exports = {
    router, path: '/admin'
}
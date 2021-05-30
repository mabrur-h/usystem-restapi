const router = require('express').Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AdminMiddleware = require('../middlewares/AdminMiddleware');
const AdminGetController = require('../controllers/AdminsGetController');
router.use(AuthMiddleware)
router.use(AdminMiddleware)

router.get('/', AdminGetController);

module.exports = {
    router, path: '/admin'
}
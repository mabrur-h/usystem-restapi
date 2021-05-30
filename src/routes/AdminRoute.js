const router = require('express').Router();
const AdminMiddleware = require('../middlewares/AdminMiddleware');

router.use(AdminMiddleware)

router.get('/', HomeGetController);

module.exports = {
    router, path: '/admin'
}
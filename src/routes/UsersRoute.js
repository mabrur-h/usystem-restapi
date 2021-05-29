const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetControllers');

router.get('/', UsersGetController);

module.exports = {
    router, path: '/users'
}
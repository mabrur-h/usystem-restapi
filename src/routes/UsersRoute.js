const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetControllers');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');

router.get('/', UsersGetController);

router.post('/', UsersSignUpPostController)

module.exports = {
    router, path: '/users'
}
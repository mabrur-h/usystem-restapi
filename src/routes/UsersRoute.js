const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetControllers');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');
const UsersLoginPostController = require('../controllers/UsersLoginPostController');

// Get routers
router.get('/', UsersGetController);

// Post routers
router.post('/signup', UsersSignUpPostController);
router.post('/login', UsersLoginPostController);


module.exports = {
    router, path: '/users'
}
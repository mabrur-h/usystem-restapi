const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetControllers');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');
const UsersLoginPostController = require('../controllers/UsersLoginPostController');
const UsersGetSessionController = require('../controllers/UsersGetSessionController');

// Get routers
router.get('/', UsersGetController);
router.get('/sessions', UsersGetSessionController)

// Post routers
router.post('/signup', UsersSignUpPostController);
router.post('/login', UsersLoginPostController);


module.exports = {
    router, path: '/users'
}
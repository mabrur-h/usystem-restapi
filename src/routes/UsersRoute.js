const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetControllers');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');
const UsersLoginPostController = require('../controllers/UsersLoginPostController');
const UsersGetSessionController = require('../controllers/UsersGetSessionController');
const UsersDeleteSessionController = require('../controllers/UsersDeleteSessionController');
const UsersDeleteAllSessionsController = require('../controllers/UsersDeleteAllSessionsController');

const AuthMiddleware = require('../middlewares/AuthMiddleware');

// Get routers
router.get('/', UsersGetController);
router.get('/sessions', AuthMiddleware, UsersGetSessionController)

// Post routers
router.post('/signup', UsersSignUpPostController);
router.post('/login', UsersLoginPostController);

// Delete routers
router.delete('/sessions/deleteAll', AuthMiddleware, UsersDeleteAllSessionsController)
router.delete('/sessions/:id', AuthMiddleware, UsersDeleteSessionController)


module.exports = {
    router, path: '/users'
}
const router = require('express').Router()
const UserController = require('../controllers/UserController');
const {authentication} = require('../middleware/auth');

router.post('/register',UserController.added);
router.post('/login',UserController.login);

router.use(authentication)
router.get('/my-bookmarks',UserController.getBookmark);
router.get('/profile/:username',UserController.findUserId);
//router.post('/google-signin', UserController.googleUser)

module.exports = router;
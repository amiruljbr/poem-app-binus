const router = require('express').Router()
const FeelingController = require('../controllers/FeelingController');
//const {authentication, authorization} = require('../middleware/auth');

//router.use(authentication)
router.get('/',FeelingController.getAllFeeling);

module.exports = router;
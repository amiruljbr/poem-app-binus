const router = require('express').Router()
const NotificationController = require('../controllers/NotificationController');
const {authentication, authorization} = require('../middleware/auth');

router.use(authentication)
router.get('/',NotificationController.getAllNotification);
router.post('/',NotificationController.added);
router.delete('/:id',authorization,NotificationController.delete);

module.exports = router;
const router = require('express').Router()
const PoemController = require('../controllers/PoemController');
const {authentication, authorization} = require('../middleware/auth');

router.use(authentication)
router.get('/',PoemController.getAllPoem);
router.post('/',PoemController.added);
router.post('/like/:id',PoemController.addLike);
router.post('/emphaty/:id',PoemController.addEmphaty);
router.post('/comment/:id',PoemController.addComment);
router.delete('/:id',authorization,PoemController.delete);
router.get('/:id',PoemController.edit);
router.put('/:id',authorization,PoemController.editPost);
//router.put('/:id/done',authorization,PoemController.editPostDone);

module.exports = router;
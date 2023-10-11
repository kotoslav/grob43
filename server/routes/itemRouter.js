const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createOne);
router.get('/:id', itemController.readOne);
router.get('/category', itemController.readAllByCategory);
router.patch('/:id', itemController.updateOne);
router.delete('/:id', itemController.deleteOne);

module.exports = router;

const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, itemController.createOne);
router.get('/category/', itemController.readAllByCategory);
router.get('/:id', itemController.readOne);
router.patch('/:id', authMiddleware, itemController.updateOne);
router.delete('/:id', authMiddleware, itemController.deleteOne);

module.exports = router;

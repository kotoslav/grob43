const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, categoryController.createOne);
router.get('/:id', categoryController.readOne);
router.get('/', categoryController.readAll);
router.patch('/:id', authMiddleware, categoryController.updateOne);
router.delete('/:id', authMiddleware, categoryController.deleteOne);

module.exports = router;

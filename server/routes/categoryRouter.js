const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.createOne);
router.get('/:id', categoryController.readOne);
router.get('/', categoryController.readAll);
router.patch('/:id', categoryController.updateOne);
router.delete('/:id', categoryController.deleteOne);

module.exports = router;

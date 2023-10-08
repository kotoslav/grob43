const Router = require('express');
const router = new Router();
const galleryController = require('../controllers/galleryController');

router.post('/', galleryController.createOne);
router.get('/byItem/:itemId', galleryController.readAllByItem);
router.get('/:photoId', galleryController.readOne);
router.delete('/:photoId', galleryController.deleteOne);
router.delete('/byItem/:itemId', galleryController.deleteAllByItem);

module.exports = router;

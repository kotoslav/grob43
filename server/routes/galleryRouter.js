const Router = require('express');
const router = new Router();
const galleryController = require('../controllers/galleryController');

router.post('/', galleryController.createOne);
router.delete('/', galleryController.deleteOne);

module.exports = router;

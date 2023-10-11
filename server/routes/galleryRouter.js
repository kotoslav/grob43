const Router = require('express');
const router = new Router();
const galleryController = require('../controllers/galleryController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, galleryController.createOne);
router.delete('/', authMiddleware, galleryController.deleteOne);

module.exports = router;

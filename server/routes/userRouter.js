const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, userController.check);
router.post('/login', userController.login);
router.patch('/', userController.update);

module.exports = router;

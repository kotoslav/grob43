const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.get('/', userController.check);
router.post('/login', userController.login);
router.patch('/login', userController.update);

module.exports = router;

const Router = require('express');
const router = new Router();
const itemRouter = require('./itemRouter');
const galleryRouter = require('./galleryRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');

router.use('/item', itemRouter);
router.use('/gallery', galleryRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);

module.exports = router;

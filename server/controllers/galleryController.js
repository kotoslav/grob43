const {Gallery} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');

class GalleryController {
    async createOne(req, res) {
        const {path, itemId} = req.body;
        const {imgs} = req.files;

        const gallery = await Gallery.create({path, itemId});
        return res.json(gallery);
    }

    async readOne(req, res) {
        const gallery = await Gallery.findByPk(req.params['photoId']);
        return res.json(gallery);
    }

    async readAllByItem(req, res) {
        const gallery = await Gallery.findAll({
            where: {
                itemId: req.params['itemId']
            }
        });
        return res.json(gallery);
    }

    async deleteOne(req, res) {
        const gallery = await Item.destroy({
            where: {
                id: req.params['photoId']
            }
        });
        return res.json(gallery);
    }

    async deleteAllByItem(req, res) {
        const gallery = await Item.destroy({
            where: {
                itemId: req.params['itemId']
            }
        });
        return res.json(gallery);
    }
}

module.exports = new GalleryController();

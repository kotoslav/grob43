const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async createOne(req, res) {
        const {title, description, imgPath} = req.body;
        try {
            const category = await Category.create({title, description, imgPath});
            return res.json(category);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async readOne(req, res) {
        try {
            const category = await Category.findByPk(req.params['id']);
            return res.json(category);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async readAll(req, res) {
        try {
            const category = await Category.findAll();
            return res.json(category);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateOne(req, res) {
        const {title, description, imgPath} = req.body;
        try {
            const category = await Category.update({title, description, imgPath}, {
                where: {
                    id: req.params['id']
                }
            });
            return res.json(category);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res) {
        try {
            const category = await Category.destroy({
                where: {
                    id: req.params['id']
                }
            });
            return res.json(category);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new CategoryController();

const {Item} = require('../models/models');
const ApiError = require('../error/ApiError');

class ItemController {
    async createOne(req, res, next) {
        const {name, description, article, price, categoryId, gallery} = req.body;
        try {
            const item = await Item.create({name, description, article, price, categoryId, gallery});
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async readOne(req, res) {
        console.log('here');
        const item = await Item.findByPk(req.params['id']);
        return res.json(item);
    }

    async readAllByCategory(req, res) {
        let {page, categoryId} = req.query;
        page = page ?? 1;
        const limit = process.env.PAGE_LIMIT ?? 10;
        let offset = page * limit - limit;
        try {
            const item = await Item.findAll({
                where: {categoryId: categoryId}, limit, offset
            });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateOne(req, res) {
        const {name, description, article, price, categoryId, gallery} = req.body;
        try {
            const item = await Item.update(
            {name, description, article, price, categoryId, gallery} ,
                {
                where: {
                    id: req.params['id']
                    }
                });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res) {
        try {
            const item = await Item.destroy({
                where: {
                    id: req.params['id']
                }
            });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ItemController();

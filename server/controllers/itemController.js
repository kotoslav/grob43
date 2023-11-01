const { Item } = require('../models/models');
const ApiError = require('../error/ApiError');

class ItemController {
    async createOne(req, res, next) {
        const { name, description, article, price, categoryId, gallery } = req.body;
        try {
            const item = await Item.create({ name, description, article, price, categoryId, gallery });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async readOne(req, res, next) {
        try {
            if (typeof req.params['id'] !== "number") {
                next(ApiError.notFound("Не найдено"))
            }
            const item = await Item.findByPk(req.params['id']);
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest("Проверьте тело запроса"))
        }
    }

    async readAllByCategory(req, res, next) {
        let { page, categoryId } = req.query;
        categoryId = categoryId ?? 1;
        page = page ?? 1;
        const limit = process.env.PAGE_LIMIT ?? 12;
        let offset = page * limit - limit;
        try {
            const item = await Item.findAndCountAll({
                where: { categoryId: categoryId }, limit, offset,
                order: [['article', 'ASC']]
            }
            );
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateOne(req, res, next) {
        const { name, description, article, price, categoryId, gallery } = req.body;
        try {
            const item = await Item.update(
                { name, description, article, price, categoryId, gallery },
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

    async deleteOne(req, res, next) {
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

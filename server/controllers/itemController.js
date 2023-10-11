const {Item} = require('../models/models');
const ApiError = require('../error/ApiError');

class ItemController {
    async createOne(req, res) {
        const {name, description, article, price, categoryId, gallery} = req.body;
        const item = await Item.create({name, description, article, price, categoryId, gallery});
        return res.json(item);
    }

    async readOne(req, res) {
        console.log('here');
        const item = await Item.findByPk(req.params['id']);
        return res.json(item);
    }

    async readAllByCategory(req, res) {
        let {page, categoryId} = req.query;
        page = page ?? 1;
        const limit = process.env.PAGE_LIMIT;
        const item = await Item.findAll({
            where: {
                categoryId: req.params['categoryId']
            }
        });
        return res.json(item);
    }

    async updateOne(req, res) {
        const {name, description, article, price, categoryId, gallery} = req.body;
        const item = await Item.update(
           {name, description, article, price, categoryId, gallery} ,
            {
               where: {
                id: req.params['id']
                }
            });
        return res.json(item);
    }

    async deleteOne(req, res) {
        const item = await Item.destroy({
            where: {
                id: req.params['id']
            }
        });
        return res.json(item);
    }
}

module.exports = new ItemController();

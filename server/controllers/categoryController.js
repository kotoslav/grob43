const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
    async createOne(req, res) {
        const {title, description, imgPath} = req.body;
        const category = await Category.create({title, description, imgPath});
        return res.json(category);
    }

    async readOne(req, res) {
        const category = await Category.findByPk(req.params['id']);
        return res.json(category);
    }

    async readAll(req, res) {
        const category = await Category.findAll();
        return res.json(category);
    }

    async updateOne(req, res) {
        const {title, description, imgPath} = req.body;
        const category = await Category.update({title, description, imgPath}, {
            where: {
                id: req.params['id']
            }
        });
        return res.json(category);
        //return res.json({status: "success"});

    }

    async deleteOne(req, res) {
        const category = await Category.destroy({
            where: {
                id: req.params['id']
            }
        });
        return res.json(category);
        //return res.json({status: "success"});

    }
}

module.exports = new CategoryController();

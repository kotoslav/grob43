const {Gallery} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const fs = require("fs");

class GalleryController {
    async createOne(req, res, next) {
        try {
            const img = req.files.img;
            let fileName = uuid.v4() + '.' + img.name.match(/\.([^.]+)$/)?.[1];
            img.mv(path.resolve(__dirname, '..', 'upload', fileName));
            return res.json({imgPath: `upload/${fileName}`});
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req, res, next) {
        let fileName;
        try {
            fileName = req.body.path.split("/").pop();
            fs.unlinkSync(path.resolve(__dirname, '..', 'upload', fileName));
        } catch (e) {
            console.log(e);
            return res.json({error: "Нет такого файла"});
        }
        return res.json({imgPath: `/upload/${fileName}`});
    }

}

module.exports = new GalleryController();

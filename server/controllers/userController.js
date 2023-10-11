const {User} = require('../models/models');
const ApiError = require('../error/ApiError');

class UserController {
    async login(req, res) {
        const {login, password} = req.body;

    }

    async check(req, res) {

    }

    async update(req, res) {

    }
}

module.exports = new UserController();

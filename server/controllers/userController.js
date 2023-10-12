const {User} = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '48h'}
    )
}

class UserController {
    async login(req, res, next) {
        const {login, password} = req.body;
        const user = await User.findOne({where: {login: login}});
        if (!user) {
            return next(ApiError.internal("Неверный логин или пароль"));
        };
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id);
        return res.json({token});
    }

    async update(req, res, next) {
        let {login, oldPassword, password} = req.body;
        let user = await User.findOne({where: {login: login}});
        if (!user) {
            return next(ApiError.internal("Нет такого пользователя"));
        };
        try {
        let comparePassword = bcrypt.compareSync(oldPassword, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        password = await bcrypt.hash(password, 5);
        user = await User.update({login, password}, {where: {login: login}});
        if (!user) {
            return next(ApiError.internal("Не удалось завершить операцию"));
        };
        return res.json({status: "Пароль успешно изменен!"});
        } catch (e) {
            console.log(e);
            return next(ApiError.internal("Все поля обязательны к заполнению"));
        }
    }
}

module.exports = new UserController();

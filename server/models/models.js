const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
});

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    article: {type: DataTypes.STRING, allowNull: false, unique: true},
    price: {type: DataTypes.INTEGER},
    categoryId: {type: DataTypes.INTEGER},
    mainImgPath: {type: DataTypes.STRING}
});

const Gallery = sequelize.define('gallery', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    path: {type: DataTypes.STRING},
    itemId: {type: DataTypes.INTEGER}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    imgPath: {type: DataTypes.STRING}
});

Item.hasMany(Gallery);
Gallery.belongsTo(Item);

Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = {
    User,
    Item,
    Gallery,
    Category
};

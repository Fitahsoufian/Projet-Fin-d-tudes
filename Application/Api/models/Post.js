   
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    title: {
        type: DataTypes.SMALLINT,
        allowNull: false

    },

    tescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:sequelize,
    modelName:"Post"
})


module.exports = Post
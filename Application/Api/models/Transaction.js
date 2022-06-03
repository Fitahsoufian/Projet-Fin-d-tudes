   
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Transaction extends Model {}

Transaction.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    journal: {
        type: DataTypes.STRING,
        allowNull: false

    },

    entitled: {
        type: DataTypes.STRING,
        allowNull: false
    },

    debit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    credit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    sequelize:sequelize,
    modelName:"Transaction"
})


module.exports = Transaction
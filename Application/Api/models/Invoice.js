   
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Invoice extends Model {}

Invoice.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    number: {
        type: DataTypes.INTEGER,
        allowNull: false

    },

    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Statement: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:sequelize,
    modelName:"Invoice"
})


module.exports = Invoice
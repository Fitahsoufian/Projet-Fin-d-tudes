const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(
    'compta',
    'root',
    null,
    {host: 'localhost', dialect: 'mysql'}
)


module.exports = sequelize
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('hammerdb', 'user', 'password', {
    host: 'db',
    dialect: 'mysql',
});

module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('hammerdb', 'user', 'password', {
    host: 'db',
    dialect: 'mysql',
});

module.exports = sequelize;

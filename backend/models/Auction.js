const Sequelize = require('sequelize');
const sequelize = require('../database');

const Auction = sequelize.define('auction', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sellerEmail:{
            type: Sequelize.STRING(320),
            allowNull: false
        },
        itemName:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        itemDescription:{
            type: Sequelize.STRING(10000),
            allowNull: false
        },
        lastPrice:{
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 }
        },
        lastBidderEmail:{
            type: Sequelize.STRING(320),
            allowNull: true
        },
    },
    {
        timestamps: false // Set timestamps to false
    }
);

module.exports = Auction;

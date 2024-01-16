const Sequelize = require('sequelize');
const sequelize = require('../database');

const Auction = sequelize.define('auction', {
    /*

| Field Name       | Data Type        | Constraints        | Description                                   |
|------------------|------------------|--------------------|-----------------------------------------------|
| id               | INT              | Primary Key, Auto-Increment | Unique identifier for each auction          |
| sellerEmail      | VARCHAR(320)     | Not Null           | Email address of the seller                  |
| itemName         | VARCHAR(100)     | Not Null           | Name of the auction item                     |
| itemDescription  | VARCHAR(10000)   | Not Null           | Description of the auction item              |
| lastPrice        | DECIMAL(10, 2)   | Not Null, Non-negative | Current highest bid price                 |
| lastBidderEmail  | VARCHAR(320)     | Nullable           | Email address of the current highest bidder  |
*/
    id: {
        tyep: Sequelize.INTEGER,
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
    }
}, {
    timestamps: false
});

module.exports = Auction;

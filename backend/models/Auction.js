module.exports = (sequelize, DataTypes) => {
    const Auction = sequelize.define('auction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sellerEmail: {
            type: DataTypes.STRING(320),
            allowNull: false,
            validate: { isEmail: true }
        },
        itemName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        itemDescription: {
            type: DataTypes.STRING(10000),
            allowNull: false,
            validate: { len: [0, 10000] }
        },
        lastPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 }
        },
        lastBidderEmail: {
            type: DataTypes.STRING(320),
            allowNull: true,
            validate: { isEmail: true }
        },
    }, {
        timestamps: false 
    });

    return Auction;
};

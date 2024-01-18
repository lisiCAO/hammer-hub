'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('auctions', {
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
          }     
        });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      await queryInterface.dropTable('auctions');
  }
};

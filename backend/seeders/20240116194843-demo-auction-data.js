'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('auctions', [
      {
        sellerEmail: 'seller@example.com',
        itemName: 'Vintage Lamp',
        itemDescription: 'A beautiful vintage lamp.',
        lastPrice: 100.00,
        lastBidderEmail: null,
      },
      // ...
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('auctions', null, {});
  }
};


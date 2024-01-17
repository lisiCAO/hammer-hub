'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('auctions', [
      {
        sellerEmail: 'seller@example.com',
        itemName: 'Vintage Lamp',
        itemDescription: 'A beautiful vintage lamp.',
        lastPrice: 100.00,
        lastBidderEmail: 'bider@email.com',
      },
      // Add 10 more records
      {
        sellerEmail: 'seller2@example.com',
        itemName: 'Antique Chair',
        itemDescription: 'An antique chair with intricate carvings.',
        lastPrice: 200.00,
        lastBidderEmail: 'bidder2@email.com',
      },
      {
        sellerEmail: 'seller3@example.com',
        itemName: 'Art Deco Vase',
        itemDescription: 'A stunning art deco vase.',
        lastPrice: 150.00,
        lastBidderEmail: 'bidder3@email.com',
      },
      // Add 7 more records
      {
        sellerEmail: 'seller4@example.com',
        itemName: 'Vintage Watch',
        itemDescription: 'A classic vintage watch.',
        lastPrice: 300.00,
        lastBidderEmail: 'bidder4@email.com',
      },
      {
        sellerEmail: 'seller5@example.com',
        itemName: 'Collectible Coins',
        itemDescription: 'A set of rare collectible coins.',
        lastPrice: 250.00,
        lastBidderEmail: 'bidder5@email.com',
      },
      {
        sellerEmail: 'seller6@example.com',
        itemName: 'Oil Painting',
        itemDescription: 'An exquisite oil painting.',
        lastPrice: 500.00,
        lastBidderEmail: 'bidder6@email.com',
      },
      {
        sellerEmail: 'seller7@example.com',
        itemName: 'Vintage Camera',
        itemDescription: 'A vintage camera with great condition.',
        lastPrice: 400.00,
        lastBidderEmail: 'bidder7@email.com',
      },
      {
        sellerEmail: 'seller8@example.com',
        itemName: 'Designer Handbag',
        itemDescription: 'A designer handbag in excellent condition.',
        lastPrice: 350.00,
        lastBidderEmail: 'bidder8@email.com',
      },
      {
        sellerEmail: 'seller9@example.com',
        itemName: 'Rare Book',
        itemDescription: 'A rare book with historical significance.',
        lastPrice: 450.00,
        lastBidderEmail: 'bidder9@email.com',
      },
      {
        sellerEmail: 'seller10@example.com',
        itemName: 'Vintage Vinyl Records',
        itemDescription: 'A collection of vintage vinyl records.',
        lastPrice: 200.00,
        lastBidderEmail: 'bidder10@email.com',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('auctions', null, {});
  }
};


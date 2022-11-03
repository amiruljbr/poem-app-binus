'use strict';
const products = require('../products');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let seeds = products.map(item=>{
      return {
        name: item.name,
        image_url: item.image_url,
        price: item.price,
        stock: item.stock,
        category: item.category,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })    
    return queryInterface.bulkInsert('Products', seeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
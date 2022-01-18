const ratings = [
  {
    userId: 1,
    restaurantId: 1,
    score: 5,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 2,
    score: 3,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 3,
    score: 4,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 4,
    score: 3,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 5,
    score: 4,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 6,
    score: 2,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ratings', ratings, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
};

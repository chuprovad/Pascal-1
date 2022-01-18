const reservations = [
  {
    userId: 1,
    restaurantId: 1,
    createdAt: '15/01/2022',
    updatedAt: '15/01/2022',
  },
  {
    userId: 1,
    restaurantId: 2,
    createdAt: '16/01/2022',
    updatedAt: '16/01/2022',
  },
  {
    userId: 2,
    restaurantId: 3,
    createdAt: '17/01/2022',
    updatedAt: '17/01/2022',
  },
  {
    userId: 2,
    restaurantId: 4,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', reservations, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations', null, {});
  },
};

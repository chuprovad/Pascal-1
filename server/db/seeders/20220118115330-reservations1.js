const reservations = [
  {
    userId: 1,
    restaurantId: 1,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    userId: 1,
    restaurantId: 2,
    createdAt: '2022-01-17 21:30:24.393 +0300',
    updatedAt: '2022-01-17 21:30:24.393 +0300',
  },
  {
    userId: 2,
    restaurantId: 3,
    createdAt: '2022-01-18 21:30:24.393 +0300',
    updatedAt: '2022-01-18 21:30:24.393 +0300',
  },
  {
    userId: 2,
    restaurantId: 4,
    createdAt: '2022-01-14 21:30:24.393 +0300',
    updatedAt: '2022-01-14 21:30:24.393 +0300',
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

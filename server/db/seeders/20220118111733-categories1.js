const categories = [
  {
    title: 'Bar',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Restaurant',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Coffee shop',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Cafe',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Burgers',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

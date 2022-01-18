const cuisines = [
  {
    title: 'Italian',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'French',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Japanese',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Irish',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Russian',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    title: 'Belgian',
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cuisines', cuisines, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cuisines', null, {});
  },
};

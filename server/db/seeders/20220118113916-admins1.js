const admins = [
  {
    name: 'admin1',
    email: 'admin1@mail.ru',
    password: '$2a$11$Ai.G5Yi.YcSwBe9DvO8VUuGVj454.2XiGy5TTqJdLjGQitOcLqJiS',
    restaurantId: 1,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    name: 'admin2',
    email: 'admin2@mail.ru',
    password: '$2a$11$/fGIKfHGTGt0xNHQpz4XhOErbyjVT7GGXGGY.PSWXtxx4Q3Q16T/y',
    restaurantId: 2,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', admins, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};


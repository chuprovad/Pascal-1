const admins = [
  {
    name: 'admin1',
    email: 'admin1@mail.ru',
    password: '$2a$11$Ai.G5Yi.YcSwBe9DvO8VUuGVj454.2XiGy5TTqJdLjGQitOcLqJiS',
    restaurantId: 1,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    name: 'admin2',
    email: 'admin2@mail.ru',
    password: '$2a$11$/fGIKfHGTGt0xNHQpz4XhOErbyjVT7GGXGGY.PSWXtxx4Q3Q16T/y',
    restaurantId: 2,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
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


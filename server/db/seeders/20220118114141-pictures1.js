const pictures = [
  {
    path: 'https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg',
    restaurantId: 1,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2017/04/07/01/01/bar-2209813_1280.jpg',
    restaurantId: 1,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2018/05/17/00/17/bar-3407484_1280.jpg',
    restaurantId: 2,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2020/03/18/21/47/ireland-4945565_1280.jpg',
    restaurantId: 2,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg',
    restaurantId: 3,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_1280.jpg',
    restaurantId: 4,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2014/07/31/21/37/bar-406884_1280.jpg',
    restaurantId: 5,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_1280.jpg',
    restaurantId: 6,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg',
    restaurantId: 7,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg',
    restaurantId: 8,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg',
    restaurantId: 9,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg',
    restaurantId: 10,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg',
    restaurantId: 11,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285_1280.jpg',
    restaurantId: 12,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
  {
    path: 'https://cdn.pixabay.com/photo/2021/04/22/02/36/barista-6197867_1280.jpg',
    restaurantId: 1,
    createdAt: '18/01/2022',
    updatedAt: '18/01/2022',
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pictures', pictures, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pictures', null, {});
  },
};

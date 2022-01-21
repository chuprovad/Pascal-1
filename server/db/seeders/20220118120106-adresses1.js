const adresses = [
  {
    city: 'Moscow',
    street: 'Verkhnyaya Radishchevskaya',
    building: 15,
    latitude: 55.743441,
    longitude: 37.652175,
    restaurantId: 1,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Zatsepa',
    building: 21,
    latitude: 55.729594,
    longitude: 37.633023,
    restaurantId: 2,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Pyatnitskiy pereulok',
    building: 1,
    latitude: 55.743385, 
    longitude: 37.629502,
    restaurantId: 3,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Kotelnicheskaya naberezhnaya',
    building: 1,
    latitude: 55.747951,
    longitude: 37.643821,
    restaurantId: 4,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Pyatnitskaya ulitsa',
    building: 1,
    latitude: 55.741267,
    longitude: 37.628280,
    restaurantId: 5,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Vozdvizhenka',
    building: 1,
    latitude: 55.752186,
    longitude: 37.611428,
    restaurantId: 6,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Bolshaya Dmitrovka',
    building: 22,
    latitude: 55.763462,
    longitude: 37.613269,
    restaurantId: 7,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Prospekt Mira',
    building: 12,
    latitude: 55.774072,
    longitude: 37.633230,
    restaurantId: 8,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Pokrovka',
    building: 16,
    latitude: 55.759157,
    longitude: 37.645708,
    restaurantId: 9,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Neglinnaya',
    building: 8,
    latitude: 55.761335,
    longitude: 37.620690,
    restaurantId: 10,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Myasnitskaya',
    building: 40,
    latitude: 55.766415,
    longitude: 37.640605,
    restaurantId: 11,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Staryy Tolmachovskiy pereulok',
    building: 1,
    latitude: 55.739929, 
    longitude: 37.632853,
    restaurantId: 12,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Pyatnitskaya',
    building: 5,
    latitude: 55.745159, 
    longitude: 37.627337,
    restaurantId: 13,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },
  {
    city: 'Moscow',
    street: 'Ordzhonikidze',
    building: 11,
    latitude: 55.706573,
    longitude: 37.597091,
    restaurantId: 14,
    createdAt: '2022-01-16 21:30:24.393 +0300',
    updatedAt: '2022-01-16 21:30:24.393 +0300',
  },


]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Adresses', adresses, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Adresses', null, {});
  },
};

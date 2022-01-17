const { Adress, Category, Cuisine, Rating, Restaurant, Reservation, Picture } = require('../db/models')

const getAllRestaurant = async (req, res) => {
  const search = req.body.title
  const allRestaurants = await Restaurant.findAll({ where: { title: { [Op.iLike]: `%${search}%` } } })
  setTimeout(() => {
    res.json({ allRestaurants })
  }, 2000)
}

const getCurrentRestaurant = async (req, res) => {
  const { id } = req.params;

  const currentRestaurant = await Restaurant.findByPk(id, {
    include: [
      {
        model: Adress,
        attributes: ['city', 'street', 'building', 'latitude', 'longitude',],
      },
      {
        model: Category,
        attributes: ['id', 'title'],
      },
      {
        model: Cuisine,
        attributes: ['id', 'title'],
      },
    ],
    raw: true,
  });

  const currentRestaurantPicures = await Picture.findAll({
    where: { restaurantId: id },
    attributes: ['path'],
    raw: true
  })

  const currentRestaurantRating = await Rating.findAll({
    where: { restaurantId: id },
    attributes: ['score'],
    raw: true
  })

  // console.log('currentRestaurant', currentRestaurant);
  // console.log('currentRestaurantRating', currentRestaurantRating);

  const currentRestaurantData = {
    ...currentRestaurant,
    category: currentRestaurant['Category.title'],
    cuisine: currentRestaurant['Cuisine.title'],
    address: `${currentRestaurant['Adress.city']}, ${currentRestaurant['Adress.street']} ${currentRestaurant['Adress.building']}`,
    pictures: currentRestaurantPicures,
    rating: currentRestaurantRating.map((el) => el.score)
  };
  console.log('currentRestaurantData ===>', currentRestaurantData);
  res.json(currentRestaurantData);
}

const addRating = async (req, res) => {
  console.log('req.params ---> ', req.params);
  console.log('req.body ===> )', req.body);
  const { id } = req.params
  const { score } = req.body
  console.log(req.session);
  const result = await Rating.create({ userId: req.session.user.id, restaurantId: id, score })

  const updatedRatingFromDB = await Restaurant.findByPk(id)
  console.log('updatedRatingFromDB --->', updatedRatingFromDB);

  res.json(updatedRatingFromDB)
}

const addReservation = async (req, res) => {
  console.log('req.params ---> ', req.params);
  const { id } = req.params
  const result = await Restaurant.increment({ bookedTables: 1 }, { where: id })

  const updatedBookedTables = await Restaurant.findByPk(id,)
  console.log('updatedRatingFromDB --->', updatedRatingFromDB);

  res.json(updatedBookedTables)
}
module.exports = {
  getAllRestaurant,
  getCurrentRestaurant,
  addRating,
  addReservation
}

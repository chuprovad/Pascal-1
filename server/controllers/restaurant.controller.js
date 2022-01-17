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

  const currentRestaurantData = {
    ...currentRestaurant,
    category: currentRestaurant['Category.title'],
    cuisine: currentRestaurant['Cuisine.title'],
    address: `${currentRestaurant['Adress.city']}, ${currentRestaurant['Adress.street']} ${currentRestaurant['Adress.building']}`,
    pictures: currentRestaurantPicures,
    rating: currentRestaurantRating.map((el) => el.score)
  };

  res.json(currentRestaurantData);
}

const addRating = async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  try {
    const result = await Rating.create({ userId: req.session.user.id, restaurantId: id, score });

    const currentRestaurantRating = await Rating.findAll({
      where: { restaurantId: id },
      attributes: ['score'],
      raw: true
    })

    const rating = currentRestaurantRating.map((el) => el.score);
    res.json(rating);
  } catch (error) {
    console.log(error);
  }

}

const addReservation = async (req, res) => {
  const { id } = req.params;
  try {
    await Restaurant.increment('bookedTables', { where: { id: Number(id) } });

    const updatedRestaurantData = await Restaurant.findByPk(id, { raw: true });

    res.json(updatedRestaurantData.bookedTables);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllRestaurant,
  getCurrentRestaurant,
  addRating,
  addReservation
}

const {Restaurant,Rating,Adress} = require('../db/models')

const getAllRestaurantSearch = async (req, res) => {
  const search = req.body.title
  const allRestaurants = await Restaurant.findAll({where:{ title:{[Op.iLike]: `%${search}%`}}})
  setTimeout(() => {
    res.json({allRestaurants})
  }, 2000)
}

const getAllRestaurantsAdresses = async (req, res) => {
  const aresses = await Adress.findAll({attributes: ['latitude', 'longitude'],raw:true})
  // console.log('aresses',aresses)
    res.json({aresses})
}

const getCurrentRestaurant = async(req, res) => {
  const {id} = req.params
  const currentRestaurant = await Restaurant.findByPk(id)
  res.json(currentRestaurant);
}

const getVisibleRestaurants = async(req, res) => {
  console.log('$$$', req.body)
}

const addRating = async (req, res) => {
  // console.log('req.params ---> ', req.params);
  // console.log('req.body ===> )', req.body);
  const {id} = req.params
  const {score} = req.body
  const result = await Rating.create({userId: req.session.user.id, restaurantId: id, score })

  const updatedRatingFromDB = await Restaurant.findByPk(id)
  // console.log('updatedRatingFromDB --->', updatedRatingFromDB);

  res.json(updatedRatingFromDB)
}

const addReservation = async(req, res) => {
  // console.log('req.params ---> ', req.params);
  const {id} = req.params
  const result = await Restaurant.increment({bookedTables: 1}, {where: id} )

  const updatedBookedTables = await Restaurant.findByPk(id, )
  // console.log('updatedRatingFromDB --->', updatedRatingFromDB);

  res.json(updatedBookedTables)
}
module.exports = {
  getAllRestaurantSearch,
  getCurrentRestaurant,
  addRating,
  addReservation,
  getAllRestaurantsAdresses,
  getVisibleRestaurants
}

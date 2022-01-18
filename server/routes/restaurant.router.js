const { Router } = require('express')
const {
  getAllRestaurantSearch, getVisibleRestaurants, getAllRestaurantsAdresses, addRating,
  getCurrentRestaurant, addReservation, getAllRestaurantsApp
} = require('../controllers/restaurant.controller')

const restRouter = Router()

restRouter.get('/', getAllRestaurantSearch)
restRouter.get('/allrests', getAllRestaurantsApp)
restRouter.get('/map', getAllRestaurantsAdresses)
restRouter.post('/all', getVisibleRestaurants) //katya
restRouter.get("/:id", getCurrentRestaurant)
restRouter.post("/:id/rating", addRating)
restRouter.put("/:id/reservation", addReservation)

module.exports = restRouter

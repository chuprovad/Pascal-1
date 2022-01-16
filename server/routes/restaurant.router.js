const { Router } = require('express')
const { getAllRestaurant, addRating, getCurrentRestaurant, addReservation } = require('../controllers/restaurant.controller')

const restRouter = Router()

restRouter.get('/', getAllRestaurant)
restRouter.get("/:id", getCurrentRestaurant)
restRouter.post("/:id/rating", addRating)
restRouter.put("/:id/reservation", addReservation)

module.exports = restRouter

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Restaurant, Reservation, Rating}) {

      this.belongsToMany(Restaurant, {through: Rating, foreignKey: 'userId', otherKey: 'restaurantId', constraints: false, as: 'rating'}),
          this.belongsToMany(Restaurant, {through: Reservation, foreignKey: 'userId', otherKey: 'restaurantId', constraints: false, as: 'reserv'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

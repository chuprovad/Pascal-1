'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate({Category, Picture, Admin, User, Reservation, Rating, Cuisine, Adress}) {
      this.belongsTo(Category, {foreignKey: 'categoryId'}),
	    this.belongsTo(Cuisine, {foreignKey: 'cuisineId'}),
      this.hasMany(Picture, {foreignKey: 'restaurantId'}),
      this.hasOne(Admin, {foreignKey: 'restaurantId'}),
	    this.hasOne(Adress, {foreignKey: 'restaurantId'}),
      this.hasMany(User, {throught: Reservation, foreignKey: 'restaurantId'}),
      this.hasMany(User, {throught: Rating, foreignKey: 'restaurantId'})
    }
  };
  Restaurant.init({
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    cuisineId: DataTypes.INTEGER,
    avarageCoast: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    bookedTables: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};

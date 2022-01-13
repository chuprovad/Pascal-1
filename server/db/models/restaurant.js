'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category, Picture, Admin, User, Reservation, Rating}) {
      this.belongsTo(Category, {foreignKey: 'category'}),
      this.hasMany(Picture, {foreignKey: 'restaurantId'}),
      this.hasOne(Admin, {foreignKey: 'restaurantId'}),
      this.hasMany(User, {throught: Reservation, foreignKey: 'restaurantId'}),
      this.hasMany(User, {throught: Rating, foreignKey: 'restaurantId'})
    }
  };
  Restaurant.init({
    title: DataTypes.STRING,
    category: DataTypes.INTEGER,
    cuisine: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    bookedTables: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};

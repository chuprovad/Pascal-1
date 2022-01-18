'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisine extends Model {
    static associate({Restaurant}) {
     this.hasMany(Restaurant, {foreignKey: 'cuisineId'})
   }
 };
  Cuisine.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cuisine',
  });
  return Cuisine;
};

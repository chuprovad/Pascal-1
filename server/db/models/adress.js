'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    static associate({Restaurant}) {
      this.belongsTo(Restaurant, {foreignKey: 'restaurantId'})
    }
  };
  Adress.init({
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    building: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};

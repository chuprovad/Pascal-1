'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate({Restaurant}) {
      this.belongsTo(Restaurant, {foreignKey: 'restaurantId'})
    }
  };
  Picture.init({
    path: DataTypes.TEXT,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({Restaurant}) {
     this.hasMany(Restaurant, {foreignKey: 'categoryId'})
   }
 };
  Category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};

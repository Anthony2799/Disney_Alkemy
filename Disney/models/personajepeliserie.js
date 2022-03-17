'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonajePeliSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonajePeliSerie.init({
    idPersonaje: DataTypes.INTEGER,
    idPeliculaSerie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PersonajePeliSerie',
  });
  return PersonajePeliSerie;
};
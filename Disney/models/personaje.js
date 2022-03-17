'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personaje.belongsToMany(models.PeliculaSerie,{
        through : "PersonajePeliSerie",
        as: "peliculaserie",
        foreignKey: "idPeliculaSerie"
      })
    }
  }
  Personaje.init({
    imagen: DataTypes.STRING,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.STRING,
    idPeliculaSerie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    /*  Genero.hasMany(models.PeliculaSerie, {
        // Le pasamos un objeto que es la foreignKey
        //foreignKey:''
      });*/
    }
  }
  Genero.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    idPeliculaSerie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PeliculaSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Creamos la conección con la tabla
      PeliculaSerie.hasMany(models.Genero,{
        foreignKey:'idPeliculaSerie',
        //nombre de la tabla en la base de datos pluralisada
        as:'generos'
      });
    
      PeliculaSerie.belongsToMany(models.Personaje,{
        through : "PersonajePeliSerie",
        as: "personajes",
        foreignKey: "idPersonaje"
      })
    
    }

  }
  PeliculaSerie.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    idPersonaje: DataTypes.INTEGER,
    field: pelicula_serie,
  }, {
    sequelize,
    modelName: 'PeliculaSerie',
  });
  return PeliculaSerie;
};